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
      'Webkorps was founded with a vision to deliver excellence in IT services. We have been empowering businesses with innovative solutions for over 10 years.',
    isApproved: true,
  },
  {
    id: 'locations',
    question: "Where are Webkorps' offices located?",
    answer:
      'Webkorps operates globally with state-of-the-art development centers and offices in Indore, Pune, and international client delivery centers across the US and Middle East.',
    isApproved: true,
  },
  {
    id: 'mission',
    question: "What is Webkorps' mission?",
    answer:
      'Our mission is to accelerate digital transformation for forward-thinking enterprises by building secure, scalable, and intelligent software engineering solutions.',
    isApproved: true,
  },
  {
    id: 'team-size',
    question: 'How large is the Webkorps team?',
    answer:
      'Webkorps has a high-performing team of 250+ skilled engineers, UI/UX designers, data specialists, and solution architects driving client success worldwide.',
    isApproved: true,
  },
];
