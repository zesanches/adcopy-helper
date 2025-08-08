import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Target, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">AdCopy Helper</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/signin">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signin">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            className="mb-4 bg-blue-900/50 text-blue-300 border-blue-700"
            variant="secondary"
          >
            <Zap className="w-4 h-4 mr-1" />
            AI-Powered Ad Copy Generation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Create Compelling Ad Copy in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Seconds
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Stop struggling with writer's block. Generate high-converting ad
            copy for your products and services using advanced AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signin">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700"
              >
                Start Creating Ads
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              See Examples
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 7-day free trial
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AdCopy Helper?
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to create ads that convert
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">
                  AI-Powered Generation
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Advanced AI creates multiple variations of compelling ad copy
                  tailored to your product or service.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">
                  High-Converting Copy
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Our AI is trained on thousands of successful ads to generate
                  copy that drives results and increases conversions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Lightning Fast</CardTitle>
                <CardDescription className="text-gray-300">
                  Generate multiple ad variations in seconds. No more spending
                  hours brainstorming the perfect copy.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            One plan, unlimited possibilities
          </p>

          <Card className="max-w-md mx-auto border-2 border-blue-500/50 bg-gray-800/50 shadow-xl">
            <CardHeader className="text-center">
              <Badge
                className="w-fit mx-auto mb-4 bg-blue-600"
                variant="default"
              >
                Most Popular
              </Badge>
              <CardTitle className="text-3xl text-white">Pro Plan</CardTitle>
              <div className="text-4xl font-bold text-white mt-4">
                $29<span className="text-lg text-gray-400">/month</span>
              </div>
              <CardDescription className="text-lg mt-2 text-gray-300">
                Everything you need to create amazing ads
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Unlimited ad copy generation",
                  "Multiple variations per request",
                  "Copy to clipboard feature",
                  "24/7 customer support",
                  "Cancel anytime",
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/auth/signin" className="block">
                <Button className="w-full text-lg py-6 mt-6 bg-blue-600 hover:bg-blue-700">
                  Start Your Free Trial
                </Button>
              </Link>
              <p className="text-sm text-gray-400">
                7-day free trial, then $29/month
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Create Better Ads?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of marketers who are already creating high-converting
            ad copy with AI
          </p>
          <Link href="/auth/signin">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">AdCopy Helper</span>
          </div>
          <p className="text-gray-400">
            © 2024 AdCopy Helper. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
