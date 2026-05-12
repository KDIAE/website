"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaSpinner, FaReceipt } from "react-icons/fa";
import Link from "next/link";

export default function ReceiptLookupPage() {
  const router = useRouter();
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = orderId.trim();
    if (!trimmed) return;
    setLoading(true);
    setError("");
    router.push(`/fees/receipt/${encodeURIComponent(trimmed)}`);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 w-full max-w-md">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-[#212529] rounded-xl flex items-center justify-center">
            <FaReceipt className="text-[#FFCA2B] text-lg" />
          </div>
          <div>
            <h1 className="font-bold text-[#212529] text-lg">Download Receipt</h1>
            <p className="text-xs text-slate-400">Enter your Order ID to view</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Order ID (e.g. ORD-ABC123456DEF)"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]/30 focus:border-[#007BFF] font-mono"
          />
          {error && <p className="text-xs text-rose-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#007BFF] hover:bg-[#0062CC] disabled:bg-slate-300 text-white font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all"
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaSearch />}
            {loading ? "Loading…" : "View Receipt"}
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-4">
          Your Order ID was shown on the confirmation page and sent to your email.
        </p>

        <div className="mt-4 text-center">
          <Link href="/fees" className="text-[#007BFF] text-sm underline underline-offset-2">
            ← Back to Fee Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
