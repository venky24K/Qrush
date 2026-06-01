import { StyleSheet, View, Dimensions, TouchableOpacity, ColorSchemeName } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { FadeIn, ZoomOut } from 'react-native-reanimated';
import { Play } from 'lucide-react-native';
import { GameCell } from './game-cell';

const { width } = Dimensions.get('window');
const BOARD_SIZE = width * 0.9;

interface GameBoardProps {
  board: ('empty' | 'queen' | 'dot')[][];
  isPaused: boolean;
  onToggleCell: (row: number, col: number) => void;
  onUnpause: () => void;
  hasConflicts: (row: number, col: number) => boolean;
  colorScheme: ColorSchemeName;
  primaryColor: string;
}

export const GameBoard = ({ 
  board, 
  isPaused, 
  onToggleCell, 
  onUnpause, 
  hasConflicts, 
  colorScheme,
  primaryColor 
}: GameBoardProps) => {
  return (
    <Animated.View entering={FadeIn.delay(200)} style={styles.boardWrapper}>
      <BlurView intensity={20} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.boardGlass}>
        <View style={styles.boardGrid}>
          {board.map((row, rIdx) => (
            <View key={rIdx} style={styles.row}>
              {row.map((cell, cIdx) => (
                <GameCell 
                  key={`${rIdx}-${cIdx}`}
                  state={cell}
                  hasConflict={hasConflicts(rIdx, cIdx)}
                  isLight={(rIdx + cIdx) % 2 === 0}
                  onPress={() => onToggleCell(rIdx, cIdx)}
                  primaryColor={primaryColor}
                />
              ))}
            </View>
          ))}
        </View>

        {isPaused && (
          <Animated.View entering={FadeIn} exiting={ZoomOut} style={styles.pauseOverlay}>
            <BlurView intensity={60} tint="dark" style={StyleSheet.absoluteFill} />
            <TouchableOpacity 
              onPress={onUnpause}
              style={styles.playButton}
            >
              <Play size={40} color="#FFF" fill="#FFF" />
            </TouchableOpacity>
          </Animated.View>
        )}
      </BlurView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  boardWrapper: {
    width: BOARD_SIZE + 20,
    height: BOARD_SIZE + 20,
    alignSelf: 'center',
    borderRadius: 32,
    backgroundColor: '#FFF',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  boardGlass: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  boardGrid: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  pauseOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 15,
  },
});
