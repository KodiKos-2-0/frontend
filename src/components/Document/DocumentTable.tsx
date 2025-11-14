import { DOCUMENTS } from "@/constants/mock";
import { DocumentTableRow } from "./DocumentTableRow";

export function DocumentTable() {
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
        {DOCUMENTS.map((doc) => (
          <DocumentTableRow {...doc} key={doc.id} />
        ))}
      </tbody>
    </table>
  );
}
