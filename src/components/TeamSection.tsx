import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const team = [
  {
    id: 1,
    image: '/assets/team_1.png',
    name: 'Priya Anand',
    role: 'Founder & CEO',
    bio: 'Digital strategist with 12+ years driving enterprise transformation across B2B SaaS, retail, and healthcare.',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    id: 2,
    image: '/assets/team_2.png',
    name: 'Rajesh Kumar',
    role: 'Lead Software Architect',
    bio: 'Full-stack expert in React, Node.js, and cloud systems delivering scalable, 99.9% uptime solutions.',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    id: 3,
    image: '/assets/team_3.png',
    name: 'Sneha Nair',
    role: 'Head of UI/UX Design',
    bio: 'Product designer creating research-backed, conversion-first digital experiences loved by millions of users.',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    id: 4,
    image: '/assets/team_4.png',
    name: 'Arjun Mehta',
    role: 'Growth & Performance Lead',
    bio: 'Performance marketing specialist managing multi-million dollar ad budgets with consistently measurable ROI.',
    social: { linkedin: '#', twitter: '#' }
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-4">
            MEET THE TEAM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            The Experts Behind Your Growth
          </h2>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            A dedicated cross-functional team of engineers, designers, and growth strategists ready to deliver world-class results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-blue-300 overflow-hidden transition-all duration-300 text-center"
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Social Links (Appear on Hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-md hover:bg-blue-700 hover:text-white transition-all"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-md hover:bg-blue-700 hover:text-white transition-all"
                    aria-label={`${member.name} Twitter`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-md hover:bg-blue-700 hover:text-white transition-all"
                    aria-label={`${member.name} Website`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Info Block */}
              <div className="p-5">
                <h3 className="font-black text-slate-900 text-base mb-0.5 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
