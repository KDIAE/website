"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Events", "Academic"];

const galleryItems = [
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightbox, setLightbox] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

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

      {/* Filter Tabs */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#212529] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {paginated.length === 0 ? (
            <p className="text-center text-gray-400 py-20">No photos in this category yet.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {paginated.map((item) => (
                <button
                  key={item.src}
                  onClick={() => setLightbox(item)}
                  className="group relative aspect-square cursor-pointer rounded-2xl overflow-hidden shadow-sm border border-white hover:shadow-md focus:outline-none"
                >
                  <Image
                    src={item.src}
                    alt={item.subtitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex flex-col items-start justify-end p-3 opacity-0 group-hover:opacity-100">
                    <span className="text-white text-xs font-bold leading-snug line-clamp-2">{item.subtitle}</span>
                    <span className="mt-1 text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">{item.category}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-full text-sm font-bold transition-colors ${
                    currentPage === page
                      ? "bg-[#212529] text-white"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-yellow-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>
          )}

          <p className="text-center mt-4 text-gray-400 text-xs">
            Showing {paginated.length} of {filtered.length} photos
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.subtitle}
              width={1200}
              height={800}
              className="object-contain w-full h-auto rounded-xl max-h-[80vh]"
            />
            <div className="mt-3 text-center">
              <p className="text-white font-bold text-sm">{lightbox.title}</p>
              <p className="text-gray-300 text-xs mt-0.5">{lightbox.subtitle}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

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
