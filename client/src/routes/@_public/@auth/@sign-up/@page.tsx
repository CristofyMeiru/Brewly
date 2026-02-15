import { APP_NAME } from "@/common/constants/metadata";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import SignUpEmailForm from "./sign-up-email.form";

export const Route = createFileRoute("/_public/auth/sign-up/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: `${APP_NAME} | Cadastrar-se` }],
  }),
});

function RouteComponent() {
  return (
    <main className=" min-h-screen flex flex-col items-center justify-center p-2 ">
      <div className=" items-center space-y-6 w-full max-w-md ">
        <div className="  w-full text-left ">
          <h1 className=" font-semibold text-2xl ">Criar conta</h1>
          <span className=" text-muted-foreground ">Preencha as informações para criar a conta</span>
        </div>

        <SignUpEmailForm />

        <span className=" text-sm text-muted-foreground ">
          Já tem uma conta?{" "}
          <Link to="/auth/sign-in">
            <Button variant={"link"}>Clique aqui</Button>
          </Link>
        </span>
      </div>
    </main>
  );
}
