import React from 'react';
import womenImg from '../../../assets/insights/Women.png';
import { getImgSrc } from '../../../utils/image';
import './WomenInLeadership.css';

export interface WomenInLeadershipProps {
  id?: string;
  imageSrc?: any;
  imageAlt?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  headingId?: string;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
}

/**
 * Women in Leadership / Image + Text Overlapping Section Component
 * Source of Truth: Figma node 1233-11190 & node 1233-13094
 *
 * Distinctive Overlapping Layout:
 * - Left: Large photograph with offset light-blue accent backdrop frame.
 * - Right: Light-colored content panel horizontally overlapping the photograph in the foreground.
 * - Heading with Webkorps blue accent highlighting.
 * - Body copy describing organizational impact and purpose.
 */
export const WomenInLeadership: React.FC<WomenInLeadershipProps> = ({
  id = 'women-in-leadership',
  imageSrc = womenImg,
  imageAlt = 'Webkorps women in leadership collaborating with colleagues around a meeting table',
  title = (
    <>
      <span className="wk-women-lead__title-blue">Women</span> in Leadership
      <br />
      at <span className="wk-women-lead__title-blue">Webkorps</span>
    </>
  ),
  body = `At Webkorps, women lead critical initiatives, build scalable and high-performance solutions, and influence business outcomes at every level. They actively contribute across product development, client delivery, and strategic decision-making, ensuring execution is both innovative and reliable. From driving complex engineering projects to improving operational efficiency and mentoring cross-functional teams, they play a key role in shaping outcomes that directly impact business growth and customer success.`,
  headingId = 'women-in-leadership-heading',
  className = '',
  imageWidth = 1456,
  imageHeight = 1613,
}) => {
  return (
    <section
      id={id}
      className={`wk-women-in-leadership ${className}`.trim()}
      aria-labelledby={headingId}
    >
      <div className="wk-women-in-leadership__container">
        <div className="wk-women-lead__wrapper">
          {/* Left Column: Photograph with Offset Light-Blue Accent */}
          <div className="wk-women-lead__visual-col">
            <div className="wk-women-lead__accent-bg" aria-hidden="true" />
            <div className="wk-women-lead__img-wrap">
              <img
                src={getImgSrc(imageSrc)}
                alt={imageAlt}
                className="wk-women-lead__img"
                width={imageWidth}
                height={imageHeight}
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: Overlapping Content Panel */}
          <div className="wk-women-lead__content-card">
            <h2 id={headingId} className="wk-women-lead__title">
              {title}
            </h2>

            <p className="wk-women-lead__body">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenInLeadership;
