export interface InsightFAQ {
  q: string;
  a: string;
}

export interface InsightAnchor {
  situation: string; // 当下场景（决策者第一眼看到的痛点承认）
  cta: string;      // 引导动作：读完这篇后该做什么
}

// 给7篇决策意图文章挂FAQ + 场景锚点
// 仅覆盖决策意图词（搜索者买得起 $19、有具体决策压力）
export const INSIGHT_FAQS: Record<string, { faqs: InsightFAQ[]; anchor: InsightAnchor }> = {
  'accept-job-offer-now-or-wait': {
    anchor: {
      situation: 'You have an offer in writing and the deadline feels short. The recruiter said "we need an answer by Friday." You have read reviews. You have asked friends. You still do not know.',
      cta: 'Cast with the moment you need to decide. We will return a 72-hour window and a palace reading that tells you whether the timing itself favors moving or holding.',
    },
    faqs: [
      {
        q: 'Should I take the job offer or wait for a better one?',
        a: 'Cast Xiao Liu Ren at the moment you actually need to decide. The Day palace marks the present pivot; the Hour palace marks where the decision lands. A clean Month collapsing into Chi Kou warns the offer itself is fine but the surrounding friction will cost you.',
      },
      {
        q: 'How long do I have to decide on a job offer?',
        a: 'There is no universal window. Xiao Liu Ren treats every cast as a snapshot — the reading is valid for 72 hours because configurations decay. If you cast today and get a Su Xi (swift) reading, the window for clean acceptance is hours to a few days, not weeks.',
      },
      {
        q: 'What if I am overthinking the job offer?',
        a: 'Overthinking is itself a reading: Liu Lian (stalled, circling) is the most common palace when a founder or operator cannot stop re-checking the same offer. The protocol is to audit what you are actually missing, then commit to a fresh cast instead of recycling yesterday\'s.',
      },
    ],
  },
  'term-sheet-timing': {
    anchor: {
      situation: 'The term sheet is in your inbox. The investor wants a signature by end of week. You have redlined it twice. You can feel the pressure to just sign.',
      cta: 'Cast before you reply. The Hour palace will tell you whether the moment favors signing, walking, or negotiating one more term. Never let an external deadline be the only thing in the room.',
    },
    faqs: [
      {
        q: 'When should I sign a term sheet?',
        a: 'Cast at the moment the signature feels imminent. A Su Xi or Xiao Ji Hour palace means the configuration favors moving now; a Chi Kou Hour means the document itself is fine but the surrounding conversation will turn costly in 72 hours.',
      },
      {
        q: 'Is it ever right to walk away from a term sheet?',
        a: 'Yes. Kong Wang (the void) in the Hour palace is the classic "the path is empty" reading — the term sheet is not bad, but the underlying deal will not close on the structure offered. Walk and redirect; do not renegotiate.',
      },
      {
        q: 'What if the term sheet is good but the timing feels wrong?',
        a: 'Separate the document from the moment. Da An in the Hour means the deal is real and the timing is not. Ask for 72 hours, document your position, and recast. A good deal signed at the wrong moment still costs the same as a bad deal.',
      },
    ],
  },
  'hiring-decision-timing': {
    anchor: {
      situation: 'You have two finalists. Both are good. The pressure is mounting because the role has been open eight weeks and your team is tired.',
      cta: 'Cast on each finalist at separate moments. The palace reading for each candidate is independent. If both return Xiao Ji or Su Xi, choose by terms; if one returns Chi Kou or Kong Wang, you have your answer.',
    },
    faqs: [
      {
        q: 'When is the right time to make a job offer?',
        a: 'Cast when the shortlist is set. A Xiao Ji or Su Xi Hour means the candidate\'s own timing aligns with yours — they will say yes cleanly. A Chi Kou Hour means friction in negotiation or onboarding; a Kong Wang Hour means the role is empty for this person.',
      },
      {
        q: 'Should I extend an offer now or wait?',
        a: 'Only extend inside a clean Day palace (favorable present) landing in Xiao Ji or Su Xi Hour. Outside that, the candidate will say yes but the surrounding conversation will cost you. Wait, document, recast within 72 hours.',
      },
      {
        q: 'How do I decide between two strong candidates?',
        a: 'Cast separately on each. The palace reading is independent of your judgment — it tells you whether the moment favors THIS candidate\'s integration into your team. Use it to break ties, not to overrule a clear skill mismatch.',
      },
    ],
  },
  'product-launch-timing': {
    anchor: {
      situation: 'The product is ready. The launch date is set in two weeks. The team is asking "should we push or hold?" You are tired.',
      cta: 'Cast on the proposed launch day, not today. Compare it against the alternative day. The palace reading for each date tells you which window is structurally favorable and which is structurally obstructed.',
    },
    faqs: [
      {
        q: 'When is the best day to launch a product?',
        a: 'Cast Xiao Liu Ren on the proposed launch moment. Su Xi Day + Xiao Ji Hour is the textbook launch window: external momentum favors you and the surrounding conversation aligns. Avoid Chi Kou Hour — feedback channels will turn adversarial in the first 72 hours.',
      },
      {
        q: 'Should I delay a product launch?',
        a: 'Only delay inside a clear Kong Wang or Chi Kou Day palace. The reading tells you the launch date itself is structurally obstructed. Reschedule to a window where Day and Hour are clean; do not launch into friction just because you are tired.',
      },
      {
        q: 'Is there a bad time to launch?',
        a: 'Yes. Liu Lian (stalled) days produce launches that lose momentum in the first 48 hours. Chi Kou days produce launches that attract criticism disproportionate to the product. Cast for a Su Xi or Xiao Ji window and the early signal will reflect the timing, not the product.',
      },
    ],
  },
  'decision-timing-framework-when-to-move': {
    anchor: {
      situation: 'You have made lists. You have done pre-mortems. The decision is still hard. The framework feels complete but the moment feels wrong.',
      cta: 'Cast before applying the framework. Xiao Liu Ren does not replace the analysis — it sits in front of it. Inside a clean window your analysis lands; outside one the same analysis gets distorted by structural drag.',
    },
    faqs: [
      {
        q: 'How do you know when to make a decision?',
        a: 'A decision is structurally favored when the Day palace reads clean (Da An, Su Xi, or Xiao Ji) and the Hour palace resolves favorably. A decision is structurally obstructed when the Hour reads Chi Kou or Kong Wang regardless of how clean the Month and Day look.',
      },
      {
        q: 'What is the decision timing framework?',
        a: 'Xiao Liu Ren is one layer of a working decision-timing framework. The standard stack is: (1) strategic analysis (Porter, BCG, pre-mortem); (2) timing check (Xiao Liu Ren palace reading); (3) 72-hour execution window. Each layer answers a different question; skip one and the others get distorted.',
      },
      {
        q: 'When should you not make a decision?',
        a: 'Hold inside Chi Kou (words become weapons) or Kong Wang (the void) Days. The decision is not wrong — the moment is. Suspend, document, recast within 72 hours, and only commit when the configuration is favorable.',
      },
    ],
  },
  '72-hour-decision-window': {
    anchor: {
      situation: 'You read the room and decided. Three days later, the counterparty has moved, your conviction has shifted, and you are unsure whether the reading still holds.',
      cta: 'Recast. Every Xiao Liu Ren reading is a snapshot — valid for 72 hours because configurations decay. If you are past that window, treat the original reading as expired and run a fresh cast for the moment you are in now.',
    },
    faqs: [
      {
        q: 'Why is the decision window 72 hours?',
        a: 'Situations decay. The counterparty you were reading on Monday has had four conversations since. The price moved. Your own conviction has cooled or hardened for reasons unrelated to the analysis. A 72-hour window treats the reading as a weather window for a crossing, not a permanent verdict on the route.',
      },
      {
        q: 'How long is a Xiao Liu Ren reading valid?',
        a: '72 hours from the cast moment. Inside the window, act on the reading. After the window, the moment is gone and a fresh cast is required. Using a stale reading is the most common source of bad decisions in this system.',
      },
      {
        q: 'Can a decision window be extended?',
        a: 'No. Each cast is a snapshot of a specific configuration. If you need a longer decision horizon, recast at the relevant moment and treat that new reading as the active one. Do not average or interpolate across windows.',
      },
    ],
  },
  'crypto-entry-timing-without-ta': {
    anchor: {
      situation: 'You have done the research. The chart looks good. The narrative is there. You are staring at the order ticket and the question is not "is this a good project" but "is this the right moment."',
      cta: 'Cast at the moment you are about to click buy. The Hour palace tells you whether the configuration favors entering now or holding. The reading does not replace chart analysis — it sits in front of it.',
    },
    faqs: [
      {
        q: 'How do you time a crypto entry without technical analysis?',
        a: 'Cast Xiao Liu Ren at the decision moment. Su Xi or Xiao Ji Hour favors entering. Chi Kou Hour warns the surrounding conversation will turn adversarial within 72 hours. Kong Wang Hour means the path you are pursuing is empty.',
      },
      {
        q: 'Should I buy crypto now or wait?',
        a: 'Cast before placing the order. The palace reading is independent of price action — it tells you whether the moment favors moving, not whether the price is right. Combine the reading with your existing analysis.',
      },
      {
        q: 'When is the worst time to enter a position?',
        a: 'Chi Kou and Kong Wang Days are structurally obstructed. Positions opened on those days get distorted by external friction in the first 72 hours. The trade may still work, but the path will cost more than it needs to.',
      },
    ],
  },
};

export function getInsightFAQs(slug: string) {
  return INSIGHT_FAQS[slug];
}