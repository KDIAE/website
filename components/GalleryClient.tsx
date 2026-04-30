"use client";
import { useState } from "react";
import Image from "next/image";

export interface GalleryItem {
  src: string;
  category: string;
  title: string;
  subtitle: string;
}

interface GalleryClientProps {
  items: GalleryItem[];
  categories: string[];
  itemsPerPage?: number;
}

export default function GalleryClient({
  items,
  categories,
  itemsPerPage = 12,
}: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  return (
    <>
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
            <p className="text-center text-gray-400 py-20">
              No photos in this category yet.
            </p>
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
                    <span className="text-white text-xs font-bold leading-snug line-clamp-2">
                      {item.subtitle}
                    </span>
                    <span className="mt-1 text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
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
    </>
  );
}
