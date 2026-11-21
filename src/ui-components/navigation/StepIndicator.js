import { Check } from "lucide-react";
import styles from "./navigation.module.css";

/**
 * Step indicator — numbered circles joined by a line.
 * @param {string[]} steps   step labels
 * @param {number}   current zero-based index of the active step
 */
export default function StepIndicator({ steps = [], current = 0, className = "" }) {
  return (
    <ol className={`${styles.steps} ${className}`}>
      {steps.map((label, index) => {
        const state = index < current ? "done" : index === current ? "active" : "todo";
        return (
          <li key={label} className={`${styles.step} ${styles[state]}`} aria-current={state === "active" ? "step" : undefined}>
            <span className={styles.circle}>
              {state === "done" ? <Check size={16} strokeWidth={2.5} /> : index + 1}
            </span>
            <span className={styles.stepLabel}>{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
