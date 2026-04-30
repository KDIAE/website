import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import type { GalleryItem } from "@/components/GalleryClient";

const GalleryClient = dynamic(() => import("@/components/GalleryClient"), { loading: () => <div className="min-h-[600px] animate-pulse bg-gray-100 rounded-3xl" /> });

export const metadata: Metadata = {
  title: "Gallery – Campus Life at KDIAE",
  description:
    "Browse photos of life at KD Institute of Advance Education – events, academic activities, sports, and everyday campus moments in Hooghly, West Bengal.",
  keywords: [
    "KDIAE gallery",
    "CBSE school photos Hooghly",
    "KD Institute campus photos",
    "school events gallery West Bengal",
    "KDIAE opening ceremony",
    "school life photos KDIAE",
  ],
  alternates: { canonical: "https://kdiae.in/gallery" },
  openGraph: {
    title: "Gallery – Campus Life at KDIAE",
    description: "Photos from events and everyday life at KDIAE, Hooghly.",
    url: "https://kdiae.in/gallery",
    images: [
      {
        url: "/gallery/gal_1774722698_b12ef32b.jpg",
        width: 1200,
        height: 630,
        alt: "KDIAE Gallery – Campus Life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery – Campus Life at KDIAE",
    description: "Photos from events and everyday life at KDIAE, Hooghly.",
    images: ["/gallery/gal_1774722698_b12ef32b.jpg"],
  },
};

const categories = ["All", "Events", "Academic"];

const galleryItems: GalleryItem[] = [
  { src: "/gallery/gal_1776151763_1923ff19.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1776151745_a8189939.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1776151722_546546cf.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1776151687_007c9992.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775935194_53829fe6.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775935165_dfedb511.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775935144_bc5ea7d3.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775935126_9381a0c1.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775935105_c590a887.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775935070_0a16f27d.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775935050_860bfbb5.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775935028_94f1ed21.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775935004_521eb65a.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775934962_5425cc80.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775934940_fac1ebc7.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775934902_3b5684ff.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775934850_ea96faf6.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775934832_205169d2.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775934797_a1e0c086.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775934779_3caa59db.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1775934744_161e22d4.jpg", category: "Events",   title: "Opening Ceremony of KDIAE",                              subtitle: "Opening Ceremony of KDIAE" },
  { src: "/gallery/gal_1774723502_4f373141.jpg", category: "Academic", title: "Demo Class @ KDIAE",                                     subtitle: "Demo Class @ KDIAE" },
  { src: "/gallery/gal_1774722812_d7048d8e.jpg", category: "Academic", title: "Demo Class @ KDIAE",                                     subtitle: "Demo Class @ KDIAE" },
  { src: "/gallery/gal_1774722781_8b2ce766.jpg", category: "Academic", title: "Demo Class @ KDIAE",                                     subtitle: "Demo Class @ KDIAE" },
  { src: "/gallery/gal_1774722743_c5dd5b9e.jpg", category: "Academic", title: "Demo Class @ KDIAE",                                     subtitle: "Demo Class @ KDIAE" },
  { src: "/gallery/gal_1774722698_b12ef32b.jpg", category: "Academic", title: "Demo Class @ KDIAE",                                     subtitle: "Demo Class @ KDIAE" },
  { src: "/gallery/gal_1774722490_7e9cd133.jpg", category: "Academic", title: "Demo Class @ KDIAE",                                     subtitle: "Demo Class @KDIAE" },
  { src: "/gallery/gal_1772651309_2924a298.jpg", category: "Events",   title: "Drawing competition at KD INSTITUTE OF ADVANCE EDUCATION", subtitle: "Drawing competition at KDIAE @01-03-2026" },
  { src: "/gallery/gal_1772651057_8640aa21.jpg", category: "Events",   title: "Drawing competition at KD INSTITUTE OF ADVANCE EDUCATION", subtitle: "Drawing competition at KDIAE @01-03-2026" },
  { src: "/gallery/gal_1772651117_9829baa0.jpg", category: "Events",   title: "Drawing competition at KD INSTITUTE OF ADVANCE EDUCATION", subtitle: "Respected Chairman @Drawing competition at KDIAE" },
  { src: "/gallery/gal_1772650456_ba4dbe0a.jpg", category: "Events",   title: "Drawing competition at KD INSTITUTE OF ADVANCE EDUCATION", subtitle: "Drawing competition at KDIAE @1-03-2026" },
  { src: "/gallery/gal_1772651361_806dbeb5.jpg", category: "Events",   title: "Drawing competition at KD INSTITUTE OF ADVANCE EDUCATION", subtitle: "Respected Chairman @Drawing competition at KDIAE" },
  { src: "/gallery/gal_1772651412_adb3b66e.jpg", category: "Events",   title: "Drawing competition at KD INSTITUTE OF ADVANCE EDUCATION", subtitle: "Respected Chairman @Drawing competition at KDIAE" },
];

const ITEMS_PER_PAGE = 12;

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#212529] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/gal_1775935050_860bfbb5.jpg" alt="Gallery" fill className="object-cover object-center opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#FFCA2B] uppercase text-sm font-semibold tracking-widest">Gallery</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">Life at KDIAE</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            A glimpse into our vibrant campus, classrooms, events, and activities.
          </p>
          <div className="flex justify-center gap-2 mt-6 text-sm text-blue-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      {/* Interactive: filter tabs, gallery grid, lightbox, pagination */}
      <GalleryClient items={galleryItems} categories={categories} itemsPerPage={ITEMS_PER_PAGE} />

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#212529] mt-2">Campus &amp; Facilities</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🏫", title: "Modern Infrastructure", desc: "Purpose-built classrooms, halls, and facilities designed for optimal learning." },
              { icon: "🌳", title: "Green Campus", desc: "Surrounded by nature — a peaceful, healthy environment for focused study." },
              { icon: "🔒", title: "Secure Premises", desc: "Boundary walls, CCTV, and trained security personnel for round-the-clock safety." },
              { icon: "🚽", title: "Clean Facilities", desc: "Hygienic washrooms, clean drinking water, and regular sanitation routines." },
              { icon: "🍱", title: "Tiffin Area", desc: "Dedicated spaces for students to relax and have their meals comfortably." },
              { icon: "🅿️", title: "Parking & Transport", desc: "Ample parking space and transport assistance guidance for parents." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#212529] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#212529] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Want to Visit the Campus?</h2>
          <p className="text-blue-200 mb-6">Schedule a campus tour and see our facilities in person.</p>
          <Link href="/contact" className="bg-[#FFCA2B] text-[#212529] font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors">
            Book a Visit
          </Link>
        </div>
      </section>
    </>
  );
}
