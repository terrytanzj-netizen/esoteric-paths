'use client';

import React, { useState, useEffect } from 'react';

const DODO_CHECKOUT_URL = "https://checkout.dodopayments.com/buy/pdt_0NmINnqaKAXo6oqUU50Jc?quantity=1&redirect_url=https://www.esotericpaths.com%2F";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyeyykdv";

const PALACES = [
  { id: 'daan', name: 'Da An (大安)', symbol: '☩', wuxing: 'Wood (木)', desc: 'Grounded, safe, and favors steady preservation over aggressive expansion. Temporal momentum is structurally stable.', advice: 'Consolidate current resources. Hold strategic ground and avoid impulsive risks.' },
  { id: 'liulian', name: 'Liu Lian (留连)', symbol: '☿', wuxing: 'Water (水)', desc: 'Energy is dragged or sticky. Things are delayed; forcing external action creates friction. Reflect, audit, and wait.', advice: 'Use this time for auditing and internal adjustments. Do not force progress.' },
  { id: 'suxi', name: 'Su Xi (速喜)', symbol: '☉', wuxing: 'Fire (火)', desc: 'Swift breakthroughs and unexpected positive catalysts. High execution velocity.', advice: 'Strike while the iron is hot. Advance your key initiatives immediately.' },
  { id: 'chikou', name: 'Chi Kou (赤口)', symbol: '☌', wuxing: 'Metal (金)', desc: 'Sharp misunderstandings, vocal disputes, or structural pushback from counterparties.', advice: 'Maintain written records. Avoid verbal arguments and reinforce security.' },
  { id: 'xiaoji', name: 'Xiao Ji (小吉)', symbol: '♃', wuxing: 'Water (水)', desc: 'Cooperative progress, mutual benefit, and harmony achieved through partnerships.', advice: 'Engage in collaborative discussions and relationship building.' },
  { id: 'kongwang', name: 'Kong Wang (空亡)', symbol: '♄', wuxing: 'Earth (土)', desc: 'Dissolution of expectations, lost causes, or a complete cycle system reset.', advice: 'Let go of obsolete assumptions. Treat this as a clean-slate reboot.' },
];

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

const ARTICLES = [
  { title: 'Should I Accept the Job Offer Now or Wait?', readTime: '8 min read' },
  { title: 'The Ontology of Time: Ancient Horary vs Western Chronometry', readTime: '7 min read' },
  { title: 'Xiao Liu Ren vs. Western Tarot Archetypes', readTime: '6 min read' },
  { title: 'Da An Decoded: Strategic Preservation in Volatile Markets', readTime: '5 min read' },
];

export default function Page() {
  const [time, setTime] = useState({ timeStr: '', palaceIdx: 0 });
  const [question, setQuestion] = useState('');
  const [isCasting, setIsCasting] = useState(false);
  const [isVerifiedPaid, setIsVerifiedPaid] = useState(false);
  const [manualPaymentId, setManualPaymentId] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [copiedTwitter, setCopiedTwitter] = useState(false);
  const [castResult, setCastResult] = useState<any>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const mIdx = (now.getMonth() + 1) % 6;
      const dIdx = (mIdx + now.getDate() - 1) % 6;
      const hIdx = (dIdx + Math.floor((now.getHours() + 1) / 2)) % 6;
      setTime({ timeStr: now.toLocaleTimeString('en-US', { hour12: false }), palaceIdx: hIdx });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('last_user_cast');
    if (saved) {
      try { setCastResult(JSON.parse(saved)); } catch (e) {}
    }
    const alreadyPaid = localStorage.getItem('esoteric_is_paid');
    if (alreadyPaid === 'true') {
      setIsVerifiedPaid(true);
    }
    
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');
    const pId = params.get('payment_id') || params.get('paymentId');
    
    if (status === 'succeeded' || pId) {
      setIsVerifiedPaid(true);
      localStorage.setItem('esoteric_is_paid', 'true');
      
      if (!saved) {
        const now = new Date();
        const mIdx = (now.getMonth() + 1) % 6;
        const dIdx = (mIdx + now.getDate() - 1) % 6;
        const hIdx = (dIdx + Math.floor((now.getHours() + 1) / 2)) % 6;
        const autoResult = {
          question: "Strategic Executive Decision Analysis",
          month: PALACES[mIdx],
          day: PALACES[dIdx],
          hour: PALACES[hIdx],
          time: now.toUTCString(),
        };
        setCastResult(autoResult);
        localStorage.setItem('last_user_cast', JSON.stringify(autoResult));
      }
    }
  }, []);

  const verifyPayment = async (pId: string) => {
    if (!pId) return;
    try {
      const res = await fetch(`/api/verify?payment_id=${pId}`);
      const data = await res.json();
      if (data.valid) {
        setIsVerifiedPaid(true);
        localStorage.setItem('esoteric_is_paid', 'true');
        alert('🎉 Verified! Full 4-page blueprint is unlocked.');
      } else {
        alert('❌ Payment not found.');
      }
    } catch (e) {
      console.error('Payment verification failed:', e);
    }
  };

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
        month: PALACES[mIdx],
        day: PALACES[dIdx],
        hour: PALACES[hIdx],
        time: now.toUTCString(),
      };
      setCastResult(newResult);
      localStorage.setItem('last_user_cast', JSON.stringify(newResult));
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
    if (!castResult) return;
    const tweetText = `My tactical decision vector via @EsotericPaths:\nQuery: "${castResult.question}"\nMonth: ${castResult.month.name} | Day: ${castResult.day.name} | Hour: ${castResult.hour.name}\n\nAligning micro-moments with macro ephemeris. 🜔 esotericpaths.com`;
    navigator.clipboard.writeText(tweetText);
    setCopiedTwitter(true);
    setTimeout(() => setCopiedTwitter(false), 3000);
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem 4rem 1.5rem', background: '#050508', minHeight: '100vh', color: '#E8E4DA', fontFamily: 'system-ui, sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
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

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: A4 portrait; margin: 0; }
          body, html { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background-color: #050508 !important; color: #E8E4DA !important; margin: 0 !important; padding: 0 !important; }
          .no-print, header, nav, footer, button, a { display: none !important; }
          .print-area { display: block !important; background-color: #050508 !important; color: #E8E4DA !important; padding: 20mm !important; width: 100% !important; box-sizing: border-box !important; }
          .pdf-page { page-break-before: always; min-height: 250mm; display: flex; flex-direction: column; justify-content: center; }
          .pdf-page:first-of-type { page-break-before: avoid; }
          .print-card { background-color: #0A0A0F !important; border: 1px solid #C9A227 !important; page-break-inside: avoid; }
        }
        @keyframes twinkle { 0%, 100% { opacity: 0.2; transform: scale(0.8); } 50% { opacity: 0.95; transform: scale(1.4); filter: drop-shadow(0 0 6px #C9A227); } }
        @keyframes magicalGlow { 0% { box-shadow: 0 0 25px rgba(201, 162, 39, 0.12); border-color: rgba(201, 162, 39, 0.25); } 50% { box-shadow: 0 0 45px rgba(201, 162, 39, 0.3); border-color: rgba(201, 162, 39, 0.5); } 100% { box-shadow: 0 0 25px rgba(201, 162, 39, 0.12); border-color: rgba(201, 162, 39, 0.25); } }
        @keyframes spinCompass { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        .bling-star { position: absolute; background-color: #F4EEDB; border-radius: 50%; animation: twinkle 5s infinite ease-in-out; }
        .cyber-glow-box { animation: magicalGlow 6s infinite ease-in-out; }
        .spinning-compass { animation: spinCompass 120s linear infinite; }
      `}} />

      <nav className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(201,162,39,0.2)', paddingBottom: '1rem', marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
        <span style={{ color: '#C9A227', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '1.15rem', textShadow: '0 0 10px #C9A227' }}>✦ ESOTERIC PATHS</span>
        <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.8rem', fontFamily: 'monospace', color: '#8A8678' }}>
          <a href="#" style={{ color: '#C9A227', textDecoration: 'none' }}>Oracle</a>
          <a href="#elements" style={{ color: 'inherit', textDecoration: 'none' }}>Matrix</a>
          <a href="#blueprint" style={{ color: 'inherit', textDecoration: 'none' }}>Blueprint</a>
          <a href="#insights" style={{ color: 'inherit', textDecoration: 'none' }}>Insights</a>
          <a href="#support" style={{ color: 'inherit', textDecoration: 'none' }}>Support</a>
        </div>
      </nav>

      <header className="no-print" style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: 'monospace' }}>Xiao Liu Ren × Tarot Matrix</span>
        <h1 style={{ fontSize: '2.8rem', fontFamily: 'Georgia, serif', color: '#F4EEDB', margin: '0.4rem 0', textShadow: '0 0 30px rgba(201, 162, 39, 0.2)' }}>TEMPORAL STRATEGY MATRIX</h1>
        <p style={{ fontSize: '0.95rem', color: '#8A8678', maxWidth: '600px', margin: '0 auto' }}>Align critical decisions with classical temporal mechanics and Western archetypal wisdom.</p>
      </header>

      <div className="no-print cyber-glow-box" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.3)', borderRadius: '20px', padding: '2.2rem', textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', letterSpacing: '0.2em' }}>• LIVE ALCHEMICAL EPHEMERIS FLUX •</span>
        <div style={{ fontSize: '3.5rem', fontWeight: 'bold', fontFamily: 'monospace', color: '#F4EEDB', textShadow: '0 0 25px rgba(201,162,39,0.4)', margin: '0.4rem 0' }}>{time.timeStr || '12:00:00'}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.6rem', marginTop: '1.5rem' }}>
          {PALACES.map((p, idx) => {
            const active = time.palaceIdx === idx;
            return (
              <div key={p.id} style={{ padding: '0.9rem 0.4rem', background: active ? 'rgba(201,162,39,0.2)' : '#050508', border: active ? '1px solid #C9A227' : '1px solid rgba(201,162,39,0.1)', borderRadius: '10px' }}>
                <div style={{ color: active ? '#C9A227' : '#5C584E', fontSize: '1.1rem' }}>{p.symbol}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: active ? '#F4EEDB' : '#8A8678', fontFamily: 'Georgia, serif' }}>{p.name.split(' ')[0]}</div>
              </div>
            );
          })}
        </div>
      </div>

      <section id="elements" className="no-print" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '20px', padding: '2rem', marginBottom: '2rem', position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '0.4rem' }}>• Hermetic & Eastern Synthesis •</span>
        <h3 style={{ fontSize: '1.6rem', color: '#F4EEDB', fontFamily: 'Georgia, serif', margin: '0 0 1.5rem 0' }}>The Elemental & Wu Xing Architecture</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', textAlign: 'left' }}>
          <div style={{ background: '#050508', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(201,162,39,0.15)' }}>
            <span style={{ fontSize: '0.7rem', color: '#C9A227', fontFamily: 'monospace', display: 'block', marginBottom: '0.4rem' }}>WESTERN HERMETIC ELEMENTS</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', fontSize: '0.8rem', color: '#CDC8BC', fontFamily: 'monospace' }}>
              <div>🜂 Fire (Ignis)</div><div>🜄 Water (Aqua)</div><div>🜁 Air (Aer)</div><div>🜃 Earth (Terra)</div>
            </div>
          </div>
          <div style={{ background: '#050508', padding: '1.0rem', borderRadius: '10px', border: '1px solid rgba(201,162,39,0.15)' }}>
            <span style={{ fontSize: '0.7rem', color: '#C9A227', fontFamily: 'monospace', display: 'block', marginBottom: '0.4rem' }}>EASTERN WU XING MATRIX</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', fontSize: '0.8rem', color: '#CDC8BC', fontFamily: 'monospace' }}>
              <div>木 Wood</div><div>火 Fire</div><div>土 Earth</div><div>金 Metal</div><div style={{ gridColumn: 'span 2' }}>水 Water</div>
            </div>
          </div>
        </div>
      </section>

      <div className="print-area" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.3)', borderRadius: '20px', padding: '2.2rem', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <form onSubmit={handleCast} className="no-print" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label style={{ fontSize: '0.8rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase' }}>Inquire Your Decision Crossroads</label>
          <input type="text" required value={question} onChange={e => setQuestion(e.target.value)} placeholder="e.g., Should I execute the contract renegotiation this week?" style={{ padding: '1rem', background: '#050508', border: '1px solid rgba(201,162,39,0.3)', color: '#FFF', borderRadius: '8px', outline: 'none' }} />
          <button type="submit" style={{ padding: '1.1rem', background: '#C9A227', color: '#050508', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '8px', border: 'none', cursor: 'pointer', boxShadow: '0 0 20px rgba(201,162,39,0.3)' }}>
            Cast Horary Oracle →
          </button>
        </form>

        {castResult && (
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid rgba(201, 162, 39, 0.2)', paddingBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase' }}>EPHEMERIS COORDINATE LOCKED • {castResult.time}</span>
                <h2 style={{ fontSize: '1.6rem', color: '#F4EEDB', margin: '0.35rem 0 0 0', fontFamily: 'Georgia, serif' }}>Query: "{castResult.question}"</h2>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <button onClick={handleShareTwitter} style={{ padding: '0.85rem 1.25rem', backgroundColor: '#121118', color: '#C9A227', border: '1px solid rgba(201,162,39,0.3)', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'monospace' }}>
                  {copiedTwitter ? '✓ Copied Sigil for X!' : '🜔 Share on X'}
                </button>
                {isVerifiedPaid && (
                  <button onClick={handlePrintPDF} style={{ padding: '0.85rem 1.75rem', backgroundColor: '#C9A227', color: '#050508', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer', boxShadow: '0 0 15px rgba(201, 162, 39, 0.4)' }}>
                    📥 Export 4-Page Executive PDF
                  </button>
                )}
              </div>
            </div>

            {/* 免费预览的 三宫全息向量 */}
            <div className="pdf-page">
              <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.15em' }}>PAGE 01 / 04</span>
              <h3 style={{ fontSize: '1.5rem', color: '#F4EEDB', fontFamily: 'Georgia, serif', margin: '0.25rem 0 1.5rem 0' }}>Three-Palace Trajectory (三宫全息向量)</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>MONTH PALACE (Macro Origin)</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{castResult.month.symbol} {castResult.month.name} ({castResult.month.wuxing})</h4>
                  <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>{castResult.month.desc}</p>
                </div>
                <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>DAY PALACE (Current Pivot)</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{castResult.day.symbol} {castResult.day.name} ({castResult.day.wuxing})</h4>
                  <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>{castResult.day.desc}</p>
                </div>
                <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px solid #C9A227' }}>
                  <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', fontWeight: 'bold' }}>HOUR PALACE (Decisive Vector)</span>
                  <h4 style={{ fontSize: '1.2rem', color: '#F4EEDB', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{castResult.hour.symbol} {castResult.hour.name} ({castResult.hour.wuxing})</h4>
                  <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>{castResult.hour.desc}</p>
                </div>
              </div>
            </div>

            {/* 已支付解锁后的后 3 页报告内容 */}
            {isVerifiedPaid ? (
              <>
                <div className="pdf-page">
                  <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase' }}>PAGE 02 / 04</span>
                  <h3 style={{ fontSize: '1.5rem', color: '#F4EEDB', fontFamily: 'Georgia, serif', margin: '0.25rem 0 1.5rem 0' }}>72-Hour Chrono-Hourglass Action Plan (72小时时间沙漏执行规程)</h3>
                  <div className="print-card" style={{ backgroundColor: '#050508', border: '1px solid rgba(201, 162, 39, 0.3)', borderRadius: '14px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {castResult.hour.advice ? (
                      <div style={{ borderLeft: '3px solid #C9A227', paddingLeft: '1.25rem' }}>
                        <h4 style={{ color: '#F4EEDB', fontSize: '1.05rem', margin: '0 0 0.4rem 0', fontFamily: 'Georgia, serif' }}>Strategic Vector Guidance</h4>
                        <p style={{ color: '#CDC8BC', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>{castResult.hour.advice}</p>
                      </div>
                    ) : null}
                    <div style={{ borderLeft: '3px solid #C9A227', paddingLeft: '1.25rem' }}>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.05rem', margin: '0 0 0.4rem 0', fontFamily: 'Georgia, serif' }}>Phase 1 (00h - 24h) Asset & Environment Audit</h4>
                      <p style={{ color: '#CDC8BC', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>Catalog current leverage points and secure foundational agreements.</p>
                    </div>
                    <div style={{ borderLeft: '3px solid #C9A227', paddingLeft: '1.25rem' }}>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.05rem', margin: '0 0 0.4rem 0', fontFamily: 'Georgia, serif' }}>Phase 2 (24h - 48h) Protocol Calibration</h4>
                      <p style={{ color: '#CDC8BC', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>Eliminate friction points and reinforce communication perimeters.</p>
                    </div>
                    <div style={{ borderLeft: '3px solid #C9A227', paddingLeft: '1.25rem' }}>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.05rem', margin: '0 0 0.4rem 0', fontFamily: 'Georgia, serif' }}>Phase 3 (48h - 72h) Sovereign Execution</h4>
                      <p style={{ color: '#CDC8BC', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>Execute binding operational moves with uncompromised clarity.</p>
                    </div>
                  </div>
                </div>

                <div className="pdf-page">
                  <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase' }}>PAGE 03 / 04</span>
                  <h3 style={{ fontSize: '1.5rem', color: '#F4EEDB', fontFamily: 'Georgia, serif', margin: '0.25rem 0 1.5rem 0' }}>Five-Dimensional Qi Dynamics & Resonant Vectors (五维能量共振矩阵)</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
                      <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>ELEMENTAL ATTUNEMENT</span>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{castResult.hour.wuxing}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>Governing energetic flux.</p>
                    </div>
                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
                      <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>RESONANT COLOR</span>
                      <h4 style={{ color: '#C9A227', fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>Imperial Gold & Obsidian</h4>
                      <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>Optimal grounding tone.</p>
                    </div>
                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
                      <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>NUMEROLOGICAL KEY</span>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>3, 8, 27</h4>
                      <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>Harmonic quantitative coordinate.</p>
                    </div>
                    <div className="print-card" style={{ padding: '1.5rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
                      <span style={{ fontSize: '0.75rem', color: '#8A8678', fontFamily: 'monospace' }}>CARDINAL VECTOR</span>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>North-East Axis</h4>
                      <p style={{ fontSize: '0.85rem', color: '#CDC8BC', margin: 0 }}>Spatial alignment axis.</p>
                    </div>
                  </div>
                </div>

                <div className="pdf-page">
                  <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase' }}>PAGE 04 / 04</span>
                  <h3 style={{ fontSize: '1.5rem', color: '#F4EEDB', fontFamily: 'Georgia, serif', margin: '0.25rem 0 1.5rem 0' }}>Major Arcana Synthesis & Executive Guardrails (大阿卡纳守护与执行红线)</h3>
                  <div className="print-card" style={{ backgroundColor: '#050508', border: '1px solid #C9A227', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace' }}>ARCHETYPAL MIRROR:</span>
                      <h4 style={{ color: '#F4EEDB', fontSize: '1.3rem', margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>The Emperor / The Chariot</h4>
                      <p style={{ color: '#CDC8BC', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>Maintain absolute structural integrity and push forward with calculated velocity.</p>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(201, 162, 39, 0.2)', paddingTop: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#EF4444', fontFamily: 'monospace', fontWeight: 'bold' }}>EXECUTIVE RED LINE (绝对禁忌):</span>
                      <p style={{ color: '#E8E4DA', fontSize: '0.9rem', margin: '0.3rem 0 0 0', lineHeight: '1.6' }}>Avoid committing long-term binding capital on unverified verbal assurances. All terms must be codified in written contracts.</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* 未支付时展示的解锁引导区块（带 Testimonials、Trust Badges 与 Restore 框） */
              <div id="support" className="no-print" style={{ 
                padding: '2.5rem 1.5rem', 
                backgroundColor: '#0F0E17', 
                borderRadius: '16px', 
                border: '1px solid rgba(201, 162, 39, 0.4)', 
                textAlign: 'center',
                boxShadow: '0 0 30px rgba(201, 162, 39, 0.1), inset 0 0 15px rgba(201, 162, 39, 0.03)',
                backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(201, 162, 39, 0.08) 0%, transparent 70%)'
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

                <div style={{ margin: '1rem auto 1.5rem auto', maxWidth: '520px', borderLeft: '2px solid #C9A227', paddingLeft: '1rem', textAlign: 'left' }}>
                  <p style={{ fontSize: '0.8rem', color: '#CDC8BC', fontStyle: 'italic', margin: '0 0 0.3rem 0' }}>
                    "The 72-hour execution window saved our cross-border contract negotiation from collapsing. Unmatched precision."
                  </p>
                  <span style={{ fontSize: '0.70rem', color: '#C9A227', fontFamily: 'monospace' }}>— E. Vance, Managing Director, London</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <a
                    href={DODO_CHECKOUT_URL}
                    style={{ display: 'inline-block', padding: '1rem 3rem', background: '#C9A227', color: '#050508', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '8px', boxShadow: '0 0 20px rgba(201,162,39,0.3)', transition: 'all 0.3s' }}
                  >
                    Unlock Master Blueprint ($19) →
                  </a>

                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.72rem', color: '#8A8678', fontFamily: 'monospace', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <span>🔒 256-Bit Encrypted Secure</span>
                    <span>⚡ Instant PDF Delivery</span>
                    <span>🛡️ 7-Day Guarantee</span>
                  </div>

                  <div style={{ marginTop: '0.5rem', borderTop: '1px solid rgba(201, 162, 39, 0.2)', paddingTop: '1rem', width: '100%', maxWidth: '420px' }}>
                    <p style={{ fontSize: '0.8rem', color: '#8A8678', marginBottom: '0.5rem' }}>
                      Already paid on Dodo? Paste your Payment ID from your email receipt below to unlock:
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input
                        type="text"
                        placeholder="e.g. pay_xxxxxxxx"
                        value={manualPaymentId}
                        onChange={e => setManualPaymentId(e.target.value)}
                        style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem', backgroundColor: '#050508', border: '1px solid rgba(201,162,39,0.3), color: '#FFF', borderRadius: '6px', outline: 'none' }}
                      />
                      <button
                        onClick={() => verifyPayment(manualPaymentId)}
                        style={{ padding: '0.6rem 1rem', backgroundColor: '#181722', color: '#C9A227', border: '1px solid #C9A227', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 'bold', cursor: 'pointer' }}
                      >
                        Restore
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        )}
      </div>

      <div className="no-print" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '20px', padding: '2rem', textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <h4 style={{ fontFamily: 'Georgia, serif', color: '#F4EEDB', margin: '0 0 0.4rem 0' }}>The Weekly Ephemeris Briefing</h4>
        <p style={{ fontSize: '0.85rem', color: '#8A8678', margin: '0 0 1rem 0' }}>Receive precision temporal vectors every Monday.</p>
        {emailSubscribed ? (
          <div style={{ color: '#C9A227', fontFamily: 'monospace', fontSize: '0.85rem' }}>✦ Subscribed successfully!</div>
        ) : (
          <form onSubmit={handleEmail} style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto' }}>
            <input type="email" required value={emailInput} onChange={e => setEmailInput(e.target.value)} placeholder="Your professional email..." style={{ flex: 1, padding: '0.7rem', background: '#050508', border: '1px solid rgba(201,162,39,0.3)', color: '#FFF', borderRadius: '8px', fontSize: '0.85rem', outline: 'none' />
            <button type="submit" style={{ padding: '0.7rem 1.4rem', background: '#C9A227', color: '#050508', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Join</button>
          </form>
        )}
      </div>

      <div id="insights" className="no-print" style={{ marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <h3 style={{ fontFamily: 'Georgia, serif', color: '#F4EEDB', marginBottom: '1rem' }}>Strategic Insights</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {ARTICLES.map((art, i) => (
            <div key={i} style={{ style: 'background: #0A0A0F', background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.2)', borderRadius: '10px', padding: '1rem' }}>
              <span style={{ fontSize: '0.65rem', color: '#8A8678', fontFamily: 'monospace' }}>{art.readTime}</span>
              <h4 style={{ fontSize: '0.95rem', fontFamily: 'Georgia, serif', color: '#F4EEDB', margin: '0.3rem 0' }}>{art.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <footer id="support" style={{ textAlign: 'center', fontSize: '0.75rem', color: '#5C584E', fontFamily: 'monospace', borderTop: '1px solid rgba(201,162,39,0.1)', paddingTop: '1.5rem', position: 'relative', zIndex: 2 }}>
        © Esoteric Paths. Deterministic Horary Infrastructure. All rights reserved.
      </footer>

    </div>
  );
}
