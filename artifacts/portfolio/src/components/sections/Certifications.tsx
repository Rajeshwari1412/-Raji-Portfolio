import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, FileBadge, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "IBM Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "2023",
    type: "Professional Certificate",
    color: "#6C63FF"
  },
  {
    title: "Salesforce Developer Virtual Internship",
    issuer: "AICTE & Salesforce",
    date: "2024",
    type: "Internship Certificate",
    color: "#8B5CF6"
  },
  {
    title: "Git & GitHub Mastery",
    issuer: "Coursera",
    date: "2023",
    type: "Technical Skill",
    color: "#00E5FF"
  },
  {
    title: "NPTEL Certification",
    issuer: "IIT Kharagpur (Cloud Computing)",
    date: "2023",
    type: "Academic Certification",
    color: "#6C63FF"
  },
  {
    title: "SAP Certification",
    issuer: "SAP",
    date: "2026",
    type: "Professional Certification",
    color: "#00E5FF"
  }
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 flex items-center gap-4">
            <Award className="text-accent" size={36} />
            Certifications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.03)',
              }}
            >
              {/* Colored background blob */}
              <div 
                className="absolute -right-6 -top-6 w-20 h-20 rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" 
                style={{ backgroundColor: cert.color }}
              />

              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileBadge size={40} className="text-white" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[10px] font-mono font-bold mb-3 px-2.5 py-1 w-fit rounded-full transition-colors"
                  style={{
                    background: `${cert.color}15`,
                    color: cert.color,
                    border: `1px solid ${cert.color}25`
                  }}
                >
                  {cert.type}
                </span>

                <h3 className="text-base font-bold text-white mb-2 leading-snug font-serif group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-white/50 mb-5 font-mono">{cert.issuer}</p>
                
                <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

