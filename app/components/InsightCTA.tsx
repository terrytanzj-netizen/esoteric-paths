// 改法 C 升级版 — insights 文章底部的强转化尾钩
// 策略：在原版弱 CTA 上方，再插一个强钩区。保留原 CTA 不动。
//       参数化 palace/topic，让尾钩文案能贴文章主题。
"use client";

import React from 'react';
import Link from 'next/link';

type InsightCTAProps = {
  palaceName?: string;
  topic?: string;
  lang?: 'en' | 'zh';
};

export default function InsightCTA({
  palaceName,
  topic,
  lang = 'en',
}: InsightCTAProps) {
  const isZh = lang === 'zh';
  const headline = isZh ? '六个宫位，此刻有一宫在主宰。' : 'This is one pattern of six.';
  const body = isZh
    ? '也许正是另一宫正在主宰你眼下的决策。免费起一课，看此刻是哪个宫，以及它对你接下来 72 小时意味着什么。'
    : `One of the other five palaces may be governing ${topic ?? 'your decision'} right now. Cast the oracle free and see which of the six rules this moment — and what it says about your next move within 72 hours.`;
  const cta = isZh ? '免费起一课 →' : 'Cast the Oracle Free →';
  const microLabel = isZh ? '你当下所在的宫' : '✦ The palace ruling your moment';
  const foot = isZh
    ? '无需注册、无需绑卡。先看三个宫位，再决定是否解锁完整十页蓝图。'
    : 'No account. No card. See your three palaces before unlocking the full 10-page blueprint.';

  const track = () => {
    if (typeof window === 'undefined') return;
    const gtag = (window as unknown as { gtag?: (event: string, name: string, params?: Record<string, unknown>) => void }).gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'insight_cta_click', { palace: palaceName ?? 'unknown', topic: topic ?? 'general' });
    }
  };

  return (
    <aside
      className="no-print es-lift reveal"
      style={{
        margin: '3.5rem 0 1.5rem 0',
        padding: '2.4rem 1.8rem',
        borderRadius: '16px',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 0%, rgba(201, 162, 39, 0.14) 0%, rgba(10, 10, 15, 0) 70%), #0A0A0F',
        border: '1px solid rgba(201, 162, 39, 0.45)',
        boxShadow: '0 0 28px rgba(201, 162, 39, 0.10), inset 0 0 16px rgba(201, 162, 39, 0.04)',
      }}
    >
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#C9A227',
          margin: '0 0 0.7rem 0',
        }}
      >
        {microLabel}
        {palaceName ? <span style={{ color: '#F4EEDB' }}> · {palaceName}</span> : null}
      </p>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.55rem',
          color: '#F4EEDB',
          margin: '0 0 0.7rem 0',
          lineHeight: 1.25,
          textShadow: '0 0 20px rgba(201, 162, 39, 0.18)',
        }}
      >
        {headline}
      </h3>

      <p
        style={{
          fontSize: '0.95rem',
          color: '#CDC8BC',
          lineHeight: 1.7,
          margin: '0 auto 1.7rem auto',
          maxWidth: '520px',
        }}
      >
        {body}
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
        {cta}
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
        {foot}
      </p>
    </aside>
  );
}
