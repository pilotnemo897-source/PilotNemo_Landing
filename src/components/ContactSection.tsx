import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    services: [] as string[],
    details: '',
    timeline: '1-3',
  });

  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    { label: 'MOBILE APP', icon: 'smartphone', val: 'Mobile App' },
    { label: 'WEB DEVELOPMENT', icon: 'code', val: 'Web Development' },
    { label: 'UI / UX DESIGN', icon: 'palette', val: 'UI UX Design' },
    { label: 'DIGITAL MARKETING', icon: 'campaign', val: 'Digital Marketing' },
    { label: 'BRANDING & DESIGN', icon: 'auto_awesome', val: 'Branding' },
    { label: 'CUSTOM SOFTWARE', icon: 'terminal', val: 'Custom Software' },
    { label: 'OTHER', icon: 'more_horiz', val: 'Other' },
  ];

  const handleServiceToggle = (val: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(val);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== val)
          : [...prev.services, val],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        company: '',
        services: [],
        details: '',
        timeline: '1-3',
      });
    }, 4500);
  };

  return (
    <section id="contact" className="py-20 border-t border-gray-200 relative overflow-hidden w-full max-w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
          {/* Left Side: Form (7 columns) */}
          <div className="md:col-span-7 pt-4 pr-0 md:pr-8 relative z-10">
            <span className="font-label-technical text-xs text-gray-800 tracking-widest uppercase mb-6 border border-gray-300 px-4 py-1.5 bg-gray-100 rounded-full inline-block font-bold shadow-xs">
              03 / START A PROJECT
            </span>
            <h2 className="font-headline-lg text-4xl sm:text-6xl text-gray-950 mb-4 leading-tight font-extrabold">
              Have an idea? <span className="text-blue-600">Let's build it.</span>
            </h2>
            <p className="font-body-lg text-lg text-gray-600 mb-3 max-w-2xl font-normal">
              Tell us what you're building. We'll help you figure out what's next.
            </p>
            <div className="font-body-md text-sm text-gray-700 mb-8 max-w-2xl bg-gray-50 border-l-4 border-gray-900 p-4 rounded-r-lg leading-relaxed font-medium">
              Whether you're starting a new product, improving an existing platform or looking to grow your digital presence, share a few details about your requirements and our team will review your request.
            </div>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-8 p-6 bg-gray-900 text-white border border-gray-800 rounded-xl shadow-md"
                >
                  <div className="flex items-center gap-3 mb-2 font-headline-md text-lg font-bold">
                    <span className="material-symbols-outlined text-2xl text-green-400">check_circle</span>
                    Project Intake Received!
                  </div>
                  <p className="font-body-md text-sm text-gray-300">
                    Thank you for reaching out! Our team will review your project details and get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="space-y-4 mb-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <label
                    htmlFor="name"
                    className="md:w-[32%] font-label-technical text-xs font-bold text-gray-900 tracking-widest uppercase"
                  >
                    Name *
                  </label>
                  <div className="relative md:w-[68%]">
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="form-input"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-sm">
                      person
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <label
                    htmlFor="phone"
                    className="md:w-[32%] font-label-technical text-xs font-bold text-gray-900 tracking-widest uppercase"
                  >
                    Mobile Number *
                  </label>
                  <div className="relative md:w-[68%]">
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-sm">
                      call
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <label
                    htmlFor="company"
                    className="md:w-[32%] font-label-technical text-xs font-bold text-gray-900 tracking-widest uppercase"
                  >
                    Company
                  </label>
                  <div className="relative md:w-[68%]">
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your organization"
                      className="form-input"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-sm">
                      domain
                    </span>
                  </div>
                </div>
              </div>

              {/* Services Needed Chips (Gray shade pills) */}
              <div className="pt-6 border-t border-gray-200">
                <label className="font-label-technical text-xs text-gray-900 font-bold block mb-4 uppercase tracking-widest">
                  WHAT DO YOU NEED?
                </label>
                <div className="flex flex-wrap gap-3">
                  {availableServices.map((srv) => {
                    const isSelected = formData.services.includes(srv.val);
                    return (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        type="button"
                        key={srv.val}
                        onClick={() => handleServiceToggle(srv.val)}
                        className={`flex items-center gap-2 px-3.5 py-2 border rounded-full font-label-technical text-[10px] font-bold uppercase transition-all cursor-pointer shadow-xs ${
                          isSelected
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm">{srv.icon}</span>
                        {srv.label}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Project Description */}
              <div className="pt-5 border-t border-gray-200">
                <label
                  htmlFor="details"
                  className="font-label-technical text-xs text-gray-900 font-bold block mb-3 uppercase tracking-widest"
                >
                  PROJECT DETAILS
                </label>
                <textarea
                  id="details"
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us about your project, goals, and target audience..."
                  className="form-input resize-none"
                />
              </div>

              {/* Expected Timeline */}
              <div className="pt-5 border-t border-gray-200">
                <label className="font-label-technical text-xs text-gray-700 block mb-3 uppercase tracking-widest font-bold">
                  EXPECTED TIMELINE
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'ASAP', val: 'ASAP' },
                    { label: '1–3 MONTHS', val: '1-3' },
                    { label: '3–6 MONTHS', val: '3-6' },
                  ].map((time) => (
                    <label
                      key={time.val}
                      className={`cursor-pointer flex items-center justify-center px-4 py-3 rounded-lg border font-label-technical text-xs uppercase transition-all text-center ${
                        formData.timeline === time.val
                          ? 'bg-gray-900 border-gray-900 text-white font-bold shadow-xs'
                          : 'bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={time.val}
                        checked={formData.timeline === time.val}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="sr-only"
                      />
                      <span className="font-semibold">
                        {time.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full sm:w-auto bg-gray-900 text-white font-label-technical text-xs uppercase px-8 py-4 tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2 group rounded-full cursor-pointer font-bold shadow-md"
                >
                  SEND PROJECT REQUEST
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </motion.button>
                <p className="font-label-small text-[10px] text-gray-500 max-w-xs uppercase leading-tight">
                  We review every project request and get back with the next steps.
                </p>
              </div>
            </form>
          </div>

          {/* Right Side Visual (5 columns, Gray shade card) */}
          <div className="hidden md:block md:col-span-5 relative h-full min-h-[700px] md:border-l border-gray-200 pl-8 z-10">
            <div className="sticky top-24">
              <div className="w-full h-[360px] relative flex justify-center items-center p-4 bg-gray-50 border border-gray-200 rounded-2xl group shadow-xs">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrP-zww0blUdHtUmLoCa-CASidtKkqYt9-HGD1iu0acJZ_lEGOqw-5syyvtY_rtbzeWU_f6vNvyGgQGWhEtn6CeqY9DxV4qdWGsGYubvT8ahW0ZgwN2Cx0Ik6cG0EMeHO19vVm74MZ0FtLtdudJxJ-W8GKxVh3fgugYkX6izZINBYafzcigJDZJcASWpSEomLnJw_N6ciVtQ8Y-iBuBPVVmByI5KMF8Vgv2ybQ-f6u0tK_QvUd7xOg6IAS8BEs3iUBfi8Zw1BiXX2l-zo"
                  alt="Product & User Experience Illustration"
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white border border-gray-300 px-3.5 py-1.5 rounded-full shadow-xs">
                  <span className="font-label-technical text-[10px] text-gray-900 tracking-widest uppercase font-bold">
                    PRODUCT
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 bg-white border border-gray-300 px-3.5 py-1.5 rounded-full shadow-xs">
                  <span className="font-label-technical text-[10px] text-gray-900 tracking-widest uppercase font-bold">
                    USER EXPERIENCE
                  </span>
                </div>
              </div>

              {/* Typography Lockup */}
              <div className="mt-6 border-l-2 border-gray-900 pl-4 bg-gray-50 p-4 rounded-r-xl border border-gray-200">
                <p className="font-label-technical text-xs text-gray-600 uppercase tracking-[0.18em] leading-loose">
                  FROM FIRST IDEA TO FINAL PRODUCT.
                  <br />
                  <span className="text-gray-950 font-bold">DESIGN.</span>
                  <br />
                  <span className="text-gray-950 font-bold">DEVELOPMENT.</span>
                  <br />
                  <span className="text-gray-950 font-bold">GROWTH.</span>
                  <br />
                  ONE CONNECTED TEAM.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div>
            <h3 className="font-headline-md text-2xl text-gray-950 mb-1 font-bold">
              READY WHEN YOU ARE.
            </h3>
            <p className="font-label-technical text-xs text-gray-500 uppercase tracking-widest">
              START WITH AN IDEA. WE'LL HELP YOU BUILD THE REST.
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-label-technical text-xs text-gray-800 bg-gray-100 border border-gray-300 px-5 py-2 hover:bg-gray-200 hover:text-black transition-all flex items-center gap-2 uppercase tracking-widest font-bold rounded-full cursor-pointer shadow-xs"
          >
            BACK TO TOP
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
