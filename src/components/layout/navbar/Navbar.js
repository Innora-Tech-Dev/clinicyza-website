"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, ROUTES } from "@/constants/constants";
import Logo from "@/ui-components/logo/Logo";
import Button from "@/ui-components/buttons/Button";
import IconButton from "@/ui-components/buttons/IconButton";
import styles from "./navbar.module.css";

const isActive = (pathname, href) =>
  href === ROUTES.home ? pathname === "/" || pathname === "/home" : pathname.startsWith(href);

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Main">
        <Logo />

        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${isActive(pathname, link.href) ? styles.active : ""}`}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button variant="ghost" size="sm" href={ROUTES.login}>
            Log in
          </Button>
          <Button size="sm" href={ROUTES.appointment} icon="arrow">
            Book consultation
          </Button>
        </div>

        <IconButton
          className={styles.menuButton}
          icon={open ? "x" : "menu"}
          label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        />
      </nav>

      {open && (
        <div id="mobile-menu" className={styles.mobileMenu}>
          <ul className="container">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className={`${styles.mobileLink} ${isActive(pathname, link.href) ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={styles.mobileActions}>
              <Button variant="secondary" href={ROUTES.login} block onClick={close}>
                Log in
              </Button>
              <Button href={ROUTES.appointment} icon="arrow" block onClick={close}>
                Book consultation
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
