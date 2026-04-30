import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import AnimateStagger from "@/components/AnimateStagger";
import StaggerItem from "@/components/StaggerItem";
import MarqueeStrip from "@/components/MarqueeStrip";

export const metadata: Metadata = {
  title: "Academics – CBSE Curriculum from Nursery to Class VI",
  description:
    "Explore KDIAE's CBSE-aligned academic programs for ages 3–11 across three stages: Early Childhood, Lower Primary, and Upper Primary. Smart classrooms, activity-based learning.",
  keywords: [
    "CBSE academics Hooghly",
    "KDIAE curriculum",
    "nursery CBSE school West Bengal",
    "class VI CBSE school",
    "early childhood education Hooghly",
    "primary school CBSE West Bengal",
    "smart classroom school Hooghly",
    "activity-based learning CBSE",
  ],
  alternates: { canonical: "https://kdiae.in/academics" },
  openGraph: {
    title: "Academics – CBSE Curriculum from Nursery to Class VI",
    description: "CBSE-aligned programs for ages 3–11 at KDIAE, Hooghly. Smart classrooms, qualified faculty.",
    url: "https://kdiae.in/academics",
    images: [
      {
        url: "/gallery/gal_1772650456_ba4dbe0a.jpg",
        width: 1200,
        height: 630,
        alt: "KDIAE Academics – CBSE Classroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academics – CBSE Curriculum from Nursery to Class VI",
    description: "CBSE-aligned programs for ages 3–11 at KDIAE, Hooghly. Smart classrooms, qualified faculty.",
    images: ["/gallery/gal_1772650456_ba4dbe0a.jpg"],
  },
};
import {
  FaSeedling, FaStar, FaBook,
  FaLaptop, FaBookOpen, FaRunning, FaMusic, FaDesktop, FaPaintBrush,
  FaChartBar, FaPencilAlt, FaPalette, FaComments, FaArrowRight,
  FaCheckCircle, FaChevronRight,
} from "react-icons/fa";

const programs = [
  {
    stage: "Early Childhood",
    sub: "Nursery – UKG",
    age: "3–5 years",
    Icon: FaSeedling,
    gradient: "from-pink-500 to-rose-400",
    light: "bg-pink-50 border-pink-200",
    subjects: ["Language & Literacy", "Number Sense", "Creative Arts", "Physical Development", "Environmental Awareness", "Social Skills"],
    desc: "Our early childhood program lays a strong foundation through play-based, experiential learning. Children are introduced to language, numbers, and the world around them in a joyful and nurturing environment.",
    highlight: "Play-Based Learning",
  },
  {
    stage: "Lower Primary",
    sub: "Std. I – III",
    age: "6–8 years",
    Icon: FaStar,
    gradient: "from-blue-500 to-[#007BFF]",
    light: "bg-blue-50 border-blue-200",
    subjects: ["English", "Hindi", "Mathematics", "Environmental Science", "Art & Craft", "Physical Education", "Value Education"],
    desc: "The lower primary years build core competencies in reading, writing, and arithmetic. A caring environment encourages curiosity, confidence, and a love for learning in every child.",
    highlight: "Building Strong Foundations",
  },
  {
    stage: "Upper Primary",
    sub: "Std. IV – VI",
    age: "9–11 years",
    Icon: FaBook,
    gradient: "from-emerald-500 to-teal-500",
    light: "bg-emerald-50 border-emerald-200",
    subjects: ["English", "Hindi / Bengali", "Mathematics", "Science", "Social Science", "Computer Applications", "Art & Craft", "Physical Education"],
    desc: "Upper primary students deepen their knowledge across core subjects while developing analytical thinking, teamwork, and independent study habits — setting them up for future academic success.",
    highlight: "Deepening Knowledge",
  },
];

const infrastructure = [
  { Icon: FaLaptop, title: "Smart Classrooms", desc: "Digital boards and interactive tools make every lesson engaging and visual.", color: "bg-blue-500" },
  { Icon: FaBookOpen, title: "Library Corner", desc: "A curated collection of story books, activity books, and learning aids for young readers.", color: "bg-amber-500" },
  { Icon: FaRunning, title: "Play & Sports Area", desc: "Spacious, safe outdoor areas for physical activity, games, and motor skill development.", color: "bg-red-500" },
  { Icon: FaMusic, title: "Music & Dance", desc: "Dedicated sessions for music, dance, and performing arts to nurture creativity.", color: "bg-violet-500" },
  { Icon: FaDesktop, title: "Computer Lab", desc: "Age-appropriate digital literacy sessions to introduce children to technology early.", color: "bg-[#007BFF]" },
  { Icon: FaPaintBrush, title: "Art & Craft Room", desc: "Hands-on creative activities that develop fine motor skills and artistic expression.", color: "bg-rose-500" },
];

const assessments = [
  { Icon: FaChartBar, title: "Continuous Assessment", desc: "Regular classwork, oral tests, and project activities to track progress without pressure.", color: "bg-[#007BFF]" },
  { Icon: FaPencilAlt, title: "Term Examinations", desc: "Structured mid-term and end-term tests aligned with CBSE standards for each grade.", color: "bg-violet-500" },
  { Icon: FaPalette, title: "Activity-Based Evaluation", desc: "Performance in art, sports, and cultural events is recognised as part of holistic growth.", color: "bg-emerald-500" },
  { Icon: FaComments, title: "Parent-Teacher Meetings", desc: "Regular PTMs and written reports to keep parents informed and involved at every step.", color: "bg-rose-500" },
];

export default function AcademicsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#212529] text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0">
          <Image src="/gallery/gal_1775934779_3caa59db.jpg" alt="Academics" fill className="object-cover object-center opacity-20" />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#007BFF]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#FFCA2B]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimateIn direction="down" delay={0.05}>
            <span className="inline-block bg-[#FFCA2B]/20 text-[#FFCA2B] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Academics</span>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.15}>
            <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">
              Nurturing Young Minds<br /><span className="text-[#007BFF]">Nursery to Class VI</span>
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.25}>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              A warm, CBSE-aligned learning environment designed for children aged 3–11 — where every child&apos;s potential is discovered, nurtured, and celebrated.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.35}>
            <div className="flex justify-center gap-2 mt-8 text-sm text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-semibold">Academics</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <MarqueeStrip
        items={["CBSE Curriculum", "Nursery to Class VI", "Play-Based Learning", "Smart Classrooms", "Activity-Based Education", "Qualified & Caring Faculty"]}
        speed={22}
        bgClassName="bg-[#FFCA2B]"
        textClassName="text-[#212529] font-black"
      />

      {/* ── INTRO STATS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#212529] mb-5">CBSE Education for<br /><span className="text-[#007BFF]">Ages 3 to 11</span></h2>
            <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-lg">
              We follow the CBSE framework with a strong emphasis on joyful, activity-based learning. Our goal is not just academic achievement — but building confident, curious, and compassionate individuals from the very beginning.
            </p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              { value: "3", label: "Learning Stages", color: "text-[#007BFF]" },
              { value: "CBSE", label: "Affiliated Board", color: "text-[#FFCA2B]" },
              { value: "3–11", label: "Age Group (Years)", color: "text-emerald-500" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:-translate-y-1 transition-transform">
                  <div className={`text-4xl font-black ${s.color} mb-1`}>{s.value}</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#212529]">Our Academic <span className="text-[#007BFF]">Programs</span></h2>
          </AnimateIn>
          <div className="space-y-6">
            {programs.map((p, i) => (
              <AnimateIn key={p.stage} direction={i % 2 === 0 ? "left" : "right"} delay={0.05}>
                <div className={`bg-white rounded-3xl border ${p.light} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                  <div className="flex flex-col md:flex-row">
                    {/* Colored side panel */}
                    <div className={`bg-gradient-to-br ${p.gradient} p-8 flex flex-col items-center justify-center text-white md:w-60 flex-shrink-0 gap-3`}>
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <p.Icon size={30} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="font-black text-xl leading-tight">{p.stage}</div>
                        <div className="text-white/80 text-sm font-medium mt-0.5">{p.sub}</div>
                      </div>
                      <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">{p.age}</span>
                      <span className="bg-white/10 border border-white/30 text-white text-[10px] font-semibold px-3 py-1 rounded-full text-center leading-tight">{p.highlight}</span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-7">
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                      <p className="text-xs uppercase font-bold text-gray-400 mb-3 tracking-widest">Subjects & Activities</p>
                      <div className="flex flex-wrap gap-2">
                        {p.subjects.map((s) => (
                          <span key={s} className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full border border-gray-200 hover:bg-yellow-50 hover:border-[#FFCA2B]/50 transition-colors">
                            <FaCheckCircle size={9} className="text-emerald-500 flex-shrink-0" />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Pathway note */}
          <AnimateIn direction="up" delay={0.1}>
            <div className="mt-8 bg-[#212529] rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-4 text-white">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#FFCA2B] flex items-center justify-center">
                <FaChevronRight size={18} className="text-[#212529]" />
              </div>
              <div>
                <div className="font-black text-base text-[#FFCA2B]">Expanding Year by Year</div>
                <p className="text-gray-400 text-sm mt-0.5">Currently offering Nursery to Class VI (2026). Higher classes will be introduced progressively to ensure consistent quality and smooth academic continuity.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── INFRASTRUCTURE ── */}
      <section className="py-20 bg-[#212529] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#007BFF]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#FFCA2B]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black">Learning Beyond the <span className="text-[#007BFF]">Classroom</span></h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">Purpose-built spaces that make every part of school life memorable and enriching.</p>
          </AnimateIn>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {infrastructure.map((a) => (
              <StaggerItem key={a.title}>
                <div className="group bg-white/5 hover:bg-white/10 rounded-3xl p-6 border border-white/10 hover:border-[#FFCA2B]/30 hover:-translate-y-1 transition-all duration-300 flex gap-4 h-full">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${a.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <a.Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#FFCA2B] mb-1">{a.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ── ASSESSMENT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#212529]">How We <span className="text-[#007BFF]">Evaluate</span></h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Stress-free, holistic evaluation that celebrates every child's progress and strengths.</p>
          </AnimateIn>
          <AnimateStagger className="grid md:grid-cols-2 gap-5" staggerDelay={0.1}>
            {assessments.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group flex gap-4 bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <item.Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#212529] mb-1.5">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ── CTA ── */}
      <AnimateIn direction="zoom">
        <section className="py-20 bg-[#007BFF] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-white/5 rounded-full" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ready to Enrol<br />Your Child?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">Admissions are open for Nursery to Class VI for the 2026–27 academic year. Speak to our team today.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/admissions" className="inline-flex items-center gap-2 bg-[#FFCA2B] text-[#212529] font-black px-8 py-4 rounded-full hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg shadow-yellow-400/30 text-sm">
                Apply Now <FaArrowRight size={12} />
              </Link>
              <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#007BFF] hover:scale-105 transition-all text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </AnimateIn>
    </>
  );
}
