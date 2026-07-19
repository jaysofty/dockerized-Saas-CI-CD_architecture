"use client";

import { motion } from "framer-motion";

import FloatingBadge from "./FloatingBadge";
import MiniChart from "./MiniChart";
import ActivityItem from "./ActivityItem";
import StatCard from "./StatCard";

import { useDashboard } from "@/hooks/useDashboard";

export default function DashboardPreview() {
  const { forms, health, loading, error } = useDashboard();

  if (loading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8 text-red-400">
        Unable to load dashboard.
      </div>
    );
  }

  const submissions = forms.data ?? [];
  const apiHealth = health.data;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      <FloatingBadge title="Today's Forms" value={`${submissions.length}`} />

      <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">FormFlow Dashboard</h2>

          <span
            className={`rounded-full px-3 py-1 text-sm ${
              apiHealth?.status === "Healthy"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {apiHealth?.status ?? "Offline"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <StatCard label="Submissions" value={String(submissions.length)} />

          <StatCard label="API Status" value={apiHealth?.status ?? "Unknown"} />
        </div>

        <MiniChart />

        <div className="mt-8 space-y-3">
          {submissions.length > 0 ? (
            submissions
              .slice(0, 5)
              .map((form) => (
                <ActivityItem
                  key={form.id}
                  name={form.name}
                  email={form.email}
                />
              ))
          ) : (
            <p className="text-sm text-zinc-400">No submissions yet.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
