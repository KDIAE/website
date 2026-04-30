import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import MarqueeStrip from "@/components/MarqueeStrip";
import { FaQuoteLeft, FaChevronRight, FaGraduationCap } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Principal's Message – Priyanka Datta | KDIAE",
  description:
    "Read the inspiring words of guidance from the Principal and Vice Principal of KD Institute of Advance Education, Hooghly. Discover how KDIAE shapes young minds with purpose and care.",
  keywords: [
    "KDIAE principal",
    "Priyanka Datta principal",
    "principal message KDIAE",
    "CBSE school principal Hooghly",
    "KD Institute principal message",
    "vice principal KDIAE",
  ],
  alternates: { canonical: "https://kdiae.in/about/principal" },
  openGraph: {
    title: "Principal's Message – Priyanka Datta | KDIAE",
    description:
      "Inspiring words from the Principal and Vice Principal of KDIAE, Hooghly – shaping young minds with purpose.",
    url: "https://kdiae.in/about/principal",
    images: [
      {
        url: "/gallery/gal_1772651361_806dbeb5.jpg",
        width: 1200,
        height: 630,
        alt: "Principal's Message – KDIAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Principal's Message – Priyanka Datta | KDIAE",
    description:
      "Inspiring words from the Principal and Vice Principal of KDIAE, Hooghly – shaping young minds with purpose.",
    images: ["/gallery/gal_1772651361_806dbeb5.jpg"],
  },
};

export default function PrincipalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#212529] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/gal_1772651361_806dbeb5.jpg" alt="Principal" fill className="object-cover object-center opacity-20" />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCA2B]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-16 right-1/4 opacity-10 animate-float"><FaGraduationCap size={52} className="text-[#FFCA2B]" /></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimateIn direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-black mt-1 mb-4">Principal's Message</h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.3}>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
              Words of guidance and inspiration from our Principal and Vice Principal.
            </p>
          </AnimateIn>
          <AnimateIn direction="fade" delay={0.4}>
            <div className="flex justify-center items-center gap-2 mt-5 text-sm text-blue-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight size={10} />
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <FaChevronRight size={10} />
              <span className="text-white font-semibold">Principal's Message</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <MarqueeStrip items={["Principal's Message", "Vice Principal's Message", "Academic Leadership", "KDIAE Educators", "Priyanka Datta"]} speed={22} bgClassName="bg-[#FFCA2B]" textClassName="text-[#212529] font-black" />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Principal */}
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#212529] mt-2">Message from the Principal</h2>
          </AnimateIn>
          <AnimateIn direction="left" delay={0.1}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 md:flex mb-14">
              <div className="md:w-72 flex-shrink-0 bg-[#f0f7ff] flex flex-col items-center justify-center p-10 gap-5">
                <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-blue-200 shadow-lg relative">
                  <Image src="/blank_person.png" alt="Principal" fill className="object-cover" sizes="160px" />
                </div>
                <div className="text-center">
                  <div className="text-lg font-black text-[#212529]">Principal</div>
                  <div className="text-yellow-500 text-sm mt-0.5">Academic Head</div>
                  <div className="text-gray-500 text-xs mt-0.5">KD Institute of Advance Education</div>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <FaQuoteLeft size={28} className="text-[#FFCA2B]/40 mb-4" />
                <blockquote className="text-xl font-semibold text-[#212529] italic mb-5 leading-snug">
                  "Education is not the filling of a pail, but the lighting of a fire." — W.B. Yeats
                </blockquote>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  This quote reflects our belief that education should ignite curiosity, passion, and critical thinking
                  rather than encourage mere memorisation. At KD Institute of Advance Education, we are committed to
                  inspiring young minds with knowledge that grows endlessly.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  With the CBSE curriculum as our foundation, enriched by innovative teaching and co-curricular activities,
                  we aim to transform information into knowledge and knowledge into wisdom. We nurture inquisitive, resilient,
                  and collaborative learners while maintaining a strong partnership with parents.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm font-semibold">
                  Together, we shape future-ready individuals prepared to face the complexities of the world.
                </p>
                <div className="mt-6 text-xs text-yellow-500 font-bold uppercase tracking-widest">— Principal, KDIAE</div>
              </div>
            </div>
          </AnimateIn>

          {/* Vice Principal */}
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#212529] mt-2">Message from the Vice Principal</h2>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.1}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 md:flex">
              <div className="md:w-72 flex-shrink-0 bg-yellow-50 flex flex-col items-center justify-center p-10 gap-5">
                <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-yellow-300 shadow-lg relative">
                  <Image src="/vice_Principal.jpg" alt="Priyanka Datta" fill className="object-cover" sizes="160px" />
                </div>
                <div className="text-center">
                  <div className="text-lg font-black text-[#212529]">Priyanka Datta</div>
                  <div className="text-yellow-500 text-sm mt-0.5">Vice Principal</div>
                  <div className="text-gray-500 text-xs mt-0.5">KD Institute of Advance Education</div>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-10">
                <FaQuoteLeft size={28} className="text-[#FFCA2B]/40 mb-4" />
                <blockquote className="text-xl font-semibold text-[#212529] italic mb-5 leading-snug">
                  "The mind is not a vessel to be filled, but a fire to be kindled." — Plutarch
                </blockquote>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  Every child carries within them a world waiting to be explored. At our school, we are committed to
                  nurturing happiness, harmony, and a lifelong love for learning. Since its inception, KDIAE has strived to
                  go beyond conventional learning — nurturing confident, compassionate, and intelligent individuals who are
                  original in thought and decisive in action.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  Inspired by Gandhi's words — <em>"The best way to find yourself is to lose yourself in the service of others"</em> — we uphold the core values of{" "}
                  <strong className="text-[#212529]">Courage, Compassion, Equality, and Integrity</strong>. We believe in holistic education that blends academics, sports, co-curricular activities, and life skills.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm font-semibold">
                  Parents are a child's first educators, and we look forward to partnering with you in shaping a bright future. Let us together welcome a new world of learning — the moment is today.
                </p>
                <div className="mt-6 text-xs text-yellow-500 font-bold uppercase tracking-widest">— Priyanka Datta, Vice Principal</div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
