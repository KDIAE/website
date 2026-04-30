import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import MarqueeStrip from "@/components/MarqueeStrip";
import { FaQuoteLeft, FaAward, FaUniversity, FaChevronRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Chairman's Message – Dr. Kalobaran Das | KDIAE",
  description:
    "Read the inspiring message from Dr. Kalobaran Das, Founder & Chairman of KD Institute of Advance Education, Hooghly. Learn about his vision for quality CBSE education in rural West Bengal.",
  keywords: [
    "KDIAE chairman",
    "Dr Kalobaran Das",
    "KD Institute founder",
    "CBSE school founder Hooghly",
    "chairman message KDIAE",
    "Purna Chandra Das Memorial Educational Trust",
  ],
  alternates: { canonical: "https://kdiae.in/about/chairman" },
  openGraph: {
    title: "Chairman's Message – Dr. Kalobaran Das | KDIAE",
    description:
      "Dr. Kalobaran Das – Founder & Chairman of KDIAE shares his vision for quality education in Hooghly, West Bengal.",
    url: "https://kdiae.in/about/chairman",
    images: [
      {
        url: "/chairman.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Kalobaran Das – Chairman, KDIAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chairman's Message – Dr. Kalobaran Das | KDIAE",
    description:
      "Dr. Kalobaran Das – Founder & Chairman of KDIAE shares his vision for quality education in Hooghly, West Bengal.",
    images: ["/chairman.jpg"],
  },
};

export default function ChairmanPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#212529] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/gal_1772651057_8640aa21.jpg" alt="Chairman" fill className="object-cover object-center opacity-20" />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCA2B]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-16 right-1/4 opacity-10 animate-float"><FaUniversity size={52} className="text-[#FFCA2B]" /></div>
          <div className="absolute bottom-10 left-1/3 opacity-10 animate-float-slow"><FaAward size={44} className="text-blue-200" /></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimateIn direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-black mt-1 mb-4">Chairman's Message</h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.3}>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
              A message from our Founder & Chairman, Dr. Kalobaran Das.
            </p>
          </AnimateIn>
          <AnimateIn direction="fade" delay={0.4}>
            <div className="flex justify-center items-center gap-2 mt-5 text-sm text-blue-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight size={10} />
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <FaChevronRight size={10} />
              <span className="text-white font-semibold">Chairman's Message</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <MarqueeStrip items={["Chairman's Message", "Dr. Kalobaran Das", "Founder & Vision", "Purna Chandra Das Memorial Trust", "KDIAE Leadership"]} speed={22} bgClassName="bg-[#FFCA2B]" textClassName="text-[#212529] font-black" />

      {/* Message */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="zoom" delay={0.1}>
            <div className="bg-[#212529] text-white rounded-3xl overflow-hidden shadow-2xl mb-12">
              <div className="md:flex">
                <div className="md:w-80 flex-shrink-0 bg-[#212529] flex flex-col items-center justify-center p-10 gap-5">
                  <div className="w-44 h-44 rounded-2xl overflow-hidden border-4 border-[#FFCA2B]/40 shadow-xl relative">
                    <Image src="/chairman.jpg" alt="Dr. Kalobaran Das" fill className="object-cover" sizes="176px" />
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-black text-[#FFCA2B]">Dr. Kalobaran Das</div>
                    <div className="text-blue-300 text-sm mt-1">Founder & Chairman</div>
                    <div className="text-blue-400 text-xs mt-0.5">KD Institute of Advance Education</div>
                  </div>
                  <div className="flex flex-col gap-2 text-center text-sm text-blue-300 border-t border-white/10 pt-4 w-full">
                    <span>M.Sc, Ph.D</span>
                    <span>Former Principal & Associate Professor</span>
                    <span>Jadavpur University Researcher</span>
                  </div>
                </div>
                <div className="flex-1 p-8 md:p-12">
                  <FaQuoteLeft size={36} className="text-[#FFCA2B]/40 mb-5" />
                  <p className="text-blue-100 leading-relaxed text-base mb-5">
                    It is with immense pride and a deep sense of responsibility that I welcome you to{" "}
                    <strong className="text-[#FFCA2B]">KD Institute of Advance Education</strong>. This school is a tribute
                    to the enduring power of knowledge and the vision of the Purna Chandra Das Memorial Educational Trust.
                  </p>
                  <p className="text-blue-100 leading-relaxed text-base mb-5">
                    We believe that true education is about building character, igniting curiosity, and cultivating the
                    skills necessary for lifelong success. Our commitment is to provide a nurturing ecosystem where academic
                    excellence goes hand in hand with moral and emotional growth.
                  </p>
                  <p className="text-blue-100 leading-relaxed text-base mb-5">
                    The establishment of KD Institute of Advance Education is my heartfelt endeavour to honour and
                    materialise the dreams of my father, <strong className="text-[#FFCA2B]">Late Purna Chandra Das</strong>,
                    a renowned teacher who believed that education is the greatest gift one can give.
                  </p>
                  <p className="text-blue-100 leading-relaxed text-base">
                    We are dedicated to creating leaders and thinkers who will contribute positively to our society and
                    nation. Join us as we embark on this exciting journey of learning and discovery together.
                  </p>
                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-[#FFCA2B]/20 flex items-center justify-center flex-shrink-0">
                      <FaAward size={20} className="text-[#FFCA2B]" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Dr. Kalobaran Das</div>
                      <div className="text-[#FFCA2B] text-sm">Founder & Chairman — KDIAE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Quick profile */}
          <AnimateIn direction="up" delay={0.15}>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: "Experience", value: "20+ Years", sub: "In Education" },
                { label: "Roles", value: "Principal", sub: "Professor & Researcher" },
                { label: "Research", value: "Jadavpur", sub: "University" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                  <div className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">{s.label}</div>
                  <div className="text-2xl font-black text-[#212529]">{s.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
