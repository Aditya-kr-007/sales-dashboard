import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales Analytics Dashboard",
  description: "Atomic Design sales dashboard built with Next.js 15, TypeScript, Tailwind CSS and Recharts."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
