import type { Nullable } from ".";

export type Document = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  created: string;
  created_date: string;
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
  custom_fields: {
    field: number;
    value: string;
  }[];
  page_count: number;
  mime_type: string;
  correspondent: Nullable<number>;
  document_type: Nullable<string>;
  storage_path: Nullable<string>;
};

export type InsertableDocument = Omit<
  Document,
  | "id"
  | "content"
  | "created"
  | "created_at"
  | "modified"
  | "added"
  | "delete_at"
  | "archive_serial_number"
  | "page_count"
  | "storage_path"
  | "archived_file_name"
  | "custom_fields"
> & {
  document: File;
};

export type DocumentClass = "Regular" | "Invoice" | "Contract";
