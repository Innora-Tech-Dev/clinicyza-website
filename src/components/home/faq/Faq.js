import { CONTACT } from "@/constants/constants";
import { FAQS } from "@/data/faqs";
import Accordion from "@/ui-components/feedback/Accordion";
import SectionHeading from "@/ui-components/typography/SectionHeading";
import styles from "./faq.module.css";

export default function Faq() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            subtitle="Can't find what you need? Our care team is here to help."
          />
          <a href={`mailto:${CONTACT.supportEmail}`} className={styles.mail}>
            {CONTACT.supportEmail}
          </a>
        </div>
        <Accordion items={FAQS} />
      </div>
    </section>
  );
}
