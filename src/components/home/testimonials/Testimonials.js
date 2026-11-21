import { TESTIMONIALS } from "@/data/testimonials";
import TestimonialCard from "@/ui-components/cards/TestimonialCard";
import SectionHeading, { Accent } from "@/ui-components/typography/SectionHeading";
import styles from "./testimonials.module.css";

export default function Testimonials() {
  return (
    <section className="section section-surface">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Patient stories"
          title={
            <>
              Care that feels <Accent>close</Accent>, wherever you are.
            </>
          }
        />
        <div className={styles.grid}>
          {TESTIMONIALS.map(({ id, ...item }) => (
            <TestimonialCard key={id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
