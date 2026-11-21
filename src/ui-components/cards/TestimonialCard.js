import { Star } from "lucide-react";
import StatusPill from "@/ui-components/badges/StatusPill";
import Avatar from "./Avatar";
import styles from "./cards.module.css";

/** Testimonial — stars, Verified pill, quote, author. */
export default function TestimonialCard({ rating = 5, verified = true, quote, name, meta }) {
  return (
    <article className={`${styles.card} ${styles.padded}`}>
      <div className={styles.metaRow}>
        <span className={styles.stars} aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={16} strokeWidth={0} fill={i < rating ? "#E8A33D" : "#E9E4F5"} />
          ))}
        </span>
        {verified && <StatusPill tone="success">✓ Verified</StatusPill>}
      </div>
      <blockquote className={styles.quote}>“{quote}”</blockquote>
      <div className={styles.author}>
        <Avatar name={name} />
        <div>
          <p className={styles.authorName}>{name}</p>
          {meta && <p className={styles.meta}>{meta}</p>}
        </div>
      </div>
    </article>
  );
}
