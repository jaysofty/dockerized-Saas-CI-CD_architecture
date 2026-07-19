import SocialLinks from "./SocialLinks";

export default function FooterBottom() {
  return (
    <div className="mt-16 border-t border-white/10 pt-8">

      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

        <p className="text-sm text-zinc-500">
          © 2026 FormFlow.
          Built with Next.js, Express, Prisma &
          Docker.
        </p>

        <SocialLinks />

      </div>

    </div>
  );
}