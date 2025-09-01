"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect, // 1. Import useEffect
} from "react";
import { useRouter } from "next/navigation";

type User = {
  username: string;
};

type LoginContextType = {
  user: User | null;
  login: (credentials: {
    username: string;
    password: any;
  }) => Promise<string | null>;
  logout: () => void;
  isLoading: boolean;
};

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true); // 2. Add a new loading state for the initial check
  const router = useRouter();

  // 3. Add this useEffect to check for an existing session on app load
  useEffect(() => {
    const checkSession = async () => {
      try {
        // This API route should check the user's cookie and return user data if they are logged in
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error("No active session found:", error);
      } finally {
        setIsAuthLoading(false); // We're done checking, so we can show the app
      }
    };

    checkSession();
  }, []); // The empty array ensures this runs only once

  const login = async (credentials: { username: string; password: any }) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        router.push("/dashboard");
        return null;
      } else {
        const data = await response.json();
        return data.message || "Login failed!";
      }
    } catch (err) {
      console.error("A network or server error occurred:", err);
      return "A network or server error occurred.";
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } catch (error) {
        console.error("Server logout failed:", error);
    }
    setUser(null);
    router.push("/login");
  };

  const value = { user, login, logout, isLoading };

  return (
    <LoginContext.Provider value={value}>
      {!isAuthLoading && children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};