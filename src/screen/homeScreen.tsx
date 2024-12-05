/* eslint-disable react-native/no-inline-styles */
import { FlatList, View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../constant/colors';
import AppHeader from '../component/header';
import SongListWithCategory from '../component/songListWithCategory';
import FloatingPlayList from '../component/floatingPlayList';


const HomeScreen =() => {
  return (
    <View style={styles.container}>
      <AppHeader/>
      <FlatList data={[1,2,3,4]} renderItem={SongListWithCategory} contentContainerStyle={{paddingBottom:200}}/>
      <FloatingPlayList/>
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

});
