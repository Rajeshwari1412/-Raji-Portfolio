import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, Code2, Monitor, Database, Brain, Settings, GraduationCap, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const skillCategories = [
  { id: 'programming', name: 'Programming', icon: Code2, color: '#6C63FF', desc: 'Core languages for system and logic building' },
  { id: 'frontend', name: 'Frontend', icon: Monitor, color: '#00E5FF', desc: 'User interfaces and responsive designs' },
  { id: 'backend', name: 'Backend & DB', icon: Database, color: '#8B5CF6', desc: 'Server architectures and secure data logic' },
  { id: 'ai', name: 'AI / Data Science', icon: Brain, color: '#00E5FF', desc: 'Predictive modeling, NLP, and analytics' },
  { id: 'tools', name: 'Tools & Versioning', icon: Settings, color: '#8B5CF6', desc: 'Development environments and automation workflows' },
  { id: 'core', name: 'Computer Science Core', icon: GraduationCap, color: '#6C63FF', desc: 'Foundational systems and algorithms' },
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
  const [activeCategory, setActiveCategory] = useState('programming');
  const [searchQuery, setSearchQuery] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return searchQuery ? matchesSearch : matchesCategory;
  });

  const selectedCategoryMeta = skillCategories.find(c => c.id === activeCategory);

  // SVG parameters for radial progress circle
  const radius = 34;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Decorative background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title & Search bar */}
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

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#00E5FF] transition-colors" size={16} />
            <input 
              type="text"
              placeholder="Search entire catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0820]/60 border border-white/15 rounded-2xl py-3.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#00E5FF] focus:bg-[#0a0820]/90 transition-all font-mono"
            />
          </div>
        </motion.div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Categories List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="px-2 mb-2 text-xs font-mono font-bold text-white/45 tracking-widest uppercase">CATEGORIES</div>
            {skillCategories.map(cat => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id && !searchQuery;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory(cat.id);
                  }}
                  className={cn(
                    "w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 border relative group overflow-hidden",
                    isActive 
                      ? "bg-white text-black border-white shadow-[0_4px_25px_rgba(255,255,255,0.15)]" 
                      : "bg-[#0a0820]/30 text-white border-white/5 hover:border-white/15 hover:bg-[#0a0820]/50"
                  )}
                >
                  {/* Subtle active glow light behind */}
                  {isActive && (
                    <div 
                      className="absolute -left-10 top-0 bottom-0 w-24 blur-xl opacity-30 pointer-events-none"
                      style={{ background: cat.color }}
                    />
                  )}
                  
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-300"
                    style={{
                      background: isActive ? '#000' : `${cat.color}12`,
                      borderColor: isActive ? '#000' : `${cat.color}25`
                    }}
                  >
                    <Icon size={18} style={{ color: isActive ? '#fff' : cat.color }} />
                  </div>

                  <div className="flex-grow">
                    <div className="font-serif font-bold text-base leading-snug">{cat.name}</div>
                    <div className={cn("text-xs font-mono mt-0.5", isActive ? "text-black/60" : "text-white/45")}>
                      {cat.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Dials Grid (7 cols) */}
          <div className="lg:col-span-7">
            {/* Header label for Right Column */}
            <div className="px-2 mb-4 flex justify-between items-center text-xs font-mono font-bold tracking-widest text-white/45 uppercase">
              <span>
                {searchQuery ? `SEARCH RESULTS FOR "${searchQuery.toUpperCase()}"` : `${selectedCategoryMeta?.name.toUpperCase()} CATALOG`}
              </span>
              <span className="text-[#00E5FF] flex items-center gap-1">
                <Sparkles size={11} /> {filteredSkills.length} SKILLS
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredSkills.length > 0 ? (
                  filteredSkills.map((skill, index) => {
                    const strokeOffset = circumference - (skill.level / 100) * circumference;
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        key={skill.name}
                        className="glass-card p-5 rounded-2xl flex flex-col items-center gap-4 text-center group relative overflow-hidden"
                        style={{ border: '1px solid rgba(255, 255, 255, 0.03)' }}
                      >
                        {/* Glow halo in background of card */}
                        <div 
                          className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                          style={{ background: skill.color }}
                        />

                        {/* Circular Progress Dial */}
                        <div className="relative flex items-center justify-center">
                          <svg className="w-20 h-20 transform -rotate-90">
                            {/* Track Circle */}
                            <circle
                              cx="40"
                              cy="40"
                              r={radius}
                              className="stroke-white/5"
                              strokeWidth="3.5"
                              fill="transparent"
                            />
                            {/* Glowing Progress Circle */}
                            <motion.circle
                              cx="40"
                              cy="40"
                              r={radius}
                              stroke={skill.color}
                              strokeWidth="4"
                              fill="transparent"
                              strokeDasharray={circumference}
                              initial={{ strokeDashoffset: circumference }}
                              animate={{ strokeDashoffset: strokeOffset }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                            />
                          </svg>
                          
                          {/* Inner percent label */}
                          <span className="absolute text-[11px] font-mono font-bold text-white/90">
                            {skill.level}%
                          </span>
                        </div>

                        <div>
                          <h3 className="font-serif font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                            {skill.name}
                          </h3>
                          <span className="text-[9px] font-mono tracking-widest uppercase text-white/30 group-hover:text-[#00E5FF] transition-colors mt-0.5 block">
                            {skill.category}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full py-16 text-center text-white/40 font-mono flex flex-col items-center justify-center gap-2"
                  >
                    <div>No technical assets found matching</div>
                    <div className="text-secondary font-bold">"{searchQuery}"</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


