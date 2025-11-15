import { api } from "@/api";
import { Organization } from "@/components";
import { InsertOrganizationDialog } from "@/components/Organization/InsertOrganizationDialog";
import type { Organization as TOrganization } from "@/lib/types";
import { useEffect, useState } from "react";

export function Page() {
  const [organizations, setOrganizations] = useState<TOrganization[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      api.organizations.fetch().then((data) => setOrganizations(data));
    } catch (error) {
      console.error("Failed to fetch organizations:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <main className="flex-1 overflow-auto px-8 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Organizations</h1>
        <p className="text-gray-600 mb-4">
          Manage your organizational units, members, and access permissions.
          Create new organizations or browse existing ones.
        </p>
        <InsertOrganizationDialog />
      </div>
      <div className="grid grid-cols-3 gap-6">
        {isLoading && <p>Loading organizations...</p>}
        {!isLoading &&
          (organizations || []).map((org) => (
            <Organization.Card {...org} key={org.id} />
          ))}
      </div>
    </main>
  );
}
