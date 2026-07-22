import { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { useI18n } from '@/i18n/LangContext';

export default function CounterScreen() {
  const { t } = useI18n();
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView className="flex-1 bg-slate-950" edges={['bottom']}>
      <View className="p-6 gap-6">
        <Text className="text-slate-100 text-2xl font-bold">{t.counter}</Text>
        <View className="rounded border border-slate-800 p-6 gap-4">
          <Text className="text-slate-400">
            {t.counter_current}: <Text className="text-slate-100 text-2xl font-mono">{count}</Text>
          </Text>
          <View className="gap-2">
            <Button onPress={() => setCount((c) => c + 1)}>{t.increment}</Button>
            <Button variant="secondary" onPress={() => setCount((c) => c - 1)}>
              {t.decrement}
            </Button>
            <Button variant="ghost" onPress={() => setCount(0)}>
              {t.reset}
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
