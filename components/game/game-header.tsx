import React from 'react';
import { StyleSheet, View, ColorSchemeName, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Crown } from 'lucide-react-native';
import { Colors, Fonts } from '@/constants/theme';

interface GameHeaderProps {
  queenCount: number;
  requiredQueens: number;
  colorScheme: ColorSchemeName;
  secondaryColor: string;
}

export const GameHeader = ({ queenCount, requiredQueens, colorScheme, secondaryColor }: GameHeaderProps) => {
  const colors = Colors.light;

  return (
    <Animated.View entering={FadeInUp.delay(100)} style={styles.header}>
      <Text style={[styles.title, { color: colors.text }]}>GAMEPLAY</Text>
      
      <View style={styles.statusRow}>
        <View style={styles.statusInfo}>
          <Text style={[styles.statusLabel, { color: colors.text }]}>STATUS</Text>
          <View style={styles.statusBadge}>
            <View style={styles.statusDot} />
            <Text style={[styles.statusText, { color: colors.text }]}>YOUR TURN</Text>
          </View>
        </View>

        <View style={styles.queenCounter}>
          <Crown size={24} color="#206393" strokeWidth={2} />
          <Text style={[styles.queenText, { color: '#333' }]}>
            Queens: {queenCount}/{requiredQueens}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
  title: {
    fontFamily: Fonts.displayBold,
    fontSize: 32,
    letterSpacing: 6,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusInfo: {
    gap: 4,
  },
  statusLabel: {
    fontSize: 10,
    fontFamily: Fonts.sansSemiBold,
    opacity: 0.5,
    letterSpacing: 2,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4682B4',
    shadowColor: '#4682B4',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 4,
  },
  statusText: {
    fontFamily: Fonts.display,
    fontSize: 16,
    fontWeight: '600',
  },
  queenCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 24,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.08,
    shadowRadius: 25,
    elevation: 8,
  },
  queenText: {
    fontFamily: Fonts.sansSemiBold,
    fontSize: 22,
    letterSpacing: -0.5,
  },
});
