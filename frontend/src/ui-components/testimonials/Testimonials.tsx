"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";


export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const previous = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const next = () =>
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-32"
    >
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left */}

        <div>
          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
            Testimonials
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight">
            Loved by Modern Engineering Teams
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Engineering teams rely on FormFlow to simplify
            customer onboarding, automate workflows and deploy
            production-ready APIs faster.
          </p>

          <div className="mt-10 flex gap-4">
            <button
              onClick={previous}
              className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:bg-blue-500/20"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:bg-blue-500/20"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Right */}

        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                x: 80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -80,
              }}
              transition={{
                duration: 0.45,
              }}
            >
              <TestimonialCard
                testimonial={testimonials[current]}
              />
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition ${
                  current === index
                    ? "bg-blue-500"
                    : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}