import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Svg, { Defs, Pattern, Rect, Path } from 'react-native-svg';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

const { width, height } = Dimensions.get('window');

export const PatternBackground = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  // Since the user wants a white Zen theme, we force the light palette for stripes
  const bgMain = '#FFFFFF';
  const bgStripe = '#f0f2f4';

  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: bgMain }]}>
      <Svg width="100%" height="100%">
        <Defs>
          <Pattern
            id="stripes"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-45)"
          >
            <Rect width="40" height="40" fill={bgMain} />
            <Rect width="20" height="40" fill={bgStripe} />
          </Pattern>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#stripes)" />
      </Svg>
    </View>
  );
};
