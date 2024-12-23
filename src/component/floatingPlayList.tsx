/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {fontFamilies} from '../constant/fontFamilies';
import {fontSizes, iconSizes, spacing} from '../constant/dimensions';
import {colors} from '../constant/colors';
import {
  BackwardPlayIcon,
  ForwardPlayIcon,
  PlayAndPauseIcon,
} from './playControlButton';
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import MovingText from './movingText';
import {useNavigation} from '@react-navigation/native';
import {IAppScreen} from '../../App';
import TrackPlayer, {
  useActiveTrack,
  useProgress,
} from 'react-native-track-player';

const FloatingPlayList = () => {
  const navigation = useNavigation();
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  const { position,duration} = useProgress();
  const isSliding = useSharedValue(false);

  const activeTrack = useActiveTrack();

  if(!isSliding.value){
    progress.value = duration > 0 ? (position / duration) : 0;
  }


  const OpenPlayerScreen = () => {
    navigation.navigate(IAppScreen.PLAYER_SCREEN as never);
  };

  return (
    <View>
      {
        activeTrack && activeTrack.url && (
          <>
            <View style={{zIndex: 1}}>
              <Slider
                style={styles.container}
                progress={progress}
                minimumValue={min}
                maximumValue={max}
                theme={{
                  minimumTrackTintColor: colors.minTintColor,
                  maximumTrackTintColor: colors.maxTintColor,
                }}
                renderBubble={() => null}
                onSlidingStart={() => (isSliding.value = true)}
                onValueChange={async value => {
                  await TrackPlayer.seekTo(value * duration);
                }}
                onSlidingComplete={async (value: any) => {
                  if (!isSliding.value) {
                    return;
                  }
                  isSliding.value = false;
                  await TrackPlayer.seekTo(value * duration);
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.container}
              activeOpacity={0.85}
              onPress={OpenPlayerScreen}
            >
              <Image
                source={{uri: activeTrack.url}}
                style={styles.coverImage}
              />
              <View style={styles.titleContainer}>
                <MovingText
                  text={activeTrack.title as string}
                  style={styles.title}
                  animatedThreshold={7}
                />
                <Text style={styles.artist}>{activeTrack.artist}</Text>
              </View>

              <View style={styles.playControlStyle}>
                <BackwardPlayIcon size={iconSizes.md} />
                <PlayAndPauseIcon size={iconSizes.md} />
                <ForwardPlayIcon size={iconSizes.md} />
              </View>
            </TouchableOpacity>
          </>
        )
        //  : (
        //   <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        //     <Text style={{color:colors.textPrimary}}>Loading...</Text>
        //   </View>
        // )
      }
    </View>
  );
};

export default FloatingPlayList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: spacing.md,
    overflow: 'hidden',
  },
  coverImage: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamilies.bold,
    color: colors.textPrimary,
  },
  artist: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.md,
    color: colors.textPrimary,
  },
  playControlStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
});
