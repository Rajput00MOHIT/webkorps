import React from 'react';
import blogBannerImg from '../../../assets/insights/blog_banner.png';
import { getImgSrc } from '../../../utils/image';
import './FeaturedArticle.css';

export interface FeaturedArticleProps {
  articleUrl?: string;
  onReadNowClick?: (e: React.MouseEvent) => void;
}

/**
 * Featured Article Section Component
 * Source of Truth: Figma node 2288-1015 & attached visual reference
 *
 * Visual Components:
 * - Two-column header row:
 *   - Left: "Preparing AI Models for Peak Retail Season Without Breaking Production"
 *     ("AI Models for Peak Retail" highlighted in #1887C9)
 *   - Right: "Read Now ↗" pill CTA button
 * - Large featured illustration banner (/src/assets/insights/blog_banner.png)
 * - "Latest Blog" pill badge in bottom-right corner of image panel
 */
export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  articleUrl,
  onReadNowClick,
}) => {
  return (
    <section
      id="featured-article"
      className="wk-featured-article"
      aria-labelledby="featured-article-title"
    >
      <div className="wk-featured-article__container">
        {/* Top Header Row: 2-Column Headline & CTA Button */}
        <div className="wk-featured-article__header-row">
          <h2 id="featured-article-title" className="wk-featured-article__title">
            Preparing{' '}
            <span className="wk-featured-article__title-highlight">
              AI Models for Peak Retail
            </span>
            <br className="wk-featured-article__title-br" />
            Season Without Breaking Production
          </h2>

          <div className="wk-featured-article__action-wrap">
            <a
              href={articleUrl || '#read-now'}
              className="wk-featured-article__btn"
              onClick={onReadNowClick}
              aria-label="Read now: Preparing AI Models for Peak Retail Season Without Breaking Production"
            >
              <span>Read Now</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wk-featured-article__btn-arrow"
                aria-hidden="true"
              >
                <path
                  d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Featured Image Banner Container */}
        <div className="wk-featured-article__banner-panel">
          <div className="wk-featured-article__img-wrap">
            <img
              src={getImgSrc(blogBannerImg)}
              alt="Illustration of preparing AI models for peak retail season without breaking production"
              className="wk-featured-article__img"
              width={5024}
              height={2268}
              loading="lazy"
            />
          </div>

          {/* Bottom-right Latest Blog Badge */}
          <div className="wk-featured-article__badge-wrap" aria-hidden="true">
            <span className="wk-featured-article__badge">Latest Blog</span>
          </div>
        </div>
      </div>
    </section>
  );
};
