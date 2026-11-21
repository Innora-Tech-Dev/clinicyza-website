import { Input, Select, Space } from "antd";
import { COUNTRIES } from "@/constants/constants";
import Field from "./Field";
import styles from "./inputs.module.css";

const DIAL_OPTIONS = COUNTRIES.map((c) => ({
  value: c.dialCode,
  label: `${c.value} ${c.dialCode}`,
}));

/**
 * Mobile number: country dial-code select + number input.
 * Controlled via `dialCode` / `onDialCodeChange` and `value` / `onChange`.
 */
export default function PhoneField({
  label,
  id,
  message,
  status,
  required,
  fieldClassName,
  dialCode,
  defaultDialCode = COUNTRIES[0].dialCode,
  onDialCodeChange,
  ...inputProps
}) {
  return (
    <Field label={label} htmlFor={id} message={message} status={status} required={required} className={fieldClassName}>
      <Space.Compact className={styles.phone}>
        <Select
          aria-label="Country code"
          options={DIAL_OPTIONS}
          value={dialCode}
          defaultValue={dialCode ? undefined : defaultDialCode}
          onChange={onDialCodeChange}
          popupMatchSelectWidth={false}
        />
        <Input
          id={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          status={status === "error" ? "error" : undefined}
          {...inputProps}
        />
      </Space.Compact>
    </Field>
  );
}
