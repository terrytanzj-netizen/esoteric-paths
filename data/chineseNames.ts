export interface ChineseName {
  chars: string;
  pinyin: string;
  meaning: string;
  element: 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';
  palace: 'Da An' | 'Liu Lian' | 'Su Xi' | 'Chi Kou' | 'Xiao Ji' | 'Kong Wang';
}

export const NAME_BANK: ChineseName[] = [
  { chars: '明远', pinyin: 'Míngyuǎn', meaning: 'Clear-sighted and far-reaching; suited to strategic vision', element: 'Fire', palace: 'Da An' },
  { chars: '志恒', pinyin: 'Zhìhéng', meaning: 'Ambition sustained over time; endurance in purpose', element: 'Earth', palace: 'Da An' },
  { chars: '承宇', pinyin: 'Chéngyǔ', meaning: 'To bear the roof of heaven; quiet capacity for responsibility', element: 'Metal', palace: 'Da An' },
  { chars: '景行', pinyin: 'Jǐngxíng', meaning: 'Broad path of noble conduct; action aligned with principle', element: 'Earth', palace: 'Da An' },
  { chars: '泰然', pinyin: 'Tàirán', meaning: 'Unshakable composure under pressure', element: 'Earth', palace: 'Da An' },
  { chars: '君浩', pinyin: 'Jūnhào', meaning: 'Vast integrity befitting leadership', element: 'Water', palace: 'Da An' },
  { chars: '睿智', pinyin: 'Ruìzhì', meaning: 'Keen wisdom; the discernment to see what others miss', element: 'Metal', palace: 'Da An' },
  { chars: '弘毅', pinyin: 'Hóngyì', meaning: 'Broad mind and resolute will', element: 'Wood', palace: 'Da An' },
  { chars: '致远', pinyin: 'Zhìyuǎn', meaning: 'To reach far by holding steady aim', element: 'Earth', palace: 'Da An' },
  { chars: '博文', pinyin: 'Bówén', meaning: 'Wide learning expressed with clarity', element: 'Metal', palace: 'Da An' },

  { chars: '安然', pinyin: 'Ānrán', meaning: 'Peaceful and self-possessed; the still point', element: 'Earth', palace: 'Liu Lian' },
  { chars: '静怡', pinyin: 'Jìngyí', meaning: 'Tranquil delight; harmony that waits for the right moment', element: 'Water', palace: 'Liu Lian' },
  { chars: '欣悦', pinyin: 'Xīnyuè', meaning: 'Quiet joy; a name that attracts goodwill', element: 'Wood', palace: 'Liu Lian' },
  { chars: '和美', pinyin: 'Héměi', meaning: 'Harmonious and graceful; relationship luck', element: 'Earth', palace: 'Liu Lian' },
  { chars: '知心', pinyin: 'Zhīxīn', meaning: 'One who knows the heart; empathy as strength', element: 'Fire', palace: 'Liu Lian' },
  { chars: '柔嘉', pinyin: 'Róujiā', meaning: 'Gentle excellence; persuasion without force', element: 'Wood', palace: 'Liu Lian' },
  { chars: '婉仪', pinyin: 'Wǎnyí', meaning: 'Elegant bearing that opens closed doors', element: 'Metal', palace: 'Liu Lian' },
  { chars: '嘉怡', pinyin: 'Jiāyí', meaning: 'Auspicious ease; favorable atmosphere', element: 'Earth', palace: 'Liu Lian' },
  { chars: '思远', pinyin: 'Sīyuǎn', meaning: 'Thought that travels far before acting', element: 'Water', palace: 'Liu Lian' },
  { chars: '慕言', pinyin: 'Mùyán', meaning: 'To honor the word; trustworthy speech', element: 'Metal', palace: 'Liu Lian' },

  { chars: '锦程', pinyin: 'Jǐnchéng', meaning: 'A journey of brocade; bright career path', element: 'Metal', palace: 'Su Xi' },
  { chars: '瑞霖', pinyin: 'Ruìlín', meaning: 'Auspicious rain that brings growth', element: 'Water', palace: 'Su Xi' },
  { chars: '丰泽', pinyin: 'Fēngzé', meaning: 'Abundant blessings; rich harvest', element: 'Water', palace: 'Su Xi' },
  { chars: '钰涵', pinyin: 'Yùhán', meaning: 'Treasured depth; rare value held within', element: 'Metal', palace: 'Su Xi' },
  { chars: '鑫源', pinyin: 'Xīnyuán', meaning: 'Source of flourishing wealth', element: 'Metal', palace: 'Su Xi' },
  { chars: '宝华', pinyin: 'Bǎohuá', meaning: 'Precious splendor; wealth with dignity', element: 'Metal', palace: 'Su Xi' },
  { chars: '金铭', pinyin: 'Jīnmíng', meaning: 'Inscribed in metal; reputation that endures', element: 'Metal', palace: 'Su Xi' },
  { chars: '鸿运', pinyin: 'Hóngyùn', meaning: 'Great fortune unfolding', element: 'Water', palace: 'Su Xi' },
  { chars: '耀祖', pinyin: 'Yàozǔ', meaning: 'To bring honor; achievement that shines', element: 'Fire', palace: 'Su Xi' },
  { chars: '凯旋', pinyin: 'Kǎixuán', meaning: 'Triumphant return; victory after effort', element: 'Metal', palace: 'Su Xi' },

  { chars: '思源', pinyin: 'Sīyuán', meaning: 'To remember the source; wisdom from roots', element: 'Water', palace: 'Chi Kou' },
  { chars: '慧明', pinyin: 'Huìmíng', meaning: 'Luminous wisdom; clear understanding', element: 'Fire', palace: 'Chi Kou' },
  { chars: '悟真', pinyin: 'Wùzhēn', meaning: 'Awakening to what is real', element: 'Metal', palace: 'Chi Kou' },
  { chars: '灵均', pinyin: 'Língjūn', meaning: 'Balanced spirit; poised intuition', element: 'Wood', palace: 'Chi Kou' },
  { chars: '智渊', pinyin: 'Zhìyuān', meaning: 'Profound intelligence; deep strategy', element: 'Water', palace: 'Chi Kou' },
  { chars: '静修', pinyin: 'Jìngxiū', meaning: 'Cultivation in stillness', element: 'Earth', palace: 'Chi Kou' },
  { chars: '明哲', pinyin: 'Míngzhé', meaning: 'Bright philosopher; wise judgment', element: 'Fire', palace: 'Chi Kou' },
  { chars: '清远', pinyin: 'Qīngyuǎn', meaning: 'Clear and distant; unobstructed view', element: 'Water', palace: 'Chi Kou' },
  { chars: '玄知', pinyin: 'Xuánzhī', meaning: 'Knowledge of the subtle; arcane insight', element: 'Water', palace: 'Chi Kou' },
  { chars: '守正', pinyin: 'Shǒuzhèng', meaning: 'To uphold correctness; integrity under dispute', element: 'Earth', palace: 'Chi Kou' },

  { chars: '天佑', pinyin: 'Tiānyòu', meaning: 'Protected by heaven; guardian luck', element: 'Metal', palace: 'Xiao Ji' },
  { chars: '安邦', pinyin: 'Ānbāng', meaning: 'To bring peace and stability', element: 'Earth', palace: 'Xiao Ji' },
  { chars: '坚毅', pinyin: 'Jiānyì', meaning: 'Firm and resolute; unbreakable will', element: 'Metal', palace: 'Xiao Ji' },
  { chars: '勇毅', pinyin: 'Yǒngyì', meaning: 'Courage joined to perseverance', element: 'Fire', palace: 'Xiao Ji' },
  { chars: '健行', pinyin: 'Jiànxíng', meaning: 'To advance with vigor', element: 'Wood', palace: 'Xiao Ji' },
  { chars: '志强', pinyin: 'Zhìqiáng', meaning: 'Strong purpose; indomitable aim', element: 'Wood', palace: 'Xiao Ji' },
  { chars: '铁山', pinyin: 'Tiěshān', meaning: 'Iron mountain; immovable support', element: 'Metal', palace: 'Xiao Ji' },
  { chars: '镇宇', pinyin: 'Zhènyǔ', meaning: 'To steady the cosmos; anchoring force', element: 'Earth', palace: 'Xiao Ji' },
  { chars: '弘毅', pinyin: 'Hóngyì', meaning: 'Great forbearance; magnanimous strength', element: 'Wood', palace: 'Xiao Ji' },
  { chars: '德胜', pinyin: 'Déshèng', meaning: 'Victory through virtue', element: 'Fire', palace: 'Xiao Ji' },

  { chars: '空明', pinyin: 'Kōngmíng', meaning: 'Empty and luminous; clarity after release', element: 'Water', palace: 'Kong Wang' },
  { chars: '虚白', pinyin: 'Xūbái', meaning: 'Vacant whiteness; the room that fills with light', element: 'Metal', palace: 'Kong Wang' },
  { chars: '若谷', pinyin: 'Ruògǔ', meaning: 'Like an empty valley; humility that receives', element: 'Earth', palace: 'Kong Wang' },
  { chars: '无尘', pinyin: 'Wúchén', meaning: 'Without dust; untroubled by attachment', element: 'Metal', palace: 'Kong Wang' },
  { chars: '归一', pinyin: 'Guīyī', meaning: 'Return to oneness; reset and renewal', element: 'Water', palace: 'Kong Wang' },
  { chars: '静虚', pinyin: 'Jìngxū', meaning: 'Still emptiness; the fertile void', element: 'Earth', palace: 'Kong Wang' },
  { chars: '疏桐', pinyin: 'Shūtóng', meaning: 'Sparse paulownia; elegant detachment', element: 'Wood', palace: 'Kong Wang' },
  { chars: '泊舟', pinyin: 'Bózhōu', meaning: 'To moor the boat; pause before the next crossing', element: 'Water', palace: 'Kong Wang' },
  { chars: '听松', pinyin: 'Tīngsōng', meaning: 'Listening to the pine; patience in retreat', element: 'Wood', palace: 'Kong Wang' },
  { chars: '观澜', pinyin: 'Guānlán', meaning: 'Watching the waves; observing before entering', element: 'Water', palace: 'Kong Wang' },
];

const ELEMENTS = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'] as const;
const PALACES = ['Da An', 'Liu Lian', 'Su Xi', 'Chi Kou', 'Xiao Ji', 'Kong Wang'] as const;

function djb2(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & 0xffffffff;
  }
  return Math.abs(hash);
}

export interface NameGeneratorInput {
  englishName: string;
  gender: 'male' | 'female' | 'neutral';
  birthYear?: string;
  birthMonth?: string;
  focus: 'career' | 'love' | 'wealth' | 'wisdom' | 'balance';
}

export interface GeneratedNameResult extends ChineseName {
  position: number;
}

export interface ChineseNameReading {
  seed: number;
  names: GeneratedNameResult[];
  dominantElement: typeof ELEMENTS[number];
  dominantPalace: typeof PALACES[number];
  guidance: string;
}

function seedString(input: NameGeneratorInput): string {
  const parts = [
    input.englishName.trim().toLowerCase(),
    input.gender,
    input.focus,
    input.birthYear || '',
    input.birthMonth || '',
  ];
  return parts.join('|');
}

export function generateChineseNames(input: NameGeneratorInput): ChineseNameReading {
  const seed = djb2(seedString(input));

  // Pick 3 distinct indices deterministically
  const count = NAME_BANK.length;
  const idx1 = seed % count;
  const idx2 = (seed * 31 + 7) % count;
  const idx3 = (seed * 97 + 13) % count;
  const indices = [idx1, idx2 === idx1 ? (idx2 + 1) % count : idx2, idx3];
  if (indices[1] === indices[2]) {
    indices[2] = (indices[2] + 1) % count;
    if (indices[2] === indices[0]) indices[2] = (indices[2] + 1) % count;
  }

  const names: GeneratedNameResult[] = indices.map((idx, position) => ({
    ...NAME_BANK[idx],
    position: position + 1,
  }));

  const dominantElement = ELEMENTS[seed % ELEMENTS.length];
  const dominantPalace = PALACES[seed % PALACES.length];

  const guidanceMap: Record<string, string> = {
    career: 'These names favor professional advancement and public reputation. Choose the one whose tone feels most natural when you imagine it in a boardroom or on a book cover.',
    love: 'These names lean toward harmony, attraction and trustworthy speech. The right name should feel warm without losing dignity.',
    wealth: 'These names carry connotations of abundance, resourcefulness and durable value. Pick the one that sounds like a name money would trust.',
    wisdom: 'These names emphasize insight, study and clear judgment. Choose the one that feels like the name of someone who reads slowly and decides well.',
    balance: 'These names aim for equilibrium across life areas. Use your gut: the name that makes you pause is usually the right one.',
  };

  return {
    seed,
    names,
    dominantElement,
    dominantPalace,
    guidance: guidanceMap[input.focus] || guidanceMap.balance,
  };
}
