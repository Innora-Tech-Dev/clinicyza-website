import { SITE } from "@/constants/constants";
import PageHero from "@/components/shared/page-hero/PageHero";
import { Accent } from "@/ui-components/typography/SectionHeading";

export default function Hero() {
  return (
    <PageHero
      current="For doctors"
      eyebrow="Join as a doctor"
      title={
        <>
          Practise medicine, <Accent>your</Accent> way.
        </>
      }
      subtitle={`Join ${SITE.name}'s network of EU-licensed doctors. Set your own hours, consult by video, and leave the admin to us.`}
    />
  );
}
