'use client';

import React from 'react';
import { FAQ } from '../../home/FAQ/FAQ';
import { FAQItemData } from '../../home/FAQ/faqData';

export const AI_FAQ_ITEMS: FAQItemData[] = [
  {
    id: 'ai-services-provide',
    question: 'What services do you actually provide?',
    answer:
      "We don't do everything for everyone. We focus on building and scaling digital products like web applications, mobile apps, backend systems, and UI/UX design. If your requirement is unclear or too broad, we first define scope before starting work.",
    isApproved: true,
  },
  {
    id: 'ai-project-cost',
    question: 'How do you decide project cost?',
    answer:
      'Project pricing is determined by technical scope, system architecture, data integrations, and team allocation (fixed-price milestone or dedicated agile pods).',
    isApproved: true,
  },
  {
    id: 'ai-project-duration',
    question: 'How long does a typical project take?',
    answer:
      'Initial MVP or discovery deliverables typically launch within 6–10 weeks, followed by iterative bi-weekly sprint releases.',
    isApproved: true,
  },
  {
    id: 'ai-post-delivery-support',
    question: 'Do you provide support after project delivery?',
    answer:
      'Yes, we provide ongoing SLA-backed maintenance, model performance monitoring, security patches, and cloud infrastructure support.',
    isApproved: true,
  },
  {
    id: 'ai-scope-changes',
    question: 'How do you handle changes during the project?',
    answer:
      'We follow an agile change-request methodology where scope adjustments are evaluated for timeline impact and approved collaboratively.',
    isApproved: true,
  },
];

export const AIFAQSection: React.FC = () => {
  return (
    <FAQ
      id="ai-faq"
      title={
        <>
          Frequently Asked <span className="wk-faq__title-accent">Questions</span>
        </>
      }
      subtitle="Got questions? We've answered the most common ones to help you move forward with confidence."
      items={AI_FAQ_ITEMS}
      showCta={true}
      ctaProps={{
        title: 'Still Have Questions?',
        desc: "Can't find what you're looking for? Our team is here to help you with clear answers and quick guidance.",
        buttonText: 'Book a Consultation',
        buttonHref: '/contact-us',
        buttonAriaLabel: 'Book a Consultation with Webkorps',
      }}
    />
  );
};

