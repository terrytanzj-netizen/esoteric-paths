'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const DODO_CHECKOUT_URL = "https://checkout.dodopayments.com/buy/pdt_0NmINnqaKAXo6oqUU50Jc?quantity=1";

const PALACES = [
  {
    id: 'daan',
    name: 'Da An (大安)',
    symbol: '☩',
    title: 'Great Stability & Preservation',
    wuxing: 'Wood (木)',
    elementColor: 'Emerald Green',
    luckyNumbers: '3, 8',
    luckyDirection: 'East',
    meaning: 'The situation is grounded, safe, and favors steady preservation over aggressive expansion. Temporal momentum is structurally stable.',
    tarot: 'The Emperor / The Hierophant',
    advice: 'Consolidate current resources. Hold strategic ground and avoid impulsive risks.',
    macroAudit: 'Foundational structures and legal perimeters are well-defended. Low systemic friction.',
    chronoPlan: [
      { phase: 'Phase 1 (00h - 24h) Asset Audit', text: 'Catalog current liquid resources and confirm ownership agreements. Avoid speculative capital allocation.' },
      { phase: 'Phase 2 (24h - 48h) Infrastructure Fortification', text: 'Reinforce defensive protocols. Cement agreements in rigorous written contracts.' },
      { phase: 'Phase 3 (48h - 72h) Sovereign Execution', text: 'Maintain established positions. Allow compounding growth to work without unnecessary interventions.' }
    ]
  },
  {
    id: 'liulian',
    name: 'Liu Lian (留连)',
    symbol: '☿',
    title: 'Entanglement & Delay',
    wuxing: 'Water (水)',
    elementColor: 'Deep Obsidian',
    luckyNumbers: '1, 6',
    luckyDirection: 'North',
    meaning: 'Energy is dragged or sticky. Things are delayed; forcing external action creates friction. Reflect, audit, and wait.',
    tarot: 'The Hanged Man / Eight of Cups',
    advice: 'Use this time for auditing and internal adjustments. Do not force progress.',
    macroAudit: 'External progress is blocked by bureaucratic or interpersonal drag. Patience is mandatory.',
    chronoPlan: [
      { phase: 'Phase 1 (00h - 24h) Friction Diagnosis', text: 'Identify where counterparties are hesitating. Do not push for immediate signatures.' },
      { phase: 'Phase 2 (24h - 48h) Internal Optimization', text: 'Fix internal operational defects and eliminate unaddressed technical liabilities.' },
      { phase: 'Phase 3 (48h - 72h) Strategic Stillness', text: 'Adopt a holding pattern. Wait for the temporal cycle to shift before deploying fresh capital.' }
    ]
  },
  {
    id: 'suxi',
    name: 'Su Xi (速喜)',
    symbol: '☉',
    title: 'Rapid Joy & High Velocity',
    wuxing: 'Fire (火)',
    elementColor: 'Crimson Vermilion',
    luckyNumbers: '2, 7',
    luckyDirection: 'South',
    meaning: 'Swift breakthroughs and unexpected positive catalysts. High execution velocity where immediate closing is favored.',
    tarot: 'The Chariot / Knight of Wands',
    advice: 'Strike while the iron is hot. Advance your key initiatives immediately.',
    macroAudit: 'Accelerated temporal vector. Counterparties are highly receptive; delays will extinguish momentum.',
    chronoPlan: [
      { phase: 'Phase 1 (00h - 24h) Immediate Mobilization', text: 'Send pivotal outreach, finalize campaign parameters, and initiate negotiations without delay.' },
      { phase: 'Phase 2 (24h - 48h) Term Securing', text: 'Lock in terms and secure initial commitments while enthusiasm and energy remain at peak.' },
      { phase: 'Phase 3 (48h - 72h) Decisive Closure', text: 'Execute binding actions. Transition from proposal to operational implementation.' }
    ]
  },
  {
    id: 'chikou',
    name: 'Chi Kou (赤口)',
    symbol: '☌',
    title: 'Conflict & Friction',
    wuxing: 'Metal (金)',
    elementColor: 'Gilded Silver',
    luckyNumbers: '4, 9',
    luckyDirection: 'West',
    meaning: 'Sharp misunderstandings, vocal disputes, or structural pushback. Strong defensive boundaries are mandatory.',
    tarot: 'Five of Swords / Seven of Wands',
    advice: 'Maintain written records. Avoid verbal arguments and reinforce operational security.',
    macroAudit: 'Adversarial atmosphere. Communication is prone to distortion and hostile interpretations.',
    chronoPlan: [
      { phase: 'Phase 1 (00h - 24h) Perimeter Lockdown', text: 'Move all communications to written channels. Cease informal verbal promises.' },
      { phase: 'Phase 2 (24h - 48h) Evidence & Clause Audit', text: 'Review non-disclosure agreements, contracts, and liabilities. Eliminate operational vulnerabilities.' },
      { phase: 'Phase 3 (48h - 72h) Controlled Engagement', text: 'State non-negotiable boundaries calmly without emotional escalations.' }
    ]
  },
  {
    id: 'xiaoji',
    name: 'Xiao Ji (小吉)',
    symbol: '♃',
    title: 'Gentle Luck & Synergy',
    wuxing: 'Water (水)',
    elementColor: 'Azure Indigo',
    luckyNumbers: '1, 6',
    luckyDirection: 'North',
    meaning: 'Cooperative progress, mutual benefit, and harmony achieved through aligned partnerships.',
    tarot: 'Two of Cups / Three of Pentacles',
    advice: 'Engage in collaborative discussions, team synergy, and relationship building.',
    macroAudit: 'Harmonious mutual resonance. Both parties stand to benefit from a collaborative structure.',
    chronoPlan: [
      { phase: 'Phase 1 (00h - 24h) Synergy Exploration', text: 'Schedule exploratory dialogues. Present win-win frameworks that benefit all stakeholders.' },
      { phase: 'Phase 2 (24h - 48h) Joint Structuring', text: 'Draft collaborative terms and delineate shared responsibilities clearly.' },
      { phase: 'Phase 3 (48h - 72h) Alliance Ratification', text: 'Sign collaborative agreements and celebrate collective forward velocity.' }
    ]
  },
  {
    id: 'kongwang',
    name: 'Kong Wang (空亡)',
    symbol: '♄',
    title: 'The Void & Systemic Reset',
    wuxing: 'Earth (土)',
    elementColor: 'Imperial Ochre',
    luckyNumbers: '5, 0',
    luckyDirection: 'Center',
    meaning: 'Dissolution of expectations, lost causes, or a complete cycle reset. Avoid committing major funds.',
    tarot: 'The Fool / The Tower',
    advice: 'Let go of obsolete assumptions. Treat this moment as a clean-slate reboot.',
    macroAudit: 'Total entropy reset. Legacy assumptions are void; pursuing old goals yields zero return.',
    chronoPlan: [
      { phase: 'Phase 1 (00h - 24h) Radical Liquidation', text: 'Acknowledge obsolete goals. Terminate deadweight projects and release sunken commitments.' },
      { phase: 'Phase 2 (24h - 48h) Tabula Rasa Cleansing', text: 'Clear physical, emotional, and cognitive space. Do not rush to fill the vacuum.' },
      { phase: 'Phase 3 (48h - 72h) Primordial Rebirth', text: 'Formulate new initial hypotheses from ground zero with unencumbered clarity.' }
    ]
  },
];

const ARTICLES = [
  {
    slug: 'ontology-of-time-crisis-decisions',
    category: 'Philosophy & Methodology',
    title: 'The Ontology of Time: Why Ancient Chinese Horary Systems Outperform Western Chronometry',
    excerpt: 'Comparing linear Chronos with qualitative Kairos to understand how ephemeral coordinates govern structural reality.',
    readTime: '7 min read'
  },
  {
    slug: 'xiao-liu-ren-vs-tarot-timing',
    category: 'Synthesis & Archetypes',
    title: 'Xiao Liu Ren vs. Western Tarot: Bridging Eastern Temporal Mechanics with Jungian Archetypes',
    excerpt: 'An ontological bridge between Western archetypal mirrors and Chinese horary coordinate mechanics.',
    readTime: '6 min read'
  },
  {
    slug: 'horary-divination-psychological-bias',
    category: 'Methodology',
    title: 'What is Horary Divination? Navigating Uncertainty Without Psychological Bias',
    excerpt: 'How the moment of inquiry acts as a holographic snapshot of universal probability fields.',
    readTime: '5 min read'
  },
  {
    slug: 'da-an-great-stability-guide',
    category: 'Palace Decodes',
    title: 'Da An (大安) Decoded: Strategic Preservation Over Aggressive Expansion in Volatile Markets',
    excerpt: 'Deep-dive into the Wood-aligned sovereign state of Da An and its protective Tarot archetypal mirrors.',
    readTime: '5 min read'
  },
  {
    slug: 'surviving-liu-lian-drag',
    category: 'Palace Decodes',
    title: 'Surviving the Drag: How to Master Liu Lian (留连) Periods Without Burning Out',
    excerpt: 'Turning systemic delays and bureaucratic friction into internal operational audits.',
    readTime: '6 min read'
  },
  {
    slug: 'physics-of-velocity-su-xi',
    category: 'Palace Decodes',
    title: 'The Physics of Velocity: Harnessing Su Xi (速喜) for High-Stakes Negotiations',
    excerpt: 'Leveraging high-velocity Fire dynamics to close critical agreements before momentum dissipates.',
    readTime: '4 min read'
  },
  {
    slug: 'navigating-chi-kou-frictions',
    category: 'Palace Decodes',
    title: 'Navigating Toxic Resistance: Tactical Communication Under Chi Kou (赤口) Frictions',
    excerpt: 'Establishing ironclad written perimeters in adversarial, conflict-prone environments.',
    readTime: '5 min read'
  },
  {
    slug: 'art-of-alliance-xiao-ji',
    category: 'Palace Decodes',
    title: 'The Art of Alliance: Scaling Synergies Through Xiao Ji (小吉)',
    excerpt: 'Unlocking mutual resonance and collaborative multi-party frameworks.',
    readTime: '4 min read'
  },
  {
    slug: 'tabula-rasa-kong-wang',
    category: 'Palace Decodes',
    title: 'The Tabula Rasa Effect: Rebuilding from Zero in Kong Wang (空亡) Cycles',
    excerpt: 'Treating total systemic resets and deadweight termination as primordial rebirth.',
    readTime: '6 min read'
  },
  {
    slug: '72-hour-executive-blueprint',
    category: 'Executive Protocols',
    title: 'The 72-Hour Executive Blueprint: Translating Ephemeris Coordinates into Real-World Action',
    excerpt: 'A master guide on turning abstract horary hexagrams into strict 3-day tactical execution phases.',
    readTime: '8 min read'
  },
];

function OracleHomeContent() {
  const searchParams = useSearchParams();
  const paymentIdFromUrl = searchParams.get('payment_id') || searchParams.get('paymentId');

  const [time, setTime] = useState({ timeStr: '', dateStr: '', palaceIdx: 0 });
  const [question, setQuestion] = useState('');
  const [isCasting, setIsCasting] = useState(false);
  const [castStep, setCastStep] = useState('');
  const [isVerifiedPaid, setIsVerifiedPaid] = useState(false);
  const [checkingPayment, setCheckingPayment] = useState(false);
  const [manualPaymentId, setManualPaymentId] = useState('');
  
  const [castResult, setCastResult] = useState<{
    question: string;
    monthPalace: typeof PALACES[0];
    dayPalace: typeof PALACES[0];
    hourPalace: typeof PALACES[0];
    timestamp: string;
  } | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const mIdx = (now.getMonth() + 1) % 6;
      const dIdx = (mIdx + now.getDate() - 1) % 6;
      const hIdx = (dIdx + Math.floor((now.getHours() + 1) / 2)) % 6;
      
      setTime({
        timeStr: now.toLocaleTimeString('en-US', { hour12: false }),
        dateStr: now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }),
        palaceIdx: hIdx,
      });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const verifyPayment = async (pId: string) => {
    if (!pId) return;
    setCheckingPayment(true);
    try {
      const res = await fetch(`/api/verify?payment_id=${pId}`);
      const data = await res.json();
      if (data.valid) {
        setIsVerifiedPaid(true);
        localStorage.setItem('esoteric_is_paid', 'true');
        alert('🎉 Payment verified successfully! Your 4-page blueprint is unlocked.');
      } else {
        alert('❌ Payment not found or not completed yet. Please check your Payment ID.');
      }
    } catch (e) {
      console.error('Verification error:', e);
      alert('Verification failed, please try again.');
    } finally {
      setCheckingPayment(false);
    }
  };

  useEffect(() => {
    localStorage.removeItem('last_user_cast');
    const alreadyPaid = localStorage.getItem('esoteric_is_paid');
    if (alreadyPaid === 'true') {
      setIsVerifiedPaid(true);
    }
    if (paymentIdFromUrl) {
      verifyPayment(paymentIdFromUrl);
    }
  }, [paymentIdFromUrl]);

  const handleCast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsCasting(true);
    setCastStep('Aligning celestial ephemeris coordinates...');

    setTimeout(() => {
      setCastStep('Projecting Xiao Liu Ren temporal vectors...');
    }, 700);

    setTimeout(() => {
      setCastStep('Synthesizing Jungian archetypal resonance...');
    }, 1400);

    setTimeout(() => {
      const now = new Date();
      const mIdx = (now.getMonth() + 1) % 6;
      const dIdx = (mIdx + now.getDate() - 1) % 6;
      const hIdx = (dIdx + Math.floor((now.getHours() + 1) / 2)) % 6;
      
      const newResult = {
        question,
        monthPalace: PALACES[mIdx],
        dayPalace: PALACES[dIdx],
        hourPalace: PALACES[hIdx],
        timestamp: now.toUTCString(),
      };

      setCastResult(newResult);
      setIsCasting(false);
      setCastStep('');
    }, 2100);
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div style={{ 
      maxWidth: '960px', 
      margin: '0 auto', 
      padding: '2rem 1.5rem 4rem 1.5rem', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '3rem',
      backgroundColor: '#0E0E14',
      minHeight: '100vh',
      color: '#E8E4DA',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      {/* 赛博神秘学动态光效与星尘背景 */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 50% 15%, rgba(201, 162, 39, 0.07) 0%, rgba(14, 14, 20, 0.95) 70%), linear-gradient(to bottom, #0E0E14, #08080C)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* 动态扫描线视觉特效 */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))',
        backgroundSize: '100% 3px, 6px 100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.4
      }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: A4 portrait; margin: 0; }
          body, html { 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important; 
            background-color: #0E0E14 !important; 
            color: #E8E4DA !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .no-print, header, nav, footer, button, a { display: none !important; }
          .print-area { 
            display: block !important; 
            background-color: #0E0E14 !important; 
            color: #E8E4DA !important; 
            border: none !important; 
            box-shadow: none !important; 
            padding: 20mm !important;
            margin: 0 !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .pdf-page { 
            page-break-before: always; 
            min-height: 250mm; 
            display: flex; 
            flex-direction: column; 
            justify-content: center;
          }
          .pdf-page:first-of-type { page-break-before: avoid; }
          .print-card { 
            background-color: #15131F !important; 
            border: 1px solid #C9A227 !important; 
            box-shadow: 0 0 15px rgba(201, 162, 39, 0.15) !important;
            page-break-inside: avoid; 
          }
        }
        @keyframes magicalGlow {
          0% { box-shadow: 0 0 25px rgba(201, 162, 39, 0.15), inset 0 0 15px rgba(201, 162, 39, 0.05); border-color: rgba(201, 162, 39, 0.3); }
          50% { box-shadow: 0 0 50px rgba(201, 162, 39, 0.35), inset 0 0 30px rgba(201, 162, 39, 0.12); border-color: rgba(201, 162, 39, 0.7); }
          100% { box-shadow: 0 0 25px rgba(201, 162, 39, 0.15), inset 0 0 15px rgba(201, 162, 39, 0.05); border-color: rgba(201, 162, 39, 0.3); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .cyber-glow-box {
          animation: magicalGlow 5s infinite ease-in-out;
        }
        .spinning-sigil {
          animation: spinSlow 20s linear infinite;
        }
      `}} />

      {/* 顶部导航栏 */}
      <nav className="no-print" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(201, 162, 39, 0.25)',
        paddingBottom: '1rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ color: '#C9A227', fontSize: '1.2rem', textShadow: '0 0 10px #C9A227' }}>✦</span>
          <span style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', letterSpacing: '0.08em', color: '#F4EEDB', fontSize: '1.15rem' }}>
            ESOTERIC PATHS
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', fontFamily: 'monospace' }}>
          <a href="#" style={{ color: '#C9A227', textDecoration: 'none', textShadow: '0 0 8px rgba(201,162,39,0.4)' }}>• Oracle Engine</a>
          <a href="#knowledge-base" style={{ color: '#8A8678', textDecoration: 'none' }}>Knowledge Base</a>
        </div>
      </nav>

      <header className="no-print" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.25em', color: '#C9A227', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem', fontFamily: 'monospace' }}>
          Deterministic Horary Oracle • Xiao Liu Ren × Tarot
        </span>
        <h1 style={{ fontSize: '2.8rem', color: '#F4EEDB', margin: '0 0 0.5rem 0', fontFamily: 'Georgia, serif', letterSpacing: '0.08em', textShadow: '0 0 35px rgba(201, 162, 39, 0.3)' }}>
          TEMPORAL STRATEGY MATRIX
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#8A8678', lineHeight: '1.6', margin: '0 auto', maxWidth: '620px' }}>
          Align your critical crossroads decisions with classical Chinese temporal mechanics and Western archetypal wisdom.
        </p>
      </header>

      {/* 带有赛博魔法呼吸灯效的宇宙时钟 */}
      <section className="no-print cyber-glow-box" style={{
        backgroundColor: '#13111C',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', textTransform: 'uppercase', letterSpacing: '0.3em', fontFamily: 'monospace', display: 'block', marginBottom: '0.5rem' }}>
          • Live Alchemical Ephemeris Flux •
        </span>

        <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#F4EEDB', fontFamily: 'monospace', letterSpacing: '0.08em', textShadow: '0 0 25px rgba(201, 162, 39, 0.5)', margin: '0.4rem 0' }}>
          {time.timeStr || '12:00:00'}
        </div>

        <div style={{ fontSize: '0.85rem', color: '#8A8678', fontFamily: 'monospace', marginBottom: '2rem' }}>
          {time.dateStr || 'Synchronizing Cosmic Coordinates...'}
        </div>

        {/* 六宫轮盘 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem', marginTop: '1rem' }}>
          {PALACES.map((p, idx) => {
            const isActive = time.palaceIdx === idx;
            return (
              <div
                key={p.id}
                style={{
                  padding: '1.1rem 0.5rem',
                  borderRadius: '12px',
                  backgroundColor: isActive ? 'rgba(201, 162, 39, 0.25)' : '#09090C',
                  border: isActive ? '1px solid #C9A227' : '1px solid rgba(201, 162, 39, 0.15)',
                  boxShadow: isActive ? '0 0 25px rgba(201, 162, 39, 0.4)' : 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                {isActive && (
                  <span style={{ position: 'absolute', top: '-5px', right: '-5px', width: '10px', height: '10px', backgroundColor: '#C9A227', borderRadius: '50%', boxShadow: '0 0 10px #C9A227' }} />
                )}
                <div style={{ fontSize: '1.2rem', color: isActive ? '#C9A227' : '#5C584E', marginBottom: '0.2rem', textShadow: isActive ? '0 0 10px #C9A227' : 'none' }}>
                  {p.symbol}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: isActive ? '#F4EEDB' : '#8A8678', fontFamily: 'Georgia, serif' }}>
                  {p.name.split(' ')[0]}
                </div>
                <div style={{ fontSize: '0.65rem', color: isActive ? '#C9A227' : '#5C584E', fontFamily: 'monospace', marginTop: '0.3rem' }}>
                  {isActive ? '● Active Vector' : p.wuxing.split(' ')[0]}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 起盘与蓝图区域 */}
      <section className="print-area" style={{ 
        backgroundColor: '#13111C', 
        border: '1px solid rgba(201, 162, 39, 0.4)', 
        borderRadius: '20px', 
        padding: '2.2rem', 
        boxShadow: '0 15px 40px rgba(0,0,0,0.7)', 
        position: 'relative', 
        zIndex: 2 
      }}>
        
        <form onSubmit={handleCast} className="no-print" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#C9A227', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem', fontFamily: 'monospace' }}>
              Inquire Your Decision / Timing Crossroads
            </label>
            <input
              type="text"
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g., Should I execute the contract renegotiation this week?"
              style={{ width: '100%', padding: '1.1rem', backgroundColor: '#09090C', border: '1px solid rgba(201, 162, 39, 0.3)', borderRadius: '10px', color: '#E8E4DA', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            disabled={isCasting}
            style={{ width: '100%', padding: '1.2rem', backgroundColor: '#C9A227', color: '#09090C', fontWeight: 'bold', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.12em', borderRadius: '10px', border: 'none', cursor: 'pointer', opacity: isCasting ? 0.75 : 1, boxShadow: '0 0 25px rgba(201,162,39,0.3)', transition: 'all 0.3s' }}
          >
            {isCasting ? (
              <span style={{ fontFamily: 'monospace', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
                <span className="spinning-sigil" style={{ display: 'inline-block', color: '#09090C', fontSize: '1.1rem' }}>✦</span> {castStep}
              </span>
            ) : 'Cast Horary Oracle →'}
          </button>
        </form>

        {castResult && (
          <div style={{ marginTop: '2rem', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid rgba(201, 162, 39, 0.25)', paddingBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  EPHEMERIS COORDINATE LOCKED • {castResult.timestamp}
                </span>
                <h2 style={{ fontSize: '1.6rem', color: '#F4EEDB', margin: '0.35rem 0 0 0', fontFamily: 'Georgia, serif' }}>
                  Query: "{castResult.question}"
                </h2>
              </div>
              {isVerifiedPaid && (
                <button
                  onClick={handlePrintPDF}
                  style={{ padding: '0.85rem 1.75rem', backgroundColor: '#C9A227', color: '#09090C', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer', boxShadow: '0 0 20px rgba(201, 162, 39, 0.5)' }}
                >
                  📥 Export 4-Page Executive PDF
                </button>
              )}
            </div>

            <div className="pdf-page">
              <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.15em' }}>PAGE 01 / 04</span>
              <h3 style={{ fontSize: '1.5rem', color: '#F4EEDB', fontFamily: 'Georgia, serif', margin: '0.25rem 0 1.5rem 0' }}>
                Three-Palace Trajectory (三宫全息向量)
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#09090C', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.3)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>MONTH PALACE (Macro Origin)</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{castResult.monthPalace.symbol} {castResult.monthPalace.name} ({castResult.monthPalace.wuxing})</h4>
                  <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>{castResult.monthPalace.macroAudit}</p>
                </div>

                <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#09090C', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.3)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>DAY PALACE (Current Pivot)</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{castResult.dayPalace.symbol} {castResult.dayPalace.name} ({castResult.dayPalace.wuxing})</h4>
                  <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>{castResult.dayPalace.meaning}</p>
                </div>

                <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#09090C', borderRadius: '12px', border: '1px solid #C9A227', boxShadow: '0 0 15px rgba(201,162,39,0.1)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', fontWeight: 'bold' }}>HOUR PALACE (Decisive Vector)</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{castResult.hourPalace.symbol} {castResult.hourPalace.name} ({castResult.hourPalace.wuxing})</h4>
                  <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>{castResult.hourPalace.meaning}</p>
                </div>
              </div>
            </div>

            {isVerifiedPaid ? (
              <>
                <div className="pdf-page">
                  <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.15em' }}>PAGE 02 / 04</span>
                  <h3 style={{ fontSize: '1.5rem', color: '#F4EEDB', fontFamily: 'Georgia, serif', margin: '0.25rem 0 1.5rem 0' }}>
                    72-Hour Chrono-Hourglass Action Plan (72小时时间沙漏执行规程)
                  </h3>

                  <div className="print-card" style={{ backgroundColor: '#09090C', border: '1px solid rgba(201, 162, 39, 0.35)', borderRadius: '14px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {castResult.hourPalace.chronoPlan.map((step, idx) => (
                      <div key={idx} style={{ borderLeft: '3px solid #C9A227', paddingLeft: '1.25rem' }}>
                        <h4 style={{ color: '#F4EEDB', fontSize: '1.05rem', margin: '0 0 0.4rem 0', fontFamily: 'Georgia, serif' }}>{step.phase}</h4>
                        <p style={{ color: '#CDC8BC', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pdf-page">
                  <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.15em' }}>PAGE 03 / 04</span>
                  <h3 style={{ fontSize: '1.5rem', color: '#F4EEDB', fontFamily: 'Georgia, serif', margin: '0.25rem 0 1.5rem 0' }}>
                    Five-Dimensional Qi Dynamics & Resonant Vectors (五维能量共振矩阵)
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#09090C', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.25)' }}>
                      <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>ELEMENTAL ATTUNEMENT</span>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{castResult.hourPalace.wuxing}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>Governing energetic flux.</p>
                    </div>

                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#09090C', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.25)' }}>
                      <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>RESONANT COLOR</span>
                      <h4 style={{ color: '#C9A227', fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{castResult.hourPalace.elementColor}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>Optimal grounding tone.</p>
                    </div>

                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#09090C', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.25)' }}>
                      <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>NUMEROLOGICAL KEY</span>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{castResult.hourPalace.luckyNumbers}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>Harmonic quantitative coordinate.</p>
                    </div>

                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#09090C', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.25)' }}>
                      <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>CARDINAL VECTOR</span>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{castResult.hourPalace.luckyDirection}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>Spatial alignment axis.</p>
                    </div>
                  </div>
                </div>

                <div className="pdf-page">
                  <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.15em' }}>PAGE 04 / 04</span>
                  <h3 style={{ fontSize: '1.5rem', color: '#F4EEDB', fontFamily: 'Georgia, serif', margin: '0.25rem 0 1.5rem 0' }}>
                    Major Arcana Synthesis & Executive Guardrails (塔罗大阿卡纳守护与执行红线)
                  </h3>

                  <div className="print-card" style={{ backgroundColor: '#09090C', border: '1px solid #C9A227', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace' }}>ARCHETYPAL MIRROR:</span>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.3rem', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>
                        {castResult.hourPalace.tarot}
                      </h4>
                      <p style={{ color: '#CDC8BC', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>
                        {castResult.hourPalace.advice}
                      </p>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(201, 162, 39, 0.25)', paddingTop: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#EF4444', fontFamily: 'monospace', fontWeight: 'bold' }}>EXECUTIVE RED LINE (绝对禁忌):</span>
                      <p style={{ color: '#E8E4DA', fontSize: '0.9rem', margin: '0.3rem 0 0 0', lineHeight: '1.6' }}>
                        Under the current {castResult.hourPalace.name} momentum, avoid committing long-term binding capital on unverified verbal assurances. All commitments must be codified in written contracts.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="no-print" style={{ 
                padding: '2.5rem 1.5rem', 
                backgroundColor: '#191526', 
                borderRadius: '16px', 
                border: '1px solid rgba(201, 162, 39, 0.6)', 
                textAlign: 'center',
                boxShadow: '0 0 40px rgba(201, 162, 39, 0.15), inset 0 0 20px rgba(201, 162, 39, 0.05)',
                backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(201, 162, 39, 0.12) 0%, transparent 70%)'
              }}>
                <span style={{ fontSize: '0.75rem', color: '#C9A227', textTransform: 'uppercase', letterSpacing: '0.25em', display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                  ✦ Executive Strategy Blueprint ($19) ✦
                </span>
                <h3 style={{ fontSize: '1.45rem', color: '#F4EEDB', margin: '0 0 0.5rem 0', fontFamily: 'Georgia, serif' }}>
                  Unlock Full 4-Page Personal Blueprint & 72h Action Plan
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#8A8678', lineHeight: '1.6', margin: '0 auto 1.5rem auto', maxWidth: '520px' }}>
                  Synthesizes your Month, Day, and Hour palaces into a downloadable 4-page PDF with 72-Hour Chrono Execution Windows, Resonant Colors, Numbers, and Archetypal Guardrails.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <a
                    href={DODO_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', padding: '1rem 3rem', backgroundColor: '#C9A227', color: '#09090C', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '8px', boxShadow: '0 0 25px rgba(201,162,39,0.4)', transition: 'all 0.3s' }}
                  >
                    Unlock Master Blueprint ($19) →
                  </a>

                  {/* 核心防丢单恢复区 */}
                  <div style={{ marginTop: '0.8rem', borderTop: '1px solid rgba(201, 162, 39, 0.25)', paddingTop: '1rem', width: '100%', maxWidth: '420px' }}>
                    <p style={{ fontSize: '0.8rem', color: '#8A8678', marginBottom: '0.5rem' }}>
                      Already paid on Dodo? Paste your Payment ID from your email receipt below to unlock:
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input
                        type="text"
                        placeholder="e.g. pay_xxxxxxxx"
                        value={manualPaymentId}
                        onChange={(e) => setManualPaymentId(e.target.value)}
                        style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem', backgroundColor: '#09090C', border: '1px solid rgba(201,162,39,0.35)', color: '#FFF', borderRadius: '6px', outline: 'none' }}
                      />
                      <button
                        onClick={() => verifyPayment(manualPaymentId)}
                        disabled={checkingPayment}
                        style={{ padding: '0.6rem 1rem', backgroundColor: '#252136', color: '#C9A227', border: '1px solid #C9A227', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 'bold', cursor: 'pointer' }}
                      >
                        {checkingPayment ? 'Checking...' : 'Restore'}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        )}

        {/* 底部 10 篇高权重 SEO 文章专栏 */}
        <div id="knowledge-base" className="no-print" style={{ marginTop: '4rem', borderTop: '1px solid rgba(201, 162, 39, 0.25)', paddingTop: '2.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
            • Esoteric Knowledge Base •
          </span>
          <h3 style={{ fontSize: '1.8rem', color: '#F4EEDB', fontFamily: 'Georgia, serif', margin: '0 0 1.5rem 0' }}>
            Strategic Insights & Ephemeris Guides
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {ARTICLES.map((art) => (
              <div key={art.slug} style={{ backgroundColor: '#09090C', border: '1px solid rgba(201, 162, 39, 0.2)', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem', transition: 'border-color 0.3s' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#8A8678', fontFamily: 'monospace' }}>{art.category} • {art.readTime}</span>
                  <h4 style={{ color: '#F4EEDB', fontSize: '1.1rem', margin: '0.4rem 0 0.6rem 0', fontFamily: 'Georgia, serif', lineHeight: '1.4' }}>
                    {art.title}
                  </h4>
                  <p style={{ color: '#CDC8BC', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                    {art.excerpt}
                  </p>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#C9A227', fontFamily: 'monospace', fontWeight: 'bold' }}>
                  Read Article →
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
