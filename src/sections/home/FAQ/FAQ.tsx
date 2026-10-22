'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../../../components/Container/Container';
import { FAQItem } from './FAQItem';
import { FAQCTA, FAQCTAProps } from './FAQCTA';
import { FAQ_DATA, FAQItemData } from './faqData';
import './FAQ.css';

export interface FAQProps {
  id?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  items?: FAQItemData[];
  showCta?: boolean;
  ctaProps?: FAQCTAProps;
}

export const FAQ: React.FC<FAQProps> = ({
  id = 'faq',
  title = (
    <>
      Frequently Asked <span className="wk-faq__title-accent">Questions</span>
    </>
  ),
  subtitle,
  items = FAQ_DATA,
  showCta = true,
  ctaProps,
}) => {
  // First item open by default per Figma design
  const defaultOpenId = items.length > 0 ? items[0].id : null;
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (itemId: string) => {
    setOpenId((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`wk-faq ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby={`${id}-heading`}
    >
      <Container size="normal">
        <div className="wk-faq__wrapper">
          {/* Section Heading */}
          <div className="wk-faq__header">
            <h2 id={`${id}-heading`} className="wk-faq__title">
              {title}
            </h2>
            {subtitle && <p className="wk-faq__subtitle">{subtitle}</p>}
          </div>

          {/* FAQ Accordion List */}
          <div className="wk-faq__list" role="list">
            {items.map((item, index) => (
              <div
                key={item.id}
                role="listitem"
                className="wk-faq-item-wrapper"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <FAQItem
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              </div>
            ))}
          </div>

          {/* CTA Card */}
          {showCta && <FAQCTA {...ctaProps} />}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
