import { SITE } from "@/constants/constants";
import { STATS } from "@/data/stats";
import CardMedia from "@/ui-components/cards/CardMedia";
import Stat from "@/ui-components/stats/Stat";
import SectionHeading, { Accent } from "@/ui-components/typography/SectionHeading";
import styles from "./mission.module.css";

export default function Mission() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.media}>
          <CardMedia height={420} caption="Photo · doctor on a video call" />
        </div>
        <div className={styles.content}>
          <SectionHeading
            eyebrow="Our mission"
            title={
              <>
                Good care shouldn&apos;t <Accent>wait</Accent>.
              </>
            }
          />
          <p className="text-body-lg">
            Falling ill abroad or simply not getting an appointment shouldn&apos;t mean days of
            worry. {SITE.name} gives you a licensed doctor on video in minutes, with prescriptions
            and certificates handled for you.
          </p>
          <div className={styles.stats}>
            {STATS.slice(0, 2).map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
