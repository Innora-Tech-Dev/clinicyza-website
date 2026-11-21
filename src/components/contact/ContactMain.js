import Hero from "./hero/Hero";
import ContactForm from "./contact-form/ContactForm";
import ContactInfo from "./contact-info/ContactInfo";
import styles from "./contact.module.css";

/** Contact page — hero, then form + contact details side by side. */
export default function ContactMain() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className={`container ${styles.grid}`}>
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
