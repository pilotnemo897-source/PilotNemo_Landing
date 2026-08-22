import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Code2, 
  Smartphone, 
  Sparkles, 
  Layout, 
  Briefcase, 
  Cpu, 
  ArrowRight 
} from 'lucide-react';
import { servicesData } from '../data/services';
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

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="FULL-STACK CAPABILITIES"
          title="Our Services"
          subtitle="Everything your business needs to build, launch, and grow digitally."
          align="center"
          className="mb-16"
        />

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-white rounded-2xl p-8 border border-slate-200/90 shadow-nexus-sm hover:shadow-nexus-hover hover:border-nexus-blue/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Header Meta: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold tracking-widest text-nexus-blue bg-nexus-blue-light px-3 py-1 rounded-full border border-nexus-blue/20">
                    SERVICE {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-nexus-blue-50 text-nexus-blue flex items-center justify-center group-hover:bg-nexus-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                    {iconMap[service.iconName]}
                  </div>
                </div>

                {/* Service Title & Description */}
                <h3 className="text-xl font-extrabold text-nexus-text mb-3 group-hover:text-nexus-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-nexus-muted leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Tags List */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 group-hover:bg-nexus-blue-50 group-hover:text-nexus-blue transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-4 border-t border-slate-100">
                <a href={service.ctaTarget}>
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="group-hover:bg-nexus-blue group-hover:text-white transition-all duration-300"
                  >
                    {service.ctaText}
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
