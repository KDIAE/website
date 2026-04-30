"use client";
import { useState } from "react";
import Select from "@/components/ui/Select";
import DatePicker from "@/components/ui/DatePicker";
import AnimateIn from "@/components/AnimateIn";
import {
  FaCheck, FaSpinner, FaClipboardCheck,
} from "react-icons/fa";

const CLASS_LIST = [
  "Nursery", "LKG", "UKG", "Std. I", "Std. II", "Std. III",
  "Std. IV", "Std. V", "Std. VI",
].map((c) => ({ value: c, label: c }));

const GENDER_OPTIONS = [
  { value: "Male",   label: "Male"   },
  { value: "Female", label: "Female" },
  { value: "Other",  label: "Other"  },
];

// ── Validation helpers ──────────────────────────────────────────────────────
const digitCount = (v: string) => v.replace(/\D/g, "").length;
const filterTel  = (raw: string) => {
  const s = raw.replace(/[^\d\s\-()+]/g, "");
  let d = 0, out = "";
  for (const ch of s) { if (/\d/.test(ch)) { if (d >= 10) continue; d++; } out += ch; }
  return out;
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BLANK = {
  applicant_name: "",
  dob: "",
  gender: "",
  applying_for_class: "",
  guardian_name: "",
  phone: "",
  email: "",
  address: "",
};

const inputCls = (err: string) =>
  `w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white transition ${
    err
      ? "border-red-400 focus:ring-red-200 focus:border-red-400"
      : "border-gray-200 focus:ring-[#007BFF]/30 focus:border-[#007BFF]"
  }`;

export default function AdmissionFormClient() {
  const [form, setForm]           = useState(BLANK);
  const [touched, setTouched]     = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [appCode, setAppCode]     = useState<string | null>(null);
  const [error, setError]         = useState("");

  const set   = (k: keyof typeof BLANK, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const touch = (k: string) => setTouched((p) => ({ ...p, [k]: true }));

  const phoneError = touched.phone && form.phone && digitCount(form.phone) !== 10
    ? "Enter a valid 10-digit mobile number" : "";
  const emailError = touched.email && form.email && !EMAIL_RE.test(form.email)
    ? "Enter a valid email address" : "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (form.phone && digitCount(form.phone) !== 10) {
      setTouched((p) => ({ ...p, phone: true }));
      return;
    }
    if (form.email && !EMAIL_RE.test(form.email)) {
      setTouched((p) => ({ ...p, email: true }));
      return;
    }
    setSubmitting(true);
    try {
      const today = new Date().toISOString().slice(0, 10);
      const payload = {
        applicant_name:     form.applicant_name.trim(),
        dob:                form.dob,
        gender:             form.gender,
        applying_for_class: form.applying_for_class,
        phone:              form.phone.trim(),
        email:              form.email.trim(),
        address:            form.address.trim(),
        guardian: {
          name:     form.guardian_name.trim(),
          phone:    form.phone.trim(),
          relation: "Parent",
        },
        applied_date:  today,
        academic_year: "2026-27",
        status:        "Pending",
      };
      const res = await fetch("/api/admissions", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed. Please try again.");
      const data = await res.json();
      setAppCode(data.application_code);
      setForm(BLANK);
      setTouched({});
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="apply-online" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimateIn direction="up" className="text-center mb-12">
          <span className="text-[#FFCA2B] font-bold uppercase text-xs tracking-[0.2em]">Quick Apply</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#212529] mt-2">
            Apply <span className="text-[#007BFF]">Online</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
            Fill in the details below and we&apos;ll get back to you. You can complete the rest in person at the school.
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1}>
          {appCode ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <FaClipboardCheck size={30} className="text-green-600" />
              </div>
              <h3 className="text-xl font-black text-[#212529] mb-2">Application Received!</h3>
              <p className="text-gray-500 text-sm mb-4">
                Your application has been submitted successfully. Please note your application code:
              </p>
              <div className="inline-block bg-[#212529] text-[#FFCA2B] font-black text-2xl px-8 py-3 rounded-xl tracking-widest mb-6">
                {appCode}
              </div>
              <p className="text-gray-400 text-xs mb-6">
                Keep this code handy — you&apos;ll need it when visiting the school.
              </p>
              <button
                onClick={() => setAppCode(null)}
                className="text-[#007BFF] text-sm font-semibold hover:underline"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-5">
              {/* Row 1: Name + DOB */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#212529] mb-1.5 uppercase tracking-wide">
                    Child&apos;s Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    value={form.applicant_name}
                    onChange={(e) => set("applicant_name", e.target.value)}
                    placeholder="E.g. Aryan Sharma"
                    className={inputCls("")}
                  />
                </div>
                <DatePicker
                  label="Date of Birth"
                  value={form.dob}
                  onChange={(v) => set("dob", v)}
                  max={new Date().toISOString().slice(0, 10)}
                  placeholder="Select date of birth"
                />
              </div>

              {/* Row 2: Gender + Class */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Select
                  label="Gender"
                  options={GENDER_OPTIONS}
                  value={form.gender}
                  onChange={(v) => set("gender", v)}
                  placeholder="Select gender"
                />
                <Select
                  label="Applying for Class"
                  required
                  options={CLASS_LIST}
                  value={form.applying_for_class}
                  onChange={(v) => set("applying_for_class", v)}
                  placeholder="Select class"
                />
              </div>

              {/* Row 3: Guardian + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#212529] mb-1.5 uppercase tracking-wide">
                    Parent / Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    value={form.guardian_name}
                    onChange={(e) => set("guardian_name", e.target.value)}
                    placeholder="E.g. Ramesh Sharma"
                    className={inputCls("")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#212529] mb-1.5 uppercase tracking-wide">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={(e) => set("phone", filterTel(e.target.value))}
                    onBlur={() => touch("phone")}
                    placeholder="10-digit mobile number"
                    className={inputCls(phoneError)}
                  />
                  {phoneError && <p className="text-xs text-red-500 mt-1">{phoneError}</p>}
                </div>
              </div>

              {/* Row 4: Email */}
              <div>
                <label className="block text-xs font-bold text-[#212529] mb-1.5 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  onBlur={() => touch("email")}
                  placeholder="Optional"
                  className={inputCls(emailError)}
                />
                {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
              </div>

              {/* Row 5: Address */}
              <div>
                <label className="block text-xs font-bold text-[#212529] mb-1.5 uppercase tracking-wide">
                  Home Address
                </label>
                <textarea
                  rows={2}
                  value={form.address}
                  onChange={(e) => set("address", e.target.value)}
                  placeholder="Street, locality, city"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]/30 focus:border-[#007BFF] bg-white transition resize-none"
                />
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#007BFF] hover:bg-blue-600 disabled:opacity-60 text-white font-black py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <><FaSpinner className="animate-spin" size={15} /> Submitting…</>
                ) : (
                  <>Submit Application <FaCheck size={13} /></>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                By submitting, you agree that our staff may contact you regarding the application.
              </p>
            </form>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
