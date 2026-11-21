import { DOCTORS } from "@/data/doctors";
import DoctorCard from "@/ui-components/cards/DoctorCard";
import SectionHeading, { Accent } from "@/ui-components/typography/SectionHeading";
import styles from "./doctors.module.css";

export default function Doctors() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our doctors"
          title={
            <>
              Real doctors, <Accent>your</Accent> language.
            </>
          }
          subtitle="Every doctor is EU-licensed, background-checked and speaks at least two languages."
        />
        <div className={styles.grid}>
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
