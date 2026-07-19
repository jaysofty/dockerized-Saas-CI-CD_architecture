"use client";

import Counter from "./Counter";
import StatBox from "./StatBox";

import {
  Database,
  Boxes,
  Cloud,
  ShieldCheck,
  Activity,
  Workflow,
} from "lucide-react";

import { useDashboard } from "@/hooks/useDashboard";

export default function Stats() {
  const { forms, health } = useDashboard();

  const totalForms = forms.data?.length ?? 0;
  const isHealthy = health.data?.status === "Healthy";

  return (
    <section className="py-32" id="stats">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
            Platform Analytics
          </span>

          <h2 className="mt-8 text-5xl font-black">Built for reliability.</h2>

          <p className="mt-6 text-zinc-400 text-lg">
            Real metrics from the running FormFlow platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <StatBox
            value={<Counter end={totalForms} suffix="+" />}
            label="Form Submissions"
          />

          <StatBox
            value={<Counter end={99.9} suffix="%" />}
            label="API Availability"
          />

          <StatBox
            value={
              <Activity
                size={48}
                className={`mx-auto ${
                  isHealthy ? "text-green-400" : "text-red-400"
                }`}
              />
            }
            label={isHealthy ? "Backend Online" : "Backend Offline"}
          />

          <StatBox
            value={<Boxes size={48} className="mx-auto text-blue-400" />}
            label="Docker Ready"
          />

          <StatBox
            value={<Database size={48} className="mx-auto text-cyan-400" />}
            label="PostgreSQL + Prisma"
          />

          <StatBox
            value={<Cloud size={48} className="mx-auto text-purple-400" />}
            label="Terraform Infrastructure"
          />
        </div>
      </div>
    </section>
  );
}
