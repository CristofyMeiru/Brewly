import { APP_NAME } from "@/common/constants/metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/auth/forgot-password/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: `${APP_NAME} | Esqueci a senha` }],
  }),
});

function RouteComponent() {
  return <div>Hello "/_public/forgot-password/"!</div>;
}
