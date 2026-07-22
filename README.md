# starter-mobile-react-native

> A Skilluv starter — Expo SDK 52 (managed) + Expo Router 4 + NativeWind 4 + TanStack Query 5.

[![CI](https://github.com/skilluv-community/starter-mobile-react-native/actions/workflows/ci.yml/badge.svg)](https://github.com/skilluv-community/starter-mobile-react-native/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Skilluv](https://img.shields.io/badge/skilluv-community-emerald)](https://skilluv.io)

## English

### What this is

A cross-platform (iOS + Android + web) React Native starter using the current-generation Expo stack:

- **Expo SDK 52** with the new React Native architecture enabled
- **Expo Router 4** for file-based navigation with typed routes
- **NativeWind 4** (Tailwind classes on React Native)
- **TanStack Query 5** for data fetching
- **TypeScript strict** + ESLint + Prettier + Jest

### Quickstart

```bash
git clone git@github.com:skilluv-community/starter-mobile-react-native.git
cd starter-mobile-react-native
cp .env.example .env
npm install
npx expo start
```

Scan the QR code with the **Expo Go** app on iOS/Android, or press `a` (Android) / `i` (iOS) / `w` (web).

### Structure

```
app/                    Expo Router file-based routes
  _layout.tsx           Providers + Stack navigator
  index.tsx             Home (with API demo)
  counter.tsx           Local-state counter
  settings.tsx          Language toggle + version
src/
  components/Button.tsx
  api/client.ts         Fetch helper
  i18n/                 Dictionaries + LangProvider
assets/images/          App icon and splash (add your own)
__tests__/              Jest tests
```

### Docs

- [`docs/en/getting-started.md`](./docs/en/getting-started.md)
- [`docs/en/architecture.md`](./docs/en/architecture.md)

---

## Français

Starter React Native cross-platform (iOS + Android + web) sur Expo SDK 52. Voir [`docs/fr/getting-started.md`](./docs/fr/getting-started.md).

```bash
git clone git@github.com:skilluv-community/starter-mobile-react-native.git
cd starter-mobile-react-native
cp .env.example .env
npm install
npx expo start
```

---

## License

MIT — see [LICENSE](./LICENSE).
