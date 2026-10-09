'use client';

import React from 'react';
import microsoftLogo from '../../../assets/about/microsoft.png';
import fortinetLogo from '../../../assets/about/fortinet.png';
import hubspotLogo from '../../../assets/about/hubspot.png';
import manageEngineLogo from '../../../assets/about/manageengine.png';
import { getImgSrc } from '../../../utils/image';
import './BrandTrustStrip.css';

export interface TrustBrandItem {
  id: string;
  name: string;
  logo: any;
  alt: string;
}

const TRUSTED_BRANDS: TrustBrandItem[] = [
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: microsoftLogo,
    alt: 'Microsoft brand logo',
  },
  {
    id: 'fortinet',
    name: 'FORTINET',
    logo: fortinetLogo,
    alt: 'FORTINET brand logo',
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    logo: hubspotLogo,
    alt: 'HubSpot brand logo',
  },
  {
    id: 'manageengine',
    name: 'ManageEngine',
    logo: manageEngineLogo,
    alt: 'ManageEngine brand logo',
  },
];

export const BrandTrustStrip: React.FC = () => {
  return (
    <section className="wk-brand-strip" aria-label="Trusted Technology Brands">
      <div className="site-container wk-brand-strip__container">
        <div className="wk-brand-strip__inner">
          {/* Trust Statement Column */}
          <div className="wk-brand-strip__statement-col">
            <p className="wk-brand-strip__statement">
              Trusted by fast-growing
              <br />
              companies around the world
            </p>
          </div>

          {/* 4 Brand Logo Columns */}
          <div className="wk-brand-strip__logos-grid">
            {TRUSTED_BRANDS.map((brand) => (
              <div key={brand.id} className="wk-brand-strip__logo-item">
                <img
                  src={getImgSrc(brand.logo)}
                  alt={brand.alt}
                  className={`wk-brand-strip__logo-img wk-brand-strip__logo-img--${brand.id}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
