import { ExternalLink } from "lucide-react";

export function Header() {
  return (
    <div className="w-full bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <span className="text-xl font-semibold">DocuGlass AI</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-sm font-medium text-gray-600">U</span>
        </button>
        <button className="w-9 h-9 rounded flex items-center justify-center hover:bg-gray-100">
          <ExternalLink className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
