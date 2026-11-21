import AppointmentMain from "@/components/appointment/AppointmentMain";

/** Appointment page view — rendered by app/(website)/appointment/page.js */
export default function Appointment({ initialService }) {
  return <AppointmentMain initialService={initialService} />;
}
