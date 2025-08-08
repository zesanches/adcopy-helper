"use client";

import { AuthProvider } from "@/components/auth-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  // Replace SessionProvider with our in-memory AuthProvider
  return <AuthProvider>{children}</AuthProvider>;
}
