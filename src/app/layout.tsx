import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "First Option Agency — Performance Marketing That Converts",
  description:
    "We build systems that turn enquiries into paying clients. Get more leads, follow up automatically, and convert with ads, landing pages & smart automation.",
  keywords: [
    "performance marketing agency",
    "digital marketing",
    "lead generation",
    "sales funnel optimization",
    "paid ads agency",
    "CRM automation",
    "firstoptionagency",
  ],
  authors: [{ name: "First Option Agency" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://firstoptionagency.com",
    title: "First Option Agency — Performance Marketing That Converts",
    description:
      "We build systems that turn enquiries into paying clients. Get more leads, follow up automatically, and convert with ads, landing pages & smart automation.",
    siteName: "First Option Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "First Option Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Option Agency — Performance Marketing That Converts",
    description:
      "We build systems that turn enquiries into paying clients.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#030712] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
