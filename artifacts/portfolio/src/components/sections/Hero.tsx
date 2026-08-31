import { motion, Variants } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronRight } from 'lucide-react';

function ProfilePhoto() {
  return (
    <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] flex items-center justify-center">
      {/* Background ambient glow halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6C63FF]/20 via-[#00E5FF]/10 to-[#8B5CF6]/15 blur-[60px] animate-pulse" />

      {/* Outer spinning technical grid ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[108%] h-[108%] border border-[#00E5FF]/20 border-dashed rounded-full pointer-events-none"
      />

      {/* Inner spinning telemetry ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[104%] h-[104%] border border-[#8B5CF6]/10 border-dotted rounded-full pointer-events-none"
      />

      {/* Floating Portrait Circle Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.02, 1],
          y: [0, -12, 0] 
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          },
          default: { duration: 1.2 }
        }}
        className="relative w-full h-full overflow-hidden rounded-full group z-10"
        style={{
          boxShadow: '0 0 50px rgba(108, 99, 255, 0.2), inset 0 0 40px rgba(0, 0, 0, 0.8)'
        }}
      >
        <img
          src="/rajeshwari-profile.jpg"
          alt="Kotoju Rajeshwari"
          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Radial Edge Vignette & Bottom Fade */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(circle, transparent 45%, #030014 96%), linear-gradient(to top, #030014 10%, transparent 45%)',
            opacity: 0.95
          }}
        />
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden bg-[#030014]">
      {/* Background ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Content (takes 7 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start pt-10 lg:pt-0"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5 backdrop-blur-md mb-6 relative overflow-hidden group shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:border-[#00E5FF]/45 transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-xs font-mono text-[#00E5FF]/90 font-bold tracking-widest">GOOGLE GEMINI STUDENT AMBASSADOR</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 leading-[1.1] tracking-tight"
          >
            <span className="block opacity-90 font-light text-white/90">Kotoju</span>
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
                  'Generative AI Specialist', 2000,
                  'Salesforce Cloud Developer', 2000,
                  'Machine Learning Engineer', 2000,
                  'Modern Full-Stack Creator', 2000,
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
            className="text-white/60 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light text-left"
          >
            CS Engineering Student & Google Gemini Student Ambassador bridging the gap between Artificial Intelligence, Salesforce Cloud ecosystems, and high-performance web architectures. Engineering predictive models and automating enterprise solutions.
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
                <span className="font-mono text-xs uppercase tracking-widest">Download CV</span>
                <Download size={14} className="group-hover:translate-y-1 transition-transform" />
              </div>
            </a>

            <button
              onClick={scrollToProjects}
              className="interactive group px-8 py-4 bg-white/5 border border-white/10 hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/5 text-white rounded-full font-medium transition-all backdrop-blur-md flex items-center gap-2"
            >
              <span className="font-mono text-xs uppercase tracking-widest">View Showcase</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 text-[#00E5FF] transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content: Portrait (takes 5 columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] lg:min-h-[480px]"
        >
          <ProfilePhoto />
        </motion.div>

      </div>
    </section>
  );
}
