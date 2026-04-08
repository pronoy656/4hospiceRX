"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff, Building2 } from "lucide-react";

export default function SignupForm() {
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
        <h1 className="text-3xl font-bold mb-2 text-slate-900 tracking-tight">Create Account</h1>
        <p className="text-slate-500 font-medium">Start optimizing your medication workflows</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Organization Name</label>
          <div className="relative">
            <Input
              type="text"
              required
              placeholder="e.g. Hospice Care Central"
              className="h-12 bg-slate-50/50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500/20 rounded-xl pl-11"
            />
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Administrator Email</label>
          <Input
            type="email"
            required
            placeholder="admin@company.com"
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

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full h-12 text-base font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <span>Initializing...</span>
              </div>
            ) : "Initialize Integration"}
          </Button>
        </div>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-slate-500 font-medium">
          Already on the platform?{" "}
          <Link href="/login" className="text-blue-600 font-bold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
