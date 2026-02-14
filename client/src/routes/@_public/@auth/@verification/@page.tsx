import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/auth/verification/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_public/verification/"!</div>;
}
