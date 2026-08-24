import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogs = [
  {
    id: 1,
    image: '/assets/project_3.png',
    category: 'Web Development',
    categoryColor: 'blue',
    title: '10 Proven Strategies to Boost Website Conversion Rates in 2025',
    desc: 'Discover data-backed techniques top B2B brands use to turn website visitors into qualified leads.',
    date: 'Aug 12, 2025',
    readTime: '5 min read',
    author: 'Sneha Nair'
  },
  {
    id: 2,
    image: '/assets/project_1.png',
    category: 'Mobile Apps',
    categoryColor: 'purple',
    title: 'Flutter vs React Native: Which Platform Wins in 2025?',
    desc: 'An honest technical breakdown to help you choose the right cross-platform mobile framework for your product.',
    date: 'Jul 28, 2025',
    readTime: '7 min read',
    author: 'Rajesh Kumar'
  },
  {
    id: 3,
    image: '/assets/project_2.png',
    category: 'Digital Growth',
    categoryColor: 'teal',
    title: 'How AI-Powered Lead Gen Is Reshaping B2B Marketing Funnels',
    desc: 'Explore how AI automation and intent data are helping brands generate 3× more qualified leads.',
    date: 'Jul 10, 2025',
    readTime: '6 min read',
    author: 'Arjun Mehta'
  },
];

const colorMap: Record<string, string> = {
  blue:   'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
  teal:   'bg-teal-100 text-teal-700',
};

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              INSIGHTS & NEWS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Expert Insights For Business Leaders
            </h2>
          </div>

          <div>
            <a href="#contact">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-xs font-extrabold hover:bg-blue-700 transition-all shadow-md cursor-pointer">
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-blue-300 overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${colorMap[blog.categoryColor]}`}>
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
                </div>

                <h3 className="font-black text-slate-900 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {blog.desc}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                  <span className="text-xs font-extrabold text-slate-600">{blog.author}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform duration-200">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
