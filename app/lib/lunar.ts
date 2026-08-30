import { Lunar } from 'lunar-typescript';

export interface LunarParts {
  month: number; // 1-12 (leap month counted as its own month number)
  day: number; // 1-30
  hourBranch: number; // 1-12, 子=1 ... 亥=12
}

// Map a 24h clock to the traditional 12 double-hour branches.
// 23:00-00:59 -> 子(1), 01:00-02:59 -> 丑(2), ... 21:00-22:59 -> 亥(12)
function getHourBranch(hour: number): number {
  return (Math.floor((hour + 1) / 2) % 12) + 1;
}

// Xiao Liu Ren palaces are derived from the LUNAR month, day and hour — not
// the Gregorian calendar. This returns the lunar parts for a given moment.
export function getLunarParts(date: Date): LunarParts {
  const lunar = Lunar.fromDate(date);
  // lunar-typescript returns a NEGATIVE month number for leap months
  // (e.g. -4 for 闰四月). Abs() folds leap months onto their base month,
  // which also keeps the downstream `(month - 1) % 6` non-negative — without
  // this, a leap month would produce a negative palace index and read
  // `undefined` out of the palaces array.
  const month = Math.abs(lunar.getMonth()); // 1-12
  const day = lunar.getDay(); // 1-30
  return { month, day, hourBranch: getHourBranch(date.getHours()) };
}
