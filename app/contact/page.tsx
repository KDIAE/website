import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock,
  FaFacebook, FaLinkedin
} from "react-icons/fa";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-3xl" /> });

export const metadata: Metadata = {
  title: "Contact Us – KDIAE | Phone, Address & Directions",
  description:
    "Get in touch with KD Institute of Advance Education. Visit us at 13 Pandua-Kalna Road, Hooghly 712146, West Bengal, or call +91 74328 00090.",
  keywords: [
    "contact KDIAE",
    "KD Institute phone number",
    "KDIAE address Hooghly",
    "school contact Pandua Kalna Road",
    "CBSE school contact West Bengal",
    "info@kdiae.in",
    "KDIAE directions map",
  ],
  alternates: { canonical: "https://kdiae.in/contact" },
  openGraph: {
    title: "Contact Us – KDIAE | Phone, Address & Directions",
    description: "Contact KDIAE, Hooghly – address, phone, email, and a map to find us.",
    url: "https://kdiae.in/contact",
    images: [
      {
        url: "/gallery/gal_1775935126_9381a0c1.jpg",
        width: 1200,
        height: 630,
        alt: "Contact KDIAE – KD Institute of Advance Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us – KDIAE | Phone, Address & Directions",
    description: "Contact KDIAE, Hooghly – address, phone, email, and a map to find us.",
    images: ["/gallery/gal_1775935126_9381a0c1.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#212529] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/gal_1775935126_9381a0c1.jpg" alt="Contact" fill className="object-cover object-center opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#FFCA2B] uppercase text-sm font-semibold tracking-widest">Contact</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">Get in Touch</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            We&apos;re here to answer your questions and help you take the first step.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-sm text-blue-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div>
              <h2 className="text-2xl font-black text-[#212529] mb-8">Contact Information</h2>
              <div className="space-y-7">

                <div className="flex gap-4 items-start">
                  <FaMapMarkerAlt size={18} className="text-[#FFCA2B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#212529] text-sm mb-0.5">School Address</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Ilsoba, Depara, 13 Pandua-Kalna Road,<br />Hooghly-712146, West Bengal, India</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <FaPhone size={16} className="text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#212529] text-sm mb-0.5">Phone Numbers</h3>
                    <a href="tel:7432800090" className="block text-gray-600 hover:text-[#007BFF] text-sm transition-colors">+91 74328 00090</a>
                    <a href="tel:9932681540" className="block text-gray-600 hover:text-[#007BFF] text-sm transition-colors">+91 99326 81540</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <FaEnvelope size={16} className="text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#212529] text-sm mb-0.5">Email Address</h3>
                    <a href="mailto:info@kdiae.in" className="text-gray-600 hover:text-[#007BFF] text-sm transition-colors">info@kdiae.in</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <FaClock size={16} className="text-[#FFCA2B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#212529] text-sm mb-0.5">Office Hours</h3>
                    <p className="text-gray-600 text-sm">Monday to Saturday — 8:00 AM – 4:00 PM</p>
                    <p className="text-gray-400 text-xs mt-0.5">Closed on Sundays &amp; Public Holidays</p>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="mt-8 pt-7 border-t border-gray-100">
                <h3 className="font-bold text-[#212529] text-sm mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/people/KD-Institute-of-Advance-Education/61587941312052/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:border-[#1877F2] hover:text-[#1877F2] transition-colors"
                  >
                    <FaFacebook size={14} className="text-[#1877F2]" /> Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/company/kd-institute-of-advance-education/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors"
                  >
                    <FaLinkedin size={14} className="text-[#0A66C2]" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#212529] mb-2 text-center">Find Us on the Map</h2>
          <p className="text-gray-500 text-sm text-center mb-6">Ilsoba, Depara, 13 Pandua-Kalna Road, Hooghly-712146, West Bengal</p>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#212529] mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "When do admissions open for 2026–27?", a: "Admissions for the 2026–27 academic year are currently open. Contact us to begin the application process today." },
              { q: "What curriculum does KDIAE follow?", a: "We follow the Central Board of Secondary Education (CBSE) curriculum — a nationally recognised and respected framework." },
              { q: "Is transportation available for students?", a: "Please contact the school directly for the latest information on transport routes and availability." },
              { q: "Are there any scholarships or fee concessions?", a: "We offer fee concessions in special cases. Please contact the school administration to discuss your specific situation." },
              { q: "Can I visit the campus before applying?", a: "Yes! We encourage parents to visit. Contact us to schedule a campus tour at your convenience." },
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-200 rounded-2xl p-5 cursor-pointer">
                <summary className="font-semibold text-[#212529] flex justify-between items-center list-none">
                  {faq.q}
                  <span className="text-[#FFCA2B] group-open:rotate-45 transition-transform ml-2 text-xl font-light">+</span>
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
