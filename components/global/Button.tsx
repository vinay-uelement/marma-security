import React from "react";

type Props = {
  variant?: "primary" | "secondary" | "outline";
  label: string;
  onClick?: () => void;
  icon?: boolean;
  className?: string;
  textContainer?: string;
};

const Button = (props: Props) => {
  const { variant = "primary", label, onClick, icon, className, textContainer } = props;

  const isPrimary = variant !== "secondary";

  const baseClass =
    "relative flex items-center justify-center rounded-full pl-8 pr-12 py-1 min-w-[160px] md:min-w-[180px] transition-transform hover:scale-[1.02] group shadow-sm";

  const variantClass = isPrimary
    ? "bg-[#FF0000] text-white hover:bg-[#E10000]"
    : "bg-transparent border border-[#FFFFFF40] text-white hover:bg-white/10";

  const textClass = isPrimary
    ? "font-banner text-[16px] md:text-[20px] font-normal tracking-[-0.01em]"
    : "text-[16px] md:text-[20px] tracking-[0.02em]";

  const iconContainerClass = isPrimary
    ? "w-5 h-5 md:w-7 md:h-7 bg-[#F4F4F4] text-[#FF0000] rounded-full p-1 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors"
    : "w-6 h-6 md:w-8 md:h-8 ";

  return (
    <button onClick={onClick} className={`${baseClass} ${variantClass} ${className}`}>
      <span className={`${textClass} ${textContainer}`}>{label}</span>

      {icon && (
        <div className={`${iconContainerClass} absolute right-1`}>
          {isPrimary ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          ) : (
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="28"
  height="28"
  className="w-full h-full"
>
  <defs>
    <mask id="arrowMask">
      <rect width="100%" height="100%" fill="white" />
      <path
        d="M 50 28 L 50 72 M 32 54 L 50 72 L 68 54"
        transform="rotate(-135 50 50)"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </mask>
  </defs>

  <circle
    cx="50"
    cy="50"
    r="45"
    fill="#FF0000"
    mask="url(#arrowMask)"
  />
</svg>

          )}
        </div>
      )}
    </button>
  );
};

export default Button;
