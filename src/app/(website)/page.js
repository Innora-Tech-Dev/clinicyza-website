import Home from "@/pages-files/Home";
import { SITE } from "@/constants/constants";

// "/" shows the same page as "/home"
export const metadata = {
  title: { absolute: `${SITE.name} — ${SITE.tagline}` },
  alternates: { canonical: "/" },
};

export default function RootPage() {
  return <Home />;
}
