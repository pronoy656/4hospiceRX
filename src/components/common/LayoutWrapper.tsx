"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Define routes where Navbar and Footer should be hidden
  const hideLayout = pathname === "/login" || pathname === "/signup" || pathname === "/register";

  if (hideLayout) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 400px)", paddingTop: "80px" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
