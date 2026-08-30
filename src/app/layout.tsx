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
    default: "RA Tech — A full-service Amazon agency for growing brands",
    template: "%s — RA Tech",
  },
  description:
    "RA Tech is a full-service Amazon agency for growing brands, connecting PPC, SEO, creative, platform management, and account management in one working relationship.",
  keywords: [
    "Amazon agency",
    "Amazon PPC",
    "Amazon SEO",
    "Amazon account management",
    "Seller Central",
    "Amazon management agency",
  ],
  openGraph: {
    title: "RA Tech",
    description:
      "A full-service Amazon agency for growing brands. PPC, SEO, creative, platform, and account management in one working relationship.",
    type: "website",
    siteName: "RA Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "RA Tech",
    description: "A full-service Amazon agency for growing brands.",
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
