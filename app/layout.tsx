import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics";
import "./globals.css";

// Force static generation for maximum performance
export const dynamic = 'force-static'
export const revalidate = false

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yinjianchen.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yinjian Chen - Full Stack Software Engineer",
    template: "%s | Yinjian Chen - Software Engineer"
  },
  description: "Full Stack Software Engineer with 7+ years of experience in backend development (Node.js, Go, Python) and iOS development (Swift, SwiftUI). Currently pursuing Software Engineering Master's at Carleton University. Specialized in AI/ML integration, cloud architecture, and scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "iOS Developer",
    "Node.js",
    "Go",
    "Python",
    "Swift",
    "React",
    "Next.js",
    "AI/ML",
    "Cloud Architecture",
    "Carleton University",
    "Yinjian Chen"
  ],
  authors: [{ name: "Yinjian Chen", url: siteUrl }],
  creator: "Yinjian Chen",
  publisher: "Yinjian Chen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Yinjian Chen - Software Engineer",
    title: "Yinjian Chen - Full Stack Software Engineer",
    description: "Full Stack Software Engineer with 7+ years of experience in backend development and iOS development. Currently pursuing Software Engineering Master's at Carleton University.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yinjian Chen - Full Stack Software Engineer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yinjian Chen - Full Stack Software Engineer",
    description: "Full Stack Software Engineer with 7+ years of experience in backend development and iOS development.",
    images: ["/images/og-image.jpg"],
    creator: "@yinjianchen",
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
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://linkedin.com" />
        <link rel="preconnect" href="https://github.com" />
        
        {/* Prefetch critical resources */}
        <link rel="prefetch" href="/images/author/yin.jpeg" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
