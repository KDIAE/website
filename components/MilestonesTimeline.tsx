"use client";
import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";
import {
  FaChevronRight,
  FaLightbulb, FaHardHat, FaRocket, FaExpandArrowsAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface Milestone {
  year: string;
  event: string;
  desc: string;
  detail: string;
  icon: IconType;
  color: string;
  dark: boolean;
}

const milestones: Milestone[] = [
  {
    year: "2024",
    event: "Foundation & Planning",
    desc: "Vision established; land acquisition and institutional planning began.",
    detail:
      "Dr. Kalobaran Das formalised the Trust deed, identified the Ilsoba campus on Kalna-Pandua Main Road in Hooghly, and began liaising with CBSE for future affiliation. Architectural blueprints were commissioned and approved.",
    icon: FaLightbulb,
    color: "#FFCA2B",
    dark: false,
  },
  {
    year: "2025",
    event: "Infrastructure Built",
    desc: "Modern classrooms, activity rooms, labs, and 24/7 security systems were installed.",
    detail:
      "Construction was completed ahead of schedule. The campus now features spacious classrooms, a dedicated computer lab, an activity hall, a playground, CCTV surveillance across all zones, and a clean, child-friendly environment designed for both safety and creativity.",
    icon: FaHardHat,
    color: "#007BFF",
    dark: true,
  },
  {
    year: "Apr 2026",
    event: "Grand Opening",
    desc: "School opened with Nursery to Class VI, welcoming our first proud batch of founding families.",
    detail:
      "The inauguration ceremony was graced by local dignitaries, educators, and parents. Over 100 students enrolled across Nursery, LKG, UKG, and Classes I–VI. Each founding family received a personalised welcome kit and certificate of recognition.",
    icon: FaRocket,
    color: "#FFCA2B",
    dark: false,
  },
  {
    year: "2027+",
    event: "Expanding Classes",
    desc: "Planned gradual introduction of Classes VII through XII, becoming a complete K–XII institution.",
    detail:
      "Each year, KDIAE plans to add one new grade through 2032. Science and Commerce streams will be offered at senior secondary level, with dedicated labs, counselling, and competitive exam coaching to prepare students for national-level success.",
    icon: FaExpandArrowsAlt,
    color: "#007BFF",
    dark: true,
  },
];

export default function MilestonesTimeline() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="mt-20">
      <AnimateIn direction="up" className="text-center mb-14">
        <h3 className="text-2xl md:text-3xl font-black text-[#212529] mt-2">Milestones</h3>
      </AnimateIn>

      <div className="relative max-w-2xl mx-auto pl-11">
        {/* Vertical spine */}
        <div className="absolute left-[1.1rem] top-5 bottom-20 w-0.5 bg-gradient-to-b from-[#FFCA2B] via-[#007BFF] to-[#FFCA2B]" />

        <div className="space-y-5">
          {milestones.map((m, i) => (
            <AnimateIn key={m.year} direction="left" delay={i * 0.12}>
              <div
                className="relative cursor-pointer group"
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                {/* Spine dot */}
                <div
                  className="absolute -left-[2.15rem] top-[1.35rem] w-4 h-4 rounded-full border-4 border-white shadow transition-transform duration-300 group-hover:scale-125 z-10"
                  style={{ backgroundColor: m.color }}
                />

                <div
                  className="bg-white rounded-2xl border transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: activeIdx === i ? m.color + "99" : "#e5e7eb",
                    boxShadow:
                      activeIdx === i
                        ? `0 6px 28px ${m.color}25`
                        : "0 1px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Header row */}
                  <div className="flex items-center gap-4 p-5">
                    <div
                      className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
                      style={{ backgroundColor: m.color }}
                    >
                      <m.icon size={19} color={m.dark ? "#fff" : "#212529"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-xs font-black uppercase tracking-widest"
                        style={{ color: m.color }}
                      >
                        {m.year}
                      </span>
                      <h4 className="font-black text-[#212529] text-[0.95rem] leading-snug">
                        {m.event}
                      </h4>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{m.desc}</p>
                    </div>
                    <FaChevronRight
                      size={11}
                      className="flex-shrink-0 transition-all duration-300"
                      style={{
                        color: activeIdx === i ? m.color : "#d1d5db",
                        transform: activeIdx === i ? "rotate(90deg)" : "none",
                      }}
                    />
                  </div>

                  {/* Expanded detail */}
                  <div
                    className="transition-all duration-500 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: activeIdx === i ? "160px" : "0px",
                      opacity: activeIdx === i ? 1 : 0,
                    }}
                  >
                    <div
                      className="mx-4 mb-4 p-4 rounded-xl text-sm text-gray-600 leading-relaxed"
                      style={{
                        backgroundColor: m.color + "12",
                        borderLeft: `3px solid ${m.color}`,
                      }}
                    >
                      {m.detail}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  );
}
