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
            <Link href="/" className="font-semibold text-gray-900 text-lg tracking-tight" style={{ marginRight: '1.5rem' }}>
              AI Trajectory Observatory
            </Link>
            <nav className="flex flex-wrap items-center">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
                  style={{ marginRight: index < navLinks.length - 1 ? '1.25rem' : '0' }}
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
        <footer className="border-t border-gray-200 bg-gray-50" style={{ marginTop: '3rem' }}>
          <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between" style={{ gap: '1.5rem' }}>
              <div>
                <p className="font-semibold text-gray-900">AI Trajectory Observatory</p>
                <p className="text-sm text-gray-600 mt-1" style={{ maxWidth: '20rem' }}>
                  Transparent tracking of measured AI capabilities, gaps, and constraints.
                </p>
              </div>
              <div className="flex flex-wrap">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-blue-700"
                    style={{ marginRight: index < navLinks.length - 1 ? '1.5rem' : '0' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-xs text-gray-500" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
              <p>This platform revises based on evidence. See <Link href="/methodology" className="underline hover:text-gray-700">Methodology</Link> and <Link href="/updates" className="underline hover:text-gray-700">Update Log</Link>.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
