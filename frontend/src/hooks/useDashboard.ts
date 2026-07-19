"use client";

import { useForms } from "./useForms";
import { useHealth } from "./useHealth";

export function useDashboard() {
  const forms = useForms();
  const health = useHealth();

  return {
    forms,
    health,
    loading:
      forms.isLoading ||
      health.isLoading,

    error:
      forms.isError ||
      health.isError,
  };
}