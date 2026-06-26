import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030510] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-3xl font-serif font-bold text-white mb-2">
              KR<span className="text-primary">.</span>
            </span>
            <p className="text-muted-foreground text-sm font-mono">
              Building the future with AI & Code.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Rajeshwari412" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-primary transition-colors interactive hover:shadow-[0_0_15px_rgba(108,99,255,0.4)]">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/rajeshwari412" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-secondary transition-colors interactive hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]">
              <Linkedin size={18} />
            </a>
            <a href="mailto:rajukjth@gmail.com" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-accent transition-colors interactive hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            Made with <span className="text-red-500">❤️</span> by Kotoju Rajeshwari
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors interactive group"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
