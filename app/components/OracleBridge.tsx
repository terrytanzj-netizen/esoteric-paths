// 改法 A 升级版 — 给 Chinese Name 工具结果下方，加一个强 CTA 桥
// 策略：在原版弱桥之上，再插一个金色光晕强钩区，通过紧迫感 + 埋点引导转化。
// 场景分流：根据用户选的 focus（career/love/wealth/wisdom/balance）动态呈现不同的"如果你的决策是 X"语境，让桥 CTA 钩得更精准。
// 兼容性：纯客户端组件、inline style，不引入新依赖。
"use client";

import React from 'react';
import Link from 'next/link';

type OracleBridgeProps = {
  source?: string;
  palaceHint?: string;
  focus?: 'career' | 'love' | 'wealth' | 'wisdom' | 'balance';
};

// 不同场景下"桥"应该说的话 — 让 CTA 钩到具体的决策场景
const FOCUS_BRIDGE: Record<string, { eyebrow: string; headline: string; cta: string }> = {
  career: {
    eyebrow: '✦ You named the direction. Now find the window.',
    headline: 'Founders and operators cast the oracle to time one decision at a time.',
    cta: 'Time My Next Move →',
  },
  wealth: {
    eyebrow: '✦ A name opens a door. A moment decides whether to walk through it.',
    headline: 'Capital moves are won or lost on the 72-hour window, not the 12-month plan.',
    cta: 'Check This Moment →',
  },
  love: {
    eyebrow: '✦ Names set the tone. Timing sets the tempo.',
    headline: 'Cast the oracle at the moment a relationship decision feels immediate.',
    cta: 'Cast for This Moment →',
  },
  wisdom: {
    eyebrow: '✦ You named the question. Find the palace that answers it.',
    headline: 'Use the same deterministic system to read the moment, not just the name.',
    cta: 'Cast the Oracle →',
  },
  balance: {
    eyebrow: '✦ Your name is one affinity. Your moment is another.',
    headline: 'See which of the six palaces rules right now, and what it says about your next move within 72 hours.',
    cta: 'Cast the Oracle Free →',
  },
};

export default function OracleBridge({ source = 'chinese_name', palaceHint, focus }: OracleBridgeProps) {
  const track = () => {
    if (typeof window === 'undefined') return;
    const gtag = (window as unknown as { gtag?: (event: string, name: string, params?: Record<string, unknown>) => void }).gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'oracle_bridge_click', { source, palace_hint: palaceHint, focus: focus ?? 'unspecified' });
    }
  };

  const f = focus && FOCUS_BRIDGE[focus] ? focus : 'balance';
  const copy = FOCUS_BRIDGE[f];

  return (
    <aside
      className="no-print es-lift reveal"
      style={{
        marginTop: '2rem',
        marginBottom: '2rem',
        padding: '2.2rem 1.6rem',
        borderRadius: '16px',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 0%, rgba(201, 162, 39, 0.16) 0%, rgba(10, 10, 15, 0) 70%), #0A0A0F',
        border: '1px solid rgba(201, 162, 39, 0.5)',
        boxShadow: '0 0 32px rgba(201, 162, 39, 0.12), inset 0 0 18px rgba(201, 162, 39, 0.04)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: '0.7rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#C9A227',
          margin: '0 0 0.6rem 0',
        }}
      >
        {copy.eyebrow}
      </p>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.45rem',
          color: '#F4EEDB',
          margin: '0 0 0.7rem 0',
          lineHeight: 1.25,
          textShadow: '0 0 18px rgba(201, 162, 39, 0.18)',
        }}
      >
        {copy.headline}
      </h3>

      {f === 'balance' && (
        <p
          style={{
            fontSize: '0.92rem',
            color: '#CDC8BC',
            lineHeight: 1.65,
            margin: '0 auto 1.6rem auto',
            maxWidth: '500px',
          }}
        >
          The same Xiao Liu Ren mechanics that chose your name can read the
          moment of a decision. Cast the oracle free — see which of the six
          palaces rules this exact moment, and what it says about your next
          move within 72 hours.
        </p>
      )}

      <Link
        href="/#oracle"
        onClick={track}
        className="es-btn es-btn--gold"
        style={{
          display: 'inline-block',
          padding: '1rem 2.6rem',
          fontSize: '0.95rem',
        }}
      >
        {copy.cta}
      </Link>

      <p
        style={{
          fontSize: '0.72rem',
          color: '#8A8678',
          margin: '0.9rem 0 0 0',
          fontFamily: 'monospace',
          letterSpacing: '0.05em',
        }}
      >
        No account. No card. See your three palaces before unlocking the full 10-page blueprint.
      </p>
    </aside>
  );
}