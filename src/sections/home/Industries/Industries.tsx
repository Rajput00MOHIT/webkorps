'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ArrowLeft } from 'lucide-react';
import { Container } from '../../../components/Container/Container';
import manufacturingArt from '../../../assets/industries/manufacturing.png';
import logisticsArt from '../../../assets/industries/logistics.png';
import educationArt from '../../../assets/industries/education.png';
import healthcareArt from '../../../assets/industries/healthcare.png';
import fintechArt from '../../../assets/industries/fintech.png';
import realestateArt from '../../../assets/industries/realestate.png';
import { getImgSrc } from '../../../utils/image';
import './Industries.css';

interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string | any;
  imageAlt: string;
  href: string;
}

const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Improve productivity, streamline production workflows, and connect operations with purpose-built digital solutions.',
    image: manufacturingArt,
    imageAlt: 'High-tech precision industrial robotics and automation equipment',
    href: '/industries',
  },
  {
    id: 'logistics-supply-chain',
    title: 'Logistics & Supply Chain',
    description: 'Improve shipment visibility, coordinate supply chain activities, and optimize operational workflows with connected technology.',
    image: logisticsArt,
    imageAlt: 'Global logistics cargo freight and intelligent supply chain systems',
    href: '/industries',
  },
  {
    id: 'education-e-learning',
    title: 'Education & E-Learning',
    description: 'Create engaging digital learning experiences with scalable platforms, interactive features, and streamlined learning management.',
    image: educationArt,
    imageAlt: 'Digital e-learning platform and modern knowledge delivery ecosystems',
    href: '/industries',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Enhance patient experiences, streamline clinical workflows, and improve care coordination with secure, scalable digital healthcare solutions.',
    image: healthcareArt,
    imageAlt: 'Intelligent digital healthcare diagnostics and clinical data systems',
    href: '/industries',
  },
  {
    id: 'fintech',
    title: 'Fintech',
    description: 'Strengthen financial operations, enhance transaction security, and deliver seamless digital banking experiences with innovative fintech solutions.',
    image: fintechArt,
    imageAlt: 'Secure digital banking architecture and algorithmic financial technology',
    href: '/industries',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Simplify property management, streamline real estate operations, and enhance customer experiences with connected digital solutions.',
    image: realestateArt,
    imageAlt: 'Modern smart property management architecture and connected spaces',
    href: '/industries',
  },
];

export const Industries: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0.5);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

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

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 5) {
      setScrollProgress(1);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const progress = Math.min(Math.max(scrollLeft / maxScroll, 0), 1);
    const baseProgress = clientWidth / scrollWidth;
    const currentProgress = baseProgress + progress * (1 - baseProgress);
    setScrollProgress(Math.min(currentProgress, 1));
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardEl = scrollRef.current.querySelector('.wk-industry-card') as HTMLElement;
    const cardWidth = cardEl ? cardEl.offsetWidth + 24 : 380;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className={`wk-industries ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="industry-heading"
    >
      <Container>
        {/* Section Header */}
        <div className="wk-industries__header">
          <div className="wk-industries__header-text">
            <h2 id="industry-heading" className="wk-industries__title">
              Industry-Focused Solutions for<br />
              <span className="wk-industries__title-accent">Real Business Challenges</span>
            </h2>
          </div>
          <div className="wk-industries__header-action">
            <a
              href="/industries"
              className="wk-industries__view-all"
              aria-label="View all industry solutions"
            >
              View all
              <span className="wk-industries__view-all-chevrons" aria-hidden="true">
                <ChevronRight className="wk-chevron-icon" />
                <ChevronRight className="wk-chevron-icon wk-chevron-icon--overlap" />
              </span>
            </a>
          </div>
        </div>

        {/* Cards Carousel / Grid */}
        <div
          ref={scrollRef}
          className="wk-industries__grid"
          role="region"
          aria-label="Industry solutions list"
          tabIndex={0}
        >
          {INDUSTRIES_DATA.map((industry, index) => (
            <article
              key={industry.id}
              className={`wk-industry-card ${activeCardId === industry.id ? 'is-active' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              tabIndex={0}
              aria-labelledby={`ind-title-${industry.id}`}
              onClick={() => setActiveCardId(activeCardId === industry.id ? null : industry.id)}
              onMouseEnter={() => setActiveCardId(industry.id)}
              onMouseLeave={() => setActiveCardId(null)}
              onFocus={() => setActiveCardId(industry.id)}
              onBlur={() => setActiveCardId(null)}
            >
              <div className="wk-industry-card__body">
                <div className="wk-industry-card__content">
                  <h3 id={`ind-title-${industry.id}`} className="wk-industry-card__heading">
                    {industry.title}
                  </h3>
                  <p className="wk-industry-card__description">
                    {industry.description}
                  </p>
                </div>

                <div className="wk-industry-card__action">
                  <a
                    href={industry.href}
                    className="wk-industry-card__link"
                    aria-label={`Explore ${industry.title} solutions`}
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="wk-industry-card__arrow" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Dynamic 3D Illustration Overlay (Reveals on Hover / Focus) */}
              <div className="wk-industry-card__art-wrap" aria-hidden="true">
                <img
                  src={getImgSrc(industry.image)}
                  alt=""
                  className="wk-industry-card__art"
                  loading="lazy"
                  width="220"
                  height="410"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Bottom Track & Controls */}
        <div className="wk-industries__footer" aria-hidden="true">
          <div className="wk-industries__track">
            <div
              className="wk-industries__track-bar"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <div className="wk-industries__nav-buttons">
            <button
              type="button"
              className={`wk-industries__nav-btn ${!canScrollLeft ? 'wk-industries__nav-btn--disabled' : ''}`}
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll to previous industries"
              tabIndex={canScrollLeft ? 0 : -1}
            >
              <ArrowLeft className="wk-industries__nav-icon" />
            </button>
            <button
              type="button"
              className={`wk-industries__nav-btn ${!canScrollRight ? 'wk-industries__nav-btn--disabled' : ''}`}
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll to next industries"
              tabIndex={canScrollRight ? 0 : -1}
            >
              <ArrowRight className="wk-industries__nav-icon" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
