import type { Metadata } from "next";
import { Libre_Baskerville, Nunito_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/logo-icon.avif",
    shortcut: "/logo-icon.avif",
    apple: "/logo-icon.avif",
  },
  title: "Finvvritti | CA & CS Advisory | Accounting, Tax, Compliance",
  description:
    "Finvvritti combines CA & CS expertise across auditing, accounting, taxation, debt advisory, CFO services and valuation - a one-stop solution for finance, compliance & growth.",
  metadataBase: new URL("https://finvvritti.com"),
  openGraph: {
    title: "Finvvritti | CA & CS Advisory | Accounting, Tax, Compliance",
    description:
      "Finvvritti combines CA & CS expertise across auditing, accounting, taxation, debt advisory, CFO services and valuation - a one-stop solution for finance, compliance & growth.",
    url: "https://finvvritti.com",
    siteName: "Finvvritti",
    images: [
      {
        url: "https://finvvritti.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Finvvritti – CA & CS Advisory",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finvvritti | CA & CS Advisory | Accounting, Tax, Compliance",
    description:
      "One-stop solution for finance, compliance & growth. CA & CS expertise across auditing, accounting, taxation, CFO services and valuation.",
    images: ["https://finvvritti.com/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${libreBaskerville.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--color-ink)]" suppressHydrationWarning>
        <ScrollToTop />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
