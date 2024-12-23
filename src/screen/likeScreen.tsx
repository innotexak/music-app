/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, icons} from '../constant/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {fontSizes, spacing} from '../constant/dimensions';
import {fontFamilies} from '../constant/fontFamilies';
import FloatingPlayList from '../component/floatingPlayList';
import {useNavigation} from '@react-navigation/native';
import SongCard from '../component/songCard';
import {FlatList} from 'react-native-gesture-handler';
import useLikeSongs from '../store/zustant';
import { handlePlayTrack } from '../utils/helpts';

const LikeScreen = () => {
  const navigation = useNavigation();
  const {likedSongs} = useLikeSongs();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            color={icons.iconSecondary}
            size={spacing.lg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Fontisto
            name="equalizer"
            color={icons.iconSecondary}
            size={spacing.lg}
            style={{transform: [{rotate: '90deg'}]}}
          />
        </TouchableOpacity>
      </View>

      {/* <FlatList
        data={likedSongs}
        renderItem={({item}) => <SongCard item={item} handlePlay={()=>handlePlayTrack(item)}/>}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{paddingHorizontal: spacing.md}}
      /> */}
      <FloatingPlayList />
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  likeText: {
    fontFamily: fontFamilies.bold,
    color: colors.textPrimary,
    fontSize: fontSizes.xl,
    paddingBottom: spacing.md,
  },
});
