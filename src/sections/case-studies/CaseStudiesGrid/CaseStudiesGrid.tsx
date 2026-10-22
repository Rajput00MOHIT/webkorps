'use client';

import React, { useState, useRef } from 'react';
import cignaAsset from '../../../assets/case-studies/Cigma.png';
import sonicHealthcareAsset from '../../../assets/case-studies/Sonic healthcare.png';
import paypalAsset from '../../../assets/case-studies/paypal.png';
import pebbleAsset from '../../../assets/case-studies/Pebble.png';
import canopieAsset from '../../../assets/case-studies/canopie.png';
import medhostAsset from '../../../assets/case-studies/Medhost.png';
import scoutrAsset from '../../../assets/case-studies/Scoutr.png';
import pebbleWebAsset from '../../../assets/case-studies/Pebble web.png';
import { getImgSrc } from '../../../utils/image';
import './CaseStudiesGrid.css';

export interface CaseStudy {
  id: string;
  client: string;
  description: string;
  categories: string[];
  image: any;
  imageAlt: string;
  appType: 'Web Application' | 'Mobile Application';
  industry: string;
  visualBg?: string;
}

const ALL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cigna',
    client: 'Cigna',
    description:
      'Cigna is a health platform that connects patients with doctors for online consultations, appointments, records, and prescriptions across multiple medical specialties.',
    categories: ['Website', 'Healthcare', 'Health Solutions'],
    image: cignaAsset,
    imageAlt: 'Cigna health platform on laptop',
    appType: 'Web Application',
    industry: 'Healthcare',
    visualBg: '#EFF6FF',
  },
  {
    id: 'sonic-healthcare',
    client: 'Sonic Healthcare',
    description:
      'Sonic Healthcare is a global diagnostics company providing pathology and radiology services worldwide.',
    categories: ['Website', 'Healthcare', 'Supply Chain'],
    image: sonicHealthcareAsset,
    imageAlt: 'Sonic Healthcare global diagnostics platform on laptop',
    appType: 'Web Application',
    industry: 'Healthcare',
    visualBg: '#EFF6FF',
  },
  {
    id: 'paypal',
    client: 'PayPal',
    description:
      'PayPal partnered with Webkorps to enhance its payment platform with a smoother checkout experience, improved peer payment capabilities, and secure, seamless online transactions.',
    categories: ['Application', 'Payment Platform', 'Custom Application'],
    image: paypalAsset,
    imageAlt: 'PayPal payment platform mobile app interface',
    appType: 'Mobile Application',
    industry: 'Retail',
    visualBg: '#EFF6FF',
  },
  {
    id: 'pebble-mobile',
    client: 'Pebble',
    description:
      'Pebble partnered with Webkorps to create a custom smartwatch app that delivers notifications, fitness tracking, and personalized experiences.',
    categories: ['Application', 'Smartwatch App', 'Fitness Tracking'],
    image: pebbleAsset,
    imageAlt: 'Pebble custom smartwatch app on mobile',
    appType: 'Mobile Application',
    industry: 'Healthcare',
    visualBg: '#E8EFF4',
  },
  {
    id: 'canopie',
    client: 'Canopie',
    description:
      'Canopie is a digital mental health app for expecting and new mothers, offering personalized support during pregnancy and postpartum.',
    categories: ['Mental Health App', 'Healthcare', 'Website'],
    image: canopieAsset,
    imageAlt: 'Canopie maternal mental health app on laptop',
    appType: 'Web Application',
    industry: 'Healthcare',
    visualBg: '#EFF6FF',
  },
  {
    id: 'medhost',
    client: 'Medhost',
    description:
      'MEDHOST EDIS helps emergency departments manage patients, workflows, and clinical operations more efficiently.',
    categories: ['Web Application', 'Healthcare', 'Supply Chain'],
    image: medhostAsset,
    imageAlt: 'MEDHOST EDIS clinical platform on laptop',
    appType: 'Web Application',
    industry: 'Healthcare',
    visualBg: '#EFF6FF',
  },
  {
    id: 'scoutr',
    client: 'Scoutr',
    description:
      'Scoutr is a talent platform that intelligently matches employers with the right candidates based on skills, experience, and career goals.',
    categories: ['Application', 'Hiring Decisions', 'Candidate Matching'],
    image: scoutrAsset,
    imageAlt: 'Scoutr talent platform on laptop',
    appType: 'Web Application',
    industry: 'Education',
    visualBg: '#EFF6FF',
  },
  {
    id: 'pebble-web',
    client: 'Pebble',
    description:
      'Pebble partnered with Webkorps to create a custom smartwatch app that delivers notifications, fitness tracking, and personalized experiences.',
    categories: ['Application', 'Smartwatch App', 'Fitness Tracking'],
    image: pebbleWebAsset,
    imageAlt: 'Pebble enterprise website on laptop',
    appType: 'Web Application',
    industry: 'Manufacturing',
    visualBg: '#FDEAE8',
  },
];

const INDUSTRIES = [
  'All',
  'Healthcare',
  'Retail',
  'Manufacturing',
  'Logistics',
  'Education',
  'Real Estate',
  'Hospitality',
  'Automotive',
];

export const CaseStudiesGrid: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedAppType, setSelectedAppType] = useState<string>('Web Application');
  const [hasInteractedWithAppType, setHasInteractedWithAppType] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Filter case studies based on active industry & appType
  const displayedStudies = ALL_CASE_STUDIES.filter((study) => {
    const matchesIndustry =
      selectedIndustry === 'All' || study.industry.toLowerCase() === selectedIndustry.toLowerCase();
    
    // In Figma mock, initial state shows all cards with Web Application highlighted
    const matchesApp =
      !hasInteractedWithAppType || study.appType === selectedAppType;

    return matchesIndustry && matchesApp;
  });

  const handleAppTypeClick = (type: 'Web Application' | 'Mobile Application') => {
    if (selectedAppType === type && hasInteractedWithAppType) {
      // Toggle off to show all
      setHasInteractedWithAppType(false);
    } else {
      setSelectedAppType(type);
      setHasInteractedWithAppType(true);
    }
  };

  return (
    <section className="wk-cs-section" aria-label="Webkorps Case Studies Directory">
      <div className="wk-cs-container">
        {/* Industries Header Row with Nav Arrows */}
        <div className="wk-cs-filters__header">
          <h2 className="wk-cs-filters__title">Industries</h2>
          <div className="wk-cs-filters__nav-arrows" aria-label="Industries carousel controls">
            <button
              type="button"
              className="wk-cs-filters__arrow-btn"
              onClick={() => scrollTrack('left')}
              aria-label="Scroll industries left"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="wk-cs-filters__arrow-btn"
              onClick={() => scrollTrack('right')}
              aria-label="Scroll industries right"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Industry Pills Track Container */}
        <div ref={trackRef} className="wk-cs-filters__track-wrapper">
          <div className="wk-cs-filters__bar" role="tablist" aria-label="Industry filters">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind}
                type="button"
                role="tab"
                aria-selected={selectedIndustry === ind}
                className={`wk-cs-pill-btn ${
                  selectedIndustry === ind ? 'wk-cs-pill-btn--active' : ''
                }`}
                onClick={() => setSelectedIndustry(ind)}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Centered Application Type Segmented Control */}
        <div className="wk-cs-app-type-row">
          <div className="wk-cs-app-type-toggle" role="tablist" aria-label="Application type filters">
            <button
              type="button"
              role="tab"
              aria-selected={selectedAppType === 'Web Application'}
              className={`wk-cs-app-type-btn ${
                selectedAppType === 'Web Application' ? 'wk-cs-app-type-btn--active' : ''
              }`}
              onClick={() => handleAppTypeClick('Web Application')}
            >
              Web Application
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedAppType === 'Mobile Application'}
              className={`wk-cs-app-type-btn ${
                selectedAppType === 'Mobile Application' ? 'wk-cs-app-type-btn--active' : ''
              }`}
              onClick={() => handleAppTypeClick('Mobile Application')}
            >
              Mobile Application
            </button>
          </div>
        </div>

        {/* 2-Column Case Studies Grid */}
        <div className="wk-cs-grid">
          {displayedStudies.length > 0 ? (
            displayedStudies.map((study) => (
              <article key={study.id} className="wk-cs-card" id={`cs-${study.id}`}>
                <div
                  className="wk-cs-card__visual"
                  style={{ backgroundColor: study.visualBg || '#EFF6FF' }}
                >
                  <img
                    src={getImgSrc(study.image)}
                    alt={study.imageAlt}
                    className="wk-cs-card__img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="wk-cs-card__body">
                  <h3 className="wk-cs-card__client">{study.client}</h3>
                  <p className="wk-cs-card__desc">{study.description}</p>
                  <div
                    className="wk-cs-card__taxonomy"
                    aria-label={`${study.client} classifications`}
                  >
                    {study.categories.map((cat, idx) => (
                      <React.Fragment key={cat}>
                        {idx > 0 && (
                          <span className="wk-cs-card__dot" aria-hidden="true">
                            •
                          </span>
                        )}
                        <span className="wk-cs-card__tag">{cat}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="wk-cs-empty">
              <h3 className="wk-cs-empty__title">No case studies found</h3>
              <p className="wk-cs-empty__text">
                There are currently no case studies matching your selected filters.
              </p>
              <button
                type="button"
                className="wk-cs-pill-btn wk-cs-pill-btn--active"
                onClick={() => {
                  setSelectedIndustry('All');
                  setHasInteractedWithAppType(false);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
