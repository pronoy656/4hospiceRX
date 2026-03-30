"use client";

import Link from "next/link";
import { Shield, Lock, Check } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Clinical Tools", href: "/tools" },
    { name: "Resources", href: "/resources" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Medical Disclaimer", href: "/disclaimer" },
    { name: "HIPAA Compliance", href: "/hipaa" },
  ];

  const complianceItems = [
    { name: "HIPAA Compliant", icon: Shield },
    { name: "Secure Platform", icon: Lock },
    { name: "Evidence-Based", icon: Check },
  ];

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100 mt-auto">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Logo & Description */}
          <div className="max-w-[280px]">
             <Link href="/" className="flex items-center gap-1.5 mb-6 group">
              <div className="relative">
                <span className="text-3xl font-extrabold text-[#94A3B8] italic opacity-30">4</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-5 h-5 bg-[#38B6FF] rounded-lg flex items-center justify-center shadow-md">
                   <span className="text-white text-base font-bold">+</span>
                </div>
              </div>
              <span className="text-[1.35rem] font-extrabold text-[#013074] tracking-tight">
                hospice<span className="text-[#38B6FF] italic">RX</span>
              </span>
            </Link>
            <p className="text-[#64748B] text-[0.95rem] leading-relaxed font-medium">
              Evidence-based clinical decision support tools for hospice and palliative care professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#013074]">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#64748B] text-[0.95rem] font-medium transition-colors hover:text-[#38B6FF]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#013074]">Legal</h3>
            <ul className="flex flex-col gap-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#64748B] text-[0.95rem] font-medium transition-colors hover:text-[#38B6FF]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#013074]">Compliance</h3>
            <ul className="flex flex-col gap-5">
              {complianceItems.map((item) => (
                <li key={item.name} className="flex items-center gap-3 text-[#64748B] font-medium text-[0.95rem]">
                  <div className="text-[#38B6FF]">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[#64748B] text-[0.9rem] font-medium">
          <p>© {currentYear} 4HospiceRx. All rights reserved.</p>
          <p className="opacity-80">
            Clinical decision support tools for healthcare professionals only.
          </p>
        </div>
      </div>
    </footer>
  );
}

