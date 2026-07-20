"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        href="#contact"
        className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>

      <Link
        href="http://localhost/api/v1/docs"
        target="_blank"
        className="rounded-xl border border-zinc-700 px-6 py-4 font-semibold transition hover:border-blue-500"
      >
        API Documentation
      </Link>
    </div>
  );
}