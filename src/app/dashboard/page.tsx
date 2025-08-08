"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { DashboardContent } from "@/components/dashboard-content";

export default function DashboardPage() {
  const { isAuthenticated, isSubscribed } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/auth/signin");
    } else if (!isSubscribed) {
      router.replace("/paywall");
    }
  }, [isAuthenticated, isSubscribed, router]);

  if (!isAuthenticated || !isSubscribed) {
    return <div className="min-h-screen bg-gray-900" />;
  }

  return <DashboardContent />;
}
