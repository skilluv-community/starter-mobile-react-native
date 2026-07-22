import { Pressable, Text } from 'react-native';
import type { ReactNode } from 'react';

interface Props {
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  children: ReactNode;
}

const styles = {
  primary: 'bg-emerald-600',
  secondary: 'bg-slate-800',
  ghost: 'bg-transparent border border-slate-700',
} as const;

export function Button({ onPress, variant = 'primary', disabled, children }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`rounded px-4 py-3 ${styles[variant]} ${disabled ? 'opacity-50' : ''}`}
    >
      <Text className="text-white text-center font-semibold">{children}</Text>
    </Pressable>
  );
}
