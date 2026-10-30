import React from 'react';
import './AssetPlaceholder.css';

interface AssetPlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: string;
  height?: string | number;
  className?: string;
  icon?: React.ReactNode;
}

export const AssetPlaceholder: React.FC<AssetPlaceholderProps> = ({
  label,
  sublabel,
  aspectRatio,
  height,
  className = '',
  icon,
}) => {
  const style: React.CSSProperties = {
    ...(aspectRatio ? { aspectRatio } : {}),
    ...(height ? { height } : {}),
  };

  return (
    <div
      className={`wk-asset-placeholder ${className}`.trim()}
      style={style}
      role="img"
      aria-label={label}
    >
      <div className="wk-asset-placeholder__grid" aria-hidden="true" />
      <div className="wk-asset-placeholder__content">
        <div className="wk-asset-placeholder__icon-wrap">
          {icon || (
            <svg
              className="wk-asset-placeholder__svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          )}
        </div>
        <span className="wk-asset-placeholder__tag">{label}</span>
        {sublabel && <span className="wk-asset-placeholder__hint">{sublabel}</span>}
      </div>
    </div>
  );
};

