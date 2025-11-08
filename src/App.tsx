import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Code2, Database, Server, Layers, Github, Linkedin, Mail, ExternalLink, Terminal, Palette } from 'lucide-react';
import Spline from '@splinetool/react-spline';
'use client';


function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1.2, 0.8, 1]);
  const videoRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0]);
  const videoY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, -300]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.9, 0.7, 0.5]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.5, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Video autoplay prevented');
      });
    }
  }, [isVideoLoaded]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration, real-time inventory management, and admin dashboard",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time analytics platform with WebSocket integration, data visualization, and user engagement metrics",
      tech: ["React", "Node.js", "Socket.io", "Chart.js"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with drag-and-drop interface, team collaboration, and progress tracking",
      tech: ["React", "Express", "MongoDB", "JWT"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const skills = [
    {
      category: "Frontend",
      icon: Palette,
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
    },
    {
      category: "Backend",
      icon: Server,
      technologies: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Auth", "WebSockets"]
    },
    {
      category: "Database",
      icon: Database,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose", "Prisma"]
    },
    {
      category: "DevOps & Tools",
      icon: Terminal,
      technologies: ["Git", "Docker", "AWS", "CI/CD", "Nginx", "Linux"]
    }
  ];

  return (
   <div ref={containerRef} className="bg-slate-950">
  {/* 🌟 NAVBAR */}
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl font-bold text-white"
        >
          Anshul Gaur
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6">
          {[
            { name: "About", href: "#about", delay: 1 },
            { name: "Skills", href: "#skills", delay: 1.5 },
            { name: "Projects", href: "#projects", delay: 2 },
            { name: "Contact", href: "#contact", delay: 2.5 },
          ].map((link, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: link.delay }}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            id="menu-btn"
            className="text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>

  {/* 🌟 HERO SECTION */}
  <section className="min-h-screen flex flex-col justify-center items-center pt-20 md:pt-24 relative overflow-hidden">
    <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-8 gap-10 w-full">
      {/* LEFT TEXT */}
      <div className="flex-1 text-center md:text-left">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
            Available for Freelance
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Anshul Gaur
          <span className="block text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mt-4">
            Full Stack Developer
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-md mx-auto md:mx-0 mb-10">
          2+ years of experience building scalable web applications with MERN Stack
        </p>
      </div>

      {/* RIGHT MODEL */}
      <div className="flex-1 w-full flex justify-center relative h-[300px] sm:h-[400px] md:h-[500px]">
        <div
 className="absolute -top-32 -right-20 w-[300px] h-[600px] rounded-full 
  bg-gradient-to-bl from-yellow-300 via-amber-400 to-transparent 
  opacity-40 blur-[150px] animate-pulse"
/>

        <Spline
          scene="https://prod.spline.design/xT2D5-PXRdX9r7gu/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  </section>

  {/* 🌟 ABOUT SECTION */}
  <section id="about" className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        About Me
      </motion.h2>
      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
        Passionate full stack developer with 2+ years of experience in building modern web applications.
        Specialized in the MERN stack with a focus on creating performant, scalable, and user-friendly solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT CARD */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
          <ul className="space-y-2 text-slate-300 text-sm sm:text-base">
            <li>▹ Build responsive and interactive web apps</li>
            <li>▹ Design RESTful APIs & microservices</li>
            <li>▹ Database design & optimization</li>
            <li>▹ Deploy and maintain cloud-based apps</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
          <ul className="space-y-2 text-slate-300 text-sm sm:text-base">
            <li>▹ User-centric design and development</li>
            <li>▹ Performance optimization and scalability</li>
            <li>▹ Continuous learning and improvement</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
      <section id="skills" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive expertise across the full development stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {skill.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:bg-slate-800 hover:border-emerald-500/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative bg-slate-900 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A selection of projects showcasing my development expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="relative h-48 overflow-hidden">
                 {/* <iframe src="https://ytconverterr.netlify.app" title="W3Schools Free Online Web Tutorials"></iframe> */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                      View Project <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <motion.a
                href="mailto:anshulhusika@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full hover:from-emerald-700 hover:to-cyan-700 transition-all shadow-lg shadow-emerald-500/25"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </motion.a>
              <motion.a
                href="https://github.com/anshulhusika/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-slate-800 border border-slate-700 text-white font-semibold rounded-full hover:bg-slate-700 hover:border-slate-600 transition-all"
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/anshul-gaur-773914250/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-slate-800 border border-slate-700 text-white font-semibold rounded-full hover:bg-slate-700 hover:border-slate-600 transition-all"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-950 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500">
              © 2024 Anshul Gaur. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com" className="text-slate-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-slate-500 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:anshulgaur@example.com" className="text-slate-500 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
