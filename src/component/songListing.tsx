import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import SongCard from './songCard';
import { spacing } from '../constant/dimensions';

const SongList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={SongCard}
        horizontal={true}
        ItemSeparatorComponent={GapSpacing}
         contentContainerStyle={{paddingHorizontal:spacing.md}}
      />
    </View>
  );
};

export default SongList;



export  function  GapSpacing() {
  return (
    <View style ={{ marginHorizontal:spacing.sm}} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:spacing.sm
  },
});
