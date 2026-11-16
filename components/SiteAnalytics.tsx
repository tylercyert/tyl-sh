"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

export default function SiteAnalytics() {
  const pathname = usePathname();

  // The app's privacy policy is also opened directly from FocusTones.
  if (pathname === "/focustones/privacy") return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1WLXE6247B"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1WLXE6247B');
      `}</Script>
    </>
  );
}
