import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Trophy, Activity, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'AI', 'Web', 'ML'];

const projects = [
  {
    id: 1,
    title: "Smart Guardian",
    subtitle: "AI Road Safety System",
    description: "An advanced AI-powered system designed to enhance road safety through real-time accident detection and automated emergency alerts via GPS.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["AI", "GPS", "Computer Vision", "Python"],
    category: "AI",
    stat: "94% Prediction Accuracy",
    badge: "SAP Innovation Marathon Finalist",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "Tripzy",
    subtitle: "AI Travel Recommendation",
    description: "A smart travel companion that optimizes budget and suggests personalized itineraries by integrating real-time weather APIs and machine learning recommendation engines.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Machine Learning", "Weather API", "React", "Python"],
    category: "ML",
    stat: "92% Accuracy",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "Medicine Donation Center Locator",
    subtitle: "Healthcare Logistics Platform",
    description: "A vital platform connecting donors with centers, featuring real-time medicine search, donation tracking, and strict category guidelines for safe handling.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5e1672322?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Web Dev", "Database", "Logistics", "UI/UX"],
    category: "Web",
    stat: "96% System Reliability",
    links: {
      demo: "#",
      github: "#"
    }
  }
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Decorative bg */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">04.</span> Featured Work
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-mono transition-all interactive",
                  activeCategory === category 
                    ? "bg-white text-[#050816] font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={project.id}
                className="group relative h-full flex flex-col"
              >
                {/* Animated Border */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-secondary to-accent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 blur-[2px]" />
                
                <div className="relative glass-card rounded-[2rem] overflow-hidden flex flex-col h-full z-10 bg-[#0a0d1d]">
                  {/* Image Header */}
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                      <div className="glass-card px-3 py-1 text-xs font-mono text-white rounded-full flex items-center gap-1 backdrop-blur-md bg-black/30 border-white/20">
                        <Activity size={12} className="text-secondary" />
                        {project.stat}
                      </div>
                      {project.badge && (
                        <div className="glass-card px-3 py-1 text-xs font-mono text-white rounded-full flex items-center gap-1 backdrop-blur-md bg-accent/30 border-accent/50 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                          <Trophy size={12} className="text-yellow-400" />
                          {project.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-primary text-sm font-mono mb-2">{project.subtitle}</p>
                    <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                      <a href={project.links.github} className="interactive flex-1 glass-card py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm text-white hover:bg-white/10 transition-colors group/btn">
                        <Github size={16} />
                        <span>Source</span>
                      </a>
                      <a href={project.links.demo} className="interactive flex-1 bg-white text-black py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-white/90 transition-colors group/btn">
                        <span>Live Demo</span>
                        <ArrowUpRight size={16} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
