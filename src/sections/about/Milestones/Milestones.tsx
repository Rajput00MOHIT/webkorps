'use client';

import React, { useState, useEffect, useRef } from 'react';
import './Milestones.css';

export interface MilestoneItem {
  year: number;
  subtitle: string;
  title: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
}

const MILESTONES_DATA: MilestoneItem[] = [
  {
    year: 2016,
    subtitle: 'Foundation & Inception',
    title: 'Where The Journey Began',
    description: 'Webkorps was founded with a mission to engineer cutting-edge digital products and enterprise software solutions.',
    stats: [
      { value: '1+', label: 'Years in Business' },
      { value: '15+', label: 'Projects Delivered' },
    ],
  },
  {
    year: 2017,
    subtitle: 'Expanding Capabilities',
    title: 'Scaling Engineering Excellence',
    description: 'Expanded our full-stack engineering team and established global client partnerships across North America.',
    stats: [
      { value: '2+', label: 'Years in Business' },
      { value: '40+', label: 'Projects Delivered' },
    ],
  },
  {
    year: 2018,
    subtitle: 'Enterprise Delivery',
    title: 'Enterprise Platform Growth',
    description: 'Delivered mission-critical cloud and enterprise mobility solutions for fast-growing tech businesses.',
    stats: [
      { value: '3+', label: 'Years in Business' },
      { value: '85+', label: 'Projects Delivered' },
    ],
  },
  {
    year: 2019,
    subtitle: 'Global Reach',
    title: 'International Footprint',
    description: 'Expanded service footprint across 10+ countries with specialized offshore and dedicated development teams.',
    stats: [
      { value: '4+', label: 'Years in Business' },
      { value: '140+', label: 'Projects Delivered' },
    ],
  },
  {
    year: 2020,
    subtitle: 'Resilience & Innovation',
    title: 'Digital Transformation Surge',
    description: 'Helped enterprises accelerate cloud adoption and remote digital operations amidst rapid global shifts.',
    stats: [
      { value: '5+', label: 'Years in Business' },
      { value: '200+', label: 'Projects Delivered' },
    ],
  },
  {
    year: 2021,
    subtitle: 'Emerging Tech Integration',
    title: 'Next-Gen Tech Scaling',
    description: 'Pioneered AI/ML, IoT, and high-performance cloud architectures for mission-critical enterprise platforms.',
    stats: [
      { value: '6+', label: 'Years in Business' },
      { value: '260+', label: 'Projects Delivered' },
    ],
  },
  {
    year: 2022,
    subtitle: 'Strategic Partnerships',
    title: 'Global Alliance Growth',
    description: 'Forged enterprise alliances and OEM technology partnerships, scaling delivery teams to 150+ engineers.',
    stats: [
      { value: '7+', label: 'Years in Business' },
      { value: '300+', label: 'Projects Delivered' },
    ],
  },
  {
    year: 2023,
    subtitle: 'Accelerating Growth',
    title: 'Scaling Global Delivery',
    description: 'Expanded delivery centers and high-velocity engineering practices to accelerate product rollouts for global clients.',
    stats: [
      { value: '8+', label: 'Years in Business' },
      { value: '350+', label: 'Projects Delivered' },
    ],
  },
  {
    year: 2024,
    subtitle: 'GenAI & Scale',
    title: 'Intelligent Automation & AI',
    description: 'Integrated Generative AI frameworks, enterprise data platforms, and ISO 27001 compliance standards.',
    stats: [
      { value: '9+', label: 'Years in Business' },
      { value: '420+', label: 'Projects Delivered' },
    ],
  },
  {
    year: 2025,
    subtitle: 'Global Recognition',
    title: 'Industry Leadership',
    description: 'Recognized as a leading technology partner serving 30+ countries with 500+ successful digital engagements.',
    stats: [
      { value: '10+', label: 'Years in Business' },
      { value: '500+', label: 'Projects Delivered' },
    ],
  },
  {
    year: 2026,
    subtitle: 'Future of Digital Engineering',
    title: 'Shaping Tomorrow\'s Tech',
    description: 'Driving autonomous AI agents, cloud-native modernization, and impactful digital solutions worldwide.',
    stats: [
      { value: '10+', label: 'Years in Business' },
      { value: '500+', label: 'Projects Delivered' },
    ],
  },
];

// SVG Geometry Constants for a Broad, Majestic Semicircular Arc
const CX = 550;
const CY = 500;
const RADIUS = 440;
const TOTAL_ARC_LENGTH = Math.PI * RADIUS; // ~1382.3px

export const Milestones: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0); // Starts at 2016 (index 0)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasAutoPlayedRef = useRef(false);

  // Stop any active autoplay walkthrough
  const stopAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  };

  // Intersection observer for entrance animation & automated walkthrough
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();

          // Trigger smooth sequential walkthrough from 2016 to 2026 once
          if (!hasAutoPlayedRef.current) {
            hasAutoPlayedRef.current = true;
            setActiveIndex(0);

            let currentStep = 0;
            const totalSteps = MILESTONES_DATA.length - 1; // 10 steps (up to 2026)

            autoPlayTimerRef.current = setInterval(() => {
              currentStep += 1;
              if (currentStep <= totalSteps) {
                setActiveIndex(currentStep);
              } else {
                stopAutoPlay();
              }
            }, 2600); // 2.6 seconds per year for smooth, relaxed storytelling
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      stopAutoPlay();
    };
  }, []);

  // Handle user manual click on any year node
  const handleYearClick = (index: number) => {
    stopAutoPlay(); // Immediately stop the intro walkthrough on user interaction
    setActiveIndex(index);
  };

  const activeMilestone = MILESTONES_DATA[activeIndex];

  // Derive exact chronological coordinates along the semicircle
  // Index 0 (2016) -> Lower Left (theta = PI)
  // Index 5 (2021) -> Top Center Apex (theta = PI / 2)
  // Index 10 (2026) -> Lower Right (theta = 0)
  const getNodeCoordinates = (index: number, r: number) => {
    const totalSteps = MILESTONES_DATA.length - 1; // 10 intervals
    const t = index / totalSteps; // 0 to 1
    const theta = Math.PI * (1 - t); // PI (left) -> PI/2 (top) -> 0 (right)
    const x = CX + r * Math.cos(theta);
    const y = CY - r * Math.sin(theta);
    return { x, y, theta };
  };

  // Label coordinate offset radially outward
  const getLabelCoordinates = (index: number) => {
    const totalSteps = MILESTONES_DATA.length - 1;
    const t = index / totalSteps;
    const theta = Math.PI * (1 - t);

    const offset = index === 5 ? 36 : 42;
    const x = CX + (RADIUS + offset) * Math.cos(theta);
    const y = CY - (RADIUS + offset) * Math.sin(theta);
    return { x, y };
  };

  // Progress line stroke dash offset (from left 2016 up to activeIndex)
  const progressFraction = activeIndex / (MILESTONES_DATA.length - 1);
  const progressOffset = TOTAL_ARC_LENGTH * (1 - progressFraction);

  return (
    <section
      ref={sectionRef}
      className={`wk-milestones ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="milestones-heading"
    >
      <div className="site-container wk-milestones__container">
        {/* Section Header */}
        <div className="wk-milestones__header">
          <h2 id="milestones-heading" className="wk-milestones__title">
            Our <span className="wk-milestones__title-brand">Milestones</span>
          </h2>
          <p className="wk-milestones__subtitle">
            We Are A trusted Technology &amp; Services Partner Supporting Businesses{' '}
            <span className="wk-milestones__highlight">Across The Globe</span>
          </p>
        </div>

        {/* Timeline Curved Canvas */}
        <div className="wk-milestones__canvas-wrapper">
          <svg
            className="wk-milestones__svg"
            viewBox="0 0 1100 540"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Background Full Arc Path (from Lower-Left 2016 to Lower-Right 2026) */}
            <path
              d={`M ${CX - RADIUS} ${CY} A ${RADIUS} ${RADIUS} 0 0 1 ${CX + RADIUS} ${CY}`}
              className="wk-milestones__path-bg"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Active Blue Progress Arc Path */}
            <path
              d={`M ${CX - RADIUS} ${CY} A ${RADIUS} ${RADIUS} 0 0 1 ${CX + RADIUS} ${CY}`}
              className="wk-milestones__path-progress"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={TOTAL_ARC_LENGTH}
              strokeDashoffset={isVisible ? progressOffset : TOTAL_ARC_LENGTH}
            />

            {/* Year Nodes and Labels */}
            {MILESTONES_DATA.map((item, index) => {
              const { x, y } = getNodeCoordinates(index, RADIUS);
              const labelPos = getLabelCoordinates(index);
              const isCompleted = index < activeIndex;
              const isActive = index === activeIndex;

              return (
                <g
                  key={item.year}
                  className={`wk-milestones__node-group ${isCompleted ? 'is-completed' : ''} ${
                    isActive ? 'is-active' : ''
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Year Node Circle (Clean, without outer ring) */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? '11' : '8'}
                    className="wk-milestones__node-circle"
                  />

                  {/* Year Label Text */}
                  <text
                    x={labelPos.x}
                    y={labelPos.y + 4}
                    textAnchor="middle"
                    className="wk-milestones__node-label"
                  >
                    {item.year}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Interactive Touch/Click Targets Grid */}
          <div
            className="wk-milestones__touch-grid"
            role="tablist"
            aria-label="Milestone years timeline"
          >
            {MILESTONES_DATA.map((item, index) => {
              const { x, y } = getNodeCoordinates(index, RADIUS);
              const leftPercent = (x / 1100) * 100;
              const topPercent = (y / 540) * 100;
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.year}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Select milestone year ${item.year}: ${item.subtitle}`}
                  className={`wk-milestones__touch-btn ${isActive ? 'is-active' : ''}`}
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                  }}
                  onClick={() => handleYearClick(index)}
                >
                  <span className="sr-only">{item.year}</span>
                </button>
              );
            })}
          </div>

          {/* Center Dynamic Milestone Content */}
          <div className="wk-milestones__center-content" key={activeMilestone.year}>
            <span className="wk-milestones__tag">
              {activeMilestone.year} — {activeMilestone.subtitle}
            </span>

            <h3 className="wk-milestones__card-title">
              {activeMilestone.title}
            </h3>

            <p className="wk-milestones__card-desc">
              {activeMilestone.description}
            </p>

            {activeMilestone.stats && activeMilestone.stats.length > 0 && (
              <div className="wk-milestones__stats-row">
                {activeMilestone.stats.map((stat, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="wk-milestones__stat-divider" aria-hidden="true" />}
                    <div className="wk-milestones__stat-item">
                      <span className="wk-milestones__stat-value">{stat.value}</span>
                      <span className="wk-milestones__stat-label">{stat.label}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
