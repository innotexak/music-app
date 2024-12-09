/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../constant/colors';
import AppHeader from '../component/header';
import FloatingPlayList from '../component/floatingPlayList';
import { songsList as SongData } from '../data/songsList'; 
import SongList from '../component/songListing';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <SongList data={SongData} />
      <FloatingPlayList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    color: colors.textPrimary,
  },
});
