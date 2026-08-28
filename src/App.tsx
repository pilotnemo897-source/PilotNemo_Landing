import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import ApproachSection from './components/ApproachSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'team', 'approach', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1a1c1b] antialiased flex flex-col font-sans selection:bg-[#b85c24] selection:text-white">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Landing Page Content */}
      <main className="flex-grow architectural-grid">
        <Hero
          onStartProject={() => scrollToSection('contact')}
          onViewWork={() => scrollToSection('services')}
        />
        <AboutSection onStartProject={() => scrollToSection('contact')} />
        <ServicesSection />
        <TeamSection />
        <ApproachSection
          onStartProject={() => scrollToSection('contact')}
          onExploreServices={() => scrollToSection('services')}
        />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
