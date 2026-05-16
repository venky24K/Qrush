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

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const glowOpacity = useSharedValue(0.4);

  useEffect(() => {
    glowOpacity.value = withRepeat(
      withSequence(
        withTiming(0.7, { duration: 2000 }),
        withTiming(0.4, { duration: 2000 })
      ),
      -1,
      true
    );
  }, []);

  const glowStyle = useAnimatedStyle(() => ({
    opacity: glowOpacity.value,
  }));

  return (
    <ThemedView style={styles.container}>
      <ImageBackground 
        source={require('@/assets/images/bg.png')} 
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)', '#000']}
          style={styles.gradient}
        />

        <View style={styles.content}>
          <Animated.View 
            entering={FadeInUp.delay(200).duration(1000)}
            style={styles.header}
          >
            <View style={styles.logoContainer}>
              <Animated.View style={[styles.glowCircle, glowStyle]} />
              <MaterialCommunityIcons name="flash-circle" size={80} color="#60A5FA" />
            </View>
            <ThemedText type="title" style={styles.title}>QRUSH</ThemedText>
            <ThemedText style={styles.subtitle}>Speeding through your tasks with AI precision.</ThemedText>
          </Animated.View>

          <Animated.View 
            entering={FadeInDown.delay(500).duration(1000)}
            style={styles.footer}
          >
            <BlurView intensity={30} tint="dark" style={styles.blurButtonContainer}>
              <TouchableOpacity style={styles.button}>
                <LinearGradient
                  colors={['#3B82F6', '#2563EB']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.buttonGradient}
                >
                  <ThemedText style={styles.buttonText}>Get Started</ThemedText>
                  <MaterialCommunityIcons name="arrow-right" size={20} color="#FFF" />
                </LinearGradient>
              </TouchableOpacity>
            </BlurView>

            <ThemedText style={styles.version}>v1.0.0 Beta</ThemedText>
          </Animated.View>
        </View>
      </ImageBackground>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    width: width,
    height: height,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  glowCircle: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#3B82F6',
    filter: 'blur(30px)',
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 8,
    textShadowColor: 'rgba(59, 130, 246, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 24,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
  blurButtonContainer: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  button: {
    width: '100%',
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
  version: {
    color: '#475569',
    fontSize: 12,
    marginTop: 24,
    letterSpacing: 2,
  },
});
