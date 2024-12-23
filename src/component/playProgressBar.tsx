import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {fontSizes, iconSizes, spacing} from '../constant/dimensions';
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import {colors} from '../constant/colors';
import {
  BackwardPlayIcon,
  ForwardPlayIcon,
  PlayAndPauseIcon,
} from './playControlButton';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { formattedSecondsToMinutes } from '../utils/helpts';

const PlayProgressBar = () => {
  const progress = useSharedValue(0);
  const min = useSharedValue(0); 
  const max = useSharedValue(1);
  const isSliding = useSharedValue(false);
  const { position, duration } = useProgress();

  if(!isSliding.value){
    progress.value = duration > 0 ? (position / duration) : 0;
  }


  return (
    <View >
      <View style={styles.progressContainer}>
        <Text style={styles.textStyle}>{formattedSecondsToMinutes(position)}</Text>
        <Text style={styles.textStyle}>{formattedSecondsToMinutes(duration - position)}</Text>
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
        onSlidingStart={ () => ( isSliding.value = true) }

        onValueChange={async (value)=>{
          await TrackPlayer.seekTo(value * duration)
        }}
        onSlidingComplete={async (value:any)=>{
          if(!isSliding.value){
            return
          }
          isSliding.value = false
          await TrackPlayer.seekTo(value * duration)
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
