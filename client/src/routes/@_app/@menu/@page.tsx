import { Route as RootRoute } from "@/routes/@__root";
import { Await, createFileRoute } from "@tanstack/react-router";
import LoyaltyCard from "./loyalty-card";
import { LoaderMenuHeader, MenuHeader, MenuHeaderAnnon } from "./menu-header";

export const Route = createFileRoute("/_app/menu/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { authStatePromise } = RootRoute.useLoaderData();

  return (
    <main className=" flex justify-center items-center p-3  ">
      <div className=" w-full max-w-md flex flex-col ">
        <Await promise={authStatePromise} fallback={<LoaderMenuHeader />}>
          {({ data }) => (data ? <MenuHeader authState={data} /> : <MenuHeaderAnnon />)}
        </Await>

        <LoyaltyCard total={4} />
      </div>
    </main>
  );
}
