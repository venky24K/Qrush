import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withRepeat, 
  withSequence,
  FadeInDown,
  FadeInUp
} from 'react-native-reanimated';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ChessBoard } from '@/components/ui/chess-board';
import { Link } from 'expo-router';
import { PatternBackground } from '@/components/ui/pattern-background';
import { Fonts, Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={styles.container}>
      <PatternBackground />
      <View style={styles.content}>
        <Animated.View 
          entering={FadeInUp.delay(300).duration(800)}
          style={styles.header}
        >
          <ThemedText style={styles.title}>QRUSH</ThemedText>
        </Animated.View>
        
        <ChessBoard />

        <Animated.View 
          entering={FadeInDown.delay(500).duration(1000)}
          style={styles.footer}
        >
          <BlurView intensity={30} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.blurButtonContainer}>
            <Link href="/game-mode" asChild>
              <TouchableOpacity style={styles.button}>
                <LinearGradient
                  colors={['#000', '#222']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.buttonGradient}
                >
                  <ThemedText style={styles.buttonText}>Get Started</ThemedText>
                  <MaterialCommunityIcons name="arrow-right" size={20} color="#FFF" />
                </LinearGradient>
              </TouchableOpacity>
            </Link>
          </BlurView>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 80,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.displayBold,
    fontSize: 48,
    letterSpacing: 10,
    color: '#000',
    opacity: 0.9,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
  blurButtonContainer: {
    width: '100%',
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  button: {
    width: '100%',
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: Fonts.display,
    letterSpacing: 2,
  },
});
