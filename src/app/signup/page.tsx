import React from "react";
import SignupForm from "@/components/Signup/SignupForm";
import { Stethoscope, ShieldCheck, BookOpenCheck, CheckCircle2 } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Visual / Info Side */}
      <div className="hidden md:flex md:w-1/2 relative bg-[#0047AB] overflow-hidden flex-col justify-between p-12 lg:p-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,182,255,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,82,204,0.6),transparent_60%)]" />
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Brand */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl">
              <div className="w-5 h-5 bg-white rounded-md transform rotate-12" />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">4HospiceRX</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-lg mt-auto mb-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            Empowering Your <br />
            <span className="text-sky-300">Care Team.</span>
          </h2>

          <div className="space-y-8">
            <div className="flex gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/15">
                <Stethoscope className="w-7 h-7 text-sky-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Scale Care Seamlessly</h3>
                <p className="text-sky-100/80 leading-relaxed font-medium">
                  Add team members and manage multiple locations with ease.
                </p>
              </div>
            </div>

            <div className="flex gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/15">
                <ShieldCheck className="w-7 h-7 text-sky-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Enterprise Ready</h3>
                <p className="text-sky-100/80 leading-relaxed font-medium">
                  Granular permissions and audit logs for your organization.
                </p>
              </div>
            </div>

            <div className="flex gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/15">
                <BookOpenCheck className="w-7 h-7 text-sky-200" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Ready to Deploy</h3>
                <p className="text-sky-100/80 leading-relaxed font-medium">
                  Get your entire hospice team setup and trained in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 pt-8 border-t border-white/10 flex items-center gap-6">
          <div className="flex items-center gap-2 text-sky-200/60 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-sky-200/60 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>HITRUST Certified</span>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col px-6 py-12 lg:px-20 bg-slate-50/30">
        <div className="flex-1 flex flex-col justify-center items-center">
          {/* Mobile Header (Brand only visible on mobile) */}
          <div className="md:hidden flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-500/20">
              <div className="w-5 h-5 bg-white rounded-md transform rotate-12" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">4HospiceRX</span>
          </div>

          <SignupForm />
        </div>

        {/* Bottom utility links */}
        <div className="mt-auto pt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-400 text-[13px] font-medium">
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Help Center</a>
        </div>
      </div>
    </div>
  );
}
