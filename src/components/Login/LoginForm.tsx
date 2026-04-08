"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/overview");
    }, 600);
  }

  return (
    <div className="w-full max-w-sm mx-auto animate-slide-down">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 text-slate-900 tracking-tight">Welcome Back</h1>
        <p className="text-slate-500 font-medium">Login to your 4HospiceRX account</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Email Address</label>
          <Input
            type="email"
            required
            placeholder="name@company.com"
            className="h-12 bg-slate-50/50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500/20 rounded-xl"
          />
        </div>
        <div className="space-y-2 text-left">
          <div className="flex justify-between items-end">
            <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Password</label>
          </div>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              required
              placeholder="••••••••"
              className="h-12 bg-slate-50/50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500/20 pr-12 rounded-xl"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between px-1">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="h-4 w-4 rounded border border-slate-300 bg-white flex items-center justify-center transition-colors group-hover:border-blue-500">
               {/* Checkbox state could be added here */}
            </div>
            <span className="text-sm text-slate-500 font-medium select-none">Remember Me</span>
          </div>
          <Link href="/reset" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-base font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <span>Checking Details...</span>
            </div>
          ) : "Login to Dashboard"}
        </Button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-slate-500 font-medium">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-bold hover:underline">
            Request Access
          </Link>
        </p>
      </div>
    </div>
  );
}
