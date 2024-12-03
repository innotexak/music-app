import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import SongCard from './songCard';
import { spacing } from '../constant/dimentions';

const SongList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={SongCard}
        horizontal={true}
        ItemSeparatorComponent={<View style ={{ marginHorizontal:spacing.xs}} />}
      />
    </View>
  );
};

export default SongList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
