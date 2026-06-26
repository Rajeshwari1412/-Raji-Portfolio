import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Terminal, Loader2 } from 'lucide-react';
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
      {/* Decorative bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">06.</span> Initiate Protocol
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-mono text-sm">
            Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-8">
                <Terminal size={24} />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Connect.</h3>
              
              <div className="space-y-6 flex-grow">
                <a href="mailto:rajukjth@gmail.com" className="flex items-center gap-4 text-white/70 hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/40 mb-1">EMAIL</p>
                    <p className="font-medium">rajukjth@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/rajeshwari412" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white/70 hover:text-secondary transition-colors group">
                  <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/40 mb-1">LINKEDIN</p>
                    <p className="font-medium">/in/rajeshwari412</p>
                  </div>
                </a>
                
                <a href="https://github.com/Rajeshwari412" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/40 mb-1">GITHUB</p>
                    <p className="font-medium">github.com/Rajeshwari412</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 md:p-10 rounded-3xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[50px] rounded-full pointer-events-none" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/60 pl-2">NAME</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-400 text-xs pl-2">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/60 pl-2">EMAIL</label>
                  <input 
                    {...register("email")}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs pl-2">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-xs font-mono text-white/60 pl-2">SUBJECT</label>
                <input 
                  {...register("subject")}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="text-red-400 text-xs pl-2">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-xs font-mono text-white/60 pl-2">MESSAGE</label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
                {errors.message && <p className="text-red-400 text-xs pl-2">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={cn(
                  "interactive w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden",
                  isSuccess ? "bg-green-500 text-white" : "bg-white text-black hover:bg-white/90"
                )}
              >
                {isSubmitting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : isSuccess ? (
                  <span>Message Sent Successfully</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="-translate-y-0.5 translate-x-0.5" />
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
