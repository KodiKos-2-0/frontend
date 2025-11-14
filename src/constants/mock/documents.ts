import type { Document, DocumentClass } from "@/lib/types";

export const DOCUMENTS: Document[] = [
  {
    id: "1",
    name: "Q3 Financial Report 2023",
    class: "Regular",
    keywords: [
      { text: "finance", color: "gray" },
      { text: "report", color: "gray" },
    ],
    status: "Published",
    lastModified: "2 hours ago",
  },
  {
    id: "2",
    name: "Master Service Agreement v2.3",
    class: "Contract",
    keywords: [
      { text: "legal", color: "gray" },
      { text: "agreement", color: "gray" },
    ],
    status: "Published",
    lastModified: "yesterday",
  },
  {
    id: "3",
    name: "Invoice #2025-1015",
    class: "Invoice",
    keywords: [
      { text: "billing", color: "gray" },
      { text: "payment", color: "gray" },
    ],
    status: "Draft",
    lastModified: "3 days ago",
  },
  {
    id: "4",
    name: "Marketing Campaign Brief: Summer",
    class: "Regular",
    keywords: [
      { text: "marketing", color: "gray" },
      { text: "campaign", color: "gray" },
    ],
    status: "Published",
    lastModified: "last week",
  },
  {
    id: "5",
    name: "NDA with Tech Solutions Inc.",
    class: "Contract",
    keywords: [
      { text: "nda", color: "gray" },
      { text: "confidentiality", color: "gray" },
    ],
    status: "Archived",
    lastModified: "2 weeks ago",
  },
] as const;

export const DOCUMENT_COLOR_MAP: Record<DocumentClass, string> = {
  Regular: "bg-gray-100 text-gray-700",
  Invoice: "bg-purple-100 text-purple-700",
  Contract: "bg-cyan-100 text-cyan-700",
} as const;
