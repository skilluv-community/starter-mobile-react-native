# Getting started — starter-mobile-react-native

## Prerequisites

- Node 22 or 24 (LTS)
- npm 10+
- **Expo Go** app on your phone (iOS App Store / Google Play) for testing without a build
- To build native binaries: EAS account (Expo's cloud build service) — free tier is generous

### Optional local Android setup

- Android Studio + Android SDK (Platform 35)
- Java 17 (OpenJDK). Expo takes ~4-6 GB total for the toolchain.
- A physical device with USB debugging is faster than an emulator.

### Optional local iOS setup

- macOS + Xcode 16
- CocoaPods

## First run

```bash
npm install
npx expo start
```

Scan the QR code with the Expo Go app. Live-reload works automatically.

## Environment variables

Prefix client-visible env vars with `EXPO_PUBLIC_` (see `.env.example`).

## Building for stores

Use EAS Build:

```bash
npx eas login
npx eas build --platform android
```

The `eas.json` file is not shipped — generate it interactively with `npx eas build:configure`.
