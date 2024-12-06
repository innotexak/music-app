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
import MovingText from './movingText';
import { useNavigation } from '@react-navigation/native';

const uri =
  'https://media.istockphoto.com/id/869382034/photo/closeup-view-of-woman-holding-modern-smartphone-in-hands-girl-typing-on-empty-mobile-screen.jpg?b=1&s=170x170&k=20&c=yCN5IJmz8jf5VKIjlMF_TAsZ2Cdgmurcxkawd225G_k=';

const FloatingPlayList = () => {
  const navigation = useNavigation()
  const progress = useSharedValue(0.25);
  const min = useSharedValue(0);
  const max = useSharedValue(1);

  const OpenPlayerScreen = ()=>{
    navigation.navigate('PLAYER_SCREEN')
  }

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
     
        />
      </View>
      <TouchableOpacity style={styles.container} activeOpacity={0.85} onPress={OpenPlayerScreen}>
        <Image source={{uri}} style={styles.coverImage} />
        <View style={styles.titleContainer}>
          <MovingText text={"Amazing Grace have seen"} style={styles.title} animatedThreshold={7}/>
          <Text style={styles.artist}>John Newton</Text>
        </View>
        
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
  overflow:'hidden'
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
