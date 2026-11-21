import { CircleAlert, CircleCheck } from "lucide-react";
import styles from "./inputs.module.css";

/**
 * Wrapper for every input: visible label (spec: "visible labels always"),
 * the control, and an optional helper / error / success message.
 *
 * @param {"error"|"success"} status
 * @param {"focus"} forceState   static focus look (used by Focus.js)
 */
export default function Field({
  label,
  htmlFor,
  message,
  status,
  forceState,
  required = false,
  className = "",
  children,
}) {
  const classes = [
    styles.field,
    status && styles[status],
    forceState === "focus" && styles.isFocus,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {label && (
        <label className={styles.label} htmlFor={htmlFor}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}
      {children}
      {message && (
        <p className={styles.message} role={status === "error" ? "alert" : undefined}>
          {status === "error" && <CircleAlert size={14} strokeWidth={2} aria-hidden="true" />}
          {status === "success" && <CircleCheck size={14} strokeWidth={2} aria-hidden="true" />}
          {message}
        </p>
      )}
    </div>
  );
}
