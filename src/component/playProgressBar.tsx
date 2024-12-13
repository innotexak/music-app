import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontSizes, iconSizes, spacing} from '../constant/dimensions';
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import {colors} from '../constant/colors';
import {
  BackwardPlayIcon,
  ForwardPlayIcon,
  PlayAndPauseIcon,
} from './playControlButton';

const PlayProgressBar = () => {
  const progress = useSharedValue(0.3);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  return (
    <View >
      <View style={styles.progressContainer}>
        <Text style={styles.textStyle}>0.3</Text>
        <Text style={styles.textStyle}>2.0</Text>
      </View>
     <View style={styles.progressWrapper}>
     <Slider
        style={styles.sliderContainer}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        theme={{
          minimumTrackTintColor: colors.minTintColor,
          maximumTrackTintColor: colors.maxTintColor,
        }}
      />
     </View>

      <View style={styles.playControlStyle}>
        <BackwardPlayIcon size={iconSizes.sm} />
        <PlayAndPauseIcon size={iconSizes.xl} />
        <ForwardPlayIcon size={iconSizes.sm} />
      </View>
    </View>
  );
};

export default PlayProgressBar;

const styles = StyleSheet.create({
  progressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
      paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    marginBottom:spacing.lg
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    color: colors.textPrimary,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  textStyle: {
    color: colors.textPrimary,
    fontSize: fontSizes.md,
    opacity:0.75,
  },
  playControlStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical:spacing.xl,
  },
});
