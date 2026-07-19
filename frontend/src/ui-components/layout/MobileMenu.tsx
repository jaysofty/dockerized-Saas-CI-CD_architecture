"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { navigation } from "@/lib/navigation";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="lg:hidden" />}
      >
        <Menu />
      </SheetTrigger>

      <SheetContent side="right">
        <div className="mt-12 flex flex-col gap-6">
          {navigation.map((item) => (
            <Link key={item.title} href={item.href} className="text-lg">
              {item.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
