'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DevelopmentApproach.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProcessStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  position: 'above' | 'below';
  icon: React.ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discovery',
    stepNumber: 1,
    title: 'Discovery',
    description: 'Understanding requirements and defining project goals.',
    position: 'below',
    icon: (
      <svg
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wk-dev-appr__icon-svg"
        aria-hidden="true"
      >
        <path d="M10.7334 30.4097H25.0439V33.9873H10.7334V30.4097Z" fill="currentColor" />
        <path
          d="M5.36694 33.9873C6.35487 33.9873 7.15575 33.1864 7.15575 32.1985C7.15575 31.2105 6.35487 30.4097 5.36694 30.4097C4.379 30.4097 3.57812 31.2105 3.57812 32.1985C3.57812 33.1864 4.379 33.9873 5.36694 33.9873Z"
          fill="currentColor"
        />
        <path
          d="M23.2546 26.832C24.2426 26.832 25.0434 26.0311 25.0434 25.0432C25.0434 24.0553 24.2426 23.2544 23.2546 23.2544C22.2667 23.2544 21.4658 24.0553 21.4658 25.0432C21.4658 26.0311 22.2667 26.832 23.2546 26.832Z"
          fill="currentColor"
        />
        <path
          d="M3.57812 23.2546H17.8886V26.8322H3.57812V23.2546ZM10.7334 16.0994H25.0438V19.677H10.7334V16.0994Z"
          fill="currentColor"
        />
        <path
          d="M5.36694 19.677C6.35487 19.677 7.15575 18.8761 7.15575 17.8882C7.15575 16.9002 6.35487 16.0994 5.36694 16.0994C4.379 16.0994 3.57812 16.9002 3.57812 17.8882C3.57812 18.8761 4.379 19.677 5.36694 19.677Z"
          fill="currentColor"
        />
        <path
          d="M53.6647 51.16L40.4275 37.9228C43.1107 34.3452 44.7206 29.8731 44.7206 25.0434C44.7206 13.2372 35.061 3.57764 23.2549 3.57764C17.3518 3.57764 11.8065 5.90309 7.69226 10.3751L10.3755 12.8794C13.5953 9.12295 18.2462 7.15526 23.2549 7.15526C33.0934 7.15526 41.143 15.2049 41.143 25.0434C41.143 34.8818 33.0934 42.9315 23.2549 42.9315C17.8885 42.9315 12.8798 40.606 9.48107 36.4917L6.79785 38.8172C10.7332 43.647 16.8152 46.5091 23.2549 46.5091C28.9791 46.5091 34.1666 44.1836 38.102 40.606L51.1603 53.6643L53.6647 51.16Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'planning',
    stepNumber: 2,
    title: 'Planning',
    description: 'Structuring architecture and technical roadmap.',
    position: 'above',
    icon: (
      <svg
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wk-dev-appr__icon-svg"
        aria-hidden="true"
      >
        <path
          d="M5.18066 19.6866H44.554M5.18066 19.6866V42.4817C5.18066 43.0313 5.39899 43.5584 5.78762 43.9471C6.17625 44.3357 6.70334 44.554 7.25295 44.554H42.4818C43.0314 44.554 43.5585 44.3357 43.9471 43.9471C44.3357 43.5584 44.554 43.0313 44.554 42.4817V19.6866M5.18066 19.6866V10.3613C5.18066 9.81174 5.39899 9.28465 5.78762 8.89602C6.17625 8.50739 6.70334 8.28906 7.25295 8.28906H42.4818C43.0314 8.28906 43.5585 8.50739 43.9471 8.89602C44.3357 9.28465 44.554 9.81174 44.554 10.3613V19.6866"
          strokeWidth="2.81518"
          strokeLinejoin="round"
          stroke="currentColor"
        />
        <path
          d="M16.5771 32.1204L22.794 38.3373L35.2277 25.9036"
          strokeWidth="2.81518"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
        <path
          d="M16.5771 5.18066V13.4698M33.1554 5.18066V13.4698"
          strokeWidth="2.81518"
          strokeLinecap="round"
          stroke="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'development',
    stepNumber: 3,
    title: 'Development',
    description: 'Building scalable features using agile methodology.',
    position: 'below',
    icon: (
      <svg
        viewBox="0 0 55 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wk-dev-appr__icon-svg"
        aria-hidden="true"
      >
        <path
          d="M17.1173 5.38624C16.1679 4.46045 14.6285 4.46045 13.679 5.38624L0.712101 18.0298C-0.237367 18.9556 -0.237367 20.4567 0.712101 21.3825L13.679 34.0261C14.6285 34.9519 16.1679 34.9519 17.1173 34.0261C18.0668 33.1003 18.0668 31.5991 17.1173 30.6733L5.86965 19.706L17.1173 8.73887C18.0668 7.81307 18.0668 6.31206 17.1173 5.38624Z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
        />
        <path
          d="M31.8644 0.0607339C33.1908 0.357063 34.0217 1.65423 33.7202 2.95807L25.5099 38.466C25.2087 39.7698 23.8888 40.5865 22.5624 40.2901C21.2358 39.9938 20.4048 38.6965 20.7063 37.3927L28.9168 1.88499C29.218 0.581148 30.5379 -0.235595 31.8644 0.0607339Z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
        />
        <path
          d="M37.3098 5.38624C38.2593 4.46045 39.7985 4.46045 40.748 5.38624L53.715 18.0298C54.6645 18.9556 54.6645 20.4567 53.715 21.3825L40.748 34.0261C39.7985 34.9519 38.2593 34.9519 37.3098 34.0261C36.3603 33.1003 36.3603 31.5991 37.3098 30.6733L48.5574 19.706L37.3098 8.73887C36.3603 7.81307 36.3603 6.31206 37.3098 5.38624Z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'testing',
    stepNumber: 4,
    title: 'Testing',
    description: 'Ensuring quality through continuous testing and QA.',
    position: 'above',
    icon: (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wk-dev-appr__icon-svg"
        aria-hidden="true"
      >
        <path
          d="M26.5284 35.7566C24.693 35.7566 22.9327 35.0274 21.6348 33.7296C20.3369 32.4317 19.6078 30.6714 19.6078 28.8359V26.529M26.5284 35.7566C28.3639 35.7566 30.1242 35.0274 31.4221 33.7296C32.7199 32.4317 33.4491 30.6714 33.4491 28.8359V24.2222M26.5284 35.7566V24.2222M19.6078 26.529V24.2222M19.6078 26.529H16.1475M19.6078 24.2222C19.6078 22.3867 20.3369 20.6264 21.6348 19.3285C22.9327 18.0306 24.693 17.3015 26.5284 17.3015C28.3639 17.3015 30.1242 18.0306 31.4221 19.3285C32.7199 20.6264 33.4491 22.3867 33.4491 24.2222M19.6078 24.2222H26.5284M33.4491 24.2222H26.5284M33.6152 26.529H36.9094M33.4491 32.2962L35.7559 33.4497M19.6078 32.2962L17.3009 33.4497M33.4491 20.7618L35.7559 19.6084M19.6078 20.7618L17.3009 19.6084M42.6766 42.6772L50.7507 50.7513"
          strokeWidth="2.34598"
          strokeLinecap="round"
          stroke="currentColor"
        />
        <path
          d="M15.5711 7.54344C20.1759 4.8862 25.5896 3.99343 30.8037 5.03145C36.0178 6.06947 40.6768 8.96749 43.9128 13.1857C47.1488 17.4038 48.7412 22.6545 48.3932 27.9595C48.0452 33.2646 45.7806 38.2622 42.0213 42.0215C38.262 45.7808 33.2643 48.0454 27.9593 48.3934C22.6542 48.7414 17.4036 47.1491 13.1854 43.9131C8.96724 40.6771 6.06922 36.0181 5.0312 30.8039C3.99318 25.5898 4.88595 20.1761 7.5432 15.5714"
          strokeWidth="2.34598"
          strokeLinecap="round"
          stroke="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'deployment',
    stepNumber: 5,
    title: 'Deployment',
    description: 'Releasing stable builds with monitoring setup.',
    position: 'below',
    icon: (
      <svg
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wk-dev-appr__icon-svg"
        aria-hidden="true"
      >
        <path
          d="M44.0656 1.91575C44.0656 1.91575 31.5587 1.03827 26.8226 5.74752C26.7786 5.81841 19.1591 13.4111 19.1591 13.4111L9.57968 15.3269L3.83203 19.1587L19.1591 26.8222L26.8226 42.1493L30.6544 36.4017L32.5703 26.8222C32.5703 26.8222 40.1629 19.2028 40.2338 19.1587C44.9431 14.4226 44.0656 1.91575 44.0656 1.91575ZM32.5703 15.3269C32.0622 15.3269 31.5749 15.1251 31.2156 14.7658C30.8563 14.4065 30.6544 13.9192 30.6544 13.4111C30.6544 12.9029 30.8563 12.4156 31.2156 12.0563C31.5749 11.697 32.0622 11.4952 32.5703 11.4952C33.0784 11.4952 33.5657 11.697 33.925 12.0563C34.2843 12.4156 34.4862 12.9029 34.4862 13.4111C34.4862 13.9192 34.2843 14.4065 33.925 14.7658C33.5657 15.1251 33.0784 15.3269 32.5703 15.3269ZM13.4115 32.5699C11.4956 30.654 7.6638 30.654 5.74792 32.5699C3.83203 34.4858 3.83203 42.1493 3.83203 42.1493C3.83203 42.1493 11.4956 42.1493 13.4115 40.2334C15.3273 38.3175 15.3273 34.4858 13.4115 32.5699Z"
          strokeWidth="2.81518"
          stroke="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'improvement',
    stepNumber: 6,
    title: 'Improvement',
    description: 'Continuous optimization and system enhancements.',
    position: 'above',
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wk-dev-appr__icon-svg"
        aria-hidden="true"
      >
        <path
          d="M43.8699 53.0226L38.7052 47.8579L35.8936 50.6696L43.8699 58.6459L59.8226 42.6932L57.0109 39.8816L43.8699 53.0226Z"
          fill="currentColor"
        />
        <path
          d="M31.9052 35.8936C34.1078 35.8936 35.8933 34.108 35.8933 31.9054C35.8933 29.7028 34.1078 27.9172 31.9052 27.9172C29.7026 27.9172 27.917 29.7028 27.917 31.9054C27.917 34.108 29.7026 35.8936 31.9052 35.8936Z"
          fill="currentColor"
        />
        <path
          d="M31.9049 43.8699C29.5386 43.8699 27.2254 43.1682 25.2578 41.8535C23.2903 40.5389 21.7567 38.6703 20.8512 36.484C19.9456 34.2978 19.7087 31.8922 20.1703 29.5713C20.632 27.2504 21.7715 25.1185 23.4448 23.4452C25.118 21.772 27.2499 20.6325 29.5708 20.1708C31.8917 19.7092 34.2973 19.9461 36.4836 20.8517C38.6698 21.7572 40.5384 23.2908 41.8531 25.2583C43.1677 27.2259 43.8694 29.5391 43.8694 31.9054C43.8657 35.0775 42.604 38.1185 40.361 40.3615C38.1181 42.6045 35.077 43.8662 31.9049 43.8699ZM31.9049 23.9291C30.3274 23.9291 28.7852 24.3969 27.4735 25.2733C26.1618 26.1498 25.1395 27.3955 24.5358 28.853C23.9321 30.3105 23.7741 31.9143 24.0819 33.4615C24.3896 35.0088 25.1493 36.43 26.2648 37.5455C27.3803 38.6611 28.8016 39.4207 30.3488 39.7285C31.8961 40.0363 33.4999 39.8783 34.9573 39.2746C36.4148 38.6709 37.6606 37.6485 38.537 36.3368C39.4135 35.0251 39.8813 33.483 39.8813 31.9054C39.8786 29.7908 39.0374 27.7635 37.5421 26.2682C36.0469 24.7729 34.0196 23.9317 31.9049 23.9291Z"
          fill="currentColor"
        />
        <path
          d="M55.8346 31.9053C55.8346 27.1726 54.4312 22.5462 51.8018 18.6111C49.1725 14.676 45.4353 11.6089 41.0628 9.79782C36.6904 7.98669 31.879 7.51281 27.2373 8.43612C22.5955 9.35942 18.3317 11.6384 14.9852 14.985C11.6387 18.3315 9.35967 22.5952 8.43636 27.237C7.51306 31.8788 7.98693 36.6901 9.79806 41.0626C11.6092 45.435 14.6762 49.1722 18.6113 51.8016C22.5464 54.4309 27.1729 55.8343 31.9056 55.8343V51.8462C27.9617 51.8462 24.1063 50.6767 20.827 48.4855C17.5478 46.2944 14.9919 43.1801 13.4826 39.5364C11.9734 35.8926 11.5785 31.8832 12.3479 28.0151C13.1173 24.1469 15.0165 20.5938 17.8053 17.805C20.5941 15.0163 24.1472 13.1171 28.0153 12.3477C31.8835 11.5782 35.8929 11.9731 39.5366 13.4824C43.1803 14.9917 46.2946 17.5475 48.4858 20.8268C50.6769 24.1061 51.8464 27.9614 51.8464 31.9053H55.8346Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export const DevelopmentApproach: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 6
      : 0
  );
  const [hasAnimated, setHasAnimated] = useState<boolean>(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Master Section Entrance & Timeline Sequence
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => setHasAnimated(true),
        },
      });

      // 1A. Subtle Zoom-in Section Entrance
      if (containerRef.current) {
        masterTl.fromTo(
          containerRef.current,
          {
            scale: 0.96,
            opacity: 0,
            filter: 'blur(5px)',
          },
          {
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.7,
            ease: 'power2.out',
            clearProps: 'transform,filter',
          }
        );
      }

      // 1B. Heading and Description blur-to-clear reveal with max 10px vertical movement
      if (headerRef.current) {
        const title = headerRef.current.querySelector('.wk-dev-appr__title');
        const subtitle = headerRef.current.querySelector('.wk-dev-appr__subtitle');

        masterTl.fromTo(
          [title, subtitle],
          { opacity: 0, y: 10, filter: 'blur(5px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.55,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.45'
        );
      }

      // 1C. Timeline Sequence: Preserve approved circle-and-path animation
      PROCESS_STEPS.forEach((step, idx) => {
        const stepNum = idx + 1;
        const nodeSelector = `.wk-dev-appr__step-node--${step.id}`;
        const circleSelector = `${nodeSelector} .wk-dev-appr__circle`;
        const vLineSelector = `${nodeSelector} .wk-dev-appr__v-line`;
        const hDividerSelector = `${nodeSelector} .wk-dev-appr__divider`;
        const textSelector = `${nodeSelector} .wk-dev-appr__content`;
        const hSegmentSelector = `.wk-dev-appr__h-line-seg--${idx}`;

        // Activate circle
        masterTl.to(
          circleSelector,
          {
            backgroundColor: '#1887C9',
            borderColor: '#1887C9',
            boxShadow: '0 6px 20px rgba(24, 135, 201, 0.32)',
            scale: 1.05,
            duration: 0.2,
            ease: 'back.out(1.5)',
            onStart: () => setActiveStep(stepNum),
          },
          idx === 0 ? '-=0.15' : undefined
        );

        masterTl.to(
          circleSelector,
          {
            scale: 1,
            duration: 0.12,
            ease: 'power2.out',
          },
          '>-0.05'
        );

        // Draw vertical line, divider, and text concurrently
        masterTl.fromTo(
          vLineSelector,
          { scaleY: 0, transformOrigin: step.position === 'below' ? 'top center' : 'bottom center' },
          { scaleY: 1, duration: 0.2, ease: 'power2.out' },
          '<'
        );

        masterTl.fromTo(
          hDividerSelector,
          { scaleX: 0, opacity: 0, transformOrigin: 'center center' },
          { scaleX: 1, opacity: 1, duration: 0.2, ease: 'power2.out' },
          '<+0.05'
        );

        masterTl.fromTo(
          textSelector,
          { opacity: 0, y: step.position === 'below' ? 10 : -10 },
          { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out' },
          '<+0.05'
        );

        // Draw connecting horizontal path to next node
        if (idx < PROCESS_STEPS.length - 1) {
          masterTl.fromTo(
            hSegmentSelector,
            { strokeDashoffset: 200 },
            { strokeDashoffset: 0, duration: 0.28, ease: 'power1.inOut' },
            '>-0.05'
          );
        }
      });

      masterTl.add(() => {
        setActiveStep(6);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="wk-dev-appr"
      aria-labelledby="dev-approach-heading"
    >
      <div ref={containerRef} className="wk-dev-appr__container">
        {/* Section Heading & Subtitle */}
        <div ref={headerRef} className="wk-dev-appr__header">
          <h2 id="dev-approach-heading" className="wk-dev-appr__title">
            <span className="wk-dev-appr__title-blue">Development</span> Approach
          </h2>
          <p className="wk-dev-appr__subtitle">
            Our process ensures speed, quality, and long-term maintainability.
          </p>
        </div>

        {/* Desktop & Tablet Timeline View */}
        <div className="wk-dev-appr__timeline-wrapper" role="region" aria-label="Process Timeline">
          {/* Background Connecting SVG Line Behind Circles */}
          <svg
            className="wk-dev-appr__connecting-svg"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Full baseline track (subtle neutral line) */}
            <line
              x1="0"
              y1="2"
              x2="1000"
              y2="2"
              className="wk-dev-appr__base-line"
            />
            {/* 5 Animated Blue Path Segments */}
            {[0, 1, 2, 3, 4].map((segIdx) => {
              const x1 = (segIdx / 5) * 1000;
              const x2 = ((segIdx + 1) / 5) * 1000;
              return (
                <line
                  key={segIdx}
                  x1={x1}
                  y1="2"
                  x2={x2}
                  y2="2"
                  className={`wk-dev-appr__h-line-seg wk-dev-appr__h-line-seg--${segIdx}`}
                  strokeDasharray="200"
                  strokeDashoffset={hasAnimated ? '0' : '200'}
                />
              );
            })}
          </svg>

          {/* 6 Steps Columns */}
          <div className="wk-dev-appr__grid" role="list">
            {PROCESS_STEPS.map((step) => {
              const isActive = activeStep >= step.stepNumber;
              return (
                <div
                  key={step.id}
                  role="listitem"
                  className={`wk-dev-appr__step-node wk-dev-appr__step-node--${step.id} wk-dev-appr__step-node--${step.position} ${
                    isActive ? 'wk-dev-appr__step-node--active' : ''
                  }`}
                >
                  {/* Top Block (Text for above steps, Spacer for below steps) */}
                  <div className="wk-dev-appr__slot wk-dev-appr__slot--top">
                    {step.position === 'above' && (
                      <div className="wk-dev-appr__slot-inner">
                        <div className="wk-dev-appr__content">
                          <h3 className="wk-dev-appr__step-title">{step.title}</h3>
                          <p className="wk-dev-appr__step-desc">{step.description}</p>
                        </div>
                        <div className="wk-dev-appr__divider" />
                        <div className="wk-dev-appr__v-line" />
                      </div>
                    )}
                  </div>

                  {/* Center Node Circle */}
                  <div className="wk-dev-appr__circle-wrapper">
                    <div
                      className={`wk-dev-appr__circle ${
                        isActive ? 'wk-dev-appr__circle--active' : ''
                      }`}
                      aria-label={`Step ${step.stepNumber}: ${step.title}`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Bottom Block (Text for below steps, Spacer for above steps) */}
                  <div className="wk-dev-appr__slot wk-dev-appr__slot--bottom">
                    {step.position === 'below' && (
                      <div className="wk-dev-appr__slot-inner">
                        <div className="wk-dev-appr__v-line" />
                        <div className="wk-dev-appr__divider" />
                        <div className="wk-dev-appr__content">
                          <h3 className="wk-dev-appr__step-title">{step.title}</h3>
                          <p className="wk-dev-appr__step-desc">{step.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Process Flow (< 768px) */}
        <div className="wk-dev-appr__mobile-list" role="list">
          <div className="wk-dev-appr__mobile-spine" aria-hidden="true" />
          {PROCESS_STEPS.map((step) => {
            const isActive = activeStep >= step.stepNumber;
            return (
              <div
                key={`mobile-${step.id}`}
                role="listitem"
                className={`wk-dev-appr__mobile-item ${
                  isActive ? 'wk-dev-appr__mobile-item--active' : ''
                }`}
              >
                <div className="wk-dev-appr__mobile-node-col">
                  <div
                    className={`wk-dev-appr__circle wk-dev-appr__circle--mobile ${
                      isActive ? 'wk-dev-appr__circle--active' : ''
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>
                <div className="wk-dev-appr__mobile-content-col">
                  <h3 className="wk-dev-appr__step-title">{step.title}</h3>
                  <p className="wk-dev-appr__step-desc">{step.description}</p>
                  <div className="wk-dev-appr__mobile-divider" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
