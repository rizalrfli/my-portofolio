import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Code2, Database, Network, LineChart, Terminal,
  Server, BrainCircuit, Monitor, ChevronRight,
  Github, Linkedin, Mail, ExternalLink, Calendar, Send, Instagram, MessageSquare, Palette
} from 'lucide-react';

const BackgroundElements = () => {
  return (
    <div
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
      style={{ background: 'radial-gradient(circle at 10% 10%, rgba(59,130,246,0.15) 0, transparent 40%), radial-gradient(circle at 90% 90%, rgba(168,85,247,0.15) 0, transparent 40%)' }}
    >
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#03030a]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter">
          <span className="text-white">Afrizal</span>
          <span className="text-neon-blue">.dev</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full badge-neon-blue w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-bold text-neon-blue uppercase tracking-wider">Programmer</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Hi, I'm <span className="text-white">Afrizal Rafli</span>
          </h1>

          <h2 className="text-xl lg:text-2xl text-slate-300 font-medium opacity-80 mt-2">
            Full-Stack Developer <br className="hidden lg:block" /> & Data Science Enthusiast
          </h2>

          <p className="text-slate-400 max-w-lg mt-4">
            A passionate student at Politeknik Negeri Malang (Polinema), crafting futuristic web experiences and analyzing complex data.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a href="#projects" className="px-6 py-2.5 rounded-[16px] glass-panel text-neon-blue font-semibold hover:bg-white/5 transition-all flex items-center gap-2 hover:-translate-y-1">
              View My Work <ChevronRight size={18} />
            </a>
            <a href="#contact" className="px-6 py-2.5 rounded-[16px] font-semibold text-slate-300 hover:text-white bg-transparent transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[400px] lg:h-[600px] hidden md:block"
        >
          {/* Abstract 3D/Tech representation */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotateZ: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-blue-400/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full backdrop-blur-sm flex items-center justify-center border border-white/5 overflow-hidden">
                <img src="/424064945.jpg" alt="Afrizal Rafli" className="w-full h-full object-cover" />
              </div>

              {/* Floating tech icons */}
              <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-4 -right-4 p-4 glass-panel glow-border">
                <Database className="text-blue-400" size={24} />
              </motion.div>
              <motion.div animate={{ y: [15, -15, 15] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 -left-8 p-4 glass-panel glow-border-purple">
                <Code2 className="text-purple-400" size={24} />
              </motion.div>
              <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 5.5, repeat: Infinity }} className="absolute top-1/2 -right-12 p-3 glass-panel">
                <LineChart className="text-green-400" size={20} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const strengths = [
  {
    title: "Full-Stack Web Dev",
    icon: <Monitor className="text-blue-400 mb-4" size={32} />,
    desc: "Specializing in PHP, Laravel, and Filament for robust enterprise applications.",
    skills: ["PHP", "Laravel", "Filament", "React", "Tailwind"],
    color: "blue"
  },
  {
    title: "Database Architecture",
    icon: <Database className="text-purple-400 mb-4" size={32} />,
    desc: "Mastery in SQL and PostgreSQL including Transactions, Stored Procedures, and Materialized Views.",
    skills: ["PostgreSQL", "SQL"],
    color: "purple"
  },
  {
    title: "Data Science & Analytics",
    icon: <BrainCircuit className="text-green-400 mb-4" size={32} />,
    desc: "Proficient in Python, Pandas, and statistical modeling with Random Forest Regression.",
    skills: ["Python", "Pandas"],
    color: "green"
  },
  {
    title: "Infrastructure & Networking",
    icon: <Network className="text-orange-400 mb-4" size={32} />,
    desc: "Experience in Linux system administration and complex networking simulations using GNS3.",
    skills: ["Linux", "GNS3", "Docker", "Cisco"],
    color: "orange"
  },
  {
    title: "Graphic Design",
    icon: <Palette className="text-pink-400 mb-4" size={32} />,
    desc: "Crafting visually compelling designs and user interfaces with modern creative tools.",
    skills: ["Canva", "Figma", "Affinity"],
    color: "pink"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="text-neon-blue">Strengths</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">A unique blend of software engineering, database mastery, and data science capabilities.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {strengths.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`glass-panel p-8 relative group overflow-hidden transition-all duration-300
              ${item.color === 'blue' ? 'hover:glow-border' :
                item.color === 'purple' ? 'hover:glow-border-purple' :
                  item.color === 'green' ? 'hover:border-green-500/30' :
                    item.color === 'pink' ? 'hover:border-pink-500/30' :
                      'hover:border-orange-500/30'}`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity
              ${item.color === 'blue' ? 'from-blue-500' :
                item.color === 'purple' ? 'from-purple-500' :
                  item.color === 'green' ? 'from-green-500' :
                    'from-orange-500'}`}
            />
            {item.icon}
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border transition-all duration-300
                    ${item.color === 'blue' ? 'bg-blue-500/10 text-blue-300 border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-400/30' :
                      item.color === 'purple' ? 'bg-purple-500/10 text-purple-300 border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-400/30' :
                        item.color === 'green' ? 'bg-green-500/10 text-green-300 border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-400/30' :
                          item.color === 'pink' ? 'bg-pink-500/10 text-pink-300 border-pink-500/20 group-hover:bg-pink-500/20 group-hover:border-pink-400/30' :
                            'bg-orange-500/10 text-orange-300 border-orange-500/20 group-hover:bg-orange-500/20 group-hover:border-orange-400/30'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Building Material Store Inventory System",
    type: "Full-Stack Application",
    desc: "A comprehensive full-stack application featuring robust stock control, secure authentication, and WhatsApp checkout integration.",
    techStack: ["React", "Laravel", "Filament", "PostgreSQL", "WhatsApp API", "Tailwind CSS"],
    glow: "blue"
  },
  {
    title: "AI-Driven Image & 3D Design Mod",
    type: "AI / Data Science",
    desc: "Utilizing AI tools for facial expression manipulation, background removal, and converting 2D clothing designs into 3D models.",
    techStack: ["Python", "OpenCV", "PyTorch", "Blender API", "Computer Vision"],
    glow: "purple"
  },
  {
    title: "Data-Driven Statistical Analysis",
    type: "Analytics",
    desc: "Academic and practical implementations of normal distribution analysis and complex data calculations using Random Forest.",
    techStack: ["NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Statistics"],
    glow: "green"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-neon-purple">Works</span></h2>
        <p className="text-slate-400 max-w-2xl">Showcasing complex implementations across web development, AI, and data analytics.</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className={`glass-panel p-1 rounded-[24px] overflow-hidden group glass-panel-hover
              ${proj.glow === 'blue' ? 'hover:border-blue-500/40' :
                proj.glow === 'purple' ? 'hover:border-purple-500/40' :
                  'hover:border-green-500/40'}`}
          >
            <div className="bg-[#050511]/80 backdrop-blur-xl h-full p-8 rounded-[22px] flex flex-col relative">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{proj.type}</span>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <ExternalLink size={16} className="text-slate-300" />
                </a>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{proj.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.desc}</p>

              <div className="mb-6">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {proj.techStack.map((tag, j) => (
                    <span
                      key={j}
                      className={`text-[9px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border transition-all duration-300
                        ${proj.glow === 'blue' ? 'bg-blue-500/10 text-blue-300 border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-400/30' :
                          proj.glow === 'purple' ? 'bg-purple-500/10 text-purple-300 border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-400/30' :
                            'bg-green-500/10 text-green-300 border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-400/30'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const experiences = [
  {
    year: "2025 - 2026",
    role: "Leadership & Project Management",
    items: [
      "Wakil Ketua Umum - Polinema Mengajar",
      "Volunteer Photographer - Tlatah Lereng Gunung Arjuno",
      "Project Manager - Lab Software Engineering Website (Polinema JTI)",
      "Builder - Toko Bangunan Cahaya Baru Website"
    ],
    color: "text-blue-400",
    glow: "bg-[#3b82f6] shadow-[0_0_8px_#3b82f6]"
  },
  {
    year: "2024 - 2025",
    role: "Graphic Design & Event Photography",
    items: [
      "Wakil Koordinator Design Graphic - Polinema Mengajar",
      "Photographer - Banyuwangi Ethno Carnival"
    ],
    color: "text-purple-400",
    glow: "bg-[#c084fc] shadow-[0_0_8px_#c084fc]"
  },
  {
    year: "2023 - 2024",
    role: "Technical & Data Internships",
    items: [
      "Network Administrator & Technician - Asterix Computer",
      "Data Entry Staff - Peruri Bulog Indonesia"
    ],
    color: "text-green-400",
    glow: "bg-[#22c55e] shadow-[0_0_8px_#22c55e]"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 w-full max-w-5xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest">
          Career Path
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">A chronicle of my evolution as a developer, leader, and creative professional.</p>
      </motion.div>

      <div className="relative">
        {/* Central Vertical Line - Gradient */}
        <div className="absolute left-4 md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-20" />

        <div className="space-y-16 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              {/* Timeline Dot with Outer Ring */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
                <div className={`w-4 h-4 rounded-full ${exp.glow} z-10 relative`} />
                <div className={`absolute w-8 h-8 rounded-full ${exp.glow.replace('bg-', 'bg-').split(' ')[0]}/20 animate-ping`} />
                <div className="absolute w-10 h-10 rounded-full border border-white/5 bg-slate-900/50 backdrop-blur-sm" />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="glass-panel p-8 relative group transition-all duration-300 hover:border-purple-500/30"
                >
                  {/* Subtle Background Glow */}
                  <div className={`absolute -inset-px rounded-[24px] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />

                  <div className="flex flex-col gap-4">
                    <div className={`flex items-center gap-3 ${exp.color}`}>
                      <Calendar size={16} />
                      <span className="font-mono text-sm font-bold tracking-wider">{exp.year}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                        {exp.role}
                      </h3>
                    </div>

                    <ul className="space-y-4 mt-2">
                      {exp.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${exp.color.replace('text', 'bg')} opacity-40 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all`} />
                          <span className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Year Indicator for Desktop (Opposite side of card) */}
              <div className={`hidden md:flex w-[45%] ${index % 2 === 0 ? 'justify-start pr-12' : 'justify-end pl-12'}`}>
                <div className="text-slate-600 font-bold text-4xl opacity-20 pointer-events-none select-none">
                  {exp.year.split(' ')[0]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 w-full mt-12 bg-gradient-to-t from-blue-900/10 to-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-neon-blue">Connect</span></h2>
          <p className="text-slate-400 mb-8 max-w-md text-lg">
            Whether you have a question, a project idea, or just want to explore tech, my inbox is always open.
          </p>

          <div className="flex flex-col gap-4">
            <a href="mailto:afrizalrafli27@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </div>
              afrizalrafli27@gmail.com
            </a>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-3 bg-white/5 rounded-full">
                <Server size={20} />
              </div>
              Available for Full-Time & Freelance
            </div>
          </div>

          {/* Dock style socials */}
          <div className="mt-12 h-16 inline-flex items-center px-8 dock-pill rounded-full justify-center">
            <div className="flex gap-6 items-center">
              <a href="https://github.com/rizalrfli" target="_blank" rel="noopener noreferrer" className="p-2 text-white/60 hover:text-white hover:scale-110 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/afrizalrafli" target="_blank" rel="noopener noreferrer" className="p-2 text-white/60 hover:text-white hover:scale-110 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/afrzalrfli/" target="_blank" rel="noopener noreferrer" className="p-2 text-white/60 hover:text-white hover:scale-110 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/083834079959" target="_blank" rel="noopener noreferrer" className="p-2 text-white/60 hover:text-white hover:scale-110 transition-all">
                <MessageSquare size={20} />
              </a>
              <div className="w-[1px] h-5 bg-white/20 ml-2" />
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-neon-blue opacity-80">afrizal@portfolio</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terminal Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel overflow-hidden glow-border bg-[#020205]/80"
        >
          {/* Terminal Header */}
          <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-2">
              <Terminal size={12} /> guest@afrizal-portfolio:~
            </span>
          </div>

          <div className="p-6 font-mono">
            <div className="text-blue-400 mb-4 text-sm">$ ./send_message.sh</div>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-slate-400 uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-slate-700 focus:border-blue-500 outline-none py-2 text-white placeholder:text-slate-600 transition-colors text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-slate-400 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  className="bg-transparent border-b border-slate-700 focus:border-purple-500 outline-none py-2 text-white placeholder:text-slate-600 transition-colors text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <label className="text-xs text-slate-400 uppercase tracking-widest">Message</label>
                <textarea
                  rows={4}
                  className="bg-transparent border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none resize-none placeholder:text-slate-600 focus:bg-white/5 transition-all text-sm mt-1"
                  placeholder="Type your message here..."
                />
              </div>

              <button className="mt-4 flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-3 rounded-lg font-bold hover:bg-white transition-colors">
                Execute <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <p>&copy; 2026 Afrizal Rafli. All rights reserved.</p>
        <p className="flex items-center gap-2">
          Designed with <span className="text-blue-400 animate-pulse">⚡</span>
        </p>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen relative font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <BackgroundElements />
      <Navbar />
      <main className="flex flex-col items-center">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
