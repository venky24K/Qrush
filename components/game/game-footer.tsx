import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Pause, Play, History } from 'lucide-react-native';
import { ThemedText } from '@/components/themed-text';
import { Fonts } from '@/constants/theme';

interface GameFooterProps {
  isPaused: boolean;
  onTogglePause: () => void;
  onResign: () => void;
  textColor: string;
}

export const GameFooter = ({ isPaused, onTogglePause, onResign, textColor }: GameFooterProps) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity 
        onPress={onTogglePause}
        style={styles.iconButton}
      >
        {isPaused ? <Play size={24} color={textColor} /> : <Pause size={24} color={textColor} />}
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={onResign}
        style={styles.resignButton}
      >
        <ThemedText style={styles.resignText}>RESIGN</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <History size={24} color={textColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  resignButton: {
    backgroundColor: '#000',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  resignText: {
    color: '#FFF',
    fontFamily: Fonts.display,
    fontSize: 16,
    letterSpacing: 2,
  },
});
