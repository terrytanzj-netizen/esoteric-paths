'use client';

import {
  Palace,
  getPalaceFlow,
  getResonantVector,
  getTarotSynthesis,
  get72hPlan,
  getGuardrails,
  getReportMeta,
  PALACES,
  WUXING_CYCLE,
} from '../../data/content';

interface ReportPDFProps {
  castResult: {
    question: string;
    time: string;
    month: Palace;
    day: Palace;
    hour: Palace;
  };
}

function isValidCastResult(value: any): value is ReportPDFProps['castResult'] {
  if (!value || typeof value !== 'object') return false;
  const required = ['question', 'month', 'day', 'hour', 'time'];
  if (!required.every(k => typeof value[k] === 'object' || typeof value[k] === 'string')) return false;
  return ['month', 'day', 'hour'].every(k => {
    const p = value[k];
    return p && typeof p === 'object' && typeof p.name === 'string' && typeof p.symbol === 'string';
  });
}

export default function ReportPDF({ castResult }: ReportPDFProps) {
  if (!isValidCastResult(castResult)) return null;

  const { month, day, hour, question, time } = castResult;
  const flow = getPalaceFlow(month, day, hour);
  const vector = getResonantVector(hour);
  const tarot = getTarotSynthesis(hour);
  const plan = get72hPlan(hour);
  const guardrails = getGuardrails(hour, question);
  const meta = getReportMeta();

  const muted = '#8A8678';
  const cream = '#F4EEDB';
  const gold = '#C9A227';
  const parchment = '#CDC8BC';

  const cardStyle: React.CSSProperties = {
    padding: '1.5rem',
    backgroundColor: '#050508',
    borderRadius: '12px',
    border: '1px solid rgba(201, 162, 39, 0.2)',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    color: muted,
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    color: cream,
    fontFamily: 'Georgia, serif',
    margin: '0.25rem 0 1.5rem 0',
  };

  const pageTagStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    color: gold,
    fontFamily: 'monospace',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
  };

  const PageWrap = ({ pageNum, children, title }: { pageNum: number; title: string; children: React.ReactNode }) => (
    <div className="pdf-page">
      <span style={pageTagStyle}>PAGE {String(pageNum).padStart(2, '0')} / 10</span>
      <h3 style={headingStyle}>{title}</h3>
      {children}
    </div>
  );

  return (
    <>
      {/* PAGE 01 — COVER */}
      <div className="pdf-page" style={{ justifyContent: 'space-between' }}>
        <div>
          <span style={pageTagStyle}>CONFIDENTIAL EXECUTIVE ORACLE</span>
          <h1 style={{ fontSize: '2.6rem', color: cream, fontFamily: 'Georgia, serif', margin: '0.6rem 0 1rem 0', lineHeight: 1.1 }}>
            Temporal Strategy Matrix
          </h1>
          <p style={{ fontSize: '1.05rem', color: parchment, margin: 0, maxWidth: '420px', lineHeight: 1.5 }}>
            A personalized synthesis of Xiao Liu Ren temporal mechanics and Western archetypal intelligence for the question below.
          </p>
        </div>

        <div className="print-card" style={{ padding: '2rem', borderRadius: '16px', backgroundColor: '#050508', border: `1px solid ${gold}` }}>
          <span style={labelStyle}>Querent Query</span>
          <p style={{ fontSize: '1.35rem', color: cream, fontFamily: 'Georgia, serif', margin: '0.5rem 0 1.5rem 0', lineHeight: 1.4 }}>
            “{question}”
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem', color: parchment, fontFamily: 'monospace' }}>
            <div>
              <span style={{ color: muted, display: 'block' }}>CAST TIME</span>
              {time}
            </div>
            <div>
              <span style={{ color: muted, display: 'block' }}>VALIDITY WINDOW</span>
              72 hours from cast
            </div>
            <div>
              <span style={{ color: muted, display: 'block' }}>DECISIVE VECTOR</span>
              {hour.name}
            </div>
            <div>
              <span style={{ color: muted, display: 'block' }}>ELEMENTAL TIDE</span>
              {hour.wuxing}
            </div>
          </div>
        </div>

        <div style={{ fontSize: '0.75rem', color: muted, fontFamily: 'monospace' }}>
          Prepared by Esoteric Paths • esotericpaths.com • For querent use only.
        </div>
      </div>

      {/* PAGE 02 — METHODOLOGY */}
      <PageWrap pageNum={2} title="Methodology: The Three-Palace Horary Engine (三宫起课原理)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p style={{ color: parchment, fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
            Xiao Liu Ren (小六壬) reads time as a layered coordinate rather than a static backdrop. The system maps the lunar month, solar day, and bi-hourly period onto six palaces. Each palace carries an elemental charge, a psychological posture, and a strategic directive. The Hour palace is the decisive vector—the active edge of the moment.
          </p>
          <div className="print-card" style={{ ...cardStyle, borderColor: `rgba(201, 162, 39, 0.4)` }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <span style={labelStyle}>Month Palace</span>
                <h4 style={{ color: cream, fontFamily: 'Georgia, serif', margin: '0.3rem 0' }}>{month.name}</h4>
                <p style={{ color: parchment, fontSize: '0.8rem', margin: 0 }}>{month.desc}</p>
              </div>
              <div>
                <span style={labelStyle}>Day Palace</span>
                <h4 style={{ color: cream, fontFamily: 'Georgia, serif', margin: '0.3rem 0' }}>{day.name}</h4>
                <p style={{ color: parchment, fontSize: '0.8rem', margin: 0 }}>{day.desc}</p>
              </div>
              <div>
                <span style={labelStyle}>Hour Palace</span>
                <h4 style={{ color: cream, fontFamily: 'Georgia, serif', margin: '0.3rem 0' }}>{hour.name}</h4>
                <p style={{ color: parchment, fontSize: '0.8rem', margin: 0 }}>{hour.desc}</p>
              </div>
            </div>
          </div>
          <div style={{ ...cardStyle, borderColor: `rgba(201, 162, 39, 0.2)` }}>
            <span style={labelStyle}>Your Cast Coordinates</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginTop: '0.8rem', fontSize: '0.85rem', color: parchment }}>
              <div><strong style={{ color: gold }}>Month:</strong> {month.symbol} {month.name} — {month.wuxing}</div>
              <div><strong style={{ color: gold }}>Day:</strong> {day.symbol} {day.name} — {day.wuxing}</div>
              <div><strong style={{ color: gold }}>Hour:</strong> {hour.symbol} {hour.name} — {hour.wuxing}</div>
              <div><strong style={{ color: gold }}>Active Archetype:</strong> {hour.jungianArchetype}</div>
            </div>
          </div>
          <p style={{ color: parchment, fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
            {meta.validityWindow} The report that follows is built from these coordinates and should be read as situational intelligence, not deterministic prophecy.
          </p>
        </div>
      </PageWrap>

      {/* PAGE 03 — THREE-PALACE TRAJECTORY */}
      <PageWrap pageNum={3} title="Three-Palace Trajectory (三宫全息向量)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
            <span style={{ fontSize: '0.75rem', color: muted, fontFamily: 'monospace' }}>MONTH PALACE (Macro Origin)</span>
            <h4 style={{ fontSize: '1.2rem', color: cream, margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{month.symbol} {month.name} ({month.wuxing})</h4>
            <p style={{ fontSize: '0.85rem', color: parchment, margin: 0 }}>{month.desc}</p>
          </div>
          <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
            <span style={{ fontSize: '0.75rem', color: muted, fontFamily: 'monospace' }}>DAY PALACE (Current Pivot)</span>
            <h4 style={{ fontSize: '1.2rem', color: cream, margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{day.symbol} {day.name} ({day.wuxing})</h4>
            <p style={{ fontSize: '0.85rem', color: parchment, margin: 0 }}>{day.desc}</p>
          </div>
          <div className="print-card" style={{ padding: '1.25rem', backgroundColor: '#050508', borderRadius: '12px', border: '1px solid #C9A227' }}>
            <span style={{ fontSize: '0.75rem', color: gold, fontFamily: 'monospace', fontWeight: 'bold' }}>HOUR PALACE (Decisive Vector)</span>
            <h4 style={{ fontSize: '1.2rem', color: cream, margin: '0.3rem 0', fontFamily: 'Georgia, serif' }}>{hour.symbol} {hour.name} ({hour.wuxing})</h4>
            <p style={{ fontSize: '0.85rem', color: parchment, margin: 0 }}>{hour.desc}</p>
          </div>
        </div>
      </PageWrap>

      {/* PAGE 04 — PALACE INTERACTIONS */}
      <PageWrap pageNum={4} title="Palace Interactions & Temporal Narrative (三宫流转象意)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="print-card" style={{ ...cardStyle, borderColor: `rgba(201, 162, 39, 0.4)` }}>
            <span style={labelStyle}>Flow Diagnosis — {flow.transition}</span>
            <p style={{ color: cream, fontSize: '1rem', lineHeight: 1.65, margin: '0.8rem 0 0 0', fontFamily: 'Georgia, serif' }}>
              {flow.narrative}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div className="print-card" style={cardStyle}>
              <span style={labelStyle}>Month → Day</span>
              <h4 style={{ color: cream, fontFamily: 'Georgia, serif', margin: '0.3rem 0' }}>
                {month.name.split(' ')[0]} to {day.name.split(' ')[0]}
              </h4>
              <p style={{ color: parchment, fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
                The macro origin ({month.wuxing}) meets the current pivot ({day.wuxing}).
                {getWuxingRelationLabel(month, day)}
              </p>
            </div>
            <div className="print-card" style={cardStyle}>
              <span style={labelStyle}>Day → Hour</span>
              <h4 style={{ color: cream, fontFamily: 'Georgia, serif', margin: '0.3rem 0' }}>
                {day.name.split(' ')[0]} to {hour.name.split(' ')[0]}
              </h4>
              <p style={{ color: parchment, fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
                The current pivot ({day.wuxing}) hands momentum to the decisive vector ({hour.wuxing}).
                {getWuxingRelationLabel(day, hour)}
              </p>
            </div>
          </div>

          <div className="print-card" style={cardStyle}>
            <span style={labelStyle}>Synthesized Reading for Your Query</span>
            <p style={{ color: parchment, fontSize: '0.9rem', lineHeight: 1.7, margin: '0.8rem 0 0 0' }}>
              With {month.name} as backdrop, {day.name} as the active pivot, and {hour.name} as the decisive vector, the situation asks you to operate from a posture of {hour.jungianArchetype.toLowerCase()}. The dominant theme is {hour.domain.toLowerCase()}. {hour.advice}
            </p>
          </div>
        </div>
      </PageWrap>

      {/* PAGE 05 — 72-HOUR ACTION PLAN */}
      <PageWrap pageNum={5} title="72-Hour Chrono-Hourglass Action Plan (72小时执行规程)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="print-card" style={{ ...cardStyle, borderColor: `rgba(201, 162, 39, 0.4)` }}>
            <h4 style={{ color: cream, fontFamily: 'Georgia, serif', margin: '0 0 0.5rem 0' }}>Strategic Theme</h4>
            <p style={{ color: parchment, fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{plan.theme}</p>
          </div>

          <div className="print-card" style={{ ...cardStyle, borderLeft: `4px solid ${gold}`, borderColor: `rgba(201, 162, 39, 0.3)` }}>
            <span style={labelStyle}>Phase 1 — 00h to 24h</span>
            <h4 style={{ color: cream, fontFamily: 'Georgia, serif', margin: '0.3rem 0' }}>Asset & Environment Audit</h4>
            <p style={{ color: parchment, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{plan.phase1}</p>
          </div>

          <div className="print-card" style={{ ...cardStyle, borderLeft: `4px solid ${gold}`, borderColor: `rgba(201, 162, 39, 0.3)` }}>
            <span style={labelStyle}>Phase 2 — 24h to 48h</span>
            <h4 style={{ color: cream, fontFamily: 'Georgia, serif', margin: '0.3rem 0' }}>Protocol Calibration</h4>
            <p style={{ color: parchment, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{plan.phase2}</p>
          </div>

          <div className="print-card" style={{ ...cardStyle, borderLeft: `4px solid ${gold}`, borderColor: `rgba(201, 162, 39, 0.3)` }}>
            <span style={labelStyle}>Phase 3 — 48h to 72h</span>
            <h4 style={{ color: cream, fontFamily: 'Georgia, serif', margin: '0.3rem 0' }}>Sovereign Execution</h4>
            <p style={{ color: parchment, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{plan.phase3}</p>
          </div>
        </div>
      </PageWrap>

      {/* PAGE 06 — FIVE-DIMENSIONAL QI DYNAMICS */}
      <PageWrap pageNum={6} title="Five-Dimensional Qi Dynamics & Resonant Vectors (五维能量共振矩阵)">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div className="print-card" style={cardStyle}>
            <span style={labelStyle}>Elemental Attunement</span>
            <h4 style={{ color: cream, fontSize: '1.3rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{vector.element}</h4>
            <p style={{ fontSize: '0.85rem', color: parchment, margin: 0, lineHeight: 1.5 }}>
              Governs the energetic flux of this window. Dress, diet, and environment can be tuned toward this element to reduce friction.
            </p>
          </div>
          <div className="print-card" style={cardStyle}>
            <span style={labelStyle}>Resonant Color</span>
            <h4 style={{ color: gold, fontSize: '1.3rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{vector.color}</h4>
            <p style={{ fontSize: '0.85rem', color: parchment, margin: 0, lineHeight: 1.5 }}>
              Optimal grounding tone for negotiations, documents, wardrobe, and visual anchors during the 72-hour window.
            </p>
          </div>
          <div className="print-card" style={cardStyle}>
            <span style={labelStyle}>Numerological Key</span>
            <h4 style={{ color: cream, fontSize: '1.3rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{vector.numbers}</h4>
            <p style={{ fontSize: '0.85rem', color: parchment, margin: 0, lineHeight: 1.5 }}>
              Harmonic quantitative coordinates. Use for timing, pricing tiers, meeting counts, or iteration cycles.
            </p>
          </div>
          <div className="print-card" style={cardStyle}>
            <span style={labelStyle}>Cardinal Vector</span>
            <h4 style={{ color: cream, fontSize: '1.3rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{vector.direction}</h4>
            <p style={{ fontSize: '0.85rem', color: parchment, margin: 0, lineHeight: 1.5 }}>
              Spatial alignment axis. Favorable orientation for calls, desk position, or physical movement if relevant.
            </p>
          </div>
          <div className="print-card" style={cardStyle}>
            <span style={labelStyle}>Seasonal Resonance</span>
            <h4 style={{ color: cream, fontSize: '1.3rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{vector.season}</h4>
            <p style={{ fontSize: '0.85rem', color: parchment, margin: 0, lineHeight: 1.5 }}>
              The energetic season currently active. Match your pace to the season: spring expands, winter waits, autumn cuts, summer strikes.
            </p>
          </div>
          <div className="print-card" style={cardStyle}>
            <span style={labelStyle}>Body Focus</span>
            <h4 style={{ color: cream, fontSize: '1.3rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{vector.bodyFocus}</h4>
            <p style={{ fontSize: '0.85rem', color: parchment, margin: 0, lineHeight: 1.5 }}>
              Correlated organ and tissue systems. Extra rest, hydration, or movement in these areas supports clearer decision-making.
            </p>
          </div>
        </div>
      </PageWrap>

      {/* PAGE 07 — MAJOR ARCANA SYNTHESIS */}
      <PageWrap pageNum={7} title="Major Arcana Synthesis & Jungian Mirror (大阿卡纳守护)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="print-card" style={{ ...cardStyle, borderColor: `rgba(201, 162, 39, 0.4)` }}>
            <span style={labelStyle}>Archetypal Mirror</span>
            <h4 style={{ color: gold, fontSize: '1.5rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{tarot.pair}</h4>
            <p style={{ color: parchment, fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{tarot.reading}</p>
          </div>

          <div className="print-card" style={cardStyle}>
            <span style={labelStyle}>Jungian Posture</span>
            <h4 style={{ color: cream, fontSize: '1.2rem', margin: '0.4rem 0', fontFamily: 'Georgia, serif' }}>{tarot.jungianMirror}</h4>
            <p style={{ color: parchment, fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
              In analytical psychology, this is the dominant animus/anima signal for your question. It names the pattern of energy most capable of resolving the tension you described.
            </p>
          </div>

          <div className="print-card" style={cardStyle}>
            <span style={{ ...labelStyle, color: '#EF4444' }}>Shadow Face</span>
            <p style={{ color: parchment, fontSize: '0.9rem', lineHeight: 1.7, margin: '0.6rem 0 0 0' }}>{tarot.shadowReading}</p>
          </div>
        </div>
      </PageWrap>

      {/* PAGE 08 — EXECUTIVE GUARDRAILS */}
      <PageWrap pageNum={8} title="Executive Guardrails & Red Lines (执行红线与禁忌)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="print-card" style={{ ...cardStyle, border: `1px solid #EF4444` }}>
            <span style={{ ...labelStyle, color: '#EF4444', fontWeight: 'bold' }}>Absolute Red Line</span>
            <p style={{ color: cream, fontSize: '1rem', lineHeight: 1.65, margin: '0.8rem 0 0 0', fontFamily: 'Georgia, serif' }}>
              {guardrails.redLine}
            </p>
          </div>

          <div className="print-card" style={{ ...cardStyle, borderLeft: '4px solid #EAB308' }}>
            <span style={{ ...labelStyle, color: '#EAB308' }}>Yellow Line — Contextual Caution</span>
            <p style={{ color: parchment, fontSize: '0.95rem', lineHeight: 1.65, margin: '0.8rem 0 0 0' }}>
              {guardrails.yellowLine}
            </p>
          </div>

          <div className="print-card" style={cardStyle}>
            <span style={labelStyle}>Exit Trigger</span>
            <p style={{ color: parchment, fontSize: '0.9rem', lineHeight: 1.65, margin: '0.8rem 0 0 0' }}>
              {guardrails.exitTrigger}
            </p>
          </div>

          <div className="print-card" style={cardStyle}>
            <span style={labelStyle}>Domain of Action</span>
            <p style={{ color: parchment, fontSize: '0.9rem', lineHeight: 1.65, margin: '0.8rem 0 0 0' }}>
              <strong style={{ color: gold }}>{hour.domain}</strong>. This is the operational territory where your 72-hour moves will produce the strongest signal. Avoid drifting into unrelated arenas.
            </p>
          </div>
        </div>
      </PageWrap>

      {/* PAGE 09 — REFERENCE APPENDIX */}
      <PageWrap pageNum={9} title="Reference Appendix: The Six Palaces & Wu Xing Cycle">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="print-card" style={{ ...cardStyle, padding: '1rem' }}>
            <span style={labelStyle}>The Six Palaces at a Glance</span>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '0.8rem', fontSize: '0.75rem', color: parchment }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(201,162,39,0.3)' }}>
                  <th style={{ textAlign: 'left', padding: '0.4rem 0' }}>Palace</th>
                  <th style={{ textAlign: 'left', padding: '0.4rem 0' }}>Element</th>
                  <th style={{ textAlign: 'left', padding: '0.4rem 0' }}>Core Directive</th>
                  <th style={{ textAlign: 'left', padding: '0.4rem 0' }}>Domain</th>
                </tr>
              </thead>
              <tbody>
                {PALACES.map(p => (
                  <tr key={p.id} style={{ borderBottom: '1px solid rgba(201,162,39,0.1)' }}>
                    <td style={{ padding: '0.4rem 0', color: cream }}>{p.symbol} {p.name.split('(')[0]}</td>
                    <td style={{ padding: '0.4rem 0' }}>{p.wuxing}</td>
                    <td style={{ padding: '0.4rem 0' }}>{p.advice}</td>
                    <td style={{ padding: '0.4rem 0' }}>{p.domain.split(',')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="print-card" style={{ ...cardStyle, padding: '1rem' }}>
            <span style={labelStyle}>Wu Xing Interaction Cycle</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginTop: '0.8rem', fontSize: '0.8rem', color: parchment }}>
              {Object.entries(WUXING_CYCLE).map(([el, rel]) => (
                <div key={el}>
                  <strong style={{ color: gold }}>{el}</strong> generates {rel.generates}; controls {rel.controls}; controlled by {rel.controlledBy}
                </div>
              ))}
            </div>
          </div>

          <div className="print-card" style={cardStyle}>
            <span style={labelStyle}>How to Recast</span>
            <p style={{ color: parchment, fontSize: '0.85rem', lineHeight: 1.6, margin: '0.6rem 0 0 0' }}>
              {meta.recastGuidance} Re-reading the same cast is like consulting yesterday's weather report for tomorrow's sail.
            </p>
          </div>
        </div>
      </PageWrap>

      {/* PAGE 10 — BACK COVER */}
      <div className="pdf-page" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <span style={pageTagStyle}>PAGE 10 / 10</span>
          <h2 style={{ fontSize: '2rem', color: cream, fontFamily: 'Georgia, serif', margin: '1rem 0 1rem 0' }}>✦ Esoteric Paths</h2>
          <p style={{ color: parchment, fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            Deterministic Horary Infrastructure bridging classical Chinese temporal mechanics with Western archetypal psychology.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: muted, fontFamily: 'monospace' }}>
            <span>esotericpaths.com</span>
            <span>© {new Date().getFullYear()} Esoteric Paths. All rights reserved.</span>
            <span>For personal use only. Not financial, medical, or legal advice.</span>
          </div>
        </div>
      </div>
    </>
  );
}

function getWuxingRelationLabel(from: Palace, to: Palace): string {
  const r = getWuxingRelationName(from, to);
  switch (r) {
    case 'generates':
      return ` This is a generating flow: ${from.wuxing} naturally nourishes ${to.wuxing}, indicating support, growth, and forward momentum.`;
    case 'controls':
      return ` This is a controlling relationship: ${from.wuxing} restrains ${to.wuxing}, suggesting the need for discipline, boundaries, and measured pressure.`;
    case 'controlledBy':
      return ` This is a counter-flow: ${to.wuxing} overwhelms ${from.wuxing}, indicating external resistance or the need to adapt rather than force.`;
    default:
      return ` Both palaces share the same element, amplifying the same signal and doubling down on the domain of ${from.domain.split(',')[0].toLowerCase()}.`;
  }
}

function getWuxingRelationName(from: Palace, to: Palace): 'generates' | 'controls' | 'controlledBy' | 'same' {
  if (from.wuxing === to.wuxing) return 'same';
  const cycle = WUXING_CYCLE[from.wuxing];
  if (cycle.generates === to.wuxing) return 'generates';
  if (cycle.controls === to.wuxing) return 'controls';
  return 'controlledBy';
}
