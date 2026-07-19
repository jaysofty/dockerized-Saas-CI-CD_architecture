"use client";

import Link from "next/link";
import { Workflow } from "lucide-react";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div
        className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        bg-blue-600
        text-white
        shadow-lg
      "
      >
        <Workflow size={20} />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight">
          FormFlow
        </h1>

        <p className="text-xs text-zinc-500">
          SaaS Platform
        </p>
      </div>
    </Link>
  );
}