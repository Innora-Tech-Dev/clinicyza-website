import styles from "./cards.module.css";

const initials = (name = "") =>
  name
    .replace(/^Dr\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

/** Initials avatar on lavender (e.g. "MB"). */
export default function Avatar({ name, size = "md" }) {
  return (
    <span className={`${styles.avatar} ${styles[`avatar_${size}`]}`} aria-hidden="true">
      {initials(name)}
    </span>
  );
}
