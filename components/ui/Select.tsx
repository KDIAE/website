"use client";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function Select({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  required,
  disabled,
  className = "",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Keyboard support
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") setOpen(false);
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((p) => !p);
    }
  }

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {label && (
        <label className="block text-xs font-bold text-[#212529] mb-1.5 uppercase tracking-wide">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Trigger */}
      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        disabled={disabled}
        onKeyDown={onKeyDown}
        onClick={() => !disabled && setOpen((p) => !p)}
        className={[
          "w-full flex items-center justify-between gap-2",
          "border rounded-xl px-4 py-2.5 text-sm bg-white text-left",
          "transition-all duration-150",
          open
            ? "border-[#007BFF] ring-2 ring-[#007BFF]/20 shadow-sm"
            : "border-gray-200 hover:border-gray-300",
          disabled ? "opacity-50 cursor-not-allowed bg-gray-50" : "cursor-pointer",
        ].join(" ")}
      >
        <span className={selected ? "text-[#212529]" : "text-gray-400"}>
          {selected ? selected.label : placeholder}
        </span>
        <FaChevronDown
          size={11}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          role="listbox"
          className={[
            "absolute z-50 mt-1.5 w-full bg-white border border-gray-200",
            "rounded-xl shadow-lg overflow-hidden",
            "animate-in fade-in-0 zoom-in-95 duration-100",
          ].join(" ")}
        >
          {/* Scrollable list */}
          <ul className="max-h-52 overflow-y-auto py-1">
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={[
                    "flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer",
                    "transition-colors duration-100",
                    isSelected
                      ? "bg-[#007BFF]/8 text-[#007BFF] font-semibold"
                      : "text-[#212529] hover:bg-gray-50",
                  ].join(" ")}
                >
                  <span>{opt.label}</span>
                  {isSelected && <FaCheck size={11} className="text-[#007BFF] flex-shrink-0" />}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
