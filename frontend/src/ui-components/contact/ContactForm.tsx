"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

import { contactSchema, ContactSchema } from "@/lib/form-schema";
import { useSubmitForm } from "@/hooks/useSubmitForm";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ContactForm() {
  const mutation = useSubmitForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactSchema) {
    try {
      await mutation.mutateAsync(values);

      toast.success("Your message has been sent successfully.");

      reset();
    } catch {
      toast.error("Unable to send message.");
    }
  }

  return (
  <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border border-white/10
          bg-white/5
          p-10
          shadow-[0_20px_80px_rgba(0,0,0,.35)]
          backdrop-blur-2xl
        "
      >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
      absolute
      -top-20
      right-0
      h-72
      w-72
      rounded-full
      bg-blue-500/10
      blur-[120px]
    "
        />

        <div
          className="
      absolute
      bottom-0
      -left-20
      h-64
      w-64
      rounded-full
      bg-cyan-500/10
      blur-[120px]
    "
        />
      </div>
      <div className="mb-8">

  <h3 className="text-2xl font-bold">
    Schedule a Demo
  </h3>

  <p className="mt-2 text-zinc-400">
    Tell us a little about your business, and we will get back to you within one business day.
  </p>

</div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}

        <div className="space-y-2">
          <label className="text-sm font-medium tracking-wide text-zinc-300">
  Name
</label>

          <Input
            placeholder="John Doe"
            {...register("name")}
            className="
    h-12
    rounded-xl
    border-white/10
    bg-white/5
    backdrop-blur
    transition-all
    duration-300
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500/20
  "
          />

          {errors.name && (
            <p className="text-sm
font-medium
text-rose-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}

        <div className="space-y-2">
        <label className="text-sm font-medium tracking-wide text-zinc-300">
  Email
</label>

          <Input
            placeholder="register@email.com"
            {...register("email")}
            className="
    h-12
    rounded-xl
    border-white/10
    bg-white/5
    backdrop-blur
    transition-all
    duration-300
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500/20
  "
          />

          {errors.email && (
            <p className="text-sm
font-medium
text-rose-400">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}

        <div className="space-y-2">
          <label className="text-sm font-medium tracking-wide text-zinc-300">
  Message
</label>

          <Textarea
            rows={6}
            {...register("message")}
            className="
    rounded-xl
    border-white/10
    bg-white/5
    backdrop-blur
    transition-all
    duration-300
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500/20
  "
          />

          {errors.message && (
            <p className="text-sm
font-medium
text-rose-400">{errors.message.message}</p>
          )}
        </div>

     <Button
  type="submit"
  disabled={mutation.isPending}
  className="
    h-14
    w-full
    rounded-xl
    bg-gradient-to-r
    from-blue-600
    to-cyan-500
    text-base
    font-semibold
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-blue-500/30
    disabled:opacity-70
  "
>
  {mutation.isPending ? (
    <>
      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      Sending...
    </>
  ) : (
    <>
      <Send className="mr-2 h-5 w-5" />
      Schedule Demo
    </>
  )}
</Button>
      </form>
      
    </div>
      </motion.div>
  );
}
