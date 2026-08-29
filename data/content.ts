export interface Palace {
  id: string;
  name: string;
  symbol: string;
  wuxing: string;
  element: string;
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
    element: 'Wood',
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
    element: 'Water',
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
    element: 'Fire',
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
    element: 'Metal',
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
    element: 'Water',
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
    element: 'Earth',
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

export function getWuxingRelation(from: Palace, to: Palace): 'generates' | 'controls' | 'controlledBy' | 'same' {
  if (from.wuxing === to.wuxing) return 'same';
  const cycle = WUXING_CYCLE[from.wuxing];
  if (cycle.generates === to.wuxing) return 'generates';
  if (cycle.controls === to.wuxing) return 'controls';
  return 'controlledBy';
}

export function getPalaceFlow(month: Palace, day: Palace, hour: Palace): PalaceFlow {
  const m2d = getWuxingRelation(month, day);
  const d2h = getWuxingRelation(day, hour);

  if (m2d === 'generates' && d2h === 'generates') {
    return {
      transition: 'Momentum Chain',
      narrative: `The macro origin (${month.name}) naturally feeds the current pivot (${day.name}), which in turn ignites the decisive vector (${hour.name}). This is a momentum chain: conditions are aligned to carry your intention forward with minimal resistance.`,
      tone: 'accelerating',
    };
  }
  if (m2d === 'controls' || d2h === 'controls') {
    return {
      transition: 'Controlled Friction',
      narrative: `A controlling relationship appears between your palaces—${m2d === 'controls' ? `${month.name} restrains ${day.name}` : `${day.name} restrains ${hour.name}`}. This is not a block; it is a brake. The system is asking you to slow down and verify before accelerating.`,
      tone: 'friction',
    };
  }
  if (m2d === 'controlledBy' || d2h === 'controlledBy') {
    return {
      transition: 'Counter-Current',
      narrative: `The flow runs against you: ${m2d === 'controlledBy' ? `${day.name} dampens ${month.name}` : `${hour.name} dampens ${day.name}`}. External conditions or internal assumptions are draining your energy. Adaptation, not force, is the correct response.`,
      tone: 'friction',
    };
  }
  if (m2d === 'same' && d2h === 'same') {
    return {
      transition: 'Monochrome Signal',
      narrative: `All three palaces share the same elemental current (${month.wuxing}). The message is unusually pure and concentrated: ${month.domain.toLowerCase()} dominates this window. Do not dilute the signal with unrelated moves.`,
      tone: 'stable',
    };
  }
  if (d2h === 'same') {
    return {
      transition: 'Pivot Lock',
      narrative: `The current pivot and decisive vector resonate on the same frequency (${day.wuxing}). The immediate future confirms the present moment. Consistency and repetition of the same strategy will outperform variety.`,
      tone: 'stable',
    };
  }
  return {
    transition: 'Neutral Flux',
    narrative: `The three palaces move through different elemental currents without strong generation or control. This is a neutral flux: outcomes depend more on your chosen actions than on the temporal tide. Maintain situational awareness.`,
    tone: 'stable',
  };
}

export interface ResonantVector {
  element: string;
  color: string;
  numbers: string;
  direction: string;
  season: string;
  bodyFocus: string;
}

export function getResonantVector(hour: Palace): ResonantVector {
  return {
    element: hour.wuxing,
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
  { slug: 'accept-job-offer-now-or-wait', title: 'Should I Accept the Job Offer Now or Wait?', readTime: '8 min read' },
  { slug: 'ontology-of-time-horary-vs-chronometry', title: 'The Ontology of Time: Ancient Horary vs Western Chronometry', readTime: '7 min read' },
  { slug: 'xiao-liu-ren-vs-tarot-archetypes', title: 'Xiao Liu Ren vs. Western Tarot Archetypes', readTime: '6 min read' },
  { slug: 'da-an-strategic-preservation', title: 'Da An Decoded: Strategic Preservation in Volatile Markets', readTime: '5 min read' },
];
