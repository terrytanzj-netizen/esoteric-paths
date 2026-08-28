'use client';

import React, { useState, useEffect } from 'react';

const DODO_CHECKOUT_URL = "https://checkout.dodopayments.com/buy/pdt_0NmINnqaKAXo6oqUU50Jc?quantity=1";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyeyykdv";

const PALACES = [
  { id: 'daan', name: 'Da An (大安)', symbol: '☩', wuxing: 'Wood (木)', desc: 'Grounded, safe, favors steady preservation over expansion.' },
  { id: 'liulian', name: 'Liu Lian (留连)', symbol: '☿', wuxing: 'Water (水)', desc: 'Entanglement & delay. Audit internally, do not force progress.' },
  { id: 'suxi', name: 'Su Xi (速喜)', symbol: '☉', wuxing: 'Fire (火)', desc: 'Rapid joy & velocity. Immediate closing and execution favored.' },
  { id: 'chikou', name: 'Chi Kou (赤口)', symbol: '☌', wuxing: 'Metal (金)', desc: 'Conflict & friction. Maintain written records and strict boundaries.' },
  { id: 'xiaoji', name: 'Xiao Ji (小吉)', symbol: '♃', wuxing: 'Water (水)', desc: 'Gentle luck & synergy. Collaborative progress and mutual benefit.' },
  { id: 'kongwang', name: 'Kong Wang (空亡)', symbol: '♄', wuxing: 'Earth (土)', desc: 'The void & reset. Release obsolete assumptions from ground zero.' },
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

  const verifyPayment = async (pId: string) => {
    if (!pId) return;
    const res = await fetch(`/api/verify?payment_id=${pId}`);
    const data = await res.json();
    if (data.valid) {
      setIsVerifiedPaid(true);
      localStorage.setItem('esoteric_is_paid', 'true');
      alert('🎉 Verified! 4-page blueprint unlocked.');
    } else {
      alert('❌ Payment not found.');
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
      setCastResult({
        question,
        month: PALACES[mIdx],
        day: PALACES[dIdx],
        hour: PALACES[hIdx],
        time: now.toUTCString(),
      });
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

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem', background: '#050508', minHeight: '100vh', color: '#E8E4DA', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* 顶部导航 */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(201,162,39,0.2)', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <span style={{ color: '#C9A227', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '1.1rem' }}>✦ ESOTERIC PATHS</span>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', fontFamily: 'monospace', color: '#8A8678' }}>
          <a href="#" style={{ color: '#C9A227', textDecoration: 'none' }}>Oracle</a>
          <a href="#matrix" style={{ color: 'inherit', textDecoration: 'none' }}>Matrix</a>
          <a href="#blueprint" style={{ color: 'inherit', textDecoration: 'none' }}>Blueprint</a>
          <a href="#insights" style={{ color: 'inherit', textDecoration: 'none' }}>Insights</a>
          <a href="#support" style={{ color: 'inherit', textDecoration: 'none' }}>Support</a>
        </div>
      </nav>

      {/* 头部介绍 */}
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'monospace' }}>Xiao Liu Ren × Tarot Matrix</span>
        <h1 style={{ fontSize: '2.4rem', fontFamily: 'Georgia, serif', color: '#F4EEDB', margin: '0.4rem 0' }}>TEMPORAL STRATEGY MATRIX</h1>
        <p style={{ fontSize: '0.9rem', color: '#8A8678', maxWidth: '550px', margin: '0 auto' }}>Align critical decisions with classical temporal mechanics and Western archetypal wisdom.</p>
      </header>

      {/* 宇宙时钟 */}
      <div style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.3)', borderRadius: '16px', padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'monospace', color: '#F4EEDB', textShadow: '0 0 15px rgba(201,162,39,0.4)' }}>{time.timeStr || '12:00:00'}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem', marginTop: '1.5rem' }}>
          {PALACES.map((p, idx) => {
            const active = time.palaceIdx === idx;
            return (
              <div key={p.id} style={{ padding: '0.8rem 0.3rem', background: active ? 'rgba(201,162,39,0.2)' : '#050508', border: active ? '1px solid #C9A227' : '1px solid rgba(201,162,39,0.1)', borderRadius: '8px' }}>
                <div style={{ color: active ? '#C9A227' : '#5C584E' }}>{p.symbol}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: active ? '#F4EEDB' : '#8A8678' }}>{p.name.split(' ')[0]}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 起盘表单 */}
      <div id="matrix" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.3)', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
        <form onSubmit={handleCast} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label style={{ fontSize: '0.8rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase' }}>Inquire Your Decision Crossroads</label>
          <input type="text" required value={question} onChange={e => setQuestion(e.target.value)} placeholder="e.g., Should I execute the contract renegotiation this week?" style={{ padding: '0.9rem', background: '#050508', border: '1px solid rgba(201,162,39,0.3)', color: '#FFF', borderRadius: '8px', outline: 'none' }} />
          <button type="submit" disabled={isCasting} style={{ padding: '1rem', background: '#C9A227', color: '#050508', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
            {isCasting ? 'Aligning Celestial Coordinates...' : 'Cast Horary Oracle →'}
          </button>
        </form>

        {castResult && (
          <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(201,162,39,0.2)', paddingTop: '1.5rem' }}>
            <h3 style={{ fontFamily: 'Georgia, serif', color: '#F4EEDB' }}>Query: "{castResult.question}"</h3>
            <p style={{ fontSize: '0.9rem', color: '#CDC8BC' }}><b>Vector Result:</b> Month ({castResult.month.name}) ➔ Day ({castResult.day.name}) ➔ Hour ({castResult.hour.name})</p>
          </div>
        )}
      </div>

      {/* 付费蓝图与解锁区 */}
      <div id="blueprint" style={{ background: '#13111C', border: '1px solid rgba(201,162,39,0.5)', borderRadius: '16px', padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase' }}>✦ Executive Strategy Blueprint ($19) ✦</span>
        <h3 style={{ fontSize: '1.3rem', fontFamily: 'Georgia, serif', color: '#F4EEDB', margin: '0.5rem 0' }}>Unlock Full 4-Page Personal Blueprint & 72h Action Plan</h3>
        <p style={{ fontSize: '0.85rem', color: '#8A8678', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>Includes Chrono Execution Windows, Resonant Colors, and Archetypal Guardrails.</p>
        
        {isVerifiedPaid ? (
          <div style={{ color: '#C9A227', fontFamily: 'monospace', fontWeight: 'bold' }}>✓ Full Blueprint Unlocked Successfully!</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <a href={DODO_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.9rem 2.5rem', background: '#C9A227', color: '#050508', fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '8px' }}>
              Unlock Master Blueprint ($19) →
            </a>
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '380px', marginTop: '1rem' }}>
              <input type="text" placeholder="Paste Payment ID (pay_xxx)" value={manualPaymentId} onChange={e => setManualPaymentId(e.target.value)} style={{ flex: 1, padding: '0.5rem', background: '#050508', border: '1px solid rgba(201,162,39,0.3)', color: '#FFF', borderRadius: '6px', fontSize: '0.8rem' }} />
              <button onClick={() => verifyPayment(manualPaymentId)} style={{ padding: '0.5rem 1rem', background: '#252136', color: '#C9A227', border: '1px solid #C9A227', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer' }}>Restore</button>
            </div>
          </div>
        )}
      </div>

      {/* 邮件简报订阅 */}
      <div style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        <h4 style={{ fontFamily: 'Georgia, serif', color: '#F4EEDB', margin: '0 0 0.4rem 0' }}>The Weekly Ephemeris Briefing</h4>
        <p style={{ fontSize: '0.85rem', color: '#8A8678', margin: '0 0 1rem 0' }}>Receive precision temporal vectors every Monday.</p>
        {emailSubscribed ? (
          <div style={{ color: '#C9A227', fontFamily: 'monospace', fontSize: '0.85rem' }}>✦ Subscribed successfully!</div>
        ) : (
          <form onSubmit={handleEmail} style={{ display: 'flex', gap: '0.5rem', maxWidth: '380px', margin: '0 auto' }}>
            <input type="email" required value={emailInput} onChange={e => setEmailInput(e.target.value)} placeholder="Your professional email..." style={{ flex: 1, padding: '0.6rem', background: '#050508', border: '1px solid rgba(201,162,39,0.3)', color: '#FFF', borderRadius: '6px', fontSize: '0.85rem' }} />
            <button type="submit" style={{ padding: '0.6rem 1.2rem', background: '#C9A227', color: '#050508', fontWeight: 'bold', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Join</button>
          </form>
        )}
      </div>

      {/* 知识库文章预览 */}
      <div id="insights" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontFamily: 'Georgia, serif', color: '#F4EEDB', marginBottom: '1rem' }}>Strategic Insights</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {ARTICLES.map((art, i) => (
            <div key={i} style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.2)', borderRadius: '10px', padding: '1rem' }}>
              <span style={{ fontSize: '0.65rem', color: '#8A8678', fontFamily: 'monospace' }}>{art.readTime}</span>
              <h4 style={{ fontSize: '0.95rem', fontFamily: 'Georgia, serif', color: '#F4EEDB', margin: '0.3rem 0' }}>{art.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* 底部 Support 锚点 */}
      <footer id="support" style={{ textAlign: 'center', fontSize: '0.75rem', color: '#5C584E', fontFamily: 'monospace', borderTop: '1px solid rgba(201,162,39,0.1)', paddingTop: '1.5rem' }}>
        © Esoteric Paths. Deterministic Horary Infrastructure. All rights reserved.
      </footer>

    </div>
  );
}
