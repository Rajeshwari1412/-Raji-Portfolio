import { useEffect, useState } from 'react';
import Lenis from 'lenis';

import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { MouseFollower } from '@/components/ui/MouseFollower';
import { FloatingDevIcons } from '@/components/ui/FloatingDevIcons';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Achievements } from '@/components/sections/Achievements';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#030014] min-h-screen text-white font-sans selection:bg-primary/30 selection:text-white overflow-hidden relative">
      {/* Background grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      {/* Floating developer tool visual elements */}
      <FloatingDevIcons />
      
      <MouseFollower />
      
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
