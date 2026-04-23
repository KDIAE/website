import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import AnimateStagger from "@/components/AnimateStagger";
import StaggerItem from "@/components/StaggerItem";
import CountUp from "@/components/CountUp";
import MarqueeStrip from "@/components/MarqueeStrip";
import {
  FaHome, FaShieldAlt, FaChalkboardTeacher, FaPuzzlePiece, FaPaintBrush, FaVideo,
  FaBook, FaGraduationCap, FaChartLine, FaLightbulb, FaStar, FaLeaf,
  FaArrowRight, FaCheckCircle, FaUsers, FaAward, FaBullseye,
  FaHeart, FaSearch, FaHandsHelping, FaSun, FaUtensils, FaRunning,
} from "react-icons/fa";

const benefits = [
  { icon: FaHome, title: "Home-like Environment", desc: "A warm and caring atmosphere that makes children feel safe, comfortable, and loved.", color: "from-rose-400 to-pink-500" },
  { icon: FaShieldAlt, title: "Safety & Security", desc: "24/7 security personnel and fully monitored premises keep your child safe.", color: "from-blue-400 to-[#007BFF]" },
  { icon: FaChalkboardTeacher, title: "Quality Educators", desc: "Experienced and certified teachers dedicated to nurturing every child's unique potential.", color: "from-violet-400 to-purple-600" },
  { icon: FaPuzzlePiece, title: "Play to Learn", desc: "Interactive play-based activities that make education engaging and impactful.", color: "from-amber-400 to-[#FFCA2B]" },
  { icon: FaPaintBrush, title: "Activity Room", desc: "Dedicated spaces for art, music, dance, and creative activities to foster talent.", color: "from-teal-400 to-emerald-500" },
  { icon: FaVideo, title: "CCTV Surveillance", desc: "Complete campus monitoring ensuring full safety and transparency for parents.", color: "from-orange-400 to-red-500" },
];

const programs = [
  { grade: "Nursery – UKG", age: "3+ years", icon: FaSun, desc: "Holistic early childhood development through play, creativity, and social learning.", bg: "bg-[#FFCA2B]", fg: "#212529" },
  { grade: "Std. I – VIII", age: "6+ years", icon: FaBook, desc: "Strong CBSE foundation with focus on concept clarity, discipline, and all-round growth.", bg: "bg-[#007BFF]", fg: "#ffffff" },
  { grade: "Std. IX & X", age: "14+ years", icon: FaSearch, desc: "Board exam preparation with rigorous academics and career awareness activities.", bg: "bg-[#212529]", fg: "#ffffff" },
  { grade: "Std. XI & XII", age: "16+ years", icon: FaGraduationCap, desc: "Career-oriented streams with expert guidance for competitive exams and college readiness.", bg: "bg-gradient-to-br from-[#007BFF] to-violet-600", fg: "#ffffff" },
];

const daySchedule = [
  { time: "8:00 – 8:30 AM", title: "Morning Welcome & Assembly", desc: "National anthem, prayer, and a positive mindset to start the day.", icon: FaSun, color: "bg-[#FFCA2B] text-[#212529]" },
  { time: "8:30 – 10:30 AM", title: "Guided Learning Block", desc: "Carefully planned lessons building knowledge, confidence, and academic skills.", icon: FaBook, color: "bg-[#007BFF] text-white" },
  { time: "10:30 – 11:00 AM", title: "Snack Break & Interaction", desc: "Wholesome snacks paired with meaningful peer-to-peer conversation.", icon: FaUtensils, color: "bg-rose-500 text-white" },
  { time: "11:00 AM – 1:00 PM", title: "Hands-On Activities", desc: "Creative projects, group exercises, and experiential learning across all subjects.", icon: FaPuzzlePiece, color: "bg-emerald-500 text-white" },
  { time: "1:00 – 1:30 PM", title: "Outdoor Play & Sports", desc: "Children develop motor skills, teamwork, and imagination through outdoor exploration.", icon: FaRunning, color: "bg-violet-500 text-white" },
  { time: "1:30 – 2:00 PM", title: "Reflection & Dismissal", desc: "Wrap-up discussions, homework briefing, and a positive send-off for every student.", icon: FaHeart, color: "bg-[#212529] text-[#FFCA2B]" },
];

const features = [
  { icon: FaBook, title: "CBSE Curriculum", desc: "Structured framework aligned with CBSE guidelines focusing on conceptual clarity." },
  { icon: FaGraduationCap, title: "Nursery to Class VI (2026)", desc: "Early years to middle school education designed with age-appropriate practices." },
  { icon: FaChartLine, title: "Academic Growth", desc: "Higher classes introduced gradually to ensure consistent quality and excellence." },
  { icon: FaLightbulb, title: "Smart Learning", desc: "Integration of digital tools, interactive teaching methods, and modern classroom practices." },
  { icon: FaStar, title: "Qualified Faculty", desc: "Educators dedicated to mentoring with personal attention, patience, and guidance." },
  { icon: FaLeaf, title: "Safe Campus", desc: "Secure, hygienic, and child-friendly infrastructure for a positive learning atmosphere." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden ">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/gallery/front_building.jpg"
            alt="Students learning"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#212529]/70 to-[#212529]/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Text */}
          <div>
            <AnimateIn direction="left" delay={0.15}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 text-white">
                Where Every<br />
                <span className="text-[#FFCA2B]">Child</span> Shines<span className="text-[#007BFF]">.</span>
              </h1>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.25}>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg mb-8">
                Nurturing young minds with a future-ready CBSE education in the heart of Hooghly, West Bengal. Premium schooling, accessible to all.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link href="/admissions" className="inline-flex items-center gap-2 bg-[#FFCA2B] hover:bg-yellow-300 text-[#212529] font-black px-7 py-3.5 rounded-full transition-all shadow-lg shadow-yellow-400/30 hover:scale-105 text-sm">
                  Apply Now <FaArrowRight size={12} />
                </Link>
                <Link href="/about" className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-[#212529] font-bold px-7 py-3.5 rounded-full transition-all text-sm">
                  Learn More
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 70L1440 70L1440 0C1200 55 960 0 720 35C480 70 240 10 0 50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <MarqueeStrip
        items={["Quality CBSE Education", "Admissions Open 2026–27", "Nursery to Class VI", "Safe & Nurturing Campus", "Experienced Faculty", "Activity-Based Learning", "Hooghly, West Bengal"]}
        speed={28}
        bgClassName="bg-[#FFCA2B]"
        textClassName="text-[#212529] font-black"
      />

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimateStagger className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
            {[
              { value: 12, suffix: "+", label: "Teachers", icon: FaChalkboardTeacher, accent: "bg-[#FFCA2B]/15 text-[#212529]", iconBg: "bg-[#FFCA2B]" },
              { value: 8, suffix: "", label: "Classes Offered", icon: FaGraduationCap, accent: "bg-[#007BFF]/10 text-[#007BFF]", iconBg: "bg-[#007BFF]" },
              { value: 100, suffix: "+", label: "Students", icon: FaUsers, accent: "bg-[#212529]/5 text-[#212529]", iconBg: "bg-[#212529]" },
              { value: 100, suffix: "%", label: "CBSE Aligned", icon: FaAward, accent: "bg-emerald-50 text-emerald-600", iconBg: "bg-emerald-500" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className={`rounded-2xl p-6 text-center ${s.accent} hover:-translate-y-1 transition-transform`}>
                  <div className={`w-10 h-10 rounded-xl ${s.iconBg} flex items-center justify-center mx-auto mb-3`}>
                    <s.icon size={18} className="text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black">
                    <CountUp to={s.value} suffix={s.suffix} duration={2} />
                  </div>
                  <div className="text-xs font-semibold mt-1 opacity-70 uppercase tracking-wide">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────── */}
      <section className="py-0 overflow-hidden">
        <div className="flex gap-3 px-4 pb-6">
          {[
            { src: "/gallery/gal_1772650456_ba4dbe0a.jpg", alt: "Classroom" },
            { src: "/gallery/gal_1772651057_8640aa21.jpg", alt: "Students studying" },
            { src: "/gallery/gal_1772651117_9829baa0.jpg", alt: "Group learning" },
            { src: "/gallery/gal_1772651361_806dbeb5.jpg", alt: "School activities" },
          ].map((img, i) => (
            <div
              key={img.alt}
              className={`relative flex-1 min-w-0 rounded-2xl overflow-hidden shadow-lg ${i === 1 ? "h-52" : i === 2 ? "h-44" : "h-48"} hover:scale-[1.02] transition-transform duration-300`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT / WHY KDIAE ────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image collage */}
            <AnimateIn direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-square relative shadow-2xl">
                  <Image
                    src="/gallery/gal_1774722490_7e9cd133.jpg"
                    alt="Happy school kids"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating info cards */}
                <div className="absolute -top-4 -right-4 bg-[#007BFF] text-white rounded-2xl p-4 shadow-xl shadow-blue-500/30 max-w-[180px]">
                  <div className="font-black text-xl">100%</div>
                  <div className="text-xs opacity-80 leading-tight">Dedicated to student success</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#FFCA2B] text-[#212529] rounded-2xl p-4 shadow-xl shadow-yellow-400/30 flex items-center gap-2">
                  <FaStar size={18} className="flex-shrink-0" />
                  <div>
                    <div className="font-black text-base leading-none">Premium</div>
                    <div className="text-xs font-semibold opacity-70">CBSE Education</div>
                  </div>
                </div>
                {/* Blob decoration */}
                <div className="absolute -z-10 -top-8 -left-8 w-40 h-40 bg-[#007BFF]/10 rounded-full blur-2xl" />
              </div>
            </AnimateIn>

            {/* Right: Text */}
            <AnimateIn direction="right">
              <h2 className="text-4xl md:text-5xl font-black text-[#212529] leading-tight mb-5">
                A School That<br /><span className="text-[#007BFF]">Truly</span> Cares
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                A nurturing CBSE-focused school committed to academic excellence, values, and holistic development — with a nominal and transparent fee structure.
              </p>
              <AnimateStagger className="grid grid-cols-2 gap-4 mb-8" staggerDelay={0.08}>
                {[
                  { icon: FaAward, title: "CBSE Excellence", color: "bg-[#FFCA2B]/20 text-[#212529]", iconBg: "bg-[#FFCA2B]" },
                  { icon: FaBullseye, title: "Goal-Oriented", color: "bg-[#007BFF]/10 text-[#007BFF]", iconBg: "bg-[#007BFF]" },
                  { icon: FaUsers, title: "Small Batches", color: "bg-violet-50 text-violet-700", iconBg: "bg-violet-500" },
                  { icon: FaHandsHelping, title: "Parent Partnership", color: "bg-rose-50 text-rose-600", iconBg: "bg-rose-500" },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className={`rounded-2xl p-4 ${item.color} flex items-center gap-3 hover:-translate-y-0.5 transition-transform`}>
                      <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <item.icon size={15} className="text-white" />
                      </div>
                      <span className="font-bold text-sm">{item.title}</span>
                    </div>
                  </StaggerItem>
                ))}
              </AnimateStagger>
              <Link href="/about" className="inline-flex items-center gap-2 bg-[#212529] text-white font-bold px-7 py-3 rounded-full hover:bg-[#007BFF] transition-colors text-sm">
                Our Story <FaArrowRight size={11} />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── BENEFITS (COLORFUL CARDS) ─────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#212529]">We Make a <span className="text-[#007BFF]">Difference</span></h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">In the life of every child, every single day.</p>
          </AnimateIn>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="group bg-white rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden relative">
                  <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${b.color} opacity-10 rounded-bl-full`} />
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <b.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-black text-[#212529] text-base mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#212529]">Learning for <span className="text-[#FFCA2B] [text-shadow:0_2px_0_#212529]">Every</span> Age</h2>
            <p className="text-gray-500 mt-3">Tailored education programs for every stage of growth.</p>
          </AnimateIn>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {programs.map((p) => (
              <StaggerItem key={p.grade}>
                <div className={`${p.bg} rounded-3xl p-7 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 h-full`} style={{ color: p.fg }}>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5">
                    <p.icon size={28} style={{ color: p.fg }} />
                  </div>
                  <h3 className="font-black text-xl mb-1">{p.grade}</h3>
                  <span className="inline-block text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-3">{p.age}</span>
                  <p className="text-sm leading-relaxed opacity-80">{p.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold opacity-60">
                    Learn more <FaArrowRight size={9} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ── KEY FEATURES (DARK) ───────────────────────────── */}
      <section className="py-20 bg-[#212529] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#007BFF]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#FFCA2B]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black">Building Strong <span className="text-[#007BFF]">Foundations</span></h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">With a future-focused CBSE learning approach designed for every stage.</p>
          </AnimateIn>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {features.map((f, i) => (
              <StaggerItem key={f.title}>
                <div className="group flex gap-4 bg-white/5 hover:bg-white/10 rounded-3xl p-6 border border-white/10 hover:border-[#FFCA2B]/40 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-[#FFCA2B] flex items-center justify-center transition-colors duration-300">
                    <f.icon size={20} className="text-[#FFCA2B] group-hover:text-[#212529] transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#FFCA2B] mb-1 text-sm">{f.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ── A DAY AT SCHOOL ───────────────────────────────── */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="blur" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#212529]">Every Day Flows<br />with <span className="text-[#007BFF]">Purpose</span></h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">A structured, nurturing routine that balances learning, play, and growth.</p>
          </AnimateIn>
          <div className="space-y-4">
            {daySchedule.map((item, i) => (
              <AnimateIn key={item.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.06}>
                <div className="flex items-center gap-4 group">
                  {/* Icon bubble */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <item.icon size={20} />
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-white rounded-2xl px-5 py-4 border border-gray-100 hover:border-[#007BFF]/30 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-xs font-bold text-[#007BFF] bg-[#007BFF]/10 px-3 py-1 rounded-full">{item.time}</span>
                      <h3 className="font-black text-[#212529] text-sm">{item.title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-12">
            <span className="inline-block bg-[#FFCA2B]/20 text-[#212529] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Campus Life</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#212529]">Life at <span className="text-[#007BFF]">KDIAE</span></h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]" staggerDelay={0.07}>
            {[
              { src: "/gallery/gal_1774722698_b12ef32b.jpg", alt: "Campus life", span: "md:col-span-2 md:row-span-2" },
              { src: "/gallery/gal_1774722743_c5dd5b9e.jpg", alt: "Students" },
              { src: "/gallery/gal_1774722781_8b2ce766.jpg", alt: "Learning" },
              { src: "/gallery/gal_1774722812_d7048d8e.jpg", alt: "Library" },
              { src: "/gallery/gal_1774723502_4f373141.jpg", alt: "Activity" },
            ].map((img) => (
              <StaggerItem key={img.alt} className={`${img.span || ""} rounded-2xl overflow-hidden relative group`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#212529]/0 group-hover:bg-[#212529]/20 transition-colors duration-300" />
              </StaggerItem>
            ))}
          </AnimateStagger>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 border-2 border-[#212529] text-[#212529] hover:bg-[#212529] hover:text-white font-bold px-7 py-3 rounded-full transition-all text-sm">
              View Full Gallery <FaArrowRight size={11} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <AnimateIn direction="zoom">
        <section className="py-20 bg-[#007BFF] relative overflow-hidden">
          {/* Bubbles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-white/5 rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#FFCA2B]/20 rounded-full blur-sm" />
            <div className="absolute top-8 right-1/3 w-12 h-12 bg-white/10 rounded-full" />
          </div>
          <div className="absolute top-8 right-16 animate-float pointer-events-none opacity-20">
            <FaGraduationCap size={72} className="text-white" />
          </div>
          <div className="absolute bottom-8 left-16 animate-float-slow pointer-events-none opacity-10">
            <FaBook size={56} className="text-[#FFCA2B]" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready to Enroll<br />Your Child?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
              Join KDIAE and give your child the best possible start in life. Admissions are now open for 2026–27.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/admissions" className="inline-flex items-center gap-2 bg-[#FFCA2B] text-[#212529] font-black px-8 py-4 rounded-full hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg shadow-yellow-400/30 text-sm">
                Start Application <FaArrowRight size={13} />
              </Link>
              <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#007BFF] hover:scale-105 transition-all text-sm">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </AnimateIn>
    </>
  );
}
