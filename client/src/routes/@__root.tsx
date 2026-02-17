import { APP_NAME } from "@/common/constants/metadata";
import { authService } from "@/shared/services/auth.service";
import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext, defer } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { Session } from "better-auth";
import type { UserWithRole } from "better-auth/plugins";

export type AuthState = {
  session: Session;
  user: UserWithRole;
};

interface RouterContext {
  queryClient: QueryClient;
}

const plugins = [
  {
    name: "TanStack Query",
    render: <ReactQueryDevtoolsPanel />,
    defaultOpen: true,
  },
  {
    name: "TanStack Router",
    render: <TanStackRouterDevtoolsPanel />,
    defaultOpen: false,
  },
];

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  head: () => ({
    meta: [{ title: APP_NAME }, { name: "theme-color", content: "#eb4034" }],
  }),
  loader: ({ context }) => {
    const authStatePromise = context.queryClient.ensureQueryData({
      queryKey: ["auth-state"],
      queryFn: () => authService.getSession(),
    });

    return {
      authStatePromise: defer(authStatePromise),
    };
  },
});

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeadContent />

      <div className="flex-1">
        <Outlet />
      </div>

      <TanStackDevtools config={{ position: "bottom-left", hideUntilHover: true }} plugins={plugins} />
      <Scripts />
    </div>
  );
}
