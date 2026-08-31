import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';
import { 
  Search, Code2, Monitor, Database, Brain, Settings, GraduationCap, LineChart,
  Terminal, Coffee, Cpu, FileCode, Palette, Smartphone, BrainCircuit, Binary, 
  GitFork, Github, AppWindow, Image, Layers, HardDrive, Network
} from 'lucide-react';

interface SkillItem {
  name: string;
  category: string;
  categoryName: string;
  axisIndex: number;
  level: number;
  color: string;
}

const leftSkills: SkillItem[] = [
  // Programming Languages (Axis Index 0)
  { name: 'Python', category: 'programming', categoryName: 'Programming', axisIndex: 0, level: 90, color: '#6C63FF' },
  { name: 'Java', category: 'programming', categoryName: 'Programming', axisIndex: 0, level: 85, color: '#6C63FF' },
  { name: 'C Language', category: 'programming', categoryName: 'Programming', axisIndex: 0, level: 80, color: '#6C63FF' },
  { name: 'JavaScript', category: 'programming', categoryName: 'Programming', axisIndex: 0, level: 80, color: '#6C63FF' },

  // Web & App Development (Axis Index 1)
  { name: 'HTML', category: 'web_app', categoryName: 'Web & App', axisIndex: 1, level: 90, color: '#00E5FF' },
  { name: 'CSS', category: 'web_app', categoryName: 'Web & App', axisIndex: 1, level: 90, color: '#00E5FF' },
  { name: 'React Native', category: 'web_app', categoryName: 'Web & App', axisIndex: 1, level: 85, color: '#00E5FF' },
  { name: 'Flutter', category: 'web_app', categoryName: 'Web & App', axisIndex: 1, level: 80, color: '#00E5FF' },

  // Databases (Axis Index 3)
  { name: 'MySQL', category: 'databases', categoryName: 'Databases', axisIndex: 3, level: 85, color: '#00E5FF' },
  { name: 'PostgreSQL', category: 'databases', categoryName: 'Databases', axisIndex: 3, level: 80, color: '#00E5FF' },
  { name: 'Supabase', category: 'databases', categoryName: 'Databases', axisIndex: 3, level: 80, color: '#00E5FF' },

  // Tools & Platforms (Axis Index 5)
  { name: 'Git', category: 'core', categoryName: 'Core & Tools', axisIndex: 5, level: 85, color: '#6C63FF' },
  { name: 'GitHub', category: 'core', categoryName: 'Core & Tools', axisIndex: 5, level: 90, color: '#6C63FF' },
  { name: 'VS Code', category: 'core', categoryName: 'Core & Tools', axisIndex: 5, level: 95, color: '#6C63FF' },
  { name: 'Canva', category: 'core', categoryName: 'Core & Tools', axisIndex: 5, level: 80, color: '#6C63FF' },
];

const rightSkills: SkillItem[] = [
  // Data Analytics & BI (Axis Index 2)
  { name: 'Power BI', category: 'analytics', categoryName: 'Analytics & BI', axisIndex: 2, level: 85, color: '#8B5CF6' },
  { name: 'Adv Excel', category: 'analytics', categoryName: 'Analytics & BI', axisIndex: 2, level: 80, color: '#8B5CF6' },
  { name: 'SQL Modeling', category: 'analytics', categoryName: 'Analytics & BI', axisIndex: 2, level: 80, color: '#8B5CF6' },
  { name: 'DAX', category: 'analytics', categoryName: 'Analytics & BI', axisIndex: 2, level: 75, color: '#8B5CF6' },

  // Machine Learning Libraries (Axis Index 4)
  { name: 'NumPy', category: 'ml_libs', categoryName: 'ML & AI', axisIndex: 4, level: 85, color: '#8B5CF6' },
  { name: 'Pandas', category: 'ml_libs', categoryName: 'ML & AI', axisIndex: 4, level: 85, color: '#8B5CF6' },
  { name: 'Matplotlib', category: 'ml_libs', categoryName: 'ML & AI', axisIndex: 4, level: 80, color: '#8B5CF6' },
  { name: 'Scikit-Learn', category: 'ml_libs', categoryName: 'ML & AI', axisIndex: 4, level: 80, color: '#8B5CF6' },
  { name: 'ML Concepts', category: 'ml_libs', categoryName: 'ML & AI', axisIndex: 4, level: 85, color: '#8B5CF6' },

  // Core Concepts (Axis Index 5)
  { name: 'DSA', category: 'core', categoryName: 'Core & Tools', axisIndex: 5, level: 85, color: '#6C63FF' },
  { name: 'OOP', category: 'core', categoryName: 'Core & Tools', axisIndex: 5, level: 90, color: '#6C63FF' },
  { name: 'DBMS', category: 'core', categoryName: 'Core & Tools', axisIndex: 5, level: 85, color: '#6C63FF' },
  { name: 'OS', category: 'core', categoryName: 'Core & Tools', axisIndex: 5, level: 80, color: '#6C63FF' },
  { name: 'Networks', category: 'core', categoryName: 'Core & Tools', axisIndex: 5, level: 80, color: '#6C63FF' },
];

const categoryAxes = [
  { id: 'programming', name: 'Programming', value: 84, color: '#6C63FF' },
  { id: 'web_app', name: 'Web & App', value: 86, color: '#00E5FF' },
  { id: 'analytics', name: 'Analytics & BI', value: 80, color: '#8B5CF6' },
  { id: 'databases', name: 'Databases', value: 82, color: '#00E5FF' },
  { id: 'ml_libs', name: 'ML & AI', value: 83, color: '#8B5CF6' },
  { id: 'core', name: 'Core & Tools', value: 86, color: '#6C63FF' },
];

const cx = 200;
const cy = 200;
const r = 120;

function getRadarPoint(index: number, value: number) {
  const angle = (index * 60 - 90) * (Math.PI / 180);
  const x = cx + r * (value / 100) * Math.cos(angle);
  const y = cy + r * (value / 100) * Math.sin(angle);
  return { x, y };
}

function getHexagonPath(value: number) {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const pt = getRadarPoint(i, value);
    points.push(`${pt.x},${pt.y}`);
  }
  return `M ${points.join(' L ')} Z`;
}

function getSkillIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes('python')) return Terminal;
  if (n.includes('java') && !n.includes('script')) return Coffee;
  if (n.includes('javascript')) return Code2;
  if (n.includes('c language')) return Cpu;
  if (n.includes('html')) return FileCode;
  if (n.includes('css')) return Palette;
  if (n.includes('react') || n.includes('flutter')) return Smartphone;
  if (n.includes('sql') || n.includes('mysql') || n.includes('supabase') || n.includes('dbms')) return Database;
  if (n.includes('machine learning') || n.includes('scikit') || n.includes('ml')) return BrainCircuit;
  if (n.includes('numpy') || n.includes('pandas')) return Binary;
  if (n.includes('matplotlib')) return LineChart;
  if (n.includes('power bi')) return LineChart;
  if (n.includes('excel')) return Layers;
  if (n.includes('dax')) return Brain;
  if (n.includes('git')) return GitFork;
  if (n.includes('github')) return Github;
  if (n.includes('code') || n.includes('vscode')) return AppWindow;
  if (n.includes('canva')) return Image;
  if (n.includes('dsa') || n.includes('oop')) return Layers;
  if (n.includes('os') || n.includes('operating')) return HardDrive;
  if (n.includes('networks')) return Network;
  return Code2;
}

interface HexagonBadgeProps {
  skill: SkillItem;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  isFaded: boolean;
}

export function HexagonBadge({ skill, isHovered, onHover, onLeave, isFaded }: HexagonBadgeProps) {
  const Icon = getSkillIcon(skill.name);
  return (
    <motion.div 
      className="w-16 h-[72px] md:w-20 md:h-[86px] relative flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        background: isHovered ? skill.color : `${skill.color}20`,
        opacity: isFaded ? 0.25 : 1,
      }}
    >
      {/* Inner Card */}
      <div 
        className="w-[60px] h-[68px] md:w-[76px] md:h-[82px] flex flex-col items-center justify-center text-center p-1.5 md:p-2 transition-colors duration-300"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: isHovered ? 'rgba(10, 8, 32, 0.9)' : '#070518',
        }}
      >
        <Icon size={16} style={{ color: skill.color }} className="mb-0.5 md:mb-1" />
        <span className="text-[7px] md:text-[9px] font-mono font-bold text-white/90 leading-tight tracking-wider truncate max-w-[50px] md:max-w-[64px]">
          {skill.name}
        </span>
        <span className="text-[6px] md:text-[7px] font-mono text-white/40 mt-0.5">
          {skill.level}%
        </span>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  // Search logic
  const isSearchMatch = (name: string) => {
    if (!searchQuery) return true;
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const isAnySearchMatch = searchQuery !== '';

  const hoveredPt = useMemo(() => {
    if (!hoveredSkill) return null;
    return getRadarPoint(hoveredSkill.axisIndex, hoveredSkill.level);
  }, [hoveredSkill]);

  const radarPolygonPath = useMemo(() => {
    const points = categoryAxes.map((axis, i) => {
      const pt = getRadarPoint(i, axis.value);
      return `${pt.x},${pt.y}`;
    });
    return `M ${points.join(' L ')} Z`;
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden animate-grid" ref={ref}>
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title & Search bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 bg-primary/5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase text-white/90">RADAR ACUMEN</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">02.</span> Technical Arsenal
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto md:mx-0" />
          </div>

          <div className="relative w-full md:w-80 group mx-auto md:mx-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#00E5FF] transition-colors" size={16} />
            <input 
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0820]/60 border border-white/15 rounded-2xl py-3.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#00E5FF] focus:bg-[#0a0820]/90 transition-all font-mono"
            />
          </div>
        </motion.div>

        {/* 3-Column Layout: Left Honeycomb + Center Radar Chart + Right Honeycomb */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-center">
          
          {/* Left Grid (4 cols on desktop) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-4 order-2 lg:order-1 flex flex-wrap gap-3 md:gap-4 justify-center max-w-[400px] mx-auto"
          >
            {leftSkills.map((skill, idx) => {
              const matched = isSearchMatch(skill.name);
              const isFaded = isAnySearchMatch && !matched;
              const isHovered = hoveredSkill?.name === skill.name;

              return (
                <motion.div key={skill.name} variants={itemVariants}>
                  <HexagonBadge 
                    skill={skill} 
                    isHovered={isHovered}
                    isFaded={isFaded}
                    onHover={() => setHoveredSkill(skill)}
                    onLeave={() => setHoveredSkill(null)}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center Radar Chart (4 cols on desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center relative min-h-[420px]"
          >
            <div className="w-full max-w-[360px] md:max-w-[400px] aspect-square relative select-none">
              
              {/* SVG Radar Spider chart */}
              <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_25px_rgba(108,99,255,0.08)]">
                <defs>
                  <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6C63FF" />
                    <stop offset="50%" stopColor="#00E5FF" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>

                {/* Concentric regular hexagons (background grids) */}
                <path d={getHexagonPath(25)} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <path d={getHexagonPath(50)} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <path d={getHexagonPath(75)} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <path d={getHexagonPath(100)} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" strokeDasharray="3 3" />

                {/* Axis lines */}
                {categoryAxes.map((axis, i) => {
                  const endPt = getRadarPoint(i, 100);
                  return (
                    <line
                      key={axis.id}
                      x1={cx}
                      y1={cy}
                      x2={endPt.x}
                      y2={endPt.y}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1.2"
                    />
                  );
                })}

                {/* Main Proficiency Polygon */}
                <path
                  d={radarPolygonPath}
                  fill="rgba(108, 99, 255, 0.12)"
                  stroke="url(#radarGradient)"
                  strokeWidth="2.2"
                  className="transition-all duration-500"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(108,99,255,0.35))' }}
                />

                {/* Concentric node ticks on axes */}
                {categoryAxes.map((axis, i) => {
                  const pt = getRadarPoint(i, axis.value);
                  return (
                    <circle
                      key={axis.id}
                      cx={pt.x}
                      cy={pt.y}
                      r="3.5"
                      fill={axis.color}
                      stroke="#ffffff"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Glowing highlighted value tracing */}
                {hoveredSkill && hoveredPt && (
                  <g>
                    <line
                      x1={cx}
                      y1={cy}
                      x2={hoveredPt.x}
                      y2={hoveredPt.y}
                      stroke={hoveredSkill.color}
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      className="animate-pulse"
                    />
                    <circle
                      cx={hoveredPt.x}
                      cy={hoveredPt.y}
                      r="7.5"
                      fill={hoveredSkill.color}
                      className="animate-ping opacity-35"
                    />
                    <circle
                      cx={hoveredPt.x}
                      cy={hoveredPt.y}
                      r="4.5"
                      fill="#ffffff"
                      stroke={hoveredSkill.color}
                      strokeWidth="2"
                    />
                  </g>
                )}

                {/* Axes Outer Labels */}
                {categoryAxes.map((axis, i) => {
                  const labelPt = getRadarPoint(i, 118);
                  // Adjust alignment offsets based on position
                  let textAnchor: 'middle' | 'start' | 'end' = 'middle';
                  if (Math.abs(labelPt.x - cx) > 10) {
                    textAnchor = labelPt.x > cx ? 'start' : 'end';
                  }
                  
                  return (
                    <text
                      key={axis.id}
                      x={labelPt.x + (textAnchor === 'start' ? 6 : textAnchor === 'end' ? -6 : 0)}
                      y={labelPt.y + (i === 0 ? -6 : i === 3 ? 6 : 0)}
                      fill="rgba(255,255,255,0.4)"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor={textAnchor}
                      dominantBaseline="middle"
                      className="uppercase tracking-widest font-bold select-none"
                    >
                      {axis.name}
                    </text>
                  );
                })}
              </svg>

            </div>

            {/* Central HUD Readout Overlay (Bottom-center of the radar) */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full max-w-[280px] text-center bg-[#0a0820]/60 border border-white/5 px-5 py-3.5 rounded-2xl backdrop-blur-md relative overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                {hoveredSkill ? (
                  <motion.div
                    key={hoveredSkill.name}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-0.5"
                  >
                    <span className="text-[8px] font-mono tracking-widest text-[#00E5FF] uppercase font-bold">
                      {hoveredSkill.categoryName}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-white tracking-wide">
                      {hoveredSkill.name}
                    </h4>
                    <div className="text-[10px] font-mono text-white/50">
                      MASTERY: <strong style={{ color: hoveredSkill.color }}>{hoveredSkill.level}%</strong>
                    </div>
                  </motion.div>
                ) : (
                  <div className="space-y-0.5 text-white/35 font-mono text-[9px] tracking-wider">
                    <div>TELEMETRY ACTIVE</div>
                    <div className="text-[8px] opacity-60">HOVER BADGES TO MAP ACUMEN</div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Grid (4 cols on desktop) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-4 order-3 flex flex-wrap gap-3 md:gap-4 justify-center max-w-[400px] mx-auto"
          >
            {rightSkills.map((skill, idx) => {
              const matched = isSearchMatch(skill.name);
              const isFaded = isAnySearchMatch && !matched;
              const isHovered = hoveredSkill?.name === skill.name;

              return (
                <motion.div key={skill.name} variants={itemVariants}>
                  <HexagonBadge 
                    skill={skill} 
                    isHovered={isHovered}
                    isFaded={isFaded}
                    onHover={() => setHoveredSkill(skill)}
                    onLeave={() => setHoveredSkill(null)}
                  />
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
