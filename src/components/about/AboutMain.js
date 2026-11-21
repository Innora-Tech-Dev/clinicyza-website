import Hero from "./hero/Hero";
import Mission from "./mission/Mission";
import Values from "./values/Values";
import CtaBanner from "@/components/shared/cta-banner/CtaBanner";

/** About page — assembles all about sections. */
export default function AboutMain() {
  return (
    <>
      <Hero />
      <Mission />
      <Values />
      <CtaBanner />
    </>
  );
}
