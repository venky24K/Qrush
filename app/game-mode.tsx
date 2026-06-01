import { Stack, useRouter } from 'expo-router';
import { Bot, Users } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, { FadeInDown, FadeInUp, Layout } from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ModeCard } from '@/components/ui/mode-card';
import { PatternBackground } from '@/components/ui/pattern-background';
import { SegmentButton } from '@/components/ui/segment-button';
import { Fonts } from '@/constants/theme';

type GameMode = 'pvp' | 'bot';
type BoardSize = '6x6' | '8x8';
type Difficulty = 'Easy' | 'Medium' | 'Hard';

const DIFFICULTIES: Difficulty[] = ['Easy', 'Medium', 'Hard'];

export default function GameModeScreen() {
  const router = useRouter();

  const [mode, setMode] = useState<GameMode>('bot');
  const [size, setSize] = useState<BoardSize>('8x8');
  const [difficulty, setDifficulty] = useState<Difficulty>('Medium');

  const handleStart = () => {
    router.push('/game');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <PatternBackground />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <Animated.View entering={FadeInUp.delay(80)} style={styles.header}>
            <ThemedText style={styles.eyebrow}>QRUSH CHESS</ThemedText>
            <ThemedText style={styles.title}>Choose Your Mode</ThemedText>
          </Animated.View>

          {/* Mode Selection — horizontal row */}
          <Animated.View entering={FadeInUp.delay(180)} style={styles.section}>
            <ThemedText style={styles.sectionLabel}>Game Mode</ThemedText>
            <View style={styles.modeRow}>
              <ModeCard
                title="vs Player"
                subtitle="Play locally with a friend"
                icon={<Users size={28} color={mode === 'pvp' ? '#FFF' : '#206393'} />}
                active={mode === 'pvp'}
                onPress={() => setMode('pvp')}
                style={styles.modeCardCompact}
              />
              <ModeCard
                title="vs Bot"
                subtitle="Challenge the AI engine"
                icon={<Bot size={28} color={mode === 'bot' ? '#FFF' : '#206393'} />}
                active={mode === 'bot'}
                onPress={() => setMode('bot')}
                style={styles.modeCardCompact}
              />
            </View>
          </Animated.View>

          {/* Board Size */}
          <Animated.View entering={FadeInUp.delay(280)} style={styles.section}>
            <View style={styles.sectionRow}>
              <ThemedText style={styles.sectionLabel}>Board Size</ThemedText>
              <View style={styles.badge}>
                <ThemedText style={styles.badgeText}>Standard</ThemedText>
              </View>
            </View>
            <View style={styles.segmentedControl}>
              <SegmentButton
                label="6 × 6"
                active={size === '6x6'}
                onPress={() => setSize('6x6')}
              />
              <SegmentButton
                label="8 × 8"
                active={size === '8x8'}
                onPress={() => setSize('8x8')}
              />
            </View>
          </Animated.View>

          {/* Difficulty — bot only */}
          {mode === 'bot' && (
            <Animated.View
              entering={FadeInUp.delay(360)}
              layout={Layout}
              style={styles.section}
            >
              <ThemedText style={styles.sectionLabel}>Bot Difficulty</ThemedText>
              <View style={styles.difficultyContainer}>
                {DIFFICULTIES.map((level) => (
                  <TouchableOpacity
                    key={level}
                    onPress={() => setDifficulty(level)}
                    style={[
                      styles.difficultyButton,
                      difficulty === level && styles.difficultyButtonActive,
                    ]}
                  >
                    <ThemedText
                      style={[
                        styles.difficultyText,
                        difficulty === level && styles.difficultyTextActive,
                      ]}
                    >
                      {level}
                    </ThemedText>
                  </TouchableOpacity>
                ))}
              </View>
            </Animated.View>
          )}

          {/* Start CTA */}
          <Animated.View entering={FadeInDown.delay(460)} style={styles.footer}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleStart}
              style={styles.startButton}
            >
              <ThemedText style={styles.startText}>START MATCH</ThemedText>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 40,
    gap: 28,
  },

  /* Header */
  header: {
    gap: 4,
    marginBottom: 4,
  },
  eyebrow: {
    fontFamily: Fonts.sansSemiBold,
    fontSize: 11,
    color: '#206393',
    letterSpacing: 2,
  },
  title: {
    fontFamily: Fonts.display,
    fontSize: 28,
    fontWeight: '700',
    color: '#0A0A0A',
    letterSpacing: -0.5,
  },

  /* Sections */
  section: {
    gap: 12,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionLabel: {
    fontFamily: Fonts.sansSemiBold,
    fontSize: 13,
    color: '#555',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  badge: {
    backgroundColor: 'rgba(144, 201, 255, 0.18)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  badgeText: {
    fontFamily: Fonts.sansSemiBold,
    fontSize: 11,
    color: '#206393',
  },

  /* Mode Cards — horizontal compact row */
  modeRow: {
    flexDirection: 'row',
    gap: 12,
  },
  modeCardCompact: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },

  /* Segmented control */
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: '#EFEFEF',
    borderRadius: 100,
    padding: 5,
    gap: 4,
  },

  /* Difficulty */
  difficultyContainer: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f5',
    borderRadius: 24,
    padding: 8,
    gap: 8,
  },
  difficultyButton: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 18,
  },
  difficultyButtonActive: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  difficultyText: {
    fontFamily: Fonts.sansSemiBold,
    fontSize: 14,
    color: '#75777e',
  },
  difficultyTextActive: {
    color: '#000',
    fontWeight: '700',
  },

  /* Footer CTA */
  footer: {
    marginTop: 8,
  },
  startButton: {
    backgroundColor: '#0A0A0A',
    paddingVertical: 18,
    borderRadius: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 10,
  },
  startText: {
    fontFamily: Fonts.display,
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF',
    letterSpacing: 1.5,
  },
});
