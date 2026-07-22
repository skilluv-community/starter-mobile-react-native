# Architecture — starter-mobile-react-native

## Opinionated choices

### 1. Expo managed workflow

No custom native code, no `ios/` and `android/` folders in the repo. This is what makes contributions from beginners feasible. When you need custom native modules, use Expo config plugins or eject to the bare workflow — but keep managed as long as you can.

### 2. Expo Router 4 with file-based routing

Same mental model as Next.js / SvelteKit. `_layout.tsx` wraps every screen under it. Navigation is typed thanks to the `typedRoutes` experiment.

### 3. NativeWind 4 for styling

Tailwind classes on React Native. Familiar syntax, small bundle, no runtime overhead.

### 4. TanStack Query for data

Same choice as the web React starter. Cache, retries, loading/error states out of the box, no Redux.

### 5. New React Native architecture (`newArchEnabled: true`)

Fabric renderer + TurboModules + JSI-based Codegen. It's the default going forward and worth adopting from day one on new projects.

### 6. Prioritize Android testing

The African mobile market skews heavily Android. Test on a real Android device before iOS. Building for iOS still needs a Mac.

## What's out of scope

- Auth flow (add `expo-auth-session` or an external IdP).
- Native modules requiring bare workflow.
- Push notifications (add `expo-notifications` when needed).
- Sentry / crash reporting (add `sentry-expo`).
