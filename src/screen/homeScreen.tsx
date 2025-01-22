
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, useWindowDimensions, SafeAreaView, ActivityIndicator, Text } from 'react-native';
import { colors } from '../constant/colors';
import AppHeader from '../component/header';
import FloatingPlayList from '../component/floatingPlayList';
import { songsList as SongData } from '../data/songsList'; 
import { GapSpacing } from '../component/songListing';
import SongListWithCategory from '../component/songListWithCategory';
import { spacing } from '../constant/dimensions';
import { tabletContainer } from '../utils/helpts';
import { API_CALL } from '../utils/axiosInstance';
import LoadingComponent from '../component/loadingComponent';

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const isTablet = width > 600;

  const [songs, setSongs] = useState<any>([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await API_CALL().get('/musics');
        if (response.data && response.data.length > 0) {
          setSongs(response.data); // Use API data if available
        } else {

          setSongs(SongData); // Fallback to local data
        }
      } catch (error:any) {
        console.error('Error fetching songs:', error.message);
        setSongs(SongData); // Fallback to local data in case of error
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchSongs();
  }, []);

  // While loading, show a loading indicator
  if (loading) {
    return <LoadingComponent/>
  }

  // Filter songs if data is available
  const formattedSongs = songs
    ? songs.filter(item => item.category.toLowerCase() !== 'liked songs')
    : []; // Fallback to an empty array if songs is null

  return (
    <SafeAreaView style={[styles.container, isTablet && tabletContainer as unknown as {}]}> 
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
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});


