'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import customSoftwareImg from '../../../assets/services/services page/custom_software.png';
import webDevImg from '../../../assets/services/services page/web development.png';
import mobileDevImg from '../../../assets/services/services page/Mobile_app_development.png';
import aiMlImg from '../../../assets/services/services page/AI_ML_development.png';
import cloudAppImg from '../../../assets/services/services page/Cloud_application_development.png';
import enterpriseImg from '../../../assets/services/services page/Enterprice_sofware.png';
import iotImg from '../../../assets/services/services page/IOT.png';
import itStaffImg from '../../../assets/services/services page/IT_Staff.png';
import managedItImg from '../../../assets/services/services page/IT_service.png';
import blockchainImg from '../../../assets/services/services page/blockchain.png';
import { getImgSrc } from '../../../utils/image';
import './ServicesGrid.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceEntry {
  id: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  image: any;
  alt: string;
  href: string;
}

const SERVICES_DATA: ServiceEntry[] = [
  {
    id: 'custom-software',
    titlePart1: 'Custom Software',
    titlePart2: 'Development',
    description: 'Build tailored software solutions designed around your business goals and workflows.',
    image: customSoftwareImg,
    alt: '3D isometric cylinder pedestal with data screens and growth chart representing custom software development',
    href: '/contact-us',
  },
  {
    id: 'web-development',
    titlePart1: 'Web',
    titlePart2: 'Development',
    description: 'Create fast, scalable web platforms that deliver seamless digital experiences.',
    image: webDevImg,
    alt: '3D circular platform with web browser window and calendar interface representing web development',
    href: '/contact-us',
  },
  {
    id: 'mobile-app',
    titlePart1: 'Mobile App',
    titlePart2: 'Development',
    description: 'Build engaging iOS and Android apps that connect businesses with users.',
    image: mobileDevImg,
    alt: '3D smartphone displaying financial app interface on a display stage representing mobile app development',
    href: '/contact-us',
  },
  {
    id: 'ai-ml',
    titlePart1: 'AI-ML',
    titlePart2: 'Development',
    description: 'Use AI-powered solutions to automate operations and unlock smarter decisions.',
    image: aiMlImg,
    alt: '3D architectural cube matrix with luminous blue AI block representing AI-ML development',
    href: '/contact-us',
  },
  {
    id: 'cloud-application',
    titlePart1: 'Cloud Application',
    titlePart2: 'Development',
    description: 'Scale securely with cloud applications built for performance and flexibility.',
    image: cloudAppImg,
    alt: '3D layered translucent blue cloud icon elevated on illuminated pedestal representing cloud application development',
    href: '/contact-us',
  },
  {
    id: 'enterprise-software',
    titlePart1: 'Enterprise',
    titlePart2: 'Software',
    description: 'Streamline complex operations with enterprise-ready digital solutions.',
    image: enterpriseImg,
    alt: '3D document stack with integrated workflow tree hierarchy representing enterprise software',
    href: '/contact-us',
  },
  {
    id: 'iot-application',
    titlePart1: 'IoT Application',
    titlePart2: 'Development',
    description: 'Connect systems and devices with intelligent IoT solutions.',
    image: iotImg,
    alt: '3D glass network gateway portals with glowing interconnecting pathway representing IoT application development',
    href: '/contact-us',
  },
  {
    id: 'it-staff-augmentation',
    titlePart1: 'IT Staff',
    titlePart2: 'Augmentation',
    description: 'Extend your team with experienced tech professionals when you need them.',
    image: itStaffImg,
    alt: '3D modular structural engineering blocks with luminous blue glass slab representing IT staff augmentation',
    href: '/contact-us',
  },
  {
    id: 'managed-it-services',
    titlePart1: 'Managed IT',
    titlePart2: 'Services',
    description: 'Keep systems secure and running smoothly with reliable IT support.',
    image: managedItImg,
    alt: '3D stack of rounded acrylic glass server plates illuminated with blue gradient representing managed IT services',
    href: '/contact-us',
  },
  {
    id: 'blockchain-development',
    titlePart1: 'Blockchain',
    titlePart2: 'Development',
    description: 'Build secure and transparent blockchain-powered business solutions.',
    image: blockchainImg,
    alt: '3D diagonal sequence of blue blockchain nodes and sphere representing blockchain development',
    href: '/contact-us',
  },
];

export const ServicesGrid: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // 1. Header reveal on scroll
      if (headerRef.current) {
        const title = headerRef.current.querySelector('.wk-services-grid__title');
        const subtitle = headerRef.current.querySelector('.wk-services-grid__subtitle');

        gsap.fromTo(
          [title, subtitle],
          { opacity: 0, y: 10, filter: 'blur(5px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // 2. Individual service rows on scroll
      rowsRef.current.forEach((rowEl) => {
        if (!rowEl) return;

        const textElements = rowEl.querySelectorAll(
          '.wk-services-grid__service-title, .wk-services-grid__service-desc, .wk-services-grid__btn'
        );
        const visualCard = rowEl.querySelector('.wk-services-grid__visual');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rowEl,
            start: 'top 80%',
            once: true,
          },
        });

        // Text reveal: 10px upward movement + blur-to-clear + subtle stagger
        tl.fromTo(
          textElements,
          { opacity: 0, y: 10, filter: 'blur(5px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.55,
            stagger: 0.08,
            ease: 'power2.out',
          }
        );

        // Service illustration: rise gently from below without modifying layout dimensions or overlapping
        if (visualCard) {
          tl.fromTo(
            visualCard,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: 'power3.out',
              clearProps: 'transform',
            },
            0.1
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="wk-services-grid" aria-labelledby="services-grid-heading">
      <div className="wk-services-grid__container">
        {/* Section Header */}
        <div ref={headerRef} className="wk-services-grid__header">
          <h2 id="services-grid-heading" className="wk-services-grid__title">
            <span className="wk-services-grid__title-blue">Services</span> Built for{' '}
            <span className="wk-services-grid__title-blue">Growth</span>
          </h2>
          <p className="wk-services-grid__subtitle">
            We build digital solutions that help businesses scale faster and innovate smarter.
          </p>
        </div>

        {/* Alternating Service Entries */}
        <div className="wk-services-grid__list" role="list">
          {SERVICES_DATA.map((service, index) => {
            const isReverse = index % 2 !== 0; // Even index = text left, Odd index = image left

            return (
              <article
                key={service.id}
                ref={(el) => {
                  rowsRef.current[index] = el;
                }}
                role="listitem"
                className={`wk-services-grid__row ${
                  isReverse ? 'wk-services-grid__row--reverse' : ''
                }`}
              >
                {/* Text Content Column */}
                <div className="wk-services-grid__content">
                  <h3 className="wk-services-grid__service-title">
                    {service.titlePart1}
                    <br />
                    {service.titlePart2}
                  </h3>
                  <p className="wk-services-grid__service-desc">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="wk-services-grid__btn"
                    aria-label={`Know more about ${service.titlePart1} ${service.titlePart2}`}
                  >
                    <span>Know More</span>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="wk-services-grid__btn-icon"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 10.5L10.5 3.5M10.5 3.5H4.66667M10.5 3.5V9.33333"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                {/* Illustration Image Column */}
                <div className="wk-services-grid__visual">
                  <div className="wk-services-grid__image-card">
                    <img
                      src={getImgSrc(service.image)}
                      alt={service.alt}
                      className="wk-services-grid__image"
                      width={548}
                      height={416}
                      loading={index < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
