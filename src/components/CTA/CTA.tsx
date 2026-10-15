'use client';

import React from 'react';
import './CTA.css';

export type CTAVariant = 'primary' | 'secondary' | 'outline' | 'white' | 'ghost' | 'glow';
export type CTASize = 'sm' | 'md' | 'lg';
export type CTAArrow = 'none' | 'diagonal' | 'right' | 'circle';

export interface CTAProps {
  children: React.ReactNode;
  variant?: CTAVariant;
  size?: CTASize;
  arrow?: CTAArrow;
  pill?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  id?: string;
  'aria-label'?: string;
  tabIndex?: number;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Modern High-Conversion CTA Component for Webkorps
 * Standardized with Primary Brand Color #1A87C8
 * Supports polymorphic rendering (<a> when href provided, else <button>)
 */
export const CTA: React.FC<CTAProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  arrow = 'none',
  pill = true,
  fullWidth = false,
  loading = false,
  disabled = false,
  href,
  target,
  rel,
  type = 'button',
  className = '',
  id,
  'aria-label': ariaLabel,
  tabIndex,
  iconLeading,
  iconTrailing,
  onClick,
  style,
}) => {
  const isInteractive = !disabled && !loading;

  const classNames = [
    'wk-cta',
    `wk-cta--${variant}`,
    `wk-cta--${size}`,
    pill ? 'wk-cta--pill' : '',
    fullWidth ? 'wk-cta--full' : '',
    loading ? 'wk-cta--loading' : '',
    disabled ? 'wk-cta--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Render standardized Arrow indicator
  const renderArrow = () => {
    if (arrow === 'diagonal') {
      return (
        <span className="wk-cta__arrow wk-cta__arrow--diagonal" aria-hidden="true">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      );
    }

    if (arrow === 'circle') {
      return (
        <span className="wk-cta__icon-circle" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M10.3361 17.1441L8.6823 15.5087L14.4246 9.76644H0V7.37766H14.4246L8.6823 1.64459L10.3361 0L18.9081 8.57205L10.3361 17.1441Z"
              fill="#1A87C8"
            />
          </svg>
        </span>
      );
    }

    if (arrow === 'right') {
      return (
        <span className="wk-cta__arrow wk-cta__arrow--right" aria-hidden="true">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      );
    }

    return null;
  };

  const content = (
    <>
      {loading && (
        <span className="wk-cta__spinner" aria-hidden="true" />
      )}
      {iconLeading && (
        <span className="wk-cta__custom-icon wk-cta__custom-icon--leading" aria-hidden="true">
          {iconLeading}
        </span>
      )}
      <span className="wk-cta__text">{children}</span>
      {iconTrailing && (
        <span className="wk-cta__custom-icon wk-cta__custom-icon--trailing" aria-hidden="true">
          {iconTrailing}
        </span>
      )}
      {!loading && renderArrow()}
    </>
  );

  // Semantic Link CTA
  if (href && isInteractive) {
    return (
      <a
        id={id}
        href={href}
        className={classNames}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        style={style}
      >
        {content}
      </a>
    );
  }

  // Semantic Button CTA
  return (
    <button
      id={id}
      type={type}
      className={classNames}
      disabled={!isInteractive}
      aria-label={ariaLabel}
      aria-busy={loading}
      tabIndex={tabIndex}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      style={style}
    >
      {content}
    </button>
  );
};

// Convenient alias for teams looking for CTAButton
export const CTAButton = CTA;
export default CTA;
