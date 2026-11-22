import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import AntdProvider from "@/providers/AntdProvider";
import { SITE } from "@/constants/constants";
import "./globals.css";

// Headings — Space Grotesk 600 (spec §2)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

// Body & UI — Inter 400/500/600
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Editorial accent — Instrument Serif Italic
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: SITE.locale,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang={SITE.locale}
      className={`${spaceGrotesk.variable} ${inter.variable} ${instrument.variable}`}
    >
      <body>
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
