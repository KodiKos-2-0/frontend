import type { LucideIcon } from "lucide-react";

export type Organization = {
  id: string;
  name: string;
  description: string;
  memberCount: number;
};

export type DocumentClass = "Contract" | "Regular" | "Invoice";

export type Document = {
  id: string;
  name: string;
  class: DocumentClass;
  keywords: { text: string; color: string }[];
  status: string;
  lastModified: string;
};

export type NavigationItem = {
  path: `/${string}`;
  icon: LucideIcon;
  title: string;
};
