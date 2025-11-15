import { Document } from "@/components";
import { DocumentStatGrid } from "@/components/Document/DocumentStatGrid";
import { DocumentTablePagination } from "@/components/Document/DocumentTablePagination";
import { InsertDocumentDialog } from "@/components/Document/InsertDocumentDialog";
import { useDebounce } from "@uidotdev/usehooks";
import { Clock, File, FileText, Grid } from "lucide-react";
import React, { useState } from "react";

export function Page() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);
  const [page, setPage] = useState(1);
  const [hasNextPage] = useState(false);
  const [hasPreviousPage] = useState(false);

  const debouncedSearch = useDebounce(search, 400);

  const Header = () => (
    <React.Fragment>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Document Overview
      </h1>
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold">DocuGlass AI</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
            <span className="text-sm font-medium text-gray-600">U</span>
          </button>
          <button className="w-9 h-9 rounded flex items-center justify-center hover:bg-gray-100">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </div>
      </div>
    </React.Fragment>
  );

  const Stats = () => (
    <div className="grid grid-cols-5 gap-4 mb-6">
      <DocumentStatGrid value={128} title="Total Documents" />
      <DocumentStatGrid
        value={45}
        title="Invoices"
        icon={File}
        style={{
          icon: "text-blue-500",
          title: "text-gray-600",
          value: "text-gray-900",
        }}
      />
      <DocumentStatGrid
        value={22}
        title="Contracts"
        icon={Grid}
        style={{
          icon: "text-blue-500",
          title: "text-gray-600",
          value: "text-gray-900",
        }}
      />
      <DocumentStatGrid
        value={18}
        title="Drafts"
        icon={Clock}
        style={{
          icon: "text-blue-500",
          title: "text-gray-600",
          value: "text-gray-900",
        }}
      />
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center gap-2 mb-1">
          <FileText className="w-5 h-5 text-gray-300" />
          <div className="text-3xl font-bold text-gray-300"></div>
        </div>
        <div className="text-sm text-gray-400"></div>
      </div>
    </div>
  );

  return (
    <main className="flex-1 px-8 py-6 overflow-auto flex flex-col">
      <div className="space-y-3">
        <Header />
        <Stats />
      </div>

      <div className="flex items-center gap-3 mb-6">
        <Document.Query.Search
          search={search}
          onSearchChange={(search) => setSearch(search)}
        />
        <Document.Query.Filters
          filter={filter}
          onFilterChange={(filter) => setFilter(filter)}
        />
        <InsertDocumentDialog />
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <Document.Table.Header />
        <Document.Table.Data search={debouncedSearch} />
        <DocumentTablePagination
          page={page}
          onNextPage={() => setPage((prev) => (hasNextPage ? prev + 1 : prev))}
          onPrevPage={() => setPage((prev) => (hasPreviousPage ? prev - 1 : 0))}
        />
      </div>
    </main>
  );
}
