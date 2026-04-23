"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBars, FaTimes,
  FaChevronDown, FaEye, FaUniversity, FaUserTie, FaUsers, FaGraduationCap,
  FaFacebook, FaLinkedin,
} from "react-icons/fa";

const aboutDropdownItems = [
  { href: "/about", label: "About Us", icon: FaUniversity, desc: "Our story & milestones" },
  { href: "/about/vision-mission", label: "Vision & Mission", icon: FaEye, desc: "Guiding principles & values" },
  { href: "/about/chairman", label: "Chairman's Message", icon: FaUniversity, desc: "Dr. Kalobaran Das" },
  { href: "/about/principal", label: "Principal's Message", icon: FaGraduationCap, desc: "Principal & Vice Principal" },
  { href: "/about/administration", label: "Administration", icon: FaUserTie, desc: "Leadership & governance" },
  { href: "/about/team", label: "Our Team", icon: FaUsers, desc: "Faculty & support staff" },
];

const navLinks = [
  { href: "/academics", label: "Academics" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAboutOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setAboutOpen(false), 120);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#FFCA2B] text-[#212529] text-md py-1.5 px-4 hidden md:flex justify-between items-center">
        <span className="flex items-center gap-1.5">
          <FaMapMarkerAlt className="shrink-0" />
          Ilsoba, Depara, 13 Pandua-Kalna Road, Hooghly-712146, WB
        </span>
        <span className="flex gap-5 items-center">
          <span className="flex items-center gap-1.5">
            <motion.span
              animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
            >
              <FaPhone className="shrink-0" />
            </motion.span>
            +91 7432800090
          </span>
          <span className="flex items-center gap-1.5"><FaEnvelope className="shrink-0" /> info@kdiae.in</span>
          <span className="flex items-center gap-1.5"><FaClock className="shrink-0" /> Mon–Sat: 8AM–4PM</span>
          <span className="flex items-center gap-2 border-l border-[#212529]/20 pl-4">
            <a href="https://www.facebook.com/people/KD-Institute-of-Advance-Education/61587941312052/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors"><FaFacebook /></a>
            <a href="https://www.linkedin.com/company/kd-institute-of-advance-education/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors"><FaLinkedin /></a>
          </span>
        </span>
      </div>

      {/* Main nav */}
      <div className="sticky top-0 z-50 bg-[#212529] shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="KDIAE Logo"
                width={48}
                height={48}
                className="h-12 w-auto group-hover:scale-105 transition-transform"
              />
              <span className="leading-tight">
                <span className="block text-[#FFCA2B] font-black text-base tracking-wide">KD Institute</span>
                <span className="block text-white/80 font-medium text-[11px] tracking-[0.15em] uppercase">of Advance Education</span>
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            <li>
              <Link href="/" className="text-white hover:text-[#FFCA2B] px-3 py-2 rounded-md text-sm font-semibold transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FFCA2B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
            </li>

            {/* About Us with hover dropdown */}
            <li className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <Link
                href="/about"
                className="flex items-center gap-1 text-white hover:text-[#FFCA2B] px-3 py-2 rounded-md text-sm font-semibold transition-colors relative group"
              >
                About Us
                <FaChevronDown size={10} className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`} />
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FFCA2B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="p-2">
                      {aboutDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/item"
                          onClick={() => setAboutOpen(false)}
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#212529]/10 group-hover/item:bg-[#212529] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                            <item.icon size={14} className="text-[#212529] group-hover/item:text-[#FFCA2B] transition-colors duration-200" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#212529] group-hover/item:text-[#007BFF] transition-colors">{item.label}</div>
                            <div className="text-xs text-gray-400">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-[#FFCA2B] px-3 py-2 rounded-md text-sm font-semibold transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FFCA2B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/admissions"
                className="ml-3 bg-[#FFCA2B] hover:bg-yellow-300 text-[#212529] font-bold text-sm px-5 py-2 rounded-full transition-all hover:scale-105 shadow-md"
              >
                Apply Now
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white focus:outline-none p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#212529] px-4 pb-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }}>
              <Link
                href="/"
                className="block text-white hover:text-[#FFCA2B] py-2.5 text-sm font-semibold border-b border-white/10"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </motion.div>

            {/* Mobile About accordion */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 }}>
              <button
                className="w-full flex items-center justify-between text-white hover:text-[#FFCA2B] py-2.5 text-sm font-semibold border-b border-white/10"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              >
                About Us
                <FaChevronDown size={10} className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileAboutOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden bg-[#212529] rounded-xl mb-1"
                  >
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-[#FFCA2B] text-sm border-b border-white/5 last:border-0 transition-colors"
                        onClick={() => { setMenuOpen(false); setMobileAboutOpen(false); }}
                      >
                        <item.icon size={12} className="shrink-0" />
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (i + 2) * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="block text-white hover:text-[#FFCA2B] py-2.5 text-sm font-semibold border-b border-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/admissions"
              className="mt-3 block text-center bg-[#FFCA2B] text-[#212529] font-bold text-sm px-4 py-2.5 rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
