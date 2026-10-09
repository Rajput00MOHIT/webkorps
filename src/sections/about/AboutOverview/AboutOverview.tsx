'use client';

import React, { useRef, useEffect } from 'react';
import './AboutOverview.css';

export const AboutOverview: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure muted autoplay is triggered reliably
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy fallback: video remains muted and ready
      });
    }
  }, []);

  return (
    <section className="wk-about-overview" aria-labelledby="about-overview-heading">
      <div className="site-container wk-about-overview__container">
        {/* Section Header */}
        <div className="wk-about-overview__header">
          <h2 id="about-overview-heading" className="wk-about-overview__title">
            About <span className="wk-about-overview__title-brand">Webkorps</span>
          </h2>
          <p className="wk-about-overview__description">
            WebKorps is a trusted IT software services and digital solutions company, recognized with
            ISO 9001:2016 and ISO 27001:2026 certifications. With 10+ years of industry experience, we
            help businesses turn ideas into scalable technology solutions across web, mobile, cloud, AI,
            and enterprise platforms. Our focus on quality, security, innovation, and customer success
            enables us to deliver reliable digital products that support real business growth.
          </p>
        </div>

        {/* Large Media Animation Container */}
        <div className="wk-about-overview__media-wrapper">
          <div className="wk-about-overview__media-card">
            <video
              ref={videoRef}
              className="wk-about-overview__video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/about/webkorps_logo_reveal.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
