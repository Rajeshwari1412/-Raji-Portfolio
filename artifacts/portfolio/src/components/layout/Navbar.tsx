import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'py-4 glass-nav' : 'py-6 bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl font-serif font-bold text-white cursor-pointer interactive"
            onClick={() => scrollTo('#home')}
          >
            KR<span className="text-secondary">.</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 interactive',
                    activeSection === item.href.substring(1)
                      ? 'bg-primary/20 text-white shadow-[0_0_15px_rgba(108,99,255,0.3)]'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white interactive p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        "fixed inset-0 bg-[#050816]/95 backdrop-blur-xl z-40 transition-all duration-300 md:hidden flex flex-col items-center justify-center",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <ul className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollTo(item.href)}
                className={cn(
                  'text-2xl font-serif tracking-wide transition-colors interactive',
                  activeSection === item.href.substring(1)
                    ? 'text-secondary glow-text-cyan'
                    : 'text-white/70 hover:text-white'
                )}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
