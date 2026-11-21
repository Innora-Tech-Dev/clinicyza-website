import About from "@/pages-files/About";
import { SITE } from "@/constants/constants";

export const metadata = {
  title: "About us",
  description: `Why ${SITE.name} exists and what we stand for.`,
};

export default function AboutPage() {
  return <About />;
}
