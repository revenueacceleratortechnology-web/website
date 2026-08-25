import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://revenueaccelerator.tech"),
  title: {
    default: "Revenue Accelerator Technology — Marketplace growth for scaling brands",
    template: "%s — Revenue Accelerator Technology",
  },
  description:
    "We run Amazon, Walmart, and Shopify growth for brands doing $1M and up — advertising, listings, creative, and catalog operations under one account team.",
  keywords: [
    "Amazon agency",
    "marketplace growth",
    "Amazon PPC",
    "listing optimization",
    "Walmart Connect",
    "ecommerce agency",
  ],
  openGraph: {
    title: "Revenue Accelerator Technology",
    description:
      "Marketplace growth, engineered to compound. Advertising, listings, creative, and catalog operations under one account team.",
    type: "website",
    siteName: "Revenue Accelerator Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Accelerator Technology",
    description: "Marketplace growth, engineered to compound.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${plexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
