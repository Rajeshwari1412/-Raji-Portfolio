import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Sparkles, GraduationCap, MapPin, Calendar, Award, Code, BookOpen, Terminal, Heart, Zap } from 'lucide-react';

const traits = [
  { text: "Computer Science Engineering Student", icon: Code, color: "#6C63FF" },
  { text: "Google Gemini Campus Ambassador", icon: Sparkles, color: "#00E5FF" },
  { text: "Salesforce Developer", icon: Terminal, color: "#8B5CF6" },
  { text: "AI/ML Enthusiast", icon: Zap, color: "#00E5FF" },
  { text: "Open Source Contributor", icon: Heart, color: "#6C63FF" },
  { text: "Hackathon Finalist", icon: Award, color: "#8B5CF6" }
];

const education = [
  {
    institution: "KPRIT",
    degree: "B.Tech in Computer Science Engineering",
    period: "2023 – 2027",
    score: "CGPA 8.0+",
    location: "Hyderabad",
    icon: <GraduationCap className="text-[#6C63FF]" size={20} />
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate (MPC)",
    period: "2021 – 2023",
    score: "90%",
    location: "Hyderabad",
    icon: <Award className="text-[#00E5FF]" size={20} />
  },
  {
    institution: "High School",
    degree: "SSC",
    period: "2020 – 2021",
    score: "96%",
    location: "Hyderabad",
    icon: <Sparkles className="text-[#8B5CF6]" size={20} />
  }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      {/* Decorative bg */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">01.</span> About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Bio & Traits (7 Cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="prose prose-invert max-w-none">
              <p className="text-lg text-white/70 leading-relaxed font-light">
                Hello! I'm <strong className="text-white font-serif font-semibold">Kotoju Rajeshwari</strong>. I am a dedicated engineering student deeply fascinated by the intersection of artificial intelligence and scalable software architecture. My journey involves translating complex problems into elegant, efficient, and robust code.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mt-4 font-light">
                Whether it's building predictive machine learning models, developing robust Salesforce CRM solutions, or participating in national hackathons, I bring an unwavering commitment to engineering excellence. I thrive in environments that challenge me to learn, adapt, and innovate.
              </p>
            </motion.div>

            {/* Traits interactive grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="gradient-border-glow p-4 rounded-2xl glass-card flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                    style={{
                      background: `${trait.color}15`,
                      border: `1px solid ${trait.color}30`,
                    }}
                  >
                    <trait.icon size={18} style={{ color: trait.color }} />
                  </div>
                  <span className="font-mono text-sm text-white/80 group-hover:text-white transition-colors">{trait.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Education Timeline (5 Cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-[#00E5FF] to-transparent opacity-35" />

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div 
                   key={i} 
                   variants={itemVariants}
                   className="relative pl-14 group"
                >
                  {/* Timeline node */}
                  <div className="absolute left-[15px] top-1 w-8 h-8 rounded-full glass-card flex items-center justify-center bg-[#030014] border-white/10 z-10 group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(108,99,255,0.2)]">
                    {edu.icon}
                  </div>

                  <div className="glass-card p-6 rounded-2xl border-white/5 hover:border-white/20 transition-colors relative overflow-hidden group/card">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent -translate-x-[100%] group-hover/card:translate-x-[100%] transition-transform duration-1000" />
                    
                    <h4 className="text-lg font-bold text-white mb-1 font-serif group-hover/card:text-primary transition-colors">{edu.institution}</h4>
                    <p className="text-white/60 font-mono text-sm mb-4">{edu.degree}</p>
                    
                    <div className="grid grid-cols-2 gap-y-2 text-xs text-white/50 font-mono">
                      <div className="flex items-center gap-2">
                        <Calendar size={13} className="text-white/40" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={13} className="text-[#00E5FF]" />
                        <span className="text-white/80 font-bold">{edu.score}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2 mt-1">
                        <MapPin size={13} className="text-white/40" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

