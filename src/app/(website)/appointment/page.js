import Appointment from "@/pages-files/Appointment";

export const metadata = {
  title: "Book consultation",
  description: "Book a same-day video consultation with an EU-licensed doctor.",
};

// /appointment?service=uti pre-selects a service
export default async function AppointmentPage({ searchParams }) {
  const { service } = await searchParams;
  return <Appointment initialService={typeof service === "string" ? service : undefined} />;
}
