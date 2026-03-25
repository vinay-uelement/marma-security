import React, { useId } from "react";

type Props = {
  variant?: "primary" | "secondary" | "outline";
  label: string;
  onClick?: () => void;
  icon?: boolean;
  className?: string;
  textContainer?: string;
};

const Button = (props: Props) => {
  const uid = useId(); // generates a unique ID per component instance
  const maskId = `arrowMask-${uid.replace(/:/g, "")}`;

  const {
    variant = "primary",
    label,
    onClick,
    icon,
    className,
    textContainer,
  } = props;

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
    ? "w-6 h-6 md:w-8 md:h-8"
    : "w-6 h-6 md:w-8 md:h-8";

  const circleColor = isPrimary ? "#F4F4F4" : "#FF0000";

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${className}`}
    >
      <span className={`${textClass} ${textContainer}`}>{label}</span>

      {icon && (
        <div className={`${iconContainerClass} absolute right-1`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="28"
            height="28"
            className="w-full h-full"
          >
            <defs>
              <mask id={maskId}>
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
              fill={circleColor}
              mask={`url(#${maskId})`}
            />
          </svg>
        </div>
      )}
    </button>
  );
};

export default Button;
