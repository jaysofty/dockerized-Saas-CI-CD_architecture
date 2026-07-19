"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { submitForm } from "@/services/forms";

export function useSubmitForm() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitForm,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["forms"],
      });
    },
  });
}