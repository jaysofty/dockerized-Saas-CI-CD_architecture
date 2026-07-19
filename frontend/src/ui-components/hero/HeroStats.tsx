"use client";

const stats = [
  {
    number: "2K+",
    label: "Forms Submitted",
  },
  {
    number: "99.9%",
    label: "API Uptime",
  },
  {
    number: "<100ms",
    label: "Average Response",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 flex flex-wrap gap-10">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold">{item.number}</h3>
          <p className="text-zinc-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}