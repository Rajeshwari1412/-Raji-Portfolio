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
    <div className="relative w-[300px] h-[380px] md:w-[320px] md:h-[420px] flex items-center justify-center">
      
      {/* Subtly soft background head glow */}
      <div className="absolute w-64 h-64 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      {/* Floating Portrait Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 25 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -12, 0] 
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          },
          default: { duration: 1.2 }
        }}
        className="relative w-full h-full overflow-hidden rounded-[2.5rem] group"
      >
        {/* The Headshot Image */}
        <img
          src="/rajeshwari-profile.jpg"
          alt="Kotoju Rajeshwari"
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out z-0"
          style={{
            filter: 'contrast(1.03) brightness(1.02)'
          }}
        />

        {/* Bottom Fade Mask (fades the jacket seamlessly into the background) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-95 pointer-events-none" />
        
        {/* Side Blend overlays for seamless emergence */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#030014]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#030014]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#030014]/40 to-transparent pointer-events-none" />
      </motion.div>

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

