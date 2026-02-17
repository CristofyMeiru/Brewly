import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconChevronLeft } from "@tabler/icons-react";
import { createFileRoute, Outlet, useCanGoBack, useRouter } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_public/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const canGoBack = useCanGoBack();

  function handleBack() {
    if (canGoBack) {
      router.history.back();
    }
  }

  return (
    <React.Fragment>
      <header className=" flex items-center justify-center ">
        <div className=" w-full max-w-lg ">
          <Button className={"text-[16px]  "} size={"lg"} onClick={handleBack} variant={"ghost"}>
            <IconChevronLeft className=" size-5 " /> Voltar
          </Button>
        </div>
      </header>
      <Separator className={" mb-4 "} />

      <div className=" flex-1 ">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
