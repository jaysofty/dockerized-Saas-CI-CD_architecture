interface StatCardProps {
  label: string;
  value: string;
}

export default function StatCard({
  label,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-xl bg-white/5 p-4">
      <p className="text-sm text-zinc-400">{label}</p>

      <h3 className="mt-2 text-2xl font-bold">{value}</h3>
    </div>
  );
}