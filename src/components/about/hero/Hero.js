import { ROUTES, SITE } from "@/constants/constants";
import Button from "@/ui-components/buttons/Button";
import PageHero from "@/components/shared/page-hero/PageHero";
import { Accent } from "@/ui-components/typography/SectionHeading";

export default function Hero() {
  return (
    <PageHero
      current="About"
      eyebrow={`About ${SITE.name}`}
      title={
        <>
          Calm, premium care, <Accent>by design</Accent>.
        </>
      }
      subtitle={`${SITE.name} connects people across Europe with licensed doctors in minutes — in their language, wherever life takes them.`}
    >
      <Button href={ROUTES.appointment} icon="arrow">
        Book consultation
      </Button>
      <Button variant="secondary" href={ROUTES.contact}>
        Contact us
      </Button>
    </PageHero>
  );
}
