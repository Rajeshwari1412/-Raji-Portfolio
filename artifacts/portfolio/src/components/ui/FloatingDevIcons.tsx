import { motion } from 'framer-motion';
import { 
  Cpu, Database, Sparkles, Code2, Cloud, Terminal,
  Layers, BrainCircuit, Network, GitFork, Binary, Globe, 
  Workflow, Shield, Gauge, Settings
} from 'lucide-react';

const FLOATING_ICONS = [
  // Top / Hero area (0% - 15%)
  { icon: Cpu, top: '3%', left: '3%', color: '#6C63FF', duration: 12, delay: 0 },
  { icon: Sparkles, top: '6%', right: '4%', color: '#00E5FF', duration: 10, delay: 1 },
  { icon: Code2, top: '10%', left: '5%', color: '#8B5CF6', duration: 14, delay: 2 },
  { icon: Database, top: '13%', right: '6%', color: '#00E5FF', duration: 16, delay: 0.5 },

  // About area (15% - 30%)
  { icon: Terminal, top: '18%', left: '4%', color: '#6C63FF', duration: 11, delay: 3 },
  { icon: Cloud, top: '22%', right: '5%', color: '#8B5CF6', duration: 15, delay: 1.5 },
  { icon: Layers, top: '26%', left: '5%', color: '#00E5FF', duration: 13, delay: 2.5 },
  { icon: BrainCircuit, top: '29%', right: '4%', color: '#6C63FF', duration: 17, delay: 0.8 },

  // Skills area (30% - 45%)
  { icon: Network, top: '33%', left: '3%', color: '#8B5CF6', duration: 14, delay: 4 },
  { icon: GitFork, top: '36%', right: '5%', color: '#00E5FF', duration: 12, delay: 1.2 },
  { icon: Binary, top: '40%', left: '5%', color: '#6C63FF', duration: 16, delay: 2.2 },
  { icon: Globe, top: '43%', right: '6%', color: '#8B5CF6', duration: 15, delay: 3.2 },

  // Experience area (45% - 60%)
  { icon: Workflow, top: '48%', left: '4%', color: '#00E5FF', duration: 13, delay: 0.4 },
  { icon: Shield, top: '52%', right: '4%', color: '#6C63FF', duration: 11, delay: 1.6 },
  { icon: Gauge, top: '56%', left: '5%', color: '#8B5CF6', duration: 18, delay: 2.8 },
  { icon: Settings, top: '59%', right: '5%', color: '#00E5FF', duration: 14, delay: 3.8 },

  // Projects area (60% - 75%)
  { icon: Code2, top: '64%', left: '3%', color: '#8B5CF6', duration: 12, delay: 0.2 },
  { icon: Database, top: '67%', right: '6%', color: '#6C63FF', duration: 15, delay: 1.4 },
  { icon: Cpu, top: '71%', left: '5%', color: '#00E5FF', duration: 13, delay: 2.6 },
  { icon: Sparkles, top: '74%', right: '4%', color: '#8B5CF6', duration: 17, delay: 0.9 },

  // Achievements / Certifications (75% - 90%)
  { icon: Terminal, top: '79%', left: '4%', color: '#00E5FF', duration: 14, delay: 4.1 },
  { icon: Cloud, top: '83%', right: '5%', color: '#6C63FF', duration: 12, delay: 1.3 },
  { icon: Layers, top: '87%', left: '5%', color: '#8B5CF6', duration: 16, delay: 2.3 },
  { icon: BrainCircuit, top: '91%', right: '6%', color: '#00E5FF', duration: 15, delay: 3.3 },

  // Contact / Footer area (90% - 100%)
  { icon: Network, top: '95%', left: '3%', color: '#6C63FF', duration: 13, delay: 0.5 },
  { icon: GitFork, top: '98%', right: '5%', color: '#8B5CF6', duration: 11, delay: 1.7 },
];

export function FloatingDevIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {FLOATING_ICONS.map((item, i) => {
        const IconComponent = item.icon;
        const style = item.left ? { left: item.left } : { right: item.right };
        
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none opacity-[0.06] md:opacity-[0.14]"
            style={{ 
              top: item.top,
              ...style,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 8, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <IconComponent 
              className="w-5 h-5 md:w-8 md:h-8" 
              style={{ color: item.color }} 
            />
          </motion.div>
        );
      })}
    </div>
  );
}
