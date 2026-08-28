'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const DODO_CHECKOUT_URL = "https://checkout.dodopayments.com/buy/pdt_0NmINnqaKAXo6oqUU50Jc?quantity=1";

const PALACES = [
  {
    id: 'daan',
    name: 'Da An (大安)',
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

function OracleHomeContent() {
  const searchParams = useSearchParams();
  const paymentIdFromUrl = searchParams.get('payment_id') || searchParams.get('paymentId');

  const [time, setTime] = useState({ timeStr: '', dateStr: '', palaceIdx: 0 });
  const [question, setQuestion] = useState('');
  const [isCasting, setIsCasting] = useState(false);
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
    const saved = localStorage.getItem('last_user_cast');
    if (saved) {
      setCastResult(JSON.parse(saved));
    }
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
      localStorage.setItem('last_user_cast', JSON.stringify(newResult));
      setIsCasting(false);
    }, 600);
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      
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
          .no-print, header, footer, button, a { display: none !important; }
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
      `}} />

      <header className="no-print" style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: '#C9A227', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
          Deterministic Horary Oracle • Xiao Liu Ren × Tarot
        </span>
        <h1 style={{ fontSize: '2.8rem', color: '#F4EEDB', margin: '0 0 0.75rem 0', fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>
          ESOTERIC PATHS
        </h1>
        <p style={{ fontSize: '1rem', color: '#8A8678', lineHeight: '1.6', margin: '0 auto', maxWidth: '600px' }}>
          Align your critical crossroads decisions with classical Chinese temporal mechanics and Western archetypal wisdom.
        </p>
      </header>

      <section className="no-print" style={{
        backgroundColor: '#15131F',
        border: '1px solid rgba(201, 162, 39, 0.4)',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(201, 162, 39, 0.05)',
        textAlign: 'center'
      }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: 'monospace', display: 'block', marginBottom: '0.5rem' }}>
          • Live Temporal Flux •
        </span>

        <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#F4EEDB', fontFamily: 'monospace', letterSpacing: '0.08em', textShadow: '0 0 20px rgba(201, 162, 39, 0.35)', margin: '0.5rem 0' }}>
          {time.timeStr || '12:00:00'}
        </div>

        <div style={{ fontSize: '0.9rem', color: '#8A8678', fontFamily: 'monospace', marginBottom: '2rem' }}>
          {time.dateStr || 'Synchronizing Ephemeris...'}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginTop: '1rem' }}>
          {PALACES.map((p, idx) => {
            const isActive = time.palaceIdx === idx;
            return (
              <div
                key={p.id}
                style={{
                  padding: '1rem 0.5rem',
                  borderRadius: '12px',
                  backgroundColor: isActive ? 'rgba(201, 162, 39, 0.25)' : '#0E0E14',
                  border: isActive ? '1px solid #C9A227' : '1px solid rgba(201, 162, 39, 0.12)',
                  boxShadow: isActive ? '0 0 20px rgba(201, 162, 39, 0.35)' : 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                {isActive && (
                  <span style={{ position: 'absolute', top: '-5px', right: '-5px', width: '10px', height: '10px', backgroundColor: '#C9A227', borderRadius: '50%', boxShadow: '0 0 8px #C9A227' }} />
                )}
                <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: isActive ? '#F4EEDB' : '#8A8678', fontFamily: 'Georgia, serif' }}>
                  {p.name.split(' ')[0]}
                </div>
                <div style={{ fontSize: '0.75rem', color: isActive ? '#C9A227' : '#5C584E', fontFamily: 'monospace', marginTop: '0.3rem' }}>
                  {isActive ? '● Active' : p.wuxing.split(' ')[0]}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="print-area" style={{ backgroundColor: '#15131F', border: '1px solid rgba(201, 162, 39, 0.35)', borderRadius: '20px', padding: '2rem', boxShadow: '0 12px 35px rgba(0,0,0,0.5)' }}>
        
        <form onSubmit={handleCast} className="no-print" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#C9A227', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem', fontFamily: 'monospace' }}>
              Inquire Your Decision / Timing Crossroads
            </label>
            <input
              type="text"
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g., Should I execute the contract renegotiation this week?"
              style={{ width: '100%', padding: '1rem', backgroundColor: '#0E0E14', border: '1px solid rgba(201, 162, 39, 0.25)', borderRadius: '10px', color: '#E8E4DA', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            disabled={isCasting}
            style={{ width: '100%', padding: '1rem', backgroundColor: '#C9A227', color: '#0E0E14', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '10px', border: 'none', cursor: 'pointer', opacity: isCasting ? 0.6 : 1 }}
          >
            {isCasting ? 'Calculating Temporal Hexagram...' : 'Cast Horary Oracle →'}
          </button>
        </form>

        {castResult && (
          <div style={{ marginTop: '2rem', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid rgba(201, 162, 39, 0.2)', paddingBottom: '1.25rem' }}>
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
                  style={{ padding: '0.85rem 1.75rem', backgroundColor: '#C9A227', color: '#0E0E14', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer', boxShadow: '0 0 15px rgba(201, 162, 39, 0.4)' }}
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
                <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#0E0E14', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.25)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>MONTH PALACE (Macro Origin)</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{castResult.monthPalace.name} ({castResult.monthPalace.wuxing})</h4>
                  <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>{castResult.monthPalace.macroAudit}</p>
                </div>

                <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#0E0E14', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.25)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>DAY PALACE (Current Pivot)</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{castResult.dayPalace.name} ({castResult.dayPalace.wuxing})</h4>
                  <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>{castResult.dayPalace.meaning}</p>
                </div>

                <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#0E0E14', borderRadius: '12px', border: '1px solid #C9A227' }}>
                  <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', fontWeight: 'bold' }}>HOUR PALACE (Decisive Vector)</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{castResult.hourPalace.name} ({castResult.hourPalace.wuxing})</h4>
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

                  <div className="print-card" style={{ backgroundColor: '#0E0E14', border: '1px solid rgba(201, 162, 39, 0.3)', borderRadius: '14px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#0E0E14', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
                      <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>ELEMENTAL ATTUNEMENT</span>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{castResult.hourPalace.wuxing}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>Governing energetic flux.</p>
                    </div>

                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#0E0E14', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
                      <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>RESONANT COLOR</span>
                      <h4 style={{ color: '#C9A227', fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{castResult.hourPalace.elementColor}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>Optimal grounding tone.</p>
                    </div>

                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#0E0E14', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
                      <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>NUMEROLOGICAL KEY</span>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{castResult.hourPalace.luckyNumbers}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>Harmonic quantitative coordinate.</p>
                    </div>

                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#0E0E14', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
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

                  <div className="print-card" style={{ backgroundColor: '#0E0E14', border: '1px solid #C9A227', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace' }}>ARCHETYPAL MIRROR:</span>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.3rem', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>
                        {castResult.hourPalace.tarot}
                      </h4>
                      <p style={{ color: '#CDC8BC', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>
                        {castResult.hourPalace.advice}
                      </p>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(201, 162, 39, 0.2)', paddingTop: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#EF4444', fontFamily: 'monospace', fontWeight: 'bold' }}>EXECUTIVE RED LINE (绝对禁忌):</span>
                      <p style={{ color: '#E8E4DA', fontSize: '0.9rem', margin: '0.3rem 0 0 0', lineHeight: '1.6' }}>
                        Under the current {castResult.hourPalace.name} momentum, avoid committing long-term binding capital on unverified verbal assurances. All commitments must be codified in written contracts.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="no-print" style={{ padding: '2.5rem 1.5rem', backgroundColor: '#1A1730', borderRadius: '16px', border: '1px solid rgba(201, 162, 39, 0.4)', textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#C9A227', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                  Executive Strategy Blueprint ($19)
                </span>
                <h3 style={{ fontSize: '1.4rem', color: '#F4EEDB', margin: '0 0 0.5rem 0', fontFamily: 'Georgia, serif' }}>
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
                    style={{ display: 'inline-block', padding: '0.9rem 2.5rem', backgroundColor: '#C9A227', color: '#0E0E14', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '8px' }}
                  >
                    Unlock Master Blueprint ($19) →
                  </a>

                  {/* 核心防丢单恢复区 */}
                  <div style={{ marginTop: '0.8rem', borderTop: '1px solid rgba(201, 162, 39, 0.2)', paddingTop: '1rem', width: '100%', maxWidth: '420px' }}>
                    <p style={{ fontSize: '0.8rem', color: '#8A8678', marginBottom: '0.5rem' }}>
                      Already paid on Dodo? Paste your Payment ID from your email receipt below to unlock:
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input
                        type="text"
                        placeholder="e.g. pay_xxxxxxxx"
                        value={manualPaymentId}
                        onChange={(e) => setManualPaymentId(e.target.value)}
                        style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem', backgroundColor: '#0E0E14', border: '1px solid rgba(201,162,39,0.3)', color: '#FFF', borderRadius: '6px', outline: 'none' }}
                      />
                      <button
                        onClick={() => verifyPayment(manualPaymentId)}
                        disabled={checkingPayment}
                        style={{ padding: '0.6rem 1rem', backgroundColor: '#332E48', color: '#C9A227', border: '1px solid #C9A227', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 'bold', cursor: 'pointer' }}
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
      </section>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#C9A227', fontFamily: 'monospace' }}>Synchronizing Ephemeris...</div>}>
      <OracleHomeContent />
    </Suspense>
  );
}
