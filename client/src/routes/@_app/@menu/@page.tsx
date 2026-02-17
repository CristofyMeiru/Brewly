import { Route as RootRoute } from "@/routes/@__root";
import { loyaltyService } from "@/shared/services/loyalty.service";
import { Await, createFileRoute, defer } from "@tanstack/react-router";
import { LoyaltyCard, LoyaltyCardLoader } from "./loyalty-card";
import { LoaderMenuHeader, MenuHeader, MenuHeaderAnnon } from "./menu-header";

export const Route = createFileRoute("/_app/menu/")({
  component: RouteComponent,
  loader: ({ context }) => {
    const loyaltyPointsPromise = context.queryClient.ensureQueryData({
      queryKey: ["loyalty", "points"],
      queryFn: () => loyaltyService.getPoints(),
    });

    return {
      loyaltyPointsPromise: defer(loyaltyPointsPromise),
    };
  },
});

function RouteComponent() {
  const { authStatePromise } = RootRoute.useLoaderData();
  const { loyaltyPointsPromise } = Route.useLoaderData();

  return (
    <main className=" flex justify-center items-center p-3  ">
      <div className=" w-full max-w-md flex flex-col ">
        <Await promise={authStatePromise} fallback={<LoaderMenuHeader />}>
          {({ data }) => (data ? <MenuHeader authState={data} /> : <MenuHeaderAnnon />)}
        </Await>

        <Await promise={loyaltyPointsPromise} fallback={<LoyaltyCardLoader />}>
          {(points) => <LoyaltyCard total={points} />}
        </Await>
      </div>
    </main>
  );
}
