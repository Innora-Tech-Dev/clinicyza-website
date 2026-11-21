import Image from "next/image";
import styles from "./cards.module.css";

/** Image area for cards. Falls back to a lavender wash when no image is provided. */
export default function CardMedia({ src, alt = "", caption, height = 180, children }) {
  return (
    <div className={styles.media} style={{ height }}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 400px" className={styles.mediaImg} />
      ) : (
        <div className={styles.mediaPlaceholder} aria-hidden="true">
          <span className={styles.blobA} />
          <span className={styles.blobB} />
        </div>
      )}
      {caption && <span className={styles.mediaCaption}>{caption}</span>}
      {children && <div className={styles.mediaOverlay}>{children}</div>}
    </div>
  );
}
