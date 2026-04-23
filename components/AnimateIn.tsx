"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoom" | "none" | "fade" | "blur";

interface AnimateInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const variants = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  zoom:  { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  none:  { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  fade:  { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  blur:  { hidden: { opacity: 0, filter: "blur(8px)" }, visible: { opacity: 1, filter: "blur(0px)" } },
};

export default function AnimateIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
