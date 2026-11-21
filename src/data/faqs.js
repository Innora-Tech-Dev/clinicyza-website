import { PRICING } from "@/constants/constants";

export const FAQS = [
  { key: "rx", question: "Can I get a prescription online?", answer: "Yes. If clinically appropriate, your doctor issues an e-prescription that is sent to the pharmacy you choose." },
  { key: "countries", question: "Which countries do you cover?", answer: "Italy, Spain, France, Germany, Portugal and three more EU countries." },
  { key: "price", question: "How much does a consultation cost?", answer: `Consultations start from ${PRICING.currency}${PRICING.consultationFrom}. You see the full price before you book — no hidden fees.` },
  { key: "data", question: "Is my health data safe?", answer: "Your data is encrypted and stored on EU servers only. We are fully GDPR compliant and never use health data for advertising." },
];
