import { DatePicker } from "antd";
import Icon from "@/ui-components/icons/Icon";
import Field from "./Field";
import styles from "./inputs.module.css";

/** Date picker (e.g. Date of birth) — "DD / MM / YYYY" with calendar icon on the left. */
export default function DateField({
  label,
  id,
  message,
  status,
  required,
  fieldClassName,
  format = "DD / MM / YYYY",
  ...pickerProps
}) {
  return (
    <Field label={label} htmlFor={id} message={message} status={status} required={required} className={fieldClassName}>
      <DatePicker
        id={id}
        format={format}
        placeholder="DD / MM / YYYY"
        prefix={<Icon name="calendar" size={18} className={styles.prefixIcon} />}
        suffixIcon={null}
        status={status === "error" ? "error" : undefined}
        style={{ width: "100%" }}
        {...pickerProps}
      />
    </Field>
  );
}
