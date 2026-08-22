export interface ServiceItem {
  id: string;
  number: string;
  iconName: string;
  title: string;
  description: string;
  tags: string[];
  ctaText: string;
  ctaTarget: string;
}

export interface ProblemCard {
  id: string;
  number: string;
  problem: string;
  solution: string;
  iconName: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface SolutionOption {
  id: string;
  pillText: string;
  goalTitle: string;
  recommendedPackage: string;
  includedServices: string[];
  description: string;
  ctaText: string;
}

export interface BusinessOutcome {
  number: string;
  title: string;
  description: string;
  iconName: string;
  metrics: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  serviceNeeded: string;
  projectDetails: string;
}
