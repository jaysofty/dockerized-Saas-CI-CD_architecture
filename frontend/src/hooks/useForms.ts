"use client";

import { useQuery } from "@tanstack/react-query";
import { getForms } from "@/services/forms";

export function useForms() {
  return useQuery({
    queryKey: ["forms"],
    queryFn: getForms,
  });
}