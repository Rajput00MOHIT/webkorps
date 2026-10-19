import React from 'react';

export interface TechItem {
  id: string;
  name: string;
  label?: string;
  icon: React.ReactNode;
}

export interface TechCategory {
  id: string;
  name: string;
  panelTitle: string;
  description: string;
  technologies: TechItem[];
}

export const TECHNOLOGY_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Technologies',
    panelTitle: 'Frontend Technologies',
    description: 'Creating fast, responsive, and engaging user experiences across web platforms.',
    technologies: [
      {
        id: 'html5',
        name: 'HTML5',
        label: 'HTML',
        icon: (
          <svg viewBox="0 0 512 512" width="48" height="48" aria-label="HTML5">
            <path fill="#E44D26" d="M107.6 440.8L74.4 68.9h363.2l-33.2 371.9L256 480z" />
            <path fill="#F16529" d="M256 445.6V100.8h149.6l-27.4 306.9z" />
            <path fill="#EBEBEB" d="M142.4 148.8h113.6v48h-65.6l5.6 62.4h60V307.2h-60l-3.2-36h-48l7.2 81.6 104 28.8v50.4l-157.6-43.2z" />
            <path fill="#FFFFFF" d="M369.6 148.8H256v48h109.6zm-10.4 110.4H256v48h99.2l-9.6 108-89.6 24.8v50.4l140.8-39.2z" />
          </svg>
        ),
      },
      {
        id: 'css3',
        name: 'CSS3',
        label: 'CSS',
        icon: (
          <svg viewBox="0 0 512 512" width="48" height="48" aria-label="CSS3">
            <path fill="#1572B6" d="M107.6 440.8L74.4 68.9h363.2l-33.2 371.9L256 480z" />
            <path fill="#33A9DC" d="M256 445.6V100.8h149.6l-27.4 306.9z" />
            <path fill="#EBEBEB" d="M142.4 148.8h227.2l-4.8 52.8H197.6l4.8 53.6h155.2l-11.2 125.6-90.4 25.6v-50.4l50.4-14.4 4.8-53.6H152z" />
            <path fill="#FFFFFF" d="M256 148.8h113.6l-4.8 52.8H256zm0 106.4h101.6l-11.2 125.6L256 406.4v-50.4l50.4-14.4 4.8-53.6H256z" />
          </svg>
        ),
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        label: 'JS',
        icon: (
          <svg viewBox="0 0 512 512" width="48" height="48" aria-label="JavaScript">
            <path fill="#E5A228" d="M107.6 440.8L74.4 68.9h363.2l-33.2 371.9L256 480z" />
            <path fill="#F0B529" d="M256 445.6V100.8h149.6l-27.4 306.9z" />
            <path fill="#FFFFFF" d="M212 334c-22 0-36-11-42-29l32-11c3 10 9 15 17 15 9 0 15-5 15-16v-89h36v92c0 25-18 38-58 38zm90-4c12 4 24 7 37 7 16 0 25-7 25-16 0-9-8-14-24-20l-14-5c-24-9-39-21-39-43 0-23 19-41 49-41 15 0 28 3 37 8l-10 23c-8-4-17-7-27-7-12 0-20 6-20 14 0 9 7 13 22 19l14 5c27 10 42 22 42 45 0 25-20 44-54 44-17 0-33-4-45-10z" />
          </svg>
        ),
      },
      {
        id: 'react',
        name: 'React JS',
        label: 'React JS',
        icon: (
          <svg viewBox="-11.5 -10.23174 23 20.46348" width="52" height="48" aria-label="React JS">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ),
      },
      {
        id: 'angular',
        name: 'Angular',
        label: 'ANGULAR',
        icon: (
          <svg viewBox="0 0 250 250" width="48" height="48" aria-label="Angular">
            <polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" />
            <polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2" />
            <path fill="#FFFFFF" d="M125,52.1L66.8,182.6h21.7l11.7-29.2h49.4l11.7,29.2h21.7L125,52.1z M125,134.8h-18.4l18.4-44.5l18.4,44.5H125z" />
          </svg>
        ),
      },
      {
        id: 'vue',
        name: 'Vue JS',
        label: 'VUE JS',
        icon: (
          <svg viewBox="0 0 261.76 226.69" width="48" height="48" aria-label="Vue JS">
            <path fill="#42B883" d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" />
            <path fill="#35495E" d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Technologies',
    panelTitle: 'Backend Technologies',
    description: 'Robust, scalable server-side architectures engineered for high performance and reliability.',
    technologies: [
      {
        id: 'python',
        name: 'Python',
        label: 'PYTHON',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Python">
            <path fill="#3776AB" d="M63.5 8.7c-26.6 0-25 11.5-25 11.5l.1 12h25.4v3.6H31.1C18.6 35.8 8.8 45 8.8 62.4c0 17.5 9.1 24.3 20.3 24.3h8.3v-12.2c0-13.8 11.8-13.8 11.8-13.8h25.4c11.5 0 11.5-11.1 11.5-11.1V20.2c0-11.5-22.6-11.5-22.6-11.5zm-7.6 7.3c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z" />
            <path fill="#FFD43B" d="M64.5 119.3c26.6 0 25-11.5 25-11.5l-.1-12H64v-3.6h32.9c12.5 0 22.3-9.2 22.3-26.6 0-17.5-9.1-24.3-20.3-24.3h-8.3v12.2c0 13.8-11.8 13.8-11.8 13.8H53.4c-11.5 0-11.5 11.1-11.5 11.1v28.9c0 11.5 22.6 11.5 22.6 11.5zm7.6-7.3c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4z" />
          </svg>
        ),
      },
      {
        id: 'java',
        name: 'Java',
        label: 'JAVA',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Java">
            <path fill="#5382A1" d="M46.7 93.6s-5.6 3.4 3.9 4.6c11.5 1.5 17.8 1.4 30.8-.8 0 0 4.4 2.8 10.6 5.1-34.6 14.8-67.9-1.9-45.3-8.9zm-2.8-14.8s-6.2 4.5 3.1 5.7c12.7 1.6 22.8 1.7 39.9-.9 0 0 3.1 2.3 7.8 4-40.4 12.3-73.4.7-50.8-8.8zm21.3-33.8c4.9 5.7 3.3 10.8 3.3 10.8s9.9-5.1 5.3-14.6c-4.2-8.7-7.7-13.1 10.6-26.6-23.7 3.7-27.1 21.6-19.2 30.4zm22.4 30c6.6 5.3-4.2 9.4-4.2 9.4s11.1-1.7 5.9-8.4c-4.9-6.3-8.8-9.4 6-22.1-18.7 2.9-20.5 15.3-7.7 21.1zm-32.9 29.5s-28.7 7.2 9.9 9.6c40.3 2.5 64.9-2.5 64.9-2.5s-5.4 3.7-13.7 5.4c-32.2 6.5-74.9 2.5-61.1-12.5z" />
            <path fill="#E76F00" d="M78.6 63.8s15.3-7.9 7.9-18.9c-6.8-10.2-12-15.3 17.5-30.8-37.8 4.2-43.2 25.1-25.4 49.7zm-20.9 48.9s-7.1 5.3 4.1 6.8c13.7 1.8 24.6 1.9 43.1-1.1 0 0 3.3 2.8 8.4 4.8-43.6 14.6-79.3.9-55.6-10.5z" />
          </svg>
        ),
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        label: 'NODE.JS',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Node.js">
            <path fill="#339933" d="M64 8.7L12.5 38.4v59.5L64 127.5l51.5-29.7V38.4L64 8.7zm0 10.7l42.2 24.4v48.7L64 116.8 21.8 92.5V43.8L64 19.4z" />
            <path fill="#66CC33" d="M64 42.8c-11.8 0-21.4 9.6-21.4 21.4 0 11.8 9.6 21.4 21.4 21.4s21.4-9.6 21.4-21.4c0-11.8-9.6-21.4-21.4-21.4zm0 33.6c-6.7 0-12.2-5.5-12.2-12.2 0-6.7 5.5-12.2 12.2-12.2s12.2 5.5 12.2 12.2c0 6.7-5.5 12.2-12.2 12.2z" />
          </svg>
        ),
      },
      {
        id: 'php',
        name: 'PHP',
        label: 'PHP',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="PHP">
            <ellipse cx="64" cy="64" rx="60" ry="34" fill="#777BB4" />
            <ellipse cx="64" cy="64" rx="55" ry="30" fill="#8892BF" />
            <path fill="#FFFFFF" d="M36.8 52.8h11.2c5.4 0 9.1 1.2 10.8 3.5 1.7 2.3 1.6 5.8-.4 10.4-2 4.6-5.2 7.7-9.5 9.2-4.3 1.5-9.6 2.3-15.9 2.3H33l-5.6 13h-8.8l18.2-38.4zm4.4 18.2h5.8c3.2 0 5.7-.5 7.4-1.5 1.7-1 2.9-2.8 3.7-5.3.8-2.5.7-4.4-.3-5.7-1-1.3-3.1-2-6.3-2H46l-4.8 14.5zm47.2-18.2h11.2c5.4 0 9.1 1.2 10.8 3.5 1.7 2.3 1.6 5.8-.4 10.4-2 4.6-5.2 7.7-9.5 9.2-4.3 1.5-9.6 2.3-15.9 2.3h-9.6l-5.6 13H70l18.4-38.4zm4.4 18.2h5.8c3.2 0 5.7-.5 7.4-1.5 1.7-1 2.9-2.8 3.7-5.3.8-2.5.7-4.4-.3-5.7-1-1.3-3.1-2-6.3-2h-5.6l-4.7 14.5zM61.6 52.8h8.8l-5.6 13h12.8l-2.4 5.6H62.4l-3.2 7.2h13.6l-2.4 5.6H54.4l16-31.4h-8.8z" />
          </svg>
        ),
      },
      {
        id: 'dotnet',
        name: '.NET Core',
        label: '.NET CORE',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label=".NET">
            <circle cx="64" cy="64" r="56" fill="#512BD4" />
            <path fill="#FFFFFF" d="M33 79.2c-2.4 0-4.4-1.8-4.4-4.4s1.8-4.4 4.4-4.4 4.4 1.8 4.4 4.4-1.9 4.4-4.4 4.4zm16.4-32.8l20.4 26.8V46.4h7.6v35.2H71L50.4 54.4v27.2h-7.6V46.4h6.6zm38.8 0h20v6.4H95.8v7.6H107v6.4H95.8v8.4h12.4V81.6h-20V46.4z" />
          </svg>
        ),
      },
      {
        id: 'ror',
        name: 'Ruby on Rails',
        label: 'RAILS',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Ruby on Rails">
            <path fill="#CC0000" d="M12.8 19.2h102.4v89.6H12.8z" rx="16" />
            <path fill="#FFFFFF" d="M41 43.6h17.6c8.4 0 14.4 4.8 14.4 12.4 0 5.6-3.2 10-8.4 11.6l9.6 16.8H61.8l-8.4-15.2h-4.8v15.2H41V43.6zm7.6 19.2h9.2c4.4 0 7.2-2.4 7.2-6s-2.8-6-7.2-6h-9.2v12zm38.8-19.2h7.6v40.8h-7.6V43.6z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Development Platforms',
    panelTitle: 'Mobile Development Platforms',
    description: 'High-impact native and cross-platform mobile apps for iOS and Android ecosystems.',
    technologies: [
      {
        id: 'ios',
        name: 'iOS / Apple',
        label: 'IOS',
        icon: (
          <svg viewBox="0 0 170 170" width="48" height="48" aria-label="iOS">
            <path fill="#0F172A" d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.57-7.85-11.61-14.3-6.65-10.6-11.83-22.68-15.54-36.25-3.71-13.57-5.57-26.24-5.57-38.01 0-16.14 4.09-29.67 12.28-40.59 8.18-10.92 18.42-16.52 30.72-16.8 4.69 0 10.15 1.34 16.37 4.02 6.22 2.68 10.02 4.07 11.4 4.16 1.83-.23 5.86-1.67 12.09-4.33 6.23-2.65 11.75-3.83 16.58-3.52 13.9.7 24.89 5.83 32.96 15.4-12.16 7.37-18.12 17.5-17.89 30.4.24 10.3 4.21 18.94 11.91 25.92 7.7 6.98 17.07 10.97 28.11 11.97-2.31 7.15-4.99 14.07-8.04 20.75M119.22 31.84c0-7.72 2.76-14.79 8.28-21.2 5.53-6.42 12.44-10.29 20.73-11.64.12 1.05.18 1.94.18 2.68 0 7.6-2.91 14.73-8.73 21.39-5.82 6.66-12.92 10.35-21.3 11.08-.24-.76-.36-1.54-.36-2.31" />
          </svg>
        ),
      },
      {
        id: 'android',
        name: 'Android',
        label: 'ANDROID',
        icon: (
          <svg viewBox="0 0 24 24" width="48" height="48" aria-label="Android">
            <path fill="#3DDC84" d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 7.8427 13.8554 7.29 12 7.29s-3.5902.5527-5.1367 1.6607L4.841 5.4477a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
          </svg>
        ),
      },
      {
        id: 'react-native',
        name: 'React Native',
        label: 'REACT NATIVE',
        icon: (
          <svg viewBox="-11.5 -10.23174 23 20.46348" width="52" height="48" aria-label="React Native">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ),
      },
      {
        id: 'flutter',
        name: 'Flutter',
        label: 'FLUTTER',
        icon: (
          <svg viewBox="0 0 16 16" width="48" height="48" aria-label="Flutter">
            <path fill="#02569B" d="M8.7 0L2.1 6.6l2.1 2.1L12.9 0H8.7zm0 7.3L5.2 10.8l2.1 2.1 5.6-5.6H8.7zm-2.1 4.2L4.5 13.6 6.6 15.7l2.1-2.1-2.1-2.1z" />
            <path fill="#0175C2" d="M6.6 11.5l2.1 2.1 4.2-4.2H8.7l-2.1 2.1z" />
          </svg>
        ),
      },
      {
        id: 'swift',
        name: 'Swift',
        label: 'SWIFT',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Swift">
            <path fill="#FA7343" d="M112.5 73.6c-.6 1.1-1.3 2.1-2.2 3.1-9.9 12-24.8 19.3-40.7 19.8 14.8-12 18.4-29.2 10.9-46.1C72 31.8 54.4 20.6 37 12c14.2 14.8 21.7 33.6 19.7 53.6-7.4-6.4-15.5-12-24-16.7 16.3 16.2 36.3 27 58.2 31-27.1 2.7-52.9-10.4-68.5-32.9C39.4 69 63.8 87.2 92.1 94.6c-17.6 11.4-38.9 16.2-59.7 13.7C55.4 122.5 86.9 119 110 99.4c1.1-1 2.1-1.9 3.1-3 1.3-1.4 1.4-3.5.2-5-1.1-1.4-3.3-1.7-4.8-.6 1.7-5.5 3.1-11.3 4-17.2z" />
          </svg>
        ),
      },
      {
        id: 'kotlin',
        name: 'Kotlin',
        label: 'KOTLIN',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Kotlin">
            <defs>
              <linearGradient id="kg" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C757BC" />
                <stop offset="100%" stopColor="#0C87EB" />
              </linearGradient>
            </defs>
            <polygon fill="url(#kg)" points="120,8 8,120 120,120" />
            <polygon fill="url(#kg)" points="8,8 64,8 8,64" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'dev-tools',
    name: 'Development Tools',
    panelTitle: 'Development Tools',
    description: 'Modern toolchains accelerating agile workflows, continuous integration, and delivery.',
    technologies: [
      {
        id: 'git',
        name: 'Git',
        label: 'GIT',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Git">
            <path fill="#F05032" d="M124.8 55.4L72.6 3.2c-4.2-4.2-11.1-4.2-15.3 0L44.5 16 57 28.5c4.5-1.5 9.8-.5 13.4 3.1 3.6 3.6 4.6 8.9 3.1 13.4l12.1 12.1c4.5-1.5 9.8-.5 13.4 3.1 5.3 5.3 5.3 13.9 0 19.2-5.3 5.3-13.9 5.3-19.2 0-3.9-3.9-4.8-9.6-2.7-14.3L67.6 53v28.8c1.9 1 3.6 2.5 4.8 4.5 3.8 6.4 1.7 14.7-4.7 18.5-6.4 3.8-14.7 1.7-18.5-4.7-3.8-6.4-1.7-14.7 4.7-18.5 2.1-1.3 4.5-1.9 6.9-1.9V51.7c-2.4 0-4.8-.6-6.9-1.9-4.7-2.8-7.3-7.9-6.8-13.3L34.6 23.9 3.2 55.3c-4.2 4.2-4.2 11.1 0 15.3l52.2 52.2c4.2 4.2 11.1 4.2 15.3 0l54.1-54.1c4.2-4.2 4.2-11.1 0-15.3z" />
          </svg>
        ),
      },
      {
        id: 'docker',
        name: 'Docker',
        label: 'DOCKER',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Docker">
            <path fill="#2496ED" d="M123.6 52.8c-2.6-1.8-8.2-2.7-12.8-1.4-.8-4.8-3.9-9.1-8.5-11.8l-4.5-2.6-2.9 4.3c-4.8 7.2-4.6 16.3.3 23.3-3.1 1.7-7.6 2.8-13.1 2.8H8.5c-3.1 16.3 3.6 32.5 17 41.5 12.3 8.3 27.6 10.6 42.1 10.6 37.1 0 63.6-20.9 69.8-54.1 0-.4.1-.7.1-1.1 0-4-6.3-8.8-13.9-11.5zM22.8 54.4h10.9v10.9H22.8zm14.5 0h10.9v10.9H37.3zm0-14.5h10.9v10.9H37.3zm14.5 14.5h10.9v10.9H51.8zm0-14.5h10.9v10.9H51.8zm14.5 14.5h10.9v10.9H66.3zm0-14.5h10.9v10.9H66.3zm0-14.5h10.9v10.9H66.3zm14.5 29h10.9v10.9H80.8z" />
          </svg>
        ),
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes',
        label: 'K8S',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Kubernetes">
            <path fill="#326CE5" d="M64 8.7L12.5 38.4v59.5L64 127.5l51.5-29.7V38.4L64 8.7zm0 13.9l36.5 21-12.7 7.3-23.8-13.7-23.8 13.7-12.7-7.3 36.5-21zm-39.7 30.6l12.7 7.3v27.5l-12.7 7.3V53.2zm46.3 33.4l-6.6 3.8-6.6-3.8V79l6.6-3.8 6.6 3.8v7.6zm33.1 7.3l-12.7-7.3V59.1l12.7-7.3v42.1z" />
          </svg>
        ),
      },
      {
        id: 'jira',
        name: 'Jira',
        label: 'JIRA',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Jira">
            <path fill="#0052CC" d="M120 64c0 30.9-25.1 56-56 56S8 94.9 8 64 33.1 8 64 8s56 25.1 56 56z" />
            <path fill="#FFFFFF" d="M64 36v28H36c0-15.5 12.5-28 28-28zm0 28v28H36c0-15.5 12.5-28 28-28zm28 0v28H64c0-15.5 12.5-28 28-28z" />
          </svg>
        ),
      },
      {
        id: 'vscode',
        name: 'VS Code',
        label: 'VS CODE',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="VS Code">
            <path fill="#007ACC" d="M96.8 8.6L67.4 36.5 34.6 11.2 12.8 21.6v84.8l21.8 10.4 32.8-25.3 29.4 27.9 23.2-11.2V19.8L96.8 8.6zm0 29.8v51.2L74.8 64 96.8 38.4zM34.6 44.8L54.6 64 34.6 83.2V44.8z" />
          </svg>
        ),
      },
      {
        id: 'postman',
        name: 'Postman',
        label: 'POSTMAN',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Postman">
            <circle cx="64" cy="64" r="56" fill="#FF6C37" />
            <path fill="#FFFFFF" d="M43 61.2c0-11.6 9.4-21 21-21s21 9.4 21 21-9.4 21-21 21-21-9.4-21-21zm7 0c0 7.7 6.3 14 14 14s14-6.3 14-14-6.3-14-14-14-14 6.3-14 14z" />
            <path fill="#FFFFFF" d="M72 48l18-12-6 20z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'qa-tools',
    name: 'Quality Assurance Tools',
    panelTitle: 'Quality Assurance Tools',
    description: 'Automated testing and QA pipelines ensuring bug-free, high-stability software releases.',
    technologies: [
      {
        id: 'selenium',
        name: 'Selenium',
        label: 'SELENIUM',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Selenium">
            <circle cx="64" cy="64" r="56" fill="#43B02A" />
            <path fill="#FFFFFF" d="M48 40h32v8H56v12h20v8H56v12h24v8H48V40z" />
          </svg>
        ),
      },
      {
        id: 'cypress',
        name: 'Cypress',
        label: 'CYPRESS',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Cypress">
            <circle cx="64" cy="64" r="56" fill="#17202C" />
            <path fill="#00BF88" d="M40 64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24S40 77.3 40 64z" />
            <path fill="#FFFFFF" d="M56 64c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" />
          </svg>
        ),
      },
      {
        id: 'junit',
        name: 'JUnit',
        label: 'JUNIT',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="JUnit">
            <circle cx="64" cy="64" r="56" fill="#25A162" />
            <path fill="#FFFFFF" d="M52 40h12v36c0 6.6-5.4 12-12 12s-12-5.4-12-12h8c0 2.2 1.8 4 4 4s4-1.8 4-4V40zm24 0h12v48H76V40z" />
          </svg>
        ),
      },
      {
        id: 'jmeter',
        name: 'Apache JMeter',
        label: 'JMETER',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="JMeter">
            <circle cx="64" cy="64" r="56" fill="#D22128" />
            <path fill="#FFFFFF" d="M36 64l18-18v12h38v12H54v12L36 64z" />
          </svg>
        ),
      },
      {
        id: 'appium',
        name: 'Appium',
        label: 'APPIUM',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Appium">
            <circle cx="64" cy="64" r="56" fill="#662D91" />
            <circle cx="64" cy="52" r="16" fill="#FFFFFF" />
            <path fill="#FFFFFF" d="M44 88c0-11 9-20 20-20s20 9 20 20H44z" />
          </svg>
        ),
      },
      {
        id: 'jest',
        name: 'Jest',
        label: 'JEST',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Jest">
            <circle cx="64" cy="64" r="56" fill="#99424F" />
            <path fill="#15C213" d="M40 76c0-13.3 10.7-24 24-24s24 10.7 24 24H40z" />
            <circle cx="64" cy="40" r="12" fill="#FFFFFF" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'databases',
    name: 'Database Solutions',
    panelTitle: 'Database Solutions',
    description: 'Scalable relational and distributed databases architected for data integrity, low latency, and speed.',
    technologies: [
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        label: 'POSTGRESQL',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="PostgreSQL">
            <circle cx="64" cy="64" r="56" fill="#336791" />
            <path fill="#FFFFFF" d="M64 36c-15.5 0-28 12.5-28 28 0 11.2 6.6 20.8 16 25.2v-11c-4.7-3.4-7.8-8.9-7.8-15.1 0-10.4 8.4-18.8 18.8-18.8s18.8 8.4 18.8 18.8c0 6.2-3.1 11.7-7.8 15.1v11c9.4-4.4 16-14 16-25.2 0-15.5-12.5-28-28-28z" />
          </svg>
        ),
      },
      {
        id: 'mysql',
        name: 'MySQL',
        label: 'MYSQL',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="MySQL">
            <circle cx="64" cy="64" r="56" fill="#00758F" />
            <path fill="#F29111" d="M44 76c0-11 9-20 20-20s20 9 20 20H44z" />
            <circle cx="64" cy="48" r="10" fill="#FFFFFF" />
          </svg>
        ),
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        label: 'MONGODB',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="MongoDB">
            <circle cx="64" cy="64" r="56" fill="#13AA52" />
            <path fill="#FFFFFF" d="M64 24c0 0-18 24-18 48 0 13.3 8.1 24 18 28 9.9-4 18-14.7 18-28 0-24-18-48-18-48z" />
          </svg>
        ),
      },
      {
        id: 'redis',
        name: 'Redis',
        label: 'REDIS',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Redis">
            <rect x="16" y="24" width="96" height="80" rx="12" fill="#DC382D" />
            <polygon points="64,36 88,52 64,68 40,52" fill="#FFFFFF" />
            <polygon points="64,60 88,76 64,92 40,76" fill="#FFFFFF" />
          </svg>
        ),
      },
      {
        id: 'oracle',
        name: 'Oracle',
        label: 'ORACLE',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Oracle">
            <circle cx="64" cy="64" r="56" fill="#F80000" />
            <rect x="36" y="44" width="56" height="40" rx="16" fill="#FFFFFF" />
            <rect x="46" y="52" width="36" height="24" rx="10" fill="#F80000" />
          </svg>
        ),
      },
      {
        id: 'sqlserver',
        name: 'SQL Server',
        label: 'SQL SERVER',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="SQL Server">
            <circle cx="64" cy="64" r="56" fill="#CC292B" />
            <path fill="#FFFFFF" d="M40 44h48v8H40zm0 16h48v8H40zm0 16h48v8H40z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    panelTitle: 'UI/UX Design',
    description: 'User-centric interfaces and design systems crafted for intuitive, engaging digital interaction.',
    technologies: [
      {
        id: 'figma',
        name: 'Figma',
        label: 'FIGMA',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Figma">
            <circle cx="80" cy="64" r="16" fill="#1ABCFE" />
            <path fill="#F24E1E" d="M48 16h32v32H48z" />
            <circle cx="48" cy="64" r="16" fill="#A259FF" />
            <circle cx="48" cy="32" r="16" fill="#F24E1E" />
            <path fill="#0ACF83" d="M48 80h16v16a16 16 0 1 1-16-16z" />
            <circle cx="80" cy="32" r="16" fill="#FF7262" />
          </svg>
        ),
      },
      {
        id: 'adobexd',
        name: 'Adobe XD',
        label: 'ADOBE XD',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Adobe XD">
            <rect x="16" y="16" width="96" height="96" rx="16" fill="#470137" />
            <path fill="#FF61F6" d="M40 44l10 20-10 20h10l6-12 6 12h10L62 64l10-20H62l-6 12-6-12H40zm36 0v40h12c11 0 18-7 18-20s-7-20-18-20H76zm10 8h2c6 0 10 4 10 12s-4 12-10 12h-2V52z" />
          </svg>
        ),
      },
      {
        id: 'sketch',
        name: 'Sketch',
        label: 'SKETCH',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Sketch">
            <polygon points="64,16 104,40 104,88 64,112 24,88 24,40" fill="#FDB300" />
            <polygon points="64,16 104,40 64,112" fill="#EA6C00" />
            <polygon points="64,16 64,112 24,88" fill="#FDD231" />
          </svg>
        ),
      },
      {
        id: 'illustrator',
        name: 'Illustrator',
        label: 'ILLUSTRATOR',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Illustrator">
            <rect x="16" y="16" width="96" height="96" rx="16" fill="#330000" />
            <text x="36" y="80" fill="#FF9A00" fontSize="48" fontWeight="bold" fontFamily="sans-serif">Ai</text>
          </svg>
        ),
      },
      {
        id: 'photoshop',
        name: 'Photoshop',
        label: 'PHOTOSHOP',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Photoshop">
            <rect x="16" y="16" width="96" height="96" rx="16" fill="#001E36" />
            <text x="34" y="80" fill="#31A8FF" fontSize="48" fontWeight="bold" fontFamily="sans-serif">Ps</text>
          </svg>
        ),
      },
      {
        id: 'invision',
        name: 'InVision',
        label: 'INVISION',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="InVision">
            <circle cx="64" cy="64" r="56" fill="#FF3366" />
            <circle cx="48" cy="48" r="8" fill="#FFFFFF" />
            <path fill="#FFFFFF" d="M44 64h8v24h-8V64zm16-16h8v40h-8V48zm16 16h8v24h-8V64z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud Solutions',
    panelTitle: 'Cloud Solutions',
    description: 'Elastic cloud infrastructure, serverless compute, and resilient container orchestration.',
    technologies: [
      {
        id: 'aws',
        name: 'AWS',
        label: 'AWS',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="AWS">
            <circle cx="64" cy="64" r="56" fill="#232F3E" />
            <path fill="#FF9900" d="M36 68c0 0 16 12 40 4 18-6 24-16 24-16s-2 10-18 18-46-6-46-6z" />
            <text x="36" y="56" fill="#FFFFFF" fontSize="24" fontWeight="bold" fontFamily="sans-serif">aws</text>
          </svg>
        ),
      },
      {
        id: 'azure',
        name: 'Microsoft Azure',
        label: 'AZURE',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Azure">
            <path fill="#0089D6" d="M32 96L64 24l20 36-32 36z" />
            <path fill="#0072C6" d="M64 68l16-28 28 56H48l16-28z" />
          </svg>
        ),
      },
      {
        id: 'gcp',
        name: 'Google Cloud',
        label: 'GCP',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Google Cloud">
            <circle cx="64" cy="64" r="56" fill="#4285F4" />
            <path fill="#FFFFFF" d="M44 64c0-11 9-20 20-20 6.6 0 12 3.1 15.6 8l-6.8 5.6C70.6 54.4 67.4 52 64 52c-6.6 0-12 5.4-12 12s5.4 12 12 12c4.4 0 8.2-2.4 10.2-6H64v-8h22v14c-4.4 8.2-12.8 14-22 14-11 0-20-9-20-20z" />
          </svg>
        ),
      },
      {
        id: 'docker-cloud',
        name: 'Docker',
        label: 'DOCKER',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Docker">
            <path fill="#2496ED" d="M123.6 52.8c-2.6-1.8-8.2-2.7-12.8-1.4-.8-4.8-3.9-9.1-8.5-11.8l-4.5-2.6-2.9 4.3c-4.8 7.2-4.6 16.3.3 23.3-3.1 1.7-7.6 2.8-13.1 2.8H8.5c-3.1 16.3 3.6 32.5 17 41.5 12.3 8.3 27.6 10.6 42.1 10.6 37.1 0 63.6-20.9 69.8-54.1 0-.4.1-.7.1-1.1 0-4-6.3-8.8-13.9-11.5zM22.8 54.4h10.9v10.9H22.8zm14.5 0h10.9v10.9H37.3zm0-14.5h10.9v10.9H37.3zm14.5 14.5h10.9v10.9H51.8zm0-14.5h10.9v10.9H51.8zm14.5 14.5h10.9v10.9H66.3zm0-14.5h10.9v10.9H66.3zm0-14.5h10.9v10.9H66.3zm14.5 29h10.9v10.9H80.8z" />
          </svg>
        ),
      },
      {
        id: 'kubernetes-cloud',
        name: 'Kubernetes',
        label: 'KUBERNETES',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Kubernetes">
            <path fill="#326CE5" d="M64 8.7L12.5 38.4v59.5L64 127.5l51.5-29.7V38.4L64 8.7zm0 13.9l36.5 21-12.7 7.3-23.8-13.7-23.8 13.7-12.7-7.3 36.5-21zm-39.7 30.6l12.7 7.3v27.5l-12.7 7.3V53.2zm46.3 33.4l-6.6 3.8-6.6-3.8V79l6.6-3.8 6.6 3.8v7.6zm33.1 7.3l-12.7-7.3V59.1l12.7-7.3v42.1z" />
          </svg>
        ),
      },
      {
        id: 'cloudflare',
        name: 'Cloudflare',
        label: 'CLOUDFLARE',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Cloudflare">
            <circle cx="64" cy="64" r="56" fill="#F38020" />
            <path fill="#FFFFFF" d="M78 52c-2.4 0-4.8.8-6.6 2.2C69 49.6 63.8 46 57.6 46c-9.2 0-16.8 6.8-18.2 15.6C34.4 63.2 30 68 30 74c0 6.6 5.4 12 12 12h36c7.7 0 14-6.3 14-14 0-7.3-5.6-13.3-12.8-13.9-.4-3.5-3.4-6.1-7.2-6.1z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'integrations',
    name: 'Integration Capabilities',
    panelTitle: 'Integration Capabilities',
    description: 'Secure APIs, microservices, and event streaming connecting platforms and enterprise services.',
    technologies: [
      {
        id: 'rest-api',
        name: 'RESTful APIs',
        label: 'REST API',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="REST API">
            <circle cx="64" cy="64" r="56" fill="#1887C9" />
            <path fill="#FFFFFF" d="M38 52h52v8H38zm0 16h38v8H38z" />
            <circle cx="86" cy="72" r="4" fill="#FFFFFF" />
          </svg>
        ),
      },
      {
        id: 'graphql',
        name: 'GraphQL',
        label: 'GRAPHQL',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="GraphQL">
            <circle cx="64" cy="64" r="56" fill="#E10098" />
            <polygon points="64,30 94,48 94,80 64,98 34,80 34,48" stroke="#FFFFFF" strokeWidth="6" fill="none" />
          </svg>
        ),
      },
      {
        id: 'kafka',
        name: 'Apache Kafka',
        label: 'KAFKA',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Apache Kafka">
            <circle cx="64" cy="64" r="56" fill="#231F20" />
            <circle cx="64" cy="44" r="10" fill="#FFFFFF" />
            <circle cx="44" cy="78" r="10" fill="#FFFFFF" />
            <circle cx="84" cy="78" r="10" fill="#FFFFFF" />
            <line x1="64" y1="44" x2="44" y2="78" stroke="#FFFFFF" strokeWidth="6" />
            <line x1="64" y1="44" x2="84" y2="78" stroke="#FFFFFF" strokeWidth="6" />
          </svg>
        ),
      },
      {
        id: 'rabbitmq',
        name: 'RabbitMQ',
        label: 'RABBITMQ',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="RabbitMQ">
            <circle cx="64" cy="64" r="56" fill="#FF6600" />
            <rect x="40" y="44" width="48" height="40" rx="8" fill="#FFFFFF" />
          </svg>
        ),
      },
      {
        id: 'webhooks',
        name: 'Webhooks',
        label: 'WEBHOOKS',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="Webhooks">
            <circle cx="64" cy="64" r="56" fill="#0052CC" />
            <path fill="#FFFFFF" d="M44 64a20 20 0 0 1 20-20v8a12 12 0 0 0-12 12h-8zm0 16a36 36 0 0 1 36-36v8a28 28 0 0 0-28 28h-8z" />
          </svg>
        ),
      },
      {
        id: 'grpc',
        name: 'gRPC',
        label: 'GRPC',
        icon: (
          <svg viewBox="0 0 128 128" width="48" height="48" aria-label="gRPC">
            <circle cx="64" cy="64" r="56" fill="#244C5A" />
            <text x="34" y="74" fill="#FFFFFF" fontSize="30" fontWeight="bold" fontFamily="sans-serif">gRPC</text>
          </svg>
        ),
      },
    ],
  },
];
