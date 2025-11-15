import type { Nullable } from ".";

export type Document = {
  id: number;
  title: string;
  content: string;
  created: string;
  created_date: string;
  modified: string;
  added: string;
  original_file_name: string;
  custom_fields: [
    {
      field: number;
      value: string;
    }
  ];
  mime_type: string;
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
