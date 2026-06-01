import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
import { Crown } from 'lucide-react-native';

interface GameCellProps {
  state: 'empty' | 'queen' | 'dot';
  hasConflict: boolean;
  isLight: boolean;
  onPress: () => void;
  primaryColor: string;
}

export const GameCell = ({ state, hasConflict, isLight, onPress, primaryColor }: GameCellProps) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.cell,
        { backgroundColor: isLight ? 'rgba(255,255,255,0.4)' : 'rgba(237,238,239,0.4)' },
        hasConflict && { backgroundColor: 'rgba(255,0,0,0.1)' }
      ]}
    >
      {state === 'queen' && (
        <Animated.View entering={ZoomIn.springify()} exiting={ZoomOut} style={styles.pieceContainer}>
          <Crown size={24} color={hasConflict ? '#ef4444' : primaryColor} strokeWidth={2.5} />
        </Animated.View>
      )}
      {state === 'dot' && (
        <Animated.View entering={ZoomIn} exiting={ZoomOut} style={styles.dot} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  pieceContainer: {
    zIndex: 2,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(32, 99, 147, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(32, 99, 147, 0.2)',
  },
});
