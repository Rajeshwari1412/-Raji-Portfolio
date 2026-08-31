import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
];

const specialties = [
  'Artificial Intelligence',
  'Salesforce Cloud Dev',
  'Machine Learning Models',
  'Full-Stack Architecture',
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030014] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Premium Top Line Accent Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent" />
      
      {/* Background radial glows (Backlight accent mesh) */}
      <div className="absolute -bottom-48 -left-20 w-[400px] h-[300px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-48 -right-20 w-[400px] h-[300px] bg-[#00E5FF]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="flex flex-col items-start">
            <span 
              onClick={scrollToTop}
              className="text-3xl font-serif font-bold text-white tracking-wide cursor-pointer hover:opacity-95 transition-opacity interactive"
            >
              KR<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">.</span>
            </span>
            <p className="text-white/45 text-xs font-mono mt-3 tracking-wider uppercase">
              Building the future with AI & Code.
            </p>
            <p className="text-white/60 text-sm font-light leading-relaxed mt-4">
              CS Engineering student, Google Gemini Campus Ambassador, and AI/ML enthusiast engineering predictive systems and automating enterprise cloud environments.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col items-start md:pl-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#00E5FF] uppercase mb-5">
              // Explore
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center text-sm text-white/60 hover:text-white transition-all duration-300 interactive font-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] opacity-0 group-hover:opacity-100 mr-2 -ml-3 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#8B5CF6] uppercase mb-5">
              // Focus Areas
            </h4>
            <ul className="space-y-3">
              {specialties.map((item) => (
                <li key={item} className="text-xs font-mono text-white/50 flex items-center">
                  <span className="text-[#8B5CF6] mr-2">&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Socials & Connect */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white/80 uppercase mb-5">
              // Connect
            </h4>
            <a 
              href="mailto:rajikotoju@gmail.com" 
              className="text-sm font-light text-white/70 hover:text-[#00E5FF] hover:underline transition-colors mb-6 block"
            >
              rajikotoju@gmail.com
            </a>
            <div className="flex items-center gap-3">
              {/* Github */}
              <a 
                href="https://github.com/Rajeshwari1412" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl glass-card border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.08)]"
              >
                <Github size={16} />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/Rajeshwari2947" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl glass-card border border-white/5 flex items-center justify-center text-white/70 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,229,255,0.15)]"
              >
                <Linkedin size={16} />
              </a>

              {/* Mail */}
              <a 
                href="mailto:rajikotoju@gmail.com" 
                className="w-10 h-10 rounded-xl glass-card border border-white/5 flex items-center justify-center text-white/70 hover:text-[#6C63FF] hover:border-[#6C63FF]/30 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(108,99,255,0.15)]"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright details and Scroll back to top */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-white/40 text-xs font-mono tracking-wider text-center md:text-left">
            &copy; {currentYear} &bull; Made with <span className="inline-block text-[#00E5FF] animate-pulse">❤️</span> by Kotoju Rajeshwari
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-xs font-mono text-white/40 hover:text-[#00E5FF] transition-all duration-300 group interactive"
          >
            <span>BACK TO TOP</span>
            <div className="w-9 h-9 rounded-xl glass-card border border-white/5 flex items-center justify-center group-hover:border-[#00E5FF]/30 group-hover:bg-[#00E5FF]/5 transition-all">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-white/50 group-hover:text-[#00E5FF]" />
            </div>
          </button>

        </div>

      </div>
    </footer>
  );
}
