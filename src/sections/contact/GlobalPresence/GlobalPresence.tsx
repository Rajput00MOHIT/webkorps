'use client';

import React from 'react';
import './GlobalPresence.css';

export interface OfficeLocation {
  id: string;
  name: string;
  address: string;
}

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'indore-hq',
    name: 'Headquarters',
    address: '4th Floor, Winway world offices, Vijay Nagar, Indore, Madhya Pradesh 452010',
  },
  {
    id: 'sheridan-wy',
    name: 'Sheridan, WY Office',
    address: '1309 Coffeen Ave, STE B1, Sheridan, WY 82801',
  },
  {
    id: 'frisco-tx',
    name: 'Frisco, TX Office',
    address: '6160 Warren Parkway, Suite 100 Frisco, Texas 75034',
  },
  {
    id: 'pune-ind',
    name: 'Pune, Ind Office',
    address: '3rd floor, Lalwani Icon, Sakore Nagar, Viman Nagar, Pune, MH 411014',
  },
  {
    id: 'bengaluru-ind',
    name: 'Bengaluru, Ind Office',
    address: '7th Floor, Commerce Mantri, Bannerghatta Road Bengaluru, KT 560076',
  },
  {
    id: 'noida-ind',
    name: 'Noida, Ind Office',
    address: 'Centrade Business Park, Sec 140, Phase-2 Noida UP 201305',
  },
];

export const GlobalPresence: React.FC = () => {
  return (
    <section
      id="global-presence"
      className="wk-global-presence-section"
      aria-labelledby="global-presence-heading"
    >
      <div className="wk-global-presence-container">
        {/* Section Header */}
        <div className="wk-global-presence-header">
          <h2 id="global-presence-heading" className="wk-global-presence-title">
            <span className="wk-global-presence-title--prefix">Our</span>{' '}
            <span className="wk-global-presence-title--accent">Global Presence</span>
          </h2>
          <p className="wk-global-presence-subtitle">
            Delivering excellence to clients across multiple countries and industries.
          </p>
        </div>

        {/* 2-Column, 3-Row Office Cards Grid */}
        <div className="wk-global-presence-grid" role="list">
          {OFFICE_LOCATIONS.map((office) => (
            <article
              key={office.id}
              className="wk-office-card"
              role="listitem"
              aria-labelledby={`office-title-${office.id}`}
            >
              {/* Overlapping Blue Heading Tab */}
              <div className="wk-office-card__tab">
                <h3
                  id={`office-title-${office.id}`}
                  className="wk-office-card__tab-text"
                >
                  {office.name}
                </h3>
              </div>

              {/* Card Address Body */}
              <div className="wk-office-card__content">
                <p className="wk-office-card__address">{office.address}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
