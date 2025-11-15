import { api } from "@/api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/auth";
import type { InsertableOrganization } from "@/lib/types";
import { Plus } from "lucide-react";
import { useState } from "react";

export function InsertOrganizationDialog() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Partial<InsertableOrganization>>({});
  const [isPending, setIsPending] = useState(false);

  const { user } = useAuth();

  const handleChange = (
    field: keyof InsertableOrganization,
    value: InsertableOrganization[keyof InsertableOrganization]
  ) => setForm((prev) => ({ ...prev, [field]: value }));

  const resetForm = () => setForm({});

  const handleSubmit = async () => {
    if (!form.name || form.name.trim() === "") {
      return console.error("Organization name is required");
    }

    const payload = {
      ...form,
      owner_id: user?.id || 0,
    } as InsertableOrganization;

    setIsPending(true);
    try {
      api.organizations.create(payload);
    } catch (err) {
      console.error("Error creating organization:", err);
    } finally {
      setIsPending(false);
      resetForm();
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-medium">
        <Plus className="w-4 h-4" />
        <Button>Add Organization</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[520px] bg-white">
        <DialogHeader>
          <DialogTitle>New Organization</DialogTitle>
          <DialogDescription>
            Create a new organization. Only required fields are shown.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="org-name">Name *</Label>
            <Input
              id="org-name"
              placeholder="Organization name"
              value={form.name ?? ""}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="org-description">Description</Label>
            <Textarea
              className="w-full"
              id="org-description"
              placeholder="..."
              value={form.description ?? ""}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              resetForm();
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            className="border border-black"
            onClick={handleSubmit}
            disabled={isPending}
          >
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
