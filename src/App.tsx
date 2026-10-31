import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight, ArrowRight, Menu, X,
  Github, Linkedin, Instagram, Mail, Download, FileText, Trophy, MessageSquare,
  Database, Network, Palette, PenTool, Server, ShieldCheck, Wrench, Cable,
  Terminal, Activity, Lock, Globe, Cpu, Layers, HardDrive, CheckCircle2, Clock,
  FolderGit2, FileCode, Eye
} from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import {
  SiLaravel, SiReact,
  SiPostgresql, SiPython, SiLinux, SiDocker, SiCisco, SiMikrotik, SiFigma
} from 'react-icons/si';

const CV_URL = './CV_Afrizal_Rafli.pdf';
const PORTRAIT = '/MJ306260.png';

const navLinks = [
  { href: '#about', label: 'Tech Stack' },
  { href: '#work', label: 'Network Labs' },
  { href: '#dokumentasi', label: 'Field Docs' },
  { href: '#awards', label: 'Certifications' },
  { href: '#experience', label: 'Experience' },
  { href: '#activity', label: 'IaC & GitHub' },
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
    {night ? 'Terminal' : 'Daylight'}
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
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || isOpen ? 'bg-[var(--bg)] border-b border-[var(--line)]' : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-5 md:gap-6 md:px-8">
          <a href="#home" className="group flex items-center gap-2.5" aria-label="Afrizal Rafli, kembali ke atas">
            <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-[var(--solid)] text-[var(--solid-ink)]">
              <span className="display text-[15px] font-extrabold tracking-[-0.06em]">AR</span>
            </span>
            <div className="hidden sm:flex flex-col">
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] leading-tight">
                Afrizal Rafli
              </span>
              <span className="mono text-[9px] uppercase tracking-[0.12em] opacity-65">
                SysAdmin &amp; NetEng
              </span>
            </div>
          </a>

          <div className="hidden xl:flex items-center gap-6">
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
              <FileText size={12} aria-hidden /> CV (SysAdmin)
            </a>
            <a href="#contact" className="hidden md:inline-flex chip chip-solid min-h-10 px-4 hover:opacity-90">
              Hire / Intern <ArrowUpRight size={12} aria-hidden />
            </a>
            <button
              type="button"
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] px-3 xl:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">{isOpen ? 'Tutup' : 'Menu'}</span>
            </button>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between bg-[var(--bg)] px-5 pb-8 pt-24 xl:hidden overflow-y-auto">
          <div className="flex flex-col">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-b border-[var(--line)] py-3.5"
              >
                <span className="display text-2xl sm:text-3xl font-extrabold uppercase tracking-[-0.03em]">{link.label}</span>
                <span className="mono text-[10px] font-semibold tracking-[0.2em] opacity-50">
                  0{i + 1}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#work" onClick={() => setIsOpen(false)} className="chip chip-solid min-h-12 justify-center px-5">
              Lihat Topologi &amp; Lab <ArrowUpRight size={14} aria-hidden />
            </a>
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="chip min-h-12 justify-center px-5">
              <FileText size={14} aria-hidden /> Unduh CV (SysAdmin/Network)
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
      alt="Afrizal Rafli Kusuma Wardana — System Administrator & Network Engineer"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.1 }}
      className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[38svh] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_28px_55px_rgba(24,32,0,0.28)] sm:h-[48svh] lg:left-[72%] lg:h-[92%] xl:left-[74%] xl:h-[98%]"
    />
  );
};

const Hero = () => {
  const avatars = [
    './Achievment/1743133379367.jpg',
    './Dokumentasi/terminasi-panel-jaringan.jpeg',
    './Dokumentasi/perakitan-troubleshooting-pc.jpeg'
  ];

  return (
    <section id="home" className="relative flex min-h-[92svh] flex-col overflow-hidden pt-16 sm:min-h-[100svh] sm:pt-[72px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-between px-4 sm:px-5 md:px-8">

        {/* Top Bar: Telemetry & Credentials Summary */}
        <div className="mt-5 flex flex-wrap items-start justify-between gap-4 border-b border-[var(--line)] pb-4 sm:mt-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="mono rounded-full border border-[var(--line)] px-3 py-1 text-[10px] uppercase tracking-[0.14em] opacity-75">
              ROLE: SYSADMIN / NETWORK ENGINEER
            </span>
          </div>

          <div className="hidden items-center gap-3 md:flex">
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
              <Eyebrow className="leading-[1.25]">MTCNA Certified · Field Tested</Eyebrow>
              <p className="mono mt-0.5 text-[10px] text-[var(--muted)]">
                Linux Server · Routing/Switching · Docker · K3 TI
              </p>
            </div>
          </div>
        </div>

        {/* Main Content + Portrait Stage */}
        <div className="relative my-auto grid flex-1 items-center gap-8 pt-6 pb-44 sm:pb-56 lg:grid-cols-[1.15fr_0.85fr] lg:py-10">
          {/* Background Wordmark */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-x-0 bottom-[6%] z-0 select-none text-center lg:bottom-[4%] lg:text-right"
          >
            <span className="wordmark block text-[clamp(3.2rem,16vw,15.5rem)] text-[var(--wordmark)] opacity-80">
              SYSADMIN
            </span>
          </motion.div>

          {/* Left Column: Headline, Bio, 3 CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 max-w-2xl"
          >
            <p className="mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Afrizal Rafli Kusuma Wardana · Teknik Informatika Polinema
            </p>

            <h1 className="display mt-3 text-[clamp(1.85rem,5.2vw,3.75rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.03em]">
              System Administrator &amp; Network Infrastructure Enthusiast
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Mahasiswa Teknik Informatika yang berfokus pada administrasi sistem Linux dan manajemen jaringan (Routing, Switching, Firewall).
            </p>

            {/* 3 CTA Buttons mandated by Evaluation Spec */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="#work"
                className="chip chip-solid min-h-11 px-4 text-[11px]"
              >
                <Network size={14} aria-hidden /> Lihat Topologi &amp; Lab <ArrowRight size={13} aria-hidden />
              </a>
              <a
                href={CV_URL}
                download="CV_Afrizal_Rafli.pdf"
                className="chip chip-hover min-h-11 px-4 text-[11px] bg-[var(--bg)]/80 backdrop-blur-sm"
              >
                <Download size={14} aria-hidden /> Unduh CV (SysAdmin/Network)
              </a>
              <a
                href="#activity"
                className="chip chip-hover min-h-11 px-4 text-[11px] bg-[var(--bg)]/80 backdrop-blur-sm"
              >
                <Terminal size={14} aria-hidden /> Dokumentasi Server / GitHub <ArrowUpRight size={13} aria-hidden />
              </a>
            </div>

            {/* Quick Terminal Telemetry Strip */}
            <div className="mt-7 grid grid-cols-2 gap-2.5 rounded-2xl border border-[var(--line-strong)] bg-[var(--bg)]/85 p-3.5 backdrop-blur-md sm:grid-cols-4">
              <div>
                <span className="mono block text-[10px] uppercase opacity-60">Certification</span>
                <span className="display mt-0.5 block text-sm font-extrabold uppercase">MikroTik MTCNA</span>
              </div>
              <div>
                <span className="mono block text-[10px] uppercase opacity-60">Core OS</span>
                <span className="display mt-0.5 block text-sm font-extrabold uppercase">Ubuntu / Debian</span>
              </div>
              <div>
                <span className="mono block text-[10px] uppercase opacity-60">Routing &amp; Lab</span>
                <span className="display mt-0.5 block text-sm font-extrabold uppercase">OSPF · VLAN · GNS3</span>
              </div>
              <div>
                <span className="mono block text-[10px] uppercase opacity-60">Field Ops</span>
                <span className="display mt-0.5 block text-sm font-extrabold uppercase">40+ Node &amp; K3 TI</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column / Portrait Container */}
          <div className="hidden lg:block" />
          <Portrait />
        </div>

        {/* Bottom Infrastructure Badge Strip */}
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--line)] py-3">
          <span className="mono text-[10px] uppercase tracking-[0.16em] opacity-70">
            INFRASTRUCTURE STACK //
          </span>
          <div className="flex flex-wrap gap-1.5">
            {['MikroTik RouterOS', 'Cisco IOS', 'Linux Server', 'Docker', 'Cloudflare', 'WireGuard VPN'].map((tag, i) => (
              <span key={tag} className={`chip cursor-default ${i < 4 ? 'chip-solid' : 'bg-[var(--bg)]/85'}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const Marquee = () => {
  const words = [
    'System Administrator',
    'Network Engineering',
    'Linux Server Hardening',
    'Routing & Switching (MTCNA)',
    'Docker & Virtualization',
    'Server Monitoring & K3 TI'
  ];
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

const SectionHead = ({
  index,
  label,
  title,
  copy
}: {
  index: string;
  label: string;
  title: React.ReactNode;
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
          ({index}) · {label}
        </Eyebrow>
        <h2 className="display mt-3 max-w-3xl text-[clamp(1.85rem,7vw,3.4rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.035em]">
          {title}
        </h2>
      </div>
      {copy && <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)] md:pb-1 md:text-right">{copy}</p>}
    </div>
  </motion.div>
);

/* ============================================================================
   SECTION 01: SKILLS & TECH STACK (INFRASTRUCTURE-FIRST)
   ============================================================================ */
type SkillBadge = {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
};

type InfraCategory = {
  code: string;
  title: string;
  flag?: string;
  desc: string;
  points: string[];
  badges: SkillBadge[];
};

const infraCategories: InfraCategory[] = [
  {
    code: 'STACK-01 // NETWORKING',
    title: 'Network Engineering',
    flag: 'Core Competency',
    desc: 'Perancangan topologi jaringan hierarkis, manajemen routing dinamis/statis, segmentasi VLAN, analisis paket, serta administrasi perangkat MikroTik & Cisco.',
    points: [
      'TCP/IP & Subnetting (VLSM / CIDR)',
      'VLAN, Trunking (802.1Q) & Inter-VLAN Routing',
      'Routing Static, OSPF & Dasar BGP',
      'MikroTik RouterOS (MTCNA) & Cisco IOS',
      'VPN Tunneling (WireGuard / OpenVPN) & Wireshark Packet Analysis'
    ],
    badges: [
      { name: 'TCP/IP & Subnetting', icon: Network },
      { name: 'VLAN & Trunking', icon: Layers },
      { name: 'Routing (Static, OSPF, BGP)', icon: Globe },
      { name: 'MikroTik (RouterOS)', icon: SiMikrotik },
      { name: 'Cisco IOS', icon: SiCisco },
      { name: 'VPN (WireGuard / OpenVPN)', icon: Lock },
      { name: 'Wireshark', icon: Activity }
    ]
  },
  {
    code: 'STACK-02 // SYSADMIN',
    title: 'System Administration',
    flag: 'Core Competency',
    desc: 'Instalasi, konfigurasi, otomasi, dan pemeliharaan server Linux untuk menjamin ketersediaan layanan dan keamanan akses.',
    points: [
      'Linux Server Administration (Ubuntu Server, Debian, Rocky/CentOS)',
      'Bash Shell Scripting untuk otomasi backup & maintenance',
      'SSH Hardening (Key-based Auth, Port Custom, Disable Root)',
      'Manajemen layanan dengan Systemd & penjadwalan Cronjobs'
    ],
    badges: [
      { name: 'Linux (Ubuntu, Debian, Rocky)', icon: SiLinux },
      { name: 'Docker & Reverse Proxy', icon: SiDocker },
      { name: 'Bash Scripting', icon: Terminal },
      { name: 'SSH & Firewall Hardening', icon: ShieldCheck },
      { name: 'Cronjobs & Systemd', icon: Clock }
    ]
  }
];

const supportingSkills: SkillBadge[] = [
  { name: 'PostgreSQL & SQL Administration', icon: SiPostgresql },
  { name: 'Python (Automation & Data)', icon: SiPython },
  { name: 'Laravel / PHP (Internal Tools)', icon: SiLaravel },
  { name: 'React & Tailwind CSS', icon: SiReact },
  { name: 'Figma / Topology Diagramming', icon: SiFigma }
];

const About = () => (
  <section id="about" className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
    <SectionHead
      index="01"
      label="Skills & Tech Stack"
      title={<>Kompetensi Jaringan<br />&amp; System Administration</>}
      copy="Fokus utama di bidang Network Engineering dan System Administration, didukung basis data serta pengembangan sistem."
    />

    <div className="grid gap-4 md:grid-cols-2">
      {infraCategories.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className="card-invert flex flex-col justify-between gap-6 rounded-2xl border border-[var(--line)] p-5 sm:p-6"
        >
          <div>
            <div className="mb-4 flex items-center justify-between gap-2">
              <span className="mono text-[10px] font-bold tracking-[0.18em] opacity-60">
                {item.code}
              </span>
              {item.flag ? (
                <span className="chip card-flag px-2.5 py-1">{item.flag}</span>
              ) : (
                <Server size={16} aria-hidden className="opacity-45" />
              )}
            </div>

            <h3 className="display text-2xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] sm:text-3xl">
              {item.title}
            </h3>
            <p className="card-muted mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>

            <ul className="mt-4 grid gap-2 border-t border-[var(--line)] pt-4">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--muted)] card-muted">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5 border-t border-[var(--line)] pt-4">
            {item.badges.map((b) => (
              <span
                key={b.name}
                className="chip card-soft min-h-9 px-3 cursor-default"
              >
                <b.icon size={12} />
                {b.name}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>

    {/* Supporting Scripting, Database & Web Stack moved neatly to bottom */}
    <div className="mt-4 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Eyebrow className="opacity-70">Supporting Stack · Database, Scripting &amp; Internal Web Tools</Eyebrow>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Keahlian pendukung untuk otomasi skrip, pengelolaan basis data relasional, dan pembuatan dashboard internal.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {supportingSkills.map((s) => (
            <span key={s.name} className="chip min-h-9 px-3">
              <s.icon size={12} />
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================================
   SECTION 03: NETWORK LABS & INFRASTRUCTURE CASE STUDIES
   ============================================================================ */
type LabProject = {
  id: string;
  code: string;
  title: string;
  category: string;
  tools: string[];
  problem: string;
  solution: string;
  topologySummary: string[];
  vlanTable?: { vlan: string; name: string; subnet: string; gateway: string; policy: string }[];
  downloadConfigUrl?: string;
  downloadPktUrl?: string;
  topologyImage?: string;
  topologyThumb?: string;
  configTitle: string;
  configSnippet: string;
  primaryBtnLabel: string;
  secondaryBtnLabel: string;
  repoUrl: string;
};

const networkLabs: LabProject[] = [
  {
    id: 'vlan-trunk-intervlan',
    code: 'LAB-01 // SWITCHING & VLAN',
    title: 'VLAN Segmentation, 802.1Q Trunk & Router-on-a-Stick',
    category: 'Switching & Inter-VLAN Routing',
    tools: ['Cisco Packet Tracer 9.0', 'VLAN 10/20/99', '802.1Q Trunking', 'Router-on-a-Stick', 'Port-Security Sticky'],
    problem:
      'Satu broadcast domain datar membuat seluruh departemen berbagi domain yang sama: broadcast storm menjalar ke semua host, dan tidak ada batas keamanan antar-segmen. Menambahkan switch tanpa trunk yang benar justru membuat VLAN tidak pernah sampai ke router sehingga antar-VLAN tetap tidak bisa berkomunikasi.',
    solution:
      'Membangun segmentasi VLAN 10 (SALES), 20 (IT), dan 99 (MGMT) pada dua switch 2960 yang dihubungkan trunk 802.1Q dengan native VLAN 99. Inter-VLAN routing ditangani router 2911 memakai subinterface dot1Q (router-on-a-stick), DHCP terpusat di router, port-security sticky MAC dengan violation restrict pada tiap port access, serta SSHv2 sebagai satu-satunya jalur manajemen.',
    topologySummary: [
      'R1 (2911): subinterface G0/0.10, G0/0.20, G0/0.99 sebagai gateway tiap VLAN + dua DHCP pool terpisah',
      'SW1 (2960): VLAN 10/20/99, trunk Fa0/24 ke router dan Gi0/1 ke SW2, native VLAN 99, allowed 10,20,99',
      'SW2 (2960): VLAN 10/20/99, trunk Gi0/1 ke SW1, PC5 di VLAN 10 dan PC6 di VLAN 20',
      'Hardening: port-security sticky (max 1 MAC, violation restrict), portfast + BPDU guard pada semua port access',
      'Hasil uji: 6 lease DHCP sesuai rencana, 4 sticky MAC terpelajari tanpa violation, ping antar-VLAN 0% loss, SSH login berhasil'
    ],
    downloadPktUrl: './labs/lab-01/lab-01-vlan.pkt',
    downloadConfigUrl: './labs/lab-01/01-R1.txt',
    topologyImage: './labs/lab-01/topology.png',
    topologyThumb: './labs/lab-01/topology-canvas.png',
    configTitle: 'lab-01 — R1 / SW1 / SW2 (Cisco IOS VLAN & trunk)',
    configSnippet: `! === R1: router-on-a-stick ===
interface GigabitEthernet0/0
 no ip address
 no shutdown
!
interface GigabitEthernet0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
!
interface GigabitEthernet0/0.99
 encapsulation dot1Q 99 native
 ip address 192.168.99.1 255.255.255.0

! === SW1: trunk + port-security ===
interface FastEthernet0/24
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,20,99
!
interface FastEthernet0/1
 switchport mode access
 switchport access vlan 10
 switchport port-security maximum 1
 switchport port-security mac-address sticky`,
    primaryBtnLabel: 'Lihat Topologi VLAN',
    secondaryBtnLabel: 'Lihat Config Trunk & DHCP',
    repoUrl: 'https://github.com/rizalrfli'
  },
  {
    id: 'static-routing-multirouter',
    code: 'LAB-02 // ROUTING & MULTI-ROUTER',
    title: 'Static Routing & Inter-LAN Connectivity Across Three Routers',
    category: 'Network Routing',
    tools: ['Cisco Packet Tracer 9.0', 'Cisco IOS 2911', 'Static & Default Route', 'DHCP Server', 'Traceroute Validation'],
    problem:
      'Router hanya mengenali jaringan yang menempel langsung pada interface-nya. Pada topologi tiga router, PC di LAN A tidak dapat menjangkau LAN C karena tidak ada entri rute yang memberi tahu lewat mana paket harus dikirim — dan kesalahan penulisan next-hop menghasilkan blackhole tanpa pesan error apa pun.',
    solution:
      'Membangun topologi tiga router dengan dua link WAN /30 sebagai transit, lalu mendefinisikan rute statis dua arah pada setiap router. Router transit (R2) sengaja dipertahankan memakai rute spesifik — bukan default route — karena ia memiliki dua arah keluar sehingga default route akan mengarahkan trafik sisi lain ke jalur yang salah. Seluruh jalur divalidasi dengan traceroute, bukan hanya ping.',
    topologySummary: [
      'LAN A (192.168.1.0/24) → R1 G0/0 = .1, DHCP pool LAN_A, uplink WAN1 10.1.12.1/30 ke R2',
      'LAN B (192.168.2.0/24) → R2 G0/0 = .1 sebagai transit router, dua link WAN: 10.1.12.2/30 (ke R1) dan 10.2.23.1/30 (ke R3)',
      'LAN C (192.168.3.0/24) → R3 G0/0 = .1, DHCP pool LAN_C, uplink WAN2 10.2.23.2/30 ke R2',
      'Hasil tracert terverifikasi 4 hop: 192.168.1.1 → 10.1.12.2 → 10.2.23.2 → 192.168.3.11'
    ],
    downloadPktUrl: './labs/lab-02/lab-02-static-routing.pkt',
    downloadConfigUrl: './labs/lab-02/01-R1.txt',
    topologyImage: './labs/lab-02/topology.png',
    topologyThumb: './labs/lab-02/topology-canvas.png',
    configTitle: 'lab-02 — R1 / R2 / R3 (Cisco IOS static routing)',
    configSnippet: `! === R1: rute ke LAN B & LAN C via R2 ===
ip route 192.168.2.0 255.255.255.0 10.1.12.2
ip route 192.168.3.0 255.255.255.0 10.1.12.2

! === R2 (transit): rute spesifik dua arah ===
! Default route DILARANG di sini — R2 punya dua jalur keluar
ip route 192.168.1.0 255.255.255.0 10.1.12.1
ip route 192.168.3.0 255.255.255.0 10.2.23.2

! === R3: rute ke LAN A & LAN B via R2 ===
ip route 192.168.1.0 255.255.255.0 10.2.23.1
ip route 192.168.2.0 255.255.255.0 10.2.23.1

! === Verifikasi (bukan sekadar ping) ===
! PC1> tracert 192.168.3.11
!   1  192.168.1.1   2  10.1.12.2   3  10.2.23.2   4  192.168.3.11
! R1# show ip route
! S    192.168.2.0/24 [1/0] via 10.1.12.2
! S    192.168.3.0/24 [1/0] via 10.1.12.2`,
    primaryBtnLabel: 'Lihat Topologi Multi-Router',
    secondaryBtnLabel: 'Lihat Rute & Config CLI',
    repoUrl: 'https://github.com/rizalrfli'
  },
  {
    id: 'ospf-single-area',
    code: 'LAB-03 // DYNAMIC ROUTING',
    title: 'OSPF Single-Area Convergence & Failover Behaviour',
    category: 'Dynamic Routing',
    tools: ['Cisco Packet Tracer 9.0', 'OSPF Area 0', 'DR/BDR Election', 'Passive Interface', 'Loopback Router-ID'],
    problem:
      'Konfigurasi static routing pada Lab 02 menuntut enam entri rute manual dan tidak punya mekanisme pemulihan otomatis: saat satu link WAN putus, rute basi tetap berada di tabel dan paket dikirim ke jalur yang sudah mati (blackhole) tanpa pesan error.',
    solution:
      'Menerapkan OSPF single-area dengan router-id eksplisit dari loopback (/32) agar identitas router deterministik, wildcard mask yang tepat per prefix (/24 → 0.0.0.255, /30 → 0.0.0.3), dan passive-interface pada interface LAN agar Hello tidak dikirim ke host. Tidak ada satu pun ip route statis — seluruh tabel routing dibangun dari pertukaran LSA. Perilaku konvergensi diuji dengan mematikan link secara langsung, bukan hanya memastikan ping berhasil.',
    topologySummary: [
      'Area 0 tunggal: R1 (router-id 1.1.1.1) — R2 (2.2.2.2) — R3 (3.3.3.3), loopback /32 sebagai identitas stabil',
      'Tiga LAN ber-DHCP: 192.168.1.0/24, 192.168.2.0/24, 192.168.3.0/24; dua link WAN /30 (10.1.12.0/30 dan 10.2.23.0/30)',
      'passive-interface GigabitEthernet0/0 pada ketiga router: LAN tetap diiklankan, Hello tidak dikirim ke PC',
      'Hasil uji: adjacency FULL dua arah, rute O dengan cost 2 (satu hop) dan 3 (dua hop), tracert 4 hop, ping 0% loss',
      'Uji failover: link R2–R3 dimatikan → rute LAN C dicabut dalam dead-interval 40 detik → link dihidupkan → adjacency pulih, ping kembali 0% loss'
    ],
    downloadPktUrl: './labs/lab-03/lab-03-ospf.pkt',
    downloadConfigUrl: './labs/lab-03/01-R1.txt',
    topologyImage: './labs/lab-03/topology.png',
    topologyThumb: './labs/lab-03/topology-canvas.png',
    configTitle: 'lab-03 — R1 / R2 / R3 (Cisco IOS OSPF)',
    configSnippet: `! === R1: OSPF tanpa satu pun static route ===
router ospf 1
 router-id 1.1.1.1
 log-adjacency-changes
 passive-interface GigabitEthernet0/0
 network 192.168.1.0 0.0.0.255 area 0
 network 10.1.12.0 0.0.0.3 area 0
 network 1.1.1.1 0.0.0.0 area 0

! === Verifikasi adjacency & metrik ===
! R1# show ip ospf neighbor
! 2.2.2.2   1   FULL/DR    00:00:32   10.1.12.2   GigabitEthernet0/1
!
! R1# show ip route ospf
! O  192.168.2.0/24 [110/2] via 10.1.12.2   <- satu hop
! O  192.168.3.0/24 [110/3] via 10.1.12.2   <- dua hop`,
    primaryBtnLabel: 'Lihat Topologi OSPF',
    secondaryBtnLabel: 'Lihat Config & Neighbor',
    repoUrl: 'https://github.com/rizalrfli'
  }
];

const supportingProjects = [
  {
    title: 'Lab Software Engineering (labse.web.id)',
    type: 'Production Web Deployment & Portal · Polinema',
    role: 'Project Manager · Backend, Database & Deployment',
    desc: 'Memimpin pengembangan dan deployment portal resmi Laboratorium Software Engineering Polinema yang menyatukan profil, roadmap riset, publikasi, dan manajemen anggota dengan ketersediaan tinggi.',
    techStack: ['Laravel', 'PostgreSQL', 'Tailwind CSS', 'Vite', 'Production Deployment'],
    link: 'https://labse.web.id/'
  },
  {
    title: 'Pasar Nusa',
    type: 'B2B Food Supply Chain System · UPN Veteran',
    role: 'Tim · Backend, Database & Frontend',
    desc: 'Sistem terintegrasi yang menghubungkan pencatatan panen produsen, inventori distributor, dan transaksi B2B warung dengan basis data real-time.',
    techStack: ['Next.js', 'Supabase', 'PostgreSQL'],
    link: 'https://pasar-nusa.vercel.app/'
  },
  {
    title: 'Agro-Vision AI',
    type: 'Smart Agriculture Diagnostic Platform',
    role: 'Solo · Integrasi API & System Logic',
    desc: 'Aplikasi diagnosis kesehatan tanaman berbasis API dengan fitur peringatan cuaca, kalkulator dosis pupuk, dan ekspor laporan teknis PDF.',
    techStack: ['React', 'Tailwind CSS', 'Gemini API', 'Weather API', 'jsPDF'],
    link: 'https://rizalrfli.github.io/agrovision-ai/'
  },
  {
    title: 'Analisis Kesehatan Mental Remaja',
    type: 'Statistical Modeling & Data Pipeline',
    role: 'Solo · Data Engineering & Modeling',
    desc: 'Pemodelan Random Forest Regression menggunakan Python dan Scikit-Learn untuk menganalisis korelasi variabel kebiasaan harian terhadap kesehatan mental.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn'],
    link: 'https://github.com/rizalrfli/Analisis-Mental-Health-Remaja'
  }
];

const Projects = ({
  onSelectLab
}: {
  onSelectLab: (lab: LabProject, tab: 'topology' | 'config') => void;
}) => {
  const [activeTab, setActiveTab] = useState<'infra' | 'supporting'>('infra');

  return (
    <section id="work" className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
      <SectionHead
        index="02"
        label="Network Labs & Case Studies"
        title={<>Network Labs &amp;<br />Infrastructure Case Studies</>}
        copy="Simulasi topologi jaringan Cisco: segmentasi VLAN, inter-VLAN routing, routing statis multi-router, dan OSPF. Setiap lab punya file Packet Tracer yang bisa langsung diunduh dan dijalankan."
      />

      {/* Category Switcher Tabs */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] pb-4">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('infra')}
            className={`chip min-h-11 cursor-pointer px-4 text-[11px] ${
              activeTab === 'infra' ? 'chip-solid' : 'chip-hover'
            }`}
          >
            <Network size={14} aria-hidden /> Network &amp; SysAdmin Labs (03)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('supporting')}
            className={`chip min-h-11 cursor-pointer px-4 text-[11px] ${
              activeTab === 'supporting' ? 'chip-solid' : 'chip-hover'
            }`}
          >
            <Database size={14} aria-hidden /> Supporting Software &amp; Web Projects (04)
          </button>
        </div>
        <span className="mono text-[11px] opacity-65">
          {activeTab === 'infra'
            ? 'MODE: TOPOLOGY, PROBLEM, SOLUTION & CLI CONFIG'
            : 'MODE: PRODUCTION WEB & DATA DEPLOYMENTS'}
        </span>
      </div>

      {activeTab === 'infra' ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {networkLabs.map((lab, i) => (
            <motion.article
              key={lab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex flex-col justify-between rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] p-5 sm:p-6"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-3">
                  <span className="mono text-[10px] font-bold uppercase tracking-[0.16em] opacity-75">
                    {lab.code}
                  </span>
                  <span className="chip px-2.5 py-1 text-[9px]">{lab.category}</span>
                </div>

                <h3 className="display mt-4 text-2xl font-extrabold uppercase leading-[1.02] tracking-[-0.025em] sm:text-3xl">
                  {lab.title}
                </h3>

                {/* Problem & Solution Breakdown */}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-[var(--line)] bg-[var(--bg)]/60 p-3.5">
                    <span className="mono text-[10px] font-bold uppercase tracking-[0.14em] opacity-65">
                      01 // Masalah Infrastruktur
                    </span>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                      {lab.problem}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[var(--line)] bg-[var(--bg)]/60 p-3.5">
                    <span className="mono text-[10px] font-bold uppercase tracking-[0.14em] opacity-65">
                      02 // Solusi &amp; Konfigurasi
                    </span>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                      {lab.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="mt-4 rounded-xl border border-[var(--line)] bg-[var(--bg)]/85 p-3.5">
                  <span className="mono text-[10px] font-bold uppercase tracking-[0.14em] opacity-70">
                    Arsitektur &amp; Parameter Teknis:
                  </span>
                  <ul className="mt-2 grid gap-1.5">
                    {lab.topologySummary.map((line) => (
                      <li key={line} className="mono flex items-start gap-2 text-[11px] leading-snug text-[var(--muted)]">
                        <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg)]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot from the actual .pkt file */}
                {lab.topologyThumb && (
                  <button
                    type="button"
                    onClick={() => onSelectLab(lab, 'topology')}
                    className="mt-4 block w-full cursor-pointer overflow-hidden rounded-xl border border-[var(--line-strong)] text-left"
                    aria-label={`Buka detail ${lab.title}`}
                  >
                    <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">
                      <span className="mono text-[9px] font-bold uppercase tracking-[0.14em] opacity-75">
                        Packet Tracer — Hasil Build
                      </span>
                      <span className="mono text-[9px] uppercase opacity-55">.pkt</span>
                    </div>
                    <img
                      src={lab.topologyThumb}
                      alt={`Screenshot topologi Packet Tracer untuk ${lab.title}`}
                      loading="lazy"
                      className="h-52 w-full bg-[var(--surface-2)] object-cover sm:h-56"
                    />
                  </button>
                )}

                {/* Tools Used */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {lab.tools.map((t) => (
                    <span key={t} className="chip mono text-[9px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dual Action Buttons mandated by evaluation doc */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-[var(--line)] pt-4">
                <button
                  type="button"
                  onClick={() => onSelectLab(lab, 'topology')}
                  className="chip chip-solid min-h-11 flex-1 cursor-pointer justify-center px-4"
                >
                  <Eye size={14} aria-hidden /> {lab.primaryBtnLabel}
                </button>
                <button
                  type="button"
                  onClick={() => onSelectLab(lab, 'config')}
                  className="chip chip-hover min-h-11 flex-1 cursor-pointer justify-center px-4"
                >
                  <FileCode size={14} aria-hidden /> {lab.secondaryBtnLabel}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="border-t border-[var(--line)]">
          {supportingProjects.map((proj, i) => (
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
                  <h3 className="display break-words text-[clamp(1.35rem,6vw,2.3rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.035em]">
                    {proj.title}
                  </h3>
                  <Eyebrow className="mt-3 opacity-55">{proj.type}</Eyebrow>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--faint)]">{proj.role}</p>
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
      )}
    </section>
  );
};

const LabModal = ({
  labState,
  onClose
}: {
  labState: { lab: LabProject; tab: 'topology' | 'config' } | null;
  onClose: () => void;
}) => {
  const [tab, setTab] = useState<'topology' | 'config'>('topology');

  useEffect(() => {
    if (labState) setTab(labState.tab);
  }, [labState]);

  useEffect(() => {
    if (!labState) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [labState, onClose]);

  if (!labState) return null;
  const { lab } = labState;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lab-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[90dvh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[var(--line-strong)] bg-[var(--bg)] p-4 text-[var(--fg)] shadow-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-4">
          <div>
            <Eyebrow className="opacity-70">{lab.code} · {lab.category}</Eyebrow>
            <h3 id="lab-modal-title" className="display mt-1 text-xl font-extrabold uppercase tracking-[-0.02em] sm:text-2xl">
              {lab.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail lab (Escape)"
            className="inline-flex h-11 min-w-11 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[var(--line-strong)] px-3 text-xs font-bold uppercase"
          >
            <X size={16} aria-hidden /> Tutup
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTab('topology')}
            className={`chip min-h-10 cursor-pointer px-4 ${tab === 'topology' ? 'chip-solid' : 'chip-hover'}`}
          >
            <Network size={13} aria-hidden /> Topologi &amp; SOP Arsitektur
          </button>
          <button
            type="button"
            onClick={() => setTab('config')}
            className={`chip min-h-10 cursor-pointer px-4 ${tab === 'config' ? 'chip-solid' : 'chip-hover'}`}
          >
            <Terminal size={13} aria-hidden /> Konfigurasi / Script ({lab.configTitle})
          </button>
        </div>

        {tab === 'topology' ? (
          <div className="mt-5 space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--line)] p-4">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.16em] opacity-70">
                  Masalah yang Diselesaikan
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{lab.problem}</p>
              </div>
              <div className="rounded-xl border border-[var(--line)] p-4">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.16em] opacity-70">
                  Implementasi Solusi
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{lab.solution}</p>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--line-strong)] bg-[var(--panel)] p-4">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.16em] opacity-75">
                Detail Layer Topologi &amp; Skema Konfigurasi
              </p>
              <ul className="mt-3 space-y-2.5">
                {lab.topologySummary.map((item, idx) => (
                  <li key={item} className="mono flex items-start gap-3 text-xs leading-relaxed">
                    <span className="rounded border border-[var(--line-strong)] px-1.5 py-0.5 text-[10px] font-bold">
                      L{idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {lab.topologyImage && (
              <figure className="overflow-hidden rounded-xl border border-[var(--line-strong)]">
                <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--panel)] px-4 py-2.5">
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.16em]">
                    Screenshot Packet Tracer 9.0 — Hasil Build Lab
                  </p>
                  <span className="mono text-[10px] uppercase opacity-65">captured live</span>
                </div>
                <a href={lab.topologyImage} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={lab.topologyImage}
                    alt={`Screenshot Packet Tracer untuk ${lab.title}`}
                    loading="lazy"
                    className="w-full bg-[var(--surface-2)]"
                  />
                </a>
                <figcaption className="mono border-t border-[var(--line)] px-4 py-2 text-[10px] uppercase opacity-70">
                  Klik gambar untuk membuka ukuran penuh — topologi diambil langsung dari file .pkt di atas
                </figcaption>
              </figure>
            )}

            {lab.vlanTable && (
              <div className="overflow-hidden rounded-xl border border-[var(--line)]">
                <div className="border-b border-[var(--line)] bg-[var(--panel)] px-4 py-2.5">
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.16em]">
                    VLAN, Subnetting &amp; Access Control Policy Table
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[var(--line)] mono text-[10px] uppercase opacity-70">
                        <th className="px-4 py-2.5">VLAN</th>
                        <th className="px-4 py-2.5">Name</th>
                        <th className="px-4 py-2.5">Subnet</th>
                        <th className="px-4 py-2.5">SVI Gateway</th>
                        <th className="px-4 py-2.5">Security / ACL Policy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--line)]">
                      {lab.vlanTable.map((row) => (
                        <tr key={row.vlan}>
                          <td className="px-4 py-2.5 mono font-bold">{row.vlan}</td>
                          <td className="px-4 py-2.5 mono">{row.name}</td>
                          <td className="px-4 py-2.5 mono">{row.subnet}</td>
                          <td className="px-4 py-2.5 mono">{row.gateway}</td>
                          <td className="px-4 py-2.5 text-[var(--muted)]">{row.policy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="inverse mt-5 overflow-hidden rounded-xl border border-[var(--line)] p-4">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-2.5">
              <span className="mono text-xs font-bold">{lab.configTitle}</span>
              <span className="mono text-[10px] uppercase opacity-65">Verified Lab Snippet</span>
            </div>
            <pre className="mono mt-3 overflow-x-auto text-xs leading-relaxed">
              {lab.configSnippet}
            </pre>
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
          <div className="flex flex-wrap gap-1.5">
            {lab.tools.map((t) => (
              <span key={t} className="chip mono text-[9px]">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {lab.downloadPktUrl && (
              <a
                href={lab.downloadPktUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="chip chip-hover min-h-10 px-4"
              >
                <Download size={13} aria-hidden /> Unduh File Packet Tracer (.pkt)
              </a>
            )}
            {lab.downloadConfigUrl && (
              <a
                href={lab.downloadConfigUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="chip chip-hover min-h-10 px-4"
              >
                <Download size={13} aria-hidden /> Unduh Full Config (.txt)
              </a>
            )}
            <a
              href={lab.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-solid min-h-10 px-4"
            >
              <Github size={13} aria-hidden /> Buka Dokumentasi di GitHub <ArrowUpRight size={13} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   SECTION 04: DOKUMENTASI LAPANGAN & SYSADMIN (FIELD & BARE-METAL PROOF)
   ============================================================================ */
type DocItem = {
  id: string;
  code: string;
  layer: string;
  title: string;
  location: string;
  image: string;
  whatIsDone: string;
  competencies: string[];
};

const fieldDocs: DocItem[] = [
  {
    id: 'panel-termination',
    code: 'DOC-01',
    layer: 'Layer 1 · Physical & Panel Integration (Standar K3 Listrik/Jaringan)',
    title: 'Terminasi Kabel UTP Outdoor pada Jalur Panel Distribusi',
    location: 'Instalasi Lapangan · Infrastruktur CCTV & Jaringan',
    image: './Dokumentasi/terminasi-panel-jaringan.jpeg',
    whatIsDone:
      'Mengupas jaket pelindung dan memilah pasangan kabel UTP outdoor (twisted pair) untuk diterminasi pada jalur distribusi di samping panel kontrol daya (CHNT 19.5 kVA), merapikan gulungan kabel cadangan (service loop) di dalam konduit pelindung, serta menerapkan prosedur K3 pemisahan jalur tegangan tinggi dan kabel data.',
    competencies: ['UTP Outdoor Termination', 'Panel & Conduit Routing', 'K3 Electrical Separation', 'CCTV & AP Deployment']
  },
  {
    id: 'hardware-troubleshooting',
    code: 'DOC-02',
    layer: 'Bare-Metal · Workstation & Server Node Recovery',
    title: 'Perakitan, Audit Komponen & Troubleshooting Perangkat Keras',
    location: 'Workshop Teknis · CV. Asterix Computer',
    image: './Dokumentasi/perakitan-troubleshooting-pc.jpeg',
    whatIsDone:
      'Melakukan pemeriksaan fisik menyeluruh pada sasis sistem, menata jalur distribusi daya dari Power Supply Unit (PSU 500W), memastikan dudukan pendingin prosesor Intel optimal, serta memasang konektor data SATA dan power ke media penyimpanan SSD/HDD.',
    competencies: ['Bare-Metal Diagnostics', 'PSU & SATA Storage Wiring', 'Preventive Maintenance', 'MTTR Reduction']
  },
  {
    id: 'backbone-cabling',
    code: 'DOC-03',
    layer: 'Backbone · Outdoor Structured Cabling & K3 Ketinggian',
    title: 'Penarikan Jalur Kabel Backbone & Distribusi Jaringan Antar-Titik',
    location: 'Penugasan Lapangan · Ekspansi Jaringan Gedung',
    image: './Dokumentasi/penarikan-kabel-backbone.jpeg',
    whatIsDone:
      'Menarik, merentangkan, dan mengikat jalur kabel distribusi utama di sepanjang struktur rangka atap bangunan untuk menghubungkan titik pusat jaringan (switch/router) ke titik perangkat akhir di area yang berjauhan dengan memperhatikan keselamatan kerja.',
    competencies: ['Backbone Cable Pulling', 'Overhead Strain Relief', 'Physical Topology Execution', 'K3 Field Safety']
  },
  {
    id: 'lan-crimping-support',
    code: 'DOC-04',
    layer: 'Operations · L1/L2 Support & Cable Verification',
    title: 'Pembuatan Patch Cord LAN, Uji Kontinuitas & Dukungan Pengguna',
    location: 'Layanan Teknis & Implementasi Klien',
    image: './Dokumentasi/crimping-lan-support.jpeg',
    whatIsDone:
      'Berkoordinasi langsung dengan rekan teknisi dan pengguna di lokasi kerja saat mengukur gulungan kabel UTP, memotong, memasang konektor RJ45 (crimping standar T568B), serta menyiapkan pengujian kontinuitas bersama multitester dan unit desktop.',
    competencies: ['RJ45 T568B Crimping', 'Continuity & Multimeter Check', 'On-Site User Support', 'Team Coordination']
  }
];

const Documentation = ({ onSelectDoc }: { onSelectDoc: (doc: DocItem) => void }) => (
  <section id="dokumentasi" className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
    <SectionHead
      index="03"
      label="Field Operations & K3 TI"
      title={<>Dokumentasi Lapangan<br />&amp; Bare-Metal SysAdmin</>}
      copy="Bukti nyata pengerjaan infrastruktur fisik, perangkat keras, dan jaringan di lapangan dengan penerapan standar K3."
    />

    {/* Ringkasan kesiapan System Administrator untuk HRD */}
    <div className="mb-8 rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] p-5 sm:p-7">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Eyebrow className="opacity-75">Mengapa Saya Cocok sebagai System Administrator &amp; Network Engineer</Eyebrow>
          <h3 className="display mt-2 text-2xl font-extrabold uppercase leading-tight tracking-[-0.025em] sm:text-3xl">
            Menguasai lapisan fisik di lapangan hingga administrasi server Linux &amp; routing logis
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            Banyak kandidat hanya memahami konfigurasi di simulator, atau sebaliknya hanya memahami instalasi kabel tanpa mengerti arsitektur sistem. Kombinasi pengalaman saya sebagai <strong>Network Technician (CV. Asterix Computer)</strong>, kepemilikan sertifikasi resmi <strong>MikroTik MTCNA</strong>, serta penguasaan <strong>Linux Server, Docker, GNS3 (OSPF, VLAN, NAT, Firewall), dan K3 perangkat jaringan</strong> memungkinkan saya menangani infrastruktur dari ujung kabel hingga layanan produksi.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-[var(--line)] pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div className="rounded-xl border border-[var(--line)] p-3.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <Cable size={15} aria-hidden />
              <span>40+ Titik</span>
            </div>
            <p className="mt-1.5 text-xs leading-snug text-[var(--muted)]">
              Instalasi jaringan CCTV di Gren Mitra Bangunan &amp; 50% jaringan WiFi korporat di CV. Jaya Coconut Indonesia.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--line)] p-3.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={15} aria-hidden />
              <span>MTCNA &amp; Linux</span>
            </div>
            <p className="mt-1.5 text-xs leading-snug text-[var(--muted)]">
              Tersertifikasi resmi MikroTik dengan kemampuan administrasi server Linux, kontainer Docker, dan keamanan firewall.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--line)] p-3.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <Wrench size={15} aria-hidden />
              <span>Bare-Metal &amp; K3</span>
            </div>
            <p className="mt-1.5 text-xs leading-snug text-[var(--muted)]">
              Mandiri dalam perakitan PC/server, audit PSU &amp; storage, serta penerapan K3 perangkat jaringan untuk menekan downtime.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--line)] p-3.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <Server size={15} aria-hidden />
              <span>End-to-End</span>
            </div>
            <p className="mt-1.5 text-xs leading-snug text-[var(--muted)]">
              Terbukti mengelola server &amp; deployment web produksi (100% live) sekaligus menjaga stabilitas koneksi fisik.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* 4 Kartu Dokumentasi Lapangan */}
    <div className="grid gap-5 lg:grid-cols-2">
      {fieldDocs.map((doc, idx) => (
        <motion.article
          key={doc.id}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
          className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)]"
        >
          <button
            type="button"
            onClick={() => onSelectDoc(doc)}
            aria-label={`Perbesar foto dokumentasi: ${doc.title}`}
            className="relative aspect-[16/11] w-full cursor-pointer overflow-hidden border-b border-[var(--line)] bg-black text-left"
          >
            <img
              src={doc.image}
              alt={doc.title}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 bg-gradient-to-b from-black/80 via-black/35 to-transparent p-3.5 text-white">
              <span className="rounded-full bg-black/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]">
                {doc.code} · {doc.layer}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-black/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]">
                Perbesar <ArrowUpRight size={12} aria-hidden />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pb-3 pt-8 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] opacity-90">
                {doc.location}
              </p>
            </div>
          </button>

          <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6">
            <div className="space-y-4">
              <h3 className="display text-xl font-extrabold uppercase leading-[1.05] tracking-[-0.025em] sm:text-2xl">
                {doc.title}
              </h3>

              <div className="rounded-xl border border-[var(--line)] p-3.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-65">
                  Apa yang Dilakukan pada Foto
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                  {doc.whatIsDone}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
              <div className="flex flex-wrap gap-1.5">
                {doc.competencies.map((comp) => (
                  <span key={comp} className="chip">
                    {comp}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onSelectDoc(doc)}
                className="chip chip-solid min-h-11 cursor-pointer px-4"
              >
                Lihat Foto Penuh <ArrowUpRight size={13} aria-hidden />
              </button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

const DocumentationModal = ({
  doc,
  onClose
}: {
  doc: DocItem | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (!doc) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [doc, onClose]);

  if (!doc) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="doc-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[90dvh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[var(--line-strong)] bg-[var(--bg)] p-4 text-[var(--fg)] shadow-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-4">
          <div>
            <Eyebrow className="opacity-70">{doc.code} · {doc.layer}</Eyebrow>
            <h3 id="doc-modal-title" className="display mt-1 text-xl font-extrabold uppercase tracking-[-0.02em] sm:text-2xl">
              {doc.title}
            </h3>
            <p className="mt-1 text-xs text-[var(--muted)]">{doc.location}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pratinjau dokumentasi (Escape)"
            className="inline-flex h-11 min-w-11 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[var(--line-strong)] px-3 text-xs font-bold uppercase"
          >
            <X size={16} aria-hidden /> Tutup
          </button>
        </div>

        <div className="my-5 overflow-hidden rounded-xl border border-[var(--line)] bg-black">
          <img
            src={doc.image}
            alt={doc.title}
            className="max-h-[65dvh] w-full object-contain"
          />
        </div>

        <div className="rounded-xl border border-[var(--line)] p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-70">
            Apa yang Dilakukan pada Foto
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{doc.whatIsDone}</p>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   SECTION 04: CERTIFICATIONS & AWARDS
   ============================================================================ */
type Achievement = {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  desc: string;
  image: string;
  /** Original document, when a downloadable/scannable copy exists. */
  file?: string;
  primary: boolean;
};

const verifiedAchievements: Achievement[] = [
  {
    title: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTik Official Certification',
    date: 'April 2024',
    badge: 'VERIFIED CREDENTIAL · ROUTEROS',
    desc: 'Sertifikasi kompetensi resmi internasional mencakup Routing, Bridging, Firewall/NAT, QoS Queue Tree, Wireless, dan Tunneling pada MikroTik RouterOS.',
    image: './Achievment/1743133379367.jpg',
    primary: true
  },
  {
    title: 'Getting Started with DevOps on AWS',
    issuer: 'AWS Training & Certification',
    date: 'Oktober 2026',
    badge: 'AWS TRAINING COMPLETION',
    desc: 'Kursus digital resmi AWS Skill Builder: budaya dan praktik DevOps di cloud, mulai dari otomasi alur CI/CD, infrastruktur sebagai kode (IaC), sampai pemantauan layanan — memakai AWS CodeBuild, CodeDeploy, dan CodePipeline.',
    image: './Achievment/aws-devops-cert.jpg',
    file: './Achievment/aws-devops-cert.pdf',
    primary: false
  },
  {
    title: 'Configure and Deploy AWS Client VPN',
    issuer: 'AWS Training & Certification',
    date: 'Oktober 2026',
    badge: 'AWS TRAINING COMPLETION',
    desc: 'Kursus digital resmi AWS Skill Builder: membangun akses jarak jauh ke resource AWS maupun jaringan on-premises memakai AWS Client VPN — mulai dari pembuatan endpoint, asosiasi target network VPC, autentikasi berbasis sertifikat, sampai aturan otorisasi per pengguna.',
    image: './Achievment/aws-client-vpn-cert.jpg',
    file: './Achievment/aws-client-vpn-cert.pdf',
    primary: false
  },
  {
    title: 'Implementasi Keamanan Siber bagi BUMN di AWS',
    issuer: 'AWS Training & Certification',
    date: 'Oktober 2026',
    badge: 'AWS TRAINING COMPLETION',
    desc: 'Kursus digital resmi AWS Skill Builder (Bahasa Indonesia) yang membahas penerapan keamanan siber di cloud untuk lingkungan badan usaha milik negara: model tanggung jawab bersama AWS, pengelolaan identitas dan hak akses, serta pemantauan dan kepatuhan layanan.',
    image: './Achievment/aws-cybersecurity-cert.jpg',
    file: './Achievment/aws-cybersecurity-cert.pdf',
    primary: false
  },
  {
    title: 'Belajar Dasar Artificial Intelligence',
    issuer: 'Dicoding Academy',
    date: 'September 2025',
    badge: 'VERIFIED CERTIFICATE',
    desc: 'Fondasi pemrosesan data dan otomasi cerdas untuk mendukung analitik sistem.',
    image: './Achievment/1759060763412.jpg',
    primary: false
  },
  {
    title: 'Wakil Koordinator Desain Grafis 2',
    issuer: 'Polinema Mengajar',
    date: 'Desember 2025',
    badge: 'LEADERSHIP & ORG',
    desc: 'Kepemimpinan tim dan koordinasi operasional organisasi tingkat kampus.',
    image: './Achievment/1768038217665.jpg',
    primary: false
  },
  {
    title: 'Juara 3 Poster Competition Open Air',
    issuer: 'UKM Radio Kampus Politeknik FM',
    date: 'Oktober 2025',
    badge: 'COMPETITION AWARD',
    desc: 'Penghargaan komunikasi visual dan penyampaian informasi terstruktur.',
    image: './Achievment/1768038591677.jpg',
    primary: false
  }
];

const Achievements = () => (
  <section id="awards" className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
    <SectionHead
      index="04"
      label="Certifications & Awards"
      title={<>Sertifikat &amp;<br />Penghargaan</>}
      copy="Sertifikasi resmi jaringan (MikroTik MTCNA), pelatihan cloud AWS, serta pencapaian akademik dan organisasi."
    />

    <div className="grid gap-4 min-[520px]:grid-cols-2 lg:grid-cols-4">
      {verifiedAchievements.map((achieve, i) => (
        <motion.article
          key={achieve.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className={`card-invert group flex flex-col overflow-hidden rounded-2xl border ${
            achieve.primary ? 'border-[var(--line-strong)] bg-[var(--panel)]' : 'border-[var(--line)]'
          }`}
        >
          <div className="relative m-2.5 overflow-hidden rounded-xl bg-[var(--panel)]">
            <img
              src={achieve.image}
              alt={achieve.title}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/80 px-2.5 py-1 mono text-[9px] font-bold uppercase tracking-[0.1em] text-white">
              <CheckCircle2 size={11} aria-hidden /> {achieve.badge}
            </span>
            <span className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
              <Trophy size={11} aria-hidden /> {achieve.date}
            </span>
          </div>

          <div className="flex flex-1 flex-col justify-between p-4 pt-1.5">
            <div>
              <h3 className="display text-base font-extrabold uppercase leading-[1.1] tracking-[-0.015em]">
                {achieve.title}
              </h3>
              <p className="card-muted mt-2 text-xs leading-relaxed text-[var(--muted)]">
                {achieve.desc}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-3">
              <span className="card-muted mono text-[10px] text-[var(--muted)]">{achieve.issuer}</span>
              <a
                href={achieve.file ?? achieve.image}
                target="_blank"
                rel="noopener noreferrer"
                className="chip card-soft min-h-8 px-2.5 text-[9px]"
              >
                Verify <ArrowUpRight size={11} aria-hidden />
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

/* ============================================================================
   SECTION 06: EXPERIENCE & LEADERSHIP
   ============================================================================ */
const experiences = [
  {
    year: '2023 - 2024',
    role: 'Network Administrator, Hardware Technician & Data Operations',
    badge: 'Hands-On Infrastructure Experience',
    items: [
      'Network Administrator & Technician · CV. Asterix Computer (Instalasi 40+ titik CCTV Gren Mitra Bangunan, ekspansi 50% WiFi CV. Jaya Coconut Indonesia, perakitan & troubleshooting bare-metal)',
      'Data Entry & System Verification Staff · Perum BULOG Indonesia (Akurasi data operasional & pelaporan terstruktur)'
    ]
  },
  {
    year: '2025 - 2026',
    role: 'IT Project Management & Organizational Leadership',
    badge: 'Leadership & Deployment',
    items: [
      'Project Manager · Infrastruktur & Portal Web Lab Software Engineering (Polinema JTI)',
      'Wakil Ketua Umum · Polinema Mengajar (Koordinasi lintas divisi & manajemen operasional)',
      'System Builder · Toko Bangunan Cahaya Baru Website',
      'Volunteer Photographer · Tlatah Lereng Gunung Arjuno'
    ]
  },
  {
    year: '2024 - 2025',
    role: 'Visual Communication & Documentation Lead',
    items: [
      'Wakil Koordinator Design Graphic · Polinema Mengajar',
      'Official Photographer · Banyuwangi Ethno Carnival'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
    <SectionHead
      index="05"
      label="Experience"
      title={<>Pengalaman Teknis<br />&amp; Kepemimpinan</>}
      copy="Rekam jejak sebagai teknisi jaringan di industri, manajer proyek teknologi, dan pimpinan organisasi."
    />

    <div className="border-t border-[var(--line)]">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.year}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className="grid gap-5 border-b border-[var(--line)] py-7 md:grid-cols-[240px_1fr] md:gap-10 md:py-9"
        >
          <div className="flex flex-col gap-2">
            <span className="display text-lg font-extrabold tracking-[-0.02em] md:text-2xl">
              {exp.year}
            </span>
            {exp.badge && (
              <span className="chip w-fit px-2.5 py-1 text-[9px]">{exp.badge}</span>
            )}
          </div>

          <div>
            <h3 className="display text-xl font-extrabold uppercase leading-tight tracking-[-0.02em] md:text-2xl">
              {exp.role}
            </h3>
            <ul className="mt-4 grid gap-2.5">
              {exp.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--muted)]">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg)] opacity-60" />
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

/* ============================================================================
   SECTION 06: GITHUB ACTIVITY
   ============================================================================ */
const GithubActivity = ({ night }: { night: boolean }) => (
  <section id="activity" className="inverse border-y border-[var(--line)] py-16 md:py-24">
    <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8">
      <div className="mb-10 flex flex-col gap-5 border-t border-[var(--line-strong)] pt-5 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow className="opacity-60">(06) · Infrastructure as Code &amp; Documentation</Eyebrow>
          <h2 className="display mt-3 max-w-3xl text-[clamp(1.8rem,4.8vw,3.3rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.035em]">
            Infrastructure as Code (IaC), Bash Scripts &amp; Network Documentation Activity
          </h2>
        </div>
        <a
          href="https://github.com/rizalrfli"
          target="_blank"
          rel="noopener noreferrer"
          className="chip chip-hover min-h-11 w-fit px-4"
        >
          <Github size={13} aria-hidden /> github.com/rizalrfli <ArrowUpRight size={13} aria-hidden />
        </a>
      </div>

      {/* GitHub Contribution Calendar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-[var(--line)] p-4 md:p-6"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <span className="mono text-[11px] font-semibold uppercase tracking-[0.14em] opacity-75">
            GIT COMMIT TELEMETRY // SCRIPTS, CONFIGS &amp; LAB DOCUMENTATION
          </span>
          <span className="mono text-[10px] opacity-60">@rizalrfli</span>
        </div>
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
          <Github size={14} aria-hidden /> Lihat Aktivitas &amp; Script di GitHub
          <ArrowUpRight size={14} aria-hidden />
        </a>
      </motion.div>
    </div>
  </section>
);

const CvSection = () => (
  <section id="cv" className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
    <div className="inverse overflow-hidden rounded-3xl border border-[var(--line)]">
      <div className="grid min-w-0 gap-6 p-4 sm:gap-8 sm:p-6 md:grid-cols-[1fr_1.1fr] md:p-10">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <Eyebrow className="opacity-60">(07) · Curriculum Vitae (SysAdmin &amp; Network)</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.2rem,6vw,4.2rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.045em]">
              Ringkasan<br />Kualifikasi
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              Dokumen CV lengkap yang memuat riwayat pendidikan Teknik Informatika Polinema, sertifikasi MikroTik MTCNA, pengalaman teknisi jaringan, dan daftar keahlian infrastruktur.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={CV_URL}
              download="CV_Afrizal_Rafli.pdf"
              className="chip chip-solid min-h-12 justify-center px-5"
            >
              <Download size={14} aria-hidden /> Unduh CV (PDF)
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-hover min-h-12 justify-center px-5"
            >
              <ArrowUpRight size={14} aria-hidden /> Buka di Tab Baru
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)]">
          <div className="flex min-h-48 flex-col items-start justify-center gap-3 p-5 sm:min-h-56 md:hidden">
            <p className="text-sm leading-relaxed text-[var(--muted)]">Preview CV lebih nyaman dibuka dalam tab baru di layar perangkat mobile.</p>
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="chip chip-hover min-h-11 px-4">
              <ArrowUpRight size={14} aria-hidden /> Buka Preview CV
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
      <Eyebrow className="opacity-60">(08) · Contact &amp; Internship Inquiry</Eyebrow>

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
        <div>
          <a
            href="mailto:afrizalrafli27@gmail.com"
            className="display break-all text-base font-extrabold uppercase tracking-[-0.02em] underline decoration-[1.5px] underline-offset-[6px] sm:break-normal sm:text-2xl"
          >
            afrizalrafli27@gmail.com
          </a>
          <p className="mono mt-2 text-xs text-[var(--muted)]">
            Siap untuk wawancara teknis, uji praktik konfigurasi jaringan/Linux, &amp; magang System Administrator / Network Engineer.
          </p>
        </div>

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
        <span>&copy; 2026 Afrizal Rafli Kusuma Wardana · System Administrator &amp; Network Engineer</span>
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
  const [selectedDoc, setSelectedDoc] = useState<DocItem | null>(null);
  const [selectedLab, setSelectedLab] = useState<{ lab: LabProject; tab: 'topology' | 'config' } | null>(null);
  const [night, setNight] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = window.localStorage.getItem('room');
    return saved ? saved === 'night' : true;
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
              <span className="mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                INITIATING SYSADMIN NODE...
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
        <Projects onSelectLab={(lab, tab) => setSelectedLab({ lab, tab })} />
        <Documentation onSelectDoc={(doc) => setSelectedDoc(doc)} />
        <Achievements />
        <Experience />
        <GithubActivity night={night} />
        <CvSection />
        <Contact />
      </main>
      <DocumentationModal doc={selectedDoc} onClose={() => setSelectedDoc(null)} />
      <LabModal labState={selectedLab} onClose={() => setSelectedLab(null)} />
    </div>
  );
}
