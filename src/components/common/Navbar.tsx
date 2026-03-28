"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: "Pharmacy Solutions", href: "/pharmacy-solutions" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] px-6 py-6 transition-all duration-300 ${
      scrolled ? "bg-white/85 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-text-primary tracking-tight">
          4hospice<span className="text-primary">Rx</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.95rem] font-medium transition-colors relative hover:text-primary ${
                pathname === link.href ? "text-text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full" : "text-text-secondary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="px-5 py-2 text-[0.95rem] font-medium text-text-primary transition-colors hover:text-primary">
            Log In
          </Link>
          <Link href="/signup" className="px-6 py-2.5 bg-primary text-white font-semibold rounded-md shadow-md transition-transform hover:bg-primary-hover hover:-translate-y-0.5">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

