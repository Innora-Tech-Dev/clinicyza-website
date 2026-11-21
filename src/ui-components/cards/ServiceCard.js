import { PRICING } from "@/constants/constants";
import Button from "@/ui-components/buttons/Button";
import StatusPill from "@/ui-components/badges/StatusPill";
import CardMedia from "./CardMedia";
import styles from "./cards.module.css";

/** Service card — category, duration, title, description, price, Details / Book now. */
export default function ServiceCard({
  image,
  imageAlt,
  category,
  duration,
  title,
  description,
  price,
  detailsHref,
  bookHref,
}) {
  return (
    <article className={styles.card}>
      <CardMedia src={image} alt={imageAlt} />
      <div className={styles.body}>
        <div className={styles.metaRow}>
          {category && <StatusPill tone="lavender">{category}</StatusPill>}
          {duration && <span className={styles.meta}>{duration}</span>}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>
            {PRICING.currency}
            {price}
          </span>
          <div className={styles.actions}>
            {detailsHref && (
              <Button variant="soft" size="sm" href={detailsHref}>
                Details
              </Button>
            )}
            {bookHref && (
              <Button size="sm" href={bookHref}>
                Book now
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
