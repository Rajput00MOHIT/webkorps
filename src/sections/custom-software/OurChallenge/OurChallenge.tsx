'use client';

import React, { useRef, useState, useEffect } from 'react';
import disconnectedImg from '../../../assets/services/Our chelenge/Disconnected systems.png';
import scalingImg from '../../../assets/services/Our chelenge/Scaling Limitation.png';
import fragmentedImg from '../../../assets/services/Our chelenge/Fragmented data.png';
import missedImg from '../../../assets/services/Our chelenge/Missed opportunities.png';
import { getImgSrc } from '../../../utils/image';
import './OurChallenge.css';

interface ChallengeItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: any;
  imageAlt: string;
}

const CHALLENGES: ChallengeItem[] = [
  {
    id: 'disconnected-systems',
    number: '01',
    title: 'Disconnected systems',
    description: 'Multiple tools and manual processes slow your team down',
    image: disconnectedImg,
    imageAlt: 'Disconnected software tools and manual process bottlenecks 3D illustration',
  },
  {
    id: 'scaling-limitations',
    number: '02',
    title: 'Scaling limitations',
    description: 'Off-the-shelf tools can’t adapt to your growing needs.',
    image: scalingImg,
    imageAlt: 'Rigid software boundaries preventing business scalability 3D illustration',
  },
  {
    id: 'fragmented-data',
    number: '03',
    title: 'Fragmented data',
    description: 'Critical information is spread across different platforms.',
    image: fragmentedImg,
    imageAlt: 'Fragmented data pie chart representing dispersed corporate information 3D illustration',
  },
  {
    id: 'missed-opportunities',
    number: '04',
    title: 'Missed opportunities',
    description: 'Generic solutions can’t support your unique goals and innovation',
    image: missedImg,
    imageAlt: 'Speech bubble alert representing missed strategic opportunities 3D illustration',
  },
];

export const OurChallenge: React.FC = () => {
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

  return (
    <section
      ref={sectionRef}
      id="our-challenge"
      className={`wk-challenge ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="our-challenge-heading"
    >
      {/* Top Header Area with subtle light background */}
      <div className="wk-challenge__header-band">
        <div className="wk-challenge__container">
          <div className="wk-challenge__header">
            <h2 id="our-challenge-heading" className="wk-challenge__title">
              Our <span className="wk-challenge__title-accent">Challenge</span>
            </h2>
            <p className="wk-challenge__subtitle">
              Off-the -shelf software rarely fits your business.
            </p>
          </div>
        </div>
      </div>

      {/* Four-Column Challenge Cards Grid */}
      <div className="wk-challenge__cards-band">
        <div className="wk-challenge__container">
          <div className="wk-challenge__grid">
            {CHALLENGES.map((item, index) => (
              <article
                key={item.id}
                className="wk-challenge__card"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Thin vertical blue separator */}
                <div
                  className="wk-challenge__separator"
                  style={{ transitionDelay: `${index * 120 + 80}ms` }}
                  aria-hidden="true"
                />

                <div className="wk-challenge__card-inner">
                  {/* Numerical Label */}
                  <div className="wk-challenge__number">{item.number}</div>

                  {/* 3D Visual Asset Area */}
                  <div className="wk-challenge__visual">
                    <img
                      src={getImgSrc(item.image)}
                      alt={item.imageAlt}
                      className={`wk-challenge__img wk-challenge__img--${item.id}`}
                      loading="lazy"
                    />
                  </div>

                  {/* Heading & Supporting Description */}
                  <div className="wk-challenge__content">
                    <h3 className="wk-challenge__card-title">{item.title}</h3>
                    <p className="wk-challenge__card-desc">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

