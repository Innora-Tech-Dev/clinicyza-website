import Hero from "./hero/Hero";
import Benefits from "./benefits/Benefits";
import RegistrationForm from "./registration-form/RegistrationForm";
import styles from "./doctorRegisteration.module.css";

/** Doctor registration page — hero, then application form + benefits. */
export default function DoctorRegisterationMain() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className={`container ${styles.grid}`}>
          <RegistrationForm />
          <Benefits />
        </div>
      </section>
    </>
  );
}
