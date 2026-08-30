import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Trophy, Star, Target, Zap, Flag } from 'lucide-react';

const achievements = [
  {
    title: "Google Gemini Campus Ambassador",
    value: 1,
    suffix: "st",
    description: "Selected to represent Google Gemini on campus, driving AI awareness.",
    icon: <Star className="text-blue-400" size={24} />,
    color: "from-blue-500/10 to-transparent",
    glowColor: "rgba(59,130,246,0.15)",
    borderColor: "border-blue-500/20 hover:border-blue-500/40"
  },
  {
    title: "SAP Innovation Marathon",
    value: 10,
    suffix: "Top",
    description: "National Finalist for developing the Smart Guardian AI Road Safety System.",
    icon: <Trophy className="text-yellow-400" size={24} />,
    color: "from-yellow-500/10 to-transparent",
    glowColor: "rgba(234,179,8,0.15)",
    borderColor: "border-yellow-500/20 hover:border-yellow-500/40"
  },
  {
    title: "Campus Ambassador",
    value: 100,
    suffix: "%",
    description: "Careers360 Ambassador, mentoring students on career pathways.",
    icon: <Target className="text-red-400" size={24} />,
    color: "from-red-500/10 to-transparent",
    glowColor: "rgba(239,68,68,0.15)",
    borderColor: "border-red-500/20 hover:border-red-500/40"
  },
  {
    title: "GirlScript Summer of Code",
    value: 2024,
    suffix: "",
    description: "Active open-source contributor developing impactful community tools.",
    icon: <Zap className="text-orange-400" size={24} />,
    color: "from-orange-500/10 to-transparent",
    glowColor: "rgba(249,115,22,0.15)",
    borderColor: "border-orange-500/20 hover:border-orange-500/40"
  },
  {
    title: "National Hackathons",
    value: 5,
    suffix: "+",
    description: "Excelled in multiple national-level coding competitions & solutions.",
    icon: <Flag className="text-green-400" size={24} />,
    color: "from-green-500/10 to-transparent",
    glowColor: "rgba(34,197,94,0.15)",
    borderColor: "border-green-500/20 hover:border-green-500/40"
  }
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">05.</span> Milestones
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 rounded-3xl relative overflow-hidden group border ${item.borderColor}`}
              style={{
                boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.2)`
              }}
              whileHover={{ y: -6, boxShadow: `0 12px 40px ${item.glowColor}` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center mb-6 shadow-lg bg-[#030014]/50 border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <div className="text-5xl font-serif font-bold text-white mb-2 flex items-baseline justify-center">
                  {isInView ? (
                    <CountUp end={item.value} duration={2.5} separator="," />
                  ) : "0"}
                  <span className="text-lg text-white/50 ml-1 font-mono font-medium">{item.suffix}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white/95 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-white/60 font-mono leading-relaxed mt-auto">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

