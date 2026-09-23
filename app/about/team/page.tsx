import type { Metadata } from "next";
import Link from "next/link";

import AnimateIn from "@/components/AnimateIn";
import MarqueeStrip from "@/components/MarqueeStrip";
import { FaGraduationCap, FaUsers, FaArrowRight } from "react-icons/fa";
import TeachersDirectory from "@/components/TeachersDirectory";

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
          {/* Teachers Directory Section */}
          <TeachersDirectory />

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
