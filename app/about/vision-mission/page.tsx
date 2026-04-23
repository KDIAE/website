import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import AnimateStagger from "@/components/AnimateStagger";
import StaggerItem from "@/components/StaggerItem";
import MarqueeStrip from "@/components/MarqueeStrip";
import {
  FaBullseye, FaEye, FaLightbulb, FaHeart, FaLeaf, FaStar,
  FaShieldAlt, FaUsers, FaCheckCircle, FaAward, FaChevronRight,
} from "react-icons/fa";

const missionPillars = [
  {
    icon: FaAward,
    title: "Academic Excellence",
    desc: "To deliver the CBSE curriculum through engaging, student-centric and contemporary pedagogical methods, ensuring a strong academic foundation in all subjects.",
  },
  {
    icon: FaHeart,
    title: "Character Building",
    desc: "To inculcate core values of respect, honesty, empathy and responsibility, preparing students to become ethical leaders and socially conscious individuals.",
  },
  {
    icon: FaLeaf,
    title: "Holistic Development",
    desc: "To cultivate every child's intellectual, emotional, social, physical and spiritual well-being through a balanced curriculum integrating academics, sports and co-curricular activities.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    desc: "To integrate technology and advanced learning practices into the classroom, promoting critical thinking, creativity and problem-solving skills.",
  },
];

const coreValues = [
  { icon: FaStar, title: "Excellence", desc: "We strive for the highest standards in education on every front." },
  { icon: FaHeart, title: "Care", desc: "Every student is seen, heard, and valued as an individual." },
  { icon: FaShieldAlt, title: "Integrity", desc: "We operate with honesty, transparency, and ethical conduct." },
  { icon: FaLeaf, title: "Growth", desc: "Continuous improvement for students, staff, and the institution." },
  { icon: FaUsers, title: "Inclusivity", desc: "We welcome children from all backgrounds without discrimination." },
  { icon: FaCheckCircle, title: "Resilience", desc: "Teaching students to face challenges with confidence and courage." },
];

export default function VisionMissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#212529] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/gal_1774722698_b12ef32b.jpg" alt="Vision & Mission" fill className="object-cover object-center opacity-20" />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCA2B]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-16 right-1/4 opacity-10 animate-float"><FaEye size={52} className="text-[#FFCA2B]" /></div>
          <div className="absolute bottom-10 left-1/3 opacity-10 animate-float-slow"><FaBullseye size={44} className="text-blue-200" /></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimateIn direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-black mt-1 mb-4">Vision & Mission</h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.3}>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
              The guiding principles and core values that define everything we do at KDIAE.
            </p>
          </AnimateIn>
          <AnimateIn direction="fade" delay={0.4}>
            <div className="flex justify-center items-center gap-2 mt-5 text-sm text-blue-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight size={10} />
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <FaChevronRight size={10} />
              <span className="text-white font-semibold">Vision & Mission</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <MarqueeStrip items={["Our Vision", "Our Mission", "Mission Pillars", "Core Values", "Academic Excellence", "Holistic Development"]} speed={22} bgClassName="bg-[#FFCA2B]" textClassName="text-[#212529] font-black" />

      {/* Vision & Mission cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">Our Vision & Mission</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <AnimateIn direction="left" delay={0.1}>
              <div className="bg-[#212529] text-white rounded-3xl p-10 h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#FFCA2B]/20 border border-[#FFCA2B]/30 flex items-center justify-center mb-6">
                  <FaEye size={28} className="text-[#FFCA2B]" />
                </div>
                <h3 className="text-2xl font-black text-[#FFCA2B] mb-5">Our Vision</h3>
                <p className="text-blue-100 leading-relaxed text-base mb-4">
                  To be a leading educational institution in the Hooghly district, recognised for delivering excellence in CBSE education, fostering holistic development, and producing conscientious, globally competent citizens who are prepared to lead with integrity and innovation.
                </p>
                <p className="text-blue-100 leading-relaxed text-base">
                  To identify talented and gifted students and nurture their abilities, enabling them to achieve global standards of excellence.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.1}>
              <div className="bg-[#FFCA2B] text-[#212529] rounded-3xl p-10 h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#007BFF]/10 flex items-center justify-center mb-6">
                  <FaBullseye size={28} className="text-[#212529]" />
                </div>
                <h3 className="text-2xl font-black mb-5">Our Mission</h3>
                <p className="text-[#212529]/80 leading-relaxed text-base">
                  To nurture disciplined, compassionate and intellectually strong students by providing a dynamic and inclusive learning environment that prepares them not only for examinations but for life — academically, morally, and emotionally.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Mission Pillars */}
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#212529] mt-2">Mission Pillars</h2>
          </AnimateIn>
          <AnimateStagger className="grid sm:grid-cols-2 gap-6 mb-20" staggerDelay={0.1}>
            {missionPillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all group h-full flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 group-hover:bg-[#212529] flex-shrink-0 flex items-center justify-center transition-colors duration-300">
                    <p.icon size={22} className="text-[#212529] group-hover:text-[#FFCA2B] transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] text-lg mb-2">{p.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>

          {/* Core Values */}
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#212529] mt-2">Core Values</h2>
          </AnimateIn>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.09}>
            {coreValues.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4 hover:shadow-md hover:-translate-y-1 transition-all group h-full">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 group-hover:bg-[#FFCA2B] flex-shrink-0 flex items-center justify-center transition-colors duration-300">
                    <v.icon size={20} className="text-[#FFCA2B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] mb-1">{v.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>
    </>
  );
}
