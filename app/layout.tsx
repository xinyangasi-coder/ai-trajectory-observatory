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

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/gaps", label: "Gaps" },
  { href: "/scenarios", label: "Scenarios" },
  { href: "/bottlenecks", label: "Bottlenecks" },
  { href: "/landscape", label: "Landscape" },
  { href: "/methodology", label: "Methodology" },
  { href: "/updates", label: "Updates" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
            <Link href="/" className="font-semibold text-gray-900 text-lg tracking-tight mr-6">
              AI Trajectory Observatory
            </Link>
            <nav className="flex flex-wrap items-center">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm text-gray-600 hover:text-blue-700 transition-colors ${index < navLinks.length - 1 ? 'mr-5' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Main content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <p className="font-semibold text-gray-900">AI Trajectory Observatory</p>
                <p className="text-sm text-gray-600 mt-1 max-w-xs">
                  Transparent tracking of measured AI capabilities, gaps, and constraints.
                </p>
              </div>
              <div className="flex flex-wrap">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm text-gray-600 hover:text-blue-700 ${index < navLinks.length - 1 ? 'mr-6' : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-500">
              <p>This platform revises based on evidence. See <Link href="/methodology" className="underline hover:text-gray-700">Methodology</Link> and <Link href="/updates" className="underline hover:text-gray-700">Update Log</Link>.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
