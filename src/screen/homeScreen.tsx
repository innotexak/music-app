/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, FlatList, useWindowDimensions, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../constant/colors';
import AppHeader from '../component/header';
import FloatingPlayList from '../component/floatingPlayList';
import { songsList as SongData } from '../data/songsList'; 
import  { GapSpacing } from '../component/songListing';
import SongListWithCategory from '../component/songListWithCategory';
import { spacing } from '../constant/dimensions';
import { tabletContainer } from '../utils/helpts';


const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const isTablet = width > 600;

  const formattedSongs = SongData.filter(item=>item.category.toLowerCase() !== 'liked songs')
  return (<SafeAreaView style={[styles.container, isTablet && tabletContainer as unknown as {}]}> 
    <View style={styles.container} >
      <AppHeader />
      <FlatList
        data={formattedSongs} 
        renderItem={({ item }) => <SongListWithCategory item={item} />}
        ItemSeparatorComponent={GapSpacing}
        keyExtractor={(item, index) => index.toString()} 
        contentContainerStyle={{ paddingHorizontal: spacing.md }}
      />
      <FloatingPlayList />
    </View>
    </SafeAreaView>
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
