'use client';

import React from 'react';
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
  return (
    <section className="wk-core-tech" aria-labelledby="core-tech-heading">
      <div className="wk-core-tech__container">
        {/* Centered Section Header */}
        <div className="wk-core-tech__header">
          <h2 id="core-tech-heading" className="wk-core-tech__title">
            <span className="wk-core-tech__title-blue">Core Technologies</span> We Work With
          </h2>
          <p className="wk-core-tech__subtitle">
            We use modern, battle-tested technologies to build reliable and scalable solutions.
          </p>
        </div>

        {/* 3x3 Responsive Grid */}
        <div className="wk-core-tech__grid" role="list">
          {TECHNOLOGIES_DATA.map((tech) => (
            <article
              key={tech.id}
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
