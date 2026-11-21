import { Switch } from "antd";
import styles from "./inputs.module.css";

/** Toggle switch with a visible text label. */
export default function Toggle({ label, id, className = "", ...switchProps }) {
  return (
    <label className={`${styles.choice} ${className}`} htmlFor={id}>
      <Switch id={id} {...switchProps} />
      {label && <span>{label}</span>}
    </label>
  );
}
