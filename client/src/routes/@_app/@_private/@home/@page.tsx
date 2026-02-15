import { APP_NAME } from "@/common/constants/metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_private/home/")({
  component: RouteComponent,
  head: ({}) => ({
    meta: [{ title: `${APP_NAME} | Inicío` }],
  }),
});

function RouteComponent() {
  return <div>Hello "/_private/home/"!</div>;
}
