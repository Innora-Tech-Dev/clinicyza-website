import Icon from "@/ui-components/icons/Icon";
import styles from "./button.module.css";

/**
 * Round icon-only button (e.g. carousel ‹ ›).
 * @param {string} icon        icon name from ui-components/icons
 * @param {string} label       accessible label (required)
 * @param {"sm"|"md"|"lg"} size
 * @param {boolean} filled     navy filled version
 */
export default function IconButton({
  icon,
  label,
  size = "md",
  filled = false,
  forceState,
  type = "button",
  className = "",
  ...rest
}) {
  const classes = [
    styles.iconButton,
    styles[size],
    filled && styles.filled,
    forceState === "hover" && styles.isHover,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} aria-label={label} {...rest}>
      <Icon name={icon} size={size === "lg" ? 20 : 18} strokeWidth={2} />
    </button>
  );
}
