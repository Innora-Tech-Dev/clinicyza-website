import Hero from "./hero/Hero";
import BookingForm from "./booking-form/BookingForm";

/** Appointment page — hero + multi-step booking form. */
export default function AppointmentMain({ initialService }) {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <BookingForm initialService={initialService} />
        </div>
      </section>
    </>
  );
}
