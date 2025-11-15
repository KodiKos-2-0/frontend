import { useAuth } from "@/hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute() {
  const { user, isAuthenticating } = useAuth();
  if (isAuthenticating) return <div>Loading...</div>;
  if (user) return <Navigate to="/documents" replace />;
  return <Outlet />;
}
