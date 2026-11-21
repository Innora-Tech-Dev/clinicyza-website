import { Checkbox as AntCheckbox } from "antd";
import styles from "./inputs.module.css";

/** Checkbox with label (e.g. "I agree to the Terms of service"). */
export default function Checkbox({ children, className = "", ...props }) {
  return (
    <AntCheckbox className={`${styles.choice} ${className}`} {...props}>
      {children}
    </AntCheckbox>
  );
}
