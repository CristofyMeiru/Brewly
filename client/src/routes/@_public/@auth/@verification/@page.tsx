import { APP_NAME } from "@/common/constants/metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/auth/verification/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: `${APP_NAME} | Verificação` }],
  }),
});

function RouteComponent() {
  return <div>Hello "/_public/verification/"!</div>;
}
