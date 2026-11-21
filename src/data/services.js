// Sample service catalogue — replace with API data from clinicyza-server later.
export const SERVICE_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "general", label: "General" },
  { value: "womens", label: "Women's" },
  { value: "skin", label: "Skin" },
  { value: "travel", label: "Travel" },
];

export const SERVICES = [
  { id: "gp-video", category: "general", categoryLabel: "General", title: "Video GP consultation", description: "Talk to an EU-licensed GP about any everyday health concern.", price: 35, duration: "~15 min" },
  { id: "uti", category: "womens", categoryLabel: "Women's", title: "UTI treatment", description: "Assessment and antibiotics, prescribed same day if suitable.", price: 35, duration: "~15 min" },
  { id: "contraception", category: "womens", categoryLabel: "Women's", title: "Contraception review", description: "Start, switch or renew the pill with a doctor's review.", price: 39, duration: "~15 min" },
  { id: "acne", category: "skin", categoryLabel: "Skin", title: "Acne & skin check", description: "Share photos, get a diagnosis and a treatment plan.", price: 45, duration: "~20 min" },
  { id: "eczema", category: "skin", categoryLabel: "Skin", title: "Eczema & rashes", description: "Calm flare-ups with prescription creams when needed.", price: 39, duration: "~15 min" },
  { id: "sick-note", category: "general", categoryLabel: "General", title: "Sick note", description: "Medical certificate for work or school, emailed to you.", price: 29, duration: "~10 min" },
  { id: "travel-illness", category: "travel", categoryLabel: "Travel", title: "Ill while abroad", description: "Speak to a doctor in your language, wherever you are in the EU.", price: 35, duration: "~15 min" },
  { id: "repeat-rx", category: "general", categoryLabel: "General", title: "Repeat prescription", description: "Renew a regular medication, sent to your chosen pharmacy.", price: 25, duration: "~10 min" },
];
