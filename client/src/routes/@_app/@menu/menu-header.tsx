import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { AuthState } from "@/routes/@__root";
import { IconShoppingCart, IconUser } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export function MenuHeader({ authState }: { authState: NonNullable<AuthState> }) {
  return (
    <div className=" w-full flex justify-between items-center py-7 px-2  ">
      <div>
        <h2 className=" text-sm leading-snug text-muted-foreground ">Bem vindo!</h2>
        <h1>{authState.user.name.split(" ").slice(0, 2).join(" ")}</h1>
      </div>
      <section className=" flex items-center space-x-2 ">
        <Link to="/cart">
          <Button className={"size-11 rounded-full"} variant={"secondary"}>
            <IconShoppingCart className=" size-6 " />
          </Button>
        </Link>
        <Link to="/profile">
          <Avatar size="lg">
            <AvatarFallback>
              <IconUser />
            </AvatarFallback>
            <AvatarImage src={authState.user.image ?? ""} />
          </Avatar>
        </Link>
      </section>
    </div>
  );
}

export function MenuHeaderAnnon() {
  return (
    <div className="w-full flex justify-between items-center py-7 px-2 ">
      <div>
        <h2 className="text-sm leading-snug text-muted-foreground">Bem vindo!</h2>
        <Link to="/auth/sign-in" className="text-sm font-bold underline">
          <Badge className=" cursor-pointer text-[14px] ">Entrar na conta</Badge>
        </Link>
      </div>
      <section className="flex items-center space-x-2">
        <Link to="/cart">
          <Button className="size-11 rounded-full" variant="secondary" disabled>
            <IconShoppingCart className="size-6" />
          </Button>
        </Link>
        <Link to="/profile">
          <Avatar size="lg">
            <AvatarFallback>
              <IconUser />
            </AvatarFallback>
          </Avatar>
        </Link>
      </section>
    </div>
  );
}

export function LoaderMenuHeader() {
  return (
    <div className="w-full flex justify-between items-center py-7 px-2">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-5 w-32" />
      </div>

      <section className="flex items-center space-x-2">
        <Skeleton className="size-11 rounded-full" />

        <Skeleton className="size-10 rounded-full" />
      </section>
    </div>
  );
}
