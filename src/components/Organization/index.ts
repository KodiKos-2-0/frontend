import { OrganizationCard } from "./OrganizationCard";
import { InsertOrganizationDialog } from "./InsertOrganizationDialog";

export const Organization = {
  Card: OrganizationCard,
  Forms: {
    InsertDialog: InsertOrganizationDialog
  }
} as const;
