import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, Code2, Monitor, Database, Brain, Settings, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const skillCategories = [
  { id: 'all', name: 'All Skills', icon: Code2, color: '#6C63FF' },
  { id: 'programming', name: 'Programming', icon: Code2, color: '#6C63FF' },
  { id: 'frontend', name: 'Frontend', icon: Monitor, color: '#00E5FF' },
  { id: 'backend', name: 'Backend', icon: Database, color: '#8B5CF6' },
  { id: 'ai', name: 'AI / ML', icon: Brain, color: '#00E5FF' },
  { id: 'tools', name: 'Tools', icon: Settings, color: '#8B5CF6' },
  { id: 'core', name: 'Core CS', icon: GraduationCap, color: '#6C63FF' },
];

const skills = [
  { name: 'Python', category: 'programming', level: 90, color: '#6C63FF' },
  { name: 'Java', category: 'programming', level: 85, color: '#6C63FF' },
  { name: 'JavaScript', category: 'programming', level: 80, color: '#6C63FF' },
  { name: 'C', category: 'programming', level: 75, color: '#6C63FF' },
  
  { name: 'HTML5', category: 'frontend', level: 95, color: '#00E5FF' },
  { name: 'CSS3', category: 'frontend', level: 90, color: '#00E5FF' },
  { name: 'React Native', category: 'frontend', level: 75, color: '#00E5FF' },
  { name: 'Flutter', category: 'frontend', level: 70, color: '#00E5FF' },
  
  { name: 'PostgreSQL', category: 'backend', level: 80, color: '#8B5CF6' },
  { name: 'MySQL', category: 'backend', level: 85, color: '#8B5CF6' },
  { name: 'Supabase', category: 'backend', level: 75, color: '#8B5CF6' },
  
  { name: 'Machine Learning', category: 'ai', level: 85, color: '#00E5FF' },
  { name: 'NumPy', category: 'ai', level: 90, color: '#00E5FF' },
  { name: 'Pandas', category: 'ai', level: 90, color: '#00E5FF' },
  { name: 'Matplotlib', category: 'ai', level: 85, color: '#00E5FF' },
  { name: 'Scikit-Learn', category: 'ai', level: 80, color: '#00E5FF' },
  
  { name: 'Git', category: 'tools', level: 85, color: '#8B5CF6' },
  { name: 'GitHub', category: 'tools', level: 90, color: '#8B5CF6' },
  { name: 'VS Code', category: 'tools', level: 95, color: '#8B5CF6' },
  { name: 'Canva', category: 'tools', level: 80, color: '#8B5CF6' },
  
  { name: 'Data Structures', category: 'core', level: 80, color: '#6C63FF' },
  { name: 'DBMS', category: 'core', level: 85, color: '#6C63FF' },
  { name: 'Operating Systems', category: 'core', level: 75, color: '#6C63FF' },
  { name: 'Computer Networks', category: 'core', level: 75, color: '#6C63FF' },
  { name: 'OOP', category: 'core', level: 90, color: '#6C63FF' },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Decorative bg */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">02.</span> Technical Arsenal
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent rounded-full" />
          </div>

          <div className="relative w-full md:w-72 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-secondary transition-colors" size={16} />
            <input 
              type="text"
              placeholder="Search skills catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0820]/60 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-secondary focus:bg-[#0a0820]/90 transition-all font-mono"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2.5 mb-12"
        >
          {skillCategories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono transition-all interactive border",
                  activeCategory === cat.id 
                    ? "bg-white text-black font-semibold border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border-white/5"
                )}
              >
                <Icon size={14} style={{ color: activeCategory === cat.id ? '#000' : cat.color }} />
                {cat.name}
              </button>
            );
          })}
        </motion.div>

        {/* Skill Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className="glass-card p-5 rounded-2xl flex flex-col items-start gap-4 group hover:-translate-y-1 transition-transform relative overflow-hidden"
                  style={{
                    border: `1px solid rgba(255, 255, 255, 0.03)`,
                  }}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="text-white font-serif font-medium group-hover:text-secondary transition-colors text-base">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: `${skill.color}15`,
                        color: skill.color,
                        border: `1px solid ${skill.color}30`
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Sleek animated progress bar */}
                  <div className="w-full h-1.5 bg-[#030014] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, #00E5FF)`,
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                    />
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center text-white/40 font-mono"
              >
                No skills found matching "{searchQuery}"
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

