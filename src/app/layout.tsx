import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odiagbe Samson Osaro",
  description: "I share my journey in the world of coding and learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={raleway.className}>
        <NavbarComponent />
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
