import Link from "next/link";
import StatusPill from "@/ui-components/badges/StatusPill";
import Avatar from "./Avatar";
import CardMedia from "./CardMedia";
import styles from "./cards.module.css";

/** Article / blog card — category, title, author · read time. */
export default function ArticleCard({ image, category, title, author, readTime, href = "#" }) {
  return (
    <article className={styles.card}>
      <CardMedia src={image} alt={title} />
      <div className={styles.body}>
        {category && <StatusPill tone="lavender">{category}</StatusPill>}
        <h3 className={styles.title}>
          <Link href={href} className={styles.stretchedLink}>
            {title}
          </Link>
        </h3>
        <div className={styles.author}>
          <Avatar name={author} size="sm" />
          <p className={styles.meta}>
            {author}
            {readTime ? ` · ${readTime}` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}
