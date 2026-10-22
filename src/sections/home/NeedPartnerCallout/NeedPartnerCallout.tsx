'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../../../components/Container/Container';
import technologyPartnerImg from '../../../assets/Technology Partner/Entrepreneur_giving_positive_fee…_202609081049 1.png';
import { getImgSrc } from '../../../utils/image';
import './NeedPartnerCallout.css';

export const NeedPartnerCallout: React.FC = () => {
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
      id="technology-partner"
      className={`wk-tech-partner ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="tech-partner-heading"
    >
      <Container size="wide">
        <div className="wk-tech-partner__card">
          {/* Left Column: Typography & Conversion Action */}
          <div className="wk-tech-partner__content">
            <h2 id="tech-partner-heading" className="wk-tech-partner__title">
              Big Ideas Deserve
              <br />
              <span className="wk-tech-partner__title-accent">Better Technology</span>
            </h2>

            <p className="wk-tech-partner__subtitle">
              Turn your business vision into digital solutions built to perform, scale, and evolve. We bring the right expertise and technology to help you solve challenges, seize opportunities, and move business forward.
            </p>

            <div className="wk-tech-partner__action">
              <a
                href="/contact-us"
                className="wk-tech-partner__btn"
                aria-label="Let’s Make It Happen - Contact Webkorps"
              >
                <span>Let’s Make It Happen</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M15.707 0.999999C15.707 0.447715 15.2593 -2.87362e-07 14.707 -5.40243e-07L5.70703 2.60547e-07C5.15475 -7.66277e-08 4.70703 0.447715 4.70703 1C4.70703 1.55228 5.15475 2 5.70703 2L13.707 2L13.707 10C13.707 10.5523 14.1547 11 14.707 11C15.2593 11 15.707 10.5523 15.707 10L15.707 0.999999ZM0.707031 15L1.41414 15.7071L15.4141 1.70711L14.707 1L13.9999 0.292893L-7.55191e-05 14.2929L0.707031 15Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup with Circular Glow Backdrop */}
          <div className="wk-tech-partner__phone-wrapper">
            <img
              src={getImgSrc(technologyPartnerImg)}
              alt="Webkorps technology partnership consultation on mobile screen"
              className="wk-tech-partner__phone-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NeedPartnerCallout;
