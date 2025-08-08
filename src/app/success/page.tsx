import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Zap } from "lucide-react";
import Link from "next/link";

export default function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center bg-gray-800 border-gray-700">
        <CardHeader>
          <div className="mx-auto mb-4 w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
          <CardTitle className="text-2xl text-white">
            Welcome to AdCopy Helper!
          </CardTitle>
          <CardDescription className="text-lg text-gray-300">
            Your subscription is now active. Start creating amazing ad copy!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-900/30 p-4 rounded-lg border border-green-800/50">
            <p className="text-sm text-green-200">
              🎉 Your 7-day free trial has started. You won&apos;t be charged
              until the trial ends.
            </p>
          </div>

          <Link href="/dashboard">
            <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
              <Zap className="h-5 w-5 mr-2" />
              Go to Dashboard
            </Button>
          </Link>

          <p className="text-xs text-gray-400">
            Need help? Contact us at support@adcopyhelper.com
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
