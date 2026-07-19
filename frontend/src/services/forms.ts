import { FormSubmission, NewForm } from "@/types/forms";
import { api } from "./api";

export async function getForms() {
  const response = await api<FormSubmission[]>("/forms");

  console.log("FORMS RESPONSE:", response);

  return response.data;
}

export function submitForm(data: NewForm) {
  return api<FormSubmission>("/forms", {
    method: "POST",
    body: JSON.stringify(data),
  });
}