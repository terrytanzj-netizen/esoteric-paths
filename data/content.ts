// The six palaces are judged on their OWN omen quality — the traditional
// auspicious / delayed / obstructed reading that is the core of Xiao Liu Ren.
//
// They are deliberately NOT bound to Wu Xing (五行). Which element each palace
// belongs to is contested between schools (Xiao Ji is called Wood by some and
// Water by others), and deriving palace interactions from a Wu Xing
// generating/controlling cycle imported that dispute straight into the product
// — it produced self-contradictions such as two Water palaces pointing at two
// different compass directions. Wu Xing is kept as standalone cultural
// reference in the appendix only; nothing in the engine reads it.
export type OmenQuality = 'auspicious' | 'delayed' | 'obstructed';

export interface Omen {
  quality: OmenQuality;
  /** Momentum weight, -2 (blocked) .. +2 (flowing). Drives the flow diagnosis. */
  charge: number;
  /** Short bilingual label shown in the UI. */
  label: string;
  /** One-line traditional reading of this palace's fortune. */
  note: string;
}

export interface Palace {
  id: string;
  name: string;
  symbol: string;
  /** Cultural association only. NOT used by any calculation — see note above. */
  wuxing: string;
  omen: Omen;
  desc: string;
  advice: string;
  direction: string;
  color: string;
  numbers: string;
  season: string;
  domain: string;
  tarotCard: string;
  tarotPair: string;
  jungianArchetype: string;
  light: string;
  shadow: string;
  body: string;
  phase1: string;
  phase2: string;
  phase3: string;
  redLine: string;
}

export const PALACES: Palace[] = [
  {
    id: 'daan',
    name: 'Da An (大安)',
    symbol: '☩',
    wuxing: 'Wood (木)',
    omen: {
      quality: 'auspicious',
      charge: 2,
      label: 'Auspicious (吉)',
      note: 'The palace of stillness and safety. Undertakings hold their ground; nothing is lost, but nothing moves quickly either. Favourable for defending a position, not for forcing one.',
    },
    desc: 'Grounded, safe, and favors steady preservation over aggressive expansion. Temporal momentum is structurally stable.',
    advice: 'Consolidate current resources. Hold strategic ground and avoid impulsive risks.',
    direction: 'East',
    color: 'Emerald Green & Deep Forest',
    numbers: '1, 5, 10',
    season: 'Spring',
    domain: 'Stability, home base, long-term holdings, rooted authority',
    tarotCard: 'IV — The Emperor',
    tarotPair: 'The Emperor + The Hierophant',
    jungianArchetype: 'The Ruler / The Father',
    light: 'Secure ground, patient growth, rooted decisions, structural integrity',
    shadow: 'Complacency, resistance to necessary change, rigid territoriality',
    body: 'Liver, gallbladder, tendons',
    phase1: 'Anchor your position. Document current assets, cash flow, commitments, and key relationships. Do not move yet.',
    phase2: 'Fortify existing agreements in writing. Strengthen boundaries and confirm mutual obligations. Expansion is premature.',
    phase3: 'Execute only after verification. Hold the line on terms already set. A slow yes beats a fast regret.',
    redLine: 'Do not sign or commit to new long-term obligations without a 48-hour cooling period and written counsel.',
  },
  {
    id: 'liulian',
    name: 'Liu Lian (留连)',
    symbol: '☿',
    wuxing: 'Water (水)',
    omen: {
      quality: 'delayed',
      charge: -1,
      label: 'Delayed (迟)',
      note: 'The palace of entanglement. Affairs stall, repeat, or circle back unfinished. Not a verdict of failure — a verdict on timing. Pushing harder increases friction; waiting is the lever.',
    },
    desc: 'Energy is dragged or sticky. Things are delayed; forcing external action creates friction. Reflect, audit, and wait.',
    advice: 'Use this time for auditing and internal adjustments. Do not force progress.',
    direction: 'North',
    color: 'Indigo & Midnight Blue',
    numbers: '2, 6',
    season: 'Winter',
    domain: 'Delay, entanglement, hidden currents, unfinished business',
    tarotCard: 'XII — The Hanged Man',
    tarotPair: 'The Hanged Man + The Moon',
    jungianArchetype: 'The Mystic / The Orphan',
    light: 'Deep reflection, uncovering hidden factors, strategic patience',
    shadow: 'Paralysis, procrastination, emotional stuckness, covert resistance',
    body: 'Kidneys, bladder, ears',
    phase1: 'Stop pushing. Map all pending items and identify what is actually blocked versus what only feels blocked.',
    phase2: 'Conduct silent due diligence. Do not announce intentions. Let the other side reveal their position first.',
    phase3: 'Re-emerge with a clarified, single-path position. Abandon the alternative options you no longer need.',
    redLine: 'Do not chase, pressure, or make ultimatums. Silence and stillness are your leverage now.',
  },
  {
    id: 'suxi',
    name: 'Su Xi (速喜)',
    symbol: '☉',
    wuxing: 'Fire (火)',
    omen: {
      quality: 'auspicious',
      charge: 2,
      label: 'Auspicious (吉)',
      note: 'The palace of immediate good news. Things arrive quickly — messages, people, approvals. Momentum is high but perishable: the window rewards speed over thoroughness.',
    },
    desc: 'Swift breakthroughs and unexpected positive catalysts. High execution velocity.',
    advice: 'Strike while the iron is hot. Advance your key initiatives immediately.',
    direction: 'South',
    color: 'Crimson, Gold & Vermilion',
    numbers: '3, 7, 9',
    season: 'Summer',
    domain: 'Speed, joy, sudden clarity, decisive opportunity',
    tarotCard: 'XIX — The Sun',
    tarotPair: 'The Sun + The Chariot',
    jungianArchetype: 'The Hero / The Child',
    light: 'Decisive action, infectious momentum, clear wins, luminous confidence',
    shadow: 'Impulsivity, burnout, overconfidence, scattering force',
    body: 'Heart, eyes, tongue',
    phase1: 'Strike immediately on the highest-leverage move. Momentum is perishable; hesitation costs more than a misstep.',
    phase2: 'Consolidate gains before adding new variables. Capture the win in a record, receipt, or confirmation.',
    phase3: 'Cement the victory in writing or public commitment. Do not let enthusiasm outrun the structure.',
    redLine: 'Do not split attention across multiple fronts. One decisive thrust; everything else waits.',
  },
  {
    id: 'chikou',
    name: 'Chi Kou (赤口)',
    symbol: '☌',
    wuxing: 'Metal (金)',
    omen: {
      quality: 'obstructed',
      charge: -2,
      label: 'Obstructed (凶)',
      note: 'The palace of dispute. Words become weapons — arguments, accusations, formal complaints. The traditional remedy is documentary, not verbal: put it in writing and stay out of the room.',
    },
    desc: 'Sharp misunderstandings, vocal disputes, or structural pushback from counterparties.',
    advice: 'Maintain written records. Avoid verbal arguments and reinforce security.',
    direction: 'West',
    color: 'Silver, Bone White & Frost',
    numbers: '4, 8',
    season: 'Autumn',
    domain: 'Conflict, cutting truth, precision, necessary boundaries',
    tarotCard: 'XVI — The Tower',
    tarotPair: 'The Tower + Justice',
    jungianArchetype: 'The Warrior / The Destroyer',
    light: 'Truth, clear boundaries, necessary endings, incisive clarity',
    shadow: 'Argument, alienation, harsh words, destructive rigidity',
    body: 'Lungs, large intestine, skin',
    phase1: 'Gather evidence and written records. Prepare for friction; rehearse the difficult conversation.',
    phase2: 'Deliver the difficult message with precision, not emotion. Use facts and deadlines, not accusations.',
    phase3: 'Stand firm on non-negotiables. Let weak links break; do not bargain away your structural integrity.',
    redLine: 'Do not engage in verbal sparring or make threats you cannot execute. Silence can cut deeper than words.',
  },
  {
    id: 'xiaoji',
    name: 'Xiao Ji (小吉)',
    symbol: '♃',
    wuxing: 'Water (水)',
    omen: {
      quality: 'auspicious',
      charge: 2,
      label: 'Auspicious (吉)',
      note: 'The palace of accord. Negotiations settle, partnerships form, goodwill converts into concrete gain. Best palace for anything requiring the other side to say yes.',
    },
    desc: 'Cooperative progress, mutual benefit, and harmony achieved through partnerships.',
    advice: 'Engage in collaborative discussions and relationship building.',
    direction: 'North-West',
    color: 'Aqua, Seafoam & Pearl',
    numbers: '2, 6, 11',
    season: 'Late Winter',
    domain: 'Small gains, harmony, negotiation, trusted partnership',
    tarotCard: 'VI — The Lovers',
    tarotPair: 'The Lovers + The Star',
    jungianArchetype: 'The Lover / The Caregiver',
    light: 'Cooperative progress, mutual benefit, gentle persuasion, relational trust',
    shadow: 'People-pleasing, diffusion of responsibility, hidden resentment',
    body: 'Kidneys, reproductive system, endocrine balance',
    phase1: 'Open a dialogue. Identify the other party\'s unstated need before stating your own ask.',
    phase2: 'Offer a small, concrete win to build trust. Reciprocity now creates leverage later.',
    phase3: 'Formalize the mutual benefit in a lightweight agreement. Keep obligations specific and bounded.',
    redLine: 'Do not sacrifice your core interest just to keep harmony. A smiling concession becomes a lasting wound.',
  },
  {
    id: 'kongwang',
    name: 'Kong Wang (空亡)',
    symbol: '♄',
    wuxing: 'Earth (土)',
    omen: {
      quality: 'obstructed',
      charge: -2,
      label: 'Obstructed (凶)',
      note: 'The palace of void. What is pursued does not materialise — lost causes, unanswered messages, evaporated intent. Read it as a reset, not a punishment: this path is empty, choose another.',
    },
    desc: 'Dissolution of expectations, lost causes, or a complete cycle system reset.',
    advice: 'Let go of obsolete assumptions. Treat this as a clean-slate reboot.',
    direction: 'Center / Void',
    color: 'Obsidian Black & Deep Amber',
    numbers: '5, 0',
    season: 'Late Summer / Transition',
    domain: 'Emptiness, reset, the unknown, release from old patterns',
    tarotCard: '0 — The Fool',
    tarotPair: 'The Fool + Death',
    jungianArchetype: 'The Trickster / The Seeker',
    light: 'Freedom from old patterns, clean slate, creative possibility, beginner\'s mind',
    shadow: 'Confusion, avoidance, scattering, fear of commitment',
    body: 'Spleen, stomach, muscles',
    phase1: 'Suspend the decision. Ritually close old cycles: archive, delete, forgive, unsubscribe.',
    phase2: 'Wait for new information. Do not fill the void with panic action or premature commitment.',
    phase3: 'Re-enter with a minimal viable experiment, not a grand plan. Test before you scale.',
    redLine: 'Do not force closure or make irreversible commitments until the fog lifts. The void is not an enemy; it is a reset.',
  },
];

// Cultural reference only. Wu Xing (五行) is an independent cosmological
// framework; the six-palace engine does NOT derive from it. This table exists
// so the report appendix can explain the tradition a curious reader will have
// heard of — it must never be fed back into getPalaceFlow or any other reading.
export const WUXING_CYCLE: Record<string, { generates: string; controlledBy: string; controls: string }> = {
  'Wood (木)': { generates: 'Fire (火)', controlledBy: 'Metal (金)', controls: 'Earth (土)' },
  'Fire (火)': { generates: 'Earth (土)', controlledBy: 'Water (水)', controls: 'Metal (金)' },
  'Earth (土)': { generates: 'Metal (金)', controlledBy: 'Wood (木)', controls: 'Water (水)' },
  'Metal (金)': { generates: 'Water (水)', controlledBy: 'Fire (火)', controls: 'Wood (木)' },
  'Water (水)': { generates: 'Wood (木)', controlledBy: 'Earth (土)', controls: 'Fire (火)' },
};

export interface PalaceFlow {
  transition: string;
  narrative: string;
  tone: 'accelerating' | 'stable' | 'friction' | 'reset' | 'harmonizing';
}

export type OmenShift = 'rising' | 'falling' | 'holding';

/**
 * How the omen quality moves from one palace to the next, judged on the
 * palaces' own charge values rather than on any Wu Xing cycle.
 */
export function getOmenShift(from: Palace, to: Palace): OmenShift {
  const delta = to.omen.charge - from.omen.charge;
  if (delta > 0) return 'rising';
  if (delta < 0) return 'falling';
  return 'holding';
}

/** Short clause describing a single palace-to-palace hand-off. */
export function getOmenShiftLabel(from: Palace, to: Palace): string {
  const shift = getOmenShift(from, to);
  if (shift === 'rising') {
    return ` The tide turns in your favour: the reading lifts from ${from.omen.label} toward ${to.omen.label}, so resistance encountered early is not the final word.`;
  }
  if (shift === 'falling') {
    return ` The tide turns against you: the reading drops from ${from.omen.label} toward ${to.omen.label}, so early ease should not be mistaken for a settled outcome.`;
  }
  return ` The signal holds steady at ${to.omen.label}, confirming rather than changing what came before.`;
}

export function getPalaceFlow(month: Palace, day: Palace, hour: Palace): PalaceFlow {
  const short = (p: Palace) => p.name.split(' ')[0];
  const origin = month.omen.quality;
  const pivot = day.omen.quality;
  const outcome = hour.omen.quality;

  // All three coordinates landing on ONE palace is the rarest configuration
  // the system produces — roughly 1 cast in 36. Nothing is qualified or mixed.
  // Match on the palace itself, not merely on its omen quality: three
  // DIFFERENT auspicious palaces is a strong reading, but it is not this.
  if (month.id === day.id && day.id === hour.id) {
    const all =
      outcome === 'auspicious'
        ? `All three coordinates fall on ${short(hour)} — the rarest configuration the system produces, roughly one cast in thirty-six. The reading is not qualified by any counter-current: ${hour.omen.note} Act with conviction and do not second-guess the window.`
        : outcome === 'obstructed'
          ? `All three coordinates fall on ${short(hour)} — the rarest configuration the system produces, roughly one cast in thirty-six. The system is not describing bad luck; it is describing a closed path: ${hour.omen.note} Take the signal seriously and redirect rather than persist.`
          : `All three coordinates fall on ${short(hour)} — the rarest configuration the system produces, roughly one cast in thirty-six. Nothing ripens inside 72 hours: ${hour.omen.note} Any move made now will need re-making later, so the efficient choice is to wait and re-cast.`;
    return { transition: 'Uniform Signal', narrative: all, tone: outcome === 'auspicious' ? 'accelerating' : outcome === 'obstructed' ? 'reset' : 'stable' };
  }

  // The Hour palace is decisive — it is where the matter lands.
  if (outcome === 'obstructed') {
    return {
      transition: 'Terminal Obstruction',
      narrative: `The matter lands on ${short(hour)} (${hour.omen.label}) — ${hour.omen.note} Whatever the opening promised, the decisive vector closes against it. Treat this as a stop signal: contain exposure, put everything in writing, and re-cast after the window rather than pushing through it.`,
      tone: 'friction',
    };
  }

  if (outcome === 'delayed') {
    return {
      transition: 'Open Loop',
      narrative: `The matter lands on ${short(hour)} (${hour.omen.label}) — ${hour.omen.note} Nothing resolves cleanly inside this window. That is not failure but unfinished business: use the 72 hours to gather position rather than to close, and expect the file to reopen.`,
      tone: 'stable',
    };
  }

  // Outcome is auspicious — describe how we got there.
  if (origin === 'obstructed' || origin === 'delayed') {
    return {
      transition: 'Reversal',
      narrative: `The opening reads ${month.omen.label} on ${short(month)}, yet the matter lands auspiciously on ${short(hour)}. This is a reversal: a poor start that does not predict a poor finish. The instinct to abandon early is the thing to resist here — the window improves as it runs.`,
      tone: 'accelerating',
    };
  }

  if (pivot === 'obstructed' || pivot === 'delayed') {
    return {
      transition: 'Late Breakthrough',
      narrative: `A clean opening on ${short(month)} passes through a difficult middle on ${short(day)} (${day.omen.label}) before landing auspiciously on ${short(hour)}. Expect the obstruction to arrive mid-window and to be temporary. Do not renegotiate the whole plan because of it.`,
      tone: 'accelerating',
    };
  }

  return {
    transition: 'Confirmed Ascent',
    narrative: `The reading holds auspicious from ${short(month)} through ${short(day)} and lands on ${short(hour)}. Conditions support the undertaking at every stage. The risk here is not obstruction but complacency — a favourable window still expires in 72 hours.`,
    tone: 'accelerating',
  };
}

export interface ResonantVector {
  omenLabel: string;
  omenNote: string;
  color: string;
  numbers: string;
  direction: string;
  season: string;
  bodyFocus: string;
}

export function getResonantVector(hour: Palace): ResonantVector {
  return {
    omenLabel: hour.omen.label,
    omenNote: hour.omen.note,
    color: hour.color,
    numbers: hour.numbers,
    direction: hour.direction,
    season: hour.season,
    bodyFocus: hour.body,
  };
}

export interface TarotSynthesis {
  pair: string;
  reading: string;
  shadowReading: string;
  jungianMirror: string;
}

export function getTarotSynthesis(hour: Palace): TarotSynthesis {
  return {
    pair: hour.tarotPair,
    reading: `Your decisive vector is mirrored by ${hour.tarotCard}. The paired archetype emphasizes ${hour.jungianArchetype.toLowerCase()} energy: ${hour.light.toLowerCase()}. This is the psychological posture most likely to succeed in the next 72 hours.`,
    shadowReading: `The shadow face warns against ${hour.shadow.toLowerCase()}. If you feel pulled in this direction, pause and return to the ${hour.tarotCard.split(' — ')[1] || 'archetype'} discipline: clarity before intensity.`,
    jungianMirror: hour.jungianArchetype,
  };
}

export interface ActionPlan {
  phase1: string;
  phase2: string;
  phase3: string;
  theme: string;
}

export function get72hPlan(hour: Palace): ActionPlan {
  return {
    phase1: hour.phase1,
    phase2: hour.phase2,
    phase3: hour.phase3,
    theme: hour.advice,
  };
}

export interface Guardrails {
  redLine: string;
  yellowLine: string;
  exitTrigger: string;
}

export function getGuardrails(hour: Palace, question: string = ''): Guardrails {
  const q = question.toLowerCase();
  let yellowLine = '';
  if (q.includes('contract') || q.includes('deal') || q.includes('agreement')) {
    yellowLine = 'Any term not in writing is not a term. Verbal assurances are noise under this palace.';
  } else if (q.includes('job') || q.includes('offer') || q.includes('career')) {
    yellowLine = 'Do not accept a role based on future promises. Verify compensation, scope, and reporting line in writing.';
  } else if (q.includes('relationship') || q.includes('love') || q.includes('partner')) {
    yellowLine = 'Avoid relationship-defining conversations when either party is exhausted or pressured.';
  } else if (q.includes('invest') || q.includes('money') || q.includes('fund')) {
    yellowLine = 'Risk capital must be sized so the loss does not change your sleep or your strategy.';
  } else {
    yellowLine = 'When emotional intensity rises, procedural discipline must rise with it. Never decide in a surge.';
  }
  return {
    redLine: hour.redLine,
    yellowLine,
    exitTrigger: 'If you observe two consecutive signs of resistance, exit the path and re-cast after 72 hours.',
  };
}

export interface ReportMeta {
  validityWindow: string;
  recastGuidance: string;
}

export function getReportMeta(): ReportMeta {
  return {
    validityWindow: 'This reading is calibrated for the 72-hour window from the cast timestamp. After that, the temporal coordinates shift and a fresh cast is recommended.',
    recastGuidance: 'Return to esotericpaths.com, clear your cast history if desired, and cast again with the updated question. Avoid casting the same question twice within 24 hours.',
  };
}

export const ARTICLES = [
  { slug: 'decision-timing-framework-when-to-move', lang: 'en' as const, title: 'The Decision Timing Framework: How to Know When to Move (Not Just What)', readTime: '10 min read' },
  { slug: 'accept-job-offer-now-or-wait', lang: 'en' as const, title: 'Should I Accept the Job Offer Now or Wait?', readTime: '8 min read' },
  { slug: 'ontology-of-time-horary-vs-chronometry', lang: 'en' as const, title: 'The Ontology of Time: Ancient Horary vs Western Chronometry', readTime: '7 min read' },
  { slug: 'xiao-liu-ren-vs-tarot-archetypes', lang: 'en' as const, title: 'Xiao Liu Ren vs. Western Tarot Archetypes', readTime: '6 min read' },
  { slug: 'da-an-strategic-preservation', lang: 'en' as const, title: 'Da An Decoded: Strategic Preservation in Volatile Markets', readTime: '5 min read' },
  { slug: 'horse-mounted-oracle-origins-xiao-liu-ren', lang: 'en' as const, title: 'The Oracle at the Saddle: What Xiao Liu Ren Actually Is — and Is Not', readTime: '9 min read' },
  { slug: 'kong-wang-emptiness-strategic-retreat', lang: 'en' as const, title: 'Kong Wang and the Strategic Uses of Emptiness', readTime: '9 min read' },
  { slug: 'chi-kou-dispute-architecture-bad-faith', lang: 'en' as const, title: 'Chi Kou: The Palace of Dispute and the Case for Writing Things Down', readTime: '10 min read' },
  { slug: 'liu-lian-discipline-of-staying', lang: 'en' as const, title: 'Liu Lian: The Discipline of Staying', readTime: '10 min read' },
  { slug: 'chinese-name-for-business-guide', lang: 'en' as const, title: 'How to Choose a Chinese Name for Business: A Guide for Foreign Executives', readTime: '9 min read' },
  { slug: 'zh-xiao-liu-ren-accuracy', lang: 'zh' as const, title: '小六壬到底准不准：确定性、有效性与决策工效', readTime: '12 分钟' },
  { slug: 'zh-why-72-hours', lang: 'zh' as const, title: '为什么是 72 小时：一个决策窗口的时间心理学依据', readTime: '11 分钟' },
  { slug: 'xiao-liu-ren-for-founders', lang: 'en' as const, title: 'Xiao Liu Ren for Founders: A Practical Guide', readTime: '9 min read' },
  { slug: 'crypto-entry-timing-without-ta', lang: 'en' as const, title: 'How to Time a Crypto Entry Without Technical Analysis', readTime: '8 min read' },
  { slug: 'xiao-liu-ren-vs-i-ching', lang: 'en' as const, title: 'Xiao Liu Ren vs I Ching: Which Divination System for Business Decisions?', readTime: '8 min read' },
  { slug: '72-hour-decision-window', lang: 'en' as const, title: 'The 72-Hour Decision Window: Why We Cap Action After a Cast', readTime: '7 min read' },
  { slug: 'why-western-tarot-struggles-with-exact-timing', lang: 'en' as const, title: 'Why Western Tarot Struggles with Exact Timing (And How Xiao Liu Ren Solves It)', readTime: '8 min read' },
  { slug: 'decision-timing-research-findings', lang: 'en' as const, title: 'Decision Timing Research: 10 Findings on When to Act (And 2 That Failed to Replicate)', readTime: '11 min read' },
  { slug: 'hiring-decision-timing', lang: 'en' as const, title: 'Hiring Decision Timing: When to Make the Offer and When to Wait', readTime: '8 min read' },
  { slug: 'term-sheet-timing', lang: 'en' as const, title: 'Term Sheet Timing: When to Sign and When to Walk Away', readTime: '9 min read' },
  { slug: 'product-launch-timing', lang: 'en' as const, title: 'Product Launch Timing: How to Pick the Day You Only Get Once', readTime: '8 min read' },
  { slug: 'jungian-archetypes-decision-making', lang: 'en' as const, title: 'Jungian Archetypes in Decision-Making: A Practical Framework', readTime: '9 min read' },
];
