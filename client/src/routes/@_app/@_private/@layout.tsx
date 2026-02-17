import { authService } from "@/shared/services/auth.service";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_app/_private")({
  beforeLoad: async ({ context }) => {
    const { data: auth } = await context.queryClient.ensureQueryData({
      queryKey: ["auth-state"],
      queryFn: () => authService.getSession(),
    });

    if (!auth?.session || !auth?.user) {
      throw redirect({
        to: "/auth/sign-in",
      });
    }

    return {
      auth: auth as { session: NonNullable<typeof auth.session>; user: NonNullable<typeof auth.user> },
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
