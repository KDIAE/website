"use client";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

function openWhatsApp() {
  const phone = "919474696097";
  const message = "Hello, I want admission details.";
  const url = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    ? `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <div className="relative flex items-center justify-center">
        <span className="absolute w-12 h-12 rounded-full bg-[#25D366] opacity-75 animate-[ping_1.5s_ease-out_infinite]" />
        <button
          onClick={openWhatsApp}
          className="relative w-12 h-12 cursor-pointer bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          title="WhatsApp"
        >
          <FaWhatsapp size={20} />
        </button>
      </div>
      <a
        href="https://www.facebook.com/people/KD-Institute-of-Advance-Education/61587941312052/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#1877F2] hover:bg-[#1860c8] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        title="Facebook"
      >
        <FaFacebookF size={20} />
      </a>
    </div>
  );
}

