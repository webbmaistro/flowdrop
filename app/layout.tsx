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
      <head>
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
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/flowdrop",
                "https://linkedin.com/company/flowdrop"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://flowdrop.xyz/contact"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressRegion": "CA",
                "addressLocality": "San Francisco"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "United States"
                },
                {
                  "@type": "Country", 
                  "name": "Canada"
                },
                {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                {
                  "@type": "Country",
                  "name": "Australia"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "FlowDrop",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "url": "https://flowdrop.xyz",
              "description": "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
              "headline": "AI workflow builder for non-coders.",
              "alternativeHeadline": "Launch production flows before your coffee brews.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://flowdrop.xyz/signin"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "127"
              },
              "featureList": [
                "AI-powered workflow builder",
                "No-code automation",
                "Instant deployment",
                "Managed infrastructure",
                "Production automations in under 5 minutes"
              ],
              "screenshot": "https://flowdrop.xyz/screenshot.png",
              "softwareVersion": "1.0.0",
              "releaseNotes": "https://flowdrop.xyz/docs/changelog",
              "downloadUrl": "https://flowdrop.xyz/signin",
              "installUrl": "https://flowdrop.xyz/signin"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is FlowDrop?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes. It allows non-coders to create complex AI workflows without any programming knowledge."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How does FlowDrop work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FlowDrop uses AI to understand your automation needs. Simply describe what you want to automate, and our AI builds the workflow for you. Then deploy it instantly to production with one click."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need coding experience to use FlowDrop?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "No coding experience required! FlowDrop is designed specifically for non-coders. Our AI handles all the complex programming while you focus on describing your automation goals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast can I deploy workflows?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FlowDrop deploys production automations in under five minutes. From idea to live workflow, the entire process takes less time than brewing a cup of coffee."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of automations can I build?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can build any type of automation: email processing, data analysis, customer support workflows, marketing campaigns, and more. Our AI supports 100+ app integrations out of the box."
                  }
                }
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
              "name": "FlowDrop",
              "url": "https://flowdrop.xyz",
              "description": "AI workflow builder for non-coders. Deploy production automations in under five minutes.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://flowdrop.xyz/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
