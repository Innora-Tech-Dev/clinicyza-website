import Home from "@/pages-files/Home";
import { SITE } from "@/constants/constants";

export const metadata = {
  title: { absolute: `${SITE.name} — ${SITE.tagline}` },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <Home />;
}
