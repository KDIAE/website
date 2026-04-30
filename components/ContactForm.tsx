"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

// ── Validation helpers ──────────────────────────────────────────────────────
const digitCount = (v: string) => v.replace(/\D/g, "").length;
const filterTel  = (raw: string) => {
  const s = raw.replace(/[^\d\s\-()+]/g, "");
  let d = 0, out = "";
  for (const ch of s) { if (/\d/.test(ch)) { if (d >= 10) continue; d++; } out += ch; }
  return out;
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const touch = (name: string) => setTouched((p) => ({ ...p, [name]: true }));

  const phoneError = touched.phone && formData.phone && digitCount(formData.phone) !== 10
    ? "Enter a valid 10-digit mobile number" : "";
  const emailError = touched.email && formData.email && !EMAIL_RE.test(formData.email)
    ? "Enter a valid email address" : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? filterTel(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate before submitting
    if (formData.phone && digitCount(formData.phone) !== 10) {
      touch("phone");
      return;
    }
    if (formData.email && !EMAIL_RE.test(formData.email)) {
      touch("email");
      return;
    }
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <FaPaperPlane size={24} className="text-green-600" />
        </div>
        <h3 className="text-xl font-black text-[#212529] mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm">We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-[#212529] mb-1.5">Full Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#007BFF] transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#212529] mb-1.5">Email Address</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          onBlur={() => touch("email")}
          placeholder="your@email.com"
          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
            emailError ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-[#007BFF]"
          }`}
        />
        {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#212529] mb-1.5">Phone Number</label>
        <input
          type="tel"
          name="phone"
          inputMode="numeric"
          value={formData.phone}
          onChange={handleChange}
          onBlur={() => touch("phone")}
          placeholder="10-digit mobile number"
          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
            phoneError ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-[#007BFF]"
          }`}
        />
        {phoneError && <p className="text-xs text-red-500 mt-1">{phoneError}</p>}
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#212529] mb-1.5">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#007BFF] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#212529] text-white font-bold py-3 rounded-xl hover:bg-[#FFCA2B] hover:text-[#212529] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        <FaPaperPlane size={14} />
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
