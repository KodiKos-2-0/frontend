import { BACKEND } from "@/constants/backend";
import { DOCUMENT_COLOR_MAP } from "@/constants/color-maps";
import { MIME_TYPE_MAP } from "@/constants/mime";
import type { Document } from "@/lib/types";
import { cn } from "@/utils";
import { Clock, FileText, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";

type DocumentTableRowProps = Document & {};

export function DocumentTableRow(props: DocumentTableRowProps) {
  const navigate = useNavigate();

  const onNavigate = (id: number) => {
    navigate(`/details/${id}`);
  };

  const keywords = props.custom_fields
    .filter(
      (cfield) =>
        cfield.field === BACKEND.document.custom_fields.keywords_field_id
    )
    ?.map((cfield) => cfield.value)[0]
    ?.split(",");

  return (
    <tr
      className="hover:bg-gray-50 cursor-pointer"
      onClick={() => onNavigate(props.id)}
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-blue-600 hover:underline font-medium">
            {props.title}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span
          className={cn(
            "inline-flex px-2 py-1 text-xs font-medium rounded",
            DOCUMENT_COLOR_MAP["Regular"]
          )}
        >
          {"Regular"}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1">
          {keywords
            ?.slice(0, Math.min(keywords.length, 4))
            .map((keyword, kidx) => (
              <span
                key={kidx}
                className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
              >
                {keyword}
              </span>
            ))}
          {keywords && keywords.length > Math.min(keywords.length, 4) && (
            <span className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
              +{keywords.length - Math.min(keywords.length, 4)} more
            </span>
          )}
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-700">
          {MIME_TYPE_MAP[props.mime_type] || "Unknown"}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          {props.created_date.replace("-", "/").split("T")[0]}
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
