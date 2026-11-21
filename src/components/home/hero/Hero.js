import { PRICING, ROUTES } from "@/constants/constants";
import { DOCTORS } from "@/data/doctors";
import Button from "@/ui-components/buttons/Button";
import Eyebrow from "@/ui-components/badges/Eyebrow";
import TrustBadge from "@/ui-components/badges/TrustBadge";
import StatusPill from "@/ui-components/badges/StatusPill";
import DoctorCard from "@/ui-components/cards/DoctorCard";
import Toast from "@/ui-components/feedback/Toast";
import { Accent } from "@/ui-components/typography/SectionHeading";
import styles from "./hero.module.css";

export default function Hero() {
  const doctor = DOCTORS[0];

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <Eyebrow>Online doctors · Across Europe</Eyebrow>
          <h1>
            See a licensed doctor in <Accent>minutes</Accent>, not days.
          </h1>
          <p className="text-body-lg">
            Same-day video consultations with EU-licensed doctors. E-prescriptions go straight to
            your pharmacy; certificates arrive by email.
          </p>

          <div className={styles.actions}>
            <Button size="lg" href={ROUTES.appointment} icon="arrow">
              Book consultation
            </Button>
            <Button size="lg" variant="secondary" href={ROUTES.services}>
              View services & pricing
            </Button>
          </div>

          <div className={styles.pills}>
            <StatusPill tone="success" dot>
              Available today
            </StatusPill>
            <StatusPill tone="lavender">
              from {PRICING.currency}
              {PRICING.consultationFrom}
            </StatusPill>
            <StatusPill tone="navy">~{PRICING.averageWaitMinutes} min</StatusPill>
          </div>

          <div className={styles.trust}>
            <TrustBadge icon="shield">GDPR compliant</TrustBadge>
            <TrustBadge icon="lock">Encrypted video</TrustBadge>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.ring} />
          <div className={styles.doctor}>
            <DoctorCard {...doctor} />
          </div>
          <div className={styles.toast}>
            <Toast type="success" title="Prescription sent" description="Farmacia Centrale, Milan" />
          </div>
        </div>
      </div>
    </section>
  );
}
