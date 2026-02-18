import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";
import type { AuthState, User } from "@/shared/@types/auth.types";
import { IconAlertCircle, IconId, IconMail, IconPhone, IconUser } from "@tabler/icons-react";
import type { ExoticComponent } from "react";

type InfoItem = {
  label: string;
  key: keyof User;
  icon: ExoticComponent;
};

const infoItems: InfoItem[] = [
  {
    label: "Nome completo",
    key: "name",
    icon: IconUser,
  },
  {
    label: "Email",
    key: "email",
    icon: IconMail,
  },
  {
    label: "CPF",
    key: "cpfMasked",
    icon: IconId,
  },
  {
    label: "Número de celular",
    key: "phoneNumber",
    icon: IconPhone,
  },
];

export function ProfileInfo({ authState: { user } }: { authState: AuthState }) {
  return (
    <div className=" w-full ">
      {infoItems.map((item) => {
        const Icon = item.icon;
        return (
          <Item key={item.key}>
            <ItemMedia variant={"icon"}>
              <Icon />
            </ItemMedia>
            <ItemContent>
              <ItemDescription>{item.label}</ItemDescription>
              <ItemTitle>{user[item.key] ? String(user[item.key]) : "Não informado"}</ItemTitle>
            </ItemContent>
            <ItemActions>{!user[item.key] && <IconAlertCircle className=" text-destructive " />}</ItemActions>
          </Item>
        );
      })}
    </div>
  );
}

export function ProfileInfoLoader() {
  return (
    <div className=" w-full ">
      {infoItems.map((item) => {
        return (
          <Item key={item.key}>
            <ItemMedia variant={"icon"}>
              <Skeleton className=" size-5 " />
            </ItemMedia>
            <ItemContent className=" space-y-4 ">
              <ItemDescription>
                <Skeleton className=" h-4 w-10 " />
              </ItemDescription>
              <ItemTitle>
                <Skeleton className=" h-3 w-60 " />
              </ItemTitle>
            </ItemContent>
          </Item>
        );
      })}
    </div>
  );
}
