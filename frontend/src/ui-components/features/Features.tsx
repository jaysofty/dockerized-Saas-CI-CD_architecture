"use client";

import FeatureCard from "./FeatureCard";

import {
  Boxes,
  ShieldCheck,
  Database,
  Workflow,
  Cloud,
  FileCode2,
} from "lucide-react";

const features = [
  {
    title: "Dockerized Architecture",
    description:
      "Every service runs in isolated containers using Docker and Docker Compose for consistent deployments across every environment.",

    icon: <Boxes size={32} />,
  },

  {
    title: "Continuous Delivery",
    description:
      "GitHub Actions automatically builds, versions, tests and deploys every release to the Linux server.",

    icon: <Workflow size={32} />,
  },

  {
    title: "PostgreSQL + Prisma",
    description:
      "Reliable relational storage with Prisma ORM providing end-to-end type safety and maintainable database access.",

    icon: <Database size={32} />,
  },

  {
    title: "Infrastructure as Code",
    description:
      "Terraform provisions cloud infrastructure so environments are repeatable, version-controlled and easy to reproduce.",

    icon: <Cloud size={32} />,
  },

  {
    title: "Secure API",
    description:
      "Express API secured with Helmet, CORS, validation middleware and structured error handling.",

    icon: <ShieldCheck size={32} />,
  },

  {
    title: "Swagger Documentation",
    description:
      "Interactive OpenAPI documentation makes every endpoint discoverable, testable and easy for developers to integrate.",

    icon: <FileCode2 size={32} />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
            Features
          </span>

          <h2 className="mt-8 text-5xl font-black">
            Everything needed to build,
            deploy and scale.
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            FormFlow combines modern frontend development,
            containerization, cloud deployment and automation
            into one production-ready platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}