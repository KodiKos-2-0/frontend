import { api } from "@/api";
import type { Document } from "@/lib/types";
import { useEffect, useState } from "react";
import { DocumentTableRow } from "./DocumentTableRow";

type DocumentTableProps = {
  search: string;
};

export function DocumentTable({ search }: DocumentTableProps) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      api.documents.fetch({ search }).then((data) => setDocuments(data));
    } catch (error) {
      console.error("Failed to fetch organizations:", error);
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  return (
    <table className="w-full">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
            Document
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
            Classification
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
            Keywords
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
            Last Modified
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {isLoading && (
          <tr>
            <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
              Loading documents...
            </td>
          </tr>
        )}
        {!isLoading &&
          documents.map((doc) => <DocumentTableRow {...doc} key={doc.id} />)}
      </tbody>
    </table>
  );
}
