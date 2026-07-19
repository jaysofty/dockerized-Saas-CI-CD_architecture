"use client";

export default function MiniChart() {
  const heights = [60, 90, 70, 120, 80, 130, 100];

  return (
    <div className="mt-6 flex h-36 items-end gap-2">
      {heights.map((height, index) => (
        <div
          key={index}
          style={{ height }}
          className="w-full rounded-t-xl bg-gradient-to-t from-blue-700 to-cyan-400"
        />
      ))}
    </div>
  );
}