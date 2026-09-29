import React from 'react';
import { Container } from '../../../components/Container/Container';
import { FooterCTA } from './FooterCTA';
import { FooterNav } from './FooterNav';
import { FooterLocations } from './FooterLocations';
import { FooterBottom } from './FooterBottom';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="wk-footer" role="contentinfo">
      <Container size="normal">
        <div className="wk-footer__wrapper">
          {/* Layer 1: Final CTA & Contact/Social Card */}
          <FooterCTA />

          <hr className="wk-footer__divider" />

          {/* Layer 2: 5-Column Global Navigation */}
          <FooterNav />

          <hr className="wk-footer__divider" />

          {/* Layer 3: 5-Column Office Locations */}
          <FooterLocations />

          <hr className="wk-footer__divider" />

          {/* Layer 4: Legal & Copyright Bar */}
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
};
