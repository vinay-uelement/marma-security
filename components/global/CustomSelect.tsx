"use client";
import React, { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  triggerClassName?: string;
  menuClassName?: string;
  optionClassName?: string;
  activeOptionClassName?: string;
  hoverOptionClassName?: string;
  placeholderColorClass?: string;
  valueColorClass?: string;
  arrowColor?: string;
  openDirection?: 'up' | 'down';
}

export default function CustomSelect({
  options,
  value,
  placeholder,
  onChange,
  disabled = false,
  triggerClassName = "",
  menuClassName = "bg-white border-[#E5E5E5]",
  optionClassName = "text-[14px] md:text-[16px]",
  activeOptionClassName = "bg-brand-red text-white",
  hoverOptionClassName = "hover:bg-black/5",
  placeholderColorClass = "text-[#989898]",
  valueColorClass = "text-text-dark",
  arrowColor = "#989898",
  openDirection = 'down'
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`${triggerClassName} flex items-center justify-between transition-all ${
          isOpen ? "border-brand-red" : ""
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span className={`transition-colors duration-200 ${value === "" ? placeholderColorClass : valueColorClass}`}>
          {selectedLabel}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 transform ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6683 15.554L0 3.8885L3.89125 0L11.6683 7.777L19.4452 0L23.3365 3.8885L11.6683 15.554Z"
            fill={arrowColor}
          />
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute z-[100] left-0 right-0 ${
          openDirection === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'
        } ${menuClassName} border rounded-[14px] shadow-2xl overflow-hidden py-2 backdrop-blur-xl transition-all animate-in fade-in ${
          openDirection === 'up' ? 'slide-in-from-bottom-2' : 'slide-in-from-top-2'
        } duration-200`}>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`${optionClassName} px-5 py-3 cursor-pointer transition-colors ${
                value === option.value
                  ? activeOptionClassName
                  : hoverOptionClassName
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
