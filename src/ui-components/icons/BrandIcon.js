"use client";

import {
  FacebookFilled, InstagramOutlined, LinkedinFilled, WhatsAppOutlined, XOutlined,
} from "@ant-design/icons";

// Brand marks (lucide ships no brand logos). Client-only: @ant-design/icons uses React context.
const BRAND_ICONS = {
  whatsapp: WhatsAppOutlined,
  facebook: FacebookFilled,
  instagram: InstagramOutlined,
  linkedin: LinkedinFilled,
  x: XOutlined,
};

export default function BrandIcon({ name, size = 18, className, ...rest }) {
  const Brand = BRAND_ICONS[name];
  if (!Brand) return null;
  return <Brand className={className} style={{ fontSize: size }} aria-hidden="true" {...rest} />;
}
