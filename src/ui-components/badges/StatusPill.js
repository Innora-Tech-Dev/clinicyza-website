import styles from "./badges.module.css";

/**
 * Status / info pill.
 * @param {"success"|"warning"|"emergency"|"lavender"|"navy"|"outline"} tone
 * @param {boolean} dot   show leading status dot (e.g. "● Available today")
 */
export default function StatusPill({ tone = "lavender", dot = false, children, className = "" }) {
  return (
    <span className={`${styles.pill} ${styles[tone]} ${className}`}>
      {dot && <span className={styles.statusDot} aria-hidden="true" />}
      {children}
    </span>
  );
}
