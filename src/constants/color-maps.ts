import type { DocumentClass } from "@/lib/types";

export const DOCUMENT_COLOR_MAP: Record<DocumentClass, string> = {
  Regular: "bg-gray-100 text-gray-700",
  Invoice: "bg-purple-100 text-purple-700",
  Contract: "bg-cyan-100 text-cyan-700",
} as const;
