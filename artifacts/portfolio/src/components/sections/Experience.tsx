import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Building2, Calendar, MapPin, ChevronRight, Cloud, Database, Cpu, Code2, BrainCircuit, BarChart3, Sparkles, Layers } from 'lucide-react';

const experiences = [
  {
    role: "Salesforce Developer Intern",
    company: "SmartBridge (AICTE Internship)",
    period: "Recent",
    location: "Remote",
    highlights: [
      "Engineered robust Apex Classes and Triggers to automate complex business processes.",
      "Developed interactive Lightning Web Components (LWC) for customized user interfaces.",
      "Optimized data querying using advanced SOQL techniques, improving system performance.",
      "Participated in comprehensive CRM development lifecycles."
    ],
    tech: ["Salesforce", "Apex", "LWC", "SOQL", "CRM"],
    decorIcons: [
      { icon: Cloud, label: 'Cloud CRM', color: '#8B5CF6' },
      { icon: Database, label: 'SOQL', color: '#6C63FF' },
      { icon: Code2, label: 'Apex', color: '#00E5FF' },
      { icon: Layers, label: 'LWC', color: '#8B5CF6' },
    ],
    codeSnippet: `trigger AccountHandler
  on Account (before insert) {
    for (Account acc : Trigger.new) {
      acc.Status__c = 'Active';
    }
  }`,
  },
  {
    role: "AI / ML Intern",
    company: "IBM SkillsBuild",
    period: "Past",
    location: "Remote",
    highlights: [
      "Conducted extensive Exploratory Data Analysis (EDA) on large datasets to identify patterns.",
      "Performed advanced Feature Engineering to enhance model predictive capabilities.",
      "Implemented Cross Validation techniques to ensure model reliability and prevent overfitting.",
      "Built and deployed predictive models using Scikit-Learn and Python ecosystems."
    ],
    tech: ["Python", "Scikit-Learn", "Machine Learning", "EDA", "Data Science"],
    decorIcons: [
      { icon: BrainCircuit, label: 'ML Model', color: '#00E5FF' },
      { icon: BarChart3, label: 'Analytics', color: '#6C63FF' },
      { icon: Cpu, label: 'Training', color: '#8B5CF6' },
      { icon: Sparkles, label: 'AI', color: '#00E5FF' },
    ],
    codeSnippet: `from sklearn.ensemble import
  RandomForestClassifier

model = RandomForestClassifier(
  n_estimators=100
)
model.fit(X_train, y_train)`,
  }
];

function DecorPanel({ exp, index, isInView }: { exp: typeof experiences[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.7, delay: index * 0.2 + 0.3 }}
      className="hidden md:flex md:w-[45%] flex-col items-center justify-center gap-6 py-4"
    >
      {/* Floating icon grid */}
      <div className="grid grid-cols-2 gap-4">
        {exp.decorIcons.map((item, i) => (
          <motion.div
            key={item.label}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            className="flex flex-col items-center gap-2 px-5 py-4 rounded-2xl backdrop-blur-md"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${item.color}30`,
              boxShadow: `0 0 20px ${item.color}15`,
            }}
          >
            <item.icon size={24} style={{ color: item.color }} />
            <span className="text-[10px] font-mono text-white/50 tracking-wider">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Mini code snippet */}
      <div
        className="w-full max-w-[240px] rounded-xl overflow-hidden"
        style={{
          background: 'rgba(5,8,22,0.7)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
          <div className="w-2 h-2 rounded-full bg-red-400/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-400/60" />
          <span className="ml-2 text-[9px] font-mono text-white/30">snippet.{index === 0 ? 'apex' : 'py'}</span>
        </div>
        <pre className="px-3 py-3 text-[10px] font-mono leading-relaxed text-white/40 overflow-hidden">
          {exp.codeSnippet}
        </pre>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      {/* Decorative bg */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">03.</span> Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0 mb-16 last:mb-0"
            >
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-[-4rem] w-[1px] bg-white/10 last:bottom-0" />
              
              {/* Mobile Timeline Line */}
              <div className="md:hidden absolute left-[15px] top-0 bottom-[-4rem] w-[1px] bg-white/10 last:bottom-0" />

              <div className={`md:flex items-start justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 rounded-full bg-[#050816] border-2 border-accent flex items-center justify-center z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <Briefcase size={16} className="text-white" />
                </div>

                {/* Content Card */}
                <div className="md:w-[45%] glass-card p-6 md:p-8 rounded-3xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{exp.role}</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-white/60 mb-6">
                      <div className="flex items-center gap-1.5 text-accent">
                        <Building2 size={14} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                          <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Panel (fills the empty side) */}
                <DecorPanel exp={exp} index={index} isInView={isInView} />

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

