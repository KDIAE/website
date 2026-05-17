"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaPalette, FaFlask, FaStar, FaUserTie, FaHandsHelping, FaChevronRight,
} from "react-icons/fa";
import AnimateIn from "@/components/AnimateIn";

interface Member {
  name: string;
  role: string;
  qualifications: string;
  image: string;
}

interface Team {
  key: string;
  label: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  accentColor: string;
  accentLight: string;
  Icon: React.ElementType;
  members: Member[];
}

const BLANK = "https://cdn.kdiae.in/blank_person.png";
const BLANK_F = "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/blank_person_female.png";
const CDN = (path: string) =>
  `https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/${path}`;

const teams: Team[] = [
  {
    key: "arts",
    label: "Team Arts",
    badge: "Arts",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    accentColor: "#d97706",
    accentLight: "#fffbeb",
    Icon: FaPalette,
    members: [
      { name: "Kingshuk Mukherjee",     role: "Teacher", qualifications: "BA – English, MA – History, D.El.Ed",               image: CDN("Kingshuk_Mukherjee.JPG") },
      { name: "Sanchita Chatterjee",    role: "Teacher", qualifications: "MA – Bengali, B.Ed",                                image: CDN("Sanchita_Chatterjee.png") },
      { name: "Maitrayee Bhattacharya", role: "Teacher", qualifications: "MA – Sanskrit (Montessori-Trained)",                image: CDN("Maitrayee_Bhattacharya.png") },
      { name: "Saswati Roy",            role: "Teacher", qualifications: "MA, B.Ed",                                          image: CDN("Saswati_Roy.JPG") },
      { name: "Chaitali Singh",         role: "Teacher", qualifications: "MA – English",                                      image: BLANK_F },
    ],
  },
  {
    key: "science",
    label: "Team Science",
    badge: "Science",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    accentColor: "#2563eb",
    accentLight: "#eff6ff",
    Icon: FaFlask,
    members: [
      { name: "Paromita Banerjee", role: "Teacher", qualifications: "B.Sc Botany, M.Sc Environmental Biotechnology, B.Ed", image: CDN("Paromita_Banerjee.png") },
      { name: "Trayedipa Dutta",   role: "Teacher", qualifications: "M.Sc Botany (Specialization Microbiology), B.Ed",     image: CDN("Trayedipa_Dutta.png") },
      { name: "Rohit Kullu",       role: "Teacher", qualifications: "B.Com (Accounting & Finance), Dip Computer App.",     image: CDN("Rohit_Kullu.JPG") },
      { name: "Abir Kumar Chanda", role: "Teacher", qualifications: "B.Sc Mathematics, B.Ed",                              image: CDN("Abir_Kumar_Chanda.JPG") },
    ],
  },
  {
    key: "preprimary",
    label: "Pre-Primary Section",
    badge: "Pre-Primary",
    badgeBg: "bg-pink-100",
    badgeText: "text-pink-700",
    accentColor: "#db2777",
    accentLight: "#fdf2f8",
    Icon: FaStar,
    members: [
      { name: "Maitrayee Bhattacharya", role: "Teacher", qualifications: "MA – Sanskrit (Montessori-Trained)",               image: CDN("Maitrayee_Bhattacharya.png") },
      { name: "Saswati Roy",            role: "Teacher", qualifications: "MA, B.Ed",                                         image: CDN("Saswati_Roy.JPG") },
      { name: "Juhi Khatun",            role: "Teacher", qualifications: "MA Bengali, M.T.T, D.El.Ed",                       image: CDN("Juhi_Khatun.JPG") },
      { name: "Maya Ghosh",             role: "Teacher", qualifications: "B.Com (Accountancy), Dip Computer & Digital Mktg", image: CDN("Maya_Ghosh.JPG") },
      { name: "Smritikana Ghosh",       role: "Teacher", qualifications: "Abacus Trainer & Dance Instructor",                image: CDN("Smritikana_Ghosh.png") },
    ],
  },
  {
    key: "office",
    label: "Office Team",
    badge: "Office",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    accentColor: "#7c3aed",
    accentLight: "#f5f3ff",
    Icon: FaUserTie,
    members: [
      { name: "Piyali Ghosh",    role: "Counsellor & Office-in-Charge", qualifications: "MA (Bengali), B.Ed, B.Lib.I.Sc.", image: BLANK_F },
      { name: "Sathi Kat",       role: "Inventory-in-Charge",           qualifications: "BA., D.El.Ed",                   image: BLANK_F },
      { name: "Sangita Goswami", role: "Marketing Team Member",         qualifications: "MA (Philosophy), B.Ed",          image: BLANK_F },
    ],
  },
  {
    key: "support",
    label: "Support & Care Team",
    badge: "Support",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    accentColor: "#16a34a",
    accentLight: "#f0fdf4",
    Icon: FaHandsHelping,
    members: [
      { name: "Niloy Kumar Das",    role: "Manager & Site-in-Charge", qualifications: "", image: BLANK },
      { name: "Baidyanath Hembram", role: "Driver",                   qualifications: "", image: BLANK },
      { name: "Lalon Bag",          role: "Driver",                   qualifications: "", image: BLANK },
      { name: "Bharat Das",         role: "Driver",                   qualifications: "", image: BLANK },
      { name: "Amala Rai",          role: "Class Aunty",              qualifications: "", image: BLANK_F },
      { name: "Aparna Lohar",       role: "Class Aunty",              qualifications: "", image: BLANK_F },
    ],
  },
];

function AutoCarousel({ team, isOpen }: { team: Team; isOpen: boolean }) {
  // ×4 copies guarantees the looping seam is never in the visible viewport
  const items = [...team.members, ...team.members, ...team.members, ...team.members];
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef    = useRef<number>(0);
  const CARD_W    = 260; // px per card including gap
  const GAP       = 12;
  const SPEED     = 0.6; // px per frame

  useEffect(() => {
    if (!isOpen) {
      cancelAnimationFrame(rafRef.current);
      offsetRef.current = 0;
      if (trackRef.current) trackRef.current.style.transform = "translateX(0px)";
      return;
    }

    const oneSetWidth = team.members.length * (CARD_W + GAP);

    const step = () => {
      offsetRef.current += SPEED;
      if (offsetRef.current >= oneSetWidth) offsetRef.current -= oneSetWidth;
      if (trackRef.current)
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isOpen, team.members.length]);

  return (
    <div
      className="overflow-hidden transition-all duration-500 ease-in-out"
      style={{ maxHeight: isOpen ? "600px" : "0px", opacity: isOpen ? 1 : 0 }}
    >
      {/* Two-column panel */}
      <div
        className="flex flex-col md:flex-row"
        style={{ backgroundColor: team.accentLight }}
      >
        {/* ── Left: team description ── */}
        <div
          className="flex-shrink-0 flex flex-col justify-center gap-4 px-6 py-6 md:w-96"
          style={{ borderRight: `1px solid ${team.accentColor}18` }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: team.accentColor + "20" }}
            >
              <team.Icon size={26} style={{ color: team.accentColor }} />
            </div>
            <h4 className="font-black text-[#212529] text-xl leading-snug">{team.label}</h4>
          </div>
          {/* Member name list */}
          <ul className="space-y-1">
            {team.members.map((m) => (
              <li key={m.name} className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: team.accentColor }}
                />
                <span className="text-[11px] text-gray-600 font-semibold leading-tight">{m.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: scrolling carousel ── */}
        <div className="relative flex-1 overflow-hidden py-5">
          {/* Left-edge blur overlay */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${team.accentLight} 0%, transparent)`,
            }}
          />

          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{ gap: `${GAP}px`, paddingLeft: `${GAP}px`, width: "max-content" }}
          >
            {items.map((m, vi) => (
              <div
                key={vi}
                className="flex-shrink-0"
                style={{ width: `${CARD_W}px` }}
              >
                <div
                  className="rounded-2xl overflow-hidden shadow-lg group relative bg-white hover:-translate-y-1 transition-transform duration-300"
                  style={{ border: `1px solid ${team.accentColor}18` }}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <p className="font-black text-white text-base leading-tight drop-shadow">{m.name}</p>
                      {m.qualifications && (
                        <p className="text-white/70 text-[11px] leading-snug mt-1 drop-shadow line-clamp-2">
                          {m.qualifications}
                        </p>
                      )}
                      {m.role && m.role !== "Teacher" && (
                        <span
                          className="inline-block text-[9px] font-black uppercase tracking-widest mt-1.5 px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: team.accentColor, color: "#fff" }}
                        >
                          {m.role}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeacherTeamsTimeline() {
  const [activeKey, setActiveKey] = useState<string>("arts");

  return (
    <div className="relative w-full">
      <div className="space-y-4">
        {teams.map((team, i) => {
          const isOpen = activeKey === team.key;
          return (
            <AnimateIn key={team.key} direction="left" delay={i * 0.1}>
              <div
                className="relative cursor-pointer group"
                onMouseEnter={() => setActiveKey(team.key)}
              >
                <div
                  className="rounded-2xl border overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: isOpen ? team.accentColor + "88" : "#e5e7eb",
                    boxShadow: isOpen
                      ? `0 8px 32px ${team.accentColor}22`
                      : "0 1px 4px rgba(0,0,0,0.05)",
                    backgroundColor: isOpen ? team.accentLight : "#fff",
                  }}
                >
                  {/* Header row — only shown when collapsed */}
                  {!isOpen && (
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div
                      className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
                      style={{ backgroundColor: team.accentColor + "20" }}
                    >
                      <team.Icon size={21} style={{ color: team.accentColor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest ${team.badgeBg} ${team.badgeText} px-2 py-0.5 rounded-full inline-block mb-0.5`}
                      >
                        {team.badge}
                      </span>
                      <h4 className="font-black text-[#212529] text-base leading-snug">{team.label}</h4>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {team.members.length} member{team.members.length !== 1 ? "s" : ""}
                        <span className="ml-2 text-[10px]">— hover to explore</span>
                      </p>
                    </div>
                    <FaChevronRight
                      size={12}
                      className="flex-shrink-0 transition-all duration-300"
                      style={{ color: "#d1d5db" }}
                    />
                  </div>
                  )}

                  <AutoCarousel team={team} isOpen={isOpen} />
                </div>
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </div>
  );
}
