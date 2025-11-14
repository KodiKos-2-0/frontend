import { Search } from "lucide-react";

type DocumentSearchbarProps = {
  search: string;
  onSearchChange: (search: string) => void;
};

export function DocumentSearchbar({
  search,
  onSearchChange,
}: DocumentSearchbarProps) {
  return (
    <div className="flex-1 relative">
      <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search documents by keywords or content..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
