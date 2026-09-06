'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { generateChineseNames, NameGeneratorInput, ChineseNameReading } from '../../../data/chineseNames';
import OracleBridge from '../../components/OracleBridge';

const FOCUS_OPTIONS: { value: NameGeneratorInput['focus']; label: string }[] = [
  { value: 'career', label: 'Career & Leadership' },
  { value: 'love', label: 'Love & Harmony' },
  { value: 'wealth', label: 'Wealth & Abundance' },
  { value: 'wisdom', label: 'Wisdom & Insight' },
  { value: 'balance', label: 'Overall Balance' },
];

export default function ChineseNamePage() {
  const [form, setForm] = useState<NameGeneratorInput>({
    englishName: '',
    gender: 'neutral',
    birthYear: '',
    birthMonth: '',
    focus: 'balance',
  });
  const [result, setResult] = useState<ChineseNameReading | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.englishName.trim()) return;
    setResult(generateChineseNames(form));
  };

  const handleShare = () => {
    if (!result) return;
    const top = result.names[0];
    const text = `My authentic Chinese name is ${top.chars} (${top.pinyin}) — "${top.meaning}". Element: ${top.element}. Palace: ${top.palace}.\n\nGet yours at`;
    const url = 'https://www.esotericpaths.com/tools/chinese-name';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="es-root" role="main" id="main-content" style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.5rem 4rem 1.5rem', background: '#050508', minHeight: '100vh', color: '#E8E4DA', fontFamily: 'var(--font-body)', position: 'relative', overflowX: 'hidden' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 15%, rgba(201, 162, 39, 0.08) 0%, rgba(5, 5, 8, 0.98) 75%), linear-gradient(to bottom, #050508, #020204)', pointerEvents: 'none', zIndex: 0 }} />

      <nav className="no-print es-nav" style={{ borderBottom: '1px solid rgba(201,162,39,0.2)', paddingBottom: '1rem', marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
        <Link href="/" className="es-brand" style={{ textDecoration: 'none' }}>✦ ESOTERIC PATHS</Link>
        <div className="es-nav-links">
          <Link href="/" className="es-nav-link">Oracle</Link>
          <Link href="/#insights" className="es-nav-link">Insights</Link>
          <Link href="/tools/chinese-name" className="es-nav-link" style={{ color: '#C9A227' }}>Chinese Name</Link>
        </div>
      </nav>

      <header className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
        <span style={{ fontSize: '0.75rem', color: '#C9A227', letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: 'monospace' }}>Free Tool</span>
        <h1 style={{ fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0.4rem 0', fontSize: '2.4rem', textShadow: '0 0 30px rgba(201, 162, 39, 0.2)' }}>Discover Your Authentic Chinese Name</h1>
        <p style={{ fontSize: '0.95rem', color: '#8A8678', maxWidth: '560px', margin: '0 auto' }}>
          A Chinese name is more than a label. It is a compressed wish — about character, direction and the energy you want to carry into a room.
        </p>
        <div className="es-ornament">✦ &nbsp; ✦ &nbsp; ✦</div>
      </header>

      <section className="no-print es-lift reveal" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '20px', padding: '2rem', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Your English Name</label>
            <input
              type="text"
              required
              value={form.englishName}
              onChange={e => setForm(f => ({ ...f, englishName: e.target.value }))}
              placeholder="e.g. Alexander"
              className="es-input"
              style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Gender Tone</label>
              <select
                value={form.gender}
                onChange={e => setForm(f => ({ ...f, gender: e.target.value as NameGeneratorInput['gender'] }))}
                className="es-input"
                style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem', boxSizing: 'border-box' }}
              >
                <option value="neutral">Neutral / Any</option>
                <option value="male">Masculine</option>
                <option value="female">Feminine</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Birth Year</label>
              <input
                type="number"
                min="1900"
                max="2099"
                value={form.birthYear}
                onChange={e => setForm(f => ({ ...f, birthYear: e.target.value }))}
                placeholder="e.g. 1990"
                className="es-input"
                style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Birth Month</label>
              <input
                type="number"
                min="1"
                max="12"
                value={form.birthMonth}
                onChange={e => setForm(f => ({ ...f, birthMonth: e.target.value }))}
                placeholder="1-12"
                className="es-input"
                style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Focus of the Name</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {FOCUS_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, focus: opt.value }))}
                  className="es-btn"
                  style={{
                    padding: '0.6rem 1rem',
                    fontSize: '0.8rem',
                    borderRadius: '999px',
                    background: form.focus === opt.value ? '#C9A227' : '#050508',
                    color: form.focus === opt.value ? '#050508' : '#C9A227',
                    border: '1px solid #C9A227',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="es-btn es-btn--gold" style={{ padding: '1.1rem', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Reveal My Chinese Name →
          </button>
        </form>
      </section>

      {result && (
        <section className="reveal" style={{ marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
          <div className="es-lift" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.3)', borderRadius: '20px', padding: '1.75rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.7rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Your Temporal Name Reading</span>
                <h2 style={{ fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0.3rem 0 0 0', fontSize: '1.5rem' }}>Three Names Aligned to Your Focus</h2>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.7rem', color: '#8A8678', fontFamily: 'monospace', border: '1px solid rgba(201,162,39,0.2)', borderRadius: '6px', padding: '0.35rem 0.7rem' }}>Element: {result.dominantElement}</span>
                <span style={{ fontSize: '0.7rem', color: '#8A8678', fontFamily: 'monospace', border: '1px solid rgba(201,162,39,0.2)', borderRadius: '6px', padding: '0.35rem 0.7rem' }}>Palace: {result.dominantPalace}</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#CDC8BC', lineHeight: 1.7, margin: 0 }}>{result.guidance}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            {result.names.map((name, i) => (
              <div key={i} className="es-lift" style={{ background: '#0A0A0F', border: i === 0 ? '1px solid #C9A227' : '1px solid rgba(201,162,39,0.2)', borderRadius: '16px', padding: '1.5rem', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1.25rem', alignItems: 'center' }}>
                <div style={{ fontSize: '2.4rem', color: '#F4EEDB', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{name.chars}</div>
                <div>
                  <div style={{ fontSize: '1.1rem', color: '#C9A227', fontWeight: 'bold', marginBottom: '0.2rem' }}>{name.pinyin}</div>
                  <div style={{ fontSize: '0.9rem', color: '#CDC8BC', lineHeight: 1.5, marginBottom: '0.35rem' }}>{name.meaning}</div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.65rem', color: '#8A8678', fontFamily: 'monospace', textTransform: 'uppercase' }}>{name.element}</span>
                    <span style={{ fontSize: '0.65rem', color: '#8A8678', fontFamily: 'monospace', textTransform: 'uppercase' }}>{name.palace}</span>
                  </div>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace' }}>#{name.position}</div>
              </div>
            ))}
          </div>

          <div className="no-print es-lift" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: '#CDC8BC', margin: '0 0 1rem 0' }}>
              A name points to an energy. A decision demands a moment. Want to know when to act on what this name represents?
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="es-btn es-btn--gold" style={{ padding: '0.85rem 1.75rem', fontSize: '0.85rem' }}>
                Cast Your Oracle →
              </Link>
              <button onClick={handleShare} className="es-btn es-btn--ghost" style={{ padding: '0.85rem 1.25rem', fontSize: '0.85rem' }}>
                🜔 Share on X
              </button>
            </div>
          </div>

          <OracleBridge source="chinese_name" palaceHint={result.dominantPalace} />
        </section>
      )}

      <section className="no-print es-lift reveal" style={{ background: '#0A0A0F', border: '1px solid rgba(201,162,39,0.2)', borderRadius: '20px', padding: '2rem', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 1rem 0' }}>How This Works</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ borderLeft: '2px solid #C9A227', paddingLeft: '1rem' }}>
            <h4 style={{ color: '#F4EEDB', fontSize: '1rem', margin: '0 0 0.25rem 0' }}>1. Meaning First</h4>
            <p style={{ color: '#CDC8BC', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>Each character in a Chinese name carries a semantic weight. We select combinations that express a direction — leadership, harmony, wisdom, resilience — rather than random syllables.</p>
          </div>
          <div style={{ borderLeft: '2px solid #C9A227', paddingLeft: '1rem' }}>
            <h4 style={{ color: '#F4EEDB', fontSize: '1rem', margin: '0 0 0.25rem 0' }}>2. Elemental Resonance</h4>
            <p style={{ color: '#CDC8BC', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>Every name is tagged with a Wu Xing element (Wood, Fire, Earth, Metal, Water). This lets you see which energy the name emphasizes and how it relates to your focus area.</p>
          </div>
          <div style={{ borderLeft: '2px solid #C9A227', paddingLeft: '1rem' }}>
            <h4 style={{ color: '#F4EEDB', fontSize: '1rem', margin: '0 0 0.25rem 0' }}>3. Deterministic Selection</h4>
            <p style={{ color: '#CDC8BC', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>The same inputs always return the same three names, so you can revisit, share or compare. The selection is not random — it is a hash of your inputs against a curated name bank.</p>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', fontSize: '0.75rem', color: '#5C584E', fontFamily: 'monospace', borderTop: '1px solid rgba(201,162,39,0.1)', paddingTop: '1.5rem', position: 'relative', zIndex: 2 }}>
        © Esoteric Paths. Deterministic Horary Infrastructure. All rights reserved.
      </footer>
    </div>
  );
}
