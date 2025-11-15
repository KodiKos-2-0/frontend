import type { Nullable, OrUndefined, User } from "@/lib/types";
import { createContext } from "react";

type AuthContext = {
  user: Nullable<User>;
  isAuthenticating: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

export const authContext = createContext<OrUndefined<AuthContext>>(undefined);
