import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureHighlights } from './components/FeatureHighlights';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero — Royal blue card with team photo */}
        <Hero />

        {/* 2. Feature Highlights — 3 cards below hero */}
        <FeatureHighlights />

        {/* 3. Partner Logo Trust Strip */}
        <TrustSection />

        {/* 4. About Section — Team meeting photo + stats overlay */}
        <AboutSection />

        {/* 5. Services Section — Accordion list + Expert card */}
        <ServicesSection />

        {/* 6. Projects — 3 featured case study cards */}
        <ProjectsSection />

        {/* 7. Team — 4 member profile cards */}
        <TeamSection />

        {/* 8. Contact — Form + Google Map + info cards */}
        <ContactSection />

        {/* 9. Blog / Insights — 3 articles */}
        <BlogSection />
      </main>

      {/* 10. Pre-footer value strip + Dark navy footer */}
      <Footer />

      {/* Floating WhatsApp / Contact Button */}
      <FloatingContact />
    </div>
  );
}

export default App;
