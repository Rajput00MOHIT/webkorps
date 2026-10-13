import React from 'react';

/**
 * Reusable Custom SVG Cursor Component
 * Preserves the exact shape, black circular detail, white stroke, and drop shadow from Figma.
 */
export const HeroCursor: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="69"
      height="73"
      viewBox="0 0 69 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        <filter
          id="hero-cursor-shadow"
          x="0"
          y="0"
          width="69"
          height="73"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>

      {/* Black Circular Detail from Reference */}
      <circle cx="24" cy="24" r="18.5" fill="#000000" />

      {/* Custom Pointer Arrow with White Stroke and Drop Shadow */}
      <g filter="url(#hero-cursor-shadow)">
        <path
          d="M29.5 50.5L25.2 18.8C24.9 16.5 27.4 14.8 29.4 16.0L57.6 33.1C59.8 34.5 59.2 37.8 56.7 38.3L43.4 40.8C42.7 40.9 42.1 41.3 41.7 41.9L34.5 51.8C33.0 53.8 29.8 53.0 29.5 50.5Z"
          fill="#000000"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
