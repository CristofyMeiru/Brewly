import { APP_NAME } from "@/common/constants/metadata";
import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [{ title: APP_NAME }, { name: "theme-color", content: "#eb4034" }],
  }),
});

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeadContent />

      <div className="flex-1">
        <Outlet />
      </div>

      <Scripts />
      <TanStackRouterDevtools />
    </div>
  );
}
