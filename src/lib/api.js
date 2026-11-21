import { env } from "@/config/env";

/**
 * Minimal fetch wrapper for clinicyza-server.
 * Base URL comes from NEXT_PUBLIC_API_BASE_URL (.env.local).
 */
export async function apiRequest(path, { method = "GET", body, headers, ...options } = {}) {
  const response = await fetch(`${env.apiBaseUrl}${path}`, {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(data?.message || `Request failed (${response.status})`);
  }
  return data;
}

export const apiGet = (path, options) => apiRequest(path, { ...options, method: "GET" });
export const apiPost = (path, body, options) => apiRequest(path, { ...options, method: "POST", body });
