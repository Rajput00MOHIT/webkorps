import hospitalImg from '../../../assets/services/indrusties /hospital.png';
import logisticImg from '../../../assets/services/indrusties /logistic.png';
import fintechImg from '../../../assets/services/indrusties /fintech.png';
import ecomImg from '../../../assets/services/indrusties /e-com.png';
import educationImg from '../../../assets/services/indrusties /education.png';
import manufacturingImg from '../../../assets/services/indrusties /manufacting.png';

export interface IndustrySolutionItem {
  id: string;
  index: number;
  name: string;
  description: string;
  image: any;
  imageAlt: string;
}

export const INDUSTRY_SOLUTIONS_DATA: IndustrySolutionItem[] = [
  {
    id: 'healthcare',
    index: 0,
    name: 'Healthcare',
    description:
      'Digital healthcare solutions that improve care delivery, patient experience and operational efficiency.',
    image: hospitalImg,
    imageAlt: '3D digital hospital architectural building representing healthcare software solutions',
  },
  {
    id: 'logistics',
    index: 1,
    name: 'Logistics & Supply Chain',
    description:
      'Digital logistics solutions that streamline fleet tracking, supply chain operations, and distribution efficiency.',
    image: logisticImg,
    imageAlt: '3D digital logistics distribution hub representing supply chain management platforms',
  },
  {
    id: 'fintech',
    index: 2,
    name: 'Fintech',
    description:
      'Secure, compliant financial technology platforms for payments, digital banking, and risk management.',
    image: fintechImg,
    imageAlt: '3D financial banking institution building representing modern fintech solutions',
  },
  {
    id: 'e-commerce',
    index: 3,
    name: 'E-commerce',
    description:
      'High-performance digital commerce platforms driving multi-channel sales and personalized customer journeys.',
    image: ecomImg,
    imageAlt: '3D modern digital storefront building representing e-commerce platforms',
  },
  {
    id: 'education',
    index: 4,
    name: 'Education',
    description:
      'Adaptive learning platforms, interactive virtual classrooms, and digital campus management systems.',
    image: educationImg,
    imageAlt: '3D modern educational campus building representing EdTech and LMS solutions',
  },
  {
    id: 'manufacturing',
    index: 5,
    name: 'Manufacturing',
    description:
      'Smart factory solutions for workflow automation, predictive maintenance, and real-time operational visibility.',
    image: manufacturingImg,
    imageAlt: '3D high-tech industrial manufacturing facility representing smart factory software',
  },
];

