import React from 'react';
import { Container } from '../../../components/Container/Container';
import { BLOG_POSTS } from './insightsData';
import { BlogCarousel } from './BlogCarousel';
import './Insights.css';

export const Insights: React.FC = () => {
  return (
    <section
      id="insights"
      className="wk-insights"
      aria-labelledby="insights-heading"
    >
      <Container size="wide">
        {/* Section Header: Title & View All Link */}
        <div className="wk-insights__header">
          <h2 id="insights-heading" className="wk-insights__title">
            Explore Blogs, insights, and
            <br />
            stories <span className="wk-insights__title-accent">shaping the future.</span>
          </h2>

          <div className="wk-insights__action">
            <a
              href="#insights"
              className="wk-insights__view-all"
              aria-label="View all blogs and insights"
            >
              <span>View all</span>
              <span className="wk-insights__view-all-chevron" aria-hidden="true">
                &raquo;
              </span>
            </a>
          </div>
        </div>

        {/* Horizontal Blog Carousel */}
        <BlogCarousel posts={BLOG_POSTS} />
      </Container>
    </section>
  );
};

export default Insights;
