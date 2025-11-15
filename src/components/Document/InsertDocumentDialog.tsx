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
import { useAuth } from "@/hooks/auth";
import type { InsertableDocument } from "@/lib/types";
import { Plus } from "lucide-react";
import { useState } from "react";

export function InsertDocumentDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<InsertableDocument>>({});
  const [isPending, setIsPending] = useState(false);

  const { user } = useAuth();

  const handleInputChange = (
    field: keyof InsertableDocument,
    value: InsertableDocument[keyof InsertableDocument]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file)
      setFormData((prev) => ({
        ...prev,
        document: file,
        original_file_name: file.name,
        mime_type: file.type,
      }));
  };

  const resetForm = () => setFormData({});

  const handleSubmit = async () => {
    if (!formData.document) {
      return console.error("Document file is required");
    }

    const data: InsertableDocument = {
      ...formData,
      owner: user?.id || 0,
      user_can_change: true,
      is_shared_by_requester: false,
      notes: [],
    } as InsertableDocument;

    setIsPending(true);
    try {
      await api.documents.create(data);
    } catch (error) {
      console.error("Error inserting document:", error);
    } finally {
      setIsPending(false);
    }

    setFormData({});
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg text-sm hover:bg-blue-500">
        <Plus className="w-4 h-4" />
        <p>Add Document</p>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Document</DialogTitle>
          <DialogDescription>
            Upload and configure a new document
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="document">Document File *</Label>
            <Input
              id="document"
              type="file"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Document title"
              value={formData.title || ""}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="correspondent">Correspondent ID</Label>
            <Input
              id="correspondent"
              type="number"
              placeholder="Correspondent ID"
              value={formData.correspondent || ""}
              onChange={(e) =>
                handleInputChange("correspondent", parseInt(e.target.value))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="document_type">Document Type</Label>
            <Input
              id="document_type"
              placeholder="Document type"
              value={formData.document_type || ""}
              onChange={(e) =>
                handleInputChange("document_type", e.target.value)
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              placeholder="e.g. invoice, important"
              value={formData.tags?.join(", ") || ""}
              onChange={(e) =>
                handleInputChange(
                  "tags",
                  e.target.value.split(",").map((tag) => tag.trim())
                )
              }
            />
          </div>
        </div>

        <div className="flex justify-end gap-2">
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
            type="submit"
            onClick={handleSubmit}
            disabled={isPending}
          >
            Add
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
