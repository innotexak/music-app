/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, icons} from '../constant/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {fontSizes, spacing} from '../constant/dimensions';
import {fontFamilies} from '../constant/fontFamilies';
import SongCard from '../component/songCard';
import FloatingPlayList from '../component/floatingPlayList';
import { songsList } from '../data/songsList';

const LikeScreen = (props) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            color={icons.iconSecondary}
            size={spacing.lg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Fontisto
            name="equalizer"
            color={icons.iconSecondary}
            size={spacing.lg}
            style={{transform: [{rotate: '90deg'}]}}
          />
        </TouchableOpacity>
      </View>

  
      <FlatList
      ListHeaderComponent={
        <Text style={styles.likeText}>Liked Songs</Text>
      }
        data={songsList[0].songs}
        renderItem={({item}:any) => (
          <SongCard
            item={item}
            containerStyle={{width: '55%'}}
            imageStyle={{width: 160, height: 160}}
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 200,
          paddingHorizontal: spacing.lg,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
      <FloatingPlayList/>
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  likeText: {
    fontFamily: fontFamilies.bold,
    color: colors.textPrimary,
    fontSize: fontSizes.xl,
    paddingBottom: spacing.md,
  },
});
