'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROVEN_DELIVERY_STEPS } from './provenDeliveryProcessData';
import './ProvenDeliveryProcess.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProvenDeliveryProcess: React.FC = () => {
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
      setActiveStep(6);
      setHasAnimated(true);
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

      // 1A. Subtle Container Reveal
      if (containerRef.current) {
        masterTl.fromTo(
          containerRef.current,
          {
            scale: 0.98,
            opacity: 0,
            filter: 'blur(4px)',
          },
          {
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'transform,filter',
          }
        );
      }

      // 1B. Heading and Subtitle blur-to-clear reveal
      if (headerRef.current) {
        const title = headerRef.current.querySelector('.wk-delivery-proc__title');
        const subtitle = headerRef.current.querySelector(
          '.wk-delivery-proc__subtitle'
        );

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
          '-=0.4'
        );
      }

      // 1C. Timeline Sequence: Progressive circle and path activation
      PROVEN_DELIVERY_STEPS.forEach((step, idx) => {
        const stepNum = idx + 1;
        const nodeSelector = `.wk-delivery-proc__step-node--${step.id}`;
        const circleSelector = `${nodeSelector} .wk-delivery-proc__circle`;
        const vLineSelector = `${nodeSelector} .wk-delivery-proc__v-line`;
        const hDividerSelector = `${nodeSelector} .wk-delivery-proc__divider`;
        const textSelector = `${nodeSelector} .wk-delivery-proc__content`;
        const hSegmentSelector = `.wk-delivery-proc__h-line-seg--${idx}`;

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

        // Draw vertical connector, horizontal divider, and text
        masterTl.fromTo(
          vLineSelector,
          {
            scaleY: 0,
            transformOrigin:
              step.position === 'below' ? 'top center' : 'bottom center',
          },
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

        // Draw connecting horizontal line segment to next node
        if (idx < PROVEN_DELIVERY_STEPS.length - 1) {
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
      id="a-proven-delivery-process"
      className="wk-delivery-proc"
      aria-labelledby="delivery-process-heading"
    >
      <div ref={containerRef} className="wk-delivery-proc__container">
        {/* Section Heading & Subtitle */}
        <div ref={headerRef} className="wk-delivery-proc__header">
          <h2 id="delivery-process-heading" className="wk-delivery-proc__title">
            <span className="wk-delivery-proc__title-accent">A Proven</span>{' '}
            Delivery Process
          </h2>
          <p className="wk-delivery-proc__subtitle">
            We follow a structured process to ensure timely delivery, quality
            results, and lasting business value.
          </p>
        </div>

        {/* Desktop & Tablet Timeline View */}
        <div
          className="wk-delivery-proc__timeline-wrapper"
          role="region"
          aria-label="Delivery Process Timeline"
        >
          {/* Continuous Horizontal Connecting SVG Line Passing Through Centers */}
          <svg
            className="wk-delivery-proc__connecting-svg"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Full baseline track */}
            <line
              x1="0"
              y1="2"
              x2="1000"
              y2="2"
              className="wk-delivery-proc__base-line"
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
                  className={`wk-delivery-proc__h-line-seg wk-delivery-proc__h-line-seg--${segIdx}`}
                  strokeDasharray="200"
                  strokeDashoffset={hasAnimated ? '0' : '200'}
                />
              );
            })}
          </svg>

          {/* 6 Step Columns */}
          <div className="wk-delivery-proc__grid" role="list">
            {PROVEN_DELIVERY_STEPS.map((step) => {
              const isActive = activeStep >= step.stepNumber;
              return (
                <div
                  key={step.id}
                  role="listitem"
                  className={`wk-delivery-proc__step-node wk-delivery-proc__step-node--${
                    step.id
                  } wk-delivery-proc__step-node--${step.position} ${
                    isActive ? 'wk-delivery-proc__step-node--active' : ''
                  }`}
                >
                  {/* Top Slot (Content for above steps, Spacer for below steps) */}
                  <div className="wk-delivery-proc__slot wk-delivery-proc__slot--top">
                    {step.position === 'above' && (
                      <div className="wk-delivery-proc__slot-inner">
                        <div className="wk-delivery-proc__content">
                          <h3 className="wk-delivery-proc__step-title">
                            {step.title}
                          </h3>
                          <p className="wk-delivery-proc__step-desc">
                            {step.description}
                          </p>
                        </div>
                        <div className="wk-delivery-proc__divider" />
                        <div className="wk-delivery-proc__v-line" />
                      </div>
                    )}
                  </div>

                  {/* Center Node Circle */}
                  <div className="wk-delivery-proc__circle-wrapper">
                    <div
                      className={`wk-delivery-proc__circle ${
                        isActive ? 'wk-delivery-proc__circle--active' : ''
                      }`}
                      aria-label={`Step ${step.stepNumber}: ${step.title}`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Bottom Slot (Content for below steps, Spacer for above steps) */}
                  <div className="wk-delivery-proc__slot wk-delivery-proc__slot--bottom">
                    {step.position === 'below' && (
                      <div className="wk-delivery-proc__slot-inner">
                        <div className="wk-delivery-proc__v-line" />
                        <div className="wk-delivery-proc__divider" />
                        <div className="wk-delivery-proc__content">
                          <h3 className="wk-delivery-proc__step-title">
                            {step.title}
                          </h3>
                          <p className="wk-delivery-proc__step-desc">
                            {step.description}
                          </p>
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
        <div className="wk-delivery-proc__mobile-list" role="list">
          <div className="wk-delivery-proc__mobile-spine" aria-hidden="true" />
          {PROVEN_DELIVERY_STEPS.map((step) => {
            const isActive = activeStep >= step.stepNumber;
            return (
              <div
                key={`mobile-${step.id}`}
                role="listitem"
                className={`wk-delivery-proc__mobile-item ${
                  isActive ? 'wk-delivery-proc__mobile-item--active' : ''
                }`}
              >
                <div className="wk-delivery-proc__mobile-node-col">
                  <div
                    className={`wk-delivery-proc__circle wk-delivery-proc__circle--mobile ${
                      isActive ? 'wk-delivery-proc__circle--active' : ''
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>
                <div className="wk-delivery-proc__mobile-content-col">
                  <h3 className="wk-delivery-proc__step-title">{step.title}</h3>
                  <p className="wk-delivery-proc__step-desc">
                    {step.description}
                  </p>
                  <div className="wk-delivery-proc__mobile-divider" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

