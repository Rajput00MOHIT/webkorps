import React from 'react';
import type { FAQItemData } from '../../sections/home/FAQ/faqData';

export const CONTACT_FAQ_DATA: FAQItemData[] = [
  {
    id: 'contact-inquiry',
    question: 'What is the best way to contact you for business inquiries?',
    answer: (
      <>
        For business inquiries, the best way is to fill out our Business Inquiry
        form on this page or email us directly at{' '}
        <a href="mailto:contact@webkorps.com" className="wk-faq-link">
          contact@webkorps.com
        </a>
        . Our team will review your requirements and get back to you promptly.
      </>
    ),
    isApproved: true,
  },
  {
    id: 'response-time',
    question: 'How soon can I expect a response after submitting a form?',
    answer:
      'Our team typically responds within 24 business hours. If your requirement is urgent, feel free to call our direct lines.',
    isApproved: true,
  },
  {
    id: 'consultations',
    question: 'Do you offer consultations for new projects?',
    answer:
      'Yes, we offer initial consultations to understand your project scope, evaluate technical architecture, and discuss delivery timelines.',
    isApproved: true,
  },
  {
    id: 'office-visit',
    question: 'Can I visit your office in person?',
    answer:
      'Yes! You are welcome to visit our offices in Indore, Pune, Bengaluru, Frisco (Texas), or Sheridan (Wyoming). Please schedule a visit in advance.',
    isApproved: true,
  },
  {
    id: 'support-maintenance',
    question: 'Do you provide support for existing software projects?',
    answer:
      'Yes, we provide ongoing maintenance, code audits, bug fixes, feature enhancements, and cloud infrastructure support for existing software systems.',
    isApproved: true,
  },
];
