import { api } from "./api";
import { HealthData } from "@/types/api";

export async function getHealth() {
  const response = await api<HealthData>("/health");

  console.log("HEALTH RESPONSE:", response);

  return response.data;
}