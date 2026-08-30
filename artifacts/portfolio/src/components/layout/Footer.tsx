import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030014] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Premium Top Line Accent Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent" />
      
      {/* Background radial glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[350px] h-[180px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Brand/Logo Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-3xl font-serif font-bold text-white tracking-wide">
              KR<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">.</span>
            </span>
            <p className="text-white/45 text-xs font-mono mt-2 tracking-wider uppercase">
              Building the future with AI & Code.
            </p>
          </div>

          {/* Social Brand Icons with unique color glows */}
          <div className="flex items-center gap-4">
            
            {/* Github */}
            <a 
              href="https://github.com/Rajeshwari1412" 
              target="_blank" 
              rel="noreferrer" 
              className="w-11 h-11 rounded-xl glass-card border border-white/5 flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Github size={18} />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/Rajeshwari2947" 
              target="_blank" 
              rel="noreferrer" 
              className="w-11 h-11 rounded-xl glass-card border border-white/5 flex items-center justify-center text-white/80 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
            >
              <Linkedin size={18} />
            </a>

            {/* Mail */}
            <a 
              href="mailto:rajikotoju@gmail.com" 
              className="w-11 h-11 rounded-xl glass-card border border-white/5 flex items-center justify-center text-white/80 hover:text-[#6C63FF] hover:border-[#6C63FF]/30 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(108,99,255,0.2)]"
            >
              <Mail size={18} />
            </a>

          </div>
        </div>

        {/* Bottom Bar Details */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-white/40 text-xs font-mono tracking-wider">
            &copy; {currentYear} &bull; Made with <span className="text-[#00E5FF] font-bold animate-pulse">❤️</span> by Kotoju Rajeshwari
          </div>

          {/* Back to top button */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-xs font-mono text-white/40 hover:text-[#00E5FF] transition-all duration-300 group"
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

