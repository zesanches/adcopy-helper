"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, Zap, Sparkles, LogOut, User } from "lucide-react";
import { toast } from "sonner";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { GeneratingState } from "@/components/loading-states";
import { useAuth } from "@/components/auth-provider";
import { generateMockCopies } from "@/lib/mock-ai";

interface AdCopy {
  id: string;
  text: string;
}

export function DashboardContent() {
  const { user, signOut } = useAuth();
  const [description, setDescription] = useState("");
  const [adCopies, setAdCopies] = useState<AdCopy[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAdCopy = async () => {
    if (!description.trim()) {
      toast.error("Please enter a product description");
      return;
    }

    setIsGenerating(true);
    try {
      const copies = await generateMockCopies(description, 4);
      setAdCopies(copies);
      toast.success("Ad copy generated successfully!");
    } catch (error) {
      console.error("Error generating ad copy:", error);
      toast.error("Failed to generate ad copy. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (error) {
      console.log(error);

      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">AdCopy Helper</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-300">{user?.email}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={signOut}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Generate Ad Copy
          </h1>
          <p className="text-gray-400">
            Describe what you want to advertise and let AI create compelling
            copy for you.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Input Section */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Sparkles className="h-5 w-5 mr-2 text-blue-400" />
                Product Description
              </CardTitle>
              <CardDescription className="text-gray-400">
                Tell us about your product or service. Be specific about
                features, benefits, and target audience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-300">
                  What do you want to advertise?
                </Label>
                <Textarea
                  id="description"
                  placeholder="Example: A premium fitness app that helps busy professionals stay in shape with 15-minute workouts. Features personalized training plans, nutrition tracking, and progress analytics. Target audience: working professionals aged 25-45 who value efficiency and results."
                  value={description}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setDescription(e.target.value)
                  }
                  rows={4}
                  className="resize-none bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              <Button
                onClick={generateAdCopy}
                disabled={isGenerating || !description.trim()}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-800"
              >
                {isGenerating ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Generating amazing copy...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Generate Ad Copy
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Enhanced Loading State */}
          {isGenerating && <GeneratingState />}

          {/* Results Section */}
          {adCopies.length > 0 && (
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Generated Ad Copy</CardTitle>
                <CardDescription className="text-gray-400">
                  Here are your AI-generated ad variations. Click to copy any of
                  them.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {adCopies.map((copy, index) => (
                    <div key={copy.id} className="relative">
                      <div className="flex items-start justify-between p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <Badge
                              variant="secondary"
                              className="text-xs bg-gray-600 text-gray-300"
                            >
                              Variation {index + 1}
                            </Badge>
                          </div>
                          <p className="text-gray-100 leading-relaxed">
                            {copy.text}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(copy.text)}
                          className="ml-4 shrink-0 text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-200 hover:scale-105"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      {index < adCopies.length - 1 && (
                        <Separator className="my-4 bg-gray-600" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
