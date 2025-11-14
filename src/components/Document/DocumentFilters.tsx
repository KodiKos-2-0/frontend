import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

type DocumentFiltersProps = {
  filter: null;
  onFilterChange: (filter: null) => void;
};

export function DocumentFilters({ onFilterChange }: DocumentFiltersProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!open) return setOpen(true);
    onFilterChange(null);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
    >
      <SlidersHorizontal className="w-4 h-4" />
      Add Filters
    </button>
  );
}
