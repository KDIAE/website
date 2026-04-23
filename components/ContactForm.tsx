"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          placeholder="your@email.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#007BFF] transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#212529] mb-1.5">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 XXXXX XXXXX"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#007BFF] transition-colors"
        />
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
