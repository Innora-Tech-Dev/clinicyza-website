/**
 * App-wide constants: brand, contact details, social links, navigation, pricing.
 * Change values here — never hardcode them inside components.
 * Environment-specific values (URLs, keys) live in .env.local → src/config/env.js
 */

import { env } from "@/config/env";

/* ---------- Brand ---------- */
export const SITE = {
  name: "Clinicyza",
  legalName: "Clinicyza Health Ltd.",
  tagline: "Your doctor, wherever life takes you.",
  description:
    "Same-day video consultations with EU-licensed doctors. E-prescriptions go straight to your pharmacy; certificates arrive by email.",
  url: env.siteUrl,
  portalUrl: env.portalUrl,
  locale: "en",
  foundedYear: 2026,
};

/* ---------- Contact ---------- */
export const CONTACT = {
  supportEmail: "support@clinicyza.com",
  infoEmail: "hello@clinicyza.com",
  doctorsEmail: "doctors@clinicyza.com",
  privacyEmail: "privacy@clinicyza.com",
  phone: "+39 02 0000 0000",
  phoneHref: "tel:+390200000000",
  whatsapp: "+39 300 000 0000",
  whatsappHref: "https://wa.me/393000000000",
  address: "Via Example 1, 20121 Milan, Italy",
  hours: "Doctors available 7 days a week, 07:00 – 23:00 CET",
};

/* ---------- Social links ---------- */
export const SOCIAL_LINKS = [
  { key: "instagram", label: "Instagram", href: "https://instagram.com/clinicyza" },
  { key: "facebook", label: "Facebook", href: "https://facebook.com/clinicyza" },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/clinicyza" },
  { key: "x", label: "X", href: "https://x.com/clinicyza" },
];

/* ---------- Routes ---------- */
export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
  appointment: "/appointment",
  doctorRegistration: "/doctor-registeration",
  login: `${env.portalUrl}/patient/login`,
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
};

export const NAV_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "Services", href: ROUTES.services },
  { label: "About", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
  { label: "For doctors", href: ROUTES.doctorRegistration },
];

export const FOOTER_LINKS = [
  {
    title: "Care",
    links: [
      { label: "Services & pricing", href: ROUTES.services },
      { label: "Book consultation", href: ROUTES.appointment },
      { label: "Patient login", href: ROUTES.login },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: ROUTES.about },
      { label: "Contact", href: ROUTES.contact },
      { label: "Join as a doctor", href: ROUTES.doctorRegistration },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: ROUTES.privacy },
      { label: "Terms of service", href: ROUTES.terms },
      { label: "Cookie policy", href: ROUTES.cookies },
    ],
  },
];

/* ---------- Business ---------- */
export const PRICING = {
  currency: "€",
  consultationFrom: 35,
  averageWaitMinutes: 15,
};

export const COUNTRIES = [
  { value: "IT", label: "Italy", dialCode: "+39" },
  { value: "ES", label: "Spain", dialCode: "+34" },
  { value: "FR", label: "France", dialCode: "+33" },
  { value: "DE", label: "Germany", dialCode: "+49" },
  { value: "PT", label: "Portugal", dialCode: "+351" },
  { value: "NL", label: "Netherlands", dialCode: "+31" },
  { value: "BE", label: "Belgium", dialCode: "+32" },
  { value: "AT", label: "Austria", dialCode: "+43" },
];

/* Platform languages (spec §1). Used for consultation language, not site translation. */
export const LANGUAGES = ["EN", "IT", "FR", "ES", "DE"];

/* Shown across the product (spec §1) */
export const EMERGENCY = {
  number: "112",
  line: "Medical emergency? Call 112. Clinicyza is for non-urgent care.",
};

/* ---------- Storage keys ---------- */
export const STORAGE_KEYS = {
  cookieConsent: "clinicyza_cookie_consent",
};
