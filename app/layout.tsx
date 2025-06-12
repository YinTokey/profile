import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
