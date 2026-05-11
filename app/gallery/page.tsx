import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import type { GalleryItem } from "@/components/GalleryClient";

const GalleryClient = dynamic(() => import("@/components/GalleryClient"), { loading: () => <div className="min-h-[600px] animate-pulse bg-gray-100 rounded-3xl" /> });

export const revalidate = 60; // revalidate every 60 seconds

async function fetchGalleryData(): Promise<{ items: GalleryItem[]; categories: string[] }> {
  const backendUrl = process.env.BACKEND_URL;
  if (!backendUrl) {
    return { items: [], categories: ["All"] };
  }

  try {
    const res = await fetch(`${backendUrl}/api/gallery/public?limit=1000`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch gallery");

    const data: Array<{
      id: string;
      key: string;
      url: string;
      category: string;
      title: string;
      subtitle: string;
      uploaded_at: string;
    }> = await res.json();

    const items: GalleryItem[] = data.map((d) => ({
      src: d.url,
      category: d.category,
      title: d.title,
      subtitle: d.subtitle,
    }));

    // Build unique ordered category list
    const seen = new Set<string>();
    const categories: string[] = ["All"];
    for (const item of items) {
      if (!seen.has(item.category)) {
        seen.add(item.category);
        categories.push(item.category);
      }
    }

    return { items, categories };
  } catch {
    return { items: [], categories: ["All"] };
  }
}

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
        url: "https://cdn.kdiae.in/gallery/gal_1774722698_b12ef32b.jpg",
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
    images: ["https://cdn.kdiae.in/gallery/gal_1774722698_b12ef32b.jpg"],
  },
};

const ITEMS_PER_PAGE = 12;

export default async function GalleryPage() {
  const { items: galleryItems, categories } = await fetchGalleryData();
  return (
    <>
      {/* Header */}
      <section className="bg-[#212529] text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0">
          <Image src="https://cdn.kdiae.in/gallery/events/gal_1775935050_860bfbb5.jpg" alt="Gallery" fill className="object-cover object-center opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-[#FFCA2B]/20 text-[#FFCA2B] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Gallery</span>
          <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">Life at KDIAE</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A glimpse into our vibrant campus, classrooms, events, and activities.
          </p>
          <div className="flex justify-center gap-2 mt-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white font-semibold">Gallery</span>
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
