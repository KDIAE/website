"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaSearch, FaRupeeSign, FaCheckCircle, FaExclamationTriangle,
  FaReceipt, FaTimes, FaSpinner, FaLock, FaShieldAlt,
  FaMoneyBillWave, FaBus, FaBook, FaTshirt, FaUniversity, FaTag,
} from "react-icons/fa";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

// ── Types ──────────────────────────────────────────────────────────────────

interface FeeLineItem {
  type: string;
  label: string;
  amount: number;
  due_date: string;
  paid: boolean;
}

interface StudentFeeSummary {
  student_id: string;
  student_name: string;
  student_code: string;
  class_name: string;
  section: string;
  outstanding_items: FeeLineItem[];
  paid_items: FeeLineItem[];
  total_outstanding: number;
  total_paid: number;
}

interface InitiateResponse {
  order_id: string;
  razorpay_order_id: string;
  amount: number;
  currency: string;
  razorpay_key: string;
}

// ── Icon map ───────────────────────────────────────────────────────────────

function FeeIcon({ type }: { type: string }) {
  const map: Record<string, React.ReactNode> = {
    Tuition:   <FaMoneyBillWave />,
    Transport: <FaBus />,
    Book:      <FaBook />,
    Uniform:   <FaTshirt />,
    Admission: <FaUniversity />,
    Other:     <FaTag />,
  };
  return <span>{map[type] ?? <FaTag />}</span>;
}

// ── Mock Razorpay Checkout Modal ───────────────────────────────────────────

function MockRazorpayModal({
  order,
  onSuccess,
  onClose,
}: {
  order: InitiateResponse;
  onSuccess: (paymentId: string) => void;
  onClose: () => void;
}) {
  const [processing, setProcessing] = useState(false);
  const [method, setMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [upiId, setUpiId] = useState("");
  const [err, setErr] = useState("");

  async function handlePay() {
    setErr("");
    if (method === "upi" && !upiId.includes("@")) {
      setErr("Enter a valid UPI ID (e.g. name@upi)");
      return;
    }
    setProcessing(true);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1800));
    // Generate a mock payment id (starts with "pay_" — accepted by backend mock)
    const mockPaymentId = `pay_MOCK${Math.random().toString(36).slice(2, 14).toUpperCase()}`;
    onSuccess(mockPaymentId);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#212529] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FFCA2B] flex items-center justify-center">
              <FaRupeeSign className="text-[#212529] text-sm" />
            </div>
            <div>
              <p className="font-bold text-sm">Razorpay</p>
              <p className="text-xs text-slate-300">Secure Payment (Mock)</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <FaTimes />
          </button>
        </div>

        {/* Amount banner */}
        <div className="bg-slate-50 border-b border-slate-100 px-6 py-3 flex items-center justify-between">
          <span className="text-sm text-slate-600">Amount to Pay</span>
          <span className="text-xl font-bold text-[#212529]">
            ₹{order.amount.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Method tabs */}
        <div className="px-6 pt-4">
          <div className="flex gap-2 mb-4">
            {(["upi", "card", "netbanking"] as const).map((m) => (
              <button
                key={m}
                onClick={() => { setMethod(m); setErr(""); }}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold capitalize border transition-all ${
                  method === m
                    ? "bg-[#212529] text-white border-[#212529]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                }`}
              >
                {m === "upi" ? "UPI" : m === "card" ? "Card" : "Net Banking"}
              </button>
            ))}
          </div>

          {method === "upi" && (
            <div className="mb-4">
              <label className="text-xs text-slate-500 font-medium block mb-1">UPI ID</label>
              <input
                type="text"
                placeholder="yourname@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]/30 focus:border-[#007BFF]"
              />
            </div>
          )}

          {method === "card" && (
            <div className="mb-4 space-y-2">
              <input placeholder="Card Number: 4111 1111 1111 1111" disabled className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-slate-50 text-slate-400 cursor-not-allowed" />
              <div className="flex gap-2">
                <input placeholder="MM / YY" disabled className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-slate-50 text-slate-400 cursor-not-allowed" />
                <input placeholder="CVV" disabled className="flex-1 border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-slate-50 text-slate-400 cursor-not-allowed" />
              </div>
              <p className="text-[11px] text-amber-600">Card input is for display only (mock mode)</p>
            </div>
          )}

          {method === "netbanking" && (
            <div className="mb-4">
              <p className="text-xs text-slate-500 mb-2">Select Bank</p>
              <div className="grid grid-cols-3 gap-2">
                {["SBI", "HDFC", "ICICI", "Axis", "Kotak", "PNB"].map((b) => (
                  <button key={b} disabled className="border border-slate-200 rounded-lg py-2 text-xs text-slate-400 bg-slate-50 cursor-not-allowed">{b}</button>
                ))}
              </div>
              <p className="text-[11px] text-amber-600 mt-2">Net Banking is for display only (mock mode)</p>
            </div>
          )}

          {err && <p className="text-xs text-rose-600 mb-2">{err}</p>}
        </div>

        {/* Footer */}
        <div className="px-6 pb-5">
          <button
            onClick={handlePay}
            disabled={processing}
            className="w-full bg-[#007BFF] hover:bg-[#0062CC] disabled:bg-slate-300 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
          >
            {processing ? (
              <><FaSpinner className="animate-spin" /> Processing…</>
            ) : (
              <><FaLock className="text-xs" /> Pay ₹{order.amount.toLocaleString("en-IN")}</>
            )}
          </button>
          <div className="flex items-center justify-center gap-1.5 mt-3 text-slate-400 text-[11px]">
            <FaShieldAlt className="text-emerald-500 text-[10px]" />
            <span>Secured by Razorpay · Mock Mode</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function FeesPage() {
  const router = useRouter();

  // Step 1 – lookup
  const [studentCode, setStudentCode] = useState("");
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState("");
  const [summary, setSummary] = useState<StudentFeeSummary | null>(null);

  // Step 2 – parent details
  const [parentName,  setParentName]  = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [selected, setSelected] = useState<FeeLineItem[]>([]);

  // Step 3 – mock gateway
  const [orderResp, setOrderResp] = useState<InitiateResponse | null>(null);
  const [payLoading, setPayLoading] = useState(false);
  const [payError,   setPayError]   = useState("");

  // ── Handlers ──────────────────────────────────────────────────────────────

  async function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    if (!studentCode.trim()) return;
    setLookupLoading(true);
    setLookupError("");
    setSummary(null);

    try {
      // First find student by student_code
      const searchRes = await fetch(
        `${API}/api/students?search=${encodeURIComponent(studentCode.trim())}`,
      );
      if (!searchRes.ok) throw new Error("Could not reach API");
      const searchData = await searchRes.json();
      const students: Array<{ id: string; student_code: string }> =
        searchData?.students ?? searchData ?? [];

      const match = students.find(
        (s) => s.student_code?.toLowerCase() === studentCode.trim().toLowerCase(),
      );
      if (!match) {
        setLookupError("No student found with that code. Please check and try again.");
        return;
      }

      const feeRes = await fetch(`${API}/api/fees/${match.id}`);
      if (!feeRes.ok) throw new Error("Could not fetch fee details");
      const data: StudentFeeSummary = await feeRes.json();
      setSummary(data);
      // Pre-select all outstanding items
      setSelected(data.outstanding_items);
    } catch (err: unknown) {
      setLookupError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLookupLoading(false);
    }
  }

  function toggleItem(item: FeeLineItem) {
    setSelected((prev) =>
      prev.some((s) => s.label === item.label)
        ? prev.filter((s) => s.label !== item.label)
        : [...prev, item],
    );
  }

  const totalSelected = selected.reduce((a, c) => a + c.amount, 0);

  async function handleInitiatePayment(e: React.FormEvent) {
    e.preventDefault();
    if (!summary || selected.length === 0) return;
    setPayLoading(true);
    setPayError("");
    try {
      const res = await fetch(`${API}/api/fees/initiate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_id:  summary.student_id,
          amount:      totalSelected,
          fee_types:   [...new Set(selected.map((s) => s.type))],
          parent_name:  parentName,
          parent_email: parentEmail,
          parent_phone: parentPhone,
        }),
      });
      if (!res.ok) throw new Error("Failed to create payment order");
      const data: InitiateResponse = await res.json();
      setOrderResp(data);
    } catch (err: unknown) {
      setPayError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setPayLoading(false);
    }
  }

  async function handlePaymentSuccess(paymentId: string) {
    if (!orderResp) return;
    setOrderResp(null);
    try {
      const res = await fetch(`${API}/api/fees/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id:              orderResp.order_id,
          razorpay_payment_id:   paymentId,
          razorpay_order_id:     orderResp.razorpay_order_id,
          razorpay_signature:    "mock_signature",
        }),
      });
      if (!res.ok) throw new Error("Payment verification failed");
      router.push(`/fees/receipt/${orderResp.order_id}`);
    } catch (err: unknown) {
      setPayError(err instanceof Error ? err.message : "Verification failed");
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-[#212529] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFCA2B]/10 border border-[#FFCA2B]/30 text-[#FFCA2B] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <FaRupeeSign /> Fee Payment Portal
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Pay Student Fees Online</h1>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Enter your child's student code to view outstanding fees and make a
            secure online payment.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        {/* ── Step 1 · Lookup ── */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h2 className="font-bold text-[#212529] text-lg mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#007BFF] text-white text-xs flex items-center justify-center font-bold">1</span>
            Find Your Student
          </h2>
          <form onSubmit={handleLookup} className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Student Code (e.g. KD260042)"
              value={studentCode}
              onChange={(e) => setStudentCode(e.target.value)}
              className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]/30 focus:border-[#007BFF]"
            />
            <button
              type="submit"
              disabled={lookupLoading}
              className="bg-[#007BFF] hover:bg-[#0062CC] disabled:bg-slate-300 text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all"
            >
              {lookupLoading ? <FaSpinner className="animate-spin" /> : <FaSearch />}
              {lookupLoading ? "Searching…" : "Search"}
            </button>
          </form>
          {lookupError && (
            <p className="mt-3 flex items-center gap-2 text-sm text-rose-600">
              <FaExclamationTriangle className="shrink-0" /> {lookupError}
            </p>
          )}
        </div>

        {/* ── Step 2 · Fee Details ── */}
        {summary && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
            <div className="flex items-start justify-between">
              <h2 className="font-bold text-[#212529] text-lg flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#007BFF] text-white text-xs flex items-center justify-center font-bold">2</span>
                Fee Details
              </h2>
              <button
                onClick={() => { setSummary(null); setStudentCode(""); setSelected([]); }}
                className="text-xs text-slate-400 hover:text-slate-700 underline"
              >
                Change Student
              </button>
            </div>

            {/* Student info */}
            <div className="flex flex-wrap gap-4 bg-slate-50 rounded-xl p-4">
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wide">Student</p>
                <p className="font-semibold text-[#212529] text-sm">{summary.student_name}</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wide">Code</p>
                <p className="font-semibold text-[#212529] text-sm">{summary.student_code}</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wide">Class</p>
                <p className="font-semibold text-[#212529] text-sm">{summary.class_name} {summary.section}</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wide">Total Outstanding</p>
                <p className="font-bold text-rose-600 text-sm">₹{summary.total_outstanding.toLocaleString("en-IN")}</p>
              </div>
            </div>

            {/* Outstanding items */}
            {summary.outstanding_items.length > 0 ? (
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-2">Outstanding Fees</p>
                <div className="space-y-2">
                  {summary.outstanding_items.map((item) => {
                    const isSelected = selected.some((s) => s.label === item.label);
                    return (
                      <label
                        key={item.label}
                        className={`flex items-center justify-between gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? "border-[#007BFF] bg-blue-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleItem(item)}
                            className="accent-[#007BFF] w-4 h-4"
                          />
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 text-sm">
                            <FeeIcon type={item.type} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-800">{item.label}</p>
                            <p className="text-[11px] text-slate-400">Due: {item.due_date}</p>
                          </div>
                        </div>
                        <span className="font-bold text-slate-800 text-sm shrink-0">
                          ₹{item.amount.toLocaleString("en-IN")}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                <FaCheckCircle className="text-emerald-500 shrink-0" />
                <p className="text-sm text-emerald-700 font-medium">All fees are paid up to date!</p>
              </div>
            )}

            {/* Paid items (collapsible) */}
            {summary.paid_items.length > 0 && (
              <details className="group">
                <summary className="text-sm text-slate-500 cursor-pointer hover:text-slate-700 list-none flex items-center gap-1.5">
                  <FaCheckCircle className="text-emerald-500 text-xs" />
                  View {summary.paid_items.length} paid item(s)
                </summary>
                <div className="mt-2 space-y-2">
                  {summary.paid_items.map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 opacity-60">
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-emerald-500 text-xs shrink-0" />
                        <span className="text-sm text-slate-600 line-through">{item.label}</span>
                      </div>
                      <span className="text-sm text-slate-500">₹{item.amount.toLocaleString("en-IN")}</span>
                    </div>
                  ))}
                </div>
              </details>
            )}

            {/* Parent details + pay button */}
            {summary.outstanding_items.length > 0 && selected.length > 0 && (
              <form onSubmit={handleInitiatePayment} className="border-t border-slate-100 pt-5 space-y-4">
                <h3 className="font-bold text-[#212529] text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#007BFF] text-white text-xs flex items-center justify-center font-bold">3</span>
                  Parent / Guardian Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    type="text"
                    placeholder="Full Name *"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]/30 focus:border-[#007BFF]"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number *"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]/30 focus:border-[#007BFF]"
                  />
                  <input
                    type="email"
                    placeholder="Email (for receipt)"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]/30 focus:border-[#007BFF] sm:col-span-2"
                  />
                </div>

                {payError && (
                  <p className="flex items-center gap-2 text-sm text-rose-600">
                    <FaExclamationTriangle className="shrink-0" /> {payError}
                  </p>
                )}

                <div className="flex items-center justify-between bg-[#212529] text-white rounded-2xl px-5 py-4">
                  <div>
                    <p className="text-xs text-slate-400">Selected ({selected.length} item{selected.length > 1 ? "s" : ""})</p>
                    <p className="text-2xl font-bold">₹{totalSelected.toLocaleString("en-IN")}</p>
                  </div>
                  <button
                    type="submit"
                    disabled={payLoading}
                    className="bg-[#FFCA2B] hover:bg-yellow-300 disabled:bg-slate-500 text-[#212529] font-bold px-6 py-3 rounded-xl flex items-center gap-2 text-sm transition-all"
                  >
                    {payLoading ? <FaSpinner className="animate-spin" /> : <FaRupeeSign />}
                    {payLoading ? "Please wait…" : "Pay Now"}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Info card */}
        {!summary && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <p className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
              <FaShieldAlt className="text-[#007BFF]" /> How It Works
            </p>
            <ol className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><span className="font-bold text-[#007BFF]">1.</span> Enter your child's student code (e.g. KD260042)</li>
              <li className="flex gap-2"><span className="font-bold text-[#007BFF]">2.</span> Review outstanding fee items and select what you'd like to pay</li>
              <li className="flex gap-2"><span className="font-bold text-[#007BFF]">3.</span> Fill in your contact details and proceed to secure payment</li>
              <li className="flex gap-2"><span className="font-bold text-[#007BFF]">4.</span> Pay via UPI, Card or Net Banking — download your receipt instantly</li>
            </ol>
          </div>
        )}

        {/* Receipt history link */}
        <div className="text-center text-sm text-slate-400">
          Already paid?{" "}
          <Link href="/fees/receipt" className="text-[#007BFF] underline underline-offset-2">
            Download your receipt
          </Link>
        </div>
      </div>

      {/* Mock Razorpay modal */}
      {orderResp && (
        <MockRazorpayModal
          order={orderResp}
          onSuccess={handlePaymentSuccess}
          onClose={() => setOrderResp(null)}
        />
      )}
    </div>
  );
}
