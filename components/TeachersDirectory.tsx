"use client";

import { useState, useMemo, useEffect } from "react";
import {
  FaSearch,
  FaTimes,
  FaArrowRight,
  FaGraduationCap,
  FaBookOpen,
  FaQuoteLeft,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

export interface Teacher {
  id: string;
  name: string;
  aliases?: string[];
  category: "Science" | "Arts" | "Pre-Primary" | "Office Team" | "Support";
  badge: string;
  role: string;
  qualification: string;
  bio: string;
  image: string;
  subjects?: string[];
  quote?: string;
}

const CDN = (path: string) =>
  `https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/${path}`;
const BLANK_F =
  "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/blank_person_female.png";
const BLANK_M = "https://cdn.kdiae.in/blank_person.png";

const CATEGORIES = [
  "All",
  "Science",
  "Arts",
  "Pre-Primary",
  "Office Team",
  "Support",
] as const;
type CategoryType = (typeof CATEGORIES)[number];

const TEACHERS: Teacher[] = [
  {
    id: "trayedipa-dutta",
    name: "Trayedipa Dutta",
    category: "Science",
    badge: "Science",
    role: "Science Teacher",
    qualification: "M.Sc Botany, B.Ed",
    bio: "Passionate about plant sciences and hands-on learning, she helps students explore the wonders of the natural world.",
    image: CDN("Trayedipa_Dutta.png"),
    subjects: ["Botany", "Biology", "Microbiology", "General Science"],
    quote: "Science is seeing what everyone else has seen, and thinking what no one else has thought.",
  },
  {
    id: "rohit-kullu",
    name: "Rohit Kullu",
    category: "Science",
    badge: "Science",
    role: "Computer & Commerce Teacher",
    qualification: "B.Com, Dip Computer Application",
    bio: "Bringing real-world perspective to the classroom, he makes learning practical, engaging and future-ready.",
    image: CDN("Rohit_Kullu.JPG"),
    subjects: ["Computer Applications", "Information Technology", "Commerce & Finance"],
    quote: "Practical skills and digital literacy empower students for the opportunities of tomorrow.",
  },
  {
    id: "abir-kumar-chanda",
    name: "Abir Kumar Chanda",
    category: "Science",
    badge: "Science",
    role: "Mathematics Teacher",
    qualification: "B.Sc Mathematics, B.Ed",
    bio: "Known for his clear explanations and patient teaching style, he inspires confidence and curiosity in every student.",
    image: CDN("Abir_Kumar_Chanda.JPG"),
    subjects: ["Mathematics", "Logical Reasoning", "Algebra", "Geometry"],
    quote: "Mathematics teaches us that every complex challenge has a logical solution waiting to be discovered.",
  },
  {
    id: "paromita-banerjee",
    name: "Paromita Banerjee",
    category: "Science",
    badge: "Science",
    role: "Biotechnology & Science Teacher",
    qualification: "M.Sc Environmental Biotechnology, B.Ed",
    bio: "Dedicated to building strong fundamentals, she encourages critical thinking and a love for science.",
    image: CDN("Paromita_Banerjee.png"),
    subjects: ["Environmental Biotechnology", "Science", "Botany", "Ecology"],
    quote: "When students understand the scientific method, they learn to analyze the world with discernment and joy.",
  },
  {
    id: "kingshuk-mukherjee",
    name: "Sourav Mukherjee",
    aliases: ["Kingshuk Mukherjee", "Sourav Mukherjee"],
    category: "Arts",
    badge: "Arts",
    role: "English & Social Studies Teacher",
    qualification: "M.A English, B.Ed",
    bio: "Brings literature to life with creativity and discussion, helping students find their own voice.",
    image: CDN("Kingshuk_Mukherjee.JPG"),
    subjects: ["English Literature", "History", "Creative Writing", "Social Studies"],
    quote: "Literature connects us across centuries and allows young minds to discover their authentic expression.",
  },
  {
    id: "maitrayee-bhattacharya",
    name: "Anindita Roy",
    aliases: ["Maitrayee Bhattacharya", "Anindita Roy"],
    category: "Pre-Primary",
    badge: "Pre-Primary",
    role: "Early Childhood Educator",
    qualification: "B.Ed (Early Childhood)",
    bio: "Creates a warm and nurturing environment where our youngest learners grow with confidence and joy.",
    image: CDN("Maitrayee_Bhattacharya.png"),
    subjects: ["Early Childhood Development", "Foundational Phonics", "Montessori Activities", "Sanskrit"],
    quote: "In the early years, warmth, patience, and encouragement build the foundation for lifelong learning.",
  },
  {
    id: "saswati-roy",
    name: "Debashis Sen",
    aliases: ["Saswati Roy", "Debashis Sen"],
    category: "Arts",
    badge: "Arts",
    role: "History & Humanities Teacher",
    qualification: "M.A History, B.Ed",
    bio: "Makes history engaging by connecting the past with today's world, sparking curiosity and meaningful conversations.",
    image: CDN("Saswati_Roy.JPG"),
    subjects: ["World History", "Indian Heritage", "Civic Studies", "Humanities"],
    quote: "Understanding our history empowers students to shape an enlightened and responsible future.",
  },
  {
    id: "piyali-ghosh",
    name: "Piyali Ghosh",
    category: "Office Team",
    badge: "Office Team",
    role: "Counsellor & Office-in-Charge",
    qualification: "MA (Bengali), B.Ed, B.Lib.I.Sc.",
    bio: "Guides students and parents with warmth and clarity, overseeing office operations with care and precision.",
    image: CDN("Piyali_Ghosh.jpg"),
    subjects: ["Student Counselling", "Office Administration", "Parent Support"],
    quote: "A caring word and an organized office together create the foundation for a thriving school.",
  },
  {
    id: "juhi-khatun",
    name: "Juhi Khatun",
    category: "Pre-Primary",
    badge: "Pre-Primary",
    role: "Primary Section Teacher",
    qualification: "MA Bengali, M.T.T, D.El.Ed",
    bio: "Inspires young minds with joyful phonics, lively storytelling, and engaging interactive foundation exercises.",
    image: CDN("Juhi_Khatun.JPG"),
    subjects: ["Primary Bengali", "Rhymes & Recitation", "Activity-Based Learning"],
    quote: "Every story shared in class opens a window into a child's imagination and language fluency.",
  },
  {
    id: "maya-ghosh",
    name: "Maya Ghosh",
    category: "Pre-Primary",
    badge: "Pre-Primary",
    role: "Primary & Digital Skills Teacher",
    qualification: "B.Com, Dip Computer & Digital Mktg",
    bio: "Blends creative activities with modern digital learning tools to make foundational learning engaging and memorable.",
    image: CDN("Maya_Ghosh.JPG"),
    subjects: ["Foundational Numeracy", "Art & Craft", "Early Digital Concepts"],
    quote: "Engaging both hands and minds leads to deep, joyful, and permanent understanding.",
  },
  {
    id: "smritikana-ghosh",
    name: "Smritikana Ghosh",
    category: "Pre-Primary",
    badge: "Pre-Primary",
    role: "Abacus Trainer & Dance Instructor",
    qualification: "Abacus Trainer & Dance Instructor",
    bio: "Empowers young students with mental arithmetic agility and rhythmic expression, boosting both focus and self-esteem.",
    image: CDN("Smritikana_Ghosh.png"),
    subjects: ["Mental Math & Abacus", "Creative Movement", "Performing Arts"],
    quote: "When rhythm and numbers dance together, children develop immense confidence and cognitive focus.",
  },
  {
    id: "sanchita-chatterjee",
    name: "Sanchita Chatterjee",
    category: "Arts",
    badge: "Arts",
    role: "Bengali Language Teacher",
    qualification: "MA – Bengali, B.Ed",
    bio: "Cultivates a profound appreciation for regional literature, expressive prose, and eloquent speech in every student.",
    image: CDN("Sanchita_Chatterjee.png"),
    subjects: ["Bengali Literature", "Elocution", "Creative Composition"],
    quote: "Connecting with our rich mother tongue develops cultural pride and eloquence of thought.",
  },
  {
    id: "chaitali-singh",
    name: "Chaitali Singh",
    category: "Arts",
    badge: "Arts",
    role: "English Language Teacher",
    qualification: "BA English, B.Ed",
    bio: "Fosters reading fluency, grammar mastery, and creative speaking to equip learners with articulate communication.",
    image: CDN("Chaitali_Singh.jpg"),
    subjects: ["English Language", "Grammar", "Creative Writing"],
    quote: "Clear communication is the bridge to connection, leadership, and personal growth.",
  },
  {
    id: "sathi-kat",
    name: "Sathi Kat",
    category: "Office Team",
    badge: "Office Team",
    role: "Inventory-in-Charge",
    qualification: "BA, D.El.Ed",
    bio: "Maintains optimal learning supplies, laboratory resources, and school inventory with meticulous dedication.",
    image: CDN("Sathi_Kat.jpg"),
    subjects: ["Inventory Management", "Academic Resources"],
    quote: "Organized resources ensure that teachers and students have everything they need to succeed.",
  },
  {
    id: "sangita-goswami",
    name: "Sangita Goswami",
    category: "Office Team",
    badge: "Office Team",
    role: "Marketing & Outreach",
    qualification: "MA (Philosophy), B.Ed",
    bio: "Coordinates admissions, parent outreach, and school events with warmth, clarity, and dedicated professionalism.",
    image: CDN("Sangita_Goswami.jpg"),
    subjects: ["Parent Relations", "Admissions Support", "Community Outreach"],
    quote: "We believe in welcoming every family as a true partner in their child's educational journey.",
  },
  {
    id: "niloy-kumar-das",
    name: "Niloy Kumar Das",
    category: "Support",
    badge: "Support",
    role: "Manager & Site-in-Charge",
    qualification: "Campus Operations & Safety",
    bio: "Oversees campus maintenance, safety compliance, and transport operations to ensure a safe learning environment.",
    image: CDN("Niloy_Kumar_Das.jpg"),
    subjects: ["Campus Safety", "Facilities Oversight", "Transport"],
    quote: "A secure and well-tended campus allows students to learn with complete peace of mind.",
  },
];

// Badge styling helper
function getBadgeClasses(category: Teacher["category"]) {
  switch (category) {
    case "Science":
      return "bg-[#e0f2fe] text-[#0369a1] border-[#bae6fd]/60";
    case "Arts":
      return "bg-[#ede9fe] text-[#6d28d9] border-[#ddd6fe]/60";
    case "Pre-Primary":
      return "bg-[#fce7f3] text-[#be185d] border-[#fbcfe8]/60";
    case "Office Team":
      return "bg-[#e0f2fe] text-[#0284c7] border-[#bae6fd]/60";
    case "Support":
      return "bg-[#dcfce7] text-[#15803d] border-[#bbf7d0]/60";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
}

export default function TeachersDirectory() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTeacher(null);
    };
    if (selectedTeacher) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedTeacher]);

  const filteredTeachers = useMemo(() => {
    return TEACHERS.filter((teacher) => {
      const matchesCategory =
        activeCategory === "All" ||
        (activeCategory === "Support"
          ? teacher.category === "Support"
          : teacher.category === activeCategory);

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const nameMatch = teacher.name.toLowerCase().includes(q);
      const aliasMatch = teacher.aliases?.some((a) => a.toLowerCase().includes(q));
      const qualMatch = teacher.qualification.toLowerCase().includes(q);
      const roleMatch = teacher.role.toLowerCase().includes(q);
      const bioMatch = teacher.bio.toLowerCase().includes(q);
      const subjectMatch = teacher.subjects?.some((s) => s.toLowerCase().includes(q));

      return nameMatch || aliasMatch || qualMatch || roleMatch || bioMatch || subjectMatch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* ── Section Header matching design ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
        <div>
          {/* Yellow tag: — MEET OUR TEAM */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[3px] bg-[#FFCA2B] rounded-full inline-block" />
            <span className="text-xs font-black tracking-widest text-[#212529] uppercase">
              Meet Our Team
            </span>
          </div>

          {/* Heading with yellow underline under "Our" */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#212529] tracking-tight">
            <span className="relative inline-block">
              Our
              <span className="absolute left-0 -bottom-1.5 w-full h-[4px] bg-[#FFCA2B] rounded-full" />
            </span>{" "}
            Teachers
          </h2>
        </div>

        {/* Subtitle text */}
        <p className="text-gray-500 text-sm md:text-base max-w-md font-medium leading-relaxed">
          Dedicated educators. Diverse expertise. A shared mission — to help every student reach their potential.
        </p>
      </div>

      {/* ── Filter Tabs & Search Bar Row ── */}
      <div className="mt-6 sm:mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const displayLabel = cat === "Support" ? "Support Staff" : cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#212529] text-white shadow-sm ring-1 ring-[#212529]"
                    : "bg-white text-gray-700 border border-gray-200/90 hover:border-gray-300 hover:text-gray-900 shadow-xs"
                }`}
              >
                {displayLabel}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:w-96 flex-shrink-0">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <FaSearch size={14} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search teachers by name, subject or qualification..."
            className="w-full pl-10 pr-10 py-2.5 rounded-full border border-gray-200/90 bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFCA2B]/50 focus:border-[#FFCA2B] transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              title="Clear search"
            >
              <FaTimes size={13} />
            </button>
          )}
        </div>
      </div>

      {/* ── Teachers Grid ── */}
      {filteredTeachers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {filteredTeachers.map((teacher) => {
            const badgeClasses = getBadgeClasses(teacher.category);
            return (
              <div
                key={teacher.id}
                onClick={() => setSelectedTeacher(teacher)}
                className="bg-white rounded-3xl p-3.5 sm:p-4 border border-gray-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1"
              >
                {/* Image Container with Badge */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-3.5 flex-shrink-0">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Pill Tag floating at bottom-left */}
                  <div
                    className={`absolute bottom-2.5 left-2.5 z-10 text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs border backdrop-blur-xs ${badgeClasses}`}
                  >
                    {teacher.badge}
                  </div>
                </div>

                {/* Card Details */}
                <div className="flex-1 flex flex-col">
                  {/* Teacher Name */}
                  <h3 className="font-black text-[#212529] text-base sm:text-lg leading-snug group-hover:text-blue-600 transition-colors">
                    {teacher.name}
                  </h3>

                  {/* Qualifications */}
                  <p className="text-xs text-gray-500 font-semibold mt-1 line-clamp-1">
                    {teacher.qualification}
                  </p>

                  {/* Bio snippet */}
                  <p className="text-xs text-gray-600 mt-2.5 leading-relaxed line-clamp-3 flex-1">
                    {teacher.bio}
                  </p>

                  {/* Bottom link: View Profile → */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    <span className="flex items-center gap-1.5">
                      View Profile
                      <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-gray-50/70 rounded-3xl mt-8 border border-dashed border-gray-200">
          <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-3 text-gray-400">
            <FaSearch size={20} />
          </div>
          <h3 className="text-lg font-bold text-gray-800">No teachers found</h3>
          <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
            We couldn't find any educators matching &ldquo;{searchQuery}&rdquo; in {activeCategory}.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-5 py-2 rounded-full text-xs font-bold bg-[#212529] text-white hover:bg-black transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* ── Teacher Profile Modal ── */}
      {selectedTeacher && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedTeacher(null)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedTeacher(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <FaTimes size={14} />
            </button>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Photo */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-gray-100 shadow-md flex-shrink-0 relative">
                  <img
                    src={selectedTeacher.image}
                    alt={selectedTeacher.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <span
                    className={`absolute bottom-2 left-2 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs border ${getBadgeClasses(
                      selectedTeacher.category
                    )}`}
                  >
                    {selectedTeacher.badge}
                  </span>
                </div>

                {/* Header details */}
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-[#FFCA2B] uppercase tracking-wider mb-1">
                    {selectedTeacher.role}
                  </div>
                  <h3 className="text-2xl font-black text-[#212529] leading-tight">
                    {selectedTeacher.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mt-1.5">
                    <FaGraduationCap className="text-gray-400" />
                    <span>{selectedTeacher.qualification}</span>
                  </div>
                  <div className="mt-3">
                    <span className="inline-block text-xs font-bold px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      Department: {selectedTeacher.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio & Philosophy */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                    About the Educator
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {selectedTeacher.bio}
                  </p>
                </div>

                {selectedTeacher.quote && (
                  <div className="bg-amber-50/70 border-l-4 border-[#FFCA2B] p-4 rounded-r-2xl flex items-start gap-3">
                    <FaQuoteLeft size={16} className="text-[#FFCA2B] flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-gray-700 italic font-medium">
                      &ldquo;{selectedTeacher.quote}&rdquo;
                    </p>
                  </div>
                )}

                {selectedTeacher.subjects && selectedTeacher.subjects.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                      <FaBookOpen size={12} /> Key Focus Areas & Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeacher.subjects.map((sub) => (
                        <span
                          key={sub}
                          className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-lg border border-blue-100/60"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal footer CTA */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-gray-400">
                  KD Institute of Advance Education Faculty Directory
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#212529] hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
                  >
                    <FaEnvelope size={11} /> Contact School
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedTeacher(null)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
