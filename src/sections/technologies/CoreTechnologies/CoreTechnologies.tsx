'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import railsLogo from '../../../assets/technologies/Rails.png';
import javaLogo from '../../../assets/technologies/Java.png';
import androidLogo from '../../../assets/technologies/Android.png';
import iosLogo from '../../../assets/technologies/IOS.png';
import pythonLogo from '../../../assets/technologies/Python.png';
import dotNetLogo from '../../../assets/technologies/dotnet.png';
import reactLogo from '../../../assets/technologies/React.png';
import phpLogo from '../../../assets/technologies/Php.png';
import angularLogo from '../../../assets/technologies/Angularjs.png';
import { getImgSrc } from '../../../utils/image';
import './CoreTechnologies.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TechnologyCardItem {
  id: string;
  title: string;
  description: string;
  logo: any;
  alt: string;
}

const TECHNOLOGIES_DATA: TechnologyCardItem[] = [
  {
    id: 'ror',
    title: 'ROR',
    description: 'Building scalable and robust web applications using Ruby on Rails',
    logo: railsLogo,
    alt: 'Ruby on Rails logo',
  },
  {
    id: 'java',
    title: 'Java',
    description: 'Delivering enterprise-grade solutions powered by Java',
    logo: javaLogo,
    alt: 'Java logo',
  },
  {
    id: 'android',
    title: 'Android',
    description: 'Creating seamless and intuitive Android user experiences',
    logo: androidLogo,
    alt: 'Android logo',
  },
  {
    id: 'ios',
    title: 'IOS',
    description: 'Transforming ideas into high-quality native iOS applications',
    logo: iosLogo,
    alt: 'iOS Apple logo',
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Building scalable and efficient applications with Python',
    logo: pythonLogo,
    alt: 'Python logo',
  },
  {
    id: 'dotnet',
    title: '.NET',
    description: 'Developing secure and enterprise-ready applications with .NET',
    logo: dotNetLogo,
    alt: '.NET logo',
  },
  {
    id: 'react-native',
    title: 'React Native',
    description: 'Accelerating cross-platform mobile app development with React Native',
    logo: reactLogo,
    alt: 'React Native logo',
  },
  {
    id: 'php',
    title: 'PHP',
    description: 'Building high-performance and scalable web applications with PHP',
    logo: phpLogo,
    alt: 'PHP logo',
  },
  {
    id: 'angular',
    title: 'Angular',
    description: 'Building high-performance and scalable web applications with PHP',
    logo: angularLogo,
    alt: 'AngularJS logo',
  },
];

export const CoreTechnologies: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // 1. Header Reveal on Scroll
      if (headerRef.current) {
        const title = headerRef.current.querySelector('.wk-core-tech__title');
        const subtitle = headerRef.current.querySelector('.wk-core-tech__subtitle');

        gsap.fromTo(
          [title, subtitle],
          { opacity: 0, y: 10, filter: 'blur(5px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // 2. Row 1: Directional Entrance on Section Entry
      // Card 1: 20px below and 20px to the left (x: -20, y: 20)
      // Card 2: 20px below (x: 0, y: 20)
      // Card 3: 20px below and 20px to the right (x: 20, y: 20)
      const c1 = cardsRef.current[0];
      const c2 = cardsRef.current[1];
      const c3 = cardsRef.current[2];

      if (c1 && c2 && c3) {
        gsap.set(c1, { x: -20, y: 20, opacity: 0, filter: 'blur(4px)' });
        gsap.set(c2, { x: 0, y: 20, opacity: 0, filter: 'blur(4px)' });
        gsap.set(c3, { x: 20, y: 20, opacity: 0, filter: 'blur(4px)' });

        const tlRow1 = gsap.timeline({
          scrollTrigger: {
            trigger: c1,
            start: 'top 82%',
            once: true,
          },
        });

        tlRow1.to(
          [c1, c2, c3],
          {
            x: 0,
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'transform',
          }
        );
      }

      // 3. Row 2: Scroll-triggered entrance (cards rise 20px with subtle stagger)
      const row2Cards = [cardsRef.current[3], cardsRef.current[4], cardsRef.current[5]].filter(Boolean);
      if (row2Cards.length > 0) {
        gsap.fromTo(
          row2Cards,
          { y: 20, opacity: 0, filter: 'blur(4px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: row2Cards[0],
              start: 'top 84%',
              once: true,
            },
          }
        );
      }

      // 4. Row 3: Scroll-triggered entrance (cards rise 20px with subtle stagger)
      const row3Cards = [cardsRef.current[6], cardsRef.current[7], cardsRef.current[8]].filter(Boolean);
      if (row3Cards.length > 0) {
        gsap.fromTo(
          row3Cards,
          { y: 20, opacity: 0, filter: 'blur(4px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: row3Cards[0],
              start: 'top 84%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="wk-core-tech" aria-labelledby="core-tech-heading">
      <div className="wk-core-tech__container">
        {/* Centered Section Header */}
        <div ref={headerRef} className="wk-core-tech__header">
          <h2 id="core-tech-heading" className="wk-core-tech__title">
            <span className="wk-core-tech__title-blue">Core Technologies</span> We Work With
          </h2>
          <p className="wk-core-tech__subtitle">
            We use modern, battle-tested technologies to build reliable and scalable solutions.
          </p>
        </div>

        {/* 3x3 Responsive Grid */}
        <div className="wk-core-tech__grid" role="list">
          {TECHNOLOGIES_DATA.map((tech, index) => (
            <article
              key={tech.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              role="listitem"
              className="wk-core-tech__card"
            >
              {/* Upper-Right Logo Area */}
              <div className="wk-core-tech__card-header">
                <div className={`wk-core-tech__logo-wrap wk-core-tech__logo-wrap--${tech.id}`}>
                  <img
                    src={getImgSrc(tech.logo)}
                    alt={tech.alt}
                    className={`wk-core-tech__logo-img wk-core-tech__logo-img--${tech.id}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Lower-Left Title & Description */}
              <div className="wk-core-tech__card-body">
                <h3 className="wk-core-tech__card-title">{tech.title}</h3>
                <p className="wk-core-tech__card-desc">{tech.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
