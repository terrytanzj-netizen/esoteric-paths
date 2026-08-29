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
};
