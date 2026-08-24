import React from 'react';
import { motion } from 'framer-motion';
import { Code2, TrendingUp, Cpu, ArrowRight } from 'lucide-react';

const highlightItems = [
  {
    number: '01',
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    title: 'Full-Stack Web Engineering',
    desc: 'Custom React & TypeScript web applications engineered for 100/100 performance, high security, and conversion.',
    link: '#services'
  },
  {
    number: '02',
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    title: 'Performance Lead Growth',
    desc: 'Targeted Google & Meta ad campaigns engineered around verified buyer acquisition and ROI attribution.',
    link: '#services'
  },
  {
    number: '03',
    icon: <Cpu className="w-6 h-6 text-blue-600" />,
    title: 'Bespoke Enterprise Systems',
    desc: 'Custom CRM, ERP platforms, and cloud API automation built specifically for your unique operational workflow.',
    link: '#services'
  }
];

export const FeatureHighlights: React.FC = () => {
  return (
    <section className="py-8 bg-slate-50 relative z-20 -mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightItems.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              <a
                href={item.link}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
