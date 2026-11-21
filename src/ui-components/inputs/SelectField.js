import { Select } from "antd";
import Field from "./Field";

/** Dropdown (e.g. Country). `options` = [{ value, label }]. */
export default function SelectField({ label, id, message, status, required, fieldClassName, ...selectProps }) {
  return (
    <Field label={label} htmlFor={id} message={message} status={status} required={required} className={fieldClassName}>
      <Select id={id} status={status === "error" ? "error" : undefined} style={{ width: "100%" }} {...selectProps} />
    </Field>
  );
}
