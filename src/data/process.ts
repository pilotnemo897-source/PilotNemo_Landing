import type { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We learn about your business operations, target audience, and primary revenue goals.',
    iconName: 'Search',
    details: ['Stakeholder alignment', 'Competitor benchmarking', 'Target audience mapping']
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'We define the right digital strategy, technical roadmap, and growth milestones.',
    iconName: 'Compass',
    details: ['Digital architecture', 'Marketing funnel plan', 'Scope & timeline definition']
  },
  {
    number: '03',
    title: 'Design',
    description: 'We create your brand identity, conversion UI/UX, and visual touchpoints.',
    iconName: 'Palette',
    details: ['High-fidelity UI mockups', 'Brand asset creation', 'Interactive prototyping']
  },
  {
    number: '04',
    title: 'Build',
    description: 'We develop, rigorously test, and launch your high-performance solution.',
    iconName: 'Code',
    details: ['Agile engineering', 'Performance optimization', 'Secure production launch']
  },
  {
    number: '05',
    title: 'Grow',
    description: 'We optimize performance, drive targeted traffic, and continuously improve revenue.',
    iconName: 'LineChart',
    details: ['Conversion rate optimization', 'Ad campaign management', 'Ongoing platform scaling']
  }
];
