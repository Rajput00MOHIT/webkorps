'use client';

import React from 'react';
import heroImg from '../../../assets/technologies/Hero_img.png';
import { getImgSrc } from '../../../utils/image';
import './TechnologiesHero.css';

/**
 * Technologies Landing Page Hero Section
 * Source of Truth: Figma node 2253-1234
 * Features:
 * - Signature light-blue technical grid background
 * - Top "Technologies" pill badge
 * - "Devel< >ping High-Performance" with custom inline code brackets SVG replacing "o"
 * - "Systems Powered by Modern"
 * - 3D isometric stack image (Hero_img.png) + "Tech Stacks"
 * - Micro-interactive cursor pointer
 * - Centered supporting subtitle
 */
export const TechnologiesHero: React.FC = () => {
  return (
    <section className="wk-tech-hero" aria-labelledby="technologies-hero-heading">
      <div className="wk-tech-hero__container">
        {/* Top Eyebrow Pill Badge */}
        <div className="wk-tech-hero__badge-wrapper">
          <span className="wk-tech-hero__badge">Technologies</span>
        </div>

        {/* Centered Main 3-Line Display Heading */}
        <h1
          id="technologies-hero-heading"
          className="wk-tech-hero__title"
          aria-label="Developing High-Performance Systems Powered by Modern Tech Stacks"
        >
          {/* Line 1: Devel< >ping High-Performance */}
          <span className="wk-tech-hero__title-line">
            <span className="wk-tech-hero__developing-word">
              Devel
              <span className="wk-tech-hero__code-icon-wrap" aria-hidden="true">
                <svg
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="wk-tech-hero__code-icon"
                >
                  <rect width="38" height="38" rx="19" fill="white" />
                  <path
                    d="M14.2 27L7 19.5L14.2 12L15.91 13.7813L10.39 19.5312L15.88 25.25L14.2 27ZM23.8 27L22.09 25.2188L27.61 19.4688L22.12 13.75L23.8 12L31 19.5L23.8 27Z"
                    fill="#1887C9"
                  />
                </svg>
              </span>
              ping
            </span>{' '}
            High-Performance
            <span className="wk-tech-hero__cursor-wrap" aria-hidden="true">
              <svg
                viewBox="0 0 70 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wk-tech-hero__cursor-svg"
              >
                <circle cx="19" cy="19" r="19" fill="black" />
                <g filter="url(#filter0_d_tech_cursor)">
                  <path
                    d="M31.1231 62.5755L22.7611 22.9035C22.593 22.1059 23.3985 21.453 24.1439 21.7826L62.3686 38.6819C63.2209 39.0587 63.14 40.2937 62.2458 40.556L42.7065 46.2882C42.4575 46.3612 42.2466 46.5282 42.1184 46.7539L32.9712 62.863C32.5165 63.6637 31.313 63.4764 31.1231 62.5755Z"
                    fill="black"
                    strokeWidth="3"
                    stroke="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_tech_cursor"
                    x="17.2373"
                    y="20.1923"
                    width="51.2275"
                    height="52.6781"
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
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_tech"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_tech"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
          </span>

          {/* Line 2: Systems Powered by Modern */}
          <span className="wk-tech-hero__title-line">
            Systems Powered by Modern
          </span>

          {/* Line 3: [Hero_img.png] Tech Stacks */}
          <span className="wk-tech-hero__title-line wk-tech-hero__title-line--last">
            <span className="wk-tech-hero__stack-img-wrap" aria-hidden="true">
              <img
                src={getImgSrc(heroImg)}
                alt=""
                className="wk-tech-hero__stack-img"
                width={64}
                height={67}
                loading="eager"
              />
            </span>
            <span>Tech Stacks</span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="wk-tech-hero__subtitle">
          End-to-end development from frontend to backend and cloud,
          <br className="wk-tech-hero__br-desktop" />
          built on scalable and maintainable tech stacks.
        </p>
      </div>
    </section>
  );
};
