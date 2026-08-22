import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Calendar, Send, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import type { LeadFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceNeeded: 'Digital Marketing',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="START A CONVERSATION"
          title="Get in Touch"
          subtitle="Have an idea, challenge, or project in mind? We're ready to discuss how we can help your business grow."
          align="left"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-nexus-bg rounded-3xl p-8 border border-slate-200/80 space-y-6">
              <h3 className="text-xl font-bold text-nexus-text mb-4">
                Direct Channels
              </h3>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp</div>
                  <div className="text-base font-bold text-nexus-text group-hover:text-emerald-600 transition-colors">
                    +1 (555) 123-4567
                  </div>
                  <div className="text-xs text-nexus-muted mt-0.5">Usually replies within 24h</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:hello@nexusdigital.com"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-nexus-blue hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-nexus-blue-50 text-nexus-blue flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-nexus-blue group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</div>
                  <div className="text-base font-bold text-nexus-text group-hover:text-nexus-blue transition-colors">
                    hello@nexusdigital.com
                  </div>
                  <div className="text-xs text-nexus-muted mt-0.5">For formal proposals & RFPs</div>
                </div>
              </a>

              {/* Phone Call Card */}
              <a
                href="tel:+15551234567"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-nexus-blue hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-nexus-blue-50 text-nexus-blue flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-nexus-blue group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Call</div>
                  <div className="text-base font-bold text-nexus-text group-hover:text-nexus-blue transition-colors">
                    +1 (555) 123-4567
                  </div>
                  <div className="text-xs text-nexus-muted mt-0.5">Mon - Fri: 9:00 AM - 6:00 PM</div>
                </div>
              </a>

              {/* Book a Call Action Banner */}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-nexus-navy text-white hover:bg-nexus-navy-light transition-colors shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-nexus-blue-secondary" />
                    <span className="font-bold text-sm">Book a Free 30-Min Growth Audit</span>
                  </div>
                  <span className="text-nexus-blue-secondary text-sm font-bold">Book →</span>
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Premium Compact Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-nexus-card relative">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-nexus-text mb-2">
                    Message Received!
                  </h3>
                  <p className="text-nexus-muted text-base max-w-md mb-8">
                    Thank you, {formData.name}. Our strategy team will review your business requirements and reach out within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        businessName: '',
                        serviceNeeded: 'Digital Marketing',
                        projectDetails: ''
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-nexus-text mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/20 outline-none text-sm text-nexus-text transition-all"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-nexus-text mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/20 outline-none text-sm text-nexus-text transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-nexus-text mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/20 outline-none text-sm text-nexus-text transition-all"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-nexus-text mb-2">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Acme Growth Inc."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/20 outline-none text-sm text-nexus-text transition-all"
                      />
                    </div>
                  </div>

                  {/* What do you need? Dropdown */}
                  <div>
                    <label htmlFor="serviceNeeded" className="block text-xs font-bold uppercase tracking-wider text-nexus-text mb-2">
                      What service do you need? *
                    </label>
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/20 outline-none text-sm text-nexus-text transition-all bg-white"
                    >
                      <option value="Digital Marketing">Digital Marketing & Lead Gen</option>
                      <option value="Full-Stack Web Development">Website / Web App Development</option>
                      <option value="Mobile App Development">Mobile App Development (iOS/Android)</option>
                      <option value="Branding & Identity">Branding & Visual Identity</option>
                      <option value="UI/UX Design">UI/UX Product Design</option>
                      <option value="Business Development">Business Development & Strategy</option>
                      <option value="Custom Software Development">Custom Software / Automation</option>
                      <option value="Other">Other / Full Growth Suite</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-bold uppercase tracking-wider text-nexus-text mb-2">
                      Project Details & Business Goals
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Tell us about your project, target launch timeline, or business challenge..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-nexus-blue focus:ring-2 focus:ring-nexus-blue/20 outline-none text-sm text-nexus-text transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    icon={isSubmitting ? <Sparkles className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  >
                    {isSubmitting ? 'Sending Request...' : 'Send Message →'}
                  </Button>

                  {/* Form Microcopy */}
                  <p className="text-center text-xs text-nexus-muted pt-2 font-medium">
                    🔒 No pressure. Just a confidential conversation about your business goals.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
