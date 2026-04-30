"use client";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";

interface DatePickerProps {
  value: string; // ISO date string YYYY-MM-DD
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  min?: string; // ISO YYYY-MM-DD
  max?: string; // ISO YYYY-MM-DD
  placeholder?: string;
  className?: string;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function parseISO(s: string): Date | null {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

function toISO(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatDisplay(iso: string) {
  const d = parseISO(iso);
  if (!d) return "";
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function DatePicker({
  value,
  onChange,
  label,
  required,
  disabled,
  min,
  max,
  placeholder = "Select date",
  className = "",
}: DatePickerProps) {
  const today = new Date();
  const initial = parseISO(value) ?? today;

  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(initial.getMonth());
  const [year, setYear] = useState(initial.getFullYear());
  const ref = useRef<HTMLDivElement>(null);

  // Sync calendar view when value changes externally
  useEffect(() => {
    const d = parseISO(value);
    if (d) { setMonth(d.getMonth()); setYear(d.getFullYear()); }
  }, [value]);

  // Close on outside click
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const minDate = parseISO(min ?? "");
  const maxDate = parseISO(max ?? "");

  function isDisabled(d: Date) {
    if (minDate && d < minDate) return true;
    if (maxDate && d > maxDate) return true;
    return false;
  }

  function buildCalendar() {
    const first = new Date(year, month, 1);
    const startDow = first.getDay(); // 0=Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < startDow; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    // pad to full rows
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear((y) => y - 1); }
    else setMonth((m) => m - 1);
  }

  function nextMonth() {
    if (month === 11) { setMonth(0); setYear((y) => y + 1); }
    else setMonth((m) => m + 1);
  }

  function selectDay(d: Date) {
    if (isDisabled(d)) return;
    onChange(toISO(d));
    setOpen(false);
  }

  const cells = buildCalendar();
  const selectedDate = parseISO(value);

  function isSameDay(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();
  }

  const isToday = (d: Date) => isSameDay(d, today);
  const isSelected = (d: Date) => selectedDate ? isSameDay(d, selectedDate) : false;

  // Year list for year picker
  const baseYear = today.getFullYear();
  const years = Array.from({ length: 31 }, (_, i) => baseYear - 20 + i);

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
        disabled={disabled}
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
        <span className={value ? "text-[#212529]" : "text-gray-400"}>
          {value ? formatDisplay(value) : placeholder}
        </span>
        <FaCalendarAlt size={13} className="text-gray-400 flex-shrink-0" />
      </button>

      {/* Calendar panel */}
      {open && (
        <div className="absolute z-50 mt-1.5 bg-white border border-gray-200 rounded-2xl shadow-xl w-72 overflow-hidden">
          {/* Header: prev / month+year / next */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <button
              type="button"
              onClick={prevMonth}
              className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500"
            >
              <FaChevronLeft size={11} />
            </button>

            <div className="flex items-center gap-1.5">
              {/* Month selector */}
              <select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="text-sm font-black text-[#212529] bg-transparent border-none outline-none cursor-pointer appearance-none"
              >
                {MONTHS.map((m, i) => (
                  <option key={m} value={i}>{m}</option>
                ))}
              </select>

              {/* Year selector */}
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="text-sm font-black text-[#212529] bg-transparent border-none outline-none cursor-pointer appearance-none"
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={nextMonth}
              className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500"
            >
              <FaChevronRight size={11} />
            </button>
          </div>

          {/* Day-of-week labels */}
          <div className="grid grid-cols-7 px-3 pt-3 pb-1">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase pb-1">
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-y-0.5 px-3 pb-3">
            {cells.map((d, idx) => {
              if (!d) return <div key={`empty-${idx}`} />;
              const sel = isSelected(d);
              const dis = isDisabled(d);
              const tod = isToday(d);
              return (
                <button
                  key={d.toISOString()}
                  type="button"
                  disabled={dis}
                  onClick={() => selectDay(d)}
                  className={[
                    "w-8 h-8 mx-auto rounded-lg text-xs font-semibold transition-all duration-100",
                    sel
                      ? "bg-[#007BFF] text-white shadow-sm"
                      : dis
                      ? "text-gray-300 cursor-not-allowed"
                      : tod
                      ? "text-[#007BFF] font-black bg-[#007BFF]/8 hover:bg-[#007BFF]/15"
                      : "text-[#212529] hover:bg-gray-100",
                  ].join(" ")}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>

          {/* Today shortcut */}
          <div className="border-t border-gray-100 px-4 py-2.5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                if (!isDisabled(today)) {
                  onChange(toISO(today));
                  setOpen(false);
                }
              }}
              className="text-xs font-semibold text-[#007BFF] hover:underline disabled:text-gray-300 disabled:no-underline"
              disabled={isDisabled(today)}
            >
              Today
            </button>
            {value && (
              <button
                type="button"
                onClick={() => { onChange(""); setOpen(false); }}
                className="text-xs text-gray-400 hover:text-red-500 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
