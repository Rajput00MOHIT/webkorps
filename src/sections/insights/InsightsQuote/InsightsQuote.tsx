import React from 'react';
import quoteMarkImg from '../../../assets/insights/quote_mark.png';
import { getImgSrc } from '../../../utils/image';
import './InsightsQuote.css';

/**
 * Insights Quote Section Component
 * Source of Truth: Figma node 1233-11198 & attached visual reference
 *
 * Content:
 * “Data is only valuable when it drives decisions insights make that possible.”
 * - Highlight: “decisions insights” in Webkorps blue (#1887C9)
 * - Remaining text: Dark navy (#0F172A)
 * - 3-line composition on desktop
 * - Oversized light-grey quotation marks:
 *   - Closing quotes near top-right
 *   - Opening quotes near lower-left
 *   - Decorative aria-hidden="true"
 */
export interface InsightsQuoteProps {
  id?: string;
  ariaLabel?: string;
  quote?: React.ReactNode;
}

export const InsightsQuote: React.FC<InsightsQuoteProps> = ({
  id = 'insights-quote',
  ariaLabel = 'Insights Quote',
  quote,
}) => {
  return (
    <section
      id={id}
      className="wk-insights-quote"
      aria-label={ariaLabel}
    >
      <div className="wk-insights-quote__container">
        <div className="wk-insights-quote__inner">
          {/* Decorative Closing Quotation Marks (Upper Right) */}
          <div
            className="wk-insights-quote__mark-wrap wk-insights-quote__mark-wrap--tr"
            aria-hidden="true"
          >
            <img
              src={getImgSrc(quoteMarkImg)}
              alt=""
              className="wk-insights-quote__mark"
              width={104}
              height={92}
              loading="eager"
            />
          </div>

          {/* Quote Text */}
          <blockquote className="wk-insights-quote__text">
            {quote ?? (
              <>
                Data is only valuable when it{' '}
                <br className="wk-insights-quote__br" />
                drives{' '}
                <span className="wk-insights-quote__highlight">decisions insights</span>{' '}
                make{' '}
                <br className="wk-insights-quote__br" />
                that possible.
              </>
            )}
          </blockquote>

          {/* Decorative Opening Quotation Marks (Lower Left) */}
          <div
            className="wk-insights-quote__mark-wrap wk-insights-quote__mark-wrap--bl"
            aria-hidden="true"
          >
            <img
              src={getImgSrc(quoteMarkImg)}
              alt=""
              className="wk-insights-quote__mark wk-insights-quote__mark--inverted"
              width={104}
              height={92}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
