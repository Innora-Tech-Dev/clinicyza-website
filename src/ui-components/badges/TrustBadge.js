import Icon from "@/ui-components/icons/Icon";
import styles from "./badges.module.css";

/** Trust badge — white pill with icon (e.g. "GDPR compliant", "Encrypted video"). */
export default function TrustBadge({ icon = "shield", children, className = "" }) {
  return (
    <span className={`${styles.trust} ${className}`}>
      <Icon name={icon} size={16} />
      {children}
    </span>
  );
}
