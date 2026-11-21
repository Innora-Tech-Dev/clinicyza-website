import { Tooltip as AntTooltip } from "antd";

/** Navy tooltip (e.g. "Your data is stored on EU servers only."). */
export default function Tooltip({ title, children, placement = "top", ...props }) {
  return (
    <AntTooltip title={title} placement={placement} {...props}>
      {children}
    </AntTooltip>
  );
}
