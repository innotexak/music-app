import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../constant/colors';
import {fontFamilies} from '../constant/fontFamilies';
import {iconSizes, spacing} from '../constant/dimensions';
import SongCard from './songCard';
import {Song, SongListWithCategoryProps} from './type';
import TrackPlayer from 'react-native-track-player';


const SongListWithCategory: FC<SongListWithCategoryProps> = ({item}) => {

  const handlePlayTrack = async (selectedTract: Song, songs:Song[]=item.songs ) => {
    const trackIndex = songs.findIndex(
      value => value.url === selectedTract.url,
    );

    if (trackIndex === -1) {
      return;
    }

    const beforeTracks = songs.slice(0, trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);


    await TrackPlayer.reset();

    await TrackPlayer.add(selectedTract);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);
    const queen = await TrackPlayer.getQueue()
    console.log({queen})
    await TrackPlayer.play(); 
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{item.category}</Text>
      <FlatList
        data={item.songs}
        renderItem={({item}:any) => (
          <SongCard
            item={item}
            handlePlay={(selectedTrack: Song) => {
              console.log(selectedTrack)
              handlePlayTrack(selectedTrack, item);
            }}
          />
        )}
        horizontal={true}
        keyExtractor={song => song.url}
        contentContainerStyle={styles.gap}
      />
    </View>
  );
};

export default SongListWithCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
    fontSize: iconSizes.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  gap:{
    gap:spacing.xl
  }
});
