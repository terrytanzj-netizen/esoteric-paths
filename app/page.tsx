'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PALACES, Palace } from '../data/content';
import { ARTICLE_DETAILS } from '../data/articles';
import ReportPDF from './components/ReportPDF';
import { formatCastTime } from './lib/formatTime';
import { getLunarParts } from './lib/lunar';

// Derive the home page essay list from ARTICLE_DETAILS — the same source the
// article pages and sitemap read from. Reading data/content.ts here meant every
// newly added essay silently failed to appear on the home page, and any slug
// listed without a matching ARTICLE_DETAILS entry produced a 404 on click.
const ALL_ARTICLES = Object.values(ARTICLE_DETAILS)
  .map((a) => ({ slug: a.slug, lang: a.lang, title: a.title, readTime: a.readTime }))
  .sort((a, b) => a.slug.localeCompare(b.slug));
const EN_ARTICLES = ALL_ARTICLES.filter((a) => a.lang === 'en');
const ZH_ARTICLES = ALL_ARTICLES.filter((a) => a.lang === 'zh');
const ZH_SERIF = "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', 'SimSun', 'STSong', serif";

// Accepts casts saved before the Wu Xing decoupling. Older records carry a
// `wuxing` string but no `omen` object; as long as `id` matches a known palace
// we re-hydrate the omen from PALACES below, so a paying customer never loses
// a report simply because we shipped a model change.
function isValidCastResult(value: any): boolean {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  if (typeof value.question !== 'string' || typeof value.time !== 'string') return false;
  return ['month', 'day', 'hour'].every(k => {
    const p = value[k];
    if (!p || typeof p !== 'object' || Array.isArray(p)) return false;
    return typeof p.id === 'string' && PALACES.some(palace => palace.id === p.id);
  });
}

// Fill in any field a persisted cast is missing (notably `omen`, added when the
// palaces were decoupled from Wu Xing) from the canonical PALACES table.
function hydrateCastResult(value: any): any | null {
  if (!isValidCastResult(value)) return null;
  const fill = (p: any) => PALACES.find(palace => palace.id === p.id) as Palace;
  return { ...value, month: fill(value.month), day: fill(value.day), hour: fill(value.hour) };
}

function safeGet(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}
function safeSet(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch {}
}
function safeRemove(key: string) {
  try { localStorage.removeItem(key); } catch {}
}

const DODO_CHECKOUT_URL = "https://checkout.dodopayments.com/buy/pdt_0NmINnqaKAXo6oqUU50Jc?quantity=1&redirect_url=https%3A%2F%2Fwww.esotericpaths.com%2F";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyeyykdv";

// Fire a GA4 event. Analytics must never break the experience.
function trackEvent(name: string, params?: Record<string, unknown>) {
  try {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', name, params || {});
    }
  } catch {
    /* no-op */
  }
}

const STATIC_STARS = [
  { top: '3%', left: '8%', delay: '0.2s', size: '3px' },
  { top: '8%', left: '85%', delay: '1.5s', size: '2px' },
  { top: '12%', left: '25%', delay: '3.1s', size: '4px' },
  { top: '18%', left: '68%', delay: '0.8s', size: '2px' },
  { top: '22%', left: '12%', delay: '2.4s', size: '3px' },
  { top: '27%', left: '92%', delay: '4.2s', size: '2px' },
  { top: '32%', left: '42%', delay: '1.1s', size: '3px' },
  { top: '38%', left: '80%', delay: '3.8s', size: '4px' },
  { top: '42%', left: '5%', delay: '0.5s', size: '2px' },
  { top: '48%', left: '55%', delay: '2.9s', size: '3px' },
  { top: '53%', left: '18%', delay: '4.7s', size: '2px' },
  { top: '58%', left: '75%', delay: '1.9s', size: '3px' },
  { top: '63%', left: '32%', delay: '3.2s', size: '4px' },
  { top: '68%', left: '95%', delay: '0.3s', size: '2px' },
  { top: '73%', left: '50%', delay: '2.1s', size: '3px' },
  { top: '78%', left: '10%', delay: '4.5s', size: '2px' },
  { top: '83%', left: '65%', delay: '1.6s', size: '4px' },
  { top: '88%', left: '85%', delay: '3.4s', size: '3px' },
  { top: '93%', left: '28%', delay: '0.7s', size: '2px' },
  { top: '97%', left: '45%', delay: '2.8s', size: '3px' },
  { top: '6%', left: '45%', delay: '2.3s', size: '2px' },
  { top: '15%', left: '95%', delay: '0.9s', size: '3px' },
  { top: '25%', left: '35%', delay: '4.0s', size: '2px' },
  { top: '35%', left: '15%', delay: '1.8s', size: '3px' },
  { top: '45%', left: '90%', delay: '3.5s', size: '2px' },
  { top: '55%', left: '40%', delay: '0.4s', size: '4px' },
  { top: '65%', left: '60%', delay: '2.6s', size: '3px' },
  { top: '75%', left: '82%', delay: '4.8s', size: '3px' },
  { top: '85%', left: '5%', delay: '1.3s', size: '2px' },
  { top: '95%', left: '70%', delay: '3.1s', size: '3px' },
];

const FAQ_ITEMS = [
  { q: 'How deterministic is the reading?', a: 'The palace calculation is fully deterministic — the same moment always yields the same three palaces. Strategic interpretation is where judgment is applied.' },
  { q: 'What exactly do I get for $19?', a: 'A downloadable 10-page PDF: methodology, your three-palace trajectory, palace interaction narrative, a personalized 72-hour action plan, five-dimensional resonant vectors, Major Arcana synthesis, executive guardrails, and reference appendix.' },
  { q: 'Is this financial or legal advice?', a: 'No. Esoteric Paths is a decision-clarity instrument. All binding terms must be codified in written contracts.' },
  { q: 'How is my payment data handled?', a: 'Payments are processed by Dodo Payments (PCI-DSS compliant). We never store your card details.' },
];

export default function Page() {
  const [time, setTime] = useState({ timeStr: '', palaceIdx: 0 });
  const [question, setQuestion] = useState('');
  const [isCasting, setIsCasting] = useState(false);
  const [isVerifiedPaid, setIsVerifiedPaid] = useState(false);
  const [manualPaymentId, setManualPaymentId] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [castResult, setCastResult] = useState<any>(null);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'verifying' | 'unlocked' | 'needs-id' | 'error'>('idle');
  const [paymentMessage, setPaymentMessage] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const lp = getLunarParts(now);
      const mIdx = (lp.month - 1) % 6;
      const dIdx = (mIdx + lp.day - 1) % 6;
      const hIdx = (dIdx + lp.hourBranch - 1) % 6;
      setTime({ timeStr: now.toLocaleTimeString('en-US', { hour12: false }), palaceIdx: hIdx });
    };
    update();
    document.documentElement.lang = 'en';
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let savedResult: any = null;

    const savedRaw = safeGet('last_user_cast');
    if (savedRaw) {
      try {
        const parsed = JSON.parse(savedRaw);
        const hydrated = hydrateCastResult(parsed);
        if (hydrated) {
          savedResult = hydrated;
          setCastResult(hydrated);
        } else {
          safeRemove('last_user_cast');
        }
      } catch {
        safeRemove('last_user_cast');
      }
    }

    // A legacy `esoteric_is_paid` boolean flag used to unlock directly. That is
    // forgeable in devtools, so it is no longer honoured — unlocking always
    // requires a payment id that passes server-side verification. Clear any
    // stale flag so it can never be resurrected.
    if (safeGet('esoteric_is_paid')) {
      safeRemove('esoteric_is_paid');
    }

    // Re-verify any previously paid session against the server instead of
    // trusting a client-side flag (which could be forged in devtools).
    const savedPaidId = safeGet('esoteric_payment_id');
    if (savedPaidId) {
      unlockByPaymentId(savedPaidId, true);
    }

    try {
      const params = new URLSearchParams(window.location.search);
      const status = params.get('status');
      const pId = params.get('payment_id') || params.get('paymentId');

      if (pId) {
        setPaymentStatus('verifying');
        setPaymentMessage('Verifying your Dodo payment...');
        unlockByPaymentId(pId, true);

        if (!savedResult) {
          const now = new Date();
          const lp = getLunarParts(now);
          const mIdx = (lp.month - 1) % 6;
          const dIdx = (mIdx + lp.day - 1) % 6;
          const hIdx = (dIdx + lp.hourBranch - 1) % 6;
          const autoResult = {
            question: "Strategic Executive Decision Analysis",
            month: PALACES[mIdx],
            day: PALACES[dIdx],
            hour: PALACES[hIdx],
            time: now.toUTCString(),
          };
          setCastResult(autoResult);
          safeSet('last_user_cast', JSON.stringify(autoResult));
        }
      } else if (status === 'succeeded') {
        setPaymentStatus('needs-id');
        setPaymentMessage('Payment succeeded, but Dodo did not return a Payment ID. Paste it from your receipt to unlock.');
      } else if (status === 'failed' || status === 'cancelled') {
        setPaymentStatus('error');
        setPaymentMessage(`Payment status from Dodo: ${status}. If you believe this is an error, paste your Payment ID below.`);
      }

      if (status || pId) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    } catch (e) {
      console.error('Redirect handling failed:', e);
    }
  }, []);

  const unlockByPaymentId = async (pId: string, silent = false) => {
    if (!pId) {
      setPaymentStatus('needs-id');
      setPaymentMessage('Please paste your Dodo Payment ID to unlock.');
      return false;
    }
    try {
      setPaymentStatus('verifying');
      setPaymentMessage('Verifying your Dodo payment...');
      const res = await fetch(`/api/verify?payment_id=${encodeURIComponent(pId)}`);
      const data = await res.json();
      if (data.valid) {
        setIsVerifiedPaid(true);
        trackEvent('purchase', {
          transaction_id: pId,
          value: 19,
          currency: 'USD',
          items: [{ item_id: 'master_blueprint', item_name: 'Master Blueprint' }],
        });
        setPaymentStatus('unlocked');
        setPaymentMessage('Payment verified. Your 10-page blueprint is unlocked.');
        safeSet('esoteric_payment_id', pId);
        if (!silent) alert('🎉 Verified! Full 10-page blueprint is unlocked.');
        return true;
      } else {
        setPaymentStatus('error');
        setPaymentMessage(data.error || 'Payment not found. Check your Payment ID and try again.');
        if (!silent) alert(`❌ ${data.error || 'Payment not found or not completed.'}`);
      }
    } catch (e) {
      console.error('Payment verification failed:', e);
      setPaymentStatus('error');
      setPaymentMessage('Verification request failed. Please check your connection and try again.');
      if (!silent) alert('Verification failed. Please try again or paste your Payment ID.');
    }
    return false;
  };

  const verifyPayment = (pId: string) => {
    unlockByPaymentId(pId, false);
  };

  const handleCast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setIsCasting(true);
    setTimeout(() => {
      const now = new Date();
      const lp = getLunarParts(now);
      const mIdx = (lp.month - 1) % 6;
      const dIdx = (mIdx + lp.day - 1) % 6;
      const hIdx = (dIdx + lp.hourBranch - 1) % 6;
      const newResult = {
        question,
        month: PALACES[mIdx],
        day: PALACES[dIdx],
        hour: PALACES[hIdx],
        time: now.toUTCString(),
      };
      setCastResult(newResult);
      trackEvent('cast_started', {
        month_palace: newResult.month?.id,
        day_palace: newResult.day?.id,
        hour_palace: newResult.hour?.id,
      });
      safeSet('last_user_cast', JSON.stringify(newResult));
      setIsCasting(false);
    }, 1200);
  };

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailInput })
    });
    if (res.ok) {
      setEmailSubscribed(true);
      setEmailInput('');
    }
  };

  const handlePrintPDF = () => {
    window.print();
  };

  const handleShareTwitter = () => {
    const url = 'https://www.esotericpaths.com';
    const text = isValidCastResult(castResult)
      ? `My tactical decision vector via @EsotericPaths:\nQuery: "${castResult.question}"\nMonth: ${castResult.month.name} | Day: ${castResult.day.name} | Hour: ${castResult.hour.name}\n\nAligning micro-moments with macro ephemeris. 🜔`
      : 'Aligning micro-moments with macro ephemeris through Xiao Liu Ren × Tarot. 🜔';
    const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(intent, '_blank', 'noopener,noreferrer');
  };

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Esoteric Paths — Temporal Strategy Matrix',
    description: 'A deterministic Horary Oracle combining classical Chinese Xiao Liu Ren time mechanics with Western archetypal tarot, delivering a personalized 10-page strategic blueprint with a 72-hour execution window.',
    brand: { '@type': 'Brand', name: 'Esoteric Paths' },
    offers: {
      '@type': 'Offer',
      price: '19',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.esotericpaths.com',
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="es-root" style={{ maxWidth: '1040px', margin: '0 auto', padding: '2rem 1.5rem 4rem 1.5rem', background: '#050508', minHeight: '100vh', color: '#E8E4DA', fontFamily: 'var(--font-body)', position: 'relative', overflowX: 'hidden' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {paymentStatus !== 'idle' && (
        <div className="no-print" style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          padding: '0.85rem 1rem',
          marginBottom: '1rem',
          borderRadius: '10px',
          textAlign: 'center',
          backgroundColor: paymentStatus === 'error' ? 'rgba(239, 68, 68, 0.12)' : paymentStatus === 'unlocked' ? 'rgba(34, 197, 94, 0.12)' : 'rgba(201, 162, 39, 0.12)',
          border: `1px solid ${paymentStatus === 'error' ? '#EF4444' : paymentStatus === 'unlocked' ? '#22C55E' : '#C9A227'}`,
        }}>
          <p style={{ fontSize: '0.85rem', color: paymentStatus === 'error' ? '#EF4444' : paymentStatus === 'unlocked' ? '#22C55E' : '#C9A227', margin: 0, fontFamily: 'monospace' }}>
            {paymentStatus === 'verifying' && '⏳ '}
            {paymentStatus === 'unlocked' && '✅ '}
            {paymentStatus === 'error' && '⚠️ '}
            {paymentStatus === 'needs-id' && '✦ '}
            {paymentMessage}
          </p>
        </div>
      )}

      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 15%, rgba(201, 162, 39, 0.08) 0%, rgba(5, 5, 8, 0.98) 75%), linear-gradient(to bottom, #050508, #020204)', pointerEvents: 'none', zIndex: 0 }} />

      <div className="spinning-compass" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '650px', height: '650px', border: '1px dashed rgba(201, 162, 39, 0.1)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0, opacity: 0.3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '530px', height: '530px', border: '1px solid rgba(201, 162, 39, 0.08)', borderRadius: '50%', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', color: '#C9A227', fontSize: '0.75rem', fontFamily: 'monospace' }}>N</div>
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', color: '#C9A227', fontSize: '0.75rem', fontFamily: 'monospace' }}>S</div>
          <div style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', color: '#C9A227', fontSize: '0.75rem', fontFamily: 'monospace' }}>W</div>
          <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', color: '#C9A227', fontSize: '0.75rem', fontFamily: 'monospace' }}>E</div>
        </div>
      </div>

      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 1 }}>
        {STATIC_STARS.map((star, i) => (
          <div key={i} className="bling-star" style={{ top: star.top, left: star.left, width: star.size, height: star.size, animationDelay: star.delay }} />
        ))}
      </div>

      <nav className="no-print es-nav" style={{ borderBottom: '1px solid rgba(201,162,39,0.2)', paddingBottom: '1rem', marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
        <span className="es-brand">✦ ESOTERIC PATHS</span>
        <div className="es-nav-links">
          <a className="es-nav-link" href="#oracle" style={{ color: '#C9A227' }}>Oracle</a>
          <a className="es-nav-link" href="#elements">Matrix</a>
          <a className="es-nav-link" href="#blueprint">Blueprint</a>
          <a className="es-nav-link" href="#insights">Insights</a>
          <Link className="es-nav-link" href="/tools/chinese-name">Tools</Link>
          <a className="es-nav-link" href="#support">Support</a>
        </div>
      </nav>

      <header className="no-print reveal" style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: 'monospace' }}>Xiao Liu Ren × Tarot Matrix</span>
        <h1 className="es-hero-title" style={{ fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0.4rem 0', textShadow: '0 0 30px rgba(201, 162, 39, 0.2)' }}>TEMPORAL STRATEGY MATRIX</h1>
        <p style={{ fontSize: '0.95rem', color: '#8A8678', maxWidth: '600px', margin: '0 auto' }}>Align critical decisions with classical temporal mechanics and Western archetypal wisdom.</p>
        <div className="es-ornament">✦ &nbsp; ✦ &nbsp; ✦</div>
      </header>

      <div className="no-print reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem 1.5rem', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        {[
          'Corporate Metaphysical Advisor',
          'Practitioner · Chinese Horary Timing',
        ].map((cred, i) => (
          <span key={i} style={{ fontSize: '0.7rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.18em', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '999px', padding: '0.4rem 0.9rem' }}>
            ✦ {cred}
          </span>
        ))}
      </div>

      <div className="no-print cyber-glow-box es-lift reveal" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.3)', borderRadius: '20px', padding: '2.2rem', textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', letterSpacing: '0.2em' }}>• LIVE ALCHEMICAL EPHEMERIS FLUX •</span>
        <div suppressHydrationWarning style={{ fontSize: '3.5rem', fontWeight: 'bold', fontFamily: 'monospace', color: '#F4EEDB', textShadow: '0 0 25px rgba(201,162,39,0.4)', margin: '0.4rem 0' }}>{time.timeStr || '12:00:00'}</div>
        <div className="es-palace-grid" suppressHydrationWarning style={{ marginTop: '1.5rem' }}>
          {PALACES.map((p, idx) => {
            const active = time.palaceIdx === idx;
            return (
              <div key={p.id} className={`es-palace-cell${active ? ' is-active' : ''}`}>
                <div style={{ color: active ? '#C9A227' : '#5C584E', fontSize: '1.1rem' }}>{p.symbol}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: active ? '#F4EEDB' : '#8A8678', fontFamily: 'var(--font-display)' }}>{p.name.split(' ')[0]}</div>
              </div>
            );
          })}
        </div>
      </div>

      <section id="elements" className="no-print es-lift reveal" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '20px', padding: '2rem', marginBottom: '2rem', position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '0.4rem' }}>• Engine & Cultural Roots •</span>
        <h3 style={{ fontSize: '1.6rem', color: '#F4EEDB', fontFamily: 'var(--font-display)', margin: '0 0 1.5rem 0' }}>Six Palaces — And Why We Don't Bind Them to Wu Xing</h3>
        <div className="es-grid-2" style={{ textAlign: 'left' }}>
          <div style={{ background: '#050508', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(201,162,39,0.15)' }}>
            <span style={{ fontSize: '0.7rem', color: '#C9A227', fontFamily: 'monospace', display: 'block', marginBottom: '0.4rem' }}>THE SIX PALACES — THE ENGINE</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', fontSize: '0.8rem', color: '#CDC8BC', fontFamily: 'monospace' }}>
              <div>大安 Auspicious</div><div>留连 Delayed</div><div>速喜 Auspicious</div><div>赤口 Obstructed</div><div>小吉 Auspicious</div><div>空亡 Obstructed</div>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#8A8678', margin: '0.7rem 0 0 0', lineHeight: 1.55 }}>Every reading is derived from these six omen qualities alone.</p>
          </div>
          <div style={{ background: '#050508', padding: '1.0rem', borderRadius: '10px', border: '1px solid rgba(201,162,39,0.15)' }}>
            <span style={{ fontSize: '0.7rem', color: '#C9A227', fontFamily: 'monospace', display: 'block', marginBottom: '0.4rem' }}>WU XING MATRIX — REFERENCE ONLY</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', fontSize: '0.8rem', color: '#CDC8BC', fontFamily: 'monospace' }}>
              <div>木 Wood</div><div>火 Fire</div><div>土 Earth</div><div>金 Metal</div><div style={{ gridColumn: 'span 2' }}>水 Water</div>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#8A8678', margin: '0.7rem 0 0 0', lineHeight: 1.55 }}>Wu Xing is reproduced for orientation. Which element a palace belongs to is disputed between schools, so we do not build on it.</p>
          </div>
        </div>
      </section>

      <section id="authority" className="no-print es-lift reveal" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '20px', padding: '2rem', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '0.4rem' }}>• Methodology & Stewardship •</span>
        <h3 style={{ fontSize: '1.5rem', color: '#F4EEDB', fontFamily: 'var(--font-display)', margin: '0 0 1rem 0' }}>Why This Reading Is Worth Trusting</h3>
        <div className="es-grid-2" style={{ gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ borderLeft: '2px solid #C9A227', paddingLeft: '1rem' }}>
              <h4 style={{ color: '#F4EEDB', fontSize: '1rem', margin: '0 0 0.3rem 0', fontFamily: 'var(--font-display)' }}>Deterministic, Not Vague</h4>
              <p style={{ color: '#CDC8BC', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>The three palaces are computed from the lunar month, day and hour. Two people casting at the same moment receive the same result. No room for selective interpretation or cold-reading tricks.</p>
            </div>
            <div style={{ borderLeft: '2px solid #C9A227', paddingLeft: '1rem' }}>
              <h4 style={{ color: '#F4EEDB', fontSize: '1rem', margin: '0 0 0.3rem 0', fontFamily: 'var(--font-display)' }}>Grounded in Two Canons</h4>
              <p style={{ color: '#CDC8BC', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>The framework binds classical Chinese temporal mechanics (Xiao Liu Ren / 小六壬) with Western archetypal narrative (Tarot / Jungian typology). East supplies the when; West supplies the story.</p>
            </div>
          </div>
          <div style={{ background: '#050508', border: '1px solid rgba(201,162,39,0.2)', borderRadius: '14px', padding: '1.25rem' }}>
            <p style={{ fontSize: '0.85rem', color: '#CDC8BC', lineHeight: 1.7, margin: '0 0 1rem 0', fontStyle: 'italic' }}>
              "My role is not to tell you what will happen. It is to give the moment a determinate address — so your own reasoning becomes inspectable, repeatable and accountable within a 72-hour execution window."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,162,39,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A227', fontSize: '1.1rem' }}>☩</div>
              <div>
                <p style={{ color: '#F4EEDB', fontSize: '0.85rem', fontWeight: 'bold', margin: 0, fontFamily: 'var(--font-display)' }}>Terry Tan</p>
                <p style={{ color: '#8A8678', fontSize: '0.7rem', margin: 0, fontFamily: 'monospace', lineHeight: 1.5 }}>
                  Corporate Metaphysical Advisor
                </p>
              </div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: '0.7rem', color: '#5C584E', fontFamily: 'monospace', lineHeight: 1.6, marginTop: '1.5rem', textAlign: 'center', borderTop: '1px solid rgba(201,162,39,0.1)', paddingTop: '1rem' }}>
          Credentials are listed in a personal capacity. Esoteric Paths is not endorsed by, affiliated with, or representing any temple, religious body, or association.
        </p>
      </section>

      <div id="oracle" className="print-area" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.3)', borderRadius: '20px', padding: '2.2rem', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
          <form onSubmit={handleCast} className="no-print" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label style={{ fontSize: '0.8rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase' }}>Inquire Your Decision Crossroads</label>
            <input type="text" required value={question} onChange={e => setQuestion(e.target.value)} placeholder="e.g., Should I execute the contract renegotiation this week?" className="es-input" style={{ padding: '1rem' }} />
            <button type="submit" className="es-btn es-btn--gold" style={{ padding: '1.1rem', fontSize: '0.9rem' }} disabled={isCasting}>
              {isCasting ? (<span className="es-casting"><span className="es-glyph-spin">☉</span> Consulting the spheres…</span>) : 'Cast Horary Oracle →'}
            </button>
          </form>

        {isValidCastResult(castResult) && (
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid rgba(201, 162, 39, 0.2)', paddingBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase' }}>EPHEMERIS COORDINATE LOCKED • {formatCastTime(castResult.time)}</span>
                <h2 style={{ fontSize: '1.6rem', color: '#F4EEDB', margin: '0.35rem 0 0 0', fontFamily: 'var(--font-display)' }}>Query: "{castResult.question}"</h2>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <button onClick={handleShareTwitter} className="es-btn es-btn--ghost" style={{ padding: '0.85rem 1.25rem', fontSize: '0.8rem' }}>
                  🜔 Share on X
                </button>
                {isVerifiedPaid && (
                  <button onClick={handlePrintPDF} className="es-btn es-btn--gold" style={{ padding: '0.85rem 1.75rem', fontSize: '0.85rem' }}>
                    📥 Export 10-Page Executive PDF
                  </button>
                )}
              </div>
            </div>

            {/* 免费预览提示 */}
            <div id="blueprint" className="no-print es-lift reveal" style={{ padding: '1.5rem', backgroundColor: '#0A0A0F', borderRadius: '16px', border: '1px solid rgba(201, 162, 39, 0.3)', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.15em' }}>FREE PREVIEW</span>
              <h3 style={{ fontSize: '1.4rem', color: '#F4EEDB', fontFamily: 'var(--font-display)', margin: '0.25rem 0 1rem 0' }}>Your Three-Palace Trajectory</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1.25rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>MONTH PALACE (Macro Origin)</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'var(--font-display)' }}>{castResult.month.symbol} {castResult.month.name} ({castResult.month.omen.label})</h4>
                  <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>{castResult.month.desc}</p>
                </div>
                <div style={{ padding: '1.25rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px dashed rgba(201, 162, 39, 0.25)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>DAY PALACE — locked</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'var(--font-display)' }}>🔒 {castResult.day.omen.label}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#6f6b5f', margin: 0, fontStyle: 'italic' }}>The current pivot is veiled. Unlock to reveal the full reading.</p>
                </div>
                <div style={{ padding: '1.25rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px dashed rgba(201, 162, 39, 0.25)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>HOUR PALACE — locked</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'var(--font-display)' }}>🔒 {castResult.hour.omen.label}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#6f6b5f', margin: 0, fontStyle: 'italic' }}>The decisive vector is veiled. Unlock to reveal the full reading.</p>
                </div>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#8A8678', marginTop: '1rem', lineHeight: 1.5 }}>
                Unlock the full 10-page report to reveal your Day and Hour palaces, the 72-hour action plan, resonant vectors, tarot synthesis, and executive guardrails.
              </p>
            </div>

            {/* 已支付解锁后的完整 10 页报告 */}
            {isVerifiedPaid && isValidCastResult(castResult) ? (
              <ReportPDF castResult={castResult} />
            ) : (
              /* 未支付时展示的解锁引导区块（带 Testimonials、Trust Badges 与 Restore 框） */
              <div id="support" className="no-print es-lift reveal" style={{ 
                padding: '2.5rem 1.5rem', 
                backgroundColor: '#0F0E17', 
                borderRadius: '16px', 
                border: '1px solid rgba(201, 162, 39, 0.4)', 
                textAlign: 'center',
                boxShadow: '0 0 30px rgba(201, 162, 39, 0.1), inset 0 0 15px rgba(201, 162, 39, 0.03)',
                backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(201, 162, 39, 0.08) 0%, transparent 70%)'
              }}>
                <span style={{ fontSize: '0.7rem', color: '#C9A227', textTransform: 'uppercase', letterSpacing: '0.25em', display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                  ⏳ Limited Vector — 72-Hour Execution Window
                </span>
                <span style={{ fontSize: '0.75rem', color: '#C9A227', textTransform: 'uppercase', letterSpacing: '0.25em', display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                  ✦ Executive Strategy Blueprint ($19) ✦
                </span>
                <h3 style={{ fontSize: '1.45rem', color: '#F4EEDB', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-display)' }}>
                  Unlock Full 10-Page Personal Blueprint & 72h Action Plan
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#8A8678', lineHeight: '1.6', margin: '0 auto 1.5rem auto', maxWidth: '520px' }}>
                  Synthesizes your Month, Day, and Hour palaces into a downloadable 10-page PDF with Methodology, Palace Interactions, 72-Hour Chrono Execution Windows, Resonant Vectors, Major Arcana Synthesis, Executive Guardrails, and Reference Appendix.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', maxWidth: '560px', margin: '0 auto 1.5rem auto', textAlign: 'left' }}>
                  <div style={{ borderLeft: '2px solid #C9A227', paddingLeft: '1rem' }}>
                    <p style={{ fontSize: '0.70rem', color: '#C9A227', fontFamily: 'monospace', margin: '0 0 0.35rem 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>✦ Deterministic</p>
                    <p style={{ fontSize: '0.78rem', color: '#CDC8BC', lineHeight: 1.5, margin: 0 }}>Same moment, same palaces. No randomness, no reshuffling, no vague generalities.</p>
                  </div>
                  <div style={{ borderLeft: '2px solid #C9A227', paddingLeft: '1rem' }}>
                    <p style={{ fontSize: '0.70rem', color: '#C9A227', fontFamily: 'monospace', margin: '0 0 0.35rem 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>✦ Private</p>
                    <p style={{ fontSize: '0.78rem', color: '#CDC8BC', lineHeight: 1.5, margin: 0 }}>No account required. Payment processed by Dodo Payments; we never see your card.</p>
                  </div>
                  <div style={{ borderLeft: '2px solid #C9A227', paddingLeft: '1rem' }}>
                    <p style={{ fontSize: '0.70rem', color: '#C9A227', fontFamily: 'monospace', margin: '0 0 0.35rem 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>✦ Immediate</p>
                    <p style={{ fontSize: '0.78rem', color: '#CDC8BC', lineHeight: 1.5, margin: 0 }}>The full 10-page blueprint unlocks the moment payment clears — no waiting, no email loop.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <a
                    href={DODO_CHECKOUT_URL}
                    className="es-btn es-btn--gold"
                    style={{ padding: '1rem 3rem', fontSize: '0.95rem' }}
                    onClick={() => trackEvent('begin_checkout', { value: 19, currency: 'USD', item_id: 'master_blueprint' })}
                  >
                    Unlock Master Blueprint ($19) →
                  </a>

                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.72rem', color: '#8A8678', fontFamily: 'monospace', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <span>🔒 256-Bit Encrypted Secure</span>
                    <span>⚡ Instant PDF Delivery</span>
                  </div>

                  {(paymentStatus === 'needs-id' || paymentStatus === 'error' || paymentStatus === 'verifying') && (
                    <div style={{ marginTop: '0.75rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(201, 162, 39, 0.1)', border: '1px solid rgba(201, 162, 39, 0.4)', borderRadius: '8px', maxWidth: '560px' }}>
                      <p style={{ fontSize: '0.8rem', color: paymentStatus === 'error' ? '#EF4444' : '#C9A227', margin: 0, fontFamily: 'monospace' }}>
                        {paymentStatus === 'verifying' ? '⏳ ' : '✦ '}{paymentMessage}
                      </p>
                    </div>
                  )}

                  <div style={{ marginTop: '0.5rem', borderTop: '1px solid rgba(201, 162, 39, 0.2)', paddingTop: '1rem', width: '100%', maxWidth: '420px' }}>
                    <p style={{ fontSize: '0.8rem', color: '#F4EEDB', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Already paid? Paste your Dodo Payment ID:
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#8A8678', marginBottom: '0.5rem' }}>
                      Find it in your Dodo receipt email (starts with <code style={{ color: '#C9A227', fontFamily: 'monospace' }}>pay_</code>).
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input
                        type="text"
                        placeholder="e.g. pay_xxxxxxxx"
                        value={manualPaymentId}
                        onChange={e => setManualPaymentId(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') verifyPayment(manualPaymentId); }}
                        className="es-input"
                        style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem', borderRadius: '6px' }}
                      />
                      <button
                        onClick={() => verifyPayment(manualPaymentId)}
                        disabled={paymentStatus === 'verifying'}
                        className="es-btn es-btn--ghost"
                        style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', borderRadius: '6px' }}
                      >
                        {paymentStatus === 'verifying' ? 'Verifying...' : 'Restore'}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        )}
      </div>

      {/* 独立的恢复入口：不依赖起课记录，任何未解锁的付费用户都能找回权限 */}
      {!isVerifiedPaid && (
        <div id="restore" className="no-print es-lift reveal" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
          <h4 style={{ fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.35rem 0', fontSize: '1.05rem' }}>Already paid? Restore your access</h4>
          <p style={{ fontSize: '0.8rem', color: '#8A8678', margin: '0 0 1rem 0', lineHeight: 1.6 }}>
            Paste your Dodo Payment ID — it starts with <code style={{ color: '#C9A227', fontFamily: 'monospace' }}>pay_</code> and is in your receipt email. Access is restored instantly, no new purchase needed.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', maxWidth: '480px' }}>
            <input
              type="text"
              placeholder="e.g. pay_xxxxxxxx"
              value={manualPaymentId}
              onChange={e => setManualPaymentId(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') verifyPayment(manualPaymentId); }}
              className="es-input"
              style={{ flex: 1, padding: '0.7rem', fontSize: '0.85rem', borderRadius: '8px' }}
            />
            <button
              onClick={() => verifyPayment(manualPaymentId)}
              disabled={paymentStatus === 'verifying'}
              className="es-btn es-btn--gold"
              style={{ padding: '0.7rem 1.25rem', fontSize: '0.85rem', borderRadius: '8px' }}
            >
              {paymentStatus === 'verifying' ? 'Verifying…' : 'Restore'}
            </button>
          </div>
          {(paymentStatus === 'needs-id' || paymentStatus === 'error') && (
            <p style={{ fontSize: '0.8rem', color: paymentStatus === 'error' ? '#EF4444' : '#C9A227', margin: '0.75rem 0 0 0', fontFamily: 'monospace' }}>
              ✦ {paymentMessage}
            </p>
          )}
        </div>
      )}

      <div className="no-print es-lift reveal" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '20px', padding: '2rem', textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <h4 style={{ fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.4rem 0' }}>The Weekly Ephemeris Briefing</h4>
        <p style={{ fontSize: '0.85rem', color: '#8A8678', margin: '0 0 1rem 0' }}>Receive precision temporal vectors every Monday.</p>
        {emailSubscribed ? (
          <div style={{ color: '#C9A227', fontFamily: 'monospace', fontSize: '0.85rem' }}>✦ Subscribed successfully!</div>
        ) : (
          <form onSubmit={handleEmail} style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto' }}>
            <input type="email" required value={emailInput} onChange={e => setEmailInput(e.target.value)} placeholder="Your professional email..." className="es-input" style={{ flex: 1, padding: '0.7rem', fontSize: '0.85rem' }} />
            <button type="submit" className="es-btn es-btn--gold" style={{ padding: '0.7rem 1.4rem', fontSize: '0.85rem' }}>Join</button>
          </form>
        )}
      </div>

      <div id="insights" className="no-print reveal" style={{ marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.4rem 0' }}>Strategic Insights</h3>
        <p style={{ fontSize: '0.8rem', color: '#8A8678', margin: '0 0 1.5rem 0', lineHeight: 1.6 }}>
          Long-form essays on temporal strategy, classical horary method and the psychology of decision timing.
        </p>

        <div className="es-section-label" style={{ marginBottom: '0.85rem' }}>
          <span>English</span>
          <span className="es-section-count">{EN_ARTICLES.length} essays</span>
        </div>
        <div className="es-insights-grid" style={{ marginBottom: '2rem' }}>
          {EN_ARTICLES.map((art, i) => (
            <Link key={i} href={`/insights/${art.slug}`} className="es-lift" style={{ display: 'block', background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.2)', borderRadius: '10px', padding: '1rem', textDecoration: 'none' }}>
              <span style={{ fontSize: '0.65rem', color: '#C9A227', fontFamily: 'monospace' }}>{art.readTime}</span>
              <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0.3rem 0', lineHeight: 1.35 }}>{art.title}</h4>
              <span style={{ fontSize: '0.7rem', color: '#8A8678', fontFamily: 'monospace' }}>Read →</span>
            </Link>
          ))}
        </div>

        <div className="es-section-label" style={{ marginBottom: '0.85rem' }}>
          <span>中文</span>
          <span className="es-section-count">{ZH_ARTICLES.length} 篇</span>
        </div>
        <div className="es-insights-grid">
          {ZH_ARTICLES.map((art, i) => (
            <Link key={i} href={`/insights/${art.slug}`} className="es-lift" style={{ display: 'block', background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.2)', borderRadius: '10px', padding: '1rem', textDecoration: 'none' }}>
              <span style={{ fontSize: '0.65rem', color: '#C9A227', fontFamily: 'monospace' }}>{art.readTime}</span>
              <h4 style={{ fontSize: '0.95rem', fontFamily: ZH_SERIF, color: '#F4EEDB', margin: '0.3rem 0', lineHeight: 1.55, letterSpacing: '0.01em' }}>{art.title}</h4>
              <span style={{ fontSize: '0.7rem', color: '#8A8678', fontFamily: 'monospace' }}>阅读 →</span>
            </Link>
          ))}
        </div>

        <div className="es-section-label" style={{ marginBottom: '0.85rem', marginTop: '2rem' }}>
          <span>Free Tools</span>
          <span className="es-section-count">1 tool</span>
        </div>
        <div className="es-insights-grid">
          <Link href="/tools/chinese-name" className="es-lift" style={{ display: 'block', background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.35)', borderRadius: '10px', padding: '1rem', textDecoration: 'none' }}>
            <span style={{ fontSize: '0.65rem', color: '#C9A227', fontFamily: 'monospace' }}>FREE</span>
            <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0.3rem 0', lineHeight: 1.35 }}>Chinese Name Generator</h4>
            <p style={{ fontSize: '0.75rem', color: '#CDC8BC', margin: '0 0 0.4rem 0', lineHeight: 1.5 }}>Get an authentic name with pinyin, meaning, element and palace affinity.</p>
            <span style={{ fontSize: '0.7rem', color: '#8A8678', fontFamily: 'monospace' }}>Try →</span>
          </Link>
        </div>
      </div>

      <div id="faq" className="no-print es-lift reveal" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '20px', padding: '2rem', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 1.25rem 0' }}>Frequently Asked Questions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {FAQ_ITEMS.map((f, i) => (
            <div key={i} style={{ borderLeft: '2px solid #C9A227', paddingLeft: '1rem' }}>
              <p style={{ fontSize: '0.9rem', color: '#F4EEDB', fontFamily: 'var(--font-display)', margin: '0 0 0.3rem 0' }}>{f.q}</p>
              <p style={{ fontSize: '0.82rem', color: '#CDC8BC', lineHeight: '1.6', margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: 'center', fontSize: '0.75rem', color: '#5C584E', fontFamily: 'monospace', borderTop: '1px solid rgba(201,162,39,0.1)', paddingTop: '1.5rem', position: 'relative', zIndex: 2 }}>
        © Esoteric Paths. Deterministic Horary Infrastructure. All rights reserved.
      </footer>

    </div>
  );
}
