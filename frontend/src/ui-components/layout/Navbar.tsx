"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      border-b
      border-zinc-800/60
      bg-zinc-950/80
      backdrop-blur-xl
    "
    >
      <div
        className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between
        px-6
      "
      >
        <NavLogo />

        <NavLinks />

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>

        <MobileMenu />
      </div>
    </motion.header>
  );
}