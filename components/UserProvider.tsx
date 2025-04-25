"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
}

const UserContext = createContext<UserContextType>({
  user: null,
  isLoading: true,
  error: null,
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/auth/current-user");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch user");
        }

        setUser(data.user);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch user")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
