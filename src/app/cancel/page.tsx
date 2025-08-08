import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { XCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Cancel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center bg-gray-800 border-gray-700">
        <CardHeader>
          <div className="mx-auto mb-4 w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center">
            <XCircle className="h-8 w-8 text-red-400" />
          </div>
          <CardTitle className="text-2xl text-white">
            Subscription Cancelled
          </CardTitle>
          <CardDescription className="text-lg text-gray-300">
            No worries! You can subscribe anytime you&apos;re ready.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
            <p className="text-sm text-gray-300">
              Your payment was cancelled and no charges were made to your
              account.
            </p>
          </div>

          <div className="space-y-2">
            <Link href="/paywall">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                Try Again
              </Button>
            </Link>

            <Link href="/">
              <Button
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                size="lg"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <p className="text-xs text-gray-400">
            Questions? Contact us at support@adcopyhelper.com
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
