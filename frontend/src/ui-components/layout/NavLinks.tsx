"use client";

import Link from "next/link";
import { navigation } from "@/lib/navigation";

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="
            text-sm
            font-medium
            text-zinc-400
            transition-colors
            duration-300
            hover:text-white
          "
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}