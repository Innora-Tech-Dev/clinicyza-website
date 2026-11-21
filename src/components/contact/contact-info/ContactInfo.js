import { CONTACT } from "@/constants/constants";
import IconTile from "@/ui-components/icons/IconTile";
import styles from "./contactInfo.module.css";

const ITEMS = [
  { icon: "mail", title: "Email", value: CONTACT.supportEmail, href: `mailto:${CONTACT.supportEmail}` },
  { icon: "phone", title: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: "message", title: "WhatsApp", value: CONTACT.whatsapp, href: CONTACT.whatsappHref, external: true },
  { icon: "pin", title: "Office", value: CONTACT.address },
];

export default function ContactInfo() {
  return (
    <aside className={styles.wrapper}>
      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <li key={item.title} className={styles.item}>
            <IconTile name={item.icon} tone="white" />
            <div>
              <p className={styles.title}>{item.title}</p>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.value}
                </a>
              ) : (
                <p className={styles.value}>{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.hours}>{CONTACT.hours}</p>
    </aside>
  );
}
