import { Input } from "antd";
import Field from "./Field";

/**
 * Base text field — every state file (Default / Focus / Error / Success) renders this.
 * Extra props (value, onChange, placeholder, type, …) go to the antd <Input>,
 * so it also works as a child of antd <Form.Item>.
 */
export default function TextField({
  label,
  id,
  message,
  status,
  forceState,
  required,
  fieldClassName,
  ...inputProps
}) {
  return (
    <Field
      label={label}
      htmlFor={id}
      message={message}
      status={status}
      forceState={forceState}
      required={required}
      className={fieldClassName}
    >
      <Input id={id} status={status === "error" ? "error" : undefined} {...inputProps} />
    </Field>
  );
}
