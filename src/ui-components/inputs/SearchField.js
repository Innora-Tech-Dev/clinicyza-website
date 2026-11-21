import { Input } from "antd";
import Icon from "@/ui-components/icons/Icon";
import Field from "./Field";
import styles from "./inputs.module.css";

/** Search input with leading search icon. */
export default function SearchField({
  label,
  id,
  fieldClassName,
  placeholder = "Search services or symptoms",
  ...inputProps
}) {
  return (
    <Field label={label} htmlFor={id} className={fieldClassName}>
      <Input
        id={id}
        type="search"
        allowClear
        placeholder={placeholder}
        prefix={<Icon name="search" size={18} className={styles.prefixIcon} />}
        {...inputProps}
      />
    </Field>
  );
}
