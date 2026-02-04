"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CookiePreferences {
  essential: boolean;
  marketing: boolean;
  functional: boolean;
  analytics: boolean;
}

const defaultPreferences: CookiePreferences = {
  essential: true, // Always enabled
  marketing: false,
  functional: false,
  analytics: false,
};

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch {
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    const allEnabled: CookiePreferences = {
      essential: true,
      marketing: true,
      functional: true,
      analytics: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allEnabled));
    setPreferences(allEnabled);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(defaultPreferences));
    setPreferences(defaultPreferences);
    setIsVisible(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "essential") return; // Can't disable essential cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Banner */}
      {!showSettings && (
        <div className="cookie-banner">
          <div className="cookie-banner-content">
            <p>
              We use cookies on our website to see how you interact with it. By accepting, you agree
              to our use of such cookies.{" "}
              <Link href="/privacy">Privacy Policy</Link>
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button className="cookie-btn cookie-btn-secondary" onClick={() => setShowSettings(true)}>
              Settings
            </button>
            <button className="cookie-btn cookie-btn-primary" onClick={handleAccept}>
              Accept
            </button>
            <button className="cookie-btn-close" onClick={handleDecline} aria-label="Decline cookies">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="cookie-modal-overlay">
          <div className="cookie-modal">
            <button className="cookie-modal-close" onClick={() => setShowSettings(false)} aria-label="Close settings">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 2L18 18M2 18L18 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <h2>Advanced Cookie Settings</h2>

            <div className="cookie-options">
              {/* Essential Cookies */}
              <div className="cookie-option">
                <div className="cookie-option-header">
                  <div className="cookie-option-info">
                    <h3>Essential Cookies</h3>
                    <p>
                      These cookies enable core functionality such as security, verification of identity
                      and network management. These cookies can&apos;t be disabled.
                    </p>
                  </div>
                  <div className="cookie-toggle cookie-toggle-disabled">
                    <span className="toggle-slider toggle-on">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4L4.5 7.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="cookie-option">
                <div className="cookie-option-header">
                  <div className="cookie-option-info">
                    <h3>Enable Marketing Cookies</h3>
                    <p>
                      These cookies are used to track advertising effectiveness to provide a more relevant
                      service and deliver better ads to suit your interests.
                    </p>
                  </div>
                  <button
                    className={`cookie-toggle ${preferences.marketing ? "cookie-toggle-on" : ""}`}
                    onClick={() => togglePreference("marketing")}
                    aria-label="Toggle marketing cookies"
                  >
                    <span className="toggle-slider">
                      {preferences.marketing ? (
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4L4.5 7.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                          <path d="M1 1H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="cookie-option">
                <div className="cookie-option-header">
                  <div className="cookie-option-info">
                    <h3>Enable Functional Cookies</h3>
                    <p>
                      These cookies collect data to remember choices users make to improve and give a more
                      personalised experience.
                    </p>
                  </div>
                  <button
                    className={`cookie-toggle ${preferences.functional ? "cookie-toggle-on" : ""}`}
                    onClick={() => togglePreference("functional")}
                    aria-label="Toggle functional cookies"
                  >
                    <span className="toggle-slider">
                      {preferences.functional ? (
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4L4.5 7.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                          <path d="M1 1H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="cookie-option">
                <div className="cookie-option-header">
                  <div className="cookie-option-info">
                    <h3>Enable Analytics Cookies</h3>
                    <p>
                      These cookies help us to understand how visitors interact with our website, discover
                      errors and provide better overall analytics.
                    </p>
                  </div>
                  <button
                    className={`cookie-toggle ${preferences.analytics ? "cookie-toggle-on" : ""}`}
                    onClick={() => togglePreference("analytics")}
                    aria-label="Toggle analytics cookies"
                  >
                    <span className="toggle-slider">
                      {preferences.analytics ? (
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4L4.5 7.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                          <path d="M1 1H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="cookie-modal-actions">
              <button className="cookie-btn cookie-btn-save" onClick={handleSavePreferences}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
