"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export default function AnimateStagger({
  children,
  staggerDelay = 0.1,
  className,
}: AnimateStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
