import { PRICING, ROUTES } from "@/constants/constants";
import Button from "@/ui-components/buttons/Button";
import { Accent } from "@/ui-components/typography/SectionHeading";
import styles from "./ctaBanner.module.css";

/** Navy call-to-action banner used at the bottom of most pages. */
export default function CtaBanner({
  title = (
    <>
      Feeling unwell? See a doctor <Accent>today</Accent>.
    </>
  ),
  subtitle = `Video consultations from ${PRICING.currency}${PRICING.consultationFrom}. Average wait under ${PRICING.averageWaitMinutes} minutes.`,
}) {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.text}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <div className={styles.actions}>
            <Button size="lg" variant="soft" href={ROUTES.appointment} icon="arrow">
              Book consultation
            </Button>
            <Button size="lg" variant="ghost" href={ROUTES.services} className={styles.ghostOnNavy}>
              View services & pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
