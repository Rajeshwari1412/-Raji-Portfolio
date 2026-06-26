import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Sparkles, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const traits = [
  "Computer Science Engineering Student",
  "Google Gemini Campus Ambassador",
  "Salesforce Developer",
  "AI/ML Enthusiast",
  "Open Source Contributor",
  "Hackathon Finalist"
];

const education = [
  {
    institution: "KPRIT",
    degree: "B.Tech in Computer Science Engineering",
    period: "2023 – 2027",
    score: "CGPA 8.0+",
    location: "Hyderabad",
    icon: <GraduationCap className="text-primary" size={20} />
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate (MPC)",
    period: "2021 – 2023",
    score: "90%",
    location: "Hyderabad",
    icon: <Award className="text-secondary" size={20} />
  },
  {
    institution: "High School",
    degree: "SSC",
    period: "2020 – 2021",
    score: "96%",
    location: "Hyderabad",
    icon: <Sparkles className="text-accent" size={20} />
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
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Bio & Traits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="prose prose-invert max-w-none">
              <p className="text-lg text-white/70 leading-relaxed">
                Hello! I'm <strong className="text-white font-serif">Kotoju Rajeshwari</strong>. I am a dedicated engineering student deeply fascinated by the intersection of artificial intelligence and scalable software architecture. My journey involves translating complex problems into elegant, efficient, and robust code.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mt-4">
                Whether it's building predictive machine learning models, developing robust Salesforce CRM solutions, or participating in national hackathons, I bring an unwavering commitment to engineering excellence. I thrive in environments that challenge me to learn, adapt, and innovate.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 blur-[50px] group-hover:bg-primary/40 transition-colors" />
              <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="text-secondary" /> Identity Core
              </h3>
              <ul className="space-y-4">
                {traits.map((trait, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5, color: "#fff" }}
                    className="flex items-center gap-3 text-white/70 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="font-mono text-sm">{trait}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column: Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-white/10" />

            <div className="space-y-12">
              {education.map((edu, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="relative pl-16 group"
                >
                  {/* Timeline node */}
                  <div className="absolute left-[15px] top-1 w-8 h-8 rounded-full glass-card flex items-center justify-center bg-[#050816] border-white/20 z-10 group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                    {edu.icon}
                  </div>

                  <div className="glass-card p-6 rounded-2xl border-white/5 hover:border-white/20 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    <h4 className="text-xl font-bold text-white mb-1 font-serif">{edu.institution}</h4>
                    <p className="text-primary font-medium mb-4">{edu.degree}</p>
                    
                    <div className="grid grid-cols-2 gap-y-2 text-sm text-white/60 font-mono">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={14} className="text-secondary" />
                        <span className="text-white/90 font-bold">{edu.score}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2 mt-1">
                        <MapPin size={14} />
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
