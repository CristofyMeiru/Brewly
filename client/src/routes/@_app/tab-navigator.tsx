import type { ToPath } from "@/shared/@types/to-path.type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconCoffee, IconShoppingCart, IconUser } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

type TabItem = {
  to: ToPath;
  label: string;
  render: (avatarUrl: string) => React.ReactNode;
};

export function TabNavigator() {
  const tabs: TabItem[] = [
    {
      to: "/menu",
      label: "Menu",
      render: () => <IconCoffee size={22} stroke={1.8} />,
    },
    {
      to: "/cart",
      label: "Pedido",
      render: () => <IconShoppingCart size={22} stroke={1.8} />,
    },
    {
      to: "/profile",
      label: "Perfil",
      render: (avatarUrl) => (
        <Avatar className={`h-6 w-6 border `}>
          <AvatarFallback className={"bg-zinc-800 text-zinc-400"}>
            <IconUser />
          </AvatarFallback>
          <AvatarImage src={avatarUrl} />
        </Avatar>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      <div className="max-w-md mx-auto flex justify-around py-2">
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            activeProps={{ className: "text-primary!" }}
            className={" text-zinc-400 flex flex-col items-center text-xs transition-colors"}
          >
            {tab.render("")}
            <span className="mt-1">{tab.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
