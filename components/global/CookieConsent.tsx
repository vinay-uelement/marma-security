"use client";

import { useState, useEffect } from "react";
import PolicyModal from "./PolicyModal";
import PrivacyPolicyContent from "@/lib/legal/PrivacyPolicyContent";
import TermsOfServiceContent from "@/lib/legal/TermsOfServiceContent";
import Button from "@/components/global/Button";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("marma-cookie-consent");
      if (!consent) setVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("marma-cookie-consent", "all");
    setVisible(false);
  };

  const essentialOnly = () => {
    localStorage.setItem("marma-cookie-consent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/*  Backdrop  */}
      <div className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-[1px]" />

      {/*  Cookie Banner  */}
      <div className="fixed inset-0 z-[91] flex items-end justify-center p-4">
        <div
          className="relative w-full max-w-[580px] rounded-2xl p-7"
          style={{
            background: "rgba(235, 230, 226, 0.78)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.7)",
          }}
        >
          {/* Close button */}
          <button
            onClick={essentialOnly}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-black/10"
            style={{
              background: "rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M1 1L12 12M12 1L1 12"
                stroke="#333"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: "rgba(255, 0, 0, 0.08)",
                border: "1px solid rgba(255, 0, 0, 0.15)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="#FF0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-[#1A1A1A] font-bold text-xl leading-tight">
                Privacy & Security First
              </h2>
              <p className="text-[#666666] text-sm mt-0.5">
                Marma Security — Your Data Protection Partner
              </p>
            </div>
          </div>

          {/* Body */}
          <p className="text-[#444444] text-[15px] leading-relaxed mb-5">
            We use cookies and similar technologies to enhance your browsing
            experience, analyze site traffic, and provide personalized
            cybersecurity insights. Your privacy matters to us — we only collect
            data that helps us protect and serve you better.
          </p>

          <button
            onClick={() => setShowDetails((d) => !d)}
            className="flex items-center gap-1.5 text-[#555555] hover:text-[#FF0000] text-[13px] font-medium transition-colors mb-4"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              style={{
                transform: showDetails ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            >
              <path
                d="M2 5l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {showDetails ? "Hide cookie details" : "View cookie details"}
          </button>

          {showDetails && (
            <div
              className="mb-5 rounded-xl p-4 text-sm space-y-3"
              style={{
                background: "rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <div>
                <p className="text-[#1A1A1A] font-semibold mb-1">
                  🔒 Essential Cookies
                </p>
                <p className="text-[#555555]">
                  Required for basic site functionality. Cannot be disabled.
                </p>
              </div>
              <div>
                <p className="text-[#1A1A1A] font-semibold mb-1">
                  📊 Analytics Cookies
                </p>
                <p className="text-[#555555]">
                  Help us understand how visitors interact with the site
                  (anonymous data).
                </p>
              </div>
              <div>
                <p className="text-[#1A1A1A] font-semibold mb-1">
                  ⚡ Performance Cookies
                </p>
                <p className="text-[#555555]">
                  Used to optimize page load times and improve site
                  responsiveness.
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
            <Button
              variant="primary"
              label="Accept All Cookies"
              onClick={acceptAll}
              icon={true}
              textContainer="whitespace-nowrap"
            />
            <Button
              variant="secondary"
              label="Essential Only"
              onClick={essentialOnly}
              icon={true}
              textContainer="whitespace-nowrap"
              className="!border-[#33333330] !text-[#333333] hover:!bg-black/10"
            />
          </div>

          <div
            className="border-t pt-4 text-center"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <p className="text-[#737373] text-sm">
              By continuing to use our site, you agree to our{" "}
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-[#FF0000] hover:text-[#cc0000] transition-colors underline underline-offset-2"
              >
                Privacy Policy
              </button>{" "}
              and{" "}
              <button
                onClick={() => setShowTerms(true)}
                className="text-[#FF0000] hover:text-[#cc0000] transition-colors underline underline-offset-2"
              >
                Terms of Service
              </button>
            </p>
          </div>
        </div>
      </div>

      <PolicyModal
        open={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
        subtitle="Marma Security"
        icon="privacy"
      >
        <PrivacyPolicyContent />
      </PolicyModal>

      <PolicyModal
        open={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
        subtitle="Marma Security"
        icon="terms"
      >
        <TermsOfServiceContent />
      </PolicyModal>
    </>
  );
}
