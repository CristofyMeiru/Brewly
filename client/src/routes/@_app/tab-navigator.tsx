import type { ToPath } from "@/shared/@types/to-path.type";
import { IconCoffee, IconGiftFilled, IconReceiptFilled, type IconProps } from "@tabler/icons-react";
import { Link, useLocation } from "@tanstack/react-router";
import type { ExoticComponent } from "react";
import { useEffect, useRef, useState } from "react";

type TabItem = {
  to: ToPath;
  label: string;
  icon: ExoticComponent<IconProps>;
};

export function TabNavigator() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const tabs: TabItem[] = [
    { to: "/menu", label: "Menu", icon: IconCoffee },
    { to: "/rewards", label: "Prêmios", icon: IconGiftFilled },
    { to: "/order", label: "Pedidos", icon: IconReceiptFilled },
  ];

  useEffect(() => {
    if (location.pathname.startsWith("/profile")) {
      setVisible(false);
      return;
    } else {
      visible ? null : setVisible(true);
    }

    const handleScroll = () => {
      const current = window.scrollY;

      if (Math.abs(current - lastScrollY.current) < 10) return;

      if (current > lastScrollY.current && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={` fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md rounded-2xl border border-border bg-card backdrop-blur-xl shadow-2xl shadow-black/40 transition-all duration-300 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}
      `}
    >
      <div className="flex justify-around py-3 text-zinc-400">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <Link
              key={tab.to}
              to={tab.to}
              activeProps={{ className: "text-primary" }}
              className="flex flex-col items-center text-xs transition-colors"
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
