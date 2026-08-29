/**
 * Format a stored cast timestamp into the user's local timezone.
 * The stored value is usually an RFC-1123 / ISO UTC string; we parse it
 * and re-render it with the browser's locale and timezone.
 */
export function formatCastTime(timeStr: string): string {
  if (!timeStr) return '';
  const d = new Date(timeStr);
  if (Number.isNaN(d.getTime())) return timeStr;
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  });
}
