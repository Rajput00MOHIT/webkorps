import React from 'react';
import fullStackImg from '../../../assets/technologies/our-offerings/full-stack-engineering.png';
import cloudSolutionsImg from '../../../assets/technologies/our-offerings/cloud-solutions.png';
import apiDevImg from '../../../assets/technologies/our-offerings/api-development.png';
import techConsultingImg from '../../../assets/technologies/our-offerings/technology-consulting.png';
import { getImgSrc } from '../../../utils/image';
import './OurOfferings.css';

interface OfferingItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: any;
  alt: string;
}

const OFFERINGS: OfferingItem[] = [
  {
    id: 'full-stack-engineering',
    number: '01',
    title: 'Full-Stack Engineering',
    description: 'End-to-end development across frontend, backend, and databases.',
    image: fullStackImg,
    alt: '3D blue technology shield on a glowing pedestal representing Full-Stack Engineering',
  },
  {
    id: 'cloud-solutions',
    number: '02',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure built for reliability and performance.',
    image: cloudSolutionsImg,
    alt: '3D translucent blue cloud illustration representing Cloud Solutions',
  },
  {
    id: 'api-development',
    number: '03',
    title: 'API Development',
    description: 'Secure and seamless integrations connecting platforms and services.',
    image: apiDevImg,
    alt: '3D server rack tower with clouds representing API Development',
  },
  {
    id: 'technology-consulting',
    number: '04',
    title: 'Technology Consulting',
    description: 'Strategic guidance to select, optimize, and scale the right technologies.',
    image: techConsultingImg,
    alt: '3D robot with headset working on laptop representing Technology Consulting',
  },
];

/**
 * Our Offerings Section Component
 * Source of Truth: Figma node 1233-10564 & attached visual reference
 */
export const OurOfferings: React.FC = () => {
  return (
    <section className="wk-our-offerings" aria-labelledby="our-offerings-heading">
      <div className="wk-our-offerings__container">
        {/* Section Header (Left-aligned) */}
        <header className="wk-our-offerings__header">
          <h2 id="our-offerings-heading" className="wk-our-offerings__title">
            Our <span className="wk-our-offerings__title-blue">Offerings</span>
          </h2>
          <p className="wk-our-offerings__subtitle">
            Technology solutions built to solve complex business challenges.
          </p>
        </header>

        {/* 4 Offering Columns */}
        <div className="wk-our-offerings__grid" role="list">
          {OFFERINGS.map((offering) => (
            <article
              key={offering.id}
              role="listitem"
              className="wk-our-offerings__card"
            >
              <div className="wk-our-offerings__card-inner">
                {/* Number */}
                <div className="wk-our-offerings__number" aria-hidden="true">
                  {offering.number}
                </div>

                {/* 3D Illustration */}
                <div className="wk-our-offerings__illustration-wrap">
                  <img
                    src={getImgSrc(offering.image)}
                    alt={offering.alt}
                    className="wk-our-offerings__illustration"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Title */}
                <h3 className="wk-our-offerings__card-title">
                  {offering.title}
                </h3>

                {/* Description */}
                <p className="wk-our-offerings__card-desc">
                  {offering.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
