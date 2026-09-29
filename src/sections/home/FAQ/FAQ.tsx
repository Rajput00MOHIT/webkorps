import React, { useState } from 'react';
import { Container } from '../../../components/Container/Container';
import { FAQItem } from './FAQItem';
import { FAQCTA } from './FAQCTA';
import { FAQ_DATA } from './faqData';
import './FAQ.css';

export const FAQ: React.FC = () => {
  // First item open by default per Figma design
  const [openId, setOpenId] = useState<string | null>('founded');

  const handleToggle = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="faq" className="wk-faq" aria-labelledby="faq-heading">
      <Container size="normal">
        <div className="wk-faq__wrapper">
          {/* Section Heading */}
          <div className="wk-faq__header">
            <h2 id="faq-heading" className="wk-faq__title">
              Frequently Asked <span className="wk-faq__title-accent">Questions</span>
            </h2>
          </div>

          {/* FAQ Accordion List */}
          <div className="wk-faq__list" role="list">
            {FAQ_DATA.map((item) => (
              <div key={item.id} role="listitem">
                <FAQItem
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <FAQCTA />
        </div>
      </Container>
    </section>
  );
};
