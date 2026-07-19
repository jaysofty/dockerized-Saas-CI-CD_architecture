"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import InfoCard from "./InfoCard";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <InfoCard
        icon={<Mail size={20} />}
        title="Email"
        value="hello@formflow.dev"
      />

      <InfoCard
        icon={<Phone size={20} />}
        title="Phone"
        value="+1 (555) 123-4567"
      />

      <InfoCard
        icon={<MapPin size={20} />}
        title="Location"
        value="Remote-first • Worldwide"
      />

      <InfoCard
        icon={<Clock size={20} />}
        title="Support"
        value="Monday – Friday • 24 Hours Response"
      />

    </div>
  );
}