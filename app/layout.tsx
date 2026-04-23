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

export const metadata: Metadata = {
  title: "KD Institute of Advance Education | Quality CBSE Education",
  description:
    "KD Institute of Advance Education – A nurturing CBSE-focused school committed to academic excellence, values, and holistic development in Hooghly, West Bengal.",
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
