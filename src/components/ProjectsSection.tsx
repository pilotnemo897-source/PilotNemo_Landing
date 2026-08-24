import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    image: '/assets/project_1.png',
    category: 'Web Development',
    title: 'Retail E-Commerce Platform',
    desc: 'End-to-end custom React e-commerce with CMS, payments, and analytics — achieving 3× revenue growth in 6 months.',
    tags: ['React', 'Node.js', 'Stripe'],
    categoryColor: 'blue',
  },
  {
    id: 2,
    image: '/assets/project_2.png',
    category: 'Software Engineering',
    title: 'Enterprise ERP Dashboard',
    desc: 'Custom internal operations platform integrating inventory, HR, and finance workflows with real-time dashboards.',
    tags: ['TypeScript', 'PostgreSQL', 'AWS'],
    categoryColor: 'indigo',
  },
  {
    id: 3,
    image: '/assets/project_3.png',
    category: 'Mobile App',
    title: 'HealthTech Patient Mobile App',
    desc: 'Flutter-built cross-platform app enabling patients to book, track, and consult with healthcare providers in real time.',
    tags: ['Flutter', 'Firebase', 'Healthcare'],
    categoryColor: 'purple',
  },
];

const colorMap: Record<string, string> = {
  blue:   'bg-blue-100 text-blue-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  purple: 'bg-purple-100 text-purple-700',
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              OUR RECENT WORK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Featured Projects &amp; Case Studies
            </h2>
          </div>

          <div>
            <a href="#contact">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-xs font-extrabold hover:bg-blue-700 transition-all shadow-md cursor-pointer">
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-blue-300 overflow-hidden transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-blue-950/30 transition-all duration-500" />

                {/* Arrow button (top-right like reference UI) */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-blue-600 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 cursor-pointer">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${colorMap[p.categoryColor]}`}>
                    {p.category}
                  </span>
                </div>

                <h3 className="font-black text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-4 font-normal">
                  {p.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
