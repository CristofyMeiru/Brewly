import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { AuthState } from "@/routes/@__root";
import { IconUser } from "@tabler/icons-react";

export function PhotoProfile({ authState }: { authState: AuthState }) {
  return (
    <div className=" flex flex-col justify-center items-center space-y-2 ">
      <Avatar className={"size-30"}>
        <AvatarFallback>
          <IconUser className="size-15" />
        </AvatarFallback>
        <AvatarImage src={authState.user.image ?? ""} />
      </Avatar>

      <Button variant={"link"}>Editar</Button>
    </div>
  );
}

export function PhotoProfileLoader() {
  return (
    <div className=" flex flex-col justify-center items-center space-y-2 ">
      <Skeleton className={"size-30 rounded-full"} />

      <Button variant={"link"} disabled>
        Editar
      </Button>
    </div>
  );
}
