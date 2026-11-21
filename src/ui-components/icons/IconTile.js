import Icon from "./Icon";
import styles from "./icons.module.css";

/** Navy icon on a round lavender tile — as shown in the design's icon set. */
export default function IconTile({ name, size = "md", tone = "lavender", className = "" }) {
  const iconSize = size === "sm" ? 18 : size === "lg" ? 28 : 22;
  return (
    <span className={`${styles.tile} ${styles[size]} ${styles[tone]} ${className}`}>
      <Icon name={name} size={iconSize} />
    </span>
  );
}
