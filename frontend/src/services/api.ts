import { API_URL } from "@/lib/constants";
import { ApiResponse } from "@/types/api";

export async function api<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(
      message || `Request failed (${response.status})`
    );
  }

  return response.json();
}