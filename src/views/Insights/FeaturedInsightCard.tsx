'use client';

import React from 'react';
import { getImgSrc } from '../../utils/image';
import { CTA } from '../../components/CTA';

export interface FeaturedInsightCardProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string | any;
  imageAlt: string;
  ctaText: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const FeaturedInsightCard: React.FC<FeaturedInsightCardProps> = ({
  badge,
  title,
  description,
  image,
  imageAlt,
  ctaText,
  href,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <article className="wk-insight-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="wk-insight-card__img-wrap">
        <img
          src={getImgSrc(image)}
          alt={imageAlt}
          className="wk-insight-card__img"
          width={400}
          height={160}
          loading="eager"
        />
      </div>

      <div className="wk-insight-card__body">
        <span className="wk-insight-card__badge">{badge}</span>
        <h2 className="wk-insight-card__title">{title}</h2>
        <p className="wk-insight-card__desc">{description}</p>

        <CTA
          href={href}
          variant="ghost"
          size="sm"
          arrow="right"
          className="wk-insight-card__cta"
          onClick={handleClick}
        >
          {ctaText}
        </CTA>
      </div>
    </article>
  );
};
