"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const leftLinks = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: "Pharmacy Solutions", href: "/pharmacy-solutions" },
];

const rightLinks = [
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [understood, setUnderstood] = useState(false);
  
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[2000] w-full">
      {/* Top Banner - Home Page Only */}
      {isHome && (
        <div className="bg-[#002B6B] text-white py-3 px-6 hidden md:block">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-[13px] font-bold leading-tight tracking-wide">
                Clinical Decision Support Tool
              </h3>
              <p className="text-[11px] text-[#A5B4FC] font-medium">
                These tools provide clinical guidance only. Not a substitute for professional judgment. No PHI is stored.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <label 
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => setUnderstood(!understood)}
              >
                <div className={`w-4 h-4 rounded border border-white/30 flex items-center justify-center transition-all ${understood ? 'bg-primary border-primary' : 'bg-transparent'}`}>
                  {understood && <Check size={12} strokeWidth={4} />}
                </div>
                <span className="text-[13px] font-medium select-none group-hover:text-primary transition-colors">
                  I understand
                </span>
              </label>
              <button className="bg-[#38B6FF] hover:bg-[#31a1e0] text-white px-8 py-2 rounded-xl text-[13px] font-bold transition-all shadow-lg shadow-sky-500/20 active:scale-95">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 border-b border-gray-100 ${
        scrolled || !isHome ? "bg-white py-3 shadow-[0_1px_15px_rgba(0,0,0,0.02)]" : "bg-white py-5"
      }`}>
        <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
          
          {/* Left Links */}
          <div className="flex-1 flex items-center justify-start gap-12">
            {leftLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[0.95rem] font-bold transition-all relative px-4 py-2 rounded-xl ${
                    active 
                    ? "text-[#38B6FF] bg-[#F1F9FF]" 
                    : "text-[#033074] hover:text-[#38B6FF]"
                  }`}
                >
                  {link.name}
                  {active && <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#38B6FF] rounded-full" />}
                </Link>
              );
            })}
          </div>

          {/* Centered Logo */}
          <Link href="/" className="flex flex-col items-center justify-center gap-0 group mx-8">
            <div className="flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105">
              <div className="relative">
                <span className="text-4xl font-extrabold text-[#94A3B8] italic opacity-30">4</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-6 h-6 bg-primary rounded-lg flex items-center justify-center shadow-md">
                   <span className="text-white text-xl font-bold">+</span>
                </div>
              </div>
              <span className="text-[1.75rem] font-extrabold text-[#013074] tracking-tight">
                hospice<span className="text-primary italic">RX</span>
              </span>
            </div>
          </Link>

          {/* Right Links */}
          <div className="flex-1 flex items-center justify-end gap-10">
            {rightLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[0.95rem] font-bold transition-all ${
                    active ? "text-[#38B6FF]" : "text-[#033074] hover:text-[#38B6FF]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              href="/signup" 
              className="px-8 py-3 bg-[#38B6FF] text-white font-bold rounded-2xl shadow-[0_8px_20px_-5px_rgba(56,182,255,0.4)] hover:bg-[#31a1e0] transition-all hover:scale-[1.02] active:scale-95"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}

