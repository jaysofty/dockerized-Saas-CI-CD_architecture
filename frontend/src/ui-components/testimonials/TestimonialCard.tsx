"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  message: string;
}

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-10
        shadow-2xl
        backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Quote */}

      <Quote
        size={54}
        className="mb-8 text-blue-500/40"
      />

      {/* Stars */}

      <div className="mb-6 flex gap-1">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}

      <p className="text-lg leading-8 text-zinc-300">
        
        {testimonial.message}
        
      </p>

      {/* Divider */}

      <div className="my-8 h-px bg-white/10" />

      {/* Profile */}

      <div className="flex items-center gap-5">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={70}
          height={70}
          className="rounded-full border border-white/10 object-cover"
        />

        <div>
          <h4 className="text-xl font-semibold">
            {testimonial.name}
          </h4>

          <p className="text-zinc-400">
            {testimonial.role}
          </p>

          <span
            className="
              mt-2
              inline-block
              rounded-full
              bg-blue-500/10
              px-3
              py-1
              text-sm
              text-blue-400
            "
          >
            {testimonial.company}
          </span>
        </div>
      </div>
    </motion.div>
  );
}