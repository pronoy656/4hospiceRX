"use client";

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import { Mail, CheckCircle2, Check, ArrowRight, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ConfettiPiece = ({ delay }: { delay: number }) => {
  const [position, setPosition] = useState<{
    left: number;
    rotate: number;
    scale: number;
    duration: number;
  } | null>(null);

  useEffect(() => {
    setPosition({
      left: Math.random() * 100,
      rotate: Math.random() * 360,
      scale: 0.6 + Math.random() * 1,
      duration: 3 + Math.random() * 3
    });
  }, []);

  if (!position) return null;

  return (
    <div
      className="fixed -top-12 pointer-events-none text-4xl animate-confetti-fall z-[4000]"
      style={{
        left: `${position.left}%`,
        "--rotate": `${position.rotate}deg`,
        "--scale": position.scale,
        "--duration": `${position.duration}s`,
        animationDelay: `${delay}ms`
      } as React.CSSProperties}
    >
      🎉
    </div>
  );
};

interface AccessDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AccessDialog({ isOpen, onOpenChange }: AccessDialogProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [email, setEmail] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStep('success');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      // Immediately stop confetti to reduce DOM nodes and fix lag
      setShowConfetti(false);
      // Wait for dialog closure animation to finish before resetting state
      setTimeout(() => setStep('form'), 500);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-w-[550px] p-0 overflow-hidden border-none rounded-[3.5rem] shadow-[0_40px_100px_-10px_rgba(0,0,0,0.3)] z-[3001] animate-in fade-in zoom-in-95 duration-500 ease-out"
      >
        <div className="relative flex flex-col min-h-[550px] overflow-hidden bg-white">
          {/* Header Section - Vibrant Blue */}
          <div className="bg-[#38B6FF] p-10 pt-12 text-center relative flex-shrink-0 flex flex-col items-center justify-center transition-all duration-700">
            <DialogClose className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={28} strokeWidth={2} />
            </DialogClose>

            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 shadow-inner">
              <Mail className="text-white" size={28} strokeWidth={1.5} />
            </div>

            <DialogTitle className="text-[1.60rem] font-black text-white mb-2 leading-tight">
              {step === 'form' ? 'Get Full Access' : 'Almost There!'}
            </DialogTitle>
            <DialogDescription className="text-white/90 text-center leading-snug max-w-[320px] mx-auto font-medium">
              {step === 'form'
                ? 'Enter your email to unlock all clinical tools and save your calculations'
                : 'Success! Your clinical journey is about to begin.'}
            </DialogDescription>
          </div>

          {/* Body Section - White */}
          <div className="bg-white p-10 flex-1 flex flex-col justify-center relative overflow-hidden">
            {step === 'form' ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 fill-mode-both">
                {/* Features List */}
                <ul className="space-y-4">
                  {[
                    "Access all 12 clinical tools",
                    "Save and export calculations",
                    "Get updates on new features"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-[#013074] font-bold">
                      <div className="text-[#38B6FF] flex-shrink-0">
                        <div className="w-6 h-6 rounded-full border-2 border-[#38B6FF] flex items-center justify-center">
                          <Check size={14} strokeWidth={4} />
                        </div>
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-[#033074] font-semibold">Email Address</Label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 rounded-xl border-gray-200 bg-gray-50 px-6 text-lg focus-visible:ring-[#38B6FF] focus-visible:border-[#38B6FF] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#38B6FF] hover:bg-[#31a1e0] text-white font-black py-3.5 rounded-2xl shadow-lg shadow-sky-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    GET ACCESS <ArrowRight size={22} strokeWidth={3} />
                  </button>
                </form>

                <p className="text-[#94A3B8] text-[0.85rem] text-center leading-relaxed max-w-[340px] mx-auto font-medium">
                  By submitting, you agree to receive updates from 4HospiceRx. You can unsubscribe at any time.
                </p>
              </div>
            ) : (
              <div className="text-center space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both flex flex-col items-center justify-center py-6 h-full">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-2 animate-bounce shadow-inner">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="text-green-600" size={32} strokeWidth={4} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[2rem] font-black text-[#013074]">Success!</h3>
                  <p className="text-[#64748B] font-semibold leading-relaxed max-w-[300px] mx-auto">
                    Check your email to complete registration and access all tools.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>

      {/* Full-Screen Falling Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-[4000] overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <ConfettiPiece key={i} delay={i * 200} />
          ))}
        </div>
      )}
    </Dialog>
  );
}
