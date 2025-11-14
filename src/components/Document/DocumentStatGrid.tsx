import { cn } from "@/utils";
import type { LucideIcon } from "lucide-react";

type DocumentStatGridProps = {
  title: string;
  value: number;
  icon?: LucideIcon;
  style?: {
    icon?: string;
    value?: string;
    title?: string;
  };
};

export function DocumentStatGrid({
  title,
  value,
  icon,
  style = {
    icon: "",
    value: "",
    title: "",
  },
}: DocumentStatGridProps) {
  const Icon = icon;
  return !!Icon ? (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-1">
        <Icon className={cn("w-5 h-5", style.icon)} />
        <div className={cn("text-3xl font-bold", style.value)}>{value}</div>
      </div>
      <div className={cn("text-sm text-gray-400", style.title)}>{title}</div>
    </div>
  ) : (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
    </div>
  );
}
