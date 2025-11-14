import { DOCUMENT_COLOR_MAP } from "@/constants/mock/documents";
import type { Document } from "@/lib/types";
import { cn } from "@/utils";
import { Clock, FileText, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";

type DocumentTableRowProps = Document & {};

export function DocumentTableRow(props: DocumentTableRowProps) {
  const navigate = useNavigate();

  const onNavigate = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <tr
      className="hover:bg-gray-50 cursor-pointer"
      onClick={() => onNavigate(props.id)}
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-blue-600 hover:underline font-medium">
            {props.name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span
          className={cn(
            "inline-flex px-2 py-1 text-xs font-medium rounded",
            DOCUMENT_COLOR_MAP[props.class]
          )}
        >
          {props.class}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1">
          {props.keywords.map((keyword, kidx) => (
            <span
              key={kidx}
              className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
            >
              {keyword.text}
            </span>
          ))}
          <span className="text-xs text-gray-400">+2 more</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-700">{props.status}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          {props.lastModified}
        </div>
      </td>
      <td className="px-6 py-4">
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreVertical className="w-4 h-4 text-gray-600" />
        </button>
      </td>
    </tr>
  );
}
