import Hero from "./hero/Hero";
import Stats from "./stats/Stats";
import HowItWorks from "./how-it-works/HowItWorks";
import Services from "./services/Services";
import Doctors from "./doctors/Doctors";
import Testimonials from "./testimonials/Testimonials";
import Faq from "./faq/Faq";
import CtaBanner from "@/components/shared/cta-banner/CtaBanner";

/** Home page — assembles all home sections in order. */
export default function HomeMain() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Services />
      <Doctors />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
