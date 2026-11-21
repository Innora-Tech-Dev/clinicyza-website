import Breadcrumb from "@/ui-components/navigation/Breadcrumb";
import Eyebrow from "@/ui-components/badges/Eyebrow";
import { ROUTES } from "@/constants/constants";
import styles from "./pageHero.module.css";

/**
 * Shared hero for inner pages: breadcrumb, eyebrow, title, subtitle, optional actions.
 * Each page's own hero/Hero.js passes its content here.
 */
export default function PageHero({ eyebrow, title, subtitle, current, children }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {current && (
          <Breadcrumb items={[{ label: "Home", href: ROUTES.home }, { label: current }]} />
        )}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className="text-body-lg">{subtitle}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </section>
  );
}
