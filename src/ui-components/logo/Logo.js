import Link from "next/link";
import { MessageCircleHeart } from "lucide-react";
import { ROUTES, SITE } from "@/constants/constants";
import styles from "./logo.module.css";

/**
 * Brand logo — mark + wordmark.
 * @param {"navy"|"white"} variant  navy on light · white on navy
 */
export default function Logo({ variant = "navy", href = ROUTES.home, className = "" }) {
  return (
    <Link href={href} className={`${styles.logo} ${styles[variant]} ${className}`} aria-label={`${SITE.name} home`}>
      <span className={styles.mark}>
        <MessageCircleHeart size={20} strokeWidth={1.9} />
      </span>
      <span className={styles.word}>{SITE.name}</span>
    </Link>
  );
}
