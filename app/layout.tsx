import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "tyl.sh",
    template: "%s — tyl.sh",
  },
  description: "Projects, thoughts, and writing by Tyler Cyert.",
  metadataBase: new URL("https://tyl.sh"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="tyl.sh" href="/feed.xml" />
      </head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1WLXE6247B" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1WLXE6247B');
        `}</Script>
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
