"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { LoadingSpinner, LoadingDots } from "@/components/ui/loading-spinner";
import { Zap, Sparkles } from "lucide-react";

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Skeleton */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">AdCopy Helper</span>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>

        <div className="grid gap-8">
          {/* Input Section Skeleton */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-blue-400" />
                <Skeleton className="h-6 w-40" />
              </div>
              <Skeleton className="h-4 w-full mt-2" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-40" />
            </CardContent>
          </Card>

          {/* Tips Section Skeleton */}
          <Card className="bg-blue-900/20 border-blue-800/50">
            <CardHeader>
              <Skeleton className="h-6 w-48" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function GeneratingState() {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="py-16">
        <div className="text-center space-y-6">
          <div className="relative">
            <LoadingSpinner size="lg" className="mx-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 bg-blue-500/20 rounded-full animate-ping" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">
              Crafting your perfect ad copy
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Our AI is analyzing your product description and generating
              multiple compelling variations
            </p>
            <LoadingDots className="justify-center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto mt-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
              <span>Analyzing keywords</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse [animation-delay:0.5s]" />
              <span>Optimizing tone</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="h-2 w-2 bg-purple-400 rounded-full animate-pulse [animation-delay:1s]" />
              <span>Creating variations</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="h-2 w-2 bg-yellow-400 rounded-full animate-pulse [animation-delay:1.5s]" />
              <span>Finalizing copy</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CopyResultSkeleton() {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-full mt-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-4 bg-gray-700/50 rounded-lg border border-gray-600"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <Skeleton className="h-8 w-8 ml-4" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
