'use client';

import React, { useState, useEffect } from 'react';

const DODO_CHECKOUT_URL = "https://checkout.dodopayments.com/buy/pdt_0NmINnqaKAXo6oqUU50Jc?quantity=1&redirect_url=https://www.esotericpaths.com%2F";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyeyykdv";

const PALACES = [
  { id: 'daan', name: 'Da An (大安)', symbol: '☩', wuxing: 'Wood (木)', desc: 'Grounded, safe, and favors steady preservation over aggressive expansion. Temporal momentum is structurally stable.', advice: 'Consolidate current resources. Hold strategic ground and avoid impulsive risks.' },
  { id: 'liulian', name: 'Liu Lian (留连)', symbol: '☿', wuxing: 'Water (水)', desc: 'Energy is dragged or sticky. Things are delayed; forcing external action creates friction.', advice: 'Use this time for auditing and internal adjustments. Do not force progress.' },
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
    try {
      const res = await fetch(`/api/verify?payment_id=${pId}`);
      if (!res.ok) return;
      const data = await res.json();
      if (data.valid) {
        setIsVerifiedPaid(true);
        localStorage.setItem('esoteric_is_paid', 'true');
      }
    } catch (e) {
      console.error('Payment verification exception:', e);
    }
  };

  useEffect(() => {
    // 恢复起盘缓存，防止页面重定向回来后数据丢失
    const saved = localStorage.getItem('last_user_cast');
    if (saved) {
      try { setCastResult(JSON.parse(saved)); } catch (e) {}
    }
    const alreadyPaid = localStorage.getItem('esoteric_is_paid');
    if (alreadyPaid === 'true') {
      setIsVerifiedPaid(true);
    }
    
    const params = new URLSearchParams(window.location.search);
    const pId = params.get('payment_id') || params.get('paymentId');
    if (pId) {
      verifyPayment(pId);
    }
  }, []);

  const handleCast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setI
