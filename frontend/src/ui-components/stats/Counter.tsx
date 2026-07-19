"use client";

import CountUp from "react-countup";
interface CounterProps {
  end: number;
  suffix?: string;
  decimals?: number;
}

export default function Counter({
  end,
  suffix = "",
  decimals = 0,
}: CounterProps) {
  return (
    <span className="text-5xl font-black">
      <CountUp
        end={end}
        decimals={decimals}
        duration={2}
        separator=","
      />
      {suffix}
    </span>
  );
}