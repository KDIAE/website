import type { Metadata } from "next";
import Link from "next/link";

import AnimateIn from "@/components/AnimateIn";
import AnimateStagger from "@/components/AnimateStagger";
import StaggerItem from "@/components/StaggerItem";
import MarqueeStrip from "@/components/MarqueeStrip";
import {
  FaGraduationCap, FaHandsHelping, FaLeaf, FaUsers, FaArrowRight,
  FaBook, FaUserTie, FaChevronRight,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Our Team – Educators & Staff | KDIAE",
  description:
    "Meet the dedicated team of qualified CBSE-certified teachers, administrative staff, support personnel, and coaches who make KD Institute of Advance Education exceptional in Hooghly, West Bengal.",
  keywords: [
    "KDIAE teachers",
    "KDIAE staff",
    "CBSE certified educators Hooghly",
    "KD Institute teaching staff",
    "school faculty KDIAE",
    "qualified teachers Hooghly",
  ],
  alternates: { canonical: "https://kdiae.in/about/team" },
  openGraph: {
    title: "Our Team – Educators & Staff | KDIAE",
    description:
      "Meet the passionate teachers and staff who bring excellence to KD Institute of Advance Education, Hooghly.",
    url: "https://kdiae.in/about/team",
    images: [
      {
        url: "https://cdn.kdiae.in/gallery/events/gal_1772650456_ba4dbe0a.jpg",
        width: 1200,
        height: 630,
        alt: "KDIAE Team – Educators and Staff",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team – Educators & Staff | KDIAE",
    description:
      "Meet the passionate teachers and staff who bring excellence to KD Institute of Advance Education, Hooghly.",
    images: ["https://cdn.kdiae.in/gallery/events/gal_1772650456_ba4dbe0a.jpg"],
  },
};

const teachers = [
  {
    name: "Priyanka Datta",
    role: "Vice Principal",
    qualifications: "BSc. – Biotechnology, MSc. – Biotechnology, BEd.",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Priyanka_Datta.png",
  },
  {
    name: "Kingshuk Mukherjee",
    role: "Teacher",
    qualifications: "BA – English, MA – History, D.El.Ed",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Kingshuk_Mukherjee.JPG",
  },
  {
    name: "Sanchita Chatterjee",
    role: "Teacher",
    qualifications: "MA – Bengali, B.Ed",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Sanchita_Chatterjee.png",
  },
  {
    name: "Maitrayee Bhattacharya",
    role: "Teacher",
    qualifications: "MA – Sanskrit (Montessori-Trained)",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Maitrayee_Bhattacharya.png",
  },
  {
    name: "Saswati Roy",
    role: "Teacher",
    qualifications: "MA, B.Ed",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Saswati_Roy.JPG",
  },
  {
    name: "Paromita Banerjee",
    role: "Teacher",
    qualifications: "B.Sc Botany, M.Sc Environmental Biotechnology, B.Ed",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Paromita_Banerjee.png",
  },
  {
    name: "Trayedipa Dutta",
    role: "Teacher",
    qualifications: "M.Sc Botany (Specialization Microbiology), B.Ed",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Trayedipa_Dutta.png",
  },
  {
    name: "Rohit Kullu",
    role: "Teacher",
    qualifications: "B.Com (Accounting & Finance), Dip in Computer Application",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Rohit_Kullu.JPG",
  },
  {
    name: "Abir Kumar Chanda",
    role: "Teacher",
    qualifications: "B.Sc Mathematics, B.Ed",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Abir_Kumar_Chanda.JPG",
  },
  {
    name: "Juhi Khatun",
    role: "Teacher",
    qualifications: "MA Bengali, M.T.T, D.El.Ed",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Juhi_Khatun.JPG",
  },
  {
    name: "Maya Ghosh",
    role: "Teacher",
    qualifications: "B.Com (Accountancy), Dip in Computer & Digital Marketing",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Maya_Ghosh.JPG",
  },
  {
    name: "Smritikana Ghosh",
    role: "Teacher",
    qualifications: "Abacus Trainer & Dance Instructor",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/teaching_faculty/Smritikana_Ghosh.png",
  },
];

const BLANK = "https://cdn.kdiae.in/blank_person.png";

const adminStaff = [
  {
    name: "Piyali Ghosh",
    role: "Counsellor & Office-in-Charge",
    qualifications: "MA (Bengali), B.Ed, B.Lib.I.Sc.",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/blank_person_female.png",
  },
  {
    name: "Sathi Kat",
    role: "Inventory-in-Charge",
    qualifications: "BA., D.El.Ed",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/blank_person_female.png",
  },
  {
    name: "Sangita Goswami",
    role: "Marketing Team Member",
    qualifications: "MA (Philosophy), B.Ed",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/blank_person_female.png",
  },
];

const supportStaff = [
  {
    name: "Niloy Kumar Das",
    role: "Manager & Site-in-Charge",
    qualifications: "",
    image: BLANK,
  },
  {
    name: "Baidyanath Hembram",
    role: "Driver",
    qualifications: "",
    image: BLANK,
  },
  {
    name: "Lalon Bag",
    role: "Driver",
    qualifications: "",
    image: BLANK,
  },
  {
    name: "Bharat Das",
    role: "Driver",
    qualifications: "",
    image: BLANK,
  },
  {
    name: "Amala Rai",
    role: "Class Aunty",
    qualifications: "",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/blank_person_female.png",
  },
  {
    name: "Aparna Lohar",
    role: "Class Aunty",
    qualifications: "",
    image: "https://cdn.kdiae.in/cdn-cgi/image/format=webp,quality=80,width=800/blank_person_female.png",
  },
];

const ourTeam = [
  {
    name: "Teaching Faculty",
    role: "CBSE Certified Educators",
    icon: FaGraduationCap,
    desc: "Our teachers are qualified, passionate, and committed professionals who bring subjects to life with engaging methodologies.",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    ringColor: "bg-blue-100",
  },
  {
    name: "Administrative Staff",
    role: "Operations & Coordination",
    icon: FaUserTie,
    desc: "A dedicated team ensuring seamless day-to-day operations, parent communication, and institutional management.",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-500",
    ringColor: "bg-amber-100",
  },
  {
    name: "Support & Care Staff",
    role: "Safety, Health & Welfare",
    icon: FaHandsHelping,
    desc: "Trained personnel focused on student safety, health, transport, and the general well-being of every child.",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
    ringColor: "bg-pink-100",
  },
  {
    name: "Sports & Activity Coaches",
    role: "Physical & Co-curricular",
    icon: FaLeaf,
    desc: "Coaches guiding students in sports, arts, and co-curricular programs that build teamwork and healthy habits.",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    ringColor: "bg-green-100",
  },
  {
    name: "Library & Resource Team",
    role: "Knowledge & Digital Resources",
    icon: FaBook,
    desc: "Curating an inspiring reading environment and digital resources that fuel curiosity and independent learning.",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    ringColor: "bg-purple-100",
  },
  {
    name: "Parent-Teacher Council",
    role: "Community Partnership",
    icon: FaUsers,
    desc: "Parents and teachers working together in an active partnership to support every child's academic and personal journey.",
    bg: "bg-sky-50",
    iconColor: "text-sky-600",
    ringColor: "bg-sky-100",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#212529] text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0">
          <img src="https://cdn.kdiae.in/gallery/events/gal_1775935050_860bfbb5.jpg" alt="Our Team" className="w-full h-full object-cover object-center opacity-20" />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCA2B]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-16 right-1/4 opacity-10 animate-float"><FaUsers size={52} className="text-[#FFCA2B]" /></div>
          <div className="absolute bottom-10 left-1/3 opacity-10 animate-float-slow"><FaGraduationCap size={44} className="text-blue-200" /></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimateIn direction="down" delay={0.05}>
            <span className="inline-block bg-[#FFCA2B]/20 text-[#FFCA2B] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Our Team</span>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.15}>
            <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">Our Team</h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.25}>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              The passionate and dedicated professionals who make KDIAE a world-class learning environment.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.35}>
            <div className="flex justify-center gap-2 mt-8 text-sm text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <span>/</span>
              <span className="text-white font-semibold">Our Team</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <MarqueeStrip items={["Teaching Faculty", "Administrative Staff", "Support & Care", "Sports Coaches", "Library Team", "Parent-Teacher Council"]} speed={22} bgClassName="bg-[#FFCA2B]" textClassName="text-[#212529] font-black" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Teachers Grid */}
          <AnimateIn direction="up" className="text-center mt-10 md:mb-20 mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">Meet Our Teachers</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Qualified, passionate educators dedicated to nurturing every student's potential.
            </p>
          </AnimateIn>

          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.07}>
            {teachers.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
                  {/* Photo area */}
                  <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-[#FFCA2B]/30 to-gray-100 overflow-hidden">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-[#FFCA2B]/30 flex items-center justify-center">
                          <FaGraduationCap size={40} className="text-[#212529]/50" />
                        </div>
                      </div>
                    )}
                    {/* bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#212529]/70 to-transparent" />
                    {t.role !== "Teacher" && (
                      <div className="absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-widest text-[#FFCA2B] bg-[#212529]/80 px-2 py-0.5 rounded-full">
                        {t.role}
                      </div>
                    )}
                  </div>
                  {/* Info area */}
                  <div className="p-5 flex flex-col gap-1 flex-1">
                    <h3 className="font-black text-[#212529] text-base leading-snug">{t.name}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{t.qualifications}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>

          {/* Library & Resource Team */}
          <AnimateIn direction="up" className="text-center mt-20 mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">Library &amp; Resource Team</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              The administrative and resource professionals who keep our institution informed, organised, and connected.
            </p>
          </AnimateIn>

          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {adminStaff.map((s) => (
              <StaggerItem key={s.name}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-purple-50 to-gray-100 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#212529]/70 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col gap-1 flex-1">
                    <h3 className="font-black text-[#212529] text-base leading-snug">{s.name}</h3>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-yellow-500">{s.role}</div>
                    {s.qualifications && <p className="text-gray-400 text-xs leading-relaxed">{s.qualifications}</p>}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>

          {/* Support Team */}
          <AnimateIn direction="up" className="text-center mt-20 mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">Support &amp; Care Team</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              The operations and care staff who ensure safety, transport, and a nurturing environment for every student.
            </p>
          </AnimateIn>

          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {supportStaff.map((s) => (
              <StaggerItem key={s.name}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-pink-50 to-gray-100 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#212529]/70 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col gap-1 flex-1">
                    <h3 className="font-black text-[#212529] text-base leading-snug">{s.name}</h3>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-yellow-500">{s.role}</div>
                    {s.qualifications && <p className="text-gray-400 text-xs leading-relaxed">{s.qualifications}</p>}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>

          {/* CTA */}
          <AnimateIn direction="zoom" delay={0.2}>
            <div className="mt-14 bg-gradient-to-r from-[#FFCA2B] to-yellow-400 rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-x-1/3 translate-y-1/3" />
              </div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#007BFF]/10 flex items-center justify-center mx-auto mb-4">
                  <FaUsers size={28} className="text-[#212529]" />
                </div>
                <h3 className="text-2xl font-black text-[#212529] mb-2">Interested in Joining Our Team?</h3>
                <p className="text-[#212529]/70 mb-6 max-w-xl mx-auto">
                  We're always looking for passionate educators and driven professionals to grow with us. Reach out and be part of our mission.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#212529] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#212529] hover:scale-105 transition-all shadow-lg">
                  Get In Touch <FaArrowRight size={13} />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
