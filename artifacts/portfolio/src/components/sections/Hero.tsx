import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronRight } from 'lucide-react';

const TECH_BADGES = [
  { label: 'Python', color: '#6C63FF', delay: 0, angle: 0 },
  { label: 'AI / ML', color: '#00E5FF', delay: 0.4, angle: 72 },
  { label: 'Salesforce', color: '#8B5CF6', delay: 0.8, angle: 144 },
  { label: 'React', color: '#00E5FF', delay: 1.2, angle: 216 },
  { label: 'Gemini', color: '#6C63FF', delay: 1.6, angle: 288 },
];

function CSSGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow rings */}
      <div className="absolute w-[340px] h-[340px] rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
      <div className="absolute w-[420px] h-[420px] rounded-full border border-secondary/8 animate-[spin_30s_linear_infinite_reverse]" />
      <div className="absolute w-[500px] h-[500px] rounded-full border border-accent/6 animate-[spin_45s_linear_infinite]" />

      {/* Ambient glow blobs */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/15 blur-[80px] animate-pulse" />
      <div className="absolute w-48 h-48 rounded-full bg-secondary/10 blur-[60px] animate-pulse [animation-delay:1s]" />

      {/* Core sphere */}
      <div className="relative w-56 h-56 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 35% 35%, #2d1f6e 0%, #161240 45%, #080520 100%)',
          boxShadow: `
            0 0 60px rgba(108,99,255,0.35),
            0 0 120px rgba(108,99,255,0.15),
            inset 0 0 40px rgba(108,99,255,0.2),
            inset 0 0 80px rgba(0,0,0,0.5)
          `,
        }}
      >
        {/* Sphere highlight */}
        <div className="absolute top-5 left-7 w-16 h-10 rounded-full bg-white/10 blur-sm rotate-[-20deg]" />
        <div className="absolute top-7 left-9 w-8 h-5 rounded-full bg-white/20 blur-[2px] rotate-[-20deg]" />
        {/* Equator ring */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
        <div className="absolute top-[40%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
        {/* Grid lines */}
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(108,99,255,0.3) 28px, rgba(108,99,255,0.3) 29px),
              repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(108,99,255,0.3) 28px, rgba(108,99,255,0.3) 29px)
            `,
          }}
        />
      </div>

      {/* Orbiting tech badges */}
      {TECH_BADGES.map((badge, i) => {
        const rad = (badge.angle * Math.PI) / 180;
        const rx = 200; // ellipse x radius
        const ry = 90;  // ellipse y radius
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
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * 360;
        const r = 230 + Math.sin(i * 1.7) * 40;
        const rad = (angle * Math.PI) / 180;
        const px = Math.cos(rad) * r * 0.5;
        const py = Math.sin(rad) * r * 0.3;
        const size = Math.random() * 3 + 1;
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
            transition={{ duration: 2 + (i % 4), repeat: Infinity, delay: i * 0.1 }}
          />
        );
      })}
    </div>
  );
}

export function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll('.char');
      gsap.fromTo(
        chars,
        { y: 100, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.05, ease: 'back.out(1.7)', delay: 2.5 }
      );
    }
  }, []);

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

          <h1
            ref={nameRef}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 leading-[1.1] [perspective:1000px]"
          >
            <span className="block overflow-hidden pb-2">
              {'Kotoju'.split('').map((char, i) => (
                <span key={i} className="char inline-block origin-bottom">{char}</span>
              ))}
            </span>
            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent pb-2">
              {'Rajeshwari'.split('').map((char, i) => (
                <span key={i} className="char inline-block origin-bottom">{char}</span>
              ))}
            </span>
          </h1>

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

        {/* Right — CSS Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 1.5, ease: 'easeOut' }}
          className="h-[500px] lg:h-[600px] w-full relative flex items-center justify-center"
        >
          <CSSGlobe />
        </motion.div>

      </div>
    </section>
  );
}
