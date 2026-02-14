import { APP_NAME } from "@/common/constants/metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/auth/sign-up/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: `${APP_NAME} | Cadastrar-se` }],
  }),
});

function RouteComponent() {
  return <div>Hello "/_public/sign-up/"!</div>;
}
