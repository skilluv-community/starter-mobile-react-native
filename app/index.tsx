import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { fetchRepoStats } from '@/api/client';
import { useI18n } from '@/i18n/LangContext';

const REPO = 'facebook/react';

export default function Home() {
  const { t, toggle } = useI18n();
  const stars = useQuery({ queryKey: ['stars', REPO], queryFn: () => fetchRepoStats(REPO), enabled: false });

  return (
    <SafeAreaView className="flex-1 bg-slate-950" edges={['bottom']}>
      <ScrollView contentContainerClassName="p-6 gap-6">
        <View>
          <Text className="text-slate-100 text-3xl font-bold mb-1">{t.title}</Text>
          <Text className="text-slate-400">{t.tagline}</Text>
        </View>

        <View className="gap-3">
          <Link href="/counter" asChild>
            <Button variant="secondary">{t.counter}</Button>
          </Link>
          <Link href="/settings" asChild>
            <Button variant="ghost">{t.settings}</Button>
          </Link>
        </View>

        <View className="rounded border border-slate-800 p-4 gap-3">
          <Text className="text-slate-100 font-semibold">{t.api_demo}</Text>
          <Button onPress={() => stars.refetch()} disabled={stars.isFetching}>
            {stars.isFetching ? t.loading : t.fetch}
          </Button>
          {stars.error && (
            <Text className="text-red-400">{(stars.error as Error).message}</Text>
          )}
          {stars.data && (
            <Text className="text-emerald-400">
              {t.stars_label}: {stars.data.stargazers_count.toLocaleString('en-US')}
            </Text>
          )}
        </View>

        <Button variant="ghost" onPress={toggle}>
          {t.lang_switch}
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
