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
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
            <Link href="/" className="font-semibold text-gray-900 text-base mr-6">
              AI Trajectory Observatory
            </Link>
            <div className="flex flex-wrap items-center text-sm">
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-700 transition-colors mr-5">Dashboard</Link>
              <Link href="/gaps" className="text-gray-600 hover:text-blue-700 transition-colors mr-5">Gaps</Link>
              <Link href="/scenarios" className="text-gray-600 hover:text-blue-700 transition-colors mr-5">Scenarios</Link>
              <Link href="/bottlenecks" className="text-gray-600 hover:text-blue-700 transition-colors mr-5">Bottlenecks</Link>
              <Link href="/methodology" className="text-gray-600 hover:text-blue-700 transition-colors mr-5">Methodology</Link>
              <Link href="/updates" className="text-gray-600 hover:text-blue-700 transition-colors">Updates</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
