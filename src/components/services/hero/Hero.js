import { PRICING } from "@/constants/constants";
import PageHero from "@/components/shared/page-hero/PageHero";
import { Accent } from "@/ui-components/typography/SectionHeading";

export default function Hero() {
  return (
    <PageHero
      current="Services"
      eyebrow="Services & pricing"
      title={
        <>
          Care for <Accent>everyday</Accent> health.
        </>
      }
      subtitle={`Clear prices from ${PRICING.currency}${PRICING.consultationFrom}. If our doctor can't help, you don't pay.`}
    />
  );
}
