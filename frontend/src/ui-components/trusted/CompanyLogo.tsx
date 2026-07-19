interface CompanyLogoProps {
  icon: React.ReactNode;
  name: string;
}

export default function CompanyLogo({
  icon,
  name,
}: CompanyLogoProps) {
  return (
    <div
      className="
      flex
      items-center
      gap-3
      rounded-xl
      border
      border-white/10
      bg-white/5
      px-6
      py-4
      transition
      duration-300
      hover:border-blue-500/40
      hover:bg-blue-500/10
    "
    >
      <div className="text-3xl">
        {icon}
      </div>

      <span className="font-medium">
        {name}
      </span>
    </div>
  );
}