import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Sparkles, GraduationCap, MapPin, Calendar, Award, Code, BookOpen, Terminal, Heart, Zap } from 'lucide-react';

const traits = [
  { 
    title: "CS Engineering Student", 
    detail: "KPRIT / Score 80%", 
    status: "Year 3/4",
    icon: Code, 
    color: "#6C63FF" 
  },
  { 
    title: "Google Gemini Student Ambassador", 
    detail: "AI Awareness & Campus Lead", 
    status: "Student Ambassador",
    icon: Sparkles, 
    color: "#00E5FF" 
  },
  { 
    title: "Salesforce Developer", 
    detail: "Apex, LWC & CRM Automations", 
    status: "Intern",
    icon: Terminal, 
    color: "#8B5CF6" 
  },
  { 
    title: "AI/ML Intern", 
    detail: "Python Models & IBM SkillsBuild", 
    status: "Intern",
    icon: Zap, 
    color: "#00E5FF" 
  },
  { 
    title: "Open Source Contributor", 
    detail: "GirlScript Summer of Code", 
    status: "Contributor",
    icon: Heart, 
    color: "#6C63FF" 
  },
  { 
    title: "Hackathon Finalist", 
    detail: "SAP Innovation Marathon 4.0", 
    status: "Top 10",
    icon: Award, 
    color: "#8B5CF6" 
  }
];

const education = [
  {
    institution: "Kommuri Pratap Reddy Institute of Technology",
    degree: "B.Tech in Computer Science Engineering",
    period: "2023 – 2027",
    score: "80%",
    location: "Ghatkesar, Telangana",
    icon: <GraduationCap className="text-[#6C63FF]" size={20} />
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate (MPC)",
    period: "2021 – 2023",
    score: "90%",
    location: "ECIL, Telangana",
    icon: <Award className="text-[#00E5FF]" size={20} />
  },
  {
    institution: "Serenity Model High School",
    degree: "SSC",
    period: "2021",
    score: "96%",
    location: "Nalgonda, Telangana",
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
                Hello! I'm <strong className="text-white font-serif font-semibold">Kotoju Rajeshwari</strong>. I am a Computer Science undergraduate with a builder's mindset, turning messy data and ambiguous problems into working AI/ML models and full-stack products.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mt-4 font-light">
                I have hands-on experience across multiple ML internships, hackathons, and CRM development, with a track record of shipping projects that hit 90%+ accuracy benchmarks. I am driven by curiosity for how data-driven systems can solve everyday real-world problems.
              </p>
            </motion.div>

            {/* Traits interactive grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="gradient-border-glow p-5 rounded-2xl glass-card flex flex-col justify-between group relative overflow-hidden h-[110px]"
                >
                  {/* Glowing background blob */}
                  <div 
                    className="absolute -right-6 -bottom-6 w-14 h-14 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                    style={{ background: trait.color }}
                  />

                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${trait.color}15`,
                        borderColor: `${trait.color}30`,
                      }}
                    >
                      <trait.icon size={16} style={{ color: trait.color }} />
                    </div>
                    <div className="flex-grow">
                      <span className="font-mono text-[9px] text-white/40 tracking-wider uppercase">{trait.status}</span>
                      <h4 className="font-serif font-bold text-sm text-white group-hover:text-[#00E5FF] transition-colors">{trait.title}</h4>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-white/60 mt-2 border-t border-white/5 pt-2 group-hover:text-white transition-colors duration-300">
                    {trait.detail}
                  </div>
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

