// 改法 B — Cast 免费阶段，DAY / HOUR 宫位的"钩子"文案。
// 用法：在 page.tsx 渲染免费预览区时，替代"The current pivot is veiled." 这种空话。
// 文案原则：免费给"方向感"、不给"具体结论"——让陌生访客被点中、想解锁，但又不得不掏钱。
// 数据源与 page.tsx 用的 PALACES（data/content.ts）id 对齐：
//   Da An / Liu Lian / Su Xi / Chi Kou / Xiao Ji / Kong Wang

export type PalaceHook = {
  id: string;
  zhHook: string;
  enHook: string;
};

export const PALACE_HOOKS: PalaceHook[] = [
  {
    id: 'daan',
    zhHook: '此刻利于按兵不动——但"安全"不等于"准备好了"。完整解读会告诉你，静是策略还是只是惯性。',
    enHook:
      'This moment favors standing ground — but "safe" is not the same as "ready." The full reading shows whether stillness is strategy or just comfort.',
  },
  {
    id: 'liulian',
    zhHook: '某件事正在原地绕圈。这不是对你的否定，是对时机的判断。完整解读会告诉你，那个结什么时候会松。',
    enHook:
      'Something is circling back unfinished. This isn\'t a verdict against you — it\'s a verdict on timing. The full reading shows when the knot loosens.',
  },
  {
    id: 'suxi',
    zhHook: '一扇窗正在打开——而且这种吉利的窗开得快关得也快。完整解读会勾勒出你 72 小时的窗口形状。',
    enHook:
      'A window is open right now — and windows this auspicious close fast. The full reading shows the exact 72-hour shape of your opening.',
  },
  {
    id: 'chikou',
    zhHook: '语言很快会变成武器。这个宫位的解法是落纸为证，不是争论。完整解读会告诉你如何留下书面证据链。',
    enHook:
      'Words are about to become weapons here. This palace is read with documents, not arguments. The full reading shows how to build your paper trail.',
  },
  {
    id: 'xiaoji',
    zhHook: '善意正在转化为具体收益——这是需要对方点头的事里最好的宫位。完整解读会告诉你，往哪里按一下。',
    enHook:
      'Goodwill is convertible into gain this cycle — the best palace for anything that needs another party to say yes. The full reading shows where to press.',
  },
  {
    id: 'kongwang',
    zhHook: '你正在追的不会以现在这个形态出现。把它读作一次重置，而不是失败。完整解读会告诉你该放下哪条线、又该把哪条线重新对准。',
    enHook:
      'What you\'re chasing won\'t materialize as-is. Read this as a reset, not a failure. The full reading shows what to abandon — and what to re-point at.',
  },
];

export function getHook(id: string, lang: 'en' | 'zh' = 'en'): string | null {
  const row = PALACE_HOOKS.find((p) => p.id === id);
  if (!row) return null;
  return lang === 'zh' ? row.zhHook : row.enHook;
}
