import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const { width } = Dimensions.get('window');
const BOARD_SIZE = width * 0.9;
const SQUARE_SIZE = BOARD_SIZE / 8;

export const ChessBoard = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  const renderSquare = (row: number, col: number) => {
    const isDark = (row + col) % 2 === 1;
    return (
      <View
        key={`${row}-${col}`}
        style={[
          styles.square,
          {
            backgroundColor: isDark ? colors.surfaceDim : colors.background,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
          },
        ]}
      />
    );
  };

  const renderRow = (row: number) => {
    return (
      <View key={row} style={styles.row}>
        {[...Array(8)].map((_, col) => renderSquare(row, col))}
      </View>
    );
  };

  return (
    <Animated.View 
      entering={FadeIn.duration(800)}
      style={styles.container}
    >
      <View style={styles.board}>
        {[...Array(8)].map((_, row) => renderRow(row))}
      </View>
      <View style={styles.border} pointerEvents="none" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: BOARD_SIZE + 4,
    height: BOARD_SIZE + 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  board: {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
  },
});
