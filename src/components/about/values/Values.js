import IconTile from "@/ui-components/icons/IconTile";
import SectionHeading, { Accent } from "@/ui-components/typography/SectionHeading";
import styles from "./values.module.css";

const VALUES = [
  { icon: "shield", title: "Safe by default", text: "EU-licensed doctors, encrypted video and GDPR-compliant data stored on EU servers only." },
  { icon: "clock", title: "Fast, not rushed", text: "Average wait under 15 minutes — with the time you need once you're with the doctor." },
  { icon: "globe", title: "In your language", text: "Doctors who speak Italian, Spanish, French, German, Portuguese and English." },
  { icon: "heart", title: "Human first", text: "Clear prices, no upselling, and health data never used for advertising." },
];

export default function Values() {
  return (
    <section className="section section-surface">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="What we stand for"
          title={
            <>
              Built on <Accent>trust</Accent>.
            </>
          }
        />
        <div className={styles.grid}>
          {VALUES.map((value) => (
            <article key={value.title} className={styles.card}>
              <IconTile name={value.icon} />
              <h3 className={styles.title}>{value.title}</h3>
              <p className="text-body">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
