import Constants from 'expo-constants';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { useI18n } from '@/i18n/LangContext';

export default function SettingsScreen() {
  const { t, lang, toggle } = useI18n();
  return (
    <SafeAreaView className="flex-1 bg-slate-950" edges={['bottom']}>
      <View className="p-6 gap-4">
        <Text className="text-slate-100 text-2xl font-bold">{t.settings}</Text>
        <Text className="text-slate-400">
          Current language: <Text className="text-slate-100">{lang.toUpperCase()}</Text>
        </Text>
        <Text className="text-slate-500 text-xs">
          App version: {Constants.expoConfig?.version ?? 'dev'}
        </Text>
        <Button onPress={toggle}>{t.lang_switch}</Button>
      </View>
    </SafeAreaView>
  );
}
