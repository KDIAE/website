import type { Metadata } from "next";
import { Source_Sans_3, Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingButtons from "@/components/FloatingButtons";
import AdmissionPopup from "@/components/AdmissionPopup";

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://kdiae.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "KD Institute of Advance Education | CBSE School in Hooghly",
    template: "%s | KDIAE – CBSE School, Hooghly",
  },
  description:
    "KD Institute of Advance Education (KDIAE) is a leading CBSE-affiliated school in Hooghly, West Bengal offering Nursery to Class VI education. Admissions open for 2026–27.",
  keywords: [
    "CBSE school Hooghly",
    "KD Institute of Advance Education",
    "KDIAE",
    "school in Hooghly West Bengal",
    "admissions 2026 Hooghly",
    "nursery to class VI CBSE",
    "Pandua Kalna road school",
    "best school Hooghly",
  ],
  authors: [{ name: "KD Institute of Advance Education", url: BASE_URL }],
  creator: "KD Institute of Advance Education",
  publisher: "KD Institute of Advance Education",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "KD Institute of Advance Education",
    title: "KD Institute of Advance Education | CBSE School in Hooghly",
    description:
      "A nurturing CBSE school in Hooghly, West Bengal offering quality education from Nursery to Class VI. Admissions open for 2026–27.",
    images: [
      {
        url: "/gallery/front_building.jpg",
        width: 1200,
        height: 630,
        alt: "KD Institute of Advance Education – School Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KD Institute of Advance Education | CBSE School in Hooghly",
    description:
      "A nurturing CBSE school in Hooghly, West Bengal. Admissions open for 2026–27.",
    images: ["/gallery/front_building.jpg"],
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans3.variable} ${GeistSans.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
        <AdmissionPopup />
      </body>
    </html>
  );
}
