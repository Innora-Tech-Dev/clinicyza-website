import Services from "@/pages-files/Services";
import { PRICING } from "@/constants/constants";

export const metadata = {
  title: "Services & pricing",
  description: `Online doctor consultations, prescriptions and sick notes from ${PRICING.currency}${PRICING.consultationFrom}.`,
};

export default function ServicesPage() {
  return <Services />;
}
