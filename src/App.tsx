import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ExternalLink, Terminal, 
  Palette, Server, Database, Menu, X, ChevronRight 
} from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Data Arrays
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const skills = [
    { category: "Frontend", icon: Palette, tech: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
    { category: "Backend", icon: Server, tech: ["Node.js", "Express", "REST APIs", "WebSockets", "JWT"] },
    { category: "Database", icon: Database, tech: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Mongoose"] },
    { category: "DevOps", icon: Terminal, tech: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"] }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with real-time inventory and Stripe integration.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://shop.anshulhusika.in/",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Production MOnitoring Dashboard",
      description: "Real-time analytics platform with WebSocket data visualization.",
      tech: ["React", "Socket.io", "Chart.js", "Tailwind"],
      link: "https://www.leafnet.cc/",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Task Management",
      description: "Collaborative tool with drag-and-drop and progress tracking.",
      tech: ["React", "Express", "MongoDB", "Auth0"],
      link: "https://your-demo-link.com",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div ref={containerRef} className="bg-slate-950 text-slate-300 selection:bg-emerald-500/30 overflow-x-hidden font-sans">
      
      {/* 🌟 STICKY NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent"
          >
            ANSHUL.
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-emerald-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-bold">
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 🌟 HERO SECTION */}
      <section id="home" className="min-h-screen relative flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="z-10 text-center lg:text-left"
          >
            <span className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block border border-emerald-500/20">
              Open for Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting <span className="text-emerald-400">Digital</span> Experiences
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Full Stack Developer specializing in building high-performance MERN applications with 2+ years of experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/20">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all">
                Let's Talk
              </a>
            </div>
          </motion.div>

          {/* Spline Model Wrapper */}
          <div className="relative h-[400px] md:h-[600px] w-full group">
            <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
            <Spline 
              scene="https://prod.spline.design/xT2D5-PXRdX9r7gu/scene.splinecode" 
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 🌟 SKILLS SECTION */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-500 mb-16">The tools and technologies I use to bring ideas to life.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-sm hover:border-emerald-500/40 transition-all text-left"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <skill.icon className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map(t => (
                    <span key={t} className="text-xs bg-slate-800/50 text-slate-400 px-3 py-1.5 rounded-lg border border-white/5">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 PROJECTS SECTION (With Iframe Support) */}
      <section id="projects" className="py-32 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
              <p className="text-slate-500">A collection of projects that define my journey.</p>
            </div>
            <a href="https://github.com/anshulhusika" target="_blank" className="text-emerald-400 font-bold flex items-center gap-2 group">
              View All on GitHub <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all"
              >
                {/* Media Container */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-bold hover:text-emerald-400 transition-colors"
                  >
                    Launch Project <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 rounded-[3rem] p-8 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px]" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to start a project?</h2>
          <p className="text-slate-400 text-lg mb-12">I'm currently available for new projects and collaborations.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:anshulhusika@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-emerald-400 transition-all">
              <Mail size={20} /> Email Me
            </a>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" className="p-4 bg-slate-800 text-white rounded-2xl hover:bg-slate-700 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" className="p-4 bg-slate-800 text-white rounded-2xl hover:bg-slate-700 transition-all">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center px-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Anshul Gaur. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}
