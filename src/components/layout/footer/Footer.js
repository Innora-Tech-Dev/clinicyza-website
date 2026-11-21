import Link from "next/link";
import { CONTACT, FOOTER_LINKS, SITE, SOCIAL_LINKS } from "@/constants/constants";
import Logo from "@/ui-components/logo/Logo";
import Icon from "@/ui-components/icons/Icon";
import BrandIcon from "@/ui-components/icons/BrandIcon";
import TrustBadge from "@/ui-components/badges/TrustBadge";
import styles from "./footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo variant="white" />
          <p className={styles.tagline}>“{SITE.tagline}”</p>
          <ul className={styles.contact}>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${CONTACT.supportEmail}`}>{CONTACT.supportEmail}</a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </li>
            <li>
              <BrandIcon name="whatsapp" size={18} />
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp {CONTACT.whatsapp}
              </a>
            </li>
          </ul>
          <div className={styles.badges}>
            <TrustBadge icon="shield">GDPR compliant</TrustBadge>
            <TrustBadge icon="lock">Encrypted video</TrustBadge>
          </div>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.title} className={styles.column}>
            <p className={styles.columnTitle}>{group.title}</p>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {SITE.legalName} All rights reserved.
        </p>
        <ul className={styles.social}>
          {SOCIAL_LINKS.map((social) => (
            <li key={social.key}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <BrandIcon name={social.key} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
