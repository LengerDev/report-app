"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  const register = (e: FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <>
      <Head>
        <title>Register Page</title>
        <meta
          name="description"
          content="Login page with shadcn/ui and animation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
          {/* Left Side - Animation/Image */}
          <motion.div
            className="hidden md:block w-1/2 bg-blue-600 relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/login-image.jpg" // Replace with your image path
              alt="Login Illustration"
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h2
                className="text-white text-3xl font-bold"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Welcome Back
              </motion.h2>
            </div>
          </motion.div>

          {/* Right Side - Form with shadcn/ui */}
          <div className="w-full md:w-1/2 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Register
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter your username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>
              <Button type="button" onClick={register} className="w-full">
                Register
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
