"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaTimes, FaGraduationCap } from "react-icons/fa";

export default function AdmissionPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("admissionPopupDismissed")) return;
    const t = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("admissionPopupDismissed", "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-[9990] bg-black/15 backdrop-blur-xs"
          />
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 280, damping: 24 } }}
            exit={{ opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.2 } }}
            className="fixed bottom-6 right-6 z-[9991] w-80 bg-white rounded-2xl shadow-2xl border border-black-100 overflow-hidden"
          >
            {/* Top bar */}
            <div className="bg-[#212529] px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaGraduationCap size={16} className="text-[#FFCA2B]" />
                <span className="text-white font-black text-sm">Admissions Open</span>
              </div>
              <button onClick={dismiss} className="text-gray-400 hover:text-white transition-colors">
                <FaTimes size={14} />
              </button>
            </div>

            {/* Image */}
            <div className="relative w-full h-36 overflow-hidden">
              <Image
                src="/gallery/gal_1772651309_2924a298.jpg"
                alt="KD Institute"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#212529]/30" />
            </div>

            {/* Content */}
            <div className="px-5 py-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                  2026–27 Enrolment
                </span>
              </div>
              <h3 className="text-[#212529] font-black text-base leading-snug mb-1">
                Nursery to Class VI — Seats Filling Fast
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                KD Institute of Advance Education is now accepting applications for the upcoming academic year. Don&apos;t miss your spot.
              </p>
              <div className="flex gap-2">
                <Link
                  href="/admissions"
                  onClick={dismiss}
                  className="flex-1 bg-[#FFCA2B] text-[#212529] text-sm font-bold py-2.5 rounded-xl text-center hover:bg-yellow-400 transition-colors"
                >
                  Apply Now
                </Link>
                <button
                  onClick={dismiss}
                  className="px-4 text-sm text-gray-500 hover:text-[#212529] font-medium transition-colors"
                >
                  Later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
