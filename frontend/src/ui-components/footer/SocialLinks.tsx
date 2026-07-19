"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function SocialLinks() {
  const links = [
    {
      icon: FaGithub,
      href: "https://github.com/",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/",
      label: "X",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {links.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="
            group
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-500
            hover:bg-blue-500/10
            hover:shadow-lg
            hover:shadow-blue-500/20
          "
        >
          <Icon
            size={20}
            className="transition-colors group-hover:text-blue-400"
          />
        </Link>
      ))}
    </div>
  );
}