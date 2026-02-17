import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Route as RootRoute } from "@/routes/@__root";
import { IconChevronLeft } from "@tabler/icons-react";
import { Await, createFileRoute, useCanGoBack, useRouter } from "@tanstack/react-router";
import { PhotoProfile, PhotoProfileLoader } from "./photo-profile";
import ProfileInfo from "./profile-info";

export const Route = createFileRoute("/_app/_private/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { authStatePromise } = RootRoute.useLoaderData();

  const router = useRouter();
  const canGoBack = useCanGoBack();

  function handleBack() {
    if (canGoBack) {
      router.history.back();
    }
  }

  return (
    <main className=" flex flex-col justify-center items-center  ">
      <div className=" border border-border w-full">
        <Button className={"text-[16px]"} variant={"ghost"} size={"lg"} onClick={handleBack}>
          <IconChevronLeft />
          Perfil
        </Button>
      </div>
      <div className=" mt-10 w-full max-w-md flex items-center flex-col ">
        <Await promise={authStatePromise} fallback={<PhotoProfileLoader />}>
          {({ data }) => <PhotoProfile authState={data} />}
        </Await>

        <Await promise={authStatePromise} fallback={<Skeleton />}>
          {({ data }) => <ProfileInfo authState={data} />}
        </Await>
      </div>
    </main>
  );
}
