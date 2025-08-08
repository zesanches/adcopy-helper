"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, CreditCard } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";

export function PaywallContent() {
  const { user, subscribe } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubscribe = async () => {
    setIsLoading(true);
    try {
      await subscribe();
      router.replace("/dashboard");
    } catch (error) {
      console.error("Error subscribing:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">AdCopy Helper</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Unlock AI-Powered Ad Copy
          </h1>
          <p className="text-xl text-gray-300">
            Subscribe to start generating compelling ad copy that converts
          </p>
        </div>

        <Card className="border-2 border-blue-500/50 bg-gray-800/50 shadow-xl">
          <CardHeader className="text-center">
            <Badge className="w-fit mx-auto mb-4 bg-blue-600" variant="default">
              Pro Plan
            </Badge>
            <CardTitle className="text-3xl text-white">$29/month</CardTitle>
            <CardDescription className="text-lg mt-2 text-gray-300">
              Everything you need to create amazing ads
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {[
                "Unlimited ad copy generation",
                "Multiple AI-generated variations",
                "One-click copy to clipboard",
                "High-converting copy templates",
                "24/7 customer support",
                "Cancel anytime",
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
              <p className="text-sm text-blue-200 text-center">
                <strong>7-day free trial</strong> • No setup fees • Cancel
                anytime
              </p>
            </div>

            <Button
              onClick={handleSubscribe}
              disabled={isLoading}
              className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-800 transition-colors"
              size="lg"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Activating trial...
                </>
              ) : (
                <>
                  <CreditCard className="h-5 w-5 mr-2" />
                  Start Free Trial
                </>
              )}
            </Button>

            <p className="text-xs text-center text-gray-400">
              Signed in as {user?.email}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
