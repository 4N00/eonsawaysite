"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

interface CookieConsent {
  essential: boolean;
  marketing: boolean;
  functional: boolean;
  analytics: boolean;
}

export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check initial consent
    const checkConsent = () => {
      const stored = localStorage.getItem("cookieConsent");
      if (stored) {
        try {
          const consent: CookieConsent = JSON.parse(stored);
          setHasConsent(consent.analytics === true);
        } catch {
          setHasConsent(false);
        }
      }
    };

    checkConsent();

    // Listen for consent changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "cookieConsent") {
        checkConsent();
      }
    };

    // Also listen for custom event (same-tab updates)
    const handleConsentChange = () => {
      checkConsent();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cookieConsentUpdate", handleConsentChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cookieConsentUpdate", handleConsentChange);
    };
  }, []);

  // Don't render anything if no GA ID or no consent
  if (!GA_MEASUREMENT_ID || !hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
