"use client";

import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div>
      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
        🚀 New • Continuous Deployment Ready
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
        Automate your forms.
        <br />
        Accelerate your business.
      </h1>

      <p className="mt-8 max-w-xl text-lg text-zinc-400">
        FormFlow helps teams collect, organize and analyze customer submissions
        with enterprise-grade reliability, Dockerized deployments and continuous
        delivery.
      </p>

      <HeroActions />

      <HeroStats />
    </div>
  );
}