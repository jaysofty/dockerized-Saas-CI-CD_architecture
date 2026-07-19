"use client";

import { motion } from "framer-motion";

import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <ContactHeader />

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 grid gap-12 lg:grid-cols-2"
        >
          <ContactForm />

          <ContactInfo />
        </motion.div>

      </div>
    </section>
  );
}