export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  lang: 'en' | 'zh';
  title: string;
  readTime: string;
  excerpt: string;
  sections: ArticleSection[];
}

export const ARTICLE_DETAILS: Record<string, Article> = {
  'decision-timing-framework-when-to-move': {
    slug: 'decision-timing-framework-when-to-move',
    lang: 'en',
    title: 'The Decision Timing Framework: How to Know When to Move (Not Just What)',
    readTime: '10 min read',
    excerpt:
      'Every decision framework answers "what should I do" and ignores when. How to read the six palaces as a tempo instrument — advance, hold, stall, or redirect.',
    sections: [
      {
        heading: 'The Variable Nobody Puts in the Framework',
        body: 'Every serious decision framework answers the same question: what should I do? Weighted matrices, first-principles reasoning, second-order thinking, pre-mortems — all of them optimize for the choice itself and treat timing as an afterthought, something you handle once the analysis is finished. That is backwards. The same decision made on Tuesday and made three weeks later is not the same decision. The counterparty has moved, your leverage has shifted, the information set has either decayed or sharpened. Most framework failures are not failures of analysis. They are failures of timing: you were right about what, and wrong about when.',
      },
      {
        heading: 'What a Timing System Actually Has to Measure',
        body: 'For a timing judgment to be useful rather than decorative it has to be deterministic. Not "the vibe feels right" — the same input must produce the same output, or you cannot test it, cannot argue with it, and cannot learn from it. Xiao Liu Ren 小六壬 reduces any moment to six palaces, each carrying a distinct momentum signature: Da An 大安 — the ground holds, consolidate rather than advance. Liu Lian 留连 — affairs drag, forcing increases friction. Su Xi 速喜 — a fast opening, move before it closes. Chi Kou 赤口 — dispute, put it in writing and stay out of the room. Xiao Ji 小吉 — accord, the best palace for anything that needs another party to say yes. Kong Wang 空亡 — void, redirect rather than persist. These are not personality descriptions. They are instructions about tempo.',
      },
      {
        heading: 'Three Coordinates, Not One',
        body: 'A single palace tells you the flavour of a moment. Three palaces tell you the shape of a decision. The Month palace is the macro origin — the structural background the opportunity arrives against. The Day palace is the pivot — where the matter currently sits and whether it is moving. The Hour palace is the landing — where the thing actually resolves. Read them as a sequence, not a score. A clean Month reading that decays into an obstructed Hour is a specific warning: the opening is real and the finish is not. Reversals matter more than averages. A poor start that lands auspiciously is a different animal from a strong start that collapses, and only the sequence tells you which one you are in.',
      },
      {
        heading: 'Why the Window Expires',
        body: 'Every cast is capped at 72 hours, and the reason is banal rather than mystical: situations decay. The counterparty you were reading on Monday has had four conversations since. The price moved. Your own conviction cooled or hardened for reasons unrelated to the analysis. A timing judgment is a snapshot of a specific configuration, and configurations do not hold still. Treat a reading like a weather window for a crossing, not a permanent verdict on the route. Inside 72 hours, act on it. After that, re-cast — you are no longer reading the same moment.',
      },
      {
        heading: 'The Protocol',
        body: 'Move when the Hour palace reads Su Xi or Xiao Ji and the terms are codifiable in writing. Hold when Da An dominates and nothing is being lost by waiting. Do not sign under Chi Kou — put everything in writing and let the dispute cool first. Do not persist under Kong Wang; the void is not an obstacle to push through, it is information that this path is empty. Under Liu Lian, audit rather than accelerate, because the delay is carrying data. One rule overrides all of the above: no palace reading justifies a commitment that exists only verbally. Timing tells you when to move. It does not make a bad agreement good.',
      },
    ],
  },
  'accept-job-offer-now-or-wait': {
    slug: 'accept-job-offer-now-or-wait',
    lang: 'en',
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
    lang: 'en',
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
    lang: 'en',
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
    lang: 'en',
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

  /* ============================================================
     EN — sourced / classical register
     ============================================================ */

  'horse-mounted-oracle-origins-xiao-liu-ren': {
    slug: 'horse-mounted-oracle-origins-xiao-liu-ren',
    lang: 'en',
    title: 'The Oracle at the Saddle: What Xiao Liu Ren Actually Is — and Is Not',
    readTime: '9 min read',
    excerpt:
      'Attributed to Zhuge Liang, absent from the classical canon, and structurally more interesting than either fact suggests. An honest genealogy of the horse-mounted oracle.',
    sections: [
      {
        heading: 'An Honest Starting Point',
        body: 'Xiao Liu Ren (小六壬) is usually introduced as the divination system Zhuge Liang used on horseback — hence its popular name, Ma Qian Ke (马前课), the lesson taken before the horse. Almost none of that survives scrutiny. The attribution is a folk tradition rather than a textual one, and the earliest substantial descriptions appear not in Han or Three Kingdoms sources but in late imperial almanacs of the Tong Shu (通书) tradition, most notably the Yu Xia Ji (玉匣记), a calendrical compendium circulating under the name of the Daoist figure Xu Xun from the Ming period onward. If you were hoping for a two-thousand-year-old state secret, the paperwork does not exist. What exists instead is better suited to our purpose: a compact, fully deterministic procedure whose internal logic can be examined line by line.',
      },
      {
        heading: 'The Great Liu Ren and Its Small Cousin',
        body: 'The name itself is a clue. Da Liu Ren (大六壬), the great system, is a genuine classical art. It appears in the bibliographic treatise of the Sui Shu (隋书·经籍志), and by the Tang and Song it had produced a substantial technical literature built on a heavenly-pan and earthly-pan board, four courses (四课) and three transmissions (三传), with a pantheon of spirit-officials and several hundred possible configurations. Xiao Liu Ren borrows the name and the six-fold vocabulary — Da An, Liu Lian, Su Xi, Chi Kou, Xiao Ji, Kong Wang — and discards the board entirely. What remains is arithmetic performed on the joints of the fingers. This is degeneration only if you value completeness; it is portability if you value an answer now, on a road, without equipment.',
      },
      {
        heading: 'Counting on the Knuckles',
        body: 'The procedure is worth stating plainly because it demystifies most of the apparatus. Taking the lunar month as origin, one counts forward to the day, then from the day to the hour, cycling through the six palaces modulo six. Given the same moment, two practitioners working independently produce the same three palaces, every time. There is no intuition channel, no spirit voice, and no room for the reader to smuggle private impressions into the calculation. This property — reproducibility — is the one the system genuinely possesses, and it is worth considerably more than the property people usually assume it possesses.',
      },
      {
        heading: 'The Problem Cicero Could Not Resolve',
        body: 'Rome had exactly the same argument. Cicero held the office of augur, an official diviner, and wrote De Divinatione (44 BC), in which his brother Quintus defends the practice and Cicero himself, in the second book, dismantles it methodically — observing among other things that the sacred chickens of the augurs seemed to eat enthusiastically precisely when their handlers wanted them to. Cicero did not resign the augurate. The point of the book is not that divination is nonsense; it is that holding an office and endorsing its premises are separable things. Operators have always used formal procedures whose metaphysical warrant they decline to sign, because the procedure does work that the metaphysics does not. It forces a pause, it fixes a moment, and it commits a group to a shared reading of the situation.',
      },
      {
        heading: 'What Survives the Demotion',
        body: 'Strip away the attribution to Zhuge Liang and you lose a legend. Strip away the claim that the palaces predict outcomes and you lose a promise that was never supportable. What remains is a temporal indexing device: a way of giving a decision moment a determinate address, so that the deliberation attached to it can be recorded, revisited, and compared against what actually happened. That is the use made of it here. The palaces are not an oracle speaking about your future; they are a coordinate system for your own reasoning. And a coordinate system is judged by whether it helps you navigate, not by who is supposed to have invented it.',
      },
    ],
  },

  'kong-wang-emptiness-strategic-retreat': {
    slug: 'kong-wang-emptiness-strategic-retreat',
    lang: 'en',
    title: 'Kong Wang and the Strategic Uses of Emptiness',
    readTime: '9 min read',
    excerpt:
      'The sixth palace is the one readers hope never to draw. Daoist, Buddhist and depth-psychological sources all suggest the opposite: emptiness is the condition under which a new form becomes possible.',
    sections: [
      {
        heading: 'The Palace Nobody Wants',
        body: 'Kong Wang (空亡) translates roughly as emptiness and loss, and most casual guides treat it as the worst of the six. This is a misreading with expensive consequences, because the instruction the palace actually carries is not that you have failed but that this channel is not currently transmitting. Those are very different claims. One concerns your worth; the other concerns the signal quality of a particular course of action at a particular moment. Only the second is actionable.',
      },
      {
        heading: 'The Empty Hub',
        body: 'The locus classicus for taking emptiness seriously is Daodejing chapter 11. Thirty spokes converge on a hub, but it is the hole at the centre that makes the wheel useful. Clay is shaped into a vessel, but it is the hollow inside that makes it hold anything. Doors and windows are cut into a wall, and it is the openings that make a room habitable. The chapter concludes: we work with being, we use non-being (有之以为利，无之以为用). This is not mystical vagueness. It is a precise claim about function — the capacity of a system frequently resides in what it does not currently contain.',
      },
      {
        heading: 'Emptiness Is Not Nihilism',
        body: 'The Buddhist technical term śūnyatā is routinely mistranslated into pessimism. In the Mūlamadhyamakakārikā of Nāgārjuna, emptiness names the fact that phenomena lack independent, self-standing essence: they arise dependently. The Heart Sutra formula — form is emptiness, emptiness is form — is making an identity claim, not a subtraction. Emptiness is not what remains once things are removed; it is the manner in which things exist at all. Applied to a decision, the lesson is that a void where you expected a signal is not a verdict on you. It is information about conditions, and conditions are the one part of any situation you can actually act on.',
      },
      {
        heading: 'The Empty Room Fills With Light',
        body: 'Zhuangzi gives the image in the chapter on the human world: the empty room gives rise to brightness (虚室生白). Jung arrives at a structurally similar place from the opposite direction. In his work on active imagination, and in the material eventually published as the Red Book, the encounter with an apparently barren inner state is treated as the precondition for psychic material to reorganise — not as evidence that the psyche has broken. In both accounts the correct response to a vacant field is to stop filling it. The operator who reacts to Kong Wang by forcing an initiative is doing the single thing the situation rules out.',
      },
      {
        heading: 'What To Do With an Empty Reading',
        body: 'Three moves, in order. First, stop committing new resources: an untransmitting channel makes every additional deposit more expensive, not less. Second, shift from initiative to instrumentation — if you cannot act profitably you can still measure, and the data you collect now is what makes the next window legible. Third, set a review point rather than a deadline; emptiness has a duration you cannot shorten by will. Then there is the case the guides never mention. Kong Wang at the Hour palace following a strong Month palace routinely means the initiative is sound and the timing is not. The reading is not telling you to abandon the plan. It is telling you that today is not the day.',
      },
    ],
  },

  'chi-kou-dispute-architecture-bad-faith': {
    slug: 'chi-kou-dispute-architecture-bad-faith',
    lang: 'en',
    title: 'Chi Kou: The Palace of Dispute and the Case for Writing Things Down',
    readTime: '10 min read',
    excerpt:
      'Red Mouth is the palace of contested speech. Sun Tzu, Machiavelli and the mathematics of repeated games converge on the same protocol — and it is not the one most people reach for.',
    sections: [
      {
        heading: 'Red Mouth',
        body: 'Chi Kou (赤口) carries the sense of a quarrel, of words that wound, of a dispute in which the spoken word cannot be trusted to remain where it was put. It is the palace that turns up in negotiation readings, and the popular advice attached to it is avoidance: do not talk, do not sign, wait it out. Avoidance is defensible and incomplete. The palace is telling you something specific about the reliability of communication, and the correct response is not silence but documentation.',
      },
      {
        heading: 'Do Not Rely on Their Not Coming',
        body: 'Sun Tzu states the principle in the chapter on the nine variations: do not rely on their not coming, but rely on my readiness to receive them; do not rely on their not attacking, but rely on what cannot be attacked (无恃其不来，恃吾有以待也). The instruction concerns the locus of control. Sun Tzu is not advising you to predict the counterparty. He is advising you to make your position independent of their goodwill. In a Chi Kou window that is the entire game: you cannot verify intent, so you structure the exchange so that verification becomes unnecessary.',
      },
      {
        heading: 'The Promise Problem',
        body: 'Machiavelli handles the same problem from the ruler side in chapter 18 of The Prince, arguing that a prince who keeps every promise in a world of unreliable parties will be ruined by those who do not. It is the most quoted passage in the book and the most misread. Quentin Skinner and Leo Strauss, from very different directions, both pressed the question of whether the work is a manual or a warning — whether the argument is that rulers ought to behave badly, or that this is what ruling under these conditions does to anyone. For our purposes the ambiguity is productive, because the underlying claim is structural rather than moral: in a low-trust environment, verbal assurance carries negligible value regardless of who is speaking.',
      },
      {
        heading: 'Tit for Tat and the Shadow of the Future',
        body: 'Game theory reaches a compatible conclusion and, more usefully, supplies the mechanism. In a one-shot prisoner dilemma, defection is individually rational. In the iterated version — the situation most business relationships actually occupy — the tournaments run by Robert Axelrod found that a simple strategy of cooperating first and then mirroring the counterparty previous move outperformed more sophisticated approaches. Its strength depended on a condition: the shadow of the future had to be long enough that cheating today cost more tomorrow. Where that shadow is short or uncertain, defection reasserts itself. Chi Kou is precisely the palace in which the shadow of the future is short. The remedy is to lengthen it artificially, which is what a written agreement, a deposit, a milestone schedule and a named consequence actually do.',
      },
      {
        heading: 'The Protocol',
        body: 'When Chi Kou governs your Hour palace, run four steps. Codify: every material term goes into writing before the conversation ends, and anything the counterparty declines to write down is treated as not agreed. Escalate the formality rather than the tone, because a Chi Kou reading rewards a lawyer and punishes a hard sell. Separate the relationship from the transaction, since the palace attacks communication, not goodwill. And if the counterparty resists documentation, treat that resistance as the most informative signal available: in a repeated game, the party who refuses to lengthen the shadow of the future has told you their intended move. Sun Tzu would put it more briefly. They have told you to be ready.',
      },
    ],
  },

  'liu-lian-discipline-of-staying': {
    slug: 'liu-lian-discipline-of-staying',
    lang: 'en',
    title: 'Liu Lian: The Discipline of Staying',
    readTime: '10 min read',
    excerpt:
      'The palace of lingering is the hardest to accept in a culture that treats velocity as a virtue. The Yijing, Seneca and the mathematics of reversible decisions all say the same thing.',
    sections: [
      {
        heading: 'An Insult to Velocity',
        body: 'Liu Lian (留连) means lingering, sticking, being held in place. In a business culture that treats speed as evidence of competence it is the least welcome of the six palaces, and the most frequently misread. The error is to treat lingering as the absence of a decision. In the classical reading it is a decision with specific content: hold position, let the situation develop, and do not spend optionality on a move that cannot be recalled.',
      },
      {
        heading: 'Xu: Waiting Is Not Passivity',
        body: 'The Yijing has a hexagram for exactly this, and it is the fifth: Xu (需), rendered as waiting or as nourishment. The image is water above heaven — cloud gathered, rain not yet fallen. The judgment is favourable rather than cautionary: Xu, sincerity, brilliant success, constancy brings good fortune (需，有孚，光亨，贞吉). The commentary is explicit that the waiting is purposeful and provisioned; the imagery throughout the hexagram is of eating, drinking and feasting while one waits. This is not paralysis. It is a camp with supplies laid in, positioned where the road must pass.',
      },
      {
        heading: 'Calypso and the Comfortable Island',
        body: 'Homer supplies the cautionary version. Odysseus spends seven years on Ogygia with Calypso, who offers him immortality and a permanently agreeable present tense. What makes the episode a failure of waiting rather than a triumph of it is that Odysseus has no deadline and no re-entry plan; he weeps on the shore and stays anyway. The distinction matters because it separates Liu Lian from simple drift. Waiting with a departure condition is strategy. Waiting without one is a comfortable island, and the danger of a comfortable island is that you stop noticing the years.',
      },
      {
        heading: 'The Arithmetic of Time',
        body: 'Seneca, writing On the Shortness of Life to his father-in-law Paulinus, opens with the complaint that human beings blame nature for giving them too little time when the evidence points the other way: we are not given a short life, we make it short, and life is long enough to be well invested. His target is not slowness but spending — time disbursed on matters that return nothing. Read that way, Seneca is an ally of Liu Lian rather than a critic. A deliberate pause that preserves your capacity to act later is well invested. A flurry of motion aimed at nothing is not.',
      },
      {
        heading: 'Reversible and Irreversible',
        body: 'The cleanest modern statement belongs to Jeff Bezos, who distinguished in his 2015 shareholder letter between Type 1 decisions — consequential and effectively irreversible — and Type 2 decisions, which are changeable and recoverable. His rule is that Type 2 decisions should be made fast and low in the organisation, while Type 1 decisions require deliberation precisely because they cannot be undone. He also offered a threshold: most decisions should be made with something like seventy percent of the information you wish you had, because waiting for ninety percent is usually waiting too long. Jesse Livermore put the trading version in one sentence in Reminiscences of a Stock Operator: it never was my thinking that made the big money for me, it always was my sitting. Both describe a threshold effect. Where a decision is reversible, speed is nearly free and delay is nearly pure cost. Where it is not, delay is the cheapest insurance available.',
      },
      {
        heading: 'When Lingering Turns',
        body: 'Liu Lian has an expiry, and the Yijing marks it. The top line of Xu describes the point at which the waiting has overrun itself — uninvited guests arrive, and the instruction is to receive them respectfully rather than to fight, because the situation has changed under you. Hamlet is the Western study of the same failure, and the usual summary gets it wrong. Hamlet does not suffer from excessive deliberation. He suffers from deliberation that never terminates: he commissions a test, then a play, then a delay, and each generates a fresh reason to postpone. That is the pathology Liu Lian slides into when a review point is never set. The discipline the palace asks for is not infinite patience. It is patience with a date on it.',
      },
    ],
  },

  'chinese-name-for-business-guide': {
    slug: 'chinese-name-for-business-guide',
    lang: 'en',
    title: 'How to Choose a Chinese Name for Business: A Guide for Foreign Executives',
    readTime: '9 min read',
    excerpt:
      'Why a good Chinese name matters in boardrooms, how meaning differs from translation, and a simple protocol for choosing one that carries authority.',
    sections: [
      {
        heading: 'A Name Is a Contract Before the Contract',
        body: 'In Chinese business culture the exchange of names is not a pleasantry — it is the first clause of a relationship. A well-chosen Chinese name signals that you understand the local grammar of respect: that relationships precede transactions, and that a person who has taken the time to be named properly is more likely to take the time to honor commitments. The reverse is also true. A foreign executive who uses only a phonetic string of characters that happens to sound like the original English name is telling the room, without meaning to, that this market is an afterthought. If you are serious about doing business in China, a Chinese name is not optional decoration. It is operational infrastructure.',
      },
      {
        heading: 'Translation Is Not a Name',
        body: 'The most common mistake is to treat a Chinese name as a translation exercise. Alexander does not become 亚历山大 because that string carries no semantic weight — it is merely a sound map, and a clunky one at that. A real Chinese name compresses intention into two or three characters. Each character is a word with meaning, history and energetic association. The sound layer matters for pronunciation, but the meaning layer is what people remember. When someone reads your card, they are not asking "How close is this to his English name?" They are asking "What does this person want to be known for?" A Chinese name for business should answer that question before you open your mouth.',
      },
      {
        heading: 'The Three-Layer Test',
        body: 'Use three filters when evaluating any candidate name. First, the sound layer: can a Mandarin speaker pronounce it without twisting their tongue, and does it avoid embarrassing homophones? Second, the meaning layer: do the characters together express a direction — stability, vision, trust, prosperity — that matches your role? Third, the energy layer: in the Wu Xing framework, every character carries an elemental tendency. A name heavy on Water may suit negotiation and finance; a name heavy on Fire may suit sales and leadership. You do not need to believe in metaphysics to use this as a design constraint. You only need to recognize that the people around you may read the name through this lens.',
      },
      {
        heading: 'Cultural Traps to Avoid',
        body: 'Avoid characters that are beautiful in isolation but carry unwanted overtones. 凤 (phoenix) is majestic but traditionally feminine; a male executive using it without care can look comical. 龙 (dragon) is powerful but overused to the point of cliché in business cards. Avoid characters associated with death, separation or illness, even if their dictionary definitions look neutral. And be careful with homophones: a name that sounds like "to lose money" or "to be fired" will be noticed before you finish your introduction. The safest path is not to chase a lucky Chinese name by superstition, but to verify the name with at least two native speakers who understand the business context.',
      },
      {
        heading: 'A Reusable Protocol',
        body: 'Start by defining the single quality you want the name to broadcast. For a founder it might be vision; for a banker it might be trust; for a negotiator it might be steadiness. Then generate candidates using a Chinese name generator or a naming consultant, filtering by sound, meaning and energy. Test the top three with native Mandarin speakers, asking not "Do you like this?" but "What kind of person would have this name?" If their description matches your intended presence, you have a winner. Finally, check pronunciation across major Chinese dialects if your work spans Greater China. What works in Beijing may carry a different echo in Guangdong or Taiwan.',
      },
      {
        heading: 'Generator, Consultant, or Both',
        body: 'A Chinese name generator is useful for producing a first draft and for understanding the design space — which meanings are available, how pinyin maps to tone, and which combinations feel natural. It is a brainstorming tool, not a final arbiter. For a high-stakes role — a board member, a public spokesperson, someone whose name will appear on legal documents — hire a naming consultant or a cultural advisor to validate the final choice. The cost is trivial compared with the cost of a name that undermines trust in the first meeting. Think of the generator as the sketch and the consultant as the signature.',
      },
    ],
  },

  /* ============================================================
     ZH — evidence-based register
     ============================================================ */

  'zh-xiao-liu-ren-accuracy': {
    slug: 'zh-xiao-liu-ren-accuracy',
    lang: 'zh',
    title: '小六壬到底准不准：确定性、有效性与决策工效',
    readTime: '12 分钟',
    excerpt:
      '把「准不准」拆成三个可以分别检验的问题。既不神化，也不轻蔑——这是决定要不要用它之前，必须先想清楚的前提。',
    sections: [
      {
        heading: '一个问题，三个层次',
        body: '问「小六壬准不准」的时候，其实混淆了三件不同的事：它能不能被重复计算（可复现性）、它的判断在统计上是否优于随机（预测有效性）、它能不能让人做出更好的决策（决策工效）。这三件事的答案完全不同，而且互不蕴含。第一件是纯算术，答案是确定的「是」。第二件缺乏证据，诚实的回答是「不知道」。第三件有间接的心理学依据，答案是「在限定条件下可以」。把三层分开谈，这件事才谈得下去。',
      },
      {
        heading: '第一层：可复现性——这不是玄学，是算术',
        body: '小六壬的起课过程是完全确定的：以农历月为起点数到日，再以日为起点数到时，每一步在六宫中按六取模循环推进。给定同一个时刻，两个人各自独立推算，必然得到同一组月宫、日宫、时宫，不存在任何分歧空间。这一点可以写成程序逐条验证，也可以手工核对。它说明的不是「小六壬很神奇」，恰恰相反：它说明起课环节没有任何超自然成分，是一个公开的确定性函数。真正需要被检验的是后续的解释环节，而不是计算环节。',
      },
      {
        heading: '第二层：预测有效性——必须说实话的部分',
        body: '到目前为止，没有公开的、经过预注册的小六壬双盲对照实验能证明它的预测准确率高出随机水平。这句话必须说清楚：任何声称「已被科学验证」的说法都缺乏依据。同时也指出另一面——同样没有严格实验证明它无效，因为这类研究几乎没人做。在证据缺位的情况下，诚实的立场是不作断言。这里还引出一个更基本的问题：一个体系如果对任何结果都能事后自圆其说，它就不可证伪（波普尔的标准），而不提供信息的系统是谈不上准的。所以判断标准应该反过来定——不是问「它说对了几次」，而是问「它有没有可能在某一次明确地出错」。',
      },
      {
        heading: '第三层：决策工效——它真正起作用的地方',
        body: '小六壬站得住的价值不在预测，而在流程。它强制完成三件事：把决策固定在一个具体时刻、把模糊的处境压缩成有限的几个类别、把结论落成可执行的文字动作。这三点各自有心理学依据。卡尼曼在《思考，快与慢》里区分系统1（快速直觉）与系统2（缓慢分析），人在压力下的默认反应是系统1；一个外部的、需要按步骤执行的程序，作用是打断自动反应，把注意力拉回系统2。荣格在 1952 年与泡利合著的《共时性》中提出的「共时性」概念，指的是「意义的巧合」而非因果联系——他明确说过这不是因果律的替代。换句话说，起课提供的是一个意义框架，不是物理机制。',
      },
      {
        heading: '三个必须警惕的心理陷阱',
        body: '第一是巴纳姆效应。福勒（Forer）1949 年的实验表明，人们会把适用于几乎所有人的笼统描述，误认为是针对自己的精准刻画。解读写得越「好像很准」，越要警惕。第二是确认偏误：人会选择性记住说中的部分，遗忘没说中的部分。解决办法很朴素——把起课结论和后续真实结果都记下来，隔一段时间回头统计命中率，用记录对抗记忆的篡改。第三是最重要的一条：控制点。罗特（Rotter, 1966）区分内在控制点（相信结果取决于自己的行动）与外在控制点（相信结果取决于外部力量）。决策工具的正当作用是增强你的主体性，而不是替代它。如果用完之后你更不敢做决定、更依赖下一次起课，那就是用错了——工具应该让你更果断，不是更依赖。',
      },
      {
        heading: '所以，该怎么用它',
        body: '合理的定位是：把小六壬当作决策节律器，而不是预测引擎。它不告诉你结果会怎样，它做的是强制你在特定时刻完成一次结构化思考，并把思考结果固化成书面行动。使用边界也很清楚：涉及重大不可逆的事项（签约、大额资金、人事去留），它可以作为提醒你慢下来、把条件写清楚的触发器，但绝不能作为决策依据本身；涉及可逆的小决策，用它压缩犹豫时间是划算的。判断是否用对了，有一个很朴素的标准——用完之后，你对这件事的理解是否更清楚、下一步是否更具体。如果是，它就产生了价值；如果不是，不管宫位多「吉利」，都没有。',
      },
    ],
  },

  'zh-why-72-hours': {
    slug: 'zh-why-72-hours',
    lang: 'zh',
    title: '为什么是 72 小时：一个决策窗口的时间心理学依据',
    readTime: '11 分钟',
    excerpt:
      '72 小时不是营销数字。从遗忘曲线、蔡格尼克效应到可逆决策分类，这个窗口的长度有可查证的依据。',
    sections: [
      {
        heading: '先把问题问对',
        body: '起课之后为什么要限定 72 小时？合理的怀疑是：这只是一个听起来专业的时间数字。但它其实对应三条相互独立的时间规律，分别管着窗口的开始、结束和上限。这三条都有具体的实验或文献来源，可以逐条查证——包括其中一条近年被大样本研究推翻的部分，也应该一并说明。',
      },
      {
        heading: '24 小时内必须落字：遗忘曲线的要求',
        body: '艾宾浩斯（Hermann Ebbinghaus）1885 年用无意义音节对自己做的记忆实验，得到一条陡峭的保持曲线：学习后 20 分钟约遗忘 42%，1 小时后约 56%，1 天后约 66%，随后趋于平缓。需要说明的是，该实验的材料是无意义音节，与真实情境下的记忆不完全等价，曲线不宜直接搬用；但它揭示的方向是可靠的——未经复述的新信息，在前 24 小时衰减最快。对起课而言，含义很直接：解读如果不立刻落成文字，你记住的版本会被后续发生的事、被你的期待和恐惧持续改写。三天后你「记得」的结论，很可能已经不是当时得出的那个。所以窗口的第一段（0–24 小时）必须完成落字，这是记忆规律的要求，不是形式主义。',
      },
      {
        heading: '72 小时必须闭合：蔡格尼克效应',
        body: '苏联心理学家蔡格尼克（Bluma Zeigarnik）1927 年发现，人对未完成任务的记忆保持显著优于已完成任务，后续研究给出的比率约在 1.9 倍左右。通俗地说，悬而未决的事会持续占用认知资源，像后台进程一样消耗注意力。这解释了两件事：为什么拖着不决反而更累，以及为什么必须给未决事项设一个闭合期限。72 小时的意义在这里——它足够长，能容纳一次认真的盘点和一次校准；又足够短，不至于让这件事长期占着后台。到期必须做出决定，或者明确地决定「暂不决定」并写下下次复核的时间点。蔡格尼克效应只有在任务真正被关闭时才解除，而「再等等」如果没有具体日期，等于没有关闭。',
      },
      {
        heading: '给窗口设上限：帕金森定律',
        body: '帕金森（C. Northcote Parkinson）1955 年在《经济学人》提出的定律，原文是：工作会自动膨胀，占满所有可用的完成时间。原意是讽刺官僚机构的效率，但对个人决策同样成立：一个没有上限的思考期，会自动填满所有可用时间，直到被外部事件强行打断——而那时的打断通常来自最坏的时机。给窗口设上限，本质上是把「被打断」变成「自己选择何时停止」。这里也要说明一条相反的证据：鲍迈斯特（Baumeister）等人提出的「自我损耗」（ego depletion）理论，近年在大样本复制研究（如 Many Labs 4）中未能复现，因此「决策会耗尽意志力」这个流行说法，目前证据支持是弱的。更稳妥的依据是机会成本——延期的真实代价不是显性支出，而是被放弃的次优选项。',
      },
      {
        heading: '可逆与不可逆：贝索斯的分类',
        body: '贝索斯在 2015 年致股东信中把决策分成两类：一类后果重大且几乎不可逆（Type 1），另一类可更改、可恢复（Type 2）。他的规则是：Type 2 决策应该快速做出、并尽量下放到基层；Type 1 决策必须慢，因为无法撤销。他还提出过一条经验法则：大多数决策，在掌握约 70% 所需信息时就应该做出，等到 90% 通常已经太晚。利弗莫尔在《股票作手回忆录》里说得更直白：赚大钱的从来不是我的思考，而是我的等待。两句看似矛盾，其实指向同一个阈值：可逆的事，快是接近免费的；不可逆的事，拖延是最便宜的保险。所以 72 小时窗口内部还要再分——可逆动作放在前段快速试错，不可逆动作押在后段，等前段的验证结果出来再动。',
      },
      {
        heading: '中文语境里的「时」',
        body: '这个框架在中文思想里有个很准确的对应，就是「时」。《易经》艮卦彖辞说「时止则止，时行则行，动静不失其时」——该停的时候停，该动的时候动，关键不是动或静本身，而是不失其时。孟子称孔子为「圣之时者也」（《孟子·万章下》），讲的也是这个：圣不是永远正确，而是在恰当的时机做恰当的事。需卦（䷄）则专门处理等待，卦辞「有孚，光亨，贞吉」，把等待当作一种积极姿态而非消极停滞——卦象是水在天上，云已聚而雨未落。这套语言和 72 小时窗口是同构的：都承认时机是决策的一个真实变量，且都要求给这个变量设一个可判断的边界，而不是无限期地「再看看」。',
      },
      {
        heading: '落到执行：三段式的依据',
        body: '把上面几条合起来，就是 0–24 / 24–48 / 48–72 的三段结构，每一段都由一条具体依据支撑。0–24 小时做盘点与落字：趁记忆未衰减，把起课结论和当前可核实的事实全部写下来，只记录事实，不做判断。24–48 小时做校准：把口头承诺转成书面条款，把模糊表述替换成可验证的条件——这一步的依据是贝索斯的可逆性分类，先处理可逆项。48–72 小时做执行：只保留不可逆的核心动作，并明确写下若条件不成立的退出条件。三段结束后无论结论如何，都要写下一个复核日期。这个日期是整套流程的闭合点，也是蔡格尼克效应真正被解除的地方。',
      },
    ],
  },

  'xiao-liu-ren-for-founders': {
    slug: 'xiao-liu-ren-for-founders',
    lang: 'en',
    title: 'Xiao Liu Ren for Founders: A Practical Guide',
    readTime: '9 min read',
    excerpt:
      'A step-by-step protocol for using the three Xiao Liu Ren palaces to time founder decisions — fundraising, hiring, launches, and exits — without abandoning your models.',
    sections: [
      {
        heading: 'The Timing Tax Founders Pay',
        body: 'Founders rarely fail because they made the wrong call on the merits. They fail because they made the right call at the wrong moment, or the wrong call at a moment that looked safe. The cost of mistimed action is structural: a raise closed a week too early dilutes more than it funds; a hire made during a Chi Kou (赤口) stretch inherits friction that survives the onboarding; a launch pushed into a sticky window burns the only first impression you get. Xiao Liu Ren (小六壬) is not a replacement for your judgment — it is a temporal read on the moment your decision lands, and that read is the variable most founder tooling ignores.',
      },
      {
        heading: 'What Xiao Liu Ren Is — and Is Not',
        body: 'Xiao Liu Ren is a Chinese horary method attributed in folk tradition to Zhuge Liang and later systematized by Li Chunfeng of the Tang court. It is a trimmed descendant of Da Liu Ren (大六壬), one of the three cosmic board systems of classical Chinese statecraft. The calculation is fully deterministic: it indexes the lunar month, day, and double-hour of the inquiry and walks a cycle of six palaces. There is no intuition in the arithmetic and no entropy in the output — given the same moment, two people produce the same palaces. What that determinism gives you is not prophecy but a shared, defensible coordinate for a decision moment, in the same spirit that a Gantt chart is a shared coordinate for a sequence.',
      },
      {
        heading: 'The Three Palaces: Month, Day, Hour',
        body: 'A cast produces three palaces. The Month palace describes the macro origin of the situation — the employer, the market, the counterparty. The Day palace describes your current pivot — where you actually stand today. The Hour palace describes the immediate execution window — the next move and its texture. Da An (大安) at any level signals stability and a green light to preserve; Liu Lian (留连) signals drag and warns that forcing speed creates friction; Su Xi (速喜) signals velocity and favors swift, clean action; Kong Wang (空亡) signals dissolution and tells you to reset rather than push. The intersection of the three, not any single palace, is the signal.',
      },
      {
        heading: 'A Founder\'s Casting Protocol',
        body: 'Step one: name the decision in one sentence before you cast. "Should we close the seed round this week?" not "is everything okay?" Step two: cast at the moment of genuine inquiry, not after you have already decided. Step three: read Month as the deal\'s structural backing, Day as your readiness, Hour as the move\'s immediate texture. Step four: if two of three palaces favor advance and the terms are in writing, act inside the [72-hour window](/insights/72-hour-decision-window) Esoteric Paths caps after each cast — the cap exists because momentum decays, not because urgency is virtuous. Step five: if Liu Lian dominates or the only catalyst is a deadline someone else manufactured, wait.',
      },
      {
        heading: 'Four Patterns That Repeat',
        body: 'Fundraising: Da An at the Month level means the capital is real and the terms will hold; Su Xi means move now before the window closes; Chi Kou means a term will move after you sign — get it in writing first. Hiring: Liu Lian at the Day level means the candidate will drag on references or comp; Kong Wang means the role itself is dissolving and you should not fill it yet. Launch: Su Xi at the Hour level is the cleanest go; a launch landing on Kong Wang should be rescheduled, not heroically shipped. Exit or pivot: Kong Wang at the Month level is the palace telling you the original thesis has expired — that is data, not defeat.',
      },
      {
        heading: 'Why This Complements Your Models',
        body: 'Xiao Liu Ren answers a question your spreadsheet cannot: is this the moment? Your financial model governs what is feasible; horary governs when feasibility should be triggered. Treated as a filter rather than an oracle, it compresses ambiguity into one actionable signal — preserve, wait, advance, secure, collaborate, reset — that you can defend to a co-founder or a board. The Esoteric Paths matrix exists to make that synthesis reproducible rather than intuitive, the same way a forecast model makes a revenue call defensible rather than a hunch. Use it to time the trigger; keep your models for everything else.',
      },
    ],
  },

  'crypto-entry-timing-without-ta': {
    slug: 'crypto-entry-timing-without-ta',
    lang: 'en',
    title: 'How to Time a Crypto Entry Without Technical Analysis',
    readTime: '8 min read',
    excerpt:
      'Why TA tells you where price has been, but not whether this is your moment — and how a horary read adds the missing temporal filter.',
    sections: [
      {
        heading: 'What TA Actually Measures',
        body: 'Moving averages, RSI, and liquidation clusters describe where capital has already moved. They are rear-view mirrors with a slight lag, useful for structure, useless for the exact moment a specific operator should pull the trigger. The same chart can support long and short theses simultaneously; the difference is usually the trader\'s own timeline, which TA does not encode. If you are trying to decide whether to enter today rather than whether the setup exists, you need a temporal layer TA does not provide.',
      },
      {
        heading: 'The Temporal Layer',
        body: 'Horary systems treat the moment of inquiry as qualitatively loaded. In [Xiao Liu Ren](/insights/xiao-liu-ren-for-founders), the Month palace reads the macro trend, the Day palace reads the current pivot, and the Hour palace reads the immediate execution window. A bullish chart with Kong Wang (空亡) at the Hour palace is a warning that the immediate window is hollow — the move may happen, but not cleanly for you. A bearish chart with Su Xi (速喜) can mark a short-term bounce worth scalping. The read is not against your indicators; it sits on top of them as a timing filter.',
      },
      {
        heading: 'Four Crypto-Specific Patterns',
        body: '(1) Pre-announcement entries: Da An at Month + Su Xi at Hour favors a quick, profitable entry before news volatility. (2) Breakout chasing: Liu Lian at Day means the breakout will re-test; do not FOMO in. (3) Dip buying: Kong Wang at Month means the dip is not a dip — it is the start of a larger reset; wait. (4) Exits: Chi Kou at Hour means slippage or exchange friction will eat the trade — reduce size or split orders.',
      },
      {
        heading: 'How to Combine With TA',
        body: 'Use TA to identify the setup, use the palace read to time the trigger. The rule is strict: no palace override without a setup, and no setup execution without a palace check when the decision is high-conviction. This keeps the method falsifiable — if the palace says wait and the trade runs without you, you have data on whether your TA edge was real or imagined.',
      },
      {
        heading: 'Risk Management Still Wins',
        body: 'No timing system replaces position sizing and stop losses. A horary read compresses ambiguity; it does not eliminate risk. Use it to decide whether today is the day, then size the trade as if the read were irrelevant. The traders who survive are the ones who manage the downside, not the ones who predict the top.',
      },
      {
        heading: 'Why Founders and Funds Care',
        body: 'For individual traders, this is an edge in timing. For DAO treasuries, venture funds, and founders holding treasury assets, it is a way to de-bias large moves. Treasury sales have market impact; timing them badly destroys months of runway. A reproducible [temporal read](/insights/ontology-of-time-horary-vs-chronometry) gives the operator a defensible reason to act or wait, which is often more valuable than the move itself.',
      },
    ],
  },

  'xiao-liu-ren-vs-i-ching': {
    slug: 'xiao-liu-ren-vs-i-ching',
    lang: 'en',
    title: 'Xiao Liu Ren vs I Ching: Which Divination System for Business Decisions?',
    readTime: '8 min read',
    excerpt:
      'Both systems answer "what is the shape of this moment?" — but they differ in speed, structure, and the kind of decisions they serve best.',
    sections: [
      {
        heading: 'Two Chinese Time-Reading Systems',
        body: 'The I Ching (Yijing, Book of Changes) is the older and broader system: sixty-four hexagrams built from yin and yang lines, capable of addressing philosophy, character, and long-term strategy. Xiao Liu Ren is a younger, trimmed method: six palaces cycling through lunar month, day, and hour, designed for fast, operational decisions. One is a cathedral; the other is a cockpit instrument. Both are valid; they serve different flight paths.',
      },
      {
        heading: 'When to Use I Ching',
        body: 'Use I Ching when the decision is large, ambiguous, and existential — should I pivot the company, should I take this partner, should I move to another market. The hexagrams give you a narrative arc: the present situation, the developing line, the future trend. It rewards slow contemplation and repeated readings over days. It is less useful when you need an answer in the next hour because a term sheet expires at midnight.',
      },
      {
        heading: 'When to Use Xiao Liu Ren',
        body: 'Use [Xiao Liu Ren](/insights/xiao-liu-ren-for-founders) when the question is operational and time-bound — should I sign today, should I launch this week, should I counter-offer now. The output is a three-palace vector (Month, Day, Hour) that compresses into a single actionable signal: preserve, wait, advance, secure, collaborate, reset. It is deterministic, fast, and meant to be consumed within a [72-hour execution window](/insights/72-hour-decision-window).',
      },
      {
        heading: 'The Structural Difference',
        body: 'I Ching readings are built from user-generated entropy — coins, yarrow stalks, or virtual throws. Xiao Liu Ren is calculated from the astronomical moment of inquiry. This makes I Ching more reflective of the questioner\'s internal state and Xiao Liu Ren more anchored to external timing. Neither is more "objective"; they answer different questions.',
      },
      {
        heading: 'Can You Use Both?',
        body: 'Yes, in sequence. Use I Ching for the strategic framing and Xiao Liu Ren for the operational trigger. A founder might cast I Ching on "should we enter the Asian market at all?" and Xiao Liu Ren on "should we sign the distributor agreement this Friday?" The first shapes the thesis; the second times the action. Treating them as competitors misses the point — they are different zoom levels of the same landscape.',
      },
      {
        heading: 'Which One for Business?',
        body: 'If you run a company, you need speed more than philosophy in most daily decisions. Xiao Liu Ren wins on throughput. Reserve I Ching for the rare, irreversible bets. The Esoteric Paths matrix uses Xiao Liu Ren as the operational engine precisely because founder decisions usually have a deadline.',
      },
    ],
  },

  '72-hour-decision-window': {
    slug: '72-hour-decision-window',
    lang: 'en',
    title: 'The 72-Hour Decision Window: Why We Cap Action After a Cast',
    readTime: '7 min read',
    excerpt:
      'The 72-hour decision window caps every action after a Xiao Liu Ren cast. It is not marketing — it is a forcing function borrowed from memory science, open-loop psychology, and reversible decision theory.',
    sections: [
      {
        heading: 'The Decay Problem',
        body: 'The 72-hour decision window exists because a decision made but not acted upon does not stay neutral. It loses emotional charge, gets overwritten by new information, and becomes vulnerable to negotiation drift. The palace read you received on Monday is not the same read by Thursday, because the situation has moved and you have moved. A cast without a deadline becomes a souvenir, not a strategy.',
      },
      {
        heading: '0–24 Hours: Record Before Memory Fades',
        body: 'Ebbinghaus\'s forgetting curve shows that un-rehearsed information decays fastest in the first day. The immediate task after a cast is not action — it is inscription. Write down the question, the palaces, and the executable next step in plain language. If you cannot state the action in one sentence, you do not yet have a decision. This written record protects the original signal from your later rationalizations.',
      },
      {
        heading: '24–48 Hours: Convert Verbal Promises to Written Terms',
        body: 'Zeigarnik\'s work on open tasks shows that incomplete commitments consume background cognitive resources until they are closed. The middle day is for closing loops that are reversible: confirming terms in writing, verifying assumptions, running small tests. These actions reduce uncertainty without committing irreversible resources. If a counterparty will not commit to writing during this window, that itself is a signal.',
      },
      {
        heading: '48–72 Hours: Execute or Explicitly Defer',
        body: 'Parkinson\'s law states that work expands to fill available time. Without a hard cap, deliberation becomes an infinite loop. The final 24 hours are for the irreversible core action. If conditions are not met, the decision is not "maybe later" — it is a deferred decision with a written next review date. Closing the loop, even by choosing not to act, frees the cognitive resources Zeigarnik identified.',
      },
      {
        heading: 'Why Not Shorter or Longer?',
        body: 'Shorter than 72 hours forces premature action on complex deals; longer than 72 hours lets momentum decay and lets external events hijack the timeline. The window is calibrated to match the half-life of a strategic decision\'s emotional and informational integrity. It is long enough for diligence and short enough to prevent drift.',
      },
      {
        heading: 'The Window as Product Design',
        body: 'Esoteric Paths caps every blueprint at 72 hours because the tool is not meant to replace your judgment — it is meant to compress your deliberation into a single executable window. The palace gives you the timing signal; the window forces you to treat it as real. A signal without a deadline is just a suggestion.',
      },
    ],
  },

  'why-western-tarot-struggles-with-exact-timing': {
    slug: 'why-western-tarot-struggles-with-exact-timing',
    lang: 'en',
    title: 'Why Western Tarot Struggles with Exact Timing (And How Xiao Liu Ren Solves It)',
    readTime: '8 min read',
    excerpt:
      'Tarot reveals the archetypal structure of a dilemma, but it cannot pinpoint the exact moment to act. Here is why — and how Xiao Liu Ren adds the missing timing layer.',
    sections: [
      {
        heading: 'What Tarot Does Brilliantly',
        body: 'Tarot is a symbolic mirror. The Major Arcana dramatize the inner architecture of a decision: the Fool as risk, the Emperor as structure, the Hanged Man as forced perspective, the Tower as collapse. Jung recognized these figures as archetypes — recurrent patterns that shape human perception. A skilled reading can tell you what story you are inside, what shadow you are projecting, and what virtue the situation demands. For self-knowledge and narrative clarity, few tools are as efficient.',
      },
      {
        heading: 'The Timing Blind Spot',
        body: 'Ask a Tarot spread "should I sign the term sheet today?" and the cards may answer with the Emperor, the Chariot, and the Two of Swords. That reading tells you the deal has structure, momentum, and an unresolved choice. It does not tell you whether today is the day. The same spread could describe a deal signed last Tuesday or one that should be signed next quarter. Symbolic systems are temporally underdetermined; they read meaning without reading the clock.',
      },
      {
        heading: 'Why Western Symbolism Avoids the Clock',
        body: 'Western esoteric traditions largely separate divination from chronology. Astrology has ephemerides, but horary astrology — the art of reading the moment of a question — faded from popular practice. Tarot filled the gap with psychology, not timekeeping. The result is a tool that is profound on "what" and "why" but silent on "when." For high-stakes operators, that silence is expensive. A founder who knows the narrative but misses the window has still missed the window.',
      },
      {
        heading: 'The Xiao Liu Ren Timing Layer',
        body: '[Xiao Liu Ren](/insights/xiao-liu-ren-for-founders) approaches the same crossroads from the opposite direction. It ignores your inner symbolism and indexes the astronomical moment of the question: lunar month, lunar day, and double-hour. From these three coordinates it produces a three-palace vector — Month, Day, Hour — each landing in one of six kinetic states. The output is not a story; it is a temporal read. Da An means the timing is stable; Liu Lian means it will drag; Su Xi means move now; Kong Wang means the window is hollow. No archetype, no projection — just the texture of the moment.',
      },
      {
        heading: 'How They Complete Each Other',
        body: 'The two systems are not rivals. Use Tarot to answer "what story am I in?" and [Xiao Liu Ren](/insights/xiao-liu-ren-for-founders) to answer "is this the moment?" A founder might pull cards before a negotiation and see the Magician crossed by the Seven of Swords — a warning that the counterparty is performing a trick. Then she casts Xiao Liu Ren and finds Chi Kou at the Hour palace, confirming verbal friction in the immediate window. The cards name the archetype; the palace names the timing. Together they produce a decision you can defend to a board.',
      },
      {
        heading: 'The Standard We Hold',
        body: 'Esoteric Paths was built because neither tradition alone was enough for the decisions that matter. Tarot without timing is a beautiful map without a "you are here." Timing without narrative is a coordinate without context. The platform keeps the archetypal depth of the West and adds the deterministic temporal precision of the East. The result is a [tactical horary compass](/insights/ontology-of-time-horary-vs-chronometry) — not entertainment, not fatalism, but a reproducible way to align action with the texture of time.',
      },
    ],
  },

  'decision-timing-research-findings': {
    slug: 'decision-timing-research-findings',
    lang: 'en',
    title: 'Decision Timing Research: 10 Findings on When to Act (And 2 That Failed to Replicate)',
    readTime: '11 min read',
    excerpt:
      'Decision timing research shows when to act is measurable, not mystical. Ten findings from memory science, open-loop psychology, and decision theory — plus two that replication reversed.',
    sections: [
      {
        heading: 'Why Timing Deserves Evidence, Not Mysticism',
        body: 'Most advice on decision timing is either superstition or anecdata. The alternative is to treat timing as a measurable variable and check what the literature actually supports. This digest collects ten findings with named sources and dates, so you can verify each one. It also includes two findings that later failed to replicate, because a list with no reversals is marketing, not research. Every claim here is checkable; none of them require you to believe in anything.',
      },
      {
        heading: 'Finding 1–2: Memory Decays Fastest in the First Day',
        body: 'Hermann Ebbinghaus tested his own recall of nonsense syllables in 1885 and produced a retention curve showing roughly 42% forgotten after 20 minutes, about 56% after one hour, and about 66% after one day, after which the curve flattens. The material was nonsense syllables, so the numbers should not be transplanted wholesale into real decisions — but the direction is robust. Practical consequence: a decision you do not write down within 24 hours is a decision you will later misremember. Inscription beats intention.',
      },
      {
        heading: 'Finding 3–4: Open Loops Drain Attention Until Closed',
        body: 'Bluma Zeigarnik reported in 1927 that interrupted tasks are remembered better than completed ones, with later work putting the ratio around 1.9×. The mechanism matters more than the number: unfinished business occupies background attention and consumes resources you cannot spend elsewhere. This explains why deferring a decision feels more exhausting than making it. The remedy is not speed — it is closure. Even an explicit decision to defer, with a written review date, releases the loop in a way that vague postponement does not.',
      },
      {
        heading: 'Finding 5: Work Expands to Fill the Time Available',
        body: 'C. Northcote Parkinson wrote in a 1955 Economist essay that work expands to fill the time allotted for its completion. Originally a satire on bureaucracy, the principle holds for personal deliberation: an open-ended consideration period will grow until something external interrupts it, usually at a bad moment. Setting a hard cap converts an interruption you suffer into a deadline you choose. This is the core argument for a bounded execution window rather than an open one.',
      },
      {
        heading: 'Finding 6: The Reversal — Ego Depletion Did Not Replicate',
        body: 'The idea that decision-making depletes a finite willpower resource became enormously popular, then failed a major test. Many Labs 4, a large multi-site replication effort, did not reproduce the ego depletion effect. This matters for timing: the common advice to make important decisions in the morning because your willpower is fresh rests on evidence that is now weak. The stronger argument for acting early in a decision window is opportunity cost — the alternatives you forgo while deliberating — not a drained mental battery.',
      },
      {
        heading: 'Finding 7–8: How Much Information Is Enough',
        body: 'Jeff Bezos wrote in his 2015 shareholder letter that most decisions should be made with about 70% of the information you wish you had; waiting for 90% is usually too slow. He paired this with a classification: decisions that are irreversible and consequential (Type 1) should be made slowly, while reversible ones (Type 2) should be made fast and pushed down the org. Daniel Kahneman\'s System 1 / System 2 distinction complements this: fast intuitive processing dominates under pressure, so any procedure that forces a deliberate step is a defense against premature commitment.',
      },
      {
        heading: 'Finding 9–10: Two Traps That Distort Timing',
        body: 'The Barnum effect: Bertram Forer showed in 1949 that people accept vague, universally applicable personality descriptions as uniquely accurate to them. Any timing guidance that feels uncannily right deserves suspicion. The second trap is locus of control, Julian Rotter\'s 1966 construct distinguishing people who believe outcomes follow from their own actions versus external forces. A decision tool is working if it increases your sense of agency; it is harming you if you start depending on the next reading to act at all. Both traps argue for recording predictions and checking them later.',
      },
      {
        heading: 'What the Evidence Supports in Practice',
        body: 'Three things follow from the findings that survived scrutiny. First, write the decision down within 24 hours, before the forgetting curve does its work. Second, close open loops explicitly — a deferred decision with a review date counts as closed, an open-ended "let me think about it" does not. Third, sort decisions by reversibility and move the reversible ones fast inside a bounded window, while keeping the irreversible ones slow. [Xiao Liu Ren](/insights/xiao-liu-ren-for-founders) supplies the timing signal; the [72-hour window](/insights/72-hour-decision-window) supplies the discipline. Neither is necessary for the other to be useful — which is the point of citing sources you can check yourself.',
      },
    ],
  },

  'hiring-decision-timing': {
    slug: 'hiring-decision-timing',
    lang: 'en',
    title: 'Hiring Decision Timing: When to Make the Offer and When to Wait',
    readTime: '8 min read',
    excerpt:
      'Hiring decision timing is the variable most interview processes ignore. Use the three Xiao Liu Ren palaces to read whether this is the moment to extend an offer or hold.',
    sections: [
      {
        heading: 'The Hidden Cost of a Mistimed Offer',
        body: 'Hiring decision timing rarely appears on scorecards, yet it drives most hiring regret. An offer extended too early, before a candidate has been properly stressed, buys you a fast yes and a slow problem. An offer extended too late loses the candidate to a competitor who moved while you deliberated. The merits of the hire and the moment of the offer are separate variables, and most teams only manage the first one.',
      },
      {
        heading: 'Reading the Three Palaces for a Hire',
        body: 'Cast at the moment you are genuinely deciding, not after you have already chosen. The Month palace reads the role itself — whether the position is structurally sound. The Day palace reads the candidate\'s current posture — their readiness and their competing options. The Hour palace reads the immediate offer window. Da An means stable and safe to proceed; Su Xi means move quickly before the window closes; Liu Lian means the process will drag and forcing it creates friction; Kong Wang means the role is dissolving and should not be filled yet.',
      },
      {
        heading: 'Four Hiring Scenarios',
        body: '(1) Extending the offer: Da An or Su Xi at the Hour level favors extending now; Liu Lian predicts a slow yes or a renegotiation. (2) Counter-offers: Chi Kou at the Day level means the candidate is negotiating in bad faith or will re-trade after accepting — get everything in writing. (3) Reference drag: Liu Lian at the Day level predicts delayed references or a stall on comp approval; plan for it rather than being surprised. (4) Role dissolution: Kong Wang at the Month level means the position no longer matches the company\'s shape — do not fill it, rewrite it.',
      },
      {
        heading: 'The 72-Hour Rule for Offers',
        body: 'Exploding offers are a manipulation tactic, but so is indefinite deliberation. Once you have decided, move inside the [72-hour window](/insights/72-hour-decision-window): the candidate\'s momentum decays just as yours does, and a slow process reads as organizational dysfunction to strong candidates. Conversely, if the palace says wait, wait explicitly — tell the candidate a real date rather than leaving them in the dark, which closes the loop for both of you.',
      },
      {
        heading: 'Combining With Structured Process',
        body: 'Timing does not replace scorecards, work samples, or structured interviews. It sits on top of them. Run your process to determine who is qualified; use the palace read to determine when to move. A candidate who clears the bar during a Liu Lian stretch is still qualified — you simply expect friction in the closing and plan for it. Keeping the two layers separate is what makes the method falsifiable rather than a way to rationalize a hunch.',
      },
      {
        heading: 'Decision Protocol',
        body: 'Extend the offer when the role palace is sound and the Hour palace favors advance. Hold when Kong Wang sits at the Month level or when the only pressure is a deadline the candidate manufactured. Never extend an offer on verbal terms when Chi Kou is active — that is the pattern that produces renegotiation after acceptance. For a deeper foundation on reading the palaces, see [Xiao Liu Ren for Founders](/insights/xiao-liu-ren-for-founders).',
      },
    ],
  },

  'term-sheet-timing': {
    slug: 'term-sheet-timing',
    lang: 'en',
    title: 'Term Sheet Timing: When to Sign and When to Walk Away',
    readTime: '9 min read',
    excerpt:
      'Term sheet timing decides more than valuation does. Read the three Xiao Liu Ren palaces to know whether to sign now, negotiate, or walk.',
    sections: [
      {
        heading: 'Timing Is a Term, Not a Detail',
        body: 'Founders negotiate valuation, liquidation preference, and board seats, then treat the signing date as an afterthought. Term sheet timing is itself a material term. Signing during a strong window preserves your leverage for the next round; signing during a hollow one locks in terms that will be re-traded against you later. The document says what you agreed. The moment determines whether what you agreed survives contact.',
      },
      {
        heading: 'The Three Palaces for a Deal',
        body: 'The Month palace reads the investor and the capital behind the offer — whether it is structurally real. The Day palace reads your current position: your runway, your leverage, your alternatives. The Hour palace reads the immediate negotiation window. Da An at Month means the money is committed and the terms will hold. Su Xi means move now before the window narrows. Chi Kou means a term will shift after signature unless it is nailed down in writing. Kong Wang means the round is hollow — the lead may not close.',
      },
      {
        heading: 'Four Deal Patterns',
        body: '(1) Exploding offers: a deadline someone else manufactured is not a palace signal. If Liu Lian or Kong Wang is active, the pressure is a tactic, not timing. (2) Verbal promises: Chi Kou at the Hour level is the classic signature of terms that move after handshake — insist on written confirmation before you stop talking to other investors. (3) Diligence drag: Liu Lian at the Day level predicts a slow close; protect your runway accordingly rather than assuming a four-week close. (4) Walking away: Kong Wang at the Month level with no alternative capital means the round is not real — continuing to negotiate burns months you cannot recover.',
      },
      {
        heading: 'What to Insist on in Writing',
        body: 'Timing signals do not replace legal review; they tell you where the risk concentrates. Under Chi Kou, concentrate your diligence on the clauses most likely to be re-traded: pro-rata rights, information rights, and any side letters. Under Da An, you can afford standard terms and speed. Under Kong Wang, do not rely on the lead\'s verbal commitment at all — keep the process running with other parties until funds are actually wired.',
      },
      {
        heading: 'The 72-Hour Constraint on Signature',
        body: 'Once terms are agreed and the palace favors advance, close inside the [72-hour window](/insights/72-hour-decision-window). Deals that sit unsigned accumulate risk: the lead investor\'s internal committee changes, the market moves, or a competing deal in their pipeline takes priority. Momentum in fundraising is not enthusiasm — it is the absence of time for objections to form. Moving fast on a clean read is a structural advantage most founders give away.',
      },
      {
        heading: 'Sign or Walk: The Protocol',
        body: 'Sign when the Month palace is sound, the Day palace shows you have real alternatives, and the Hour palace favors advance — with every material term in writing. Negotiate harder when Chi Kou is active, because the friction is real and your job is to document it. Walk when Kong Wang sits at the Month level and no alternative capital exists. For the underlying method, see [Xiao Liu Ren for Founders](/insights/xiao-liu-ren-for-founders); for the research behind acting inside a bounded window, see the [decision timing digest](/insights/decision-timing-research-findings).',
      },
    ],
  },

  'product-launch-timing': {
    slug: 'product-launch-timing',
    lang: 'en',
    title: 'Product Launch Timing: How to Pick the Day You Only Get Once',
    readTime: '8 min read',
    excerpt:
      'You get one first impression per launch. Product launch timing turns a calendar guess into a readable decision using the three Xiao Liu Ren palaces.',
    sections: [
      {
        heading: 'The One-Shot Nature of Launches',
        body: 'You can iterate on a product indefinitely, but you launch once into a given moment. Product launch timing is the decision that most resists A/B testing, because there is no control group for the day you chose. Teams default to shipping when the build is done, which means the most consequential variable is set by engineering velocity rather than by judgment. A readable timing signal fills that gap.',
      },
      {
        heading: 'Reading the Three Palaces for a Launch',
        body: 'The Month palace reads the market context you are launching into — whether the category is receptive. The Day palace reads your team\'s readiness and the state of the build. The Hour palace reads the immediate reception window. Su Xi at the Hour level is the cleanest go signal: the reception will be fast and favorable. Liu Lian means the launch will be ignored initially and needs sustained push. Chi Kou means expect public criticism or a competitive response. Kong Wang means the launch will land in a vacuum — reschedule rather than heroically ship.',
      },
      {
        heading: 'Four Launch Scenarios',
        body: '(1) Soft launch or beta: Liu Lian at the Day level is fine here, because a quiet start is the design. (2) Big public launch: wait for Su Xi at the Hour level; the difference between a strong first day and a flat one compounds through press coverage and algorithmic distribution. (3) Launching into a competitor\'s announcement: Chi Kou warns of a direct response — prepare the counter-narrative before you ship. (4) Launching a second product: Kong Wang at the Month level suggests the category has moved on; reposition before spending the launch.',
      },
      {
        heading: 'Timing Inside the 72-Hour Window',
        body: 'Once the launch window opens, treat the [72-hour window](/insights/72-hour-decision-window) as your commitment period: 0–24 hours to finalize assets and brief the team, 24–48 hours to resolve reversible issues, 48–72 hours to execute the push. Launches that drift past the window lose the coordination that makes a first day land. The deadline is not artificial urgency; it is the period during which your team\'s attention is genuinely aligned.',
      },
      {
        heading: 'When the Read Conflicts With the Roadmap',
        body: 'This is the hard case: the palace says wait and the board says ship. The resolution is to treat the palace as a signal about quality of reception, not permission to stop working. Use the delay to strengthen the launch package — the press angle, the demo, the onboarding — rather than simply pushing the date. If the read is wrong, you have lost a week of nothing. If it is right, you avoided burning your single first impression on a dead day.',
      },
      {
        heading: 'Launch Protocol',
        body: 'Launch when the Market palace is receptive and the Hour palace shows Su Xi. Delay when Kong Wang dominates, and use the time to reposition rather than to polish. Prepare a response plan whenever Chi Kou appears, because the friction it indicates is public and fast. For the method behind the palaces, see [Xiao Liu Ren for Founders](/insights/xiao-liu-ren-for-founders); for how timing differs from technical analysis, see the [crypto entry timing](/insights/crypto-entry-timing-without-ta) guide.',
      },
    ],
  },

  'jungian-archetypes-decision-making': {
    slug: 'jungian-archetypes-decision-making',
    lang: 'en',
    title: 'Jungian Archetypes in Decision-Making: A Practical Framework',
    readTime: '9 min read',
    excerpt:
      'Jungian archetypes in decision-making are a lens for what story you are inside — not a personality quiz. Here is the honest version and how to use it.',
    sections: [
      {
        heading: 'What Jung Actually Meant',
        body: 'Carl Jung used archetype to mean recurring patterns in the collective unconscious — structural tendencies toward certain images and roles, not a fixed list of character types. This distinction matters because the popular twelve-brand-archetype model sold in marketing circles is not Jung\'s framework; it is a later branding tool. If you want the real thing, the operative concepts are far fewer: the Persona, the Shadow, the Anima and Animus, and the Self as the organizing whole. Everything else is commentary.',
      },
      {
        heading: 'The Persona: The Face You Are Negotiating From',
        body: 'The Persona is the social mask you present. In negotiation, the useful question is not "am I being authentic" but "which Persona is active, and does it serve this room?" A founder presenting the Hero to investors while the situation requires the Caretaker will misread the signals coming back. Naming the Persona you are wearing is the fastest way to notice when it stops fitting.',
      },
      {
        heading: 'The Shadow: What You Refuse to See',
        body: 'The Shadow holds the traits you disown in yourself and therefore over-attribute to others. In decision-making this produces a specific failure: the counterparty you distrust most intensely is often the one carrying a quality you have refused to integrate. Jung\'s practical instruction was not to eliminate the Shadow but to make it conscious, because an unintegrated Shadow gets projected — and projection is expensive in a negotiation.',
      },
      {
        heading: 'Anima and Animus: The Internal Counterpart',
        body: 'Jung described Anima and Animus as the contra-sexual soul-image — the internalized counterpart that shapes how you relate to the other. Stripped of its period framing, the usable idea is that everyone carries an internalized model of the other party, built from past relationships rather than from present evidence. Before a difficult conversation, it is worth asking whether you are responding to the person in front of you or to that model.',
      },
      {
        heading: 'Where Archetypes Mislead',
        body: 'Two traps. First, the Barnum effect: Bertram Forer showed in 1949 that people accept vague descriptions as uniquely accurate, and archetypal language is exceptionally vulnerable to this. Second, archetypes are interpretive and internal, while any deterministic method is external and checkable. When the story and the signal disagree, prefer the signal. Archetypes are a lens for meaning, not a mechanism for prediction.',
      },
      {
        heading: 'Combining Archetype With Timing',
        body: 'The clean division of labor: archetypes tell you what story you are inside, timing tells you whether to move now. This is precisely the gap that [Western Tarot](/insights/why-western-tarot-struggles-with-exact-timing) and [Xiao Liu Ren](/insights/xiao-liu-ren-for-founders) sit on either side of — the archetypal tradition reads meaning but is temporally silent; the horary tradition reads the moment but says nothing about narrative. Use the archetype to understand the situation and the palace to time the action. For the evidence on why acting inside a bounded window matters, see the [decision timing research digest](/insights/decision-timing-research-findings).',
      },
    ],
  },
};
