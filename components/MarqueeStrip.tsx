"use client";
import { useEffect, useRef } from "react";

interface MarqueeStripProps {
  items: string[];
  speed?: number;
  className?: string;
  bgClassName?: string;
  textClassName?: string;
  separator?: string;
}

export default function MarqueeStrip({
  items,
  speed = 40,
  className = "",
  bgClassName = "",
  textClassName = "",
  separator = "•",
}: MarqueeStripProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = 0;
    let raf: number;
    const half = track.scrollWidth / 2;
    function tick() {
      x -= speed / 60;
      if (Math.abs(x) >= half) x = 0;
      track!.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${bgClassName} ${className}`}>
      <div ref={trackRef} className={`flex whitespace-nowrap will-change-transform ${textClassName}`}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-4 h-10">
            {item}
            <span className="opacity-50">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
