import type { LucideIcon } from "lucide-react";

export type OrUndefined<T> = T | undefined;
export type Nullable<T> = T | null;

export type Organization = {
  id: number;
  name: string;
  description: string;
  memberCount: number;
};

export type DocumentClass = "Contract" | "Regular" | "Invoice";

export type Document = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  created: string;
  created_at: string;
  modified: string;
  added: string;
  delete_at: Nullable<string>;
  archive_serial_number: Nullable<number>;
  original_file_name: string;
  archived_file_name: string;
  owner: number;
  user_can_change: boolean;
  is_shared_by_requester: boolean;
  notes: string[];
  custom_fields: Record<string, string>[];
  page_count: number;
  mime_type: string;
  correspondent: Nullable<any>;
  document_type: Nullable<string>;
  storage_path: Nullable<string>;
};

export type NavigationItem = {
  path: `/${string}`;
  icon: LucideIcon;
  title: string;
};

export type User = {
  id: number;
  username: string;
  email: Nullable<string>;
  groups: number[];
  permissions: string[];
  display_name: string;
};
