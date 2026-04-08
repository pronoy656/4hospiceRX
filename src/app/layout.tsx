import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4hospiceRx",
  description: "Innovative medication management and cost-saving tools for hospice care organizations.",
  keywords: ["hospice", "pharmacy", "medication management", "hospice care", "PBM", "hospice software"],
  authors: [{ name: "4hospiceRx Team" }],
  viewport: "width=device-width, initial-scale=1",
};

import LayoutWrapper from "@/components/common/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
