import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ChevronRight,
  Github, Linkedin, Mail, ExternalLink, Calendar, Instagram, MessageSquare, Menu, X, Trophy
} from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

const Lamp = ({ on, onToggle }: { on: boolean; onToggle: () => void }) => {
  const [pulling, setPulling] = useState(false);
  const release = () => setPulling(false);

  return (
    <div className="relative z-20 flex flex-col items-center">
      <motion.div
        aria-hidden
        initial={false}
        animate={{ opacity: on ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pointer-events-none absolute left-1/2 top-[4.6rem] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 226, 178, 0.34) 0%, rgba(255, 226, 178, 0.10) 42%, rgba(255, 226, 178, 0) 70%)',
          filter: 'blur(16px)'
        }}
      />

      <div aria-hidden className="h-9 w-px bg-[var(--line-strong)]" />

      <div className="relative flex flex-col items-center">
        <div
          aria-hidden
          className="h-3 w-10 bg-[var(--shade)]"
          style={{ clipPath: 'polygon(26% 0, 74% 0, 100% 100%, 0 100%)' }}
        />
        <div
          aria-hidden
          className="-mt-1 h-5 w-5 rounded-full border transition-all duration-500"
          style={{
            borderColor: on ? 'var(--lamp)' : 'var(--line-strong)',
            background: on ? 'var(--lamp)' : 'var(--chip)',
            boxShadow: on ? '0 0 26px 8px rgba(255, 226, 178, 0.32)' : 'inset 0 -2px 3px rgba(0, 0, 0, 0.35)'
          }}
        />

        <button
          type="button"
          onClick={onToggle}
          onPointerDown={() => setPulling(true)}
          onPointerUp={release}
          onPointerLeave={release}
          onPointerCancel={release}
          onKeyDown={(event) => {
            if (event.key === ' ' || event.key === 'Enter') setPulling(true);
          }}
          onKeyUp={release}
          onBlur={release}
          aria-pressed={on}
          aria-label={on ? 'Turn the lights off' : 'Turn the lights on'}
          className="absolute -right-7 top-1 flex h-14 w-11 flex-col items-center justify-start"
        >
          <motion.span
            aria-hidden
            initial={false}
            animate={{ height: pulling ? 40 : 28 }}
            transition={{ type: 'spring', stiffness: 520, damping: 26 }}
            className="w-px"
            style={{ background: 'var(--ink-faint)', boxShadow: '0 0 0 0.5px rgba(4, 10, 16, 0.25)' }}
          />
          <motion.span
            aria-hidden
            initial={false}
            animate={{ y: pulling ? 10 : 0 }}
            transition={{ type: 'spring', stiffness: 520, damping: 26 }}
            className="mt-0.5 h-2.5 w-2.5 rounded-full"
            style={{ background: 'var(--ink-faint)', boxShadow: '0 0 0 1px rgba(4, 10, 16, 0.25)' }}
          />
        </button>
      </div>
    </div>
  );
};

const Portrait = ({ lightsOn }: { lightsOn: boolean }) => {
  const reduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -7, y: px * 9 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 90, damping: 16 }}
      className="relative mt-5"
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 18 }}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transformPerspective: 900 }}
        className="relative w-52 h-64 sm:w-60 sm:h-72 md:w-72 md:h-[21rem] overflow-hidden rounded-t-[48%] rounded-b-2xl border border-[var(--line-strong)] bg-[var(--thumb)] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.65)]"
      >
        <img
          src="/FOTO 3X4.png"
          alt="Afrizal Rafli"
          className="w-full h-full object-cover object-top transition-[filter] duration-500"
          style={{ filter: lightsOn ? 'brightness(1.04) saturate(1.02)' : 'brightness(0.92)' }}
        />

        {!reduceMotion && (
          <motion.span
            key={lightsOn ? 'sweep-on' : 'sweep-off'}
            aria-hidden
            initial={{ x: '-120%' }}
            animate={{ x: '140%' }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(6, 10, 16, 0.35) 0%, rgba(6, 10, 16, 0) 42%)'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Navbar = ({ lightsOn, onToggle }: { lightsOn: boolean; onToggle: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = 'min-h-11 flex items-center hover:text-[var(--accent)] transition-colors';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 border-b ${scrolled || isOpen
        ? 'bg-[var(--page)] border-[var(--line)]'
        : 'bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 min-h-20 flex items-center justify-between gap-4">
        <a href="#home" className="font-display font-bold text-lg tracking-tight text-[var(--ink-strong)]" aria-label="Afrizal, kembali ke atas">
          Afrizal Rafli
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--ink)]">
          <a href="#about" className={linkClass}>About</a>
          <a href="#projects" className={linkClass}>Projects</a>
          <a href="#experience" className={linkClass}>Experience</a>
          <a href="#achievements" className={linkClass}>Achievements</a>
          <a href="#contact" className={linkClass}>Contact</a>
          <button
            type="button"
            onClick={onToggle}
            aria-label={lightsOn ? 'Aktifkan mode gelap' : 'Aktifkan mode terang'}
            className="min-w-11 min-h-11 flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
          >
            {lightsOn ? 'Gelap' : 'Terang'}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <button
            type="button"
            onClick={onToggle}
            aria-label={lightsOn ? 'Aktifkan mode gelap' : 'Aktifkan mode terang'}
            className="min-w-11 min-h-11 flex items-center justify-center text-xs font-semibold text-[var(--ink-muted)]"
          >
            {lightsOn ? 'Gelap' : 'Terang'}
          </button>
          <button
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
            className="text-[var(--ink-strong)] p-2 min-w-11 min-h-11 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-[var(--page)] border-b border-[var(--line)] px-6 py-5 flex flex-col gap-2"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className={`text-lg font-medium text-[var(--ink)] ${linkClass}`}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className={`text-lg font-medium text-[var(--ink)] ${linkClass}`}>Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className={`text-lg font-medium text-[var(--ink)] ${linkClass}`}>Experience</a>
          <a href="#achievements" onClick={() => setIsOpen(false)} className={`text-lg font-medium text-[var(--ink)] ${linkClass}`}>Achievements</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className={`text-lg font-medium text-[var(--ink)] ${linkClass}`}>Contact</a>        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ lightsOn, onToggle }: { lightsOn: boolean; onToggle: () => void }) => {
  return (
    <section id="home" className="lg:min-h-[90svh] flex items-center relative pt-28 md:pt-24 pb-16 px-5 md:px-8">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-5 items-center lg:items-start order-2 lg:order-1"
        >
          <div className="text-sm text-[var(--accent)] font-medium">
            Informatics Engineering · Politeknik Negeri Malang
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-[4.4rem] font-bold leading-[1.08] tracking-tight text-center lg:text-left">
            Hi, I’m <span className="text-[var(--ink-strong)]">Afrizal Rafli.</span>
          </h1>

          <h2 className="text-xl lg:text-2xl text-[var(--ink)] font-medium text-center lg:text-left">
            Web Developer and Network Engineer
          </h2>

          <p className="text-[var(--ink-muted)] max-w-lg mt-4 text-center lg:text-left">
            I build web applications and explore practical ways to make data useful. I’m currently studying at Politeknik Negeri Malang.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-4 w-full sm:w-auto">
            <a href="#projects" className="px-5 min-h-12 rounded-lg bg-[var(--btn)] text-[var(--btn-ink)] font-semibold hover:bg-[var(--btn-hover)] transition-colors flex items-center justify-center gap-2">
              View my work <ChevronRight size={18} />
            </a>
            <a href="#contact" className="px-5 min-h-12 rounded-lg font-semibold text-[var(--ink)] hover:text-[var(--ink-strong)] transition-colors flex items-center justify-center">
              Contact me
            </a>
          </div>
        </motion.div>

        <div className="relative flex flex-col items-center order-1 lg:order-2">
          <Lamp on={lightsOn} onToggle={onToggle} />
          <Portrait lightsOn={lightsOn} />
          <p className="mt-4 text-xs text-[var(--ink-faint)] text-center">
            Tarik tali lampu untuk ganti suasana
          </p>
        </div>
      </div>
    </section>
  );
};

const strengths = [
  {
    title: "Web Developer",
    desc: "Specializing in PHP, Laravel, and Filament for robust enterprise applications.",
    skills: ["PHP", "Laravel", "Filament", "React", "Tailwind", "Flutter"]
  },
  {
    title: "Database Architecture",
    desc: "Mastery in SQL and PostgreSQL including Transactions, Stored Procedures, and Materialized Views.",
    skills: ["PostgreSQL", "SQL"]
  },
  {
    title: "Data Science & Analytics",
    desc: "Proficient in Python, Pandas, and statistical modeling with Random Forest Regression.",
    skills: ["Python", "Pandas"]
  },
  {
    title: "Infrastructure & Networking",
    desc: "Experience in Linux system administration and complex networking simulations using GNS3.",
    skills: ["Linux", "GNS3", "Docker", "Cisco"]
  },
  {
    title: "Graphic Design",
    desc: "Crafting visually compelling designs and user interfaces with modern creative tools.",
    skills: ["Canva", "Figma", "Affinity"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-5 md:px-8 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-12 max-w-2xl"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What I work with</h2>
        <p className="text-[var(--ink-muted)]">A mix of software development, databases, data analysis, and design.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {strengths.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-6 md:p-7 relative group overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-3 text-[var(--ink-strong)]">{item.title}</h3>
            <p className="text-[var(--ink-muted)] text-sm mb-6 leading-relaxed">{item.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border bg-[var(--chip)] text-[var(--ink)] border-[var(--chip-line)]"
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
    title: "Lab Software Engineering",
    type: "Web Profile Laboratorium · Politeknik Negeri Malang",
    role: "Project Manager · Backend, database, dan admin panel",
    desc: "Informasi laboratorium sebelumnya tersebar di dokumen dan halaman terpisah, jadi calon anggota dan dosen sulit melihat profil, riset, dan agenda lab dalam satu tempat. labse.web.id menyatukan semuanya: profil, visi-misi, roadmap, personil, serta penelitian dan publikasi, ditambah blog dan formulir pendaftaran anggota yang statusnya dikelola langsung lewat admin panel.",
    techStack: ["Laravel", "Blade", "PostgreSQL", "Tailwind CSS", "Vite", "Vercel"],
    link: "https://labse.web.id/"
  },
  {
    title: "Pasar Nusa",
    type: "B2B Food Supply Chain Platform · Peserta Web Development UPN VETERNITY",
    role: "Tim · Frontend dan backend",
    desc: "Produsen daerah, distributor, dan warung biasanya mencatat stok di tempat berbeda, jadi harga dan ketersediaan barang sulit dilacak. Pasar Nusa menyatukan alur itu: pencatatan hasil panen dan indeks harga di sisi produsen, inventori dan rekomendasi restock di sisi distributor, lalu katalog serta transaksi B2B di sisi warung.",
    techStack: ["Next.js", "Supabase"],
    link: "https://pasar-nusa.vercel.app/"
  },
  {
    title: "Agro-Vision AI",
    type: "Sustainable Farming Management System",
    role: "Solo · Frontend dan integrasi Gemini",
    desc: "Petani butuh jawaban cepat saat tanaman terserang penyakit, bukan panduan umum. Aplikasi ini mendiagnosis penyakit dari foto lewat Gemini, punya ensiklopedia hama, peringatan cuaca, kalkulator pupuk dan bibit berdasarkan luas lahan, serta laporan aktivitas yang bisa diunduh sebagai PDF.",
    techStack: ["React", "Tailwind CSS", "Gemini AI", "Weather API", "Vite", "jsPDF"],
    link: "https://rizalrfli.github.io/agrovision-ai/"
  },
  {
    title: "Analisis Kesehatan Mental Remaja",
    type: "AI / Data Science",
    role: "Solo · Analisis dan pemodelan",
    desc: "Random Forest dipakai untuk memeringkat variabel yang paling berkaitan dengan tingkat depresi remaja. Data yang diuji mencakup durasi media sosial, jam tidur, dan performa akademik, lalu hasilnya disajikan sebagai grafik feature importance dan analisis multivariat.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"],
    link: "https://github.com/rizalrfli/Analisis-Mental-Health-Remaja"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 px-5 md:px-8 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-12 max-w-2xl"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Selected projects</h2>
        <p className="text-[var(--ink-muted)] max-w-2xl">A selection of my work in web development and data analysis.</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-4">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="glass-panel overflow-hidden group"
          >
            <div className="h-full p-6 md:p-8 flex flex-col relative">
              <div className="flex justify-between items-start mb-5 gap-4">
                <span className="text-xs text-[var(--accent)] flex-1 pr-2">{proj.type}</span>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka proyek ${proj.title}`}
                    className="p-2 -m-2 text-[var(--ink-faint)] hover:text-[var(--accent)] transition-colors"
                  >
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold mb-2 text-[var(--ink-strong)] group-hover:text-[var(--accent-hover)] transition-colors">
                {proj.title}
              </h3>
              <p className="text-xs text-[var(--ink-faint)] mb-3">{proj.role}</p>
              <p className="text-[var(--ink-muted)] text-sm leading-relaxed mb-6">{proj.desc}</p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-[var(--ink-faint)] mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {proj.techStack.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs text-[var(--ink)] px-2.5 py-1 rounded-md bg-[var(--chip)] border border-[var(--chip-line)]"
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

const GithubActivity = ({ lightsOn }: { lightsOn: boolean }) => {
  return (
    <section id="activity" className="py-20 md:py-24 px-5 md:px-8 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 max-w-2xl"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Recent activity</h2>
        <p className="text-[var(--ink-muted)] max-w-2xl">My GitHub contribution history.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-panel p-4 md:p-8 overflow-hidden"
      >
        <div className="w-full overflow-x-auto pb-4">
          <div className="min-w-[800px] flex justify-center">
            <GitHubCalendar
              username="rizalrfli"
              colorScheme={lightsOn ? 'light' : 'dark'}
              blockSize={14}
              blockMargin={5}
              fontSize={14}
            />
          </div>
        </div>
      </motion.div>
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
      "Project Manager - Website Lab Software Engineering Website (Polinema JTI)",
      "Builder - Toko Bangunan Cahaya Baru Website"
    ]
  },
  {
    year: "2024 - 2025",
    role: "Graphic Design & Event Photography",
    items: [
      "Wakil Koordinator Design Graphic - Polinema Mengajar",
      "Photographer - Banyuwangi Ethno Carnival"
    ]
  },
  {
    year: "2023 - 2024",
    role: "Technical & Data Internships",
    items: [
      "Network Administrator & Technician - Asterix Computer",
      "Data Entry Staff - Peruri Bulog Indonesia"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 px-5 md:px-8 w-full max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 max-w-2xl"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <p className="text-[var(--ink-muted)] max-w-2xl">Selected roles and activities alongside my studies.</p>
      </motion.div>

      <div className="relative">
        <div aria-hidden className="absolute left-4 md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-px bg-[var(--line-strong)]" />

        <div className="space-y-16 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.25 }}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
                <div className="w-4 h-4 rounded-full bg-[var(--accent)] z-10 relative" />
                <div className="absolute w-7 h-7 rounded-full border border-[var(--line-strong)] bg-[var(--page)]" />
              </div>

              <div className={`w-full md:w-[45%] ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="glass-panel p-6 md:p-7 relative group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-[var(--accent)]">
                      <Calendar size={16} />
                      <span className="text-sm font-semibold">{exp.year}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[var(--ink-strong)] mb-2">
                      {exp.role}
                    </h3>

                    <ul className="space-y-4 mt-2">
                      {exp.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[var(--accent)] opacity-50 group-hover/item:opacity-100 transition-opacity" />
                          <span className="text-[var(--ink-muted)] text-sm leading-relaxed group-hover/item:text-[var(--ink)] transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`hidden md:flex w-[45%] ${index % 2 === 0 ? 'justify-start pr-12' : 'justify-end pl-12'}`}>
                <div className="text-[var(--ink-faint)] font-display font-bold text-3xl opacity-50 pointer-events-none select-none">
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

const achievements = [
  {
    title: "MikroTik Certified Network Associate",
    issuer: "MikroTik",
    date: "April 2024",
    image: "./Achievment/1743133379367.jpg"
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Academy",
    date: "September 2025",
    image: "./Achievment/1759060763412.jpg"
  },
  {
    title: "Wakil Koordinator Desain Grafis 2",
    issuer: "Polinema Mengajar",
    date: "Desember 2025",
    image: "./Achievment/1768038217665.jpg"
  },
  {
    title: "Juara 3 Poster Competition Open Air",
    issuer: "UKM Radio Kampus Politeknik FM",
    date: "Oktober 2025",
    image: "./Achievment/1768038591677.jpg"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 px-5 md:px-8 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 max-w-2xl"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Certificates & activities</h2>
        <p className="text-[var(--ink-muted)]">Selected recognition and extracurricular work.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((achieve, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="glass-panel p-3 overflow-hidden group"
          >
            <div className="h-full p-2 flex flex-col relative">
              <div className="relative w-full h-48 sm:h-40 overflow-hidden mb-4 bg-[var(--thumb)]">
                <img src={achieve.image} alt={achieve.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-md bg-[#080c12]/80 px-2 py-1">
                  <Trophy size={14} className="text-white" />
                  <span className="text-xs font-semibold text-white">{achieve.date}</span>
                </div>
              </div>
              <h3 className="font-display text-base font-bold mb-2 leading-tight text-[var(--ink-strong)] group-hover:text-[var(--accent-hover)] transition-colors">{achieve.title}</h3>
              <p className="text-[var(--ink-muted)] text-sm mt-auto">{achieve.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 px-5 md:px-8 w-full mt-8 border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">Let’s talk</h2>
          <p className="text-[var(--ink-muted)] mb-8 max-w-md text-lg">
            Have a question or want to discuss a project? Send me an email.
          </p>

          <div className="flex flex-col gap-4">
            <a href="mailto:afrizalrafli27@gmail.com" className="flex items-center gap-4 text-[var(--ink)] hover:text-[var(--ink-strong)] transition-colors group">
              <div className="w-11 h-11 flex items-center justify-center bg-[var(--chip)] border border-[var(--chip-line)] rounded-lg group-hover:text-[var(--accent)] transition-colors">
                <Mail size={20} />
              </div>
              afrizalrafli27@gmail.com
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <a aria-label="GitHub" href="https://github.com/rizalrfli" target="_blank" rel="noopener noreferrer" className="p-3 min-w-11 min-h-11 flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--ink-strong)] transition-colors">
              <Github size={20} />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/afrizalrafli" target="_blank" rel="noopener noreferrer" className="p-3 min-w-11 min-h-11 flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--ink-strong)] transition-colors">
              <Linkedin size={20} />
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/afrzalrfli/" target="_blank" rel="noopener noreferrer" className="p-3 min-w-11 min-h-11 flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--ink-strong)] transition-colors">
              <Instagram size={20} />
            </a>
            <a aria-label="WhatsApp" href="https://wa.me/083834079959" target="_blank" rel="noopener noreferrer" className="p-3 min-w-11 min-h-11 flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--ink-strong)] transition-colors">
              <MessageSquare size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-[var(--line)] text-[var(--ink-faint)] text-sm">
        <p>&copy; 2026 Afrizal Rafli</p>
      </div>
    </section>
  );
};

export default function App() {
  const [lightsOn, setLightsOn] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('room-lights') === 'on';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = lightsOn ? 'light' : 'dark';
    window.localStorage.setItem('room-lights', lightsOn ? 'on' : 'off');
  }, [lightsOn]);

  const toggleLights = () => setLightsOn((current) => !current);

  return (
    <div className="min-h-screen relative font-sans">
      <Navbar lightsOn={lightsOn} onToggle={toggleLights} />
      <main className="flex flex-col items-center">
        <Hero lightsOn={lightsOn} onToggle={toggleLights} />
        <About />
        <Projects />
        <GithubActivity lightsOn={lightsOn} />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
