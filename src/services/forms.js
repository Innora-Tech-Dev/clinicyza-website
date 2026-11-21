// import { apiPost } from "@/lib/api";

/**
 * Form submissions.
 * TODO: the backend endpoints don't exist yet in clinicyza-server.
 * When they do, replace the simulated calls with the apiPost lines.
 */
const simulate = (payload) =>
  new Promise((resolve) => setTimeout(() => resolve({ ok: true, payload }), 900));

export const submitContactForm = (values) => simulate(values); // apiPost("/contact", values)
export const submitAppointment = (values) => simulate(values); // apiPost("/appointments", values)
export const submitDoctorRegistration = (values) => simulate(values); // apiPost("/doctors/register", values)
