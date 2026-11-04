'use client';

import React, { forwardRef } from 'react';
import { SolutionCardItem } from './softwareForEveryBusinessData';

interface SolutionCardProps {
  item: SolutionCardItem;
  className?: string;
  style?: React.CSSProperties;
}

export const SolutionCard = forwardRef<HTMLDivElement, SolutionCardProps>(
  ({ item, className = '', style }, ref) => {
    return (
      <article
        ref={ref}
        className={`wk-solution-card ${className}`}
        style={style}
        data-solution-id={item.id}
      >
        <div className="wk-solution-card__inner">
          <h3 className="wk-solution-card__title">{item.title}</h3>
          <p className="wk-solution-card__desc">{item.description}</p>
        </div>
      </article>
    );
  }
);

SolutionCard.displayName = 'SolutionCard';

