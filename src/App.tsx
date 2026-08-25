import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assets/logo.png';

/* ─── Design Tokens (Black & Dark Orange Theme) ─── */
const ACCENT = '#FF5500';
const ACCENT_HOVER = '#FF6B1A';
const ACCENT_BORDER = '#E64A00';
const BG = '#0B0B0D';
const CARD_BG = '#131317';
const CARD_BORDER = '#22222A';
const HEADING = '#FFFFFF';
const LINK = '#D1D5DB';
const GRAY = '#9CA3AF';

const F = "'Plus Jakarta Sans', 'Outfit', 'Inter', sans-serif";

const HERO_VID =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_050407_500d0339-ab28-41c1-9688-132a74a3b5aa.mp4';
const ABOUT_VID =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_063501_2e2c8971-de1e-473a-8611-a0c9ae7ee186.mp4';

const CHAMFER =
  'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))';
const CHAMFER_SM =
  'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))';

const NAV = ['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'PROCESS', 'REVIEWS', 'FAQ', 'CONTACT'];

const hBase: React.CSSProperties = {
  fontFamily: F,
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '-0.01em',
  lineHeight: 0.98,
  color: HEADING,
  margin: 0,
};

/* ─── Autoplay ─── */
function useAutoplay(ref: React.RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const go = () => { v.muted = true; v.play().catch(() => {}); };
    go();
    const iv = setInterval(go, 1000);
    const tap = () => { go(); document.removeEventListener('click', tap); document.removeEventListener('touchstart', tap); };
    document.addEventListener('click', tap);
    document.addEventListener('touchstart', tap);
    return () => { clearInterval(iv); document.removeEventListener('click', tap); document.removeEventListener('touchstart', tap); };
  }, [ref]);
}

/* ─── CTA Button Component ─── */
function CTA({ children, style, onClick }: { children: React.ReactNode; style?: React.CSSProperties; onClick?: () => void }) {
  const [h, setH] = useState(false);
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      style={{
        fontFamily: F,
        background: h ? ACCENT_HOVER : ACCENT,
        border: `1px solid ${ACCENT_BORDER}`,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontWeight: 800,
        letterSpacing: '0.12em',
        padding: '16px 32px',
        fontSize: 'clamp(12px,2vw,15px)',
        clipPath: CHAMFER,
        boxShadow: h
          ? '0 0 0 2px rgba(255,85,0,0.5), 0 14px 36px -10px rgba(255,85,0,0.8)'
          : '0 0 0 1px rgba(255,85,0,0.35), 0 10px 30px -12px rgba(255,85,0,0.6)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        transition: 'all 0.25s ease',
        ...style,
      }}
    >
      {children}
      <motion.span
        animate={{ x: h ? 4 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ display: 'inline-block', width: 22, height: 2, background: '#FFFFFF' }}
      />
    </motion.button>
  );
}

/* ─── Section Heading ─── */
function SH({ top, bottom, indent = 'min(160px,18vw)', size = 'clamp(34px,6.5vw,72px)' }: { top: string; bottom: string; indent?: string; size?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ ...hBase, fontSize: size }}
    >
      <span style={{ display: 'block' }}>{top}</span>
      <span style={{ display: 'block', paddingLeft: indent, color: ACCENT }}>{bottom}</span>
    </motion.h2>
  );
}

/* ─── Logo ─── */
function Logo() {
  return (
    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
      <motion.img
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.2 }}
        src={logo}
        alt="PilotNemo"
        style={{
          height: 'clamp(64px, 10vw, 88px)',
          width: 'auto',
        }}
      />
    </a>
  );
}

/* ─── Mail Icon ─── */
function MailSvg() {
  return (
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="0.7" y="0.7" width="15.6" height="11.6" rx="2" />
      <polyline points="0.7,0.7 8.5,7 16.3,0.7" />
    </svg>
  );
}

/* ─── Services Data ─── */
const SERVICES = [
  { num: '01', title: 'DIGITAL MARKETING & LEAD GENERATION', desc: 'High-intent SEO, performance PPC campaigns, and conversion-optimized funnels that generate qualified leads and measurable ROI.' },
  { num: '02', title: 'FULL-STACK WEB DEVELOPMENT', desc: 'Custom React, TypeScript & Node.js web applications built for speed, security, and enterprise-scale traffic.' },
  { num: '03', title: 'MOBILE APP DEVELOPMENT', desc: 'Flutter & React Native mobile apps for iOS & Android — crafted for smooth UX, performance, and App Store success.' },
  { num: '04', title: 'BRAND IDENTITY & VISUAL DESIGN', desc: 'Premium brand systems — logos, typography, color palette, and style guides that command immediate trust.' },
  { num: '05', title: 'UI/UX DESIGN & PROTOTYPING', desc: 'User research, wireframes, Figma prototypes, and A/B-tested design systems that boost engagement and reduce churn.' },
  { num: '06', title: 'CUSTOM SOFTWARE & AUTOMATION', desc: 'Custom CRM, ERP, and business automation platforms engineered to replace fragmented tools with one powerful system.' },
];

/* ─── Projects Data ─── */
const PROJECTS = [
  { title: 'RETAIL E-COMMERCE PLATFORM', desc: 'End-to-end custom React e-commerce with CMS, payments, and analytics — achieving 3× revenue growth in 6 months.', tags: ['React', 'Node.js', 'Stripe'], cat: 'WEB DEVELOPMENT' },
  { title: 'ENTERPRISE ERP DASHBOARD', desc: 'Custom internal operations platform integrating inventory, HR, and finance workflows with real-time dashboards.', tags: ['TypeScript', 'PostgreSQL', 'AWS'], cat: 'SOFTWARE ENGINEERING' },
  { title: 'HEALTHTECH PATIENT APP', desc: 'Flutter-built cross-platform app enabling patients to book, track, and consult with healthcare providers in real time.', tags: ['Flutter', 'Firebase', 'Healthcare'], cat: 'MOBILE APP' },
];

/* ─── Team Data ─── */
const TEAM = [
  { name: 'PRIYA ANAND', role: 'Founder & CEO', desc: 'Digital strategist with 12+ years driving enterprise transformation across B2B SaaS, retail, and healthcare.' },
  { name: 'RAJESH KUMAR', role: 'Lead Software Architect', desc: 'Full-stack expert in React, Node.js, and cloud systems delivering scalable, 99.9% uptime solutions.' },
  { name: 'SNEHA NAIR', role: 'Head of UI/UX Design', desc: 'Product designer creating research-backed, conversion-first digital experiences loved by millions.' },
  { name: 'ARJUN MEHTA', role: 'Growth & Performance Lead', desc: 'Performance marketing specialist managing multi-million dollar ad budgets with consistently measurable ROI.' },
];

/* ─── Proven 4-Step Process Data ─── */
const PROCESS_STEPS = [
  { num: '01', title: 'DISCOVERY & ARCHITECTURE AUDIT', desc: 'We analyze your business goals, tech stack, and market bottlenecks to build a risk-free engineering blueprint.' },
  { num: '02', title: 'AGILE SPRINT ENGINEERING', desc: '2-week milestone sprints with bi-weekly live demos, transparent Git commits, and zero secret code black-boxes.' },
  { num: '03', title: 'QA HARDENING & SECURITY AUDIT', desc: 'Automated penetration testing, performance optimization, and load testing to guarantee 99.9% uptime.' },
  { num: '04', title: 'DEPLOYMENT & 24/7 MANAGED SLA', desc: 'Zero-downtime production deployment accompanied by ongoing 24/7 monitoring, security patches, and SLAs.' },
];

/* ─── Testimonials Data ─── */
const TESTIMONIALS = [
  {
    quote: "PilotNemo transformed our fragmented web stack into a high-converting digital engine. Revenue grew by 312% in just 6 months.",
    author: "Vikram Malhotra",
    title: "CTO, FinEdge Global",
    impact: "+312% Revenue Impact",
    rating: 5,
  },
  {
    quote: "The quality of their engineering and strict adherence to sprint deadlines is second to none. 100% recommended for enterprise builds.",
    author: "Ananya Deshmukh",
    title: "Head of Product, HealthPulse",
    impact: "99.99% Uptime Guaranteed",
    rating: 5,
  },
  {
    quote: "From initial architecture audit to launch, PilotNemo delivered zero-downtime results. Full IP ownership and seamless communication.",
    author: "David Stern",
    title: "Founder & CEO, NexaLabs",
    impact: "Zero Downtime Release",
    rating: 5,
  },
];

/* ─── Risk Reduction FAQs ─── */
const FAQS = [
  {
    q: "How do you guarantee 100% IP ownership and code security?",
    a: "From Day 1, all intellectual property, source code, and assets belong exclusively to your company. We sign strict enterprise NDAs before any initial consultation."
  },
  {
    q: "What is your project delivery timeframe and methodology?",
    a: "We operate on structured 2-week Agile sprints. You receive live working demos every two weeks and full access to our project management dashboards."
  },
  {
    q: "How do you handle scope changes or ongoing scaling?",
    a: "Our flexible sprint structure easily accommodates evolving business requirements without delaying target release dates."
  },
  {
    q: "Do you provide post-launch maintenance & 24/7 SLAs?",
    a: "Yes! We provide dedicated managed SLAs, 24/7 server monitoring, security patching, and ongoing performance optimization."
  },
];

/* ═════════════ MAIN COMPONENT ═════════════ */
export default function App() {
  const [mob, setMob] = useState(window.innerWidth <= 700);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const heroV = useRef<HTMLVideoElement>(null);
  const aboutV = useRef<HTMLVideoElement>(null);
  useAutoplay(heroV);
  useAutoplay(aboutV);

  const onR = useCallback(() => setMob(window.innerWidth <= 700), []);
  useEffect(() => { window.addEventListener('resize', onR); return () => window.removeEventListener('resize', onR); }, [onR]);

  const pad = 'clamp(20px,9vw,118px)';
  const indent = 'min(238px,28vw)';

  const cardStyle: React.CSSProperties = {
    fontFamily: F,
    background: CARD_BG,
    border: `1px solid ${CARD_BORDER}`,
    padding: '28px 32px',
    transition: 'all 0.3s ease',
    cursor: 'default',
  };
  const cardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = ACCENT;
    e.currentTarget.style.boxShadow = `0 10px 35px -10px rgba(255,85,0,0.35)`;
  };
  const cardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = CARD_BORDER;
    e.currentTarget.style.boxShadow = 'none';
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: F,
    width: '100%',
    padding: '14px 18px',
    fontSize: 14,
    border: '1px solid #2A2A33',
    background: '#18181F',
    color: '#FFFFFF',
    outline: 'none',
    transition: 'border 0.2s',
  };

  const heroLines = [
    { text: 'BUSINESS', indent: false },
    { text: 'INNOVATION', indent: false },
    { text: 'WITH DIGITAL', indent: false },
    { text: 'GROWTH &', indent: true },
    { text: 'IT SERVICES', indent: true },
    { text: 'EXPERTISE', indent: true, highlight: true },
  ];

  return (
    <div style={{ fontFamily: F, margin: 0, background: BG, color: '#FFFFFF', overflowX: 'hidden' }}>

      {/* ════════════ HERO ════════════ */}
      <motion.section
        id="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ minHeight: '100svh', background: BG, overflow: 'hidden', position: 'relative' }}
      >
        <video ref={heroV} autoPlay muted loop playsInline preload="auto" src={HERO_VID}
          style={{
            position: 'absolute', pointerEvents: 'none', objectFit: 'contain', height: 'auto',
            ...(mob ? { top: 0, left: '-12%', width: '119%' } : { top: 0, right: '-20%', width: '99%' }),
          }}
        />
        {!mob && (
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '70%', height: '100%',
            background: `linear-gradient(90deg,${BG} 0%,${BG} 55%,rgba(11,11,13,0.85) 78%,rgba(11,11,13,0) 100%)`,
            pointerEvents: 'none', zIndex: 1,
          }} />
        )}

        {/* Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', gap: 'clamp(20px,5vw,56px)',
            padding: `clamp(20px,3vw,38px) clamp(20px,4vw,48px) 0`,
          }}
        >
          <Logo />
          {!mob ? (
            <>
              <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                {NAV.map(l => (
                  <a key={l} href={`#${l.toLowerCase().replace(/ /g, '')}`}
                    style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(11px,2.2vw,13px)', letterSpacing: '0.08em', color: LINK, textDecoration: 'none', whiteSpace: 'nowrap', textTransform: 'uppercase', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
                    onMouseLeave={e => (e.currentTarget.style.color = LINK)}
                  >{l}</a>
                ))}
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <a href="#contact" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      fontFamily: F, background: 'transparent', border: `1px solid ${CARD_BORDER}`, color: '#FFFFFF',
                      textTransform: 'uppercase', letterSpacing: '0.14em', padding: '14px 26px',
                      fontWeight: 700, fontSize: 'clamp(12px,2.4vw,14px)', clipPath: CHAMFER_SM,
                      cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = ACCENT;
                      e.currentTarget.style.borderColor = ACCENT;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = CARD_BORDER;
                    }}
                  ><MailSvg /> Contact us</motion.button>
                </a>
              </div>
            </>
          ) : (
            <button onClick={() => setMenu(p => !p)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 8 }}>
              {[0, 1, 2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 2, background: '#FFFFFF', borderRadius: 1 }} />)}
            </button>
          )}
        </motion.nav>

        <AnimatePresence>
          {mob && menu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: 18, padding: '20px clamp(20px,4vw,48px)', background: CARD_BG, borderBottom: `1px solid ${CARD_BORDER}` }}
            >
              {NAV.map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(/ /g, '')}`} onClick={() => setMenu(false)}
                  style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#FFFFFF', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                >{l}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Headline with Staircase Entrance Animation */}
        <h1 style={{
          ...hBase, position: 'relative', zIndex: 2,
          fontSize: mob ? 'clamp(34px,10vw,56px)' : 'min(clamp(34px,7.6vw,80px),9.2vh)',
          padding: mob ? '0 20px 28px 20px' : `min(clamp(40px,9vw,120px),9vh) 20px min(clamp(24px,4vw,44px),5vh) ${pad}`,
          marginTop: mob ? 360 : 0,
        }}>
          {heroLines.map((line, idx) => (
            <motion.span
              key={line.text}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'block',
                paddingLeft: line.indent ? indent : 0,
                color: line.highlight ? ACCENT : HEADING,
              }}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative', zIndex: 2,
            paddingLeft: mob ? '20px' : `calc(${pad} + ${indent})`,
            paddingBottom: mob ? '40px' : 'min(clamp(36px,6vw,80px),7vh)',
          }}
        >
          <CTA>GET STARTED</CTA>
        </motion.div>
      </motion.section>

      {/* ════════════ TRUST BADGES & GUARANTEES BAR ════════════ */}
      <section style={{
        background: '#0F0F12',
        borderTop: `1px solid ${CARD_BORDER}`,
        borderBottom: `1px solid ${CARD_BORDER}`,
        padding: '24px clamp(20px,5vw,48px)',
        position: 'relative',
        zIndex: 5,
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          {/* Trust Ratings */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#FFB800', fontWeight: 800 }}>★★★★★</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#FFF' }}>Clutch 4.9/5 Rating</span>
            </div>
            <div style={{ width: 1, height: 16, background: CARD_BORDER }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#FFB800', fontWeight: 800 }}>★★★★★</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#FFF' }}>Google Reviews 5.0/5</span>
            </div>
          </div>

          {/* Guarantees Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            {[
              { icon: '🛡️', text: '100% IP & Code Ownership' },
              { icon: '🔒', text: 'Strict NDA Protected' },
              { icon: '⚡', text: '99.99% Uptime Guarantee' },
              { icon: '📞', text: '24/7 Managed Support SLA' },
            ].map((b, i) => (
              <span key={i} style={{
                fontSize: 12, fontWeight: 700, color: GRAY, background: 'rgba(255,85,0,0.06)',
                border: '1px solid rgba(255,85,0,0.2)', padding: '6px 14px', borderRadius: 4,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <span>{b.icon}</span> {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ ABOUT ════════════ */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        style={{
          background: `linear-gradient(180deg,${BG} 0%,#111115 100%)`,
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 40,
          padding: `clamp(60px,10vw,140px) 0 clamp(30px,5vw,70px) ${pad}`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ flex: '1 1 420px', minWidth: 300 }}
        >
          <SH top="ABOUT" bottom="PILOTNEMO" />
          <p style={{
            fontFamily: F, maxWidth: 520, margin: '32px 0 0 min(160px,18vw)',
            fontSize: 'clamp(14px,1.6vw,17px)', lineHeight: 1.7, color: GRAY,
          }}>
            PilotNemo is a premier digital growth & IT engineering partner. We combine technology, strategy, and design to elevate market leaders. 250+ projects delivered, 99% client satisfaction, 10+ years of industry experience.
          </p>

          {/* Key Trust Stats Grid */}
          <div style={{ margin: '28px 0 0 min(160px,18vw)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { val: '$50M+', label: 'Client Revenue Generated' },
              { val: '250+', label: 'Enterprise Projects' },
              { val: '99.8%', label: 'On-Time Sprint Delivery' },
              { val: '100%', label: 'Code Transferred' },
            ].map((st, i) => (
              <div key={i} style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, padding: '14px 18px', clipPath: CHAMFER_SM }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: ACCENT }}>{st.val}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: GRAY, marginTop: 2 }}>{st.label}</div>
              </div>
            ))}
          </div>

          <div style={{ margin: '36px 0 0 min(160px,18vw)' }}>
            <CTA>DISCOVER MORE</CTA>
          </div>
        </motion.div>

        {/* Video Widget with Smooth Entrance + Zoom + Curvy Borders */}
        <div style={{ flex: '1 1 360px', minWidth: 280, display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 644,
              borderRadius: '28px',
              overflow: 'hidden',
              border: '2px solid rgba(255, 85, 0, 0.4)',
              boxShadow: '0 20px 50px -10px rgba(255, 85, 0, 0.35), 0 10px 30px -5px rgba(0, 0, 0, 0.8)',
            }}
          >
            <video ref={aboutV} autoPlay muted loop playsInline preload="auto" src={ABOUT_VID}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '26px' }}
            />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', background: ACCENT, mixBlendMode: 'hue', pointerEvents: 'none', zIndex: 1, borderRadius: '26px' }} />
          </motion.div>
        </div>
      </motion.section>

      {/* ════════════ SERVICES ════════════ */}
      <motion.section
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: '#111115', padding: `clamp(60px,10vw,140px) ${pad}`,
        }}
      >
        <SH top="OUR" bottom="SERVICES" size="clamp(34px,6.5vw,72px)" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: F, maxWidth: 520, margin: '24px 0 48px min(160px,18vw)', fontSize: 'clamp(14px,1.6vw,17px)', lineHeight: 1.7, color: GRAY }}
        >
          From concept to conversion — a complete suite of digital services to grow, design, and scale your business.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,340px),1fr))', gap: 20 }}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
              onMouseEnter={e => { setActive(i); cardHover(e); }}
              onMouseLeave={cardLeave}
              style={{
                ...cardStyle,
                clipPath: CHAMFER,
                borderColor: active === i ? ACCENT : CARD_BORDER,
                boxShadow: active === i ? '0 10px 35px -10px rgba(255,85,0,0.35)' : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em' }}>{s.num}</span>
              </div>
              <h3 style={{ ...hBase, fontSize: 'clamp(16px,2.5vw,20px)', marginBottom: 12, lineHeight: 1.2, color: '#FFFFFF' }}>{s.title}</h3>
              <p style={{ fontFamily: F, fontSize: 'clamp(13px,1.4vw,15px)', lineHeight: 1.65, color: GRAY, margin: 0 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: 40, marginLeft: 'min(160px,18vw)' }}
        >
          <CTA>VIEW ALL SERVICES</CTA>
        </motion.div>
      </motion.section>

      {/* ════════════ PROVEN 4-STEP PROCESS ════════════ */}
      <motion.section
        id="process"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: BG, padding: `clamp(60px,10vw,140px) ${pad}`,
        }}
      >
        <SH top="OUR PROVEN" bottom="PROCESS" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: F, maxWidth: 520, margin: '24px 0 48px min(160px,18vw)', fontSize: 'clamp(14px,1.6vw,17px)', lineHeight: 1.7, color: GRAY }}
        >
          How we eliminate risk and guarantee on-time engineering delivery for every client.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,260px),1fr))', gap: 20 }}>
          {PROCESS_STEPS.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
              style={{ ...cardStyle, clipPath: CHAMFER }}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <span style={{ fontSize: 24, fontWeight: 800, color: ACCENT, display: 'block', marginBottom: 12 }}>{st.num}</span>
              <h3 style={{ ...hBase, fontSize: 'clamp(15px,2vw,18px)', marginBottom: 10, color: '#FFFFFF' }}>{st.title}</h3>
              <p style={{ fontFamily: F, fontSize: 'clamp(13px,1.4vw,15px)', lineHeight: 1.65, color: GRAY, margin: 0 }}>{st.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ════════════ PROJECTS ════════════ */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: `linear-gradient(180deg,#111115 0%,${BG} 100%)`,
          padding: `clamp(60px,10vw,140px) ${pad}`,
        }}
      >
        <SH top="FEATURED" bottom="PROJECTS" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: F, maxWidth: 520, margin: '24px 0 48px min(160px,18vw)', fontSize: 'clamp(14px,1.6vw,17px)', lineHeight: 1.7, color: GRAY }}
        >
          Real results for real businesses. Explore our recent case studies and success stories.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,320px),1fr))', gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.25 } }}
              style={{ ...cardStyle, clipPath: CHAMFER, padding: 0, overflow: 'hidden' }}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              {/* Color stripe top */}
              <div style={{ height: 6, background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_HOVER})` }} />
              <div style={{ padding: '28px 28px 24px' }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{p.cat}</span>
                <h3 style={{ ...hBase, fontSize: 'clamp(16px,2.5vw,22px)', margin: '12px 0', lineHeight: 1.15, color: '#FFFFFF' }}>{p.title}</h3>
                <p style={{ fontFamily: F, fontSize: 'clamp(13px,1.4vw,15px)', lineHeight: 1.65, color: GRAY, margin: '0 0 20px' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.tags.map(t => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.06 }}
                      style={{
                        fontFamily: F, fontSize: 11, fontWeight: 700, padding: '5px 12px',
                        background: 'rgba(255,85,0,0.1)', color: ACCENT, border: `1px solid rgba(255,85,0,0.25)`,
                        letterSpacing: '0.06em', textTransform: 'uppercase',
                      }}
                    >{t}</motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: 40, marginLeft: 'min(160px,18vw)' }}
        >
          <CTA>VIEW ALL PROJECTS</CTA>
        </motion.div>
      </motion.section>

      {/* ════════════ VERIFIED REVIEWS & TESTIMONIALS ════════════ */}
      <motion.section
        id="reviews"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: '#111115', padding: `clamp(60px,10vw,140px) ${pad}`,
        }}
      >
        <SH top="VERIFIED" bottom="REVIEWS" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: F, maxWidth: 520, margin: '24px 0 48px min(160px,18vw)', fontSize: 'clamp(14px,1.6vw,17px)', lineHeight: 1.7, color: GRAY }}
        >
          What enterprise leaders and CEOs say about working with PilotNemo.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,320px),1fr))', gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{ ...cardStyle, clipPath: CHAMFER, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <div>
                <div style={{ color: '#FFB800', fontSize: 18, marginBottom: 12 }}>★★★★★</div>
                <p style={{ fontFamily: F, fontSize: 'clamp(13px,1.4vw,15px)', lineHeight: 1.7, color: '#E4E4E7', fontStyle: 'italic', margin: '0 0 20px' }}>
                  "{t.quote}"
                </p>
              </div>
              <div style={{ borderTop: `1px solid ${CARD_BORDER}`, paddingTop: 16, marginTop: 'auto' }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#FFFFFF' }}>{t.author}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: GRAY, margin: '2px 0 8px' }}>{t.title}</div>
                <span style={{ fontSize: 11, fontWeight: 800, color: ACCENT, background: 'rgba(255,85,0,0.1)', padding: '4px 10px', borderRadius: 4, display: 'inline-block' }}>
                  {t.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ════════════ TEAM ════════════ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: BG, padding: `clamp(60px,10vw,140px) ${pad}`,
        }}
      >
        <SH top="THE" bottom="TEAM" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: F, maxWidth: 520, margin: '24px 0 48px min(160px,18vw)', fontSize: 'clamp(14px,1.6vw,17px)', lineHeight: 1.7, color: GRAY }}
        >
          A dedicated cross-functional team of engineers, designers, and growth strategists ready to deliver world-class results.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,260px),1fr))', gap: 20 }}>
          {TEAM.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
              style={{ ...cardStyle, clipPath: CHAMFER, textAlign: 'center' as const }}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              {/* Avatar circle */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 72, height: 72, borderRadius: '50%', margin: '0 auto 20px',
                  background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_HOVER})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24, fontWeight: 800, color: '#FFFFFF',
                  boxShadow: '0 8px 20px -4px rgba(255,85,0,0.5)',
                }}
              >
                {m.name.split(' ').map(w => w[0]).join('')}
              </motion.div>
              <h3 style={{ ...hBase, fontSize: 'clamp(15px,2vw,18px)', marginBottom: 4, textAlign: 'center' as const, color: '#FFFFFF' }}>{m.name}</h3>
              <p style={{ fontFamily: F, fontSize: 12, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 14px' }}>{m.role}</p>
              <p style={{ fontFamily: F, fontSize: 'clamp(13px,1.4vw,15px)', lineHeight: 1.65, color: GRAY, margin: 0 }}>{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ════════════ CLIENT RISK MITIGATION FAQS ════════════ */}
      <motion.section
        id="faq"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: '#111115', padding: `clamp(60px,10vw,140px) ${pad}`,
        }}
      >
        <SH top="FREQUENTLY ASKED" bottom="QUESTIONS" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: F, maxWidth: 520, margin: '24px 0 48px min(160px,18vw)', fontSize: 'clamp(14px,1.6vw,17px)', lineHeight: 1.7, color: GRAY }}
        >
          Everything you need to know about partnering with PilotNemo.
        </motion.p>

        <div style={{ maxWidth: 840, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ ...cardStyle, clipPath: CHAMFER_SM, cursor: 'pointer' }}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                <h3 style={{ ...hBase, fontSize: 'clamp(15px,2vw,18px)', color: '#FFFFFF', textTransform: 'none', letterSpacing: 0 }}>
                  {faq.q}
                </h3>
                <span style={{ fontSize: 20, fontWeight: 800, color: ACCENT }}>
                  {openFaq === i ? '−' : '+'}
                </span>
              </div>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ fontFamily: F, fontSize: 14, lineHeight: 1.7, color: GRAY, marginTop: 14, borderTop: `1px solid ${CARD_BORDER}`, paddingTop: 14, margin: '14px 0 0 0' }}
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ════════════ CONTACT ════════════ */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: `linear-gradient(180deg,${BG} 0%,#131317 100%)`,
          padding: `clamp(60px,10vw,140px) ${pad}`,
        }}
      >
        <SH top="LET'S" bottom="CONNECT" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: F, maxWidth: 520, margin: '24px 0 48px min(160px,18vw)', fontSize: 'clamp(14px,1.6vw,17px)', lineHeight: 1.7, color: GRAY }}
        >
          Share your project goals and we'll respond within 24 hours with a tailored proposal and roadmap.
        </motion.p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40 }}>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: '1 1 480px', minWidth: 300 }}
          >
            {sent ? (
              <div style={{ ...cardStyle, clipPath: CHAMFER, textAlign: 'center' as const, padding: '60px 32px' }}>
                <div style={{ fontSize: 48, marginBottom: 16, color: ACCENT }}>✓</div>
                <h3 style={{ ...hBase, fontSize: 24, marginBottom: 8, textAlign: 'center' as const, color: '#FFFFFF' }}>MESSAGE RECEIVED</h3>
                <p style={{ fontFamily: F, color: GRAY, fontSize: 15, lineHeight: 1.7 }}>Our team will reach out within 24 hours with a tailored plan for your business.</p>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setSent(true); }}
                style={{ ...cardStyle, clipPath: CHAMFER, display: 'flex', flexDirection: 'column', gap: 18 }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: mob ? '1fr' : '1fr 1fr', gap: 18 }}>
                  <div>
                    <label style={{ fontFamily: F, fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', color: '#FFFFFF', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>FULL NAME *</label>
                    <input required placeholder="John Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputStyle} onFocus={e => (e.currentTarget.style.borderColor = ACCENT)} onBlur={e => (e.currentTarget.style.borderColor = '#2A2A33')} />
                  </div>
                  <div>
                    <label style={{ fontFamily: F, fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', color: '#FFFFFF', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>EMAIL *</label>
                    <input type="email" required placeholder="john@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputStyle} onFocus={e => (e.currentTarget.style.borderColor = ACCENT)} onBlur={e => (e.currentTarget.style.borderColor = '#2A2A33')} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: mob ? '1fr' : '1fr 1fr', gap: 18 }}>
                  <div>
                    <label style={{ fontFamily: F, fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', color: '#FFFFFF', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>COMPANY</label>
                    <input placeholder="Acme Corp" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      style={inputStyle} onFocus={e => (e.currentTarget.style.borderColor = ACCENT)} onBlur={e => (e.currentTarget.style.borderColor = '#2A2A33')} />
                  </div>
                  <div>
                    <label style={{ fontFamily: F, fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', color: '#FFFFFF', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>SERVICE</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="" style={{ background: '#18181F', color: '#FFF' }}>Select a service...</option>
                      <option style={{ background: '#18181F', color: '#FFF' }}>Digital Marketing & SEO</option>
                      <option style={{ background: '#18181F', color: '#FFF' }}>Web Development</option>
                      <option style={{ background: '#18181F', color: '#FFF' }}>Mobile App Development</option>
                      <option style={{ background: '#18181F', color: '#FFF' }}>Brand Identity & Design</option>
                      <option style={{ background: '#18181F', color: '#FFF' }}>Custom Software / ERP</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: F, fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', color: '#FFFFFF', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>PROJECT DETAILS *</label>
                  <textarea required rows={4} placeholder="Describe your project goals..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'none' as const }}
                    onFocus={e => (e.currentTarget.style.borderColor = ACCENT)} onBlur={e => (e.currentTarget.style.borderColor = '#2A2A33')}
                  />
                </div>
                <CTA style={{ width: '100%', justifyContent: 'center' }}>SEND PROJECT BRIEF</CTA>
              </form>
            )}
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: '1 1 280px', minWidth: 260, display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            {[
              { label: 'EMAIL', value: 'pilotnemo897@gmail.com', icon: '✉' },
              { label: 'PHONE & WHATSAPP', value: '+91 98765 43210', icon: '📞' },
              { label: 'OFFICE', value: 'Chennai, Tamil Nadu, India', icon: '📍' },
              { label: 'HOURS', value: 'Mon–Sat · 9AM–7PM IST', icon: '⏰' },
            ].map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                style={{ ...cardStyle, clipPath: CHAMFER_SM, display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px' }}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <span style={{ fontSize: 22, color: ACCENT }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', color: ACCENT, textTransform: 'uppercase' }}>{c.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF', marginTop: 2 }}>{c.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ ...cardStyle, clipPath: CHAMFER, padding: '28px 28px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' as const }}>
                {[
                  { n: '250+', l: 'PROJECTS' },
                  { n: '99%', l: 'SATISFACTION' },
                  { n: '10+', l: 'YEARS' },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 'clamp(24px,3vw,32px)', fontWeight: 800, color: ACCENT }}>{s.n}</div>
                    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', color: GRAY, marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ════════════ FOOTER ════════════ */}
      <footer style={{
        background: '#070708', color: '#9CA3AF', padding: `clamp(40px,6vw,80px) ${pad} clamp(20px,3vw,40px)`,
        fontFamily: F, borderTop: `1px solid ${CARD_BORDER}`,
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div style={{ flex: '1 1 300px', minWidth: 240 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <img
                src={logo}
                alt="PilotNemo"
                style={{
                  height: '72px',
                  width: 'auto',
                }}
              />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#888894', maxWidth: 360 }}>
              Your end-to-end digital growth and IT engineering partner. Strategy, design, and technology to build businesses that scale.
            </p>
          </div>

          {/* Links */}
          {[
            { title: 'COMPANY', items: ['About Us', 'Our Team', 'Projects', 'Contact'] },
            { title: 'SERVICES', items: ['Digital Marketing', 'Web Development', 'Mobile Apps', 'Brand Identity', 'Custom Software'] },
          ].map((col, i) => (
            <div key={i} style={{ flex: '0 1 180px' }}>
              <h4 style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', color: '#FFFFFF', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>{col.title}</h4>
              {col.items.map(l => (
                <a key={l} href="#" style={{ display: 'block', fontSize: 14, color: '#9CA3AF', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
                >{l}</a>
              ))}
            </div>
          ))}

          {/* Contact */}
          <div style={{ flex: '0 1 220px' }}>
            <h4 style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', color: '#FFFFFF', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>GET IN TOUCH</h4>
            <p style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.8, margin: 0 }}>
              ✉ pilotnemo897@gmail.com<br />
              📞 +91 98765 43210<br />
              📍 Chennai, Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid #1C1C22', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, fontSize: 12, color: '#6B7280' }}>
          <span>© {new Date().getFullYear()} PilotNemo. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
              >{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
