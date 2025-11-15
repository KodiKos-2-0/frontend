import { api } from "@/api";
import { LOCAL_STORAGE } from "@/constants/storage";
import { authContext } from "@/contexts/auth";
import type { Nullable, User } from "@/lib/types";
import { useEffect, useState, type PropsWithChildren } from "react";

type AuthContextProviderProps = PropsWithChildren & {};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<Nullable<User>>(null);
  const [isAuthenticating, setIsAuthencating] = useState(false);

  const login = async (username: string, password: string) => {
    setIsAuthencating(true);
    api.auth
      .login(username, password)
      .then((data) => localStorage.setItem(LOCAL_STORAGE.api.token, data.token))
      .then(() => api.auth.fetch())
      .then((data) => setUser(data))
      .catch((err) => console.log(err))
      .finally(() => setIsAuthencating(false));
  };

  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE.api.token);
    setUser(null);
  };

  useEffect(() => {
    setIsAuthencating(true);
    api.auth
      .fetch()
      .then((data) => setUser(data))
      .catch((err) => console.log(err))
      .finally(() => setIsAuthencating(false));
  }, []);

  const value = {
    user,
    isAuthenticating,
    login,
    logout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
