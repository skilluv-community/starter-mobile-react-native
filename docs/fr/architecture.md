# Architecture — starter-mobile-react-native

## Choix opinionated

### 1. Workflow Expo managed

Aucun code natif custom, pas de `ios/` `android/` dans le repo. Contributions débutants faciles. Passer bare workflow uniquement si nécessaire.

### 2. Expo Router 4 file-based

Modèle mental Next.js / SvelteKit. `_layout.tsx` wrappe. Navigation typée via `typedRoutes`.

### 3. NativeWind 4 pour le style

Classes Tailwind sur RN. Syntaxe familière, petit bundle, zéro runtime overhead.

### 4. TanStack Query pour la data

Même choix que le starter React web. Cache, retry, loading/error out of the box.

### 5. Nouvelle architecture RN (`newArchEnabled: true`)

Fabric + TurboModules + Codegen JSI. Défaut pour la suite, à adopter dès le jour 1.

### 6. Prioriser tests Android

Marché mobile africain majoritairement Android. Tester Android physique avant iOS (iOS build nécessite Mac).

## Hors scope

- Auth (`expo-auth-session` ou IdP externe).
- Modules natifs nécessitant bare workflow.
- Push (`expo-notifications`).
- Crash reporting (`sentry-expo`).
