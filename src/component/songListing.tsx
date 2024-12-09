import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { spacing } from '../constant/dimensions';
import SongListWithCategory from './songListWithCategory';

interface Song {
  title: string;
  artist: string;
  artwork: string;
  url: string;
}

interface SongListProps {
  data: {
    category: string;
    songs: Song[];
  }[];  
}

const SongList = ({ data }: SongListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data} 
        renderItem={({ item }) => <SongListWithCategory item={item} />}
        ItemSeparatorComponent={GapSpacing}
        keyExtractor={(item, index) => index.toString()} 
        contentContainerStyle={{ paddingHorizontal: spacing.md }}
      />
    </View>
  );
};

export default SongList;

export function GapSpacing() {
  return <View style={{ marginHorizontal: spacing.sm }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.sm,
  },
});
