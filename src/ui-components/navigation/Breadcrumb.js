import Link from "next/link";
import { Breadcrumb as AntBreadcrumb } from "antd";

/** Breadcrumb — items = [{ label, href? }]; last item is the current page. */
export default function Breadcrumb({ items = [], className }) {
  return (
    <AntBreadcrumb
      className={className}
      separator="›"
      items={items.map((item, index) => ({
        key: item.href || item.label,
        title:
          item.href && index < items.length - 1 ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <strong>{item.label}</strong>
          ),
      }))}
    />
  );
}
