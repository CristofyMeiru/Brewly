import { authClient } from "@/lib/auth-client";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_app/_admin")({
  component: RouteComponent,
  beforeLoad: async () => {
    const { data, error } = await authClient.admin.hasPermission({ permission: { generics: ["access-panel"] } });

    if (error) throw error;

    if (!data.success) throw redirect({ to: "/menu" });
  },
});

function RouteComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
