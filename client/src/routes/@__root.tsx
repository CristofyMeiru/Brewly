import { APP_NAME } from "@/common/constants/metadata";
import { authService } from "@/shared/services/auth.service";
import type { QueryClient } from "@tanstack/react-query";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext, defer } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { Session } from "better-auth";
import type { UserWithRole } from "better-auth/plugins";

export type AuthState = {
  session: Session;
  user: UserWithRole;
};

interface RouterContext {
  queryClient: QueryClient;
  authState?: AuthState;
}

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

      <Scripts />
      <TanStackRouterDevtools />
    </div>
  );
}
