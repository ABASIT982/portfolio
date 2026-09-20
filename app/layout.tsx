import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Abdul Basit — Full Stack Web Engineer",
    template: "%s | Abdul Basit",
  },
  description:
    "Full Stack Web Engineer specializing in Next.js, TypeScript, AWS, and AI integration. Building modern, scalable web applications from Lahore, Pakistan.",
  keywords: [
    "Abdul Basit",
    "Full Stack Developer",
    "Web Engineer",
    "Next.js Developer",
    "React Developer",
    "AWS Developer",
    "TypeScript",
    "AI Integration",
    "Pakistan Developer",
    "Lahore Developer",
  ],
  authors: [{ name: "Abdul Basit" }],
  creator: "Abdul Basit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulbasit.vercel.app",
    title: "Abdul Basit — Full Stack Web Engineer",
    description:
      "Building modern, scalable web applications with Next.js, AWS, and AI.",
    siteName: "Abdul Basit Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Basit — Full Stack Web Engineer",
    description:
      "Building modern, scalable web applications with Next.js, AWS, and AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, playfair.variable, "font-sans")}
    >
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Toaster theme="light" />
      </body>
    </html>
  );
}