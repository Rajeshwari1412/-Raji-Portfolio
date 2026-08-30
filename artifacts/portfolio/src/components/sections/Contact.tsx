import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Terminal, Loader2, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 bg-primary/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase">COMMS PORT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">06.</span> Initiate Protocol
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent rounded-full mb-4" />
          <p className="text-white/60 max-w-xl mx-auto font-mono text-xs leading-relaxed">
            Whether you have a project in mind, want to discuss collaboration, or just say hello, drop a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Connection channels */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4 justify-between"
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-between border-white/5 relative overflow-hidden group">
              {/* Subtle backglow inside card */}
              <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-primary/10 blur-xl pointer-events-none group-hover:bg-primary/15 transition-colors" />
              
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Terminal size={14} className="animate-pulse" />
                  </div>
                  <span className="text-xs font-mono font-bold text-white/50 tracking-wider">SECURE CONNECTION</span>
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Let's Connect</h3>
                <p className="text-white/45 text-xs font-mono mb-8">Choose your preferred channel below:</p>
              </div>
              
              <div className="space-y-4 flex-grow flex flex-col justify-end">
                
                {/* Email card */}
                <a 
                  href="mailto:rajikotoju@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0a0820]/30 hover:bg-[#0a0820]/60 border border-white/5 hover:border-primary/30 transition-all duration-300 group/item shadow-sm hover:shadow-[0_4px_20px_rgba(108,99,255,0.08)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover/item:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-mono text-white/40 tracking-wider">EMAIL DIRECT</p>
                    <p className="font-serif font-bold text-sm text-white/90 mt-0.5">rajikotoju@gmail.com</p>
                  </div>
                  <ArrowRight size={14} className="text-white/20 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
                </a>
                
                {/* LinkedIn card */}
                <a 
                  href="https://linkedin.com/in/Rajeshwari2947" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0a0820]/30 hover:bg-[#0a0820]/60 border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-300 group/item shadow-sm hover:shadow-[0_4px_20px_rgba(0,229,255,0.08)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] group-hover/item:scale-105 transition-transform">
                    <Linkedin size={18} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-mono text-white/40 tracking-wider">LINKEDIN</p>
                    <p className="font-serif font-bold text-sm text-white/90 mt-0.5">/in/Rajeshwari2947</p>
                  </div>
                  <ArrowRight size={14} className="text-white/20 group-hover/item:text-[#00E5FF] group-hover/item:translate-x-1 transition-all" />
                </a>
                
                {/* GitHub card */}
                <a 
                  href="https://github.com/Rajeshwari1412" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0a0820]/30 hover:bg-[#0a0820]/60 border border-white/5 hover:border-white/20 transition-all duration-300 group/item shadow-sm hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover/item:scale-105 transition-transform">
                    <Github size={18} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-mono text-white/40 tracking-wider">GITHUB PROFILE</p>
                    <p className="font-serif font-bold text-sm text-white/90 mt-0.5">github.com/Rajeshwari1412</p>
                  </div>
                  <ArrowRight size={14} className="text-white/20 group-hover/item:text-white group-hover/item:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 md:p-10 rounded-3xl relative border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-[50px] rounded-full pointer-events-none" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold text-white/55 pl-1.5 tracking-wider">NAME</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-[#030014]/65 border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-[#00E5FF] focus:bg-[#030014]/90 focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all font-mono text-xs placeholder:text-white/20"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-400 text-[10px] font-mono pl-1.5 mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold text-white/55 pl-1.5 tracking-wider">EMAIL</label>
                  <input 
                    {...register("email")}
                    className="w-full bg-[#030014]/65 border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-[#00E5FF] focus:bg-[#030014]/90 focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all font-mono text-xs placeholder:text-white/20"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-[10px] font-mono pl-1.5 mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5 mb-5">
                <label className="text-[10px] font-mono font-bold text-white/55 pl-1.5 tracking-wider">SUBJECT</label>
                <input 
                  {...register("subject")}
                  className="w-full bg-[#030014]/65 border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-[#00E5FF] focus:bg-[#030014]/90 focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all font-mono text-xs placeholder:text-white/20"
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="text-red-400 text-[10px] font-mono pl-1.5 mt-1">{errors.subject.message}</p>}
              </div>

              <div className="space-y-1.5 mb-6">
                <label className="text-[10px] font-mono font-bold text-white/55 pl-1.5 tracking-wider">MESSAGE</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full bg-[#030014]/65 border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-[#00E5FF] focus:bg-[#030014]/90 focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all font-mono text-xs placeholder:text-white/20 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
                {errors.message && <p className="text-red-400 text-[10px] font-mono pl-1.5 mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={cn(
                  "interactive w-full py-4 rounded-2xl font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden border shadow-lg hover:shadow-[0_5px_25px_rgba(108,99,255,0.25)]",
                  isSuccess 
                    ? "bg-green-500 text-white border-green-500" 
                    : "bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-white border-primary/20 hover:scale-[1.01]"
                )}
              >
                {isSubmitting ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : isSuccess ? (
                  <span>Protocol Executed Successfully</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} className="-translate-y-0.5 translate-x-0.5 group-hover:translate-x-1.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

