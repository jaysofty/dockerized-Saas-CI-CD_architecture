import CompanyLogo from "./CompanyLogo";

import {
  FaDocker,
  FaGithub,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiTerraform,
  SiGithubactions,
} from "react-icons/si";

export default function TrustedCompanies() {
  const companies = [
    {
      name: "Docker",
      icon: <FaDocker />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "Terraform",
      icon: <SiTerraform />,
    },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions />,
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-12 text-center text-zinc-500 uppercase tracking-[0.3em]">
          Built With Modern DevOps Tools
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {companies.map((company) => (
            <CompanyLogo
              key={company.name}
              {...company}
            />
          ))}
        </div>
      </div>
    </section>
  );
}