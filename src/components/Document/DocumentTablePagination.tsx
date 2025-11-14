import { ChevronLeft, ChevronRight } from "lucide-react";

type DocumentTablePaginationProps = {
  page: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
};

export function DocumentTablePagination(props: DocumentTablePaginationProps) {
  return (
    <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
      <span className="text-sm text-gray-600">
        Showing {props.page} to {props.totalPages} of documents
      </span>
      <div className="flex items-center gap-2">
        <button
          onClick={props.onPrevPage}
          className="p-2 border border-gray-300 rounded hover:bg-gray-50"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
        <button
          onClick={props.onNextPage}
          className="p-2 border border-gray-300 rounded hover:bg-gray-50"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
