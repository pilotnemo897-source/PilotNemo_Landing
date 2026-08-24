import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, Clock, CheckCircle2, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Blue 24/7 Support Bar (Top) */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-4 mb-12 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-blue-100">24/7 Direct Support Line</div>
              <div className="text-white font-black text-sm">+91 98765 43210</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-blue-100">Email Us Anytime</div>
              <div className="text-white font-black text-sm">hello@pilotnemo.com</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-blue-100">Business Hours</div>
              <div className="text-white font-black text-sm">Mon–Sat · 9AM–7PM IST</div>
            </div>
          </div>
          <a href="tel:+919876543210">
            <button className="px-5 py-2.5 rounded-full bg-white text-blue-700 font-extrabold text-xs hover:bg-blue-50 transition-all shadow-md cursor-pointer flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" /> Call Now
            </button>
          </a>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              CONTACT US
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Let's Start Building Your Success Story.
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            Share your project goals and we'll respond within 24 hours with a tailored proposal and roadmap.
          </p>
        </div>

        {/* Two-column: Form + Map card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 shadow-xl p-6 sm:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                <h3 className="text-2xl font-black text-slate-900 mb-2">Message Received!</h3>
                <p className="text-slate-500 text-sm max-w-xs">Our team will reach out within 24 hours with a tailored plan for your business goals.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@yourcompany.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Service Required</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a service...</option>
                      <option>Digital Marketing & SEO</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Brand Identity & Design</option>
                      <option>Custom Software / ERP</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Tell Us About Your Project *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project goals, timeline, and any specific requirements..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-600 text-white font-extrabold text-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send My Project Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-slate-400 text-center font-medium">
                  🔒 Your information is private & secure. We never share your data.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right: Location / Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Map Image (Placeholder styled) */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-100 h-56 sm:h-72 relative">
              <iframe
                title="PilotNemo Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d80.09036725!3d13.047727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-3xl"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-white/80 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <div>
                  <div className="text-xs font-black text-slate-900">PilotNemo HQ</div>
                  <div className="text-[10px] text-slate-500 font-medium">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>

            {/* Info Cards Stack */}
            {[
              { icon: <MapPin className="w-4 h-4" />, label: 'Office Location', value: 'Chennai, Tamil Nadu, India' },
              { icon: <Mail className="w-4 h-4" />, label: 'Email Address', value: 'hello@pilotnemo.com' },
              { icon: <Phone className="w-4 h-4" />, label: 'Phone & WhatsApp', value: '+91 98765 43210' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white px-5 py-4 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">{item.label}</div>
                  <div className="text-sm font-black text-slate-900">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
