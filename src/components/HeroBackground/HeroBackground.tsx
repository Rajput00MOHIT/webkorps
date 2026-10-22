import React from 'react';
import './HeroBackground.css';

interface HeroBackgroundProps {
  columnsCount?: number;
  rowsCount?: number;
  className?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  columnsCount = 12,
  rowsCount = 8,
  className = '',
}) => {
  return (
    <div className={`wk-hero-bg ${className}`.trim()} aria-hidden="true">
      <div className="wk-hero-bg__columns">
        {Array.from({ length: columnsCount }).map((_, i) => (
          <div key={`col-${i}`} className="wk-hero-bg__col-guide" />
        ))}
      </div>
      <div className="wk-hero-bg__rows">
        {Array.from({ length: rowsCount }).map((_, i) => (
          <div key={`row-${i}`} className="wk-hero-bg__row-guide" />
        ))}
      </div>
    </div>
  );
};
