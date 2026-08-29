'use client';

import { useEffect } from 'react';

// Sets <html lang> to match the article's language. Server-rendered pages
// inherit the root layout's lang="en"; this client effect corrects it for
// Chinese articles so screen readers and search engines get the right locale.
export default function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
