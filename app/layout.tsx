import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeaderWrapper from "@/components/HeaderWrapper";
import PHProvider from "@/components/PostHogProvider";
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

export const metadata: Metadata = {
  title: "FlowDrop - AI Workflow Builder for Non-Coders",
  description: "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
  keywords: [
    "AI workflow builder",
    "no-code automation", 
    "workflow automation",
    "AI automation",
    "business automation",
    "workflow builder",
    "automation platform",
    "AI workflows",
    "no-code platform",
    "business process automation"
  ],
  authors: [{ name: "FlowDrop Team" }],
  creator: "FlowDrop",
  publisher: "FlowDrop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flowdrop.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "FlowDrop - AI Workflow Builder for Non-Coders",
    description: "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
    url: 'https://flowdrop.xyz',
    siteName: 'FlowDrop',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'FlowDrop - AI Workflow Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FlowDrop - AI Workflow Builder for Non-Coders",
    description: "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    "viewport": "width=device-width, initial-scale=1",
    "geo.region": "US-CA",
    "geo.placename": "San Francisco",
    "geo.position": "37.7749;-122.4194",
    "ICBM": "37.7749, -122.4194",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Structured data for SEO - added here to avoid hydration issues */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FlowDrop",
              "alternateName": "Flowdrop",
              "url": "https://flowdrop.xyz",
              "logo": "https://flowdrop.xyz/icon.png",
              "description": "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
              "foundingDate": "2024"
            })
          }}
        />
        <PHProvider>
          <HeaderWrapper>{children}</HeaderWrapper>
        </PHProvider>
        {/* Defer analytics for better performance */}
        <Analytics mode="production" />
        <SpeedInsights />
      </body>
    </html>
  );
}
