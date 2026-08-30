import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Trophy, Activity, ArrowUpRight, Code2, Globe, Database, Smartphone, Wrench, MessageSquare, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'All', name: 'All Work', icon: Globe },
  { id: 'AI/ML', name: 'AI / ML', icon: Code2 },
  { id: 'Web', name: 'Web Apps', icon: Database },
  { id: 'Mobile', name: 'Mobile', icon: Smartphone },
  { id: 'Tools', name: 'Tools', icon: Wrench },
];

const projects = [
  {
    id: 1,
    title: "Stethosco",
    subtitle: "AI Healthcare Platform",
    description: "An intelligent healthcare web application providing AI-powered medical assistance and health monitoring capabilities with a modern, responsive interface.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["JavaScript", "AI", "Healthcare", "Web App"],
    category: "AI/ML",
    stat: "Live on Vercel",
    badge: "Latest Project",
    color: "from-blue-500/20 to-indigo-500/20",
    links: {
      demo: "https://stethosco.vercel.app",
      github: "https://github.com/Rajeshwari1412/Stethosco"
    }
  },
  {
    id: 2,
    title: "Smart Guardian",
    subtitle: "AI Road Safety System",
    description: "An advanced accident prevention system featuring risk prediction, driver monitoring, speed control, crash detection, severity analysis, GPS tracking, and golden rescue emergency alerts.",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Dart", "Flutter", "AI", "GPS", "IoT"],
    category: "Mobile",
    stat: "⭐ 1 Star",
    badge: "SAP Innovation Marathon Finalist",
    color: "from-purple-500/20 to-pink-500/20",
    links: {
      demo: "#",
      github: "https://github.com/Rajeshwari1412/SmartGuardian_IM26"
    }
  },
  {
    id: 3,
    title: "Medicine Donation Locator",
    subtitle: "Healthcare Logistics Platform",
    description: "A vital platform connecting donors with medication centers, featuring real-time search, category-based guidelines, donation tracking, and center timings for safe handling.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["JavaScript", "Web Dev", "Healthcare", "Maps"],
    category: "Web",
    stat: "Full-Stack App",
    color: "from-teal-500/20 to-emerald-500/20",
    links: {
      demo: "#",
      github: "https://github.com/Rajeshwari1412/Medication-Donation-Center-Locator-with-Category-Based-Guidelines-and-Timings"
    }
  },
  {
    id: 4,
    title: "HeadGuard",
    subtitle: "Computer Vision Safety System",
    description: "A Python-based OpenCV system that detects helmet usage to improve rider safety in real time using computer vision and deep learning techniques.",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "OpenCV", "Computer Vision", "Deep Learning"],
    category: "AI/ML",
    stat: "Real-Time Detection",
    color: "from-orange-500/20 to-red-500/20",
    links: {
      demo: "#",
      github: "https://github.com/Rajeshwari1412/HeadGuard_Python"
    }
  },
  {
    id: 5,
    title: "Tripzy",
    subtitle: "Travel Booking Platform",
    description: "A modern travel booking platform with Firebase OTP authentication, real-time database, hotel deals, and a responsive animation-rich interface for desktop and mobile.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    category: "Web",
    stat: "Full Frontend App",
    color: "from-cyan-500/20 to-blue-500/20",
    links: {
      demo: "#",
      github: "https://github.com/Rajeshwari1412/Travell-Full-Frontend-Website"
    }
  },
  {
    id: 6,
    title: "Travel Planner AI",
    subtitle: "AI-Powered Trip Optimizer",
    description: "An intelligent travel companion that transforms every journey into a smarter adventure with AI-powered itinerary planning, budget optimization, and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "AI", "Machine Learning", "NLP"],
    category: "AI/ML",
    stat: "Smart Recommendations",
    color: "from-blue-500/20 to-teal-500/20",
    links: {
      demo: "#",
      github: "https://github.com/Rajeshwari1412/Travell_Planner_AI"
    }
  },
  {
    id: 7,
    title: "Basic Calculator",
    subtitle: "Interactive Web Tool",
    description: "A clean, modern calculator built with HTML, CSS, and JavaScript featuring all arithmetic operations, a sleek UI with buttons and display screen.",
    image: "https://images.unsplash.com/photo-1611125831265-2f928e469c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Tools",
    stat: "Beginner Friendly",
    color: "from-gray-500/20 to-slate-500/20",
    links: {
      demo: "#",
      github: "https://github.com/Rajeshwari1412/Basic-calculator"
    }
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  const remainder = filteredProjects.length % 3;
  const fillersNeeded = remainder === 0 ? 0 : 3 - remainder;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Decorative bg */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

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

          <div className="flex flex-wrap gap-2.5">
            {categories.map(cat => {
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
                  <Icon size={14} />
                  {cat.name}
                </button>
              );
            })}
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
                {/* Glow Border */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 blur-[1px]" />
                
                <div className="relative glass-card rounded-3xl overflow-hidden flex flex-col h-full z-10 bg-[#0a0820]/45">
                  {/* Image Header */}
                  <div className="h-48 relative overflow-hidden bg-black/60">
                    {/* Gradient fallback behind image */}
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-30 z-0", project.color)} />
                    
                    <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover relative z-0 transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        // Fallback in case of broken image URL
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                      <div className="glass-card px-3 py-1.5 text-[10px] font-mono font-bold text-white rounded-full flex items-center gap-1.5 backdrop-blur-md bg-black/40 border-white/10">
                        <Activity size={11} className="text-secondary" />
                        {project.stat}
                      </div>
                      {project.badge && (
                        <div className="glass-card px-3 py-1.5 text-[10px] font-mono font-bold text-white rounded-full flex items-center gap-1.5 backdrop-blur-md bg-accent/25 border-accent/40 shadow-[0_0_12px_rgba(139,92,246,0.25)]">
                          <Trophy size={11} className="text-yellow-400" />
                          {project.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-primary text-xs font-mono font-bold mb-2 tracking-wider uppercase">{project.subtitle}</p>
                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="interactive flex-1 glass-card py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-mono text-white hover:bg-white/10 transition-colors group/btn">
                        <Github size={14} />
                        <span>Source</span>
                      </a>
                      {project.links.demo !== "#" ? (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="interactive flex-1 bg-white text-black py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-mono font-bold hover:bg-white/90 transition-colors group/btn">
                          <span>Live Demo</span>
                          <ArrowUpRight size={14} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </a>
                      ) : (
                        <div className="flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-mono text-white/30 bg-white/5 border border-white/5 select-none cursor-not-allowed">
                          <span>Local Build</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Dynamic Interactive Filler Card 1 (GitHub) */}
            {fillersNeeded >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: filteredProjects.length * 0.1 }}
                className="group relative h-full flex flex-col min-h-[400px]"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 blur-[1px]" />
                <div className="relative glass-card rounded-3xl overflow-hidden flex flex-col h-full z-10 bg-[#0a0820]/45 p-8 justify-between items-center text-center">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-opacity">
                    <Plus size={80} className="text-white" />
                  </div>
                  
                  {/* Decorative rotating glowing GitHub icon */}
                  <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                    <div className="absolute w-20 h-20 rounded-full border border-[#6C63FF]/30 animate-[spin_10s_linear_infinite]" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center border-[#00E5FF]/30 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                    >
                      <Github size={28} className="text-white" />
                    </motion.div>
                  </div>

                  <div>
                    <span className="text-[#6C63FF] text-xs font-mono font-bold tracking-widest uppercase mb-2 block">GitHub Repositories</span>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">Explore More Projects</h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                      Check out my open-source codebases, libraries, hackathon forks, and side scripts on my official GitHub profile.
                    </p>
                  </div>

                  <a
                    href="https://github.com/Rajeshwari1412"
                    target="_blank"
                    rel="noreferrer"
                    className="interactive w-full bg-white/5 border border-white/10 hover:border-[#6C63FF]/50 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-mono transition-all"
                  >
                    <span>View GitHub Profile</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            )}

            {/* Dynamic Interactive Filler Card 2 (Contact) */}
            {fillersNeeded >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (filteredProjects.length + 1) * 0.1 }}
                className="group relative h-full flex flex-col min-h-[400px]"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#8B5CF6] to-[#00E5FF] rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 blur-[1px]" />
                <div className="relative glass-card rounded-3xl overflow-hidden flex flex-col h-full z-10 bg-[#0a0820]/45 p-8 justify-between items-center text-center">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-opacity">
                    <Plus size={80} className="text-white" />
                  </div>

                  {/* Pulsing collaboration icon */}
                  <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                    <div className="absolute w-20 h-20 rounded-full border border-[#8B5CF6]/30 animate-[spin_10s_linear_infinite_reverse]" />
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center border-[#8B5CF6]/30 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                    >
                      <MessageSquare size={24} className="text-[#00E5FF]" />
                    </motion.div>
                  </div>

                  <div>
                    <span className="text-[#8B5CF6] text-xs font-mono font-bold tracking-widest uppercase mb-2 block">Hire / Collab</span>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">Build Something Together</h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                      Looking to build an AI agent, deploy a Salesforce CRM ecosystem, or launch a modern responsive app? Let's connect.
                    </p>
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="interactive w-full bg-white text-black hover:bg-white/90 py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-mono font-bold transition-all"
                  >
                    <span>Get In Touch</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


