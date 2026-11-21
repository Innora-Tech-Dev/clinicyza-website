import { ROUTES } from "@/constants/constants";
import { SERVICES } from "@/data/services";
import Button from "@/ui-components/buttons/Button";
import ServiceCard from "@/ui-components/cards/ServiceCard";
import SectionHeading, { Accent } from "@/ui-components/typography/SectionHeading";
import styles from "./services.module.css";

export default function Services() {
  return (
    <section className="section section-surface">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            eyebrow="Popular services"
            title={
              <>
                Treatment for <Accent>everyday</Accent> health.
              </>
            }
            subtitle="Transparent prices. Prescriptions sent to your local pharmacy."
          />
          <Button variant="secondary" href={ROUTES.services} icon="arrow">
            All services
          </Button>
        </div>
        <div className={styles.grid}>
          {SERVICES.slice(0, 3).map((service) => (
            <ServiceCard
              key={service.id}
              category={service.categoryLabel}
              duration={service.duration}
              title={service.title}
              description={service.description}
              price={service.price}
              detailsHref={`${ROUTES.services}#${service.id}`}
              bookHref={`${ROUTES.appointment}?service=${service.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
