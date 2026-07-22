export const en = {
  title: 'Skilluv starter',
  tagline: 'Expo SDK 52 + Expo Router + NativeWind + TanStack Query.',
  home: 'Home',
  counter: 'Counter',
  settings: 'Settings',
  say_hello: 'Say hello',
  api_demo: 'API demo',
  fetch: 'Fetch',
  loading: 'Loading…',
  stars_label: 'Stars for facebook/react',
  counter_current: 'Current',
  increment: 'Increment',
  decrement: 'Decrement',
  reset: 'Reset',
  lang_switch: 'FR',
};

export type Dict = typeof en;

export const fr: Dict = {
  title: 'Starter Skilluv',
  tagline: 'Expo SDK 52 + Expo Router + NativeWind + TanStack Query.',
  home: 'Accueil',
  counter: 'Compteur',
  settings: 'Réglages',
  say_hello: 'Dire bonjour',
  api_demo: 'Démo API',
  fetch: 'Charger',
  loading: 'Chargement…',
  stars_label: 'Étoiles de facebook/react',
  counter_current: 'Valeur',
  increment: 'Incrémenter',
  decrement: 'Décrémenter',
  reset: 'Reset',
  lang_switch: 'EN',
};

export const dictionaries = { en, fr } as const;
export type Lang = keyof typeof dictionaries;
