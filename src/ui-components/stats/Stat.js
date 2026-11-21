import styles from "./stat.module.css";

/** Big stat — e.g. value "12,000+" label "patients served"; suffix "/5" or "min" in muted. */
export default function Stat({ value, suffix, label, inverse = false, className = "" }) {
  return (
    <div className={`${styles.stat} ${inverse ? styles.inverse : ""} ${className}`}>
      <p className={styles.value}>
        {value}
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </p>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
