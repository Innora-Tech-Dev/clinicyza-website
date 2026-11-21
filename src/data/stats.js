import { PRICING } from "@/constants/constants";

export const STATS = [
  { value: "12,000+", label: "patients served" },
  { value: "4.9", suffix: "/5", label: "from 2,300+ reviews" },
  { value: "150+", label: "EU-licensed doctors" },
  { value: `<${PRICING.averageWaitMinutes}`, suffix: "min", label: "average wait" },
];
