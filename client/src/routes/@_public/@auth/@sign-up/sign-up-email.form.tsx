import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { IconEye, IconEyeClosed, IconLock, IconMail, IconUser, IconUserPlus } from "@tabler/icons-react";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { SignUpEmailSchema, type SignUpEmail } from "./sign-up-email.schema";

const defaultValues: SignUpEmail & { confirmPassword: string } = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpEmailForm() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const form = useForm({
    defaultValues,
    validators: {
      onChange: SignUpEmailSchema,
    },
    onSubmit: async ({ value }) => {
      const { confirmPassword, ...data } = value;
      console.log("Criando conta:", data);
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
        name="name"
        children={(field) => {
          const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

          return (
            <Field data-invalid={isInvalid}>
              <FieldLabel htmlFor={field.name}>Nome completo</FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <IconUser />
                </InputGroupAddon>
                <InputGroupInput
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="Seu nome completo"
                  autoComplete="off"
                />
              </InputGroup>
              <FieldError errors={field.state.meta.errors} />
            </Field>
          );
        }}
      />

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
              <FieldLabel htmlFor={field.name}>Senha</FieldLabel>
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
                  placeholder="Crie uma senha"
                  autoComplete="off"
                />
                <InputGroupButton type="button" onClick={() => setShowPass((v) => !v)}>
                  {showPass ? <IconEye /> : <IconEyeClosed />}
                </InputGroupButton>
              </InputGroup>
              <FieldError errors={field.state.meta.errors} />
            </Field>
          );
        }}
      />

      <form.Field
        name="confirmPassword"
        children={(field) => {
          const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

          return (
            <Field data-invalid={isInvalid}>
              <FieldLabel htmlFor={field.name}>Confirmar senha</FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <IconLock />
                </InputGroupAddon>
                <InputGroupInput
                  id={field.name}
                  type={showConfirmPass ? "text" : "password"}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="Confirme sua senha"
                  autoComplete="off"
                />
                <InputGroupButton type="button" onClick={() => setShowConfirmPass((v) => !v)}>
                  {showConfirmPass ? <IconEye /> : <IconEyeClosed />}
                </InputGroupButton>
              </InputGroup>
              <FieldError errors={field.state.meta.errors} />
            </Field>
          );
        }}
      />

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button type="submit" className="w-full" disabled={!canSubmit || isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner />
              </>
            ) : (
              <>
                <IconUserPlus /> Criar conta
              </>
            )}
          </Button>
        )}
      />
    </form>
  );
}
