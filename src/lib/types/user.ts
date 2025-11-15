import type { Nullable } from "./generics";

export type User = {
  id: number;
  username: string;
  email: Nullable<string>;
  groups: number[];
  permissions: string[];
  display_name: string;
};
