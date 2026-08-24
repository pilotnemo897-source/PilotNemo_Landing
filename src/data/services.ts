import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'digital-marketing',
    number: '01',
    iconName: 'TrendingUp',
    title: 'Digital Marketing & Growth',
    category: 'marketing',
    description: 'Data-driven performance marketing targeting high-intent buyers, driving verified lead volume and revenue ROI.',
    tags: ['SEO & Organic Growth', 'Google & Meta PPC', 'Conversion Funnels', 'Lead Generation'],
    ctaText: 'Explore Marketing Growth',
    ctaTarget: '#contact',
    timeline: '2 - 4 Weeks Launch',
    deliverables: [
      'Keyword Research & Technical SEO Audit',
      'Targeted Multi-Channel Ad Campaigns (Google & Meta)',
      'High-Converting Landing Page Optimization',
      'Real-Time Lead & Conversion Analytics Dashboard'
    ],
    roiImpact: 'Average 3x - 5x qualified B2B lead increase within 60 days',
    techStack: ['Google Ads', 'Meta Pixel', 'GA4 Analytics', 'SEMrush', 'HubSpot']
  },
  {
    id: 'web-development',
    number: '02',
    iconName: 'Code2',
    title: 'Full-Stack Web Development',
    category: 'engineering',
    description: 'Custom, blazing-fast web platforms engineered for maximum security, SEO dominance, and high visitor conversion.',
    tags: ['React & Next.js', 'Conversion Websites', 'E-Commerce Engines', 'API & Cloud Systems'],
    ctaText: 'Build Custom Platform',
    ctaTarget: '#contact',
    timeline: '3 - 6 Weeks Delivery',
    deliverables: [
      'Custom React / TypeScript Architecture',
      '100/100 Google PageSpeed & Mobile Optimization',
      'Headless CMS & Database Integration',
      'Automated Lead Routing & Contact Forms'
    ],
    roiImpact: '+140% higher visitor-to-lead conversion rates',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite/Next.js', 'Node.js']
  },
  {
    id: 'mobile-apps',
    number: '03',
    iconName: 'Smartphone',
    title: 'Mobile App Development',
    category: 'engineering',
    description: 'High-performance cross-platform Android & iOS applications delivering seamless user experiences and native performance.',
    tags: ['iOS & Android Apps', 'React Native / Flutter', 'Real-Time Backend', 'App Store Publishing'],
    ctaText: 'Launch Mobile App',
    ctaTarget: '#contact',
    timeline: '6 - 10 Weeks Delivery',
    deliverables: [
      'Native-Quality iOS & Android Mobile Apps',
      'Secure Authentication & Cloud DB Architecture',
      'Push Notifications & In-App Payment Processing',
      'Complete Apple App Store & Google Play Deployment'
    ],
    roiImpact: 'Direct customer retention boost and brand accessibility',
    techStack: ['React Native', 'TypeScript', 'Firebase', 'REST/GraphQL', 'AWS']
  },
  {
    id: 'branding-identity',
    number: '04',
    iconName: 'Sparkles',
    title: 'Branding & Identity Suite',
    category: 'brand',
    description: 'Craft a distinctive visual identity, brand positioning, and corporate design system that builds instant market trust.',
    tags: ['Logo & Visual Design', 'Brand Strategy', 'Corporate Guidelines', 'Marketing Collateral'],
    ctaText: 'Elevate Brand Identity',
    ctaTarget: '#contact',
    timeline: '2 - 3 Weeks Delivery',
    deliverables: [
      'Vector Logo Suite & Iconography System',
      'Comprehensive Brand Style Guide (Typography, Palette, Rules)',
      'Business Cards, Pitch Deck & Social Media Assets',
      'Figma Design Tokens & UI Kit'
    ],
    roiImpact: 'Elevates perceived market value and enables premium pricing',
    techStack: ['Figma', 'Adobe Creative Suite', 'Illustrator', '3D Blender']
  },
  {
    id: 'ui-ux-design',
    number: '05',
    iconName: 'Layout',
    title: 'UI/UX & Product Design',
    category: 'brand',
    description: 'Intuitive, human-centered product interfaces engineered to reduce friction, boost engagement, and maximize customer retention.',
    tags: ['User Journey Mapping', 'High-Fidelity Wireframes', 'Interactive Prototypes', 'Design Systems'],
    ctaText: 'Design Digital Product',
    ctaTarget: '#contact',
    timeline: '2 - 4 Weeks Delivery',
    deliverables: [
      'Comprehensive User Research & UX Architecture',
      'Pixel-Perfect High-Fidelity Desktop & Mobile UI',
      'Clickable Interactive Prototypes for Testing',
      'Developer-Ready Handout Specs & Asset Exports'
    ],
    roiImpact: 'Reduces user churn by up to 45% and streamlines UX',
    techStack: ['Figma', 'Protopie', 'Storybook', 'UserTesting']
  },
  {
    id: 'business-development',
    number: '06',
    iconName: 'Briefcase',
    title: 'Business Growth & Strategy',
    category: 'marketing',
    description: 'Strategic advisory and operational systems architecture to optimize your sales funnel and uncover new market revenue streams.',
    tags: ['Growth Strategy', 'Sales Funnel Engineering', 'Operational Systems', 'Market Expansion'],
    ctaText: 'Optimize Business Engine',
    ctaTarget: '#contact',
    timeline: 'Ongoing Advisory / 4-Week Sprint',
    deliverables: [
      'Market Opportunity & Competitor Benchmarking',
      'Sales Funnel Friction Point & Conversion Audit',
      'Standardized Growth KPIs & Executive Reporting Framework',
      'Go-To-Market Execution Blueprint'
    ],
    roiImpact: 'Scalable operational foundations ready for 10x growth',
    techStack: ['Miro', 'HubSpot CRM', 'Notion', 'Google Data Looker']
  },
  {
    id: 'custom-software',
    number: '07',
    iconName: 'Cpu',
    title: 'Custom Enterprise Software',
    category: 'engineering',
    description: 'Bespoke internal software platforms, custom CRMs/ERPs, and workflow automation tailored precisely to your operational workflow.',
    tags: ['Bespoke CRM & ERP', 'Workflow Automation', 'SaaS Architecture', 'Legacy Modernization'],
    ctaText: 'Engineer Custom Solution',
    ctaTarget: '#contact',
    timeline: '6 - 12 Weeks Delivery',
    deliverables: [
      'Tailor-Made ERP / CRM System Built for Your Process',
      'Automated Multi-Tool API Integrations',
      'Role-Based Security & Audit Trail Compliance',
      'Scalable Enterprise Cloud Hosting Setup'
    ],
    roiImpact: 'Saves 200+ manual staff hours every month',
    techStack: ['Node.js', 'PostgreSQL', 'Docker', 'AWS/GCP', 'React']
  }
];

