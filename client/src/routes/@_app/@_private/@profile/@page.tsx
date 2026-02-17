import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_private/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className=" flex justify-center items-center p-3  ">
      <div className=" w-full max-w-md flex items-center flex-col "></div>
    </main>
  );
}
