'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroElementImg from '../../../assets/insights/Hero_element.png';
import { getImgSrc } from '../../../utils/image';
import { HeroBackground } from '../../../components/HeroBackground';
import './InsightsHero.css';

/**
 * Insights Landing Page Hero Section
 * Source of Truth: Figma node 2267-1424 & attached visual reference
 * Features:
 * - Reuses the exact same architectural grid background as Services and Technologies Hero
 * - Top "Insights" pill eyebrow badge
 * - "Thought Lead<icon>rship &" with custom SVG icon replacing "e"
 * - "[Hero_element.png] Industry Insights" + black circular pointer cursor
 * - Centered supporting subtitle
 * - GSAP entrance animations matching site standard
 */
export const InsightsHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const cursorWrapRef = useRef<HTMLSpanElement>(null);
  const cursorSvgRef = useRef<SVGSVGElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([badgeRef.current, wordsRef.current, subtitleRef.current], {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        });
        if (cursorSvgRef.current) {
          gsap.set(cursorSvgRef.current, { opacity: 1, x: 0 });
        }
        return;
      }

      // Initial states
      gsap.set(badgeRef.current, { opacity: 0, y: 10 });
      gsap.set(wordsRef.current, {
        opacity: 0,
        y: 10,
        filter: 'blur(6px)',
      });
      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 10,
        filter: 'blur(6px)',
      });

      // Cursor entrance calculation from viewport right
      let cursorStartX = 600;
      if (cursorWrapRef.current) {
        const wrapRect = cursorWrapRef.current.getBoundingClientRect();
        cursorStartX = Math.max(window.innerWidth - wrapRect.left + 80, 500);
      }
      if (cursorSvgRef.current) {
        gsap.set(cursorSvgRef.current, {
          x: cursorStartX,
          opacity: 0,
        });
      }

      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
      });

      // 1. Badge reveals first
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.45,
      });

      // 2. Heading: Word-by-word staggered reveal
      tl.to(
        wordsRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.55,
          stagger: 0.045,
          ease: 'power2.out',
        },
        '-=0.2'
      );

      // 3. Cursor Graphic: Enters horizontally from right
      if (cursorSvgRef.current) {
        tl.to(
          cursorSvgRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.95,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          0.35
        );
      }

      // 4. Supporting text: blur-to-clear transition with 10px upward movement
      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.65,
          ease: 'power2.out',
        },
        '-=0.3'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addWordRef = (el: HTMLSpanElement | null) => {
    if (el && !wordsRef.current.includes(el)) {
      wordsRef.current.push(el);
    }
  };

  return (
    <section ref={heroRef} className="wk-insights-hero" aria-labelledby="insights-hero-heading">
      {/* Background Architectural Grid Lines (Exact Shared Background from About Hero) */}
      <HeroBackground />

      <div className="wk-insights-hero__container">
        {/* Top Eyebrow Pill Badge */}
        <div ref={badgeRef} className="wk-insights-hero__badge-wrapper">
          <span className="wk-insights-hero__badge">Insights</span>
        </div>

        {/* Centered Main 2-Line Display Heading */}
        <h1
          id="insights-hero-heading"
          className="wk-insights-hero__title"
          aria-label="Thought Leadership & Industry Insights"
        >
          {/* Line 1: Thought Leadership & */}
          <span className="wk-insights-hero__title-line">
            <span ref={addWordRef}>Thought</span>{' '}
            <span ref={addWordRef} className="wk-insights-hero__leadership-word">
              Lead
              <span className="wk-insights-hero__lead-icon-wrap" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <rect width="38" height="38" fill="white" />
                  <use xlinkHref="#stroke0_2288_1025" fill="#1A87C8" />
                  <mask id="stroke1_2288_1025" fill="white">
                    <use xlinkHref="#stroke0_2288_1025" />
                  </mask>
                  <path d="M20.6501 18.6061C20.9404 18.7207 21.2231 18.8468 21.4982 18.9843C21.7732 19.1218 22.0406 19.2784 22.3004 19.4542C22.1323 19.6375 21.9795 19.8285 21.842 20.0272C21.7044 20.2258 21.5784 20.4397 21.4638 20.6689C20.8755 20.2869 20.249 19.9966 19.5843 19.798C18.9196 19.5993 18.2358 19.5 17.5329 19.5C16.8606 19.5 16.2112 19.5879 15.5847 19.7636C14.9582 19.9393 14.3737 20.1838 13.8313 20.497C13.2888 20.8103 12.796 21.1923 12.3529 21.6431C11.9098 22.0938 11.5277 22.5905 11.2069 23.1329C10.886 23.6754 10.6377 24.2598 10.4619 24.8863C10.2862 25.5128 10.1984 26.1622 10.1984 26.8346H8.73145C8.73145 25.9177 8.86515 25.0353 9.13255 24.1872C9.39996 23.3392 9.78579 22.5561 10.29 21.8379C10.7943 21.1197 11.3902 20.4818 12.0778 19.924C12.7655 19.3663 13.5447 18.927 14.4157 18.6061C13.5524 18.0407 12.8801 17.3302 12.3987 16.4745C11.9174 15.6188 11.6729 14.6714 11.6653 13.6324C11.6653 12.8225 11.8181 12.0623 12.1237 11.3518C12.4293 10.6412 12.8457 10.0186 13.3728 9.48375C13.9 8.94894 14.5227 8.52873 15.2409 8.22312C15.959 7.91751 16.7231 7.76471 17.5329 7.76471C18.3428 7.76471 19.103 7.91751 19.8135 8.22312C20.524 8.52873 21.1467 8.94512 21.6815 9.47229C22.2163 9.99946 22.6365 10.6221 22.9422 11.3403C23.2478 12.0585 23.4006 12.8225 23.4006 13.6324C23.4006 14.1366 23.3394 14.6294 23.2172 15.1107C23.095 15.5921 22.9116 16.0466 22.6671 16.4745C22.4226 16.9023 22.1361 17.2958 21.8076 17.6549C21.4791 18.014 21.0932 18.3311 20.6501 18.6061ZM13.1322 13.6324C13.1322 14.2436 13.2468 14.8128 13.476 15.3399C13.7052 15.8671 14.0184 16.3332 14.4157 16.7381C14.813 17.143 15.2791 17.4601 15.8139 17.6893C16.3487 17.9185 16.9217 18.0331 17.5329 18.0331C18.1365 18.0331 18.7057 17.9185 19.2405 17.6893C19.7753 17.4601 20.2414 17.1468 20.6386 16.7495C21.0359 16.3523 21.353 15.8862 21.5898 15.3514C21.8267 14.8166 21.9413 14.2436 21.9337 13.6324C21.9337 13.0288 21.819 12.4596 21.5898 11.9248C21.3606 11.39 21.0474 10.9239 20.6501 10.5266C20.2528 10.1293 19.7829 9.81227 19.2405 9.57543C18.698 9.33858 18.1288 9.22398 17.5329 9.23162C16.9217 9.23162 16.3525 9.34622 15.8253 9.57543C15.2982 9.80463 14.8321 10.1179 14.4272 10.5152C14.0223 10.9125 13.7052 11.3823 13.476 11.9248C13.2468 12.4672 13.1322 13.0364 13.1322 13.6324ZM30.0017 23.1673C30.0017 23.5646 29.9405 23.9504 29.8183 24.3248C29.6961 24.6991 29.5127 25.0468 29.2682 25.3677V31.2353L26.3344 29.7684L23.4006 31.2353V25.3677C23.1637 25.0468 22.9842 24.6991 22.8619 24.3248C22.7397 23.9504 22.6747 23.5646 22.6671 23.1673C22.6671 22.663 22.7626 22.1893 22.9536 21.7462C23.1446 21.3031 23.4044 20.9173 23.7329 20.5887C24.0614 20.2602 24.4511 19.9966 24.9019 19.798C25.3526 19.5993 25.8301 19.5 26.3344 19.5C26.8386 19.5 27.3123 19.5955 27.7555 19.7865C28.1986 19.9775 28.5844 20.2411 28.9129 20.5773C29.2415 20.9134 29.5051 21.3031 29.7037 21.7462C29.9023 22.1893 30.0017 22.663 30.0017 23.1673ZM26.3344 20.9669C26.0288 20.9669 25.7423 21.0242 25.4749 21.1388C25.2075 21.2534 24.9744 21.41 24.7758 21.6087C24.5771 21.8073 24.4205 22.0404 24.3059 22.3078C24.1913 22.5752 24.134 22.8617 24.134 23.1673C24.134 23.4729 24.1913 23.7594 24.3059 24.0268C24.4205 24.2942 24.5771 24.5272 24.7758 24.7259C24.9744 24.9245 25.2075 25.0811 25.4749 25.1957C25.7423 25.3103 26.0288 25.3677 26.3344 25.3677C26.64 25.3677 26.9265 25.3103 27.1939 25.1957C27.4613 25.0811 27.6943 24.9245 27.893 24.7259C28.0916 24.5272 28.2482 24.2942 28.3628 24.0268C28.4775 23.7594 28.5348 23.4729 28.5348 23.1673C28.5348 22.8617 28.4775 22.5752 28.3628 22.3078C28.2482 22.0404 28.0916 21.8073 27.893 21.6087C27.6943 21.41 27.4613 21.2534 27.1939 21.1388C26.9265 21.0242 26.64 20.9669 26.3344 20.9669ZM27.8013 28.863V26.5251C27.3429 26.7314 26.8539 26.8346 26.3344 26.8346C25.8149 26.8346 25.3259 26.7314 24.8675 26.5251V28.863C25.112 28.7408 25.3564 28.6224 25.6009 28.5078C25.8454 28.3932 26.0899 28.2671 26.3344 28.1296C26.5789 28.2595 26.8234 28.3817 27.0678 28.4963C27.3123 28.6109 27.5568 28.7331 27.8013 28.863Z" strokeWidth="1.23529" stroke="#1A87C8" mask="url(#stroke1_2288_1025)" />
                  <defs>
                    <path id="stroke0_2288_1025" d="M20.6501 18.6061C20.9404 18.7207 21.2231 18.8468 21.4982 18.9843C21.7732 19.1218 22.0406 19.2784 22.3004 19.4542C22.1323 19.6375 21.9795 19.8285 21.842 20.0272C21.7044 20.2258 21.5784 20.4397 21.4638 20.6689C20.8755 20.2869 20.249 19.9966 19.5843 19.798C18.9196 19.5993 18.2358 19.5 17.5329 19.5C16.8606 19.5 16.2112 19.5879 15.5847 19.7636C14.9582 19.9393 14.3737 20.1838 13.8313 20.497C13.2888 20.8103 12.796 21.1923 12.3529 21.6431C11.9098 22.0938 11.5277 22.5905 11.2069 23.1329C10.886 23.6754 10.6377 24.2598 10.4619 24.8863C10.2862 25.5128 10.1984 26.1622 10.1984 26.8346H8.73145C8.73145 25.9177 8.86515 25.0353 9.13255 24.1872C9.39996 23.3392 9.78579 22.5561 10.29 21.8379C10.7943 21.1197 11.3902 20.4818 12.0778 19.924C12.7655 19.3663 13.5447 18.927 14.4157 18.6061C13.5524 18.0407 12.8801 17.3302 12.3987 16.4745C11.9174 15.6188 11.6729 14.6714 11.6653 13.6324C11.6653 12.8225 11.8181 12.0623 12.1237 11.3518C12.4293 10.6412 12.8457 10.0186 13.3728 9.48375C13.9 8.94894 14.5227 8.52873 15.2409 8.22312C15.959 7.91751 16.7231 7.76471 17.5329 7.76471C18.3428 7.76471 19.103 7.91751 19.8135 8.22312C20.524 8.52873 21.1467 8.94512 21.6815 9.47229C22.2163 9.99946 22.6365 10.6221 22.9422 11.3403C23.2478 12.0585 23.4006 12.8225 23.4006 13.6324C23.4006 14.1366 23.3394 14.6294 23.2172 15.1107C23.095 15.5921 22.9116 16.0466 22.6671 16.4745C22.4226 16.9023 22.1361 17.2958 21.8076 17.6549C21.4791 18.014 21.0932 18.3311 20.6501 18.6061ZM13.1322 13.6324C13.1322 14.2436 13.2468 14.8128 13.476 15.3399C13.7052 15.8671 14.0184 16.3332 14.4157 16.7381C14.813 17.143 15.2791 17.4601 15.8139 17.6893C16.3487 17.9185 16.9217 18.0331 17.5329 18.0331C18.1365 18.0331 18.7057 17.9185 19.2405 17.6893C19.7753 17.4601 20.2414 17.1468 20.6386 16.7495C21.0359 16.3523 21.353 15.8862 21.5898 15.3514C21.8267 14.8166 21.9413 14.2436 21.9337 13.6324C21.9337 13.0288 21.819 12.4596 21.5898 11.9248C21.3606 11.39 21.0474 10.9239 20.6501 10.5266C20.2528 10.1293 19.7829 9.81227 19.2405 9.57543C18.698 9.33858 18.1288 9.22398 17.5329 9.23162C16.9217 9.23162 16.3525 9.34622 15.8253 9.57543C15.2982 9.80463 14.8321 10.1179 14.4272 10.5152C14.0223 10.9125 13.7052 11.3823 13.476 11.9248C13.2468 12.4672 13.1322 13.0364 13.1322 13.6324ZM30.0017 23.1673C30.0017 23.5646 29.9405 23.9504 29.8183 24.3248C29.6961 24.6991 29.5127 25.0468 29.2682 25.3677V31.2353L26.3344 29.7684L23.4006 31.2353V25.3677C23.1637 25.0468 22.9842 24.6991 22.8619 24.3248C22.7397 23.9504 22.6747 23.5646 22.6671 23.1673C22.6671 22.663 22.7626 22.1893 22.9536 21.7462C23.1446 21.3031 23.4044 20.9173 23.7329 20.5887C24.0614 20.2602 24.4511 19.9966 24.9019 19.798C25.3526 19.5993 25.8301 19.5 26.3344 19.5C26.8386 19.5 27.3123 19.5955 27.7555 19.7865C28.1986 19.9775 28.5844 20.2411 28.9129 20.5773C29.2415 20.9134 29.5051 21.3031 29.7037 21.7462C29.9023 22.1893 30.0017 22.663 30.0017 23.1673ZM26.3344 20.9669C26.0288 20.9669 25.7423 21.0242 25.4749 21.1388C25.2075 21.2534 24.9744 21.41 24.7758 21.6087C24.5771 21.8073 24.4205 22.0404 24.3059 22.3078C24.1913 22.5752 24.134 22.8617 24.134 23.1673C24.134 23.4729 24.1913 23.7594 24.3059 24.0268C24.4205 24.2942 24.5771 24.5272 24.7758 24.7259C24.9744 24.9245 25.2075 25.0811 25.4749 25.1957C25.7423 25.3104 26.0288 25.3677 26.3344 25.3677C26.64 25.3677 26.9265 25.3104 27.1939 25.1957C27.4613 25.0811 27.6943 24.9245 27.893 24.7259C28.0916 24.5272 28.2482 24.2942 28.3628 24.0268C28.4775 23.7594 28.5348 23.4729 28.5348 23.1673C28.5348 22.8617 28.4775 22.5752 28.3628 22.3078C28.2482 22.0404 28.0916 21.8073 27.893 21.6087C27.6943 21.41 27.4613 21.2534 27.1939 21.1388C26.9265 21.0242 26.64 20.9669 26.3344 20.9669ZM27.8013 28.863V26.5251C27.3429 26.7314 26.8539 26.8346 26.3344 26.8346C25.8149 26.8346 25.3259 26.7314 24.8675 26.5251V28.863C25.112 28.7408 25.3564 28.6224 25.6009 28.5078C25.8454 28.3932 26.0899 28.2671 26.3344 28.1296C26.5789 28.2595 26.8234 28.3817 27.0678 28.4963C27.3123 28.6109 27.5568 28.7331 27.8013 28.863Z" />
                  </defs>
                </svg>
              </span>
              rship
            </span>{' '}
            <span ref={addWordRef}>&</span>
          </span>

          {/* Line 2: [Hero_element.png] Industry Insights [Cursor] */}
          <span className="wk-insights-hero__title-line wk-insights-hero__title-line--second">
            <span ref={addWordRef} className="wk-insights-hero__element-img-wrap" aria-hidden="true">
              <img
                src={getImgSrc(heroElementImg)}
                alt=""
                className="wk-insights-hero__element-img"
                width={64}
                height={64}
                loading="eager"
              />
            </span>
            <span ref={addWordRef}>Industry</span>{' '}
            <span ref={addWordRef} className="wk-insights-hero__insights-word">
              Insights
              <span ref={cursorWrapRef} className="wk-insights-hero__cursor-wrap" aria-hidden="true">
                <svg
                  ref={cursorSvgRef}
                  viewBox="0 0 70 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="wk-insights-hero__cursor-svg"
                >
                  <circle cx="19" cy="19" r="19" fill="black" />
                  <g filter="url(#filter0_d_insights_cursor)">
                    <path
                      d="M31.1231 62.5755L22.7611 22.9035C22.593 22.1059 23.3985 21.453 24.1439 21.7826L62.3686 38.6819C63.2209 39.0587 63.14 40.2937 62.2458 40.556L42.7065 46.2882C42.4575 46.3612 42.2466 46.5282 42.1184 46.7539L32.9712 62.863C32.5165 63.6637 31.313 63.4764 31.1231 62.5755Z"
                      fill="black"
                      strokeWidth="3"
                      stroke="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_insights_cursor"
                      x="17.2373"
                      y="20.1923"
                      width="51.2275"
                      height="52.6781"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_insights"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_insights"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p ref={subtitleRef} className="wk-insights-hero__subtitle">
          Explore industry trends, expert perspectives, and innovative ideas shaping the future of business.
        </p>
      </div>
    </section>
  );
};
