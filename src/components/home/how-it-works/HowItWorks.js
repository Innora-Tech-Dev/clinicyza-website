import IconTile from "@/ui-components/icons/IconTile";
import SectionHeading, { Accent } from "@/ui-components/typography/SectionHeading";
import styles from "./howItWorks.module.css";

const STEPS = [
  { icon: "message", title: "Tell us what's wrong", text: "Pick a service and answer a few short questions — it takes two minutes." },
  { icon: "video", title: "See a doctor by video", text: "An EU-licensed doctor calls you, usually within 15 minutes, in your language." },
  { icon: "pill", title: "Get your treatment", text: "Prescriptions go straight to your pharmacy; certificates arrive by email." },
];

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Healthcare that <Accent>travels</Accent> with you.
            </>
          }
          subtitle="No waiting rooms, no phone queues. Three simple steps from symptom to treatment."
        />
        <ol className={styles.steps}>
          {STEPS.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <div className={styles.top}>
                <IconTile name={step.icon} size="lg" />
                <span className={styles.number}>0{index + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p className="text-body">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
