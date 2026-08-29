export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  title: string;
  readTime: string;
  excerpt: string;
  sections: ArticleSection[];
}

export const ARTICLE_DETAILS: Record<string, Article> = {
  'accept-job-offer-now-or-wait': {
    slug: 'accept-job-offer-now-or-wait',
    title: 'Should I Accept the Job Offer Now or Wait?',
    readTime: '8 min read',
    excerpt:
      'A practical framework for resolving the "now or later" dilemma using Xiao Liu Ren palace vectors and the 72-hour execution window.',
    sections: [
      {
        heading: 'The Cost of a Premature Yes',
        body: 'Most candidates optimize for the offer itself and ignore the temporal context in which it arrives. A role accepted under a Chi Kou (赤口) vector often carries hidden friction — misaligned reporting lines, a counterparty who renegotiates verbally, or onboarding friction that erodes the first ninety days. The palace active at the moment of the decision is not superstition; it is a compressed read on the structural momentum surrounding the move. Before you answer, classify whether the timing favors consolidation or advance.',
      },
      {
        heading: 'Reading the Month and Day Palaces',
        body: 'Cast the query and read the Month palace as the macro origin of the opportunity and the Day palace as your current pivot. Da An (大安) at the Month level signals a structurally stable employer; Liu Lian (留连) at the Day level warns that the process will drag and that forcing a quick signature creates friction. Su Xi (速喜) at either level is a green light for swift action. The intersection of the two palaces tells you more than the headline salary ever will.',
      },
      {
        heading: 'The 72-Hour Pressure Test',
        body: 'Once you have the vector, run the 72-hour pressure test: list the three binding commitments you would make in the first three days, and check whether each is codifiable in writing. If the attractive parts of the offer exist only as verbal assurances, the palace is telling you to wait. The 72-hour window is not about rushing — it is about compressing deliberation so momentum does not decay into a stale, over-negotiated outcome.',
      },
      {
        heading: 'Decision Protocol',
        body: 'Accept now when the Month and Day palaces both favor advance and the terms are in writing. Wait when Liu Lian dominates or when the only catalyst is a deadline manufactured by the recruiter. Never accept on unverified verbal assurances, regardless of how favorable the palace reading appears.',
      },
    ],
  },
  'ontology-of-time-horary-vs-chronometry': {
    slug: 'ontology-of-time-horary-vs-chronometry',
    title: 'The Ontology of Time: Ancient Horary vs Western Chronometry',
    readTime: '7 min read',
    excerpt:
      'Why classical horary timekeeping and modern chronometry answer different questions — and how to use both without confusing them.',
    sections: [
      {
        heading: 'Two Models of Time',
        body: 'Western chronometry measures time as a uniform, reversible coordinate: 14:32 is 14:32 regardless of context. Horary systems treat the moment of inquiry as qualitatively loaded — the same clock reading produces a different palace depending on the lunar day and the half-hour band. One model is for scheduling; the other is for reading the texture of a decision moment. They are not competitors.',
      },
      {
        heading: 'Horary as a Decision Filter',
        body: 'Use chronometry to plan execution and horary to filter which decisions deserve execution now. When you are uncertain whether to act, the palace vector compresses ambiguity into a single actionable signal: preserve, wait, advance, secure, collaborate, or reset. This is the ontology most operators actually need under ambiguity.',
      },
      {
        heading: 'When Chronometry Fails',
        body: 'Chronometry fails precisely where it is most trusted: at the crossroads. A Gantt chart cannot tell you that this week is structurally wrong for a launch. The calendar says "available"; the ephemeris says "sticky." The experienced operator trusts the calendar for sequencing and the palace for timing the trigger.',
      },
      {
        heading: 'Synthesis',
        body: 'Deploy both. Let chronometry govern the plan and horary govern the trigger. The Esoteric Paths matrix exists to make that synthesis deterministic rather than intuitive — a reproducible read you can defend to a board.',
      },
    ],
  },
  'xiao-liu-ren-vs-tarot-archetypes': {
    slug: 'xiao-liu-ren-vs-tarot-archetypes',
    title: 'Xiao Liu Ren vs. Western Tarot Archetypes',
    readTime: '6 min read',
    excerpt:
      'Mapping the six Xiao Liu Ren palaces onto Jungian archetypes to enrich — not replace — your strategic reading.',
    sections: [
      {
        heading: 'Six Palaces, Six Archetypes',
        body: 'Da An reads like the Emperor: structural, stabilizing, conservative. Su Xi reads like the Chariot: velocity and breakthrough. Kong Wang (空亡) is the Hanged Man — dissolution and reset. The mapping is not decorative; it gives English-speaking operators a vocabulary drawn from Jungian depth psychology, which is already part of how executives frame narrative and risk.',
      },
      {
        heading: 'Where Tarot Adds Signal',
        body: 'Tarot contributes archetypal narrative; Xiao Liu Ren contributes temporal precision. Used together, the palace tells you when, the archetype tells you what story is being enacted. A negotiation that lands on Chi Kou while the counterparty is operating from the trickster archetype is a negotiation to document, not to trust verbally.',
      },
      {
        heading: 'Avoiding Projection Traps',
        body: 'The danger is reading your own anxiety into the spread. The palace calculation is deterministic and external; the archetype is interpretive and internal. Keep the palace as the anchor and treat the archetype as a lens. When they disagree, the palace wins.',
      },
      {
        heading: 'Combined Reading',
        body: 'Cast the query, lock the three palaces, then overlay the archetypal frame only to narrate the result to stakeholders. This keeps the output defensible while making it legible to a Western executive audience.',
      },
    ],
  },
  'da-an-strategic-preservation': {
    slug: 'da-an-strategic-preservation',
    title: 'Da An Decoded: Strategic Preservation in Volatile Markets',
    readTime: '5 min read',
    excerpt:
      'Da An (大安) is the palace of grounded stability. Here is how to deploy it deliberately in volatile markets.',
    sections: [
      {
        heading: 'The Signal of Da An',
        body: 'Da An means the ground is structurally sound. In a volatile market this is rare and valuable: it argues for holding position, securing existing leverage, and resisting the pressure to expand into uncertainty. Operators chronically mistake stability for boredom and over-rotate. Da An is the permission to do less, better.',
      },
      {
        heading: 'Preservation Over Expansion',
        body: 'When Da An anchors your Month palace, the highest-value move is to codify what you already have — contracts, key relationships, cash positions — rather than to chase a new front. The 72-hour window should be spent on an audit of leverage, not on a launch.',
      },
      {
        heading: 'When Da An Turns Stale',
        body: 'Preservation becomes stagnation if held past its window. If the Day palace shifts to Su Xi while the Month remains Da An, the signal is: consolidate first, then advance on a specific, narrow front. Stability without a trigger is just inertia.',
      },
      {
        heading: 'Execution Notes',
        body: 'Use Da An to say no cleanly. Document terms, secure counterparties in writing, and avoid impulsive risk. The palace does not forbid action — it forbids uncoordinated action.',
      },
    ],
  },
};
