import React from 'react';
import Link from 'next/link';
import cignaAsset from '../../../assets/case-studies/cigna.png';
import paypalAsset from '../../../assets/case-studies/paypal.png';
import canopieAsset from '../../../assets/case-studies/canopie.png';
import { getImgSrc } from '../../../utils/image';
import './RelevantWork.css';

interface VerifiedWorkItem {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome?: string;
  image: any;
  imageAlt: string;
  caseStudyHref: string;
}

const VERIFIED_WORK: VerifiedWorkItem[] = [
  {
    id: 'cigna',
    client: 'Cigna',
    industry: 'Healthcare & Telemedicine',
    challenge: 'Patients and doctors required an integrated digital channel for reliable remote medical consultations, scheduling, and health record management.',
    solution: 'Engineered an end-to-end digital health platform facilitating secure video consultations, multi-specialty appointments, and centralized records.',
    outcome: 'Streamlined doctor-patient coordination with high availability and HIPAA-grade confidentiality.',
    image: cignaAsset,
    imageAlt: 'Cigna healthcare platform interface displayed on a laptop screen',
    caseStudyHref: '/case-studies',
  },
  {
    id: 'paypal',
    client: 'PayPal',
    industry: 'Financial Technology & Payments',
    challenge: 'High checkout friction and transaction drop-offs across complex multi-currency payment environments.',
    solution: 'Enhanced the core payment journey with a smoother checkout flow, optimized card authorization mechanisms, and high-security compliance.',
    outcome: 'Minimized latency and improved overall checkout success rate across international channels.',
    image: paypalAsset,
    imageAlt: 'PayPal payment platform mobile app interface displaying balance and transfer features',
    caseStudyHref: '/case-studies',
  },
  {
    id: 'canopie',
    client: 'Canopie',
    industry: 'Digital Mental Health',
    challenge: 'Expecting and new mothers lacked timely, clinically validated mental health resources and guided self-care routines.',
    solution: 'Designed and developed a personalized maternal mental health application with structured audio sessions and progress tracking.',
    outcome: 'Delivered intuitive, compassionate user onboarding and continuous engagement.',
    image: canopieAsset,
    imageAlt: 'Canopie mental health app interface displayed on a laptop screen',
    caseStudyHref: '/case-studies',
  },
];

export const RelevantWork: React.FC = () => {
  return (
    <section id="relevant-work" className="wk-rel-work" aria-labelledby="rel-work-title">
      <div className="wk-rel-work__container">
        <div className="wk-rel-work__header">
          <span className="wk-rel-work__eyebrow">VERIFIED PROJECT CAPABILITY</span>
          <h2 id="rel-work-title" className="wk-rel-work__title">
            Proof Matters More Than Promises
          </h2>
          <p className="wk-rel-work__subtitle">
            Explore how technology can address different product and business requirements.
          </p>
        </div>

        <div className="wk-rel-work__grid">
          {VERIFIED_WORK.map((work) => (
            <div key={work.id} className="wk-rel-work__card">
              <div className="wk-rel-work__img-wrap">
                <img
                  src={getImgSrc(work.image)}
                  alt={work.imageAlt}
                  className="wk-rel-work__img"
                  loading="lazy"
                />
                <span className="wk-rel-work__badge">{work.industry}</span>
              </div>

              <div className="wk-rel-work__body">
                <h3 className="wk-rel-work__client">{work.client}</h3>

                <div className="wk-rel-work__point">
                  <span className="wk-rel-work__label">The Challenge:</span>
                  <p className="wk-rel-work__text">{work.challenge}</p>
                </div>

                <div className="wk-rel-work__point">
                  <span className="wk-rel-work__label">What Was Built:</span>
                  <p className="wk-rel-work__text">{work.solution}</p>
                </div>

                {work.outcome && (
                  <div className="wk-rel-work__point">
                    <span className="wk-rel-work__label">Documented Outcome:</span>
                    <p className="wk-rel-work__text">{work.outcome}</p>
                  </div>
                )}

                <div className="wk-rel-work__footer">
                  <Link
                    href={work.caseStudyHref}
                    className="wk-rel-work__link"
                    aria-label={`Explore Case Studies featuring ${work.client}`}
                  >
                    <span>Explore Case Studies</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

