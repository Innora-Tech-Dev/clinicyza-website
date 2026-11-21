import { Input } from "antd";
import Field from "./Field";
import styles from "./inputs.module.css";

/** Multi-line text (e.g. Reason for visit) with "46 / 500" counter. */
export default function TextAreaField({
  label,
  id,
  message,
  status,
  required,
  fieldClassName,
  maxLength = 500,
  rows = 4,
  ...textAreaProps
}) {
  return (
    <Field label={label} htmlFor={id} message={message} status={status} required={required} className={`${styles.textarea} ${fieldClassName ?? ""}`}>
      <Input.TextArea
        id={id}
        rows={rows}
        maxLength={maxLength}
        showCount
        status={status === "error" ? "error" : undefined}
        style={{ resize: "vertical" }}
        {...textAreaProps}
      />
    </Field>
  );
}
