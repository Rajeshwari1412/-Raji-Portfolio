import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { 
  Download, ChevronRight, Cpu, Database, Sparkles, Code2, Cloud, Terminal,
  Workflow, Layers, BrainCircuit
} from 'lucide-react';

const TECH_BADGES = [
  { label: 'Python', color: '#6C63FF', delay: 0, angle: -30, icon: Terminal },
  { label: 'AI / ML', color: '#00E5FF', delay: 0.4, angle: 42, icon: BrainCircuit },
  { label: 'Salesforce', color: '#8B5CF6', delay: 0.8, angle: 114, icon: Cloud },
  { label: 'React', color: '#00E5FF', delay: 1.2, angle: 186, icon: Layers },
  { label: 'Gemini', color: '#6C63FF', delay: 1.6, angle: 258, icon: Sparkles },
];

const FLOATING_BG_ICONS = [
  { icon: Cpu, top: '12%', left: '8%', size: 36, color: '#6C63FF', delay: 0 },
  { icon: Code2, top: '22%', left: '42%', size: 28, color: '#00E5FF', delay: 1 },
  { icon: Database, top: '68%', left: '6%', size: 40, color: '#8B5CF6', delay: 2 },
  { icon: Sparkles, top: '78%', left: '45%', size: 32, color: '#00E5FF', delay: 1.5 },
  { icon: Cloud, top: '15%', left: '85%', size: 42, color: '#8B5CF6', delay: 0.5 },
  { icon: Terminal, top: '62%', left: '90%', size: 34, color: '#6C63FF', delay: 2.5 },
];

function ProfilePhoto() {
  return (
    <div className="relative w-[320px] h-[400px] md:w-[340px] md:h-[445px] flex items-center justify-center scale-95 md:scale-100">
      
      {/* Outer ambient glow background halos */}
      <div className="absolute w-[360px] h-[460px] rounded-[2rem] bg-gradient-to-r from-primary/10 via-[#00E5FF]/5 to-accent/10 blur-[80px] pointer-events-none" />
      
      {/* Premium Portrait Card Container with Entry animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full rounded-[2rem] p-[1.5px] overflow-visible group"
      >
        {/* Floating Animation wrapper */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full rounded-[2rem] p-[1.5px] overflow-visible relative"
          style={{
            background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.4), rgba(0, 229, 255, 0.1), rgba(139, 92, 246, 0.4))',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Main Card Inner Frame */}
          <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#0a0820]/95 relative flex flex-col">
            
            {/* Executive Headshot image */}
            <img
              src="/rajeshwari-profile.jpg"
              alt="Kotoju Rajeshwari"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out z-0"
            />

            {/* Diagonal sweeping shine glare overlay */}
            <motion.div 
              className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 z-10 pointer-events-none"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ 
                repeat: Infinity, 
                repeatDelay: 5, 
                duration: 2.2, 
                ease: "easeInOut" 
              }}
            />

            {/* Frosted Glass Overlay Badge at the bottom of the card */}
            <div className="absolute bottom-4 left-4 right-4 z-20 backdrop-blur-md bg-[#030014]/75 border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-lg">
              <div>
                <div className="text-white font-serif font-bold text-sm tracking-wide">Kotoju Rajeshwari</div>
                <div className="text-[10px] font-mono text-white/50 mt-0.5 tracking-widest uppercase">Campus Ambassador</div>
              </div>
              
              {/* Status dot */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-green-400">ACTIVE</span>
              </div>
            </div>

            {/* Tech Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 z-0 pointer-events-none" />
          </div>


        {/* Floating tech badges anchored to the corners */}
        
        {/* Badge 1: Python - Top Left */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 -left-6 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-white whitespace-nowrap backdrop-blur-md glass-card"
          style={{
            border: '1px solid rgba(108, 99, 255, 0.4)',
            boxShadow: '0 0 15px rgba(108, 99, 255, 0.2)'
          }}
        >
          <div className="w-5 h-5 rounded-md flex items-center justify-center bg-[#6C63FF]/15">
            <Terminal size={12} className="text-[#6C63FF]" />
          </div>
          <span>Python</span>
        </motion.div>

        {/* Badge 2: AI / ML - Top Right */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -top-4 -right-6 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-white whitespace-nowrap backdrop-blur-md glass-card"
          style={{
            border: '1px solid rgba(0, 229, 255, 0.4)',
            boxShadow: '0 0 15px rgba(0, 229, 255, 0.2)'
          }}
        >
          <div className="w-5 h-5 rounded-md flex items-center justify-center bg-[#00E5FF]/15">
            <BrainCircuit size={12} className="text-[#00E5FF]" />
          </div>
          <span>AI / ML</span>
        </motion.div>

        {/* Badge 3: Salesforce - Middle Left */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 -left-10 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-white whitespace-nowrap backdrop-blur-md glass-card"
          style={{
            border: '1px solid rgba(139, 92, 246, 0.4)',
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)'
          }}
        >
          <div className="w-5 h-5 rounded-md flex items-center justify-center bg-[#8B5CF6]/15">
            <Cloud size={12} className="text-[#8B5CF6]" />
          </div>
          <span>Salesforce</span>
        </motion.div>

        {/* Badge 4: React - Bottom Right */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-20 -right-8 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-white whitespace-nowrap backdrop-blur-md glass-card"
          style={{
            border: '1px solid rgba(0, 229, 255, 0.4)',
            boxShadow: '0 0 15px rgba(0, 229, 255, 0.2)'
          }}
        >
          <div className="w-5 h-5 rounded-md flex items-center justify-center bg-[#00E5FF]/15">
            <Layers size={12} className="text-[#00E5FF]" />
          </div>
          <span>React</span>
        </motion.div>

        {/* Badge 5: Gemini - Bottom Left */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-24 -left-12 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-white whitespace-nowrap backdrop-blur-md glass-card"
          style={{
            border: '1px solid rgba(108, 99, 255, 0.4)',
            boxShadow: '0 0 15px rgba(108, 99, 255, 0.2)'
          }}
        >
          <div className="w-5 h-5 rounded-md flex items-center justify-center bg-[#6C63FF]/15">
            <Sparkles size={12} className="text-[#6C63FF]" />
          </div>
          <span>Gemini</span>
        </motion.div>

        </motion.div>
      </motion.div>

      {/* Particle dots */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * 360;
        const r = 250 + Math.sin(i * 1.7) * 30;
        const rad = (angle * Math.PI) / 180;
        const px = Math.cos(rad) * r * 0.45;
        const py = Math.sin(rad) * r * 0.45;
        const size = 1.5 + (i % 3);
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              x: px, y: py,
              width: size, height: size,
              background: i % 3 === 0 ? '#6C63FF' : i % 3 === 1 ? '#00E5FF' : '#8B5CF6',
              opacity: 0.5,
            }}
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2 + (i % 4), repeat: Infinity, delay: i * 0.15 }}
          />
        );
      })}
    </div>
  );
}


export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Floating background developer icons */}
      {FLOATING_BG_ICONS.map((item, i) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={i}
            className="absolute hidden md:block opacity-[0.06] pointer-events-none z-0"
            style={{ top: item.top, left: item.left }}
            animate={{
              y: [0, -18, 0],
              x: [0, 8, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <IconComponent size={item.size} style={{ color: item.color }} />
          </motion.div>
        );
      })}

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start pt-10 lg:pt-0"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-xs font-mono text-[#00E5FF]/90 font-bold tracking-widest">GOOGLE GEMINI CAMPUS AMBASSADOR</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 leading-[1.1] tracking-tight"
          >
            <span className="block opacity-90 font-light">Kotoju</span>
            <span
              className="block pb-2 drop-shadow-[0_0_35px_rgba(108,99,255,0.2)] font-extrabold"
              style={{
                backgroundImage: 'linear-gradient(90deg, #6C63FF, #00E5FF, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Rajeshwari
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="h-10 md:h-12 mb-4 flex items-center">
            <span className="text-xl md:text-3xl font-mono text-white/90">
              <span className="text-[#00E5FF] mr-2 font-bold">&gt;</span>
              <TypeAnimation
                sequence={[
                  'AI Engineer', 2000,
                  'Salesforce Developer', 2000,
                  'ML Specialist', 2000,
                  'Full Stack Architect', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-bold font-serif"
              />
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed font-light"
          >
            Computer Science Engineering student specializing in AI & ML. Crafting intelligent predictive architectures, automating enterprise systems with Salesforce Apex/LWC, and developing high-performance full-stack solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#"
              download
              className="interactive group relative px-8 py-4 text-white rounded-full font-medium overflow-hidden shadow-[0_4px_25px_rgba(108,99,255,0.25)] hover:shadow-[0_4px_35px_rgba(108,99,255,0.4)] transition-all"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)' }}
            >
              <div className="relative flex items-center gap-2">
                <span className="font-mono">Download CV</span>
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </div>
            </a>

            <button
              onClick={scrollToProjects}
              className="interactive group px-8 py-4 bg-white/5 border border-white/10 hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/5 text-white rounded-full font-medium transition-all backdrop-blur-md flex items-center gap-2"
            >
              <span className="font-mono">View Showcase</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 text-[#00E5FF] transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right — Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-[500px] lg:h-[600px] w-full relative flex items-center justify-center"
        >
          <ProfilePhoto />
        </motion.div>

      </div>
    </section>
  );
}

