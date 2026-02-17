import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import type { AuthState, User } from "@/shared/@types/auth.types";
import { IconAlertCircle, IconId, IconMail, IconUser } from "@tabler/icons-react";
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
];

export default function ProfileInfo({ authState: { user } }: { authState: AuthState }) {
  return (
    <div className=" w-full ">
      {infoItems.map((item) => {
        const Icon = item.icon;
        return (
          <Item>
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
