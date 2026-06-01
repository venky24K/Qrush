import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Fonts } from '@/constants/theme';

export interface SegmentButtonProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

export function SegmentButton({ label, active, onPress }: SegmentButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.segmentButton, active && styles.segmentButtonActive]}
    >
      <ThemedText style={[styles.segmentText, active && styles.segmentTextActive]}>
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  segmentButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 100,
  },
  segmentButtonActive: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  segmentText: {
    fontFamily: Fonts.sansSemiBold,
    fontSize: 14,
    color: '#75777e',
  },
  segmentTextActive: {
    color: '#000',
    fontWeight: '700',
  },
});
