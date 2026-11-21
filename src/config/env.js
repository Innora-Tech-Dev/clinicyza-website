/**
 * Single place to read environment variables.
 * Import from here instead of using process.env directly in components.
 *
 * NOTE: NEXT_PUBLIC_* vars must be referenced literally (process.env.NEXT_PUBLIC_X)
 * so Next.js can inline them into the browser bundle.
 */

export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5050/api/v1",
  portalUrl: process.env.NEXT_PUBLIC_PORTAL_URL || "http://localhost:3002",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
};
