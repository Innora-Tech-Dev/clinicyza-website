import styles from "./badges.module.css";

/** Eyebrow label — 12px · uppercase · 0.14em · navy-600 (e.g. "ONLINE DOCTORS · ACROSS EUROPE"). */
export default function Eyebrow({ children, pill = true, className = "" }) {
  return (
    <span className={`${styles.eyebrow} ${pill ? styles.eyebrowPill : ""} ${className}`}>
      {pill && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
