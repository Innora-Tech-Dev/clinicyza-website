import { Segmented } from "antd";

/** Pill tabs on a lavender track (e.g. All · General · Women's · Skin). */
export default function FilterTabs({ options = [], ...props }) {
  return <Segmented shape="round" options={options} {...props} />;
}
