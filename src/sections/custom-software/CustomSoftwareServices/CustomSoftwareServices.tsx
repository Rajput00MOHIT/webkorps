'use client';

import React, { useState, useEffect } from 'react';
import { CUSTOM_SOFTWARE_SERVICES } from './customSoftwareServicesData';
import { ServiceRow } from './ServiceRow';
import './CustomSoftwareServices.css';

export const CustomSoftwareServices: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Enable animation classes after hydration for graceful fallback if JS is disabled
    setIsAnimated(true);
  }, []);

  return (
    <section
      id="custom-software-services"
      className={`wk-cs-services ${isAnimated ? 'wk-cs-services--animated' : ''}`}
      aria-labelledby="custom-software-services-heading"
    >
      {/* 1. Section Header Band (Light Gray Background) */}
      <div className="wk-cs-services__header-band">
        <div className="wk-cs-services__header-inner">
          <h2
            id="custom-software-services-heading"
            className="wk-cs-services__title"
          >
            <span className="wk-cs-services__title-accent">Custom</span> Software
            Development
          </h2>
          <p className="wk-cs-services__subtitle">
            From idea to launch, we build secure, scalable, and future-ready
            software solutions.
          </p>
        </div>
      </div>

      {/* 2. Six Alternating Service Blocks */}
      <div className="wk-cs-services__body">
        <div className="wk-cs-services__container">
          {CUSTOM_SOFTWARE_SERVICES.map((item, index) => (
            <ServiceRow
              key={item.id}
              item={item}
              isReversed={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

