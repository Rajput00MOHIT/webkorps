export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  isApproved: boolean;
}

/**
 * Approved FAQ Questions & Answers
 */
export const FAQ_DATA: FAQItemData[] = [
  {
    id: 'founded',
    question: 'When was Webkorps founded?',
    answer:
      'Webkorps was founded in 2016 to help businesses solve challenges through technology. Since then, the company has expanded its expertise across software development, AI, and digital transformation.',
    isApproved: true,
  },
  {
    id: 'locations',
    question: "Where are Webkorps' offices located?",
    answer:
      "Webkorps lists offices in Indore, Pune, and Bengaluru, India, as well as Frisco, Texas, and Sheridan, Wyoming, USA.",
    isApproved: true,
  },
  {
    id: 'mission',
    question: "What is Webkorps' mission?",
    answer:
      'Our mission is to empower businesses with innovative, scalable, and reliable technology solutions that improve efficiency, support innovation, and enable sustainable growth.',
    isApproved: true,
  },
  {
    id: 'team-size',
    question: 'How large is the Webkorps team?',
    answer:
      "Webkorps' existing website reports a team of more than 250 technology professionals. Confirm the latest headcount before publishing this answer.",
    isApproved: true,
  },
  {
    id: 'services',
    question: 'What services does Webkorps provide?',
    answer:
      'Webkorps offers a comprehensive range of IT services including Mobile App Development, Web Development, Custom Software Development, Cloud Solutions, AI & ML Services, Blockchain Development, and IT Staff Augmentation.',
    isApproved: true,
  },
  {
    id: 'industries',
    question: 'What industries do you serve?',
    answer:
      'We serve a wide array of industries including Healthcare, Fintech, Logistics, Real Estate, Retail, E-commerce, Agriculture, and Entertainment, providing sector-specific expertise for every project.',
    isApproved: true,
  },
  {
    id: 'why-choose',
    question: 'Why should I choose Webkorps as my IT partner?',
    answer:
      'Webkorps combines technical excellence with a client-centric approach. With 10+ years of experience, a global presence, and a team of 250+ experts, we ensure high-quality delivery, transparency, and innovative solutions tailored to your success.',
    isApproved: true,
  },
  {
    id: 'nda',
    question: 'Do you enter into a Non-Disclosure Agreement (NDA) to protect client ideas?',
    answer:
      'Absolutely! As a top-tier IT services and solutions company, we prioritize confidentiality. We ensure that all client ideas and sensitive information are safeguarded by signing Non-Disclosure Agreements (NDAs) before initiating any work.',
    isApproved: true,
  },
];
