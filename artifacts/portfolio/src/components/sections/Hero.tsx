import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronRight } from 'lucide-react';

const TECH_BADGES = [
  { label: 'Python', color: '#6C63FF', delay: 0, angle: -30 },
  { label: 'AI / ML', color: '#00E5FF', delay: 0.4, angle: 42 },
  { label: 'Salesforce', color: '#8B5CF6', delay: 0.8, angle: 114 },
  { label: 'React', color: '#00E5FF', delay: 1.2, angle: 186 },
  { label: 'Gemini', color: '#6C63FF', delay: 1.6, angle: 258 },
];

function ProfilePhoto() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer animated glow rings */}
      <div className="absolute w-[340px] h-[340px] rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
      <div className="absolute w-[400px] h-[400px] rounded-full border border-secondary/8 animate-[spin_30s_linear_infinite_reverse]" />
      <div className="absolute w-[460px] h-[460px] rounded-full border border-accent/6 animate-[spin_45s_linear_infinite]" />

      {/* Ambient glow blobs behind photo */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/20 blur-[80px] animate-pulse" />
      <div className="absolute w-48 h-48 rounded-full bg-secondary/15 blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute w-56 h-56 rounded-full bg-accent/10 blur-[70px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Photo frame with glassmorphism border */}
      <div
        className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full"
        style={{
          padding: '4px',
          background: 'linear-gradient(135deg, #6C63FF, #00E5FF, #8B5CF6, #6C63FF)',
          boxShadow: `
            0 0 40px rgba(108,99,255,0.4),
            0 0 80px rgba(0,229,255,0.15),
            0 0 120px rgba(139,92,246,0.1)
          `,
        }}
      >
        {/* Inner glass border */}
        <div
          className="w-full h-full rounded-full overflow-hidden"
          style={{
            padding: '3px',
            background: 'rgba(10,8,32,0.8)',
          }}
        >
          {/* The actual photo */}
          <img
            src="/rajeshwari-profile.jpg"
            alt="Kotoju Rajeshwari"
            className="w-full h-full rounded-full object-cover object-top"
            style={{
              filter: 'contrast(1.05) brightness(1.02)',
            }}
          />
        </div>

        {/* Shine overlay on frame */}
        <div
          className="absolute top-2 left-6 w-20 h-8 rounded-full bg-white/15 blur-md rotate-[-30deg] pointer-events-none"
        />
      </div>

      {/* Status indicator dot */}
      <motion.div
        className="absolute"
        style={{ bottom: '38%', right: '18%' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.2, duration: 0.5, type: 'spring' }}
      >
        <div className="w-5 h-5 rounded-full bg-green-400 border-[3px] border-[#0a0820] shadow-[0_0_12px_rgba(74,222,128,0.6)]" />
      </motion.div>

      {/* Orbiting tech badges */}
      {TECH_BADGES.map((badge, i) => {
        const rad = (badge.angle * Math.PI) / 180;
        const rx = 210;
        const ry = 210;
        const x = Math.cos(rad) * rx;
        const y = Math.sin(rad) * ry;
        return (
          <motion.div
            key={badge.label}
            className="absolute"
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.8 + badge.delay, duration: 0.5, type: 'spring' }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-white whitespace-nowrap backdrop-blur-md"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: `1px solid ${badge.color}55`,
                boxShadow: `0 0 15px ${badge.color}40`,
              }}
            >
              {badge.label}
            </motion.div>
          </motion.div>
        );
      })}

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

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="flex flex-col items-start pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-mono text-white/80 tracking-wider">AVAILABLE FOR HIRE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.9, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 leading-[1.1]"
          >
            <span className="block">Kotoju</span>
            <span
              className="block pb-2"
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

          <div className="h-10 md:h-12 mb-4 flex items-center">
            <span className="text-xl md:text-3xl font-mono text-white/90">
              <span className="text-primary mr-2">&gt;</span>
              <TypeAnimation
                sequence={[
                  'AI Engineer', 2000,
                  'Salesforce Developer', 2000,
                  'ML Enthusiast', 2000,
                  'Full Stack Dev', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-bold"
              />
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed font-light"
          >
            Computer Science Engineering student passionate about Artificial Intelligence,
            scalable applications, innovation, and building impactful real-world solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#"
              download
              className="interactive group relative px-8 py-4 text-white rounded-full font-medium overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)' }}
            >
              <div className="relative flex items-center gap-2">
                <span>Download Resume</span>
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </div>
            </a>

            <button
              onClick={scrollToProjects}
              className="interactive group px-8 py-4 bg-white/5 border border-white/10 hover:border-secondary/50 hover:bg-white/10 text-white rounded-full font-medium transition-all backdrop-blur-md flex items-center gap-2"
            >
              <span>View Projects</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 text-secondary transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right — Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 1.5, ease: 'easeOut' }}
          className="h-[500px] lg:h-[600px] w-full relative flex items-center justify-center"
        >
          <ProfilePhoto />
        </motion.div>

      </div>
    </section>
  );
}

