import Hero from "./hero/Hero";
import ServicesList from "./services-list/ServicesList";
import CtaBanner from "@/components/shared/cta-banner/CtaBanner";

/** Services page — assembles all services sections. */
export default function ServicesMain() {
  return (
    <>
      <Hero />
      <ServicesList />
      <CtaBanner />
    </>
  );
}
