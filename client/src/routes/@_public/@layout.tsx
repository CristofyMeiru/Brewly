import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_public")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="text-center text-sm text-zinc-500 py-8 border-t">
        © {new Date().getFullYear()} Brewly. Todos os direitos reservados.
      </footer>
    </div>
  );
}
