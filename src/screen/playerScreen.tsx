import React, {FC, useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {colors, icons} from '../constant/colors';
import {fontSizes, spacing} from '../constant/dimensions';
import {fontFamilies} from '../constant/fontFamilies';
import {RepeatComponent, ShuffleComponent} from '../component/repeatShuffle';
import PlayProgressBar from '../component/playProgressBar';
import { ScrollView } from 'react-native-gesture-handler';
import TrackPlayer, { useActiveTrack } from 'react-native-track-player';
import { Song } from '../component/type';
import LoadingComponent from '../component/loadingComponent';

export type IAppScreen = {
  HOME_SCREEN: undefined;
  LIKE_SCREEN: undefined;
  PLAYER_SCREEN: undefined;
};
type PlayerScreenNavigationProp = NativeStackNavigationProp<
  IAppScreen,
  'PLAYER_SCREEN'
>;

interface PlayerScreenProps {
  navigation: PlayerScreenNavigationProp;
}

const PlayerScreen: FC<PlayerScreenProps> = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
const activeTrack = useActiveTrack()


if(!activeTrack) return <LoadingComponent />
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.playerHeader}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            color={icons.iconSecondary}
            size={spacing.lg}
          />
        </TouchableOpacity>
        <Text style={styles.centerText}>Playing Now</Text>
      </View>

      {/* Album Art & Info */}
      <View style={styles.imageContainer}>
        <Image source={{uri:activeTrack.artwork}} style={styles.imageCover} />
        <View style={styles.imageBottomText}>
          <View style={styles.sideIcon}>
            <Text style={styles.songsTitle} numberOfLines={1}>
            {activeTrack.title}
            </Text>
            <Text style={styles.artist}>{activeTrack.artist}</Text>
          </View>
          <TouchableOpacity
            style={styles.heartTouchable}
            onPress={() => setIsLiked(!isLiked)}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              color={icons.iconSecondary}
              size={spacing.lg}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Player Controls */}
      <View style={styles.playerControl}>
        <TouchableOpacity onPress={() => setIsMuted(!isMuted)}>
          <Feather
            name={isMuted ? 'volume-x' : 'volume-1'}
            color={icons.iconSecondary}
            size={spacing.xl}
          />
        </TouchableOpacity>

        <View style={styles.innerIcons}>
          <RepeatComponent />
          <ShuffleComponent />
        </View>
      </View>

      {/* View for progress display and player */}
    <PlayProgressBar />
     
    </ScrollView>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,

  },
  playerHeader: {
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  centerText: {
    flex: 1,
    textAlign: 'center',
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.lg,
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageCover: {
    width: 320,
    height: 320,
    borderRadius: 10,
  },
  imageBottomText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical:spacing.xl,
    width: '90%',
  },
  songsTitle: {
    textAlign:'center',
    fontSize: fontSizes.lg,
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
  },
  artist: {
    textAlign:'center',
    fontSize: fontSizes.md,
    color: colors.textPrimary,
  },
  sideIcon: {
    flex: 1,
  },
  heartTouchable: {
    paddingLeft: spacing.md,
  },
  playerControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xl,
    paddingHorizontal: spacing.xl,
    paddingVertical:spacing.md,
  },
  innerIcons: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
});
