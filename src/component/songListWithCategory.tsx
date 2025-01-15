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
    console.log(trackIndex, "Index");
    console.log("selected", selectedTract);
    console.log('items', item.songs);
    if (trackIndex === -1) {
      return;
    }

    const beforeTracks = songs.slice(0, trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);


    await TrackPlayer.reset();
console.log("Logged and referesh")
    await TrackPlayer.add(selectedTract);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);
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
              handlePlayTrack(selectedTrack, item.songs);
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
