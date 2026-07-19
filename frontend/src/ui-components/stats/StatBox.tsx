"use client";

import { motion } from "framer-motion";

interface StatBoxProps {
  value: React.ReactNode;
  label: string;
}

export default function StatBox({
  value,
  label,
}: StatBoxProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      text-center
      backdrop-blur-xl
    "
    >
      {value}

      <p className="mt-4 text-zinc-400">
        {label}
      </p>
    </motion.div>
  );
}