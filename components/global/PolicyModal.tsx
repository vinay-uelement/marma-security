"use client";

import { useEffect } from "react";

interface PolicyModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  icon: "privacy" | "terms";
  children: React.ReactNode;
}

const icons = {
  privacy: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        stroke="#FF0000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="14,2 14,8 20,8"
        stroke="#FF0000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="8"
        y1="13"
        x2="16"
        y2="13"
        stroke="#FF0000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="17"
        x2="16"
        y2="17"
        stroke="#FF0000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  terms: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8l-5-5z"
        stroke="#FF0000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3v5h8"
        stroke="#FF0000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="8"
        y1="13"
        x2="16"
        y2="13"
        stroke="#FF0000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="17"
        x2="16"
        y2="17"
        stroke="#FF0000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default function PolicyModal({
  open,
  onClose,
  title,
  subtitle,
  icon,
  children,
}: PolicyModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[680px] max-h-[88vh] rounded-2xl flex flex-col"
        style={{
          background: "rgba(235, 230, 226, 0.78)",
          backdropFilter: "blur(32px) saturate(180%)",
          WebkitBackdropFilter: "blur(32px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-4 px-6 py-5 shrink-0"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: "rgba(255, 0, 0, 0.07)",
              border: "1px solid rgba(255, 0, 0, 0.15)",
            }}
          >
            {icons[icon]}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-[#1A1A1A] font-bold text-xl leading-tight">
              {title}
            </h2>
            <p className="text-[#666666] text-sm mt-0.5">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors hover:bg-black/10"
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
        </div>

        <div
          className="flex-1 overflow-y-auto px-6 py-5 text-[#444444] text-sm leading-relaxed"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(0,0,0,0.15) transparent",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
