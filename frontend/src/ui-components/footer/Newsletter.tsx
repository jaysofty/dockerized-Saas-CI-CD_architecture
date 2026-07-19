"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

      <Input
        placeholder="Enter your email"
        className="h-12 rounded-xl border-white/10 bg-white/5"
      />

      <Button className="h-12 rounded-xl">
        Subscribe
      </Button>

    </div>
  );
}