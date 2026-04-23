import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import AnimateStagger from "@/components/AnimateStagger";
import StaggerItem from "@/components/StaggerItem";
import MarqueeStrip from "@/components/MarqueeStrip";
import { FaChevronRight, FaUserTie } from "react-icons/fa";

const administration = [
  {
    name: "Dr. Kalobaran Das",
    role: "Chairman",
    image: "/chairman.jpg",
    desc: "Founder & visionary with over 20 years in education as Professor and Principal. Former researcher at Jadavpur University. Established KDIAE in honour of his father, Late Purna Chandra Das.",
    href: "/about/chairman",
  },
  {
    name: "Aneek Banerjee",
    role: "Chief Advisor",
    image: "/chief_advisor.jpg",
    desc: "Strategic advisor providing guidance on institutional development, governance, and educational policy.",
    href: null,
  },
  {
    name: "Principal",
    role: "Principal",
    image: "/blank_person.png",
    desc: "Academic head committed to nurturing a culture of curiosity, excellence, and purposeful learning.",
    href: "/about/principal",
  },
  {
    name: "Priyanka Datta",
    role: "Vice Principal",
    image: "/vice_Principal.jpg",
    desc: "Dedicated to holistic education guided by core values of Courage, Compassion, Equality, and Integrity.",
    href: "/about/principal",
  },
];

export default function AdministrationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#212529] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/gal_1772650456_ba4dbe0a.jpg" alt="Administration" fill className="object-cover object-center opacity-20" />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCA2B]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-16 right-1/4 opacity-10 animate-float"><FaUserTie size={52} className="text-[#FFCA2B]" /></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimateIn direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-black mt-1 mb-4">Administration</h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.3}>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
              Meet the dedicated leaders who guide, govern, and shape the future of KDIAE.
            </p>
          </AnimateIn>
          <AnimateIn direction="fade" delay={0.4}>
            <div className="flex justify-center items-center gap-2 mt-5 text-sm text-blue-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight size={10} />
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <FaChevronRight size={10} />
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

          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {administration.map((a) => (
              <StaggerItem key={a.name}>
                <div className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 text-center h-full flex flex-col items-center">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-[#FFCA2B]/20 group-hover:border-[#FFCA2B] transition-colors shadow-md relative mb-5 flex-shrink-0">
                    <Image src={a.image} alt={a.name} fill className="object-cover" sizes="128px" />
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
