import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const skillCategories = [
  { id: 'all', name: 'All Skills' },
  { id: 'programming', name: 'Programming' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'ai', name: 'AI / ML' },
  { id: 'tools', name: 'Tools' },
  { id: 'core', name: 'Core CS' },
];

const skills = [
  { name: 'Python', category: 'programming', level: 90 },
  { name: 'Java', category: 'programming', level: 85 },
  { name: 'JavaScript', category: 'programming', level: 80 },
  { name: 'C', category: 'programming', level: 75 },
  
  { name: 'HTML5', category: 'frontend', level: 95 },
  { name: 'CSS3', category: 'frontend', level: 90 },
  { name: 'React Native', category: 'frontend', level: 75 },
  { name: 'Flutter', category: 'frontend', level: 70 },
  
  { name: 'PostgreSQL', category: 'backend', level: 80 },
  { name: 'MySQL', category: 'backend', level: 85 },
  { name: 'Supabase', category: 'backend', level: 75 },
  
  { name: 'Machine Learning', category: 'ai', level: 85 },
  { name: 'NumPy', category: 'ai', level: 90 },
  { name: 'Pandas', category: 'ai', level: 90 },
  { name: 'Matplotlib', category: 'ai', level: 85 },
  { name: 'Scikit-Learn', category: 'ai', level: 80 },
  
  { name: 'Git', category: 'tools', level: 85 },
  { name: 'GitHub', category: 'tools', level: 90 },
  { name: 'VS Code', category: 'tools', level: 95 },
  { name: 'Canva', category: 'tools', level: 80 },
  
  { name: 'Data Structures', category: 'core', level: 80 },
  { name: 'DBMS', category: 'core', level: 85 },
  { name: 'Operating Systems', category: 'core', level: 75 },
  { name: 'Computer Networks', category: 'core', level: 75 },
  { name: 'OOP', category: 'core', level: 90 },
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
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

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

          <div className="relative w-full md:w-64 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-secondary transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-secondary focus:bg-white/10 transition-all font-mono"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-mono transition-all interactive",
                activeCategory === cat.id 
                  ? "bg-white text-[#050816] font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5"
              )}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skill Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center gap-3 group hover:border-secondary/50 transition-colors relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" style={{ width: `${skill.level}%` }} />
                  <div className="text-white font-serif font-medium text-center z-10 group-hover:text-secondary transition-colors">
                    {skill.name}
                  </div>
                  <div className="text-xs font-mono text-white/40 z-10">
                    {skill.level}%
                  </div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-12 text-center text-white/40 font-mono"
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
