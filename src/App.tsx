import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight, ArrowRight, Menu, X,
  Github, Linkedin, Instagram, Mail, Download, FileText, Trophy, MessageSquare,
  Database, Network, Palette, PenTool
} from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import {
  SiPhp, SiLaravel, SiFilament, SiReact, SiTailwindcss, SiFlutter,
  SiPostgresql, SiPython, SiPandas, SiLinux, SiDocker, SiCisco, SiMikrotik, SiFigma
} from 'react-icons/si';

const CV_URL = './CV_Afrizal_Rafli.pdf';
const PORTRAIT = '/MJ306260.png';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#awards', label: 'Awards' },
  { href: '#cv', label: 'CV' }
];

const Eyebrow = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] ${className}`}>
    {children}
  </p>
);

const Toggle = ({ night, onToggle }: { night: boolean; onToggle: () => void }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={night ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
    aria-pressed={night}
    className="chip chip-hover min-h-11 cursor-pointer px-3"
  >
    <span aria-hidden className="relative grid h-3 w-3 place-items-center">
      <span className={`absolute inset-0 rounded-full border border-current ${night ? '' : 'bg-current'}`} />
      {night && <span className="absolute -right-1 -top-0.5 h-1.5 w-1.5 rounded-full bg-[var(--bg)]" />}
    </span>
    {night ? 'Night' : 'Day'}
  </button>
);

const Navbar = ({ night, onToggle }: { night: boolean; onToggle: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || isOpen ? 'bg-[var(--bg)] border-b border-[var(--line)]' : 'border-b border-transparent'
          }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-5 md:gap-6 md:px-8">
          <a href="#home" className="group flex items-center gap-2.5" aria-label="Afrizal Rafli, kembali ke atas">
            <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-[var(--solid)] text-[var(--solid-ink)]">
              <span className="display text-[15px] font-extrabold tracking-[-0.06em]">AR</span>
            </span>
            <span className="hidden sm:block text-[13px] font-semibold uppercase tracking-[0.16em]">
              Afrizal Rafli
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-70 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Toggle night={night} onToggle={onToggle} />
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex chip chip-hover min-h-10 px-4"
            >
              <FileText size={12} aria-hidden /> Resume
            </a>
            <a href="#contact" className="hidden md:inline-flex chip chip-solid min-h-10 px-4 hover:opacity-90">
              Hire me <ArrowUpRight size={12} aria-hidden />
            </a>
            <button
              type="button"
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] px-3 lg:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">{isOpen ? 'Tutup' : 'Menu'}</span>
            </button>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between bg-[var(--bg)] px-5 pb-8 pt-24 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-b border-[var(--line)] py-4"
              >
                <span className="display text-3xl font-extrabold uppercase tracking-[-0.03em]">{link.label}</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] opacity-50">
                  0{i + 1}
                </span>
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <a href="#contact" onClick={() => setIsOpen(false)} className="chip chip-solid min-h-12 justify-center px-5">
              Mulai proyek <ArrowUpRight size={14} aria-hidden />
            </a>
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="chip min-h-12 justify-center px-5">
              <FileText size={14} aria-hidden /> Lihat CV
            </a>
          </div>
        </div>
      )}
    </>
  );
};

const Portrait = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.img
      src={PORTRAIT}
      alt="Afrizal Rafli"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.1 }}
      className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[46svh] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_28px_55px_rgba(24,32,0,0.20)] sm:h-[64svh] md:h-[112%]"
    />
  );
};

const Hero = () => {
  const avatars = [
    './Achievment/1743133379367.jpg',
    './Achievment/1759060763412.jpg',
    './Achievment/1768038591677.jpg'
  ];

  return (
    <section id="home" className="relative flex min-h-[88svh] flex-col overflow-hidden pt-16 sm:min-h-[100svh] sm:pt-[72px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-4 sm:px-5 md:px-8">

        <div className="mt-6 flex items-start justify-between gap-4 sm:mt-7 sm:gap-8 md:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[30rem]"
          >
            <div className="mb-3.5 flex items-center gap-2">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--fg)]" />
              <Eyebrow>Open for work · 2026</Eyebrow>
            </div>
            <h1 className="display max-w-[24rem] text-[clamp(1.25rem,5.6vw,1.55rem)] font-extrabold uppercase leading-[1.2] tracking-[0.005em] sm:leading-[1.28]">
              Hii,
              <br />
              I'm Afrizal Rafli Kusuma Wardana
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="hidden items-start gap-3 sm:flex md:max-w-[15rem]"
          >
            <div className="flex -space-x-2">
              {avatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  aria-hidden
                  className="h-8 w-8 rounded-full border-2 border-[var(--bg)] object-cover"
                />
              ))}
            </div>
            <div>
              <Eyebrow className="leading-[1.35]">4 sertifikasi<br />&amp; penghargaan</Eyebrow>
              <p className="mt-1.5 text-[11px] leading-snug text-[var(--muted)]">
                MikroTik, Dicoding, Polinema Mengajar.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative mt-4 flex flex-1 flex-col md:mt-2">
          <div className="relative min-h-[48svh] flex-1 sm:min-h-[52svh]">
            <motion.div
              aria-hidden
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none absolute inset-x-0 bottom-[42%] z-0 select-none text-center sm:bottom-[32%] md:bottom-[23%]"
            >
              <span className="wordmark block text-[clamp(2.75rem,15vw,18.4rem)] text-[var(--wordmark)] sm:text-[clamp(3rem,19vw,18.4rem)]">
                Afrizal
              </span>
            </motion.div>

            <Portrait />

            <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-3 pb-3 md:pb-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="ml-auto hidden max-w-[21rem] flex-wrap justify-end gap-1.5 md:flex"
              >
                <span className="chip chip-solid">Laravel</span>
                {['React', 'PostgreSQL', 'PHP', 'Tailwind', 'Figma', 'Docker', 'GNS3', 'Python'].map((tag) => (
                  <span key={tag} className="chip chip-hover cursor-default">{tag}</span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const words = ['Web Developer', 'Network Engineer', 'Data Science', 'Graphic Design', 'Project Manager'];
  const row = [...words, ...words];

  return (
    <div className="inverse marquee overflow-hidden border-y border-[var(--line)] py-3">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {row.map((word, i) => (
              <span key={`${copy}-${i}`} className="flex items-center whitespace-nowrap">
                <span className="display px-5 text-[13px] font-extrabold uppercase tracking-[0.16em] sm:text-sm">
                  {word}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

type Skill = {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
};

const skill = (name: string, href: string, icon: Skill['icon'], color: string): Skill => ({ name, href, icon, color });

const strengths = [
  {
    title: 'Web Development',
    desc: 'PHP, Laravel, dan Filament untuk aplikasi bisnis yang rapi dan tahan lama.',
    skills: [
      skill('PHP', 'https://www.php.net/', SiPhp, '#777BB4'),
      skill('Laravel', 'https://laravel.com/', SiLaravel, '#FF2D20'),
      skill('Filament', 'https://filamentphp.com/', SiFilament, '#FDAE4B'),
      skill('React', 'https://react.dev/', SiReact, '#61DAFB'),
      skill('Tailwind', 'https://tailwindcss.com/', SiTailwindcss, '#38BDF8'),
      skill('Flutter', 'https://flutter.dev/', SiFlutter, '#02569B')
    ]
  },
  {
    title: 'Database',
    desc: 'SQL dan PostgreSQL, termasuk transaksi, stored procedure, dan materialized view.',
    skills: [
      skill('PostgreSQL', 'https://www.postgresql.org/', SiPostgresql, '#4169E1'),
      skill('SQL', 'https://www.w3schools.com/sql/', Database, '#4B8BBE')
    ]
  },
  {
    title: 'Data & Analytics',
    desc: 'Python, Pandas, dan pemodelan statistik dengan Random Forest Regression.',
    skills: [
      skill('Python', 'https://www.python.org/', SiPython, '#3776AB'),
      skill('Pandas', 'https://pandas.pydata.org/', SiPandas, '#E70488')
    ]
  },
  {
    title: 'Infrastructure',
    desc: 'Administrasi Linux dan simulasi jaringan kompleks lewat GNS3.',
    skills: [
      skill('Linux', 'https://www.linux.org/', SiLinux, '#FCC624'),
      skill('MikroTik', 'https://mikrotik.com/', SiMikrotik, '#293239'),
      skill('GNS3', 'https://www.gns3.com/', Network, '#4FA3D1'),
      skill('Docker', 'https://www.docker.com/', SiDocker, '#2496ED'),
      skill('Cisco', 'https://www.cisco.com/', SiCisco, '#1BA0D7')
    ]
  },
  {
    title: 'Design',
    desc: 'Antarmuka dan materi visual dengan tools kreatif sehari-hari.',
    skills: [
      skill('Canva', 'https://www.canva.com/', Palette, '#00C4CC'),
      skill('Figma', 'https://www.figma.com/', SiFigma, '#F24E1E'),
      skill('Affinity', 'https://affinity.serif.com/', PenTool, '#7E4DD2')
    ]
  }
];

const SectionHead = ({
  index,
  label,
  title,
  copy
}: {
  index: string;
  label: string;
  title: string;
  copy?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    transition={{ duration: 0.5 }}
    className="mb-8 border-t border-[var(--line-strong)] pt-4 sm:mb-10 sm:pt-5 md:mb-14"
  >
    <div className="flex flex-col gap-3 sm:gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <Eyebrow className="opacity-60">
          ({index}) — {label}
        </Eyebrow>
        <h2 className="display mt-3 max-w-2xl text-[clamp(2rem,9vw,3.6rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.035em] md:text-[clamp(2rem,5.4vw,3.6rem)]">
          {title}
        </h2>
      </div>
      {copy && <p className="max-w-xs text-base leading-relaxed text-[var(--muted)] sm:text-sm md:pb-2 md:text-right">{copy}</p>}
    </div>
  </motion.div>
);

const About = () => (
  <section id="about" className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
    <SectionHead
      index="01"
      label="About"
      title={<>Yang saya<br />kerjakan</>}
      copy="Campuran pengembangan software, basis data, analisis data, dan desain."
    />

    <div className="grid gap-3 min-[520px]:grid-cols-2 lg:grid-cols-3">
      {strengths.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className={`card-invert flex flex-col justify-between gap-6 rounded-2xl border border-[var(--line)] p-5 sm:gap-8 sm:p-6 ${index === 0 ? 'min-[520px]:col-span-2 lg:col-span-1 lg:row-span-2' : ''
            }`}
        >
          <div>
            <div className="mb-5 flex items-start justify-between">
              <span className="text-[10px] font-semibold tracking-[0.2em] opacity-50">
                0{index + 1}
              </span>
              <ArrowUpRight size={18} aria-hidden className="opacity-40" />
            </div>
            <h3 className="display text-2xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em]">
              {item.title}
            </h3>
            <p className="card-muted mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {item.skills.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Buka situs ${s.name}`}
                className="chip card-soft min-h-11 px-3"
              >
                <s.icon size={12} className="shrink-0" />
                {s.name}
              </a>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

const projects = [
  {
    title: 'Lab Software Engineering',
    type: 'Web profile laboratorium · Polinema',
    role: 'Project Manager · Backend, database, admin panel',
    desc: 'Informasi laboratorium sebelumnya tersebar di dokumen dan halaman terpisah. labse.web.id menyatukan profil, visi-misi, roadmap, personil, riset, dan publikasi — plus blog dan formulir pendaftaran anggota yang dikelola lewat admin panel.',
    techStack: ['Laravel', 'Blade', 'PostgreSQL', 'Tailwind CSS', 'Vite', 'Vercel'],
    link: 'https://labse.web.id/'
  },
  {
    title: 'Pasar Nusa',
    type: 'B2B food supply chain · UPN VETERNITY',
    role: 'Tim · Frontend dan backend',
    desc: 'Produsen, distributor, dan warung mencatat stok di tempat berbeda. Pasar Nusa menyatukan alurnya: pencatatan panen dan indeks harga di sisi produsen, inventori dan rekomendasi restock di distributor, lalu katalog dan transaksi B2B di warung.',
    techStack: ['Next.js', 'Supabase'],
    link: 'https://pasar-nusa.vercel.app/'
  },
  {
    title: 'Agro-Vision AI',
    type: 'Sustainable farming management system',
    role: 'Solo · Frontend dan integrasi Gemini',
    desc: 'Petani butuh jawaban cepat saat tanaman terserang penyakit, bukan panduan umum. Aplikasi ini mendiagnosis penyakit dari foto lewat Gemini, punya ensiklopedia hama, peringatan cuaca, kalkulator pupuk, dan laporan PDF.',
    techStack: ['React', 'Tailwind CSS', 'Gemini AI', 'Weather API', 'Vite', 'jsPDF'],
    link: 'https://rizalrfli.github.io/agrovision-ai/'
  },
  {
    title: 'Analisis Kesehatan Mental Remaja',
    type: 'AI / Data science',
    role: 'Solo · Analisis dan pemodelan',
    desc: 'Random Forest dipakai untuk memeringkat variabel yang paling berkaitan dengan tingkat depresi remaja — durasi media sosial, jam tidur, dan performa akademik — lalu disajikan sebagai grafik feature importance.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn'],
    link: 'https://github.com/rizalrfli/Analisis-Mental-Health-Remaja'
  }
];

const Projects = () => (
  <section id="work" className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
    <SectionHead
      index="02"
      label="Work"
      title={<>Proyek<br />pilihan</>}
      copy="Empat proyek yang paling menggambarkan cara saya bekerja."
    />

    <div className="border-t border-[var(--line)]">
      {projects.map((proj, i) => (
        <motion.a
          key={proj.title}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.45, delay: i * 0.04 }}
          className="group block border-b border-[var(--line)] py-6 transition-colors sm:py-7 md:py-9 hover:bg-[var(--panel)]"
        >
          <div className="grid min-w-0 gap-4 px-1 md:grid-cols-[64px_minmax(0,1fr)_minmax(0,1fr)_auto] md:items-start md:gap-8">
            <span className="display text-xs font-bold tracking-[0.1em] opacity-40 sm:text-sm">
              0{i + 1}
            </span>

            <div>
              <h3 className="display break-words text-[clamp(1.35rem,6vw,2.5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] md:text-[clamp(1.5rem,3.4vw,2.5rem)]">
                {proj.title}
              </h3>
              <Eyebrow className="mt-3 opacity-55">{proj.type}</Eyebrow>
              <p className="mt-3 text-sm leading-relaxed text-[var(--faint)]">{proj.role}</p>
            </div>

            <div>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{proj.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.techStack.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>

            <span className="grid h-11 w-11 shrink-0 place-items-center justify-self-end rounded-full border border-[var(--line-strong)] transition-colors md:justify-self-auto group-hover:bg-[var(--solid)] group-hover:text-[var(--solid-ink)]">
              <ArrowUpRight size={18} aria-hidden />
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

const GithubActivity = ({ night }: { night: boolean }) => (
  <section id="activity" className="inverse border-y border-[var(--line)] py-16 md:py-24">
    <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8">
      <div className="mb-10 flex flex-col gap-5 border-t border-[var(--line-strong)] pt-5 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow className="opacity-60">(03) — Activity</Eyebrow>
          <h2 className="display mt-3 text-[clamp(2rem,5.4vw,3.6rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.035em]">
            Commit<br />terakhir
          </h2>
        </div>
        <a
          href="https://github.com/rizalrfli"
          target="_blank"
          rel="noopener noreferrer"
          className="chip chip-hover min-h-11 w-fit px-3"
        >
          <Github size={12} aria-hidden /> github.com/rizalrfli <ArrowUpRight size={12} aria-hidden />
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-[var(--line)] p-4 md:p-6"
      >
        <div className="hidden w-full overflow-x-auto pb-2 sm:block">
          <div className="min-w-[760px] flex justify-center">
            <GitHubCalendar
              username="rizalrfli"
              colorScheme={night ? 'light' : 'dark'}
              blockSize={13}
              blockMargin={5}
              fontSize={13}
            />
          </div>
        </div>
        <a
          href="https://github.com/rizalrfli"
          target="_blank"
          rel="noopener noreferrer"
          className="chip chip-hover flex min-h-12 w-full justify-center px-4 sm:hidden"
        >
          <Github size={14} aria-hidden /> Lihat aktivitas GitHub
          <ArrowUpRight size={14} aria-hidden />
        </a>
      </motion.div>
    </div>
  </section>
);

const experiences = [
  {
    year: '2025 — 2026',
    role: 'Leadership & Project Management',
    items: [
      'Wakil Ketua Umum — Polinema Mengajar',
      'Volunteer Photographer — Tlatah Lereng Gunung Arjuno',
      'Project Manager — Website Lab Software Engineering (Polinema JTI)',
      'Builder — Toko Bangunan Cahaya Baru Website'
    ]
  },
  {
    year: '2024 — 2025',
    role: 'Graphic Design & Event Photography',
    items: [
      'Wakil Koordinator Design Graphic — Polinema Mengajar',
      'Photographer — Banyuwangi Ethno Carnival'
    ]
  },
  {
    year: '2023 — 2024',
    role: 'Technical & Data Internships',
    items: [
      'Network Administrator & Technician — Asterix Computer',
      'Data Entry Staff — Peruri Bulog Indonesia'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
    <SectionHead
      index="04"
      label="Experience"
      title={<>Jejak<br />organisasi</>}
      copy="Peran dan aktivitas di luar kelas, tiga tahun terakhir."
    />

    <div className="border-t border-[var(--line)]">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.year}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className="grid gap-5 border-b border-[var(--line)] py-7 md:grid-cols-[220px_1fr] md:gap-10 md:py-9"
        >
          <div className="flex items-start gap-3 md:flex-col md:gap-2">
            <span className="display text-lg font-extrabold tracking-[-0.02em] md:text-2xl">
              {exp.year}
            </span>
            <span className="mt-2 hidden h-px w-10 bg-[var(--line-strong)] md:block" />
          </div>

          <div>
            <h3 className="display text-xl font-extrabold uppercase leading-tight tracking-[-0.02em] md:text-2xl">
              {exp.role}
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {exp.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--muted)]">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg)] opacity-40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const achievements = [
  { title: 'MikroTik Certified Network Associate', issuer: 'MikroTik', date: 'April 2024', image: './Achievment/1743133379367.jpg' },
  { title: 'Belajar Dasar AI', issuer: 'Dicoding Academy', date: 'September 2025', image: './Achievment/1759060763412.jpg' },
  { title: 'Wakil Koordinator Desain Grafis 2', issuer: 'Polinema Mengajar', date: 'Desember 2025', image: './Achievment/1768038217665.jpg' },
  { title: 'Juara 3 Poster Competition Open Air', issuer: 'UKM Radio Kampus Politeknik FM', date: 'Oktober 2025', image: './Achievment/1768038591677.jpg' }
];

const Achievements = () => (
  <section id="awards" className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
    <SectionHead
      index="05"
      label="Awards"
      title={<>Sertifikat &amp;<br />aktivitas</>}
      copy="Pengakuan dan kegiatan yang saya kerjakan di luar jam kuliah."
    />

    <div className="grid gap-3 min-[520px]:grid-cols-2 lg:grid-cols-4">
      {achievements.map((achieve, i) => (
        <motion.article
          key={achieve.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className="card-invert group flex flex-col overflow-hidden rounded-2xl border border-[var(--line)]"
        >
          <div className="relative m-2.5 overflow-hidden rounded-xl bg-[var(--panel)]">
            <img
              src={achieve.image}
              alt={achieve.title}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
              <Trophy size={11} aria-hidden /> {achieve.date}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-4 pt-1.5">
            <h3 className="display text-[15px] font-extrabold uppercase leading-[1.1] tracking-[-0.015em]">
              {achieve.title}
            </h3>
            <p className="card-muted mt-auto pt-4 text-xs text-[var(--muted)]">{achieve.issuer}</p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

const CvSection = () => (
  <section id="cv" className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
    <div className="inverse overflow-hidden rounded-3xl border border-[var(--line)]">
      <div className="grid min-w-0 gap-6 p-4 sm:gap-8 sm:p-6 md:grid-cols-[1fr_1.1fr] md:p-10">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <Eyebrow className="opacity-60">(06) — Curriculum vitae</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.4rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.045em]">
              Satu<br />dokumen
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              Riwayat pendidikan, pengalaman, dan keahlian. Bisa dibaca langsung di halaman ini atau diunduh sebagai PDF.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={CV_URL}
              download="CV_Afrizal_Rafli.pdf"
              className="chip chip-solid min-h-12 justify-center px-5"
            >
              <Download size={14} aria-hidden /> Unduh PDF
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-hover min-h-12 justify-center px-5"
            >
              <ArrowUpRight size={14} aria-hidden /> Buka tab baru
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)]">
          <div className="flex min-h-48 flex-col items-start justify-center gap-3 p-5 sm:min-h-56 md:hidden">
            <p className="text-sm leading-relaxed text-[var(--muted)]">Preview CV lebih nyaman dibuka dalam tab baru di layar HP.</p>
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="chip chip-hover min-h-11 px-4">
              <ArrowUpRight size={14} aria-hidden /> Buka preview CV
            </a>
          </div>
          <iframe
            src={`${CV_URL}#view=FitH`}
            title="Curriculum Vitae Afrizal Rafli"
            className="hidden h-[46svh] min-h-[340px] w-full md:block md:h-full md:min-h-[420px]"
          />
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="mx-auto w-full max-w-[1440px] px-4 pb-8 pt-12 sm:px-5 sm:pb-10 sm:pt-16 md:px-8 md:pt-24">
    <div className="border-t border-[var(--line-strong)] pt-5">
      <Eyebrow className="opacity-60">(07) — Contact</Eyebrow>

      <a
        href="mailto:afrizalrafli27@gmail.com"
        className="group mt-6 block"
        aria-label="Kirim email ke Afrizal Rafli"
      >
        <span className="wordmark block text-[clamp(2.6rem,12.5vw,10.5rem)] transition-opacity group-hover:opacity-70">
          Let&rsquo;s talk
        </span>
      </a>

      <div className="mt-8 flex flex-col gap-6 border-t border-[var(--line)] pt-6 md:flex-row md:items-center md:justify-between">
        <a
          href="mailto:afrizalrafli27@gmail.com"
          className="display break-all text-base font-extrabold uppercase tracking-[-0.02em] underline decoration-[1.5px] underline-offset-[6px] sm:break-normal sm:text-2xl"
        >
          afrizalrafli27@gmail.com
        </a>

        <div className="flex flex-wrap gap-2">
          <a href="https://github.com/rizalrfli" target="_blank" rel="noopener noreferrer" className="chip chip-hover min-h-11 px-3">
            <Github size={13} aria-hidden /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/afrizalrafli" target="_blank" rel="noopener noreferrer" className="chip chip-hover min-h-11 px-3">
            <Linkedin size={13} aria-hidden /> LinkedIn
          </a>
          <a href="https://www.instagram.com/afrzalrfli/" target="_blank" rel="noopener noreferrer" className="chip chip-hover min-h-11 px-3">
            <Instagram size={13} aria-hidden /> Instagram
          </a>
          <a href="https://wa.me/6283834079959" target="_blank" rel="noopener noreferrer" className="chip chip-hover min-h-11 px-3">
            <MessageSquare size={13} aria-hidden /> WhatsApp
          </a>
          <a href="mailto:afrizalrafli27@gmail.com" className="chip chip-solid min-h-11 px-3">
            <Mail size={13} aria-hidden /> Email
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-[var(--line)] pt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--faint)] sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; 2026 Afrizal Rafli</span>
        <span className="flex items-center gap-2">
          Malang, Indonesia <ArrowRight size={12} aria-hidden />
        </span>
      </div>
    </div>
  </section>
);

export default function App() {
  const reduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(() => !reduceMotion);
  const [night, setNight] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('room') === 'night';
  });

  useEffect(() => {
    if (reduceMotion) {
      setLoading(false);
      return;
    }

    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    document.documentElement.dataset.theme = night ? 'night' : 'day';
    window.localStorage.setItem('room', night ? 'night' : 'day');
  }, [night]);

  return (
    <div className="relative min-h-screen bg-[var(--bg)] font-sans text-[var(--fg)]">
      <AnimatePresence>
        {loading && (
          <motion.div
            aria-label="Memuat portofolio Afrizal Rafli"
            role="status"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-[var(--bg)]"
          >
            <div className="flex flex-col items-center gap-5">
              <span className="display text-5xl font-extrabold tracking-[-0.08em] sm:text-6xl">AR</span>
              <span className="h-1 w-32 overflow-hidden bg-[var(--line)]">
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.72, ease: 'easeInOut' }}
                  className="block h-full w-full bg-[var(--fg)]"
                />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Afrizal Rafli
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar night={night} onToggle={() => setNight((v) => !v)} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <GithubActivity night={night} />
        <Experience />
        <Achievements />
        <CvSection />
        <Contact />
      </main>
    </div>
  );
}
