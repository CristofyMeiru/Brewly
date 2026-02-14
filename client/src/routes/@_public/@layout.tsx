import { createFileRoute, Outlet } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_public")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <React.Fragment>
      publico
      <Outlet />
    </React.Fragment>
  );
}
