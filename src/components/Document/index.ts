import { DocumentFilters } from "./DocumentFilters";
import { DocumentSearchbar } from "./DocumentSearchbar";
import { DocumentTable } from "./DocumentTable";
import { DocumentTableHeader } from "./DocumentTableHeader";
import { DocumentTablePagination } from "./DocumentTablePagination";

export const Document = {
  Table: {
    Header: DocumentTableHeader,
    Data: DocumentTable,
    Pagination: DocumentTablePagination,
  },
  Query: {
    Filters: DocumentFilters,
    Search: DocumentSearchbar,
  },
};
