import { STATS } from "@/data/stats";
import Stat from "@/ui-components/stats/Stat";
import styles from "./stats.module.css";

export default function Stats() {
  return (
    <section className={styles.section} aria-label="Key figures">
      <div className="container">
        <div className={styles.band}>
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
