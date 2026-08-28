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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr)
