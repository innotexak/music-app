import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../constant/colors';
import { fontFamilies } from '../constant/fontFamilies';
import { iconSizes, spacing } from '../constant/dimensions';

import { ISong } from '../data/songsList'; 
import SongCard from './songCard';

const SongListWithCategory = ({ item }) => {
  const handlePlayTrack = async (item: ISong, songs: ISong[]) => {
    console.log({ item, songs });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{item.category}</Text>
      <FlatList
        data={item.songs}
        renderItem={({ item }: any) => (
          <SongCard
            item={item}
            handlePlay={(selectedTrack: ISong) => {
              handlePlayTrack(selectedTrack, item.songs);
            }}
          />
        )}
        keyExtractor={(song) => song.url}
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
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
});
