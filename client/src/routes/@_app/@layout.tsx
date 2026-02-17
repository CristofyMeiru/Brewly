import { createFileRoute, Outlet } from "@tanstack/react-router";
import { TabNavigator } from "./tab-navigator";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative min-h-screen ">
      <main className="pb-20">
        <Outlet />
      </main>

      <TabNavigator />
    </div>
  );
}
