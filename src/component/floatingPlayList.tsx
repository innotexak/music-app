/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontFamilies} from '../constant/fontFamilies';
import {fontSizes, iconSizes, spacing} from '../constant/dimensions';
import {colors} from '../constant/colors';
import {
  BackwardPlayIcon,
  ForwardPlayIcon,
  PlayAndPauseIcon,
} from './playControlButton';
import {useSharedValue} from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
const uri =
  'https://media.istockphoto.com/id/869382034/photo/closeup-view-of-woman-holding-modern-smartphone-in-hands-girl-typing-on-empty-mobile-screen.jpg?b=1&s=170x170&k=20&c=yCN5IJmz8jf5VKIjlMF_TAsZ2Cdgmurcxkawd225G_k=';

const FloatingPlayList = () => {
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(100);
  return (
    <View>
      <View style={{zIndex:1}}>
        <Slider
          style={styles.container}
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          theme={{
            minimumTrackTintColor: colors.minTintColor,
            maximumTrackTintColor: colors.maxTintColor,
          }}
          containerStyle={{
            height:7,
          }}
        />
      </View>
      <TouchableOpacity style={styles.container} activeOpacity={0.85}>
        <Image source={{uri}} style={styles.coverImage} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Amazing Grace</Text>
          <Text style={styles.artist}>John Newton</Text>
        </View>
        r
        <View style={styles.playControlStyle}>
          <BackwardPlayIcon size={iconSizes.md} />
          <PlayAndPauseIcon size={iconSizes.md} />
          <ForwardPlayIcon size={iconSizes.md} />
        </View>
      </TouchableOpacity>
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
    textAlign: 'center',
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
