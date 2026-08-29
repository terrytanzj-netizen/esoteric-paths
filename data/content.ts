export interface Palace {
  id: string;
  name: string;
  symbol: string;
  wuxing: string;
  desc: string;
  advice: string;
}

export const PALACES: Palace[] = [
  { id: 'daan', name: 'Da An (大安)', symbol: '☩', wuxing: 'Wood (木)', desc: 'Grounded, safe, and favors steady preservation over aggressive expansion. Temporal momentum is structurally stable.', advice: 'Consolidate current resources. Hold strategic ground and avoid impulsive risks.' },
  { id: 'liulian', name: 'Liu Lian (留连)', symbol: '☿', wuxing: 'Water (水)', desc: 'Energy is dragged or sticky. Things are delayed; forcing external action creates friction. Reflect, audit, and wait.', advice: 'Use this time for auditing and internal adjustments. Do not force progress.' },
  { id: 'suxi', name: 'Su Xi (速喜)', symbol: '☉', wuxing: 'Fire (火)', desc: 'Swift breakthroughs and unexpected positive catalysts. High execution velocity.', advice: 'Strike while the iron is hot. Advance your key initiatives immediately.' },
  { id: 'chikou', name: 'Chi Kou (赤口)', symbol: '☌', wuxing: 'Metal (金)', desc: 'Sharp misunderstandings, vocal disputes, or structural pushback from counterparties.', advice: 'Maintain written records. Avoid verbal arguments and reinforce security.' },
  { id: 'xiaoji', name: 'Xiao Ji (小吉)', symbol: '♃', wuxing: 'Water (水)', desc: 'Cooperative progress, mutual benefit, and harmony achieved through partnerships.', advice: 'Engage in collaborative discussions and relationship building.' },
  { id: 'kongwang', name: 'Kong Wang (空亡)', symbol: '♄', wuxing: 'Earth (土)', desc: 'Dissolution of expectations, lost causes, or a complete cycle system reset.', advice: 'Let go of obsolete assumptions. Treat this as a clean-slate reboot.' },
];

export const ARTICLES = [
  { slug: 'accept-job-offer-now-or-wait', title: 'Should I Accept the Job Offer Now or Wait?', readTime: '8 min read' },
  { slug: 'ontology-of-time-horary-vs-chronometry', title: 'The Ontology of Time: Ancient Horary vs Western Chronometry', readTime: '7 min read' },
  { slug: 'xiao-liu-ren-vs-tarot-archetypes', title: 'Xiao Liu Ren vs. Western Tarot Archetypes', readTime: '6 min read' },
  { slug: 'da-an-strategic-preservation', title: 'Da An Decoded: Strategic Preservation in Volatile Markets', readTime: '5 min read' },
];
