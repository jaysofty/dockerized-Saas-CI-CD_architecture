"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        hover:border-blue-500/40
        hover:bg-blue-500/5
      "
    >
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-blue-600/20
          text-blue-400
        "
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-zinc-400 leading-7">
        {description}
      </p>

      <div
        className="
        mt-8
        flex
        items-center
        gap-2
        text-blue-400
        opacity-0
        transition
        group-hover:opacity-100
      "
      >
        Learn More

        <ArrowRight size={18} />
      </div>
    </motion.div>
  );
}