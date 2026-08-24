import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, Code2, Smartphone, Sparkles, Layout, Cpu,
  ArrowRight, CheckCircle2, ChevronRight
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Digital Marketing & Lead Generation',
    desc: 'High-intent SEO, performance PPC campaigns, and conversion-optimized funnels that generate qualified leads and measurable ROI.',
    tag: 'Growth',
    color: 'blue'
  },
  {
    id: 2,
    icon: <Code2 className="w-5 h-5" />,
    title: 'Full-Stack Web Development',
    desc: 'Custom React, TypeScript & Node.js web applications built for speed, security, and enterprise-scale traffic.',
    tag: 'Engineering',
    color: 'indigo'
  },
  {
    id: 3,
    icon: <Smartphone className="w-5 h-5" />,
    title: 'Mobile App Development',
    desc: 'Flutter & React Native mobile apps for iOS & Android — crafted for smooth UX, performance, and App Store success.',
    tag: 'Mobile',
    color: 'purple'
  },
  {
    id: 4,
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Brand Identity & Visual Design',
    desc: 'Premium brand systems — logos, typography, color palette, and style guides that command immediate trust and recognition.',
    tag: 'Branding',
    color: 'pink'
  },
  {
    id: 5,
    icon: <Layout className="w-5 h-5" />,
    title: 'UI/UX Design & Prototyping',
    desc: 'User research, wireframes, Figma prototypes, and A/B-tested design systems that boost engagement and reduce churn.',
    tag: 'Design',
    color: 'teal'
  },
  {
    id: 6,
    icon: <Cpu className="w-5 h-5" />,
    title: 'Custom Software & Automation',
    desc: 'Custom CRM, ERP, and business automation platforms engineered to replace fragmented tools with one powerful system.',
    tag: 'Enterprise',
    color: 'orange'
  },
];

const tagColorMap: Record<string, string> = {
  blue:   'bg-blue-100 text-blue-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  purple: 'bg-purple-100 text-purple-700',
  pink:   'bg-pink-100 text-pink-700',
  teal:   'bg-teal-100 text-teal-700',
  orange: 'bg-orange-100 text-orange-700',
};

const iconBgMap: Record<string, string> = {
  blue:   'bg-blue-600',
  indigo: 'bg-indigo-600',
  purple: 'bg-purple-600',
  pink:   'bg-pink-500',
  teal:   'bg-teal-600',
  orange: 'bg-orange-500',
};

export const ServicesSection: React.FC = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find(s => s.id === active) || services[0];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Everything You Need To Win Online.
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm text-slate-500 leading-relaxed">
              From concept to conversion — we offer a complete suite of digital services to grow, design, and scale your business.
            </p>
          </div>
        </div>

        {/* Two-column layout — service list + expert panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Services Accordion List */}
          <div className="lg:col-span-7 space-y-2">
            {services.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                onClick={() => setActive(s.id)}
                className={`group cursor-pointer rounded-2xl border px-5 py-4 transition-all duration-300 flex items-start gap-4 ${
                  active === s.id
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/20'
                    : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-900'
                }`}
              >
                {/* Icon Block */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${
                  active === s.id ? 'bg-white/20' : iconBgMap[s.color]
                }`}>
                  {s.icon}
                </div>

                {/* Text Block */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className={`font-black text-sm sm:text-base ${active === s.id ? 'text-white' : 'text-slate-900'}`}>
                      {s.title}
                    </h3>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                      active === s.id ? 'bg-white/20 text-white' : tagColorMap[s.color]
                    }`}>
                      {s.tag}
                    </span>
                  </div>
                  {active === s.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-xs text-blue-100 leading-relaxed mt-1"
                    >
                      {s.desc}
                    </motion.p>
                  )}
                </div>

                <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                  active === s.id ? 'text-white rotate-90' : 'text-slate-400 group-hover:text-blue-500'
                }`} />
              </motion.div>
            ))}

            <div className="pt-4">
              <a href="#contact">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-extrabold hover:bg-blue-600 transition-all shadow-md cursor-pointer">
                  <span>View All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>

          {/* Right: Expert / Visual Showcase Card */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-gradient-to-b from-blue-700 to-blue-900 relative"
            >
              <img
                src="/assets/service_expert_highlight.png"
                alt="PilotNemo IT Expert Consultant"
                className="w-full h-auto object-cover max-h-[440px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Info Card */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">Currently Viewing</div>
                <h3 className="font-black text-lg leading-snug mb-2">{activeService.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {['Proven ROI', 'Fast Delivery', 'Expert Team'].map(t => (
                    <span key={t} className="inline-flex items-center gap-1 text-[10px] font-bold bg-white/15 px-2.5 py-1 rounded-full border border-white/20">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" /> {t}
                    </span>
                  ))}
                </div>

                <a href="#contact">
                  <button className="w-full py-3 rounded-xl bg-white text-blue-700 font-extrabold text-xs hover:bg-blue-50 transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
