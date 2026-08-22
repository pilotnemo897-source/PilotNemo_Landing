import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Mail, X, MessageCircle } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expandable Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-3 space-y-2.5 flex flex-col items-end"
          >
            {/* WhatsApp Option */}
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-xs shadow-lg hover:bg-emerald-700 transition-all hover:scale-105"
            >
              <span>WhatsApp Chat</span>
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Direct Call Option */}
            <a
              href="tel:+15551234567"
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-nexus-navy text-white font-semibold text-xs shadow-lg hover:bg-nexus-navy-light transition-all hover:scale-105"
            >
              <span>Call Us</span>
              <Phone className="w-4 h-4" />
            </a>

            {/* Email Option */}
            <a
              href="mailto:hello@pilotnemo.com"
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-nexus-blue text-white font-semibold text-xs shadow-lg hover:bg-nexus-blue-hover transition-all hover:scale-105"
            >
              <span>Send Email</span>
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-nexus-blue text-white font-bold text-sm shadow-2xl hover:bg-nexus-blue-hover transition-all transform hover:scale-105 active:scale-95 border-2 border-white/20 cursor-pointer"
        aria-label="Contact Options Menu"
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            <span className="hidden sm:inline">Close</span>
          </>
        ) : (
          <>
            <MessageCircle className="w-5 h-5 animate-pulse" />
            <span className="hidden sm:inline">Let's Talk</span>
          </>
        )}
      </button>

    </div>
  );
};
