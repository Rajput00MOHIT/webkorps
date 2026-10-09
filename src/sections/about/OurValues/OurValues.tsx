'use client';

import React, { useEffect, useRef, useState } from 'react';
import customerCentricImg from '../../../assets/about/customer_centric.png';
import innovationExcellenceImg from '../../../assets/about/innovation_exelence.png';
import integrityImg from '../../../assets/about/integrity.png';
import collaborationImg from '../../../assets/about/collebration.png';
import learningGrowthImg from '../../../assets/about/learning_groawth.png';
import commitmentImg from '../../../assets/about/commitment.png';
import { getImgSrc } from '../../../utils/image';
import './OurValues.css';

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  image: any;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

const VALUES_DATA: ValueItem[] = [
  {
    id: 'customer-centric',
    title: 'Customer-Centric Approach',
    description:
      'We listen closely to client needs and understand their business challenges. Our solutions are tailored to create real value and long-term growth.',
    image: customerCentricImg,
    imageAlt: 'Customer-Centric Approach circular technology illustration',
    imagePosition: 'right',
  },
  {
    id: 'innovation-excellence',
    title: 'Innovation & Excellence',
    description:
      'We use modern technologies and smart practices to build better solutions. Our focus is on creating scalable, future-ready digital products.',
    image: innovationExcellenceImg,
    imageAlt: 'Innovation and Excellence layered geometric illustration',
    imagePosition: 'left',
  },
  {
    id: 'integrity-transparency',
    title: 'Integrity & Transparency',
    description:
      'We believe in honest communication and clear processes. This helps us build trust, accountability, and lasting partnerships.',
    image: integrityImg,
    imageAlt: 'Integrity and Transparency symmetrical diamond illustration',
    imagePosition: 'right',
  },
  {
    id: 'collaboration-teamwork',
    title: 'Collaboration & Teamwork',
    description:
      'We work together with clients, teams, and partners at every step. Strong teamwork helps us solve problems faster and deliver better results.',
    image: collaborationImg,
    imageAlt: 'Collaboration and Teamwork interconnected circular forms illustration',
    imagePosition: 'left',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning & Growth',
    description:
      'We keep learning, improving, and adapting to new technologies. This helps us stay ahead in a fast-changing digital world.',
    image: learningGrowthImg,
    imageAlt: 'Continuous Learning and Growth ascending steps with upward arrow illustration',
    imagePosition: 'right',
  },
  {
    id: 'commitment-quality',
    title: 'Commitment to Quality',
    description:
      'We follow strong standards to deliver reliable and efficient solutions. Our goal is to create work that performs well and exceeds expectations.',
    image: commitmentImg,
    imageAlt: 'Commitment to Quality precise architectural blocks illustration',
    imagePosition: 'left',
  },
];

export const OurValues: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleRows, setVisibleRows] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const rowElements = el.querySelectorAll<HTMLElement>('.wk-our-values__row');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-value-id');
            if (id) {
              setVisibleRows((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    rowElements.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="wk-our-values" aria-labelledby="our-values-heading">
      <div className="site-container wk-our-values__container">
        {/* Section Header */}
        <div className="wk-our-values__header">
          <h2 id="our-values-heading" className="wk-our-values__title">
            Our <span className="wk-our-values__title-brand">Values</span>, Our{' '}
            <span className="wk-our-values__title-brand">Foundation</span>
          </h2>
          <p className="wk-our-values__subtitle">
            The values that drive our culture, decisions, and commitment to excellence.
          </p>
        </div>

        {/* Alternating Value Rows */}
        <div className="wk-our-values__list">
          {VALUES_DATA.map((item, index) => {
            const isRowVisible = !!visibleRows[item.id];
            const isImageRight = item.imagePosition === 'right';

            return (
              <article
                key={item.id}
                data-value-id={item.id}
                className={`wk-our-values__row ${
                  isImageRight ? 'wk-our-values__row--image-right' : 'wk-our-values__row--image-left'
                } ${isRowVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {/* Text Block */}
                <div className="wk-our-values__text-col">
                  <h3 className="wk-our-values__value-title">{item.title}</h3>
                  <p className="wk-our-values__value-desc">{item.description}</p>
                </div>

                {/* Illustration Block */}
                <div className="wk-our-values__image-col">
                  <div className="wk-our-values__image-wrapper">
                    <img
                      src={getImgSrc(item.image)}
                      alt={item.imageAlt}
                      className="wk-our-values__image"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
