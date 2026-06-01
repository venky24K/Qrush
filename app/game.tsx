import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';

import { Colors } from '@/constants/theme';
import { PatternBackground } from '@/components/ui/pattern-background';
import { useColorScheme } from '@/hooks/use-color-scheme';

import { GameHeader } from '@/components/game/game-header';
import { GameBoard } from '@/components/game/game-board';
import { GameFooter } from '@/components/game/game-footer';

// --- Types ---
type CellState = 'empty' | 'queen' | 'dot';

const GRID_SIZE = 8;
const REQUIRED_QUEENS = 5;

export default function GameScreen() {
  const colorScheme = useColorScheme();
  // Since the background is now always white, we force the light theme colors
  // for text and interactive elements to ensure visibility.
  const colors = Colors.light;
  
  const [board, setBoard] = useState<CellState[][]>(
    Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill('empty'))
  );
  const [isPaused, setIsPaused] = useState(false);

  const queenCount = useMemo(() => {
    return board.flat().filter(cell => cell === 'queen').length;
  }, [board]);

  const toggleCell = useCallback((row: number, col: number) => {
    if (isPaused) return;
    
    setBoard(prev => {
      const next = prev.map(r => [...r]);
      const current = next[row][col];
      
      if (current === 'empty') next[row][col] = 'queen';
      else if (current === 'queen') next[row][col] = 'dot';
      else next[row][col] = 'empty';
      
      return next;
    });
  }, [isPaused]);

  const hasConflicts = useCallback((row: number, col: number) => {
    if (board[row][col] !== 'queen') return false;

    for (let i = 0; i < GRID_SIZE; i++) {
      if (i !== col && board[row][i] === 'queen') return true;
      if (i !== row && board[i][col] === 'queen') return true;
    }

    for (let i = 1; i < GRID_SIZE; i++) {
      if (row + i < GRID_SIZE && col + i < GRID_SIZE && board[row + i][col + i] === 'queen') return true;
      if (row - i >= 0 && col - i >= 0 && board[row - i][col - i] === 'queen') return true;
      if (row + i < GRID_SIZE && col - i >= 0 && board[row + i][col - i] === 'queen') return true;
      if (row - i >= 0 && col + i < GRID_SIZE && board[row - i][col + i] === 'queen') return true;
    }

    return false;
  }, [board]);

  const resetGame = () => {
    setBoard(Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill('empty')));
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <PatternBackground />
      
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <GameHeader 
            queenCount={queenCount}
            requiredQueens={REQUIRED_QUEENS}
            colorScheme="light"
            secondaryColor={colors.secondary}
          />

          <GameBoard 
            board={board}
            isPaused={isPaused}
            onToggleCell={toggleCell}
            onUnpause={() => setIsPaused(false)}
            hasConflicts={hasConflicts}
            colorScheme="light"
            primaryColor={colors.primary}
          />

          <GameFooter 
            isPaused={isPaused}
            onTogglePause={() => setIsPaused(!isPaused)}
            onResign={resetGame}
            textColor={colors.text}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 80,
  },
});
