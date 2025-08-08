"use client";

import { createContext, useContext, useMemo, useState } from "react";

type User = {
  id: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isSubscribed: boolean;
  signIn: (email: string) => Promise<void>;
  signOut: () => void;
  subscribe: () => Promise<void>;
  unsubscribe: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  async function signIn(email: string) {
    // Mock sign-in: create a basic user in memory
    setUser({ id: crypto.randomUUID(), email });
    // In this mock, users start without subscription
    setIsSubscribed(false);
  }

  function signOut() {
    setUser(null);
    setIsSubscribed(false);
  }

  async function subscribe() {
    // Mock subscription activation
    await new Promise((r) => setTimeout(r, 600));
    setIsSubscribed(true);
  }

  async function unsubscribe() {
    await new Promise((r) => setTimeout(r, 400));
    setIsSubscribed(false);
  }

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      isAuthenticated: !!user,
      isSubscribed,
      signIn,
      signOut,
      subscribe,
      unsubscribe,
    }),
    [user, isSubscribed]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
