import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
        url: "/gallery/gal_1772650456_ba4dbe0a.jpg",
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
    images: ["/gallery/gal_1772650456_ba4dbe0a.jpg"],
  },
};

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
      <section className="bg-[#212529] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/gal_1774722743_c5dd5b9e.jpg" alt="Our Team" fill className="object-cover object-center opacity-20" />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCA2B]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-16 right-1/4 opacity-10 animate-float"><FaUsers size={52} className="text-[#FFCA2B]" /></div>
          <div className="absolute bottom-10 left-1/3 opacity-10 animate-float-slow"><FaGraduationCap size={44} className="text-blue-200" /></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimateIn direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-black mt-1 mb-4">Our Team</h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.3}>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
              The passionate and dedicated professionals who make KDIAE a world-class learning environment.
            </p>
          </AnimateIn>
          <AnimateIn direction="fade" delay={0.4}>
            <div className="flex justify-center items-center gap-2 mt-5 text-sm text-blue-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight size={10} />
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <FaChevronRight size={10} />
              <span className="text-white font-semibold">Our Team</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <MarqueeStrip items={["Teaching Faculty", "Administrative Staff", "Support & Care", "Sports Coaches", "Library Team", "Parent-Teacher Council"]} speed={22} bgClassName="bg-[#FFCA2B]" textClassName="text-[#212529] font-black" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">The People Behind KDIAE</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              A diverse team working together to deliver a world-class education experience for every student.
            </p>
          </AnimateIn>

          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {ourTeam.map((t) => (
              <StaggerItem key={t.name}>
                <div className={`${t.bg} rounded-2xl p-8 border border-transparent hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full`}>
                  <div className={`w-16 h-16 rounded-2xl ${t.ringColor} group-hover:scale-110 flex items-center justify-center mb-5 transition-transform duration-300`}>
                    <t.icon size={28} className={t.iconColor} />
                  </div>
                  <h3 className="font-black text-[#212529] text-xl mb-1">{t.name}</h3>
                  <div className="text-xs font-bold uppercase tracking-widest text-yellow-500 mb-3">{t.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
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
