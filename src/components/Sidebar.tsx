import { NAVIGATION } from "@/constants/navigation";
import type { NavigationItem as TNavigationItem } from "@/lib/types";
import { cn } from "@/utils";
import { Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-[5cm] bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 space-y-2">
        {NAVIGATION.map((item) => (
          <NavigationItem
            {...item}
            key={item.path}
            selected={location.pathname === item.path}
          />
        ))}
      </div>
      <div className="mt-auto p-4">
        <div
          className={cn(
            "flex items-center gap-2 px-3 py-2 text-sm rounded cursor-pointer",
            location.pathname === "settings"
              ? "text-gray-600 hover:bg-gray-50"
              : "text-gray-600"
          )}
        >
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}

type NavigationItemProps = TNavigationItem & {
  selected: boolean;
};

function NavigationItem(props: NavigationItemProps) {
  return (
    <Link
      to={props.path}
      className={cn(
        "flex items-center gap-2 px-3 py-2 text-sm rounded cursor-pointer",
        !props.selected
          ? "text-gray-500 hover:bg-gray-50"
          : "bg-gray-500 text-gray-50"
      )}
    >
      <props.icon className="w-4 h-4" />
      <span>{props.title}</span>
    </Link>
  );
}
