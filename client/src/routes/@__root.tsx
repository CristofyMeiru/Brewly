import { APP_NAME } from "@/common/constants/metadata";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [{ title: APP_NAME }],
  }),
});

function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <Outlet />
      <Scripts />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
