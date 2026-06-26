import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, FileBadge } from 'lucide-react';

const certifications = [
  {
    title: "IBM Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "2023",
    type: "Professional Certificate"
  },
  {
    title: "Salesforce Developer Virtual Internship",
    issuer: "AICTE & Salesforce",
    date: "2024",
    type: "Internship Certificate"
  },
  {
    title: "Git & GitHub Mastery",
    issuer: "Coursera",
    date: "2023",
    type: "Technical Skill"
  },
  {
    title: "NPTEL Cloud Computing",
    issuer: "IIT Kharagpur",
    date: "2023",
    type: "Academic Certification"
  },
  {
    title: "Kaggle AI Agents",
    issuer: "Kaggle",
    date: "2024",
    type: "Specialization"
  }
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 flex items-center gap-4">
            <Award className="text-accent" size={32} />
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <FileBadge size={48} className="text-white" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-xs font-mono text-accent mb-2 px-2 py-1 bg-accent/10 w-fit rounded-full border border-accent/20">
                  {cert.type}
                </span>
                <h3 className="text-lg font-bold text-white mb-1 leading-snug">{cert.title}</h3>
                <p className="text-sm text-white/60 mb-4">{cert.issuer}</p>
                <div className="mt-auto text-xs font-mono text-white/40">
                  Issued: {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
