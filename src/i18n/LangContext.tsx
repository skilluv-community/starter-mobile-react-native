import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { dictionaries, type Dict, type Lang } from './index';

interface Ctx {
  lang: Lang;
  t: Dict;
  toggle: () => void;
}

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const value = useMemo<Ctx>(
    () => ({
      lang,
      t: dictionaries[lang],
      toggle: () => setLang((l) => (l === 'en' ? 'fr' : 'en')),
    }),
    [lang],
  );
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useI18n() {
  const c = useContext(LangCtx);
  if (!c) throw new Error('useI18n must be used inside <LangProvider>');
  return c;
}
