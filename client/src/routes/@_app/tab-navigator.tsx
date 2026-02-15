import type { ToPath } from "@/@types/to-path.type";
import { IconCoffee, IconShoppingCart, IconUser, type IconProps } from "@tabler/icons-react";
import { Link, useLocation } from "@tanstack/react-router";
import clsx from "clsx";
import type { ExoticComponent } from "react";

type TabItem = {
  to: ToPath;
  label: string;
  icon: ExoticComponent<IconProps>;
};

export function TabNavigator() {
  const location = useLocation();

  const tabs: TabItem[] = [
    {
      to: "/menu",
      label: "Menu",
      icon: IconCoffee,
    },
    {
      to: "/cart",
      label: "Pedido",
      icon: IconShoppingCart,
    },
    {
      to: "/profile",
      label: "Perfil",
      icon: IconUser,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      <div className="max-w-md mx-auto flex justify-around py-2">
        {tabs.map((tab) => {
          const isActive = location.pathname.startsWith(tab.to);
          const Icon = tab.icon;

          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={clsx(
                "flex flex-col items-center text-xs transition-colors",
                isActive ? "text-primary" : "text-zinc-400 hover:text-white",
              )}
            >
              <Icon size={22} stroke={1.8} />
              <span className="mt-1">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
