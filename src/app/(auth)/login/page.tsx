"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ffffff] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="backdrop-blur-md bg-[#1c3351]/90 border border-[#cea939]/30 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-[#ffffff]">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-[#ffffff]/80">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#ffffff]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#1c3351]/50 text-[#ffffff] placeholder:text-[#ffffff]/60 border-[#cea939]/50 focus:border-[#cea939] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#ffffff]">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-[#1c3351]/50 text-[#ffffff] placeholder:text-[#ffffff]/60 border-[#cea939]/50 focus:border-[#cea939] transition-colors"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#ffffff]/60 hover:text-[#cea939]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#cea939] text-sm text-center"
                >
                  {error}
                </motion.p>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 mt-5">
              <Button
                type="submit"
                className="w-full bg-[#cea939] hover:bg-[#cea939]/80 text-[#1c3351] font-semibold transition-all duration-300"
              >
                Sign In
              </Button>
              <div className="flex justify-between w-full text-sm">
                <a
                  href="/forgot-password"
                  className="text-[#ffffff] hover:text-[#cea939] hover:underline"
                >
                  Forgot password?
                </a>
                <a
                  href="/signup"
                  className="text-[#ffffff] hover:text-[#cea939] hover:underline"
                >
                  Create an account
                </a>
              </div>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
