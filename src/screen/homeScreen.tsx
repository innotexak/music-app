import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constant/colors';
import AppHeader from '../component/header';
import { iconSizes } from '../constant/dimentions';
import { fontFamilies } from '../constant/fontFamilies';

import SongList from '../component/songListing';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader/>
      <Text style={styles.headerText}>Recommended for you</Text>
      <SongList/>
      {/* <FlatList data={[1,2,3]} renderItem={SongList} horizontal={false}/> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background,
    color:colors.textPrimary,
  },

  headerText:{
    color:colors.textPrimary,
    fontFamily:fontFamilies.bold,
    fontSize:iconSizes.xl,
    // paddingHorizontal:spacing.xl

  }
});
