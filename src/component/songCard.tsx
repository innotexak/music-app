import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { spacing, fontSizes } from '../constant/dimensions'
import { colors } from '../constant/colors'
import { fontFamilies } from '../constant/fontFamilies'

interface ISongProps {
  containerStyle?: Record<string, any>
  imageStyle?: Record<string, any>
  item:{  
    artwork: string
    title: string
  artist: string
  url: string},
  handlePlay?:(item: any)=>void
}

const SongCard: FC<ISongProps> = ({item, containerStyle, imageStyle, handlePlay}, ) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={()=>handlePlay(item)}>
      <Image source={{ uri: item.artwork }} style={[styles.imageStyle, imageStyle]} />
      <View style={styles.cardText}>
        <Text style={styles.songsTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.artist}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SongCard

const styles = StyleSheet.create({
  container: {
    height: 280,
    width: 200,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  imageStyle: {
    width: 200,
    height: 220,
    borderRadius: 10,
  },
  cardText: {
    textAlign: 'center',
    padding: spacing.md,
  },
  songsTitle: {
    textAlign: 'center',
    fontSize: fontSizes.lg,
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
  },
  artist: {
    textAlign: 'center',
    fontSize: fontSizes.md,
    color: colors.textPrimary,
  },
})
