import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import CookieConsent from "@/ui-components/cookie-consent/CookieConsent";

/** Shared layout for every public website page: Navbar + page + Footer + cookie banner. */
export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );
}
