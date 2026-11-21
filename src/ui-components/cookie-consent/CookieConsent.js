"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Switch } from "antd";
import { ROUTES, SITE, STORAGE_KEYS } from "@/constants/constants";
import Button from "@/ui-components/buttons/Button";
import IconTile from "@/ui-components/icons/IconTile";
import styles from "./cookieConsent.module.css";

const CHANGE_EVENT = "cookie-consent-change";

const CATEGORIES = [
  { key: "essential", title: "Essential", description: "Login, booking and security. Always on.", locked: true },
  { key: "care", title: "Care communications", description: "Appointment reminders and follow-up messages." },
  { key: "analytics", title: "Analytics", description: "Anonymous usage to improve the site." },
];

// --- tiny localStorage store (no setState-in-effect, SSR-safe) ---
const subscribe = (callback) => {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
};
const getSnapshot = () => window.localStorage.getItem(STORAGE_KEYS.cookieConsent);
const getServerSnapshot = () => "server"; // hidden during SSR

/** Read the saved consent anywhere: getCookieConsent()?.analytics */
export function getCookieConsent() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEYS.cookieConsent));
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [prefs, setPrefs] = useState({ care: false, analytics: false });

  if (stored !== null) return null;

  const save = (choice) => {
    const value = { essential: true, ...choice, savedAt: new Date().toISOString() };
    window.localStorage.setItem(STORAGE_KEYS.cookieConsent, JSON.stringify(value));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <div className={styles.wrapper} role="dialog" aria-labelledby="cookie-title" aria-live="polite">
      <div className={styles.card}>
        <div className={styles.header}>
          <IconTile name="shield" />
          <div>
            <h2 id="cookie-title" className={styles.title}>
              Your privacy, your choice
            </h2>
            <p className={styles.text}>
              We use essential cookies to run {SITE.name} safely. With your permission we also use
              cookies to send care reminders and understand how the site is used. Health data is
              never used for advertising.
            </p>
          </div>
        </div>

        <ul className={styles.list}>
          {CATEGORIES.map((cat) => (
            <li key={cat.key} className={styles.row}>
              <div>
                <p className={styles.rowTitle}>{cat.title}</p>
                <p className={styles.rowText}>{cat.description}</p>
              </div>
              <Switch
                aria-label={cat.title}
                checked={cat.locked ? true : prefs[cat.key]}
                disabled={cat.locked}
                onChange={(checked) => setPrefs((p) => ({ ...p, [cat.key]: checked }))}
              />
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button onClick={() => save({ care: true, analytics: true })}>Accept all</Button>
          <Button variant="secondary" onClick={() => save(prefs)}>
            Save preferences
          </Button>
          <Button variant="ghost" onClick={() => save({ care: false, analytics: false })}>
            Reject non-essential
          </Button>
        </div>

        <Link href={ROUTES.cookies} className={styles.policy}>
          Read our cookie policy
        </Link>
      </div>
    </div>
  );
}
