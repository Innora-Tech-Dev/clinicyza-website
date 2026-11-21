import PageHero from "@/components/shared/page-hero/PageHero";
import { Accent } from "@/ui-components/typography/SectionHeading";

export default function Hero() {
  return (
    <PageHero
      current="Contact"
      eyebrow="Contact"
      title={
        <>
          We&apos;re here to <Accent>help</Accent>.
        </>
      }
      subtitle="Questions about a booking, billing or your account? Our care team replies within one working day."
    />
  );
}
