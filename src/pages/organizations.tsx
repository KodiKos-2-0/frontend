import { Organization } from "@/components";
import { ORGANIZATIONS } from "@/constants/mock";

export function Page() {
  return (
    <main className="flex-1 overflow-auto px-8 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Organizations</h1>
        <p className="text-gray-600 mb-4">
          Manage your organizational units, members, and access permissions.
          Create new organizations or browse existing ones.
        </p>
        <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-medium">
          <span className="text-lg">+</span>
          Create New Organization
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {ORGANIZATIONS.map((org) => (
          <Organization.Card {...org} key={org.id} />
        ))}
      </div>
    </main>
  );
}
