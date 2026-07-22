import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../src/global.css';
import { LangProvider } from '@/i18n/LangContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 30_000, retry: 1, refetchOnWindowFocus: false },
  },
});

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <LangProvider>
          <StatusBar style="light" />
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: '#020617' },
              headerTintColor: '#f1f5f9',
              contentStyle: { backgroundColor: '#020617' },
            }}
          >
            <Stack.Screen name="index" options={{ title: 'Skilluv' }} />
            <Stack.Screen name="counter" options={{ title: 'Counter' }} />
            <Stack.Screen name="settings" options={{ title: 'Settings' }} />
          </Stack>
        </LangProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
