'use client';

import React from 'react';
import { CaseStudyData } from '../../../data/caseStudies/types';
import './CaseStudyComponents.css';

interface CaseStudyAtAGlanceProps {
  data: CaseStudyData;
}

export const CaseStudyAtAGlance: React.FC<CaseStudyAtAGlanceProps> = ({ data }) => {
  if (!data.atAGlance || data.atAGlance.length === 0) return null;

  return (
    <section className="wk-cs-glance" aria-label="Project at a Glance">
      <div className="wk-cs-glance__container">
        <h2 className="wk-cs-section-eyebrow">PROJECT AT A GLANCE</h2>
        <dl className="wk-cs-glance__dl">
          {data.atAGlance.map((item, idx) => (
            <div key={idx} className="wk-cs-glance__item">
              <dt className="wk-cs-glance__term">{item.label}</dt>
              <dd className="wk-cs-glance__desc">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export const CaseStudyInShort: React.FC<{ inShort: string; client: string }> = ({
  inShort,
  client,
}) => {
  if (!inShort) return null;

  return (
    <section className="wk-cs-in-short" aria-label={`Project Summary - ${client}`}>
      <div className="wk-cs-in-short__container">
        <div className="wk-cs-in-short__badge">EXECUTIVE SUMMARY</div>
        <p className="wk-cs-in-short__text">{inShort}</p>
      </div>
    </section>
  );
};
