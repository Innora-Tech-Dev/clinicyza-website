import { Star } from "lucide-react";
import StatusPill from "@/ui-components/badges/StatusPill";
import CardMedia from "./CardMedia";
import styles from "./cards.module.css";

/** Doctor card — availability, name, specialty · years, languages, rating. */
export default function DoctorCard({
  image,
  name,
  specialty,
  years,
  languages = [],
  rating,
  available = true,
}) {
  return (
    <article className={styles.card}>
      <CardMedia src={image} alt={name} height={200}>
        {available && (
          <StatusPill tone="success" dot className={styles.onMedia}>
            Available today
          </StatusPill>
        )}
      </CardMedia>
      <div className={styles.body}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.meta}>
          {specialty}
          {years ? ` · ${years} yrs` : ""}
        </p>
        <div className={styles.footer}>
          <span className={styles.meta}>{languages.join(" · ")}</span>
          {rating && (
            <span className={styles.rating}>
              <Star size={14} strokeWidth={0} fill="#E8A33D" /> {rating}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
