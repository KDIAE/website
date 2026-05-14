import type { Metadata } from "next";

import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import AnimateStagger from "@/components/AnimateStagger";
import StaggerItem from "@/components/StaggerItem";
import MarqueeStrip from "@/components/MarqueeStrip";
import { FaChevronRight, FaUserTie } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Administration – Leadership Team | KDIAE",
  description:
    "Meet the leadership and administrative team of KD Institute of Advance Education, Hooghly. Learn about our Chairman, Chief Advisor, Principal and governance structure that drives KDIAE's excellence.",
  keywords: [
    "KDIAE administration",
    "KDIAE leadership team",
    "KD Institute management",
    "CBSE school administration Hooghly",
    "school governance KDIAE",
    "Dr Kalobaran Das chairman",
    "Aneek Banerjee chief advisor KDIAE",
  ],
  alternates: { canonical: "https://kdiae.in/about/administration" },
  openGraph: {
    title: "Administration – Leadership Team | KDIAE",
    description:
      "Meet the leadership team governing KD Institute of Advance Education – Chairman, Advisors, and Principal in Hooghly, West Bengal.",
    url: "https://kdiae.in/about/administration",
    images: [
      {
        url: "https://cdn.kdiae.in/front_building.jpg",
        width: 1200,
        height: 630,
        alt: "KDIAE Administration – Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Administration – Leadership Team | KDIAE",
    description:
      "Meet the leadership team governing KD Institute of Advance Education – Chairman, Advisors, and Principal in Hooghly, West Bengal.",
    images: ["https://cdn.kdiae.in/front_building.jpg"],
  },
};

const administration = [
  {
    name: "Dr. Kalobaran Das",
    role: "Chairman",
    image: "https://cdn.kdiae.in/chairman.jpg",
    desc: "Founder & visionary with over 20 years in education as Professor and Principal. Former researcher at Jadavpur University. Established KDIAE in honour of his father, Late Purna Chandra Das.",
    href: "/about/chairman",
  },
  {
    name: "Aneek Banerjee",
    role: "Chief Advisor",
    image: "https://cdn.kdiae.in/chief_advisor.jpg",
    desc: "Strategic advisor providing guidance on institutional development, governance, and educational policy.",
    href: null,
  },
  {
    name: "Arijit Saha",
    role: "Executive Head – Technology & Innovation",
    image: "https://cdn.kdiae.in/executive_head.png",
    desc: "Leading the institute's technology vision and digital transformation to deliver a future-ready learning environment.",
    href: null,
  },
  {
    name: "Principal",
    role: "Principal",
    image: "https://cdn.kdiae.in/blank_person.png",
    desc: "Academic head committed to nurturing a culture of curiosity, excellence, and purposeful learning.",
    href: "/about/principal",
  },
  {
    name: "Priyanka Datta",
    role: "Vice Principal",
    image: "https://cdn.kdiae.in/vice_Principal.jpg",
    desc: "Dedicated to holistic education guided by core values of Courage, Compassion, Equality, and Integrity.",
    href: "/about/principal",
  },
];

export default function AdministrationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#212529] text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0">
          <img src="https://cdn.kdiae.in/gallery/events/gal_1772650456_ba4dbe0a.jpg" alt="Administration" className="w-full h-full object-cover object-center opacity-20" />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCA2B]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-16 right-1/4 opacity-10 animate-float"><FaUserTie size={52} className="text-[#FFCA2B]" /></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimateIn direction="down" delay={0.05}>
            <span className="inline-block bg-[#FFCA2B]/20 text-[#FFCA2B] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Administration</span>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.15}>
            <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">Administration</h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.25}>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Meet the dedicated leaders who guide, govern, and shape the future of KDIAE.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.35}>
            <div className="flex justify-center gap-2 mt-8 text-sm text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <span>/</span>
              <span className="text-white font-semibold">Administration</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <MarqueeStrip items={["Administration", "Managing Committee", "Chairman", "Chief Advisor", "Principal", "Vice Principal"]} speed={22} bgClassName="bg-[#FFCA2B]" textClassName="text-[#212529] font-black" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">Administration & Managing Committee</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              The leadership team committed to building an institution of excellence and integrity.
            </p>
          </AnimateIn>

          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {administration.slice(0, 3).map((a) => (
              <StaggerItem key={a.name}>
                <div className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 text-center h-full flex flex-col items-center">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-[#FFCA2B]/20 group-hover:border-[#FFCA2B] transition-colors shadow-md relative mb-5 flex-shrink-0">
                    <img src={a.image} alt={a.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="text-xs font-bold text-[#FFCA2B] uppercase tracking-widest mb-1">{a.role}</div>
                  <h3 className="font-black text-[#212529] text-lg mb-3">{a.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{a.desc}</p>
                  {a.href && (
                    <Link href={a.href} className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#212529] font-semibold hover:text-yellow-500 transition-colors">
                      Read Message <FaChevronRight size={10} />
                    </Link>
                  )}
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>

          <AnimateStagger className="grid sm:grid-cols-2 gap-8 lg:w-2/3 mx-auto mt-8" staggerDelay={0.1}>
            {administration.slice(3).map((a) => (
              <StaggerItem key={a.name}>
                <div className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 text-center h-full flex flex-col items-center">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-[#FFCA2B]/20 group-hover:border-[#FFCA2B] transition-colors shadow-md relative mb-5 flex-shrink-0">
                    <img src={a.image} alt={a.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="text-xs font-bold text-[#FFCA2B] uppercase tracking-widest mb-1">{a.role}</div>
                  <h3 className="font-black text-[#212529] text-lg mb-3">{a.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{a.desc}</p>
                  {a.href && (
                    <Link href={a.href} className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#212529] font-semibold hover:text-yellow-500 transition-colors">
                      Read Message <FaChevronRight size={10} />
                    </Link>
                  )}
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>
    </>
  );
}
