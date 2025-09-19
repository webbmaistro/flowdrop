import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeaderWrapper from "@/components/HeaderWrapper";
import PHProvider from "@/components/PostHogProvider";
import { Footer } from "@/components/ui";
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
  title: "Flowdrop - AI Workflow Builder for Non-Coders",
  description: "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
  authors: [{ name: "Flowdrop Team" }],
  creator: "Flowdrop",
  publisher: "Flowdrop",
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
    title: "Flowdrop - AI Workflow Builder for Non-Coders",
    description: "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
    url: 'https://flowdrop.xyz',
    siteName: 'Flowdrop',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://flowdrop.xyz/website-preview.png',
        width: 1200,
        height: 630,
        alt: 'Flowdrop - AI Workflow Builder',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Flowdrop - AI Workflow Builder for Non-Coders",
    description: "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
    images: ['https://flowdrop.xyz/website-preview.png'],
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
    google: process.env.GOOGLE_VERIFICATION_CODE || 'your-google-verification-code',
  },
  other: {
    "viewport": "width=device-width, initial-scale=1",
    "geo.region": "US-CA",
    "geo.placename": "San Francisco",
    "geo.position": "37.7749;-122.4194",
    "ICBM": "37.7749, -122.4194",
    "og:image:width": "1200",
    "og:image:height": "630",
    "twitter:image:alt": "Flowdrop - AI Workflow Builder"
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
              "name": "Flowdrop",
              "alternateName": "Flowdrop",
              "url": "https://flowdrop.xyz",
              "logo": "https://flowdrop.xyz/website-preview.png",
              "description": "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/flowdrop",
                "https://linkedin.com/company/flowdrop"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Flowdrop",
              "url": "https://flowdrop.xyz",
              "description": "AI workflow builder for non-coders. Build and deploy production automations in under five minutes.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://flowdrop.xyz/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Flowdrop",
              "url": "https://flowdrop.xyz",
              "description": "AI-powered workflow builder that deploys production automations in under five minutes.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "19",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            })
          }}
        />
        <PHProvider>
          <HeaderWrapper>
            {children}
            <Footer />
          </HeaderWrapper>
        </PHProvider>
        {/* Defer analytics for better performance */}
        <Analytics mode="production" />
        <SpeedInsights />
      </body>
    </html>
  );
}
