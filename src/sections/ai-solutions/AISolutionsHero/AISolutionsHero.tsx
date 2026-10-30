'use client';

import React from 'react';
import { HeroBackground } from '../../../components/HeroBackground';
import './AISolutionsHero.css';

export const AISolutionsHero: React.FC = () => {
  return (
    <section className="wk-ai-hero-exact" aria-labelledby="ai-hero-exact-title">
      {/* Exact Webkorps Hero Background (same as About, Technologies & other pages) */}
      <HeroBackground />

      <div className="wk-ai-hero-exact__container">
        {/* Eyebrow Pill */}
        <div className="wk-ai-hero-exact__badge-wrap">
          <span className="wk-ai-hero-exact__badge">AI Solutions</span>
        </div>

        {/* Main 3-Line Heading */}
        <h1
          id="ai-hero-exact-title"
          className="wk-ai-hero-exact__title"
          aria-label="Production-Ready AI Solutions That Deliver Measurable ROI"
        >
          {/* Line 1: Produ[Sparkle]tion-Ready AI */}
          <span className="wk-ai-hero-exact__line">
            <span className="wk-ai-hero-exact__word">
              Produ
              <span className="wk-ai-hero-exact__sparkle-wrap" aria-hidden="true">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="wk-ai-hero-exact__sparkle-svg"
                >
                  <rect width="41" height="41" rx="20.5" fill="white" />
                  <path
                    d="M18.2656 14.0393C18.6033 14.0393 18.8917 14.2888 18.9532 14.632L20.0189 20.6519L25.8457 21.7531C26.0058 21.7845 26.1503 21.8727 26.2542 22.0024C26.3582 22.1321 26.4151 22.2953 26.4151 22.4637C26.4151 22.6321 26.3582 22.7952 26.2542 22.925C26.1503 23.0547 26.0058 23.1429 25.8457 23.1743L20.02 24.2754L18.9532 30.2965C18.9228 30.462 18.8375 30.6113 18.7119 30.7187C18.5864 30.8261 18.4285 30.8848 18.2656 30.8848C18.1026 30.8848 17.9447 30.8261 17.8192 30.7187C17.6936 30.6113 17.6083 30.462 17.5779 30.2965L16.5123 24.2766L10.6865 23.1743C10.5264 23.1429 10.3819 23.0547 10.278 22.925C10.1741 22.7952 10.1172 22.6321 10.1172 22.4637C10.1172 22.2953 10.1741 22.1321 10.278 22.0024C10.3819 21.8727 10.5264 21.7845 10.6865 21.7531L16.5123 20.6519L17.5779 14.632C17.6074 14.4658 17.6924 14.3154 17.818 14.2071C17.9436 14.0989 18.102 14.0395 18.2656 14.0393ZM17.8004 21.4018C17.7742 21.546 17.7065 21.6786 17.6062 21.7823C17.5058 21.886 17.3775 21.956 17.238 21.983L14.6941 22.4637L17.2391 22.9455L17.3431 22.9732C17.5779 23.0576 17.7546 23.2679 17.8004 23.5267L18.2656 26.1542L18.7318 23.5256C18.7581 23.3818 18.8258 23.2495 18.9259 23.1461C19.026 23.0426 19.154 22.9727 19.2932 22.9455L21.837 22.4637L19.2943 21.983C19.1549 21.956 19.0267 21.8863 18.9264 21.7828C18.826 21.6793 18.7582 21.5469 18.7318 21.403L18.2656 18.7732L17.8004 21.4018ZM26.6519 11.1506C26.9818 11.1506 27.2669 11.3887 27.3351 11.7214L27.7343 13.6418L29.5939 14.0554C29.7492 14.0912 29.8881 14.1807 29.9877 14.309C30.0873 14.4374 30.1415 14.5969 30.1415 14.7614C30.1415 14.9259 30.0873 15.0855 29.9877 15.2138C29.8881 15.3422 29.7492 15.4316 29.5939 15.4674L27.7343 15.8799L27.3351 17.8014C27.3005 17.962 27.2139 18.1055 27.0897 18.2084C26.9655 18.3113 26.8111 18.3674 26.6519 18.3674C26.4927 18.3674 26.3383 18.3113 26.2141 18.2084C26.0899 18.1055 26.0034 17.962 25.9687 17.8014L25.5684 15.8799L23.71 15.4674C23.5546 15.4316 23.4157 15.3422 23.3161 15.2138C23.2166 15.0855 23.1623 14.9259 23.1623 14.7614C23.1623 14.5969 23.2166 14.4374 23.3161 14.309C23.4157 14.1807 23.5546 14.0912 23.71 14.0554L25.5684 13.6418L25.9687 11.7214C26.0024 11.56 26.0886 11.4153 26.2129 11.3115C26.3372 11.2076 26.4921 11.1509 26.6519 11.1506Z"
                    fill="#1A87C8"
                  />
                </svg>
              </span>
              tion-Ready AI
            </span>
          </span>

          {/* Line 2: Solutions That Deliver */}
          <span className="wk-ai-hero-exact__line">
            Solutions That Deliver
          </span>

          {/* Line 3: Measurable ROI [Cursor Pointer] */}
          <span className="wk-ai-hero-exact__line">
            Measurable ROI
            <span className="wk-ai-hero-exact__cursor-wrap" aria-hidden="true">
              <svg
                viewBox="0 0 70 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wk-ai-hero-exact__cursor-svg"
              >
                <circle cx="21" cy="21" r="21" fill="black" />
                <g filter="url(#filter0_d_exact_cursor)">
                  <path
                    d="M31.1231 62.5755L22.7611 22.9035C22.593 22.1059 23.3985 21.453 24.1439 21.7826L62.3686 38.6819C63.2209 39.0587 63.14 40.2937 62.2458 40.556L42.7065 46.2882C42.4575 46.3612 42.2466 46.5282 42.1184 46.7539L32.9712 62.863C32.5165 63.6637 31.313 63.4764 31.1231 62.5755Z"
                    fill="black"
                    strokeWidth="3.5"
                    stroke="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_exact_cursor"
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
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_exact"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_exact"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
          </span>
        </h1>

        {/* 2-Line Centered Supporting Text */}
        <p className="wk-ai-hero-exact__subtitle">
          We build secure, scalable AI solutions that drive
          <br />
          measurable business growth.
        </p>
      </div>
    </section>
  );
};
