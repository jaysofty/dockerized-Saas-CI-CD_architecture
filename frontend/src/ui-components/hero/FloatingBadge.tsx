"use client";

import { motion } from "framer-motion";

interface FloatingBadgeProps {
  title: string;
  value: string;
}

export default function FloatingBadge({
  title,
  value,
}: FloatingBadgeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl"
    >
      <p className="text-xs uppercase text-zinc-400">{title}</p>
      <h3 className="text-lg font-bold">{value}</h3>
    </motion.div>
  );
}