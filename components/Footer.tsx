import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaChevronRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#212529] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="KDIAE Logo" width={48} height={48} className="h-12 w-auto" />
            <span className="leading-tight">
                <span className="block text-[#FFCA2B] font-black text-base tracking-wide">KD Institute</span>
                <span className="block text-white/80 font-medium text-[11px] tracking-[0.15em] uppercase">of Advance Education</span>
              </span>
          </div>
          <p className="text-sm leading-relaxed mb-5">
            Committed to providing quality CBSE education and nurturing young minds for a brighter future in Hooghly, West Bengal.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/people/KD-Institute-of-Advance-Education/61587941312052/" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1877F2] transition-colors duration-200">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.linkedin.com/company/kd-institute-of-advance-education/" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-200">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[["Home", "/"], ["About Us", "/about"], ["Academics", "/academics"], ["Admissions", "/admissions"], ["Gallery", "/gallery"], ["Contact", "/contact"]].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#FFCA2B] transition-colors flex items-center gap-1.5 group">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">Important Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["CBSE Official", "https://www.cbse.gov.in"],
              ["Mandatory Disclosure", "#"],
              ["TC & Rules", "#"],
              ["Fee Structure", "#"],
              ["Careers", "#"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="hover:text-[#FFCA2B] transition-colors flex items-center gap-1.5 group">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5 items-start">
              <FaMapMarkerAlt className="shrink-0 mt-0.5 text-[#FFCA2B]" size={14} />
              <span>Ilsoba, Depara, 13 Pandua-Kalna Road, Hooghly-712146, West Bengal</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <FaPhone className="shrink-0 text-[#FFCA2B]" size={13} />
              <a href="tel:7432800090" className="hover:text-[#FFCA2B]">+91 7432800090</a>
            </li>
            <li className="flex gap-2.5 items-center">
              <FaPhone className="shrink-0 text-[#FFCA2B]" size={13} />
              <a href="tel:9932681540" className="hover:text-[#FFCA2B]">+91 9932681540</a>
            </li>
            <li className="flex gap-2.5 items-center">
              <FaEnvelope className="shrink-0 text-[#FFCA2B]" size={13} />
              <a href="mailto:info@kdiae.in" className="hover:text-[#FFCA2B]">info@kdiae.in</a>
            </li>
            <li className="flex gap-2.5 items-center">
              <FaClock className="shrink-0 text-[#FFCA2B]" size={13} />
              <span>Mon – Sat: 8:00 AM – 4:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 px-4 text-center text-xs text-gray-400">
        © 2026 KD Institute of Advance Education. All Rights Reserved. &nbsp;|&nbsp;{" "}
        <Link href="#" className="hover:text-[#FFCA2B]">Privacy Policy</Link> &nbsp;|&nbsp;{" "}
        <Link href="#" className="hover:text-[#FFCA2B]">Terms & Conditions</Link>
      </div>
    </footer>
  );
}

