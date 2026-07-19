interface ActivityItemProps {
  name: string;
  email: string;
}

export default function ActivityItem({
  name,
  email,
}: ActivityItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-xs text-zinc-400">{email}</p>
      </div>

      <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
        New
      </span>
    </div>
  );
}