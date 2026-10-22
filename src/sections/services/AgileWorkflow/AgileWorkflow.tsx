'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import agileWorkflowImg from '../../../assets/services/Agile_workflow.png';
import { getImgSrc } from '../../../utils/image';
import './AgileWorkflow.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 'product-vision',
    title: 'Product Vision',
    description:
      'Clearly define what needs to be built and the business outcome. If this is unclear, everything downstream becomes waste.',
  },
  {
    id: 'backlog-creation',
    title: 'Backlog Creation',
    description:
      'Break down requirements into prioritized, high-impact user stories with clear acceptance criteria and technical scope.',
  },
  {
    id: 'sprint-planning',
    title: 'Sprint Planning',
    description:
      'Align team capacity with sprint goals, estimating effort and committing to deliverable milestones with zero ambiguity.',
  },
  {
    id: 'development-testing',
    title: 'Development + Testing',
    description:
      'Execute rapid, continuous development cycles paired with automated testing to maintain velocity without sacrificing quality.',
  },
  {
    id: 'sprint-review',
    title: 'Sprint Review',
    description:
      'Demonstrate working increments to stakeholders, gather actionable feedback, and validate deliverables against business goals.',
  },
  {
    id: 'retrospective',
    title: 'Retrospective',
    description:
      'Analyze sprint outcomes, identify operational friction, and implement immediate process improvements for the next iteration.',
  },
];

export const AgileWorkflow: React.FC = () => {
  // Product Vision open by default per Figma reference
  const [openId, setOpenId] = useState<string | null>('product-vision');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const accordionItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      });

      // 1. Reveal header with short fade and 10px upward movement
      if (headerRef.current) {
        const title = headerRef.current.querySelector('.wk-agile-workflow__title');
        const subtitle = headerRef.current.querySelector('.wk-agile-workflow__subtitle');

        tl.fromTo(
          [title, subtitle],
          { opacity: 0, y: 10, filter: 'blur(5px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.55,
            stagger: 0.1,
            ease: 'power2.out',
          }
        );
      }

      // 2. Reveal illustration from below
      if (visualRef.current) {
        tl.fromTo(
          visualRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          '-=0.3'
        );
      }

      // 3. Reveal accordion items in a controlled stagger
      if (accordionItemsRef.current.length > 0) {
        tl.fromTo(
          accordionItemsRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.07,
            ease: 'power2.out',
            clearProps: 'transform',
          },
          '-=0.5'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="wk-agile-workflow" aria-labelledby="agile-workflow-heading">
      <div className="wk-agile-workflow__container">
        {/* Section Header */}
        <div ref={headerRef} className="wk-agile-workflow__header">
          <h2 id="agile-workflow-heading" className="wk-agile-workflow__title">
            <span className="wk-agile-workflow__title-blue">Agile workflows</span> that deliver
            real results
          </h2>
          <p className="wk-agile-workflow__subtitle">
            We streamline planning, execution, and iteration to help teams ship faster with fewer
            blockers.
          </p>
        </div>

        {/* 2-Column Grid: Left Illustration + Right Accordion */}
        <div className="wk-agile-workflow__grid">
          {/* Left Column: 3D Illustration Card */}
          <div ref={visualRef} className="wk-agile-workflow__visual-col">
            <div className="wk-agile-workflow__image-card">
              <img
                src={getImgSrc(agileWorkflowImg)}
                alt="Agile workflow concept showing open 3D box with taking off paper airplane"
                className="wk-agile-workflow__image"
                width={573}
                height={702}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="wk-agile-workflow__accordion-col">
            <div className="wk-agile-workflow__accordion-list" role="list">
              {WORKFLOW_STEPS.map((step, index) => {
                const isOpen = openId === step.id;
                const headerId = `wk-agile-header-${step.id}`;
                const panelId = `wk-agile-panel-${step.id}`;

                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      accordionItemsRef.current[index] = el;
                    }}
                    role="listitem"
                    className={`wk-agile-workflow__item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      id={headerId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => handleToggle(step.id)}
                      className="wk-agile-workflow__trigger"
                    >
                      <span className="wk-agile-workflow__item-title">{step.title}</span>
                      <span className="wk-agile-workflow__icon-wrap" aria-hidden="true">
                        {isOpen ? (
                          /* Minus Icon provided by Figma */
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 45 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="wk-agile-workflow__icon wk-agile-workflow__icon--minus"
                          >
                            <path
                              d="M35.625 24.3711H9.375V20.6211H35.625V24.3711Z"
                              fill="currentColor"
                            />
                          </svg>
                        ) : (
                          /* Plus Icon provided by Figma */
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 45 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="wk-agile-workflow__icon wk-agile-workflow__icon--plus"
                          >
                            <path
                              d="M35.625 24.3711H24.375V35.6211H20.625V24.3711H9.375V20.6211H20.625V9.37109H24.375V20.6211H35.625V24.3711Z"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                      </span>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      className="wk-agile-workflow__panel"
                    >
                      <div className="wk-agile-workflow__panel-content">
                        <p className="wk-agile-workflow__description">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
