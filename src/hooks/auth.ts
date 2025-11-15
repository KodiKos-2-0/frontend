import { authContext } from "@/contexts/auth";
import { HookError } from "@/errors";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) throw new HookError("auth");
  return context;
};
