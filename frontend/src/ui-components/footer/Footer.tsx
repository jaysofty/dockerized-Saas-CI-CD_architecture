"use client";

import FooterColumn from "./FooterColumn";
import FooterBottom from "./FooterBottom";
import Newsletter from "./Newsletter";

const product = [
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Automation", href: "#contact" },
];

const resources = [
  { label: "API Docs", href: "http://localhost/api/v1/docs/#/" },

];

const company = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-4">

          <div>

            <h2 className="text-3xl font-black">
              FormFlow
            </h2>

            <p className="mt-5 text-zinc-400">
              Modern form automation for startups,
              agencies and enterprise teams.
            </p>

            <Newsletter />

          </div>

          <FooterColumn
            title="Product"
            links={product}
          />

          <FooterColumn
            title="Resources"
            links={resources}
          />

          <FooterColumn
            title="Company"
            links={company}
          />

        </div>

        <FooterBottom />

      </div>

    </footer>
  );
}