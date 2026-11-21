import Link from "next/link";
import { Loader2 } from "lucide-react";
import Icon from "@/ui-components/icons/Icon";
import styles from "./button.module.css";

/**
 * Base button — every state file (Default / Hover / Disabled / Loading) renders this.
 *
 * @param {"primary"|"secondary"|"ghost"|"soft"} variant
 * @param {"sm"|"md"|"lg"} size      sm = 40px · md = 48px · lg = 56px
 * @param {string}  href             renders a Next.js <Link> instead of <button>
 * @param {string}  icon             icon name from ui-components/icons (shown after label)
 * @param {string}  iconLeft         icon name shown before the label
 * @param {boolean} loading
 * @param {boolean} disabled
 * @param {boolean} block            full width
 * @param {"hover"} forceState       render a state statically (used by Hover.js)
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconLeft,
  loading = false,
  loadingText,
  disabled = false,
  block = false,
  forceState,
  type = "button",
  className = "",
  ...rest
}) {
  const isDisabled = disabled || loading;
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    block && styles.block,
    loading && styles.loading,
    forceState === "hover" && styles.isHover,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconSize = size === "sm" ? 16 : 18;
  const content = loading ? (
    <>
      <Loader2 size={iconSize} strokeWidth={2} className={styles.spinner} aria-hidden="true" />
      <span>{loadingText ?? children}</span>
    </>
  ) : (
    <>
      {iconLeft && <Icon name={iconLeft} size={iconSize} strokeWidth={2} />}
      <span>{children}</span>
      {icon && <Icon name={icon} size={iconSize} strokeWidth={2} />}
    </>
  );

  if (href && !isDisabled) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...rest}
    >
      {content}
    </button>
  );
}
