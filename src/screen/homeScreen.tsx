/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../constant/colors';
import AppHeader from '../component/header';
import FloatingPlayList from '../component/floatingPlayList';
import { songsList as SongData } from '../data/songsList'; 
import  { GapSpacing } from '../component/songListing';
import SongListWithCategory from '../component/songListWithCategory';
import { spacing } from '../constant/dimensions';
import LoginComponent from './login'

const HomeScreen = () => {
  const [user, setUser] = useState<Record<string, any> | null>(null)

  if(!user){
    return <LoginComponent/>
  }

  const formattedSongs = SongData.filter(item=>item.category.toLowerCase() !== 'liked songs')
  return (
    <View style={styles.container}>
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
