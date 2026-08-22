
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ProblemSection } from './components/ProblemSection';
import { GrowthSystem } from './components/GrowthSystem';
import { Services } from './components/Services';
import { OutcomesSection } from './components/OutcomesSection';
import { Process } from './components/Process';
import { SolutionFinder } from './components/SolutionFinder';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

export function App() {
  return (
    <div className="min-h-screen bg-nexus-bg text-nexus-text font-sans selection:bg-nexus-blue selection:text-white relative">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <TrustSection />
        <ProblemSection />
        <GrowthSystem />
        <Services />
        <OutcomesSection />
        <Process />
        <SolutionFinder />
        <ContactSection />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingContact />
    </div>
  );
}

export default App;
