import type { Organization } from "@/lib/types";
import { ExternalLink, Trash2, Users } from "lucide-react";

type OrganizationCardProps = Organization & {};

export function OrganizationCard(props: OrganizationCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{props.name}</h3>
      <p className="text-sm text-gray-600 mb-4 min-h-[60px]">
        {props.description}
      </p>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Users className="w-4 h-4" />
        <span>{props.member_count} Members</span>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex-1 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium">
          View Members
        </button>
        <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
          <ExternalLink className="w-4 h-4 text-gray-600" />
        </button>
        <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
          <Trash2 className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
