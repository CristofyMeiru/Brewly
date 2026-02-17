import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { IconEye, IconEyeClosed, IconLock, IconLogin2, IconMail } from "@tabler/icons-react";
import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { signInEmailSchema, type SignInEmail } from "./sign-in-email.schema";
import { useSignInPageActions } from "./sign-in.actions";

const defaultValues: SignInEmail = { email: "", password: "", rememberMe: false };

export default function SignInEmailForm() {
  const [showPass, setShowPass] = useState<boolean>(false);

  const { signInEmailMutation } = useSignInPageActions();

  const form = useForm({
    defaultValues,
    validators: {
      onChange: signInEmailSchema,
    },
    onSubmit: async ({ value }) => {
      signInEmailMutation.mutate(value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-4 w-full"
    >
      <form.Field
        name="email"
        children={(field) => {
          const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <IconMail />
                </InputGroupAddon>
                <InputGroupInput
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="m@example.com"
                  autoComplete="off"
                />
              </InputGroup>
              <FieldError errors={field.state.meta.errors} />
            </Field>
          );
        }}
      />

      <form.Field
        name="password"
        children={(field) => {
          const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid}>
              <div className=" flex justify-between ">
                <FieldLabel htmlFor={field.name}>Senha</FieldLabel>
                <Link to="/auth/forgot-password">
                  <Button variant={"link"}>Esqueceu a senha?</Button>
                </Link>
              </div>
              <InputGroup>
                <InputGroupAddon>
                  <IconLock />
                </InputGroupAddon>
                <InputGroupInput
                  id={field.name}
                  type={showPass ? "text" : "password"}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="Informe sua senha"
                  autoComplete="off"
                />
                <InputGroupButton onClick={() => setShowPass((v) => !v)}>
                  {showPass ? <IconEye /> : <IconEyeClosed />}
                </InputGroupButton>
              </InputGroup>
              <FieldError errors={field.state.meta.errors} />
            </Field>
          );
        }}
      />

      <form.Field
        name="rememberMe"
        children={(field) => (
          <Field orientation={"horizontal"}>
            <Checkbox
              onCheckedChange={(value) => {
                field.setValue(value);
              }}
              id={field.name}
              name={field.name}
            />
            <FieldLabel htmlFor={field.name}>Lembre-se de mim</FieldLabel>
          </Field>
        )}
      />

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button type="submit" size={"lg"} className="w-full" disabled={!canSubmit || isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner />
              </>
            ) : (
              <React.Fragment>
                <IconLogin2 /> Entrar
              </React.Fragment>
            )}
          </Button>
        )}
      />
    </form>
  );
}
