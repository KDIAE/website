"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FaCheckCircle, FaDownload, FaSpinner, FaExclamationTriangle,
  FaRupeeSign, FaRegCalendarAlt, FaUser, FaPhone, FaEnvelope,
  FaHashtag, FaPrint,
} from "react-icons/fa";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

interface PaymentRecord {
  id: string;
  order_id: string;
  student_id: string;
  student_name: string;
  student_code: string;
  parent_name: string;
  parent_email: string;
  parent_phone: string;
  amount: number;
  currency: string;
  fee_types: string[];
  razorpay_order_id: string;
  razorpay_payment_id: string;
  status: string;
  created_at: string;
  paid_at: string | null;
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString("en-IN", {
      dateStyle: "long",
      timeStyle: "short",
    });
  } catch {
    return iso;
  }
}

export default function ReceiptPage() {
  const params = useParams<{ orderId: string }>();
  const orderId = params?.orderId;

  const [record, setRecord] = useState<PaymentRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!orderId) return;
    fetch(`${API}/api/fees/receipt/${orderId}`)
      .then((r) => {
        if (!r.ok) throw new Error("Receipt not found");
        return r.json();
      })
      .then(setRecord)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <FaSpinner className="animate-spin text-3xl text-[#007BFF]" />
      </div>
    );
  }

  if (error || !record) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-50 px-4">
        <FaExclamationTriangle className="text-4xl text-rose-500" />
        <p className="text-lg font-semibold text-slate-700">{error || "Receipt not found"}</p>
        <Link href="/fees" className="text-[#007BFF] underline text-sm">
          Back to Fee Portal
        </Link>
      </div>
    );
  }

  const isPaid = record.status === "paid";

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-lg mx-auto">
        {/* Status banner */}
        <div className={`rounded-2xl p-6 mb-6 text-center ${isPaid ? "bg-emerald-50 border border-emerald-200" : "bg-amber-50 border border-amber-200"}`}>
          {isPaid ? (
            <>
              <FaCheckCircle className="text-5xl text-emerald-500 mx-auto mb-3" />
              <h1 className="text-2xl font-bold text-emerald-700">Payment Successful!</h1>
              <p className="text-sm text-emerald-600 mt-1">
                Your payment has been received and recorded.
              </p>
            </>
          ) : (
            <>
              <FaExclamationTriangle className="text-5xl text-amber-500 mx-auto mb-3" />
              <h1 className="text-2xl font-bold text-amber-700">Payment Pending</h1>
            </>
          )}
        </div>

        {/* Receipt card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden" id="receipt-card">
          {/* Header */}
          <div className="bg-[#212529] text-white px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">KD Institute of Advance Education</p>
                <p className="text-lg font-bold">Fee Receipt</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">Order ID</p>
                <p className="text-sm font-mono font-semibold text-[#FFCA2B]">{record.order_id}</p>
              </div>
            </div>
          </div>

          {/* Amount */}
          <div className="bg-emerald-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
            <span className="text-sm text-slate-600 font-medium">Amount Paid</span>
            <span className="text-3xl font-bold text-emerald-700 flex items-center gap-1">
              <FaRupeeSign className="text-xl" />
              {record.amount.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Details grid */}
          <div className="px-6 py-5 grid grid-cols-1 gap-4">
            <DetailRow icon={<FaUser />} label="Student" value={`${record.student_name} (${record.student_code})`} />
            <DetailRow icon={<FaUser />} label="Parent / Guardian" value={record.parent_name} />
            {record.parent_phone && <DetailRow icon={<FaPhone />} label="Phone" value={record.parent_phone} />}
            {record.parent_email && <DetailRow icon={<FaEnvelope />} label="Email" value={record.parent_email} />}
            <Divider />
            <DetailRow icon={<FaHashtag />} label="Payment ID" value={record.razorpay_payment_id || "—"} mono />
            <DetailRow icon={<FaHashtag />} label="Gateway Order" value={record.razorpay_order_id} mono />
            <Divider />
            <div>
              <p className="text-[11px] text-slate-400 uppercase tracking-wide mb-1.5">Fee Types Covered</p>
              <div className="flex flex-wrap gap-1.5">
                {record.fee_types.map((t) => (
                  <span key={t} className="bg-blue-50 text-blue-700 border border-blue-100 text-xs px-2.5 py-0.5 rounded-full font-medium">{t}</span>
                ))}
              </div>
            </div>
            <Divider />
            {record.paid_at && (
              <DetailRow icon={<FaRegCalendarAlt />} label="Paid On" value={formatDate(record.paid_at)} />
            )}
            <DetailRow icon={<FaRegCalendarAlt />} label="Order Created" value={formatDate(record.created_at)} />
          </div>

          {/* Footer note */}
          <div className="bg-slate-50 border-t border-slate-100 px-6 py-3">
            <p className="text-[11px] text-slate-400 text-center">
              This is a computer-generated receipt. No signature required. · Mock Mode
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-5">
          <button
            onClick={() => window.print()}
            className="flex-1 flex items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 rounded-xl text-sm transition-all"
          >
            <FaPrint className="text-xs" /> Print
          </button>
          <Link
            href="/fees"
            className="flex-1 flex items-center justify-center gap-2 bg-[#007BFF] hover:bg-[#0062CC] text-white font-semibold py-3 rounded-xl text-sm transition-all"
          >
            <FaRupeeSign className="text-xs" /> Pay More Fees
          </Link>
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  icon, label, value, mono = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-slate-400 text-sm mt-0.5 shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-slate-400 uppercase tracking-wide">{label}</p>
        <p className={`text-sm text-slate-800 font-medium break-all ${mono ? "font-mono text-xs" : ""}`}>{value}</p>
      </div>
    </div>
  );
}

function Divider() {
  return <hr className="border-slate-100" />;
}
