import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1E293B' }}
      headerImage={
        <LinearGradient
          colors={['#1E293B', '#0F172A']}
          style={styles.headerGradient}
        >
          <IconSymbol
            size={310}
            color="rgba(59, 130, 246, 0.2)"
            name="chevron.left.forwardslash.chevron.right"
            style={styles.headerImage}
          />
        </LinearGradient>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
            color: '#3B82F6',
          }}>
          Explore Features
        </ThemedText>
      </ThemedView>
      
      <ThemedText style={styles.description}>
        Discover the power of Qrush. This template is designed for high-performance Android applications.
      </ThemedText>

      <View style={styles.section}>
        <Collapsible title="Premium UI Components">
          <ThemedText>
            Utilizing Expo Blur, Linear Gradient, and Reanimated for a state-of-the-art mobile experience.
          </ThemedText>
        </Collapsible>

        <Collapsible title="Android Optimization">
          <ThemedText>
            Configured with edge-to-edge layout and adaptive icons for a native feel on modern Android devices.
          </ThemedText>
        </Collapsible>

        <Collapsible title="Fast Refresh & Expo Router">
          <ThemedText>
            Enjoy the best developer experience with file-based routing and lightning-fast refresh times.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/router/introduction">
            <ThemedText type="link" style={styles.link}>Documentation</ThemedText>
          </ExternalLink>
        </Collapsible>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#94A3B8',
    lineHeight: 24,
    marginBottom: 24,
  },
  section: {
    gap: 16,
  },
  link: {
    marginTop: 8,
    color: '#3B82F6',
  },
});
