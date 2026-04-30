import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import AnimateStagger from "@/components/AnimateStagger";
import StaggerItem from "@/components/StaggerItem";
import type { IconType } from "react-icons";
import {
  FaCheckCircle, FaFileDownload, FaPaperclip, FaComments,
  FaCreditCard, FaGraduationCap, FaSeedling, FaChild, FaBook,
  FaExchangeAlt, FaPhone, FaArrowDown, FaEnvelope, FaCheck
} from "react-icons/fa";

const AdmissionFormClient = dynamic(() => import("@/components/AdmissionFormClient"), { loading: () => <div className="h-[600px] animate-pulse bg-gray-100 rounded-3xl" /> });

export const metadata: Metadata = {
  title: "Admissions 2026–27 – Apply Online | KDIAE",
  description:
    "Apply online for admissions at KD Institute of Advance Education for 2026–27. Open for Nursery to Class VI. Simple 6-step process, transparent fee structure.",
  alternates: { canonical: "https://kdiae.in/admissions" },
  openGraph: {
    title: "Admissions 2026–27 – Apply Online | KDIAE",
    description: "Admissions open for 2026–27 at KDIAE, Hooghly. Apply online for Nursery to Class VI.",
    url: "https://kdiae.in/admissions",
  },
};


const steps: { step: string; title: string; icon: IconType; bg: string; color: string; desc: string }[] = [
  { step: "01", title: "Check Eligibility", icon: FaCheckCircle, bg: "bg-[#212529]", color: "#FFCA2B", desc: "Confirm your child meets the age criteria for the desired class." },
  { step: "02", title: "Download Form", icon: FaFileDownload, bg: "bg-[#007BFF]", color: "#fff", desc: "Obtain the application form from the school office or download it." },
  { step: "03", title: "Submit Documents", icon: FaPaperclip, bg: "bg-[#212529]", color: "#FFCA2B", desc: "Attach all required documents with the completed application form." },
  { step: "04", title: "Interaction", icon: FaComments, bg: "bg-[#007BFF]", color: "#fff", desc: "Attend a brief interaction session with the child and parents." },
  { step: "05", title: "Pay Fees", icon: FaCreditCard, bg: "bg-[#212529]", color: "#FFCA2B", desc: "Complete the fee payment to confirm your child's enrolment." },
  { step: "06", title: "Welcome!", icon: FaGraduationCap, bg: "bg-[#007BFF]", color: "#fff", desc: "Receive the admission confirmation and join the KDIAE family." },
];

const eligibilityCards = [
  { icon: FaSeedling, title: "Nursery", desc: "Age: 3 – 4 years", bg: "bg-yellow-50", color: "text-[#FFCA2B]" },
  { icon: FaChild, title: "LKG / UKG", desc: "Age: 4 – 6 years", bg: "bg-blue-50", color: "text-[#007BFF]" },
  { icon: FaBook, title: "Std. I – III", desc: "Age: 6 – 9 years", bg: "bg-yellow-50", color: "text-[#FFCA2B]" },
  { icon: FaExchangeAlt, title: "Std. IV – VI", desc: "Age: 9 – 12 years (Transfer)", bg: "bg-blue-50", color: "text-[#007BFF]" },
];

const fees = [
  { class: "Nursery – UKG", admission: "₹2,500", tuition: "₹800/month", annual: "₹1,200" },
  { class: "Std. I – III", admission: "₹3,000", tuition: "₹1,000/month", annual: "₹1,500" },
  { class: "Std. IV – VI", admission: "₹3,500", tuition: "₹1,200/month", annual: "₹1,800" },
];

const documents = [
  "Birth Certificate (original + photocopy)",
  "Aadhaar Card of child",
  "Recent passport-size photographs (4)",
  "Transfer Certificate (for Std. I–VI)",
  "Previous year's Report Card",
  "Parent/Guardian ID proof",
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#212529] text-white overflow-hidden py-24 min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/gallery/gal_1775935126_9381a0c1.jpg" alt="Admissions" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#212529]/95 to-[#212529]/60" />
        </div>
        {/* Blobs */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#007BFF]/10 blur-3xl" />
        <div className="absolute bottom-10 left-20 w-56 h-56 rounded-full bg-[#007BFF]/15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight max-w-3xl mb-5">
              Join KDIAE for<br />
              <span className="text-[#007BFF]">2026 – 27</span>
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.2}>
            <p className="text-gray-300 text-lg max-w-xl mb-8 leading-relaxed">
              We welcome students from Nursery to Class VI. Apply now and secure your child&apos;s seat at KD Institute of Advance Education.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.3}>
            <div className="flex flex-wrap gap-4">
            <a href="#apply-online" className="inline-flex items-center gap-2 bg-[#FFCA2B] text-[#212529] font-black px-7 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors">
              Apply Now <FaArrowDown size={13} />
            </a>
            <a href="#apply-steps" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors hover:border-[#007BFF]/50">
              View Process
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors hover:border-[#007BFF]/50">
              <FaPhone size={13} /> Contact Us
            </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">
              Admission <span className="text-[#007BFF]">Criteria</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We currently accept students from Nursery to Class VI only.</p>
          </AnimateIn>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {eligibilityCards.map((c) => (
              <StaggerItem key={c.title}>
                <div className={`group p-6 rounded-2xl border border-gray-100 hover:border-[#007BFF]/40 hover:shadow-lg transition-all duration-300 text-center`}>
                  <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center mx-auto mb-4`}>
                    <c.icon size={24} className={c.color} />
                  </div>
                  <h3 className="font-black text-[#212529] mb-1">{c.title}</h3>
                  <p className="text-gray-500 text-sm">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Steps */}
      <section id="apply-steps" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">
              Simple Steps to <span className="text-[#007BFF]">Apply</span>
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {steps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center flex-shrink-0`}>
                      <s.icon size={20} style={{ color: s.color }} />
                    </div>
                    <span className="text-2xl font-black text-[#007BFF] bg-[#007BFF]/10 px-2.5 py-0.5 rounded-lg">{s.step}</span>
                  </div>
                  <h3 className="font-black text-[#212529] mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">
              <span className="text-[#007BFF]">Documents</span> Needed
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid sm:grid-cols-2 gap-3" staggerDelay={0.07}>
            {documents.map((doc) => (
              <StaggerItem key={doc}>
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                  <FaCheck size={14} className="text-[#007BFF] flex-shrink-0" />
                  <span className="text-sm text-gray-700">{doc}</span>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Fee Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">
              <span className="text-[#007BFF]">Fee Structure</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm">Fees are indicative. Contact us for the latest details.</p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#007BFF] text-white">
                    <th className="text-left px-5 py-4 font-black">Class</th>
                    <th className="text-left px-5 py-4 font-black">Admission Fee</th>
                    <th className="text-left px-5 py-4 font-black">Tuition</th>
                    <th className="text-left px-5 py-4 font-black">Annual Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f, i) => (
                    <tr key={f.class} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-semibold text-[#212529]">{f.class}</td>
                      <td className="px-5 py-4 text-gray-600">{f.admission}</td>
                      <td className="px-5 py-4 text-gray-600">{f.tuition}</td>
                      <td className="px-5 py-4 text-gray-600">{f.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Online Application Form */}
      <AdmissionFormClient />

      {/* CTA */}
      <section className="py-20 bg-[#212529] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#007BFF]/15 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimateIn direction="up">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to <span className="text-[#FFCA2B]">Apply?</span>
            </h2>
            <p className="text-gray-400 mb-8">Visit us in person or reach out — we&apos;d love to welcome you to our school family.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:7432800090" className="inline-flex items-center gap-2 bg-[#FFCA2B] text-[#212529] font-black px-7 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors">
                <FaPhone size={13} /> Call Us
              </a>
              <a href="mailto:info@kdiae.in" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#007BFF] hover:border-[#007BFF] transition-all duration-200">
                <FaEnvelope size={13} /> Email Us
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
