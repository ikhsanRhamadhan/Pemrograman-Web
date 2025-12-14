import { useState } from 'react';
import { Hero } from './components/Hero';
import { PlanetExplorer } from './components/PlanetExplorer';
import { SpaceFacts } from './components/SpaceFacts';
import { AstronautSection } from './components/AstronautSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900">
      <Hero />
      <PlanetExplorer />
      <SpaceFacts />
      <AstronautSection />
      <Footer />
    </div>
  );
}
