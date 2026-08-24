import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Code2, 
  Smartphone, 
  Sparkles, 
  Layout, 
  Briefcase, 
  Cpu, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  X,
  ChevronRight,
  Layers
} from 'lucide-react';
import { servicesData } from '../data/services';
import type { ServiceItem } from '../types';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />
};

const categoryVisuals: Record<string, { image: string; title: string; subtitle: string }> = {
  marketing: {
    image: '/assets/services_digital_growth.png',
    title: 'High-Intent Acquisition Engine',
    subtitle: 'Data-driven PPC, SEO, & Lead Generation targeting ROI'
  },
  engineering: {
    image: '/assets/services_software_dev.png',
    title: 'Enterprise Software & Mobile Architecture',
    subtitle: 'Scalable cloud infrastructure, React platforms, & iOS/Android apps'
  },
  brand: {
    image: '/assets/services_brand_design.png',
    title: 'Category-Leading Identity & Product UX',
    subtitle: 'Human-centered interfaces, 3D design tokens, & premium branding'
  }
};

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'marketing' | 'engineering' | 'brand'>('all');
  const [activeDrawerService, setActiveDrawerService] = useState<ServiceItem | null>(null);

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="END-TO-END CAPABILITIES"
          title="Engineered Services built for"
          highlightText="Predictable Revenue Growth."
          subtitle="Clear deliverables, guaranteed timelines, and modern technical stack tailored around your goals."
          align="center"
          className="mb-12"
        />

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'marketing', label: 'Growth & Marketing' },
            { id: 'engineering', label: 'Software & Mobile Engineering' },
            { id: 'brand', label: 'Branding & UI/UX Design' }
          ].map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-nexus-blue text-white shadow-md shadow-nexus-blue/20 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-nexus-text'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3D Illustration Category Showcase Banner (Shows when specific category selected or on All view) */}
        {selectedCategory !== 'all' && categoryVisuals[selectedCategory] && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 glass-card-textured rounded-3xl p-6 sm:p-8 border border-nexus-blue/20 flex flex-col md:flex-row items-center gap-8 shadow-xl"
          >
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-nexus-navy">
              <img
                src={categoryVisuals[selectedCategory].image}
                alt={categoryVisuals[selectedCategory].title}
                className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexus-blue-light text-nexus-blue text-xs font-extrabold uppercase">
                <Layers className="w-3.5 h-3.5" /> 3D Capability Focus
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-nexus-text">
                {categoryVisuals[selectedCategory].title}
              </h3>
              <p className="text-sm text-nexus-muted leading-relaxed">
                {categoryVisuals[selectedCategory].subtitle}
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-nexus-blue hover:underline pt-2">
                <span>Request Custom Scope for this Category</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group bg-white rounded-3xl p-7 border border-slate-200/90 shadow-nexus-sm hover:shadow-nexus-hover hover:border-nexus-blue/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Header Meta: Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-extrabold tracking-widest text-nexus-blue bg-nexus-blue-light px-3 py-1 rounded-full border border-nexus-blue/20">
                    SERVICE {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-nexus-blue-50 text-nexus-blue flex items-center justify-center group-hover:bg-nexus-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                    {iconMap[service.iconName]}
                  </div>
                </div>

                {/* Service Title & Description */}
                <h3 className="text-xl font-extrabold text-nexus-text mb-2.5 group-hover:text-nexus-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-nexus-muted leading-relaxed mb-4 font-normal">
                  {service.description}
                </p>

                {/* Key Deliverable Timeline Badge */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/80 mb-5">
                  <Clock className="w-4 h-4 text-nexus-blue" />
                  <span>Timeline: {service.timeline}</span>
                </div>

                {/* Tags List */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 group-hover:bg-nexus-blue-50 group-hover:text-nexus-blue transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Bar */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => setActiveDrawerService(service)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-extrabold text-nexus-blue bg-nexus-blue-light border border-nexus-blue/20 hover:bg-nexus-blue hover:text-white transition-all cursor-pointer"
                >
                  <span>View Scope & Deliverables</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                
                <a href={service.ctaTarget} className="w-full">
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="text-xs"
                  >
                    {service.ctaText}
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Expandable Service Deliverables Modal Drawer */}
      <AnimatePresence>
        {activeDrawerService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-nexus-navy/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-nexus-blue/30 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDrawerService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-nexus-text transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-nexus-blue text-white flex items-center justify-center shadow-md">
                  {iconMap[activeDrawerService.iconName]}
                </div>
                <div>
                  <span className="text-xs font-extrabold text-nexus-blue uppercase tracking-wider">
                    Detailed Service Scope #{activeDrawerService.number}
                  </span>
                  <h3 className="text-2xl font-black text-nexus-text">
                    {activeDrawerService.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-nexus-muted mb-6 leading-relaxed">
                {activeDrawerService.description}
              </p>

              {/* Timeline & Expected ROI Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-nexus-blue-50 p-4 rounded-2xl border border-nexus-blue/20 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-nexus-blue flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-nexus-muted uppercase block">Estimated Delivery</span>
                    <span className="text-sm font-extrabold text-nexus-text">{activeDrawerService.timeline}</span>
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase block">Expected Impact</span>
                    <span className="text-xs font-extrabold text-emerald-900">{activeDrawerService.roiImpact}</span>
                  </div>
                </div>
              </div>

              {/* Key Deliverables List */}
              <div className="mb-6 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <h4 className="text-xs font-extrabold text-nexus-text uppercase tracking-wider mb-3">
                  Guaranteed Scope & Client Deliverables:
                </h4>
                <div className="space-y-2.5">
                  {activeDrawerService.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs font-semibold text-nexus-text">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills (If applicable) */}
              {activeDrawerService.techStack && (
                <div className="mb-8">
                  <h4 className="text-xs font-extrabold text-nexus-muted uppercase tracking-wider mb-2">
                    Engineered With Modern Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeDrawerService.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-bold px-3 py-1 rounded-lg bg-nexus-navy text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Drawer Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveDrawerService(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Close Scope
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveDrawerService(null)}
                >
                  <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    Request Proposal for this Service
                  </Button>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

