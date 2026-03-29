import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude — Full-Stack Developer & UI Architect",
  description:
    "Building fast, accessible, and beautiful digital products. Full-stack engineer specialising in Next.js, TypeScript, and design systems.",
  keywords: [
    "Full-stack developer",
    "UI architect",
    "Next.js",
    "TypeScript",
    "React",
    "Design systems",
    "Frontend engineer",
  ],
  authors: [{ name: "Claude" }],
  creator: "Claude",
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Claude — Full-Stack Developer & UI Architect",
    description:
      "Building fast, accessible, and beautiful digital products with modern web technologies.",
    siteName: "Claude Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude — Full-Stack Developer & UI Architect",
    description:
      "Building fast, accessible, and beautiful digital products with modern web technologies.",
    creator: "@claude",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-white antialiased">
        {/* Skip-to-content link for keyboard users */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#4f8ef7] focus:text-white focus:rounded-lg focus:font-medium focus:text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
