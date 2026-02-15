import { APP_NAME } from "@/common/constants/metadata";
import { Button } from "@/components/ui/button";
import { FieldSeparator } from "@/components/ui/field";
import { createFileRoute, Link } from "@tanstack/react-router";
import SignInEmailForm from "./sign-in-email.form";
import SignInSocial from "./sign-in-social";

export const Route = createFileRoute("/_public/auth/sign-in/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: `${APP_NAME} | Entrar` }],
  }),
});

function RouteComponent() {
  return (
    <main className=" flex flex-col items-center  p-2 ">
      <div className=" items-center space-y-6 w-full max-w-md ">
        <div className="  w-full text-left ">
          <h1 className=" font-semibold text-2xl ">Entrar</h1>
          <span className=" text-muted-foreground ">Bem vindo novamente</span>
        </div>

        <SignInEmailForm />

        <div>
          <FieldSeparator>ou</FieldSeparator>
        </div>

        <SignInSocial />

        <span className=" text-sm text-muted-foreground ">
          Não tem uma conta?
          <Link to="/auth/sign-up">
            <Button variant={"link"}>Clique aqui</Button>
          </Link>
        </span>
      </div>
    </main>
  );
}
