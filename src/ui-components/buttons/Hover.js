import Button from "./Button";

/**
 * Hover state rendered statically — use for "active/selected" CTAs
 * or style-guide previews. Normal buttons get hover automatically.
 */
export default function HoverButton(props) {
  return <Button {...props} forceState="hover" />;
}
