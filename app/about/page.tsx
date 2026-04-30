import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import AnimateStagger from "@/components/AnimateStagger";
import StaggerItem from "@/components/StaggerItem";
import MarqueeStrip from "@/components/MarqueeStrip";
import {
  FaGraduationCap, FaArrowRight, FaMapMarkerAlt, FaUniversity,
  FaChevronRight, FaBook, FaEye, FaBullseye, FaUsers, FaUserTie,
} from "react-icons/fa";

const MilestonesTimeline = dynamic(() => import("@/components/MilestonesTimeline"), { loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-3xl" /> });

export const metadata: Metadata = {
  title: "About KDIAE – Our Story, Vision & Mission",
  description:
    "Learn about KD Institute of Advance Education – our founding story, vision, mission, and the passionate team behind our school in Hooghly, West Bengal.",
  alternates: { canonical: "https://kdiae.in/about" },
  openGraph: {
    title: "About KDIAE – Our Story, Vision & Mission",
    description: "The story, vision and mission behind KDIAE – a CBSE school in Hooghly, West Bengal.",
    url: "https://kdiae.in/about",
  },
};

const aboutSections = [
  {
    href: "/about/vision-mission",
    label: "Vision & Mission",
    icon: FaEye,
    desc: "Learn about our guiding principles, mission pillars, and the core values that define everything we do.",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    href: "/about/chairman",
    label: "Chairman's Message",
    icon: FaUniversity,
    desc: "A heartfelt message from our Founder & Chairman, Dr. Kalobaran Das.",
    bg: "bg-yellow-50",
    iconBg: "bg-amber-100",
    iconColor: "text-yellow-500",
  },
  {
    href: "/about/principal",
    label: "Principal's Message",
    icon: FaGraduationCap,
    desc: "Inspiring words from our Principal and Vice Principal Priyanka Datta.",
    bg: "bg-sky-50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    href: "/about/administration",
    label: "Administration",
    icon: FaUserTie,
    desc: "Meet the leadership team that governs and shapes the future of KDIAE.",
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    href: "/about/team",
    label: "Our Team",
    icon: FaUsers,
    desc: "Discover the dedicated professionals — teachers, coaches, and support staff — behind KDIAE.",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export default function AboutPage() {

  return (
    <>
      {/* Hero */}
      <section className="bg-[#212529] text-white py-20 overflow-hidden relative">
        <div className="absolute inset-0">
          <Image src="/gallery/front_building.jpg" alt="About KDIAE" fill className="object-cover object-center opacity-20" />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCA2B]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-16 right-1/4 opacity-10 animate-float"><FaUniversity size={52} className="text-[#FFCA2B]" /></div>
          <div className="absolute bottom-10 left-1/3 opacity-10 animate-float-slow"><FaGraduationCap size={44} className="text-blue-200" /></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimateIn direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-black mt-1 mb-4">Our Story, Values & People</h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.3}>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover the vision, mission, and dedicated individuals behind KD Institute of Advance Education.
            </p>
          </AnimateIn>
          <AnimateIn direction="fade" delay={0.4}>
            <div className="flex justify-center items-center gap-2 mt-5 text-sm text-blue-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight size={10} />
              <span className="text-white font-semibold">About Us</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <MarqueeStrip items={["About KDIAE", "Vision & Mission", "Chairman's Message", "Principal's Message", "Administration", "Our Team"]} speed={22} bgClassName="bg-[#FFCA2B]" textClassName="text-[#212529] font-black"/>

      {/* About the Institute */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">KD Institute of Advance Education</h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <AnimateIn direction="left">
              <p className="text-gray-600 leading-relaxed text-base mb-4">
                KD Institute of Advance Education is a premier{" "}
                <strong className="text-[#212529]">English Medium, CBSE curriculum-based school</strong> established in 2026
                under the aegis of the{" "}
                <strong className="text-[#212529]">Purna Chandra Das Memorial Educational Trust</strong>. Located in the
                serene surroundings of Ilsoba, on the Kalna-Pandua Main Road in the historic district of Hooghly, our
                institute is dedicated to nurturing young minds into responsible, knowledgeable, and compassionate global
                citizens of the future.
              </p>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
                By integrating rigorous CBSE academics with a holistic developmental approach, the school fosters critical
                thinking, promotes strong ethical values, and utilises modern pedagogical techniques along with
                state-of-the-art infrastructure.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/admissions" className="inline-flex items-center gap-2 bg-[#FFCA2B] text-[#212529] font-bold px-6 py-3 rounded-full hover:bg-yellow-300 hover:scale-105 transition-all shadow-md">
                  Apply Now <FaArrowRight size={13} />
                </Link>
                <Link href="/contact" className="border-2 border-[#212529] text-[#212529] font-bold px-6 py-3 rounded-full hover:bg-[#212529] hover:text-white hover:scale-105 transition-all">
                  Contact Us
                </Link>
              </div>
            </AnimateIn>

            <AnimateStagger className="grid grid-cols-2 gap-4" staggerDelay={0.12}>
              {[
                { bg: "bg-[#212529] text-white", val: "CBSE", sub: "Curriculum", valClass: "text-[#FFCA2B]" },
                { bg: "bg-[#FFCA2B] text-[#212529]", val: "K–XII", sub: "Full School Program", valClass: "" },
                { bg: "bg-yellow-50 border-2 border-yellow-300 text-[#212529]", val: "2026", sub: "Established", valClass: "" },
                { bg: "bg-blue-50 border-2 border-blue-200 text-[#212529]", val: "100%", sub: "Dedication", valClass: "" },
              ].map((s) => (
                <StaggerItem key={s.sub}>
                  <div className={`${s.bg} rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-default`}>
                    <div className={`text-3xl font-black mb-1 ${s.valClass}`}>{s.val}</div>
                    <div className="text-sm opacity-80">{s.sub}</div>
                  </div>
                </StaggerItem>
              ))}
            </AnimateStagger>
          </div>

          {/* Concept/Story */}
          <AnimateIn direction="up">
            <div className="bg-gradient-to-br from-[#f0f7ff] to-white rounded-3xl border border-blue-100 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#212529] flex items-center justify-center flex-shrink-0">
                  <FaBook size={16} className="text-[#FFCA2B]" />
                </div>
                <span className="text-[#FFCA2B] font-bold uppercase text-sm tracking-widest">The Concept & Beginning</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The foundation of the <strong className="text-[#212529]">Purna Chandra Das Memorial Educational Trust</strong>{" "}
                and KD Institute of Advance Education is the dream project of{" "}
                <strong className="text-[#212529]">Dr. Kalobaran Das</strong>, who has been involved in the field of
                education for more than 20 years. After completing his Honours Graduation, he pursued research at Jadavpur
                University and enriched academia by serving as Assistant Professor, Associate Professor, and Principal.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The establishment of this school is Dr. Das's heartfelt endeavour to honour and materialise the dreams of
                his father, <strong className="text-[#212529]">Late Purna Chandra Das</strong>, a renowned teacher. With
                strong determination and vision, Dr. Das conceived this institution to fulfil the critical need for an
                advanced educational facility that harmoniously blends rigorous CBSE academics with a holistic approach to
                student development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dr. Das firmly believes that high-quality, contemporary education should be accessible to students in the
                rural areas of Hooghly district and beyond — preparing them not only for examinations but for life.
              </p>
            </div>
          </AnimateIn>

          {/* Milestones */}
          <MilestonesTimeline />
        </div>
      </section>

      {/* Explore sections */}
      <section className="py-20 bg-gray-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">Explore About Us</h2>
          </AnimateIn>

          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {aboutSections.map((s) => (
              <StaggerItem key={s.href}>
                <Link
                  href={s.href}
                  className="group flex items-center gap-5 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon size={22} className={s.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-[#212529] text-base leading-snug">{s.label}</h3>
                    <p className="text-gray-400 text-xs mt-0.5 leading-relaxed line-clamp-2">{s.desc}</p>
                  </div>
                  <FaChevronRight size={12} className="text-gray-300 flex-shrink-0 group-hover:text-[#FFCA2B] group-hover:translate-x-0.5 transition-all duration-200" />
                </Link>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <AnimateIn direction="up">
            <h2 className="text-2xl font-black text-[#212529] mb-2">Our Campus</h2>
            <p className="text-gray-500 mb-8">Ilsoba, Depara, 13 Pandua-Kalna Road, Hooghly-712146, West Bengal</p>
          </AnimateIn>
          <AnimateIn direction="zoom" delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-72 hover:shadow-xl transition-shadow">
              <iframe
                src="https://maps.google.com/maps?q=kd-INSTITUTE-OF-ADVANCE-EDUCATION&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
