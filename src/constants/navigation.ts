import type { NavigationItem } from "@/lib/types";
import { FileText, Users } from "lucide-react";

export const NAVIGATION: NavigationItem[] = [
  {
    path: "/organizations",
    icon: Users,
    title: "Organizations",
  },
  {
    path: "/documents",
    icon: FileText,
    title: "Documents",
  },
] as const;
