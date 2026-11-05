import logoSalesforce from '../../../assets/oem/logo_salesforce.png';
import logoAws from '../../../assets/oem/logo_aws.png';
import logoFortinet from '../../../assets/oem/logo_fortinet.png';
import logoTrellix from '../../../assets/oem/logo_trellix.png';
import logoSysdig from '../../../assets/oem/logo_sysdig.png';
import logoAdobe from '../../../assets/oem/logo_adobe.png';
import logoCloudsek from '../../../assets/oem/logo_cloudsek.png';
import logoCisco from '../../../assets/oem/logo_cisco.png';
import logoHpeJuniper from '../../../assets/oem/logo_hpe_juniper.png';

export interface OEMPartner {
  id: string;
  name: string;
  logo: string | any;
  orbit: 'inner' | 'middle' | 'outer';
  orbitRadiusCss: string; // CSS variable representing the orbit radius
  speedSeconds: number; // orbital period in seconds (constant per lane)
  delaySeconds: number; // calculated negative delay for starting phase angle
  initialAngleDeg: number; // mathematical polar angle in deg (-180 to +180)
  badgeSize: number; // standard badge size in px at desktop
  logoMaxWidth: number; // max logo dimension in px
}

/**
 * OEM Partners Data for 3 Fixed Orbital Lanes matching Figma exact positions
 *
 * Source of Truth (Figma Node 942-1926 & user provided positions):
 * - OUTER LANE (var(--r-outer)):
 *     Cisco: -168° (lower left)
 *     AWS: -128° (upper left)
 *     Salesforce: -90° (top center apex / zenith)
 *     CloudSEK: -30° (mid right)
 * - MIDDLE LANE (var(--r-middle)):
 *     Trellix: -145° (mid left)
 *     Fortinet: -65° (upper right)
 *     HPE Juniper Networking: -15° (lower right)
 * - INNER LANE (var(--r-inner)):
 *     Sysdig: -120° (left-center)
 *     Adobe: -55° (right-center)
 *
 * Seamless Twin Loop:
 * Each partner has a twin copy spaced 180° apart on the 360° orbital track.
 * As a logo descends on the right (0°), its twin copy simultaneously ascends from the left (-180°).
 * Therefore, ALL 9 OEM PARTNERS ARE VISIBLE CLEARLY AT ALL TIMES.
 */

export const ORBIT_PERIOD_SECONDS = 26.0;

export const calculateDelay = (angleDeg: number, period: number = ORBIT_PERIOD_SECONDS): number => {
  return -((angleDeg + 180) / 360) * period;
};

/**
 * OEM Partners Data for 3 Fixed Orbital Lanes matching Figma exact positions
 *
 * Source of Truth (User's annotated Figma bounding box reference):
 * - OUTER LANE (var(--r-outer)):
 *     Cisco: -168° (lower left)
 *     AWS: -128° (upper left)
 *     Salesforce: -90° (top center apex / zenith)
 *     HPE Juniper Networking: -14° (lower right)
 * - MIDDLE LANE (var(--r-middle)):
 *     Trellix: -145° (mid left)
 *     Fortinet: -65° (upper right)
 *     CloudSEK: -35° (mid right)
 * - INNER LANE (var(--r-inner)):
 *     Sysdig: -120° (left-center)
 *     Adobe: -55° (right-center)
 *
 * Uniform Speed & Continuous Rotation:
 * All lanes share the exact same orbital period (26.0s), ensuring that the
 * relative spacing and orderly constellation from Figma NEVER drift, break,
 * or feel random.
 *
 * Seamless Twin Loop:
 * Each partner has a twin copy spaced 180° apart on the 360° orbital track.
 * As a logo descends across the right horizon (0°), its twin simultaneously
 * ascends into the sky from the left horizon (-180°).
 * Therefore, ALL 9 OEM PARTNERS REMAIN VISIBLE AT ALL TIMES.
 */

export const OEM_PARTNERS_DATA: OEMPartner[] = [
  // =========================================================================
  // LANE 1: OUTER PATH (Radius: var(--r-outer))
  // Visible: Cisco (-168°), AWS (-128°), Salesforce (-90°), HPE Juniper (-14°)
  // =========================================================================
  {
    id: 'cisco-1',
    name: 'Cisco',
    logo: logoCisco,
    orbit: 'outer',
    orbitRadiusCss: 'var(--r-outer)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: -168,
    delaySeconds: calculateDelay(-168),
    badgeSize: 116,
    logoMaxWidth: 78,
  },
  {
    id: 'aws-1',
    name: 'AWS',
    logo: logoAws,
    orbit: 'outer',
    orbitRadiusCss: 'var(--r-outer)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: -106,
    delaySeconds: calculateDelay(-106),
    badgeSize: 116,
    logoMaxWidth: 84,
  },
  {
    id: 'salesforce-1',
    name: 'Salesforce',
    logo: logoSalesforce,
    orbit: 'outer',
    orbitRadiusCss: 'var(--r-outer)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: -90,
    delaySeconds: calculateDelay(-90),
    badgeSize: 116,
    logoMaxWidth: 82,
  },
  {
    id: 'hpe-juniper-1',
    name: 'HPE Juniper Networking',
    logo: logoHpeJuniper,
    orbit: 'outer',
    orbitRadiusCss: 'var(--r-outer)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: -12,
    delaySeconds: calculateDelay(-12),
    badgeSize: 116,
    logoMaxWidth: 90,
  },
  // Lane 1 Twin Copies (180° offset for instant left re-entry as right copy exits)
  {
    id: 'cisco-2',
    name: 'Cisco',
    logo: logoCisco,
    orbit: 'outer',
    orbitRadiusCss: 'var(--r-outer)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: 12,
    delaySeconds: calculateDelay(12),
    badgeSize: 116,
    logoMaxWidth: 78,
  },
  {
    id: 'aws-2',
    name: 'AWS',
    logo: logoAws,
    orbit: 'outer',
    orbitRadiusCss: 'var(--r-outer)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: 74,
    delaySeconds: calculateDelay(74),
    badgeSize: 116,
    logoMaxWidth: 84,
  },
  {
    id: 'salesforce-2',
    name: 'Salesforce',
    logo: logoSalesforce,
    orbit: 'outer',
    orbitRadiusCss: 'var(--r-outer)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: 90,
    delaySeconds: calculateDelay(90),
    badgeSize: 116,
    logoMaxWidth: 82,
  },
  {
    id: 'hpe-juniper-2',
    name: 'HPE Juniper Networking',
    logo: logoHpeJuniper,
    orbit: 'outer',
    orbitRadiusCss: 'var(--r-outer)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: 168,
    delaySeconds: calculateDelay(168),
    badgeSize: 116,
    logoMaxWidth: 90,
  },

  // =========================================================================
  // LANE 2: MIDDLE PATH (Radius: var(--r-middle))
  // Visible: Trellix (-145°), Fortinet (-70°), CloudSEK (-28°)
  // =========================================================================
  {
    id: 'trellix-1',
    name: 'Trellix',
    logo: logoTrellix,
    orbit: 'middle',
    orbitRadiusCss: 'var(--r-middle)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: -145,
    delaySeconds: calculateDelay(-145),
    badgeSize: 116,
    logoMaxWidth: 82,
  },
  {
    id: 'fortinet-1',
    name: 'Fortinet',
    logo: logoFortinet,
    orbit: 'middle',
    orbitRadiusCss: 'var(--r-middle)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: -70,
    delaySeconds: calculateDelay(-70),
    badgeSize: 116,
    logoMaxWidth: 92,
  },
  {
    id: 'cloudsek-1',
    name: 'CloudSEK',
    logo: logoCloudsek,
    orbit: 'middle',
    orbitRadiusCss: 'var(--r-middle)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: -28,
    delaySeconds: calculateDelay(-28),
    badgeSize: 116,
    logoMaxWidth: 88,
  },
  // Lane 2 Twin Copies (180° offset for instant left re-entry as right copy exits)
  {
    id: 'trellix-2',
    name: 'Trellix',
    logo: logoTrellix,
    orbit: 'middle',
    orbitRadiusCss: 'var(--r-middle)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: 35,
    delaySeconds: calculateDelay(35),
    badgeSize: 116,
    logoMaxWidth: 82,
  },
  {
    id: 'fortinet-2',
    name: 'Fortinet',
    logo: logoFortinet,
    orbit: 'middle',
    orbitRadiusCss: 'var(--r-middle)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: 110,
    delaySeconds: calculateDelay(110),
    badgeSize: 116,
    logoMaxWidth: 92,
  },
  {
    id: 'cloudsek-2',
    name: 'CloudSEK',
    logo: logoCloudsek,
    orbit: 'middle',
    orbitRadiusCss: 'var(--r-middle)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: 152,
    delaySeconds: calculateDelay(152),
    badgeSize: 116,
    logoMaxWidth: 88,
  },

  // =========================================================================
  // LANE 3: INNER PATH (Radius: var(--r-inner))
  // Visible: Sysdig (-122°), Adobe (-46°)
  // =========================================================================
  {
    id: 'sysdig-1',
    name: 'Sysdig',
    logo: logoSysdig,
    orbit: 'inner',
    orbitRadiusCss: 'var(--r-inner)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: -122,
    delaySeconds: calculateDelay(-122),
    badgeSize: 116,
    logoMaxWidth: 86,
  },
  {
    id: 'adobe-1',
    name: 'Adobe',
    logo: logoAdobe,
    orbit: 'inner',
    orbitRadiusCss: 'var(--r-inner)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: -46,
    delaySeconds: calculateDelay(-46),
    badgeSize: 116,
    logoMaxWidth: 82,
  },
  // Lane 3 Twin Copies (180° offset for instant left re-entry as right copy exits)
  {
    id: 'sysdig-2',
    name: 'Sysdig',
    logo: logoSysdig,
    orbit: 'inner',
    orbitRadiusCss: 'var(--r-inner)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: 58,
    delaySeconds: calculateDelay(58),
    badgeSize: 116,
    logoMaxWidth: 86,
  },
  {
    id: 'adobe-2',
    name: 'Adobe',
    logo: logoAdobe,
    orbit: 'inner',
    orbitRadiusCss: 'var(--r-inner)',
    speedSeconds: ORBIT_PERIOD_SECONDS,
    initialAngleDeg: 134,
    delaySeconds: calculateDelay(134),
    badgeSize: 116,
    logoMaxWidth: 82,
  },
];
