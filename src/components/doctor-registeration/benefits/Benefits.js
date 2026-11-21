import IconTile from "@/ui-components/icons/IconTile";
import styles from "./benefits.module.css";

const BENEFITS = [
  { icon: "calendar", title: "Flexible hours", text: "Choose the shifts that fit your life — mornings, evenings or weekends." },
  { icon: "doc", title: "No paperwork", text: "E-prescriptions, certificates and notes are generated for you." },
  { icon: "card", title: "Paid weekly", text: "Transparent per-consultation fees, paid straight to your account." },
  { icon: "users", title: "Clinical community", text: "Peer support, case reviews and paid CPD sessions." },
];

export default function Benefits() {
  return (
    <aside className={styles.wrapper}>
      <h2 className={styles.title}>Why doctors join us</h2>
      <ul className={styles.list}>
        {BENEFITS.map((item) => (
          <li key={item.title} className={styles.item}>
            <IconTile name={item.icon} tone="white" />
            <div>
              <p className={styles.itemTitle}>{item.title}</p>
              <p className={styles.itemText}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
