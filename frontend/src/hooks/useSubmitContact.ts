"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { submitContact } from "@/services/contact";

export function useSubmitContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitContact,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["forms"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },
  });
}