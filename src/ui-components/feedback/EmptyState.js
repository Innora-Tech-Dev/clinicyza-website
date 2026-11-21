import Icon from "@/ui-components/icons/Icon";
import styles from "./feedback.module.css";

/** Empty state — e.g. No services match "migraine kids". */
export default function EmptyState({ icon = "search", title, description, action }) {
  return (
    <div className={styles.empty}>
      <span className={styles.emptyIcon}>
        <Icon name={icon} size={20} />
      </span>
      <p className={styles.emptyTitle}>{title}</p>
      {description && <p className={styles.emptyDescription}>{description}</p>}
      {action && <div className={styles.emptyAction}>{action}</div>}
    </div>
  );
}
