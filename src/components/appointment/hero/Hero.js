import { PRICING } from "@/constants/constants";
import PageHero from "@/components/shared/page-hero/PageHero";
import { Accent } from "@/ui-components/typography/SectionHeading";

export default function Hero() {
  return (
    <PageHero
      current="Book consultation"
      eyebrow="Book consultation"
      title={
        <>
          See a doctor in <Accent>minutes</Accent>.
        </>
      }
      subtitle={`Three quick steps. Average wait under ${PRICING.averageWaitMinutes} minutes — you only pay once a doctor accepts.`}
    />
  );
}
