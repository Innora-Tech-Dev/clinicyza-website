import Eyebrow from "@/ui-components/badges/Eyebrow";

/**
 * Section header: eyebrow + title + subtitle.
 * Put ONE emphasised word in the title with <Accent> (spec: violet Instrument Serif).
 *
 *   <SectionHeading eyebrow="How it works" title={<>Care in <Accent>three</Accent> steps</>} />
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: Tag = "h2",
  align = "left",
  className = "",
}) {
  return (
    <div className={`section-head ${align === "center" ? "center" : ""} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag>{title}</Tag>
      {subtitle && <p className="text-body-lg">{subtitle}</p>}
    </div>
  );
}

/** The single emphasised word in a headline. */
export function Accent({ children }) {
  return <span className="accent">{children}</span>;
}
