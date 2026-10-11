import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Trajectory Observatory",
  description: "Transparent tracking of measured AI capabilities, gaps, and constraints.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b bg-white">
          <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="font-semibold text-gray-900">AI Trajectory Observatory</Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
            <Link href="/gaps" className="text-gray-600 hover:text-gray-900">Gaps</Link>
            <Link href="/scenarios" className="text-gray-600 hover:text-gray-900">Scenarios</Link>
            <Link href="/bottlenecks" className="text-gray-600 hover:text-gray-900">Bottlenecks</Link>
            <Link href="/methodology" className="text-gray-600 hover:text-gray-900">Methodology</Link>
            <Link href="/updates" className="text-gray-600 hover:text-gray-900">Updates</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
