import { api } from "./api";

import { ContactFormData } from "@/ui-components/contact/schema";

export function submitContact(
  data: ContactFormData
) {
  return api("/forms", {
    method: "POST",
    body: JSON.stringify(data),
  });
}