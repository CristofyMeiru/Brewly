import { createFileRoute, Outlet } from "@tanstack/react-router";
import React from "react";
import { TabNavigator } from "./tab-navigator";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <TabNavigator />
    </React.Fragment>
  );
}
