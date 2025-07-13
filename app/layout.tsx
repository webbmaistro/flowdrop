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
  title: "FlowDrop - Deploy n8n workflows in seconds",
  description: "AI-powered workflow builder with instant cloud deployment. Build, deploy, and scale your n8n automations without the complexity.",
  other: {
    "viewport": "width=device-width, initial-scale=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
