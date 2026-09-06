// 改法 A 升级版 — 给 Chinese Name 工具结果下方，加一个强 CTA 桥
// 策略：在原版弱桥之上，再插一个金色光晕强钩区，通过紧迫感 + 埋点引导转化。
// 兼容性：纯客户端组件、inline style，不引入新依赖。
"use client";

import React from 'react';
import Link from 'next/link';

type OracleBridgeProps = {
  source?: string;
  palaceHint?: string;
};

export default function OracleBridge({ source = 'chinese_name', palaceHint }: OracleBridgeProps) {
  const track = () => {
    if (typeof window === 'undefined') return;
    const gtag = (window as unknown as { gtag?: (event: string, name: string, params?: Record<string, unknown>) => void }).gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'oracle_bridge_click', { source, palace_hint: palaceHint });
    }
  };

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
        ✦ Your name is one affinity. Your moment is another.
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
        You just saw the palace your name points to.
        <br />
        Now see the one ruling <em style={{ color: '#C9A227', fontStyle: 'normal' }}>right now</em>.
      </h3>

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
        Cast the Oracle Free →
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
