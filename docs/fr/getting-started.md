# Démarrage — starter-mobile-react-native

## Prérequis

- Node 22 ou 24 (LTS)
- npm 10+
- App **Expo Go** sur téléphone pour tester sans build
- Pour builds natifs : compte EAS (cloud build Expo, tier gratuit généreux)

### Android local (optionnel)

- Android Studio + SDK Platform 35
- Java 17 (OpenJDK)
- Device physique avec debug USB > émulateur

### iOS local (optionnel)

- macOS + Xcode 16 + CocoaPods

## Premier lancement

```bash
npm install
npx expo start
```

Scan QR code depuis Expo Go. Live-reload auto.

## Variables d'environnement

Préfixer les vars client par `EXPO_PUBLIC_`.

## Build stores

```bash
npx eas login
npx eas build --platform android
```
