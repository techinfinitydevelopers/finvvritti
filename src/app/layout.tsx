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
  title: "Finvvritti | CA & CS Advisory | Accounting, Tax, Compliance",
  description:
    "Finvvritti combines CA & CS expertise across auditing, accounting, taxation, debt advisory, CFO services and valuation - a one-stop solution for finance, compliance & growth.",
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
