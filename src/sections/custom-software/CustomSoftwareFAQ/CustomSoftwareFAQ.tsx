'use client';

import React from 'react';
import { FAQ } from '../../home/FAQ/FAQ';
import { FAQItemData } from '../../home/FAQ/faqData';

export const CUSTOM_SOFTWARE_FAQ_ITEMS: FAQItemData[] = [
  {
    id: 'cs-technologies',
    question: 'Which technologies do you use for development?',
    answer:
      'We work with modern and scalable technologies like React, Node.js, Ruby on Rails, Python, .NET, Android, iOS, and cloud platforms depending on project requirements.',
    isApproved: true,
  },
  {
    id: 'cs-decision-tech',
    question: 'How do you decide which technology is right for a project?',
    answer:
      'We analyze project goals, scalability needs, team expertise, performance criteria, and budget to select the optimal tech stack.',
    isApproved: true,
  },
  {
    id: 'cs-legacy-tech',
    question: 'Can you work with legacy or outdated technologies?',
    answer:
      'Yes, we specialize in legacy modernization, refactoring legacy codebases, and migrating legacy architectures to modern cloud-native systems.',
    isApproved: true,
  },
  {
    id: 'cs-full-stack',
    question: 'Do you provide full-stack development services?',
    answer:
      'Yes, we provide end-to-end full-stack development spanning UI/UX design, frontend, backend APIs, databases, DevOps, and QA.',
    isApproved: true,
  },
  {
    id: 'cs-integrate-tech',
    question: 'Can you integrate new technology into an existing system?',
    answer:
      'Yes, we build robust API layers, microservices, and webhooks to seamlessly connect new features with your existing systems.',
    isApproved: true,
  },
];

export const CustomSoftwareFAQ: React.FC = () => {
  return (
    <FAQ
      id="custom-software-faq"
      title={
        <>
          Frequently Asked <span className="wk-faq__title-accent">Questions</span>
        </>
      }
      subtitle="Got questions? We've answered the most common ones to help you move forward with confidence."
      items={CUSTOM_SOFTWARE_FAQ_ITEMS}
      showCta={true}
      ctaProps={{
        title: 'Still have question?',
        desc: "Can't find what you're looking for? Our team is here to help you with clear answers and quick guidance.",
        buttonText: 'Book a Consultation',
        buttonHref: '/contact-us',
        buttonAriaLabel: 'Book a Consultation with Webkorps',
      }}
    />
  );
};

export default CustomSoftwareFAQ;

