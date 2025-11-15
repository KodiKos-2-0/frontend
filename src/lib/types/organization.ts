export type Organization = {
  id: number;
  name: string;
  description: string;
  member_count: number;
  owner_id: number;
  created_at: string;
  updated_at: string;
};

export type InsertableOrganization = {
  name: string;
  description: string;
  owner_id: number;
};
