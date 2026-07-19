"use client";

import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  value: string;
}

export default function InfoCard({
  icon,
  title,
  value,
}: Props) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

      <div className="rounded-xl bg-blue-600/20 p-3 text-blue-400">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold">
          {title}
        </h4>

        <p className="mt-1 text-sm text-zinc-400">
          {value}
        </p>
      </div>

    </div>
  );
}