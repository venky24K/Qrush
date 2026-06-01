import { CheckCircle2 } from 'lucide-react-native';
import React, { memo } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Fonts } from '@/constants/theme';

export interface ModeCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  active?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const ModeCard = memo(
  ({
    title,
    subtitle,
    icon,
    active = false,
    onPress,
    style,
  }: ModeCardProps) => {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={{ selected: active }}
        accessibilityLabel={`${title} mode`}
        activeOpacity={0.85}
        onPress={onPress}
        style={[
          styles.card,
          active && styles.cardActive,
          style,
        ]}
      >
        {/* Selection Indicator */}
        {active && (
          <View style={styles.checkIcon}>
            <CheckCircle2
              size={20}
              color="#FFFFFF"
              fill="#000000"
            />
          </View>
        )}

        {/* Icon */}
        <View
          style={[
            styles.iconWrapper,
            active && styles.iconWrapperActive,
          ]}
        >
          {icon}
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <ThemedText
            numberOfLines={1}
            style={[
              styles.title,
              active && styles.titleActive,
            ]}
          >
            {title}
          </ThemedText>

          <ThemedText
            numberOfLines={2}
            style={styles.subtitle}
          >
            {subtitle}
          </ThemedText>
        </View>
      </TouchableOpacity>
    );
  }
);

ModeCard.displayName = 'ModeCard';

const styles = StyleSheet.create({
  card: {
    position: 'relative',

    backgroundColor: 'rgba(255,255,255,0.75)',

    borderRadius: 28,
    paddingVertical: 24,
    paddingHorizontal: 20,

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1.5,
    borderColor: 'rgba(0,0,0,0.06)',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.06,
    shadowRadius: 18,

    elevation: 4,

    overflow: 'hidden',
  },

  cardActive: {
    borderColor: '#000',
    backgroundColor: '#FFFFFF',
    transform: [{ scale: 1.02 }],
  },

  iconWrapper: {
    width: 54,
    height: 54,
    borderRadius: 999,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(144, 201, 255, 0.18)',

    marginBottom: 12,
  },

  iconWrapperActive: {
    backgroundColor: '#000',
  },

  textContainer: {
    alignItems: 'center',
    gap: 6,
  },

  title: {
    fontFamily: Fonts.display,
    fontSize: 15,
    fontWeight: '600',
    color: '#111',

    textAlign: 'center',
    letterSpacing: -0.3,
  },

  titleActive: {
    fontWeight: '700',
  },

  subtitle: {
    fontFamily: Fonts.sans,
    fontSize: 11,
    lineHeight: 16,
    color: '#75777E',

    textAlign: 'center',

    maxWidth: 160,
  },

  checkIcon: {
    position: 'absolute',
    top: 14,
    right: 14,

    zIndex: 10,
  },
});