import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { spacing, fontSizes } from '../constant/dimensions'
import { colors } from '../constant/colors'
import { fontFamilies } from '../constant/fontFamilies'

const uri = "https://media.istockphoto.com/id/1187582529/photo/staying-connected-in-this-digital-age.jpg?s=1024x1024&w=is&k=20&c=OwI7ikMOD_IQYn0XDRAutdzh7xRPEi5q41wY4ez1Oe0="

interface ISongProps{
  containerStyle:Record<string, any>
  imageStyle:Record<string, any>
}
const SongCard:FC<ISongProps> = ({containerStyle, imageStyle}) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
      <Image source={{uri}} style={[styles.imageStyle,imageStyle ]} />
     <View style={styles.cardText}>
      <Text style={styles.songsTitle} numberOfLines={1}>Amazing grace</Text>
      <Text style={styles.artist}>John Newton </Text>
     </View>
    </TouchableOpacity>
  )
}

export default SongCard

const styles = StyleSheet.create({

  container:{
    height:280,
    width:200,
    borderStyle:'solid',
    borderRadius:10,
  },
  imageStyle:{
    width:200,
    height:220,
    borderRadius:10,
  },
  cardText:{
    textAlign:'center',
    padding:spacing.md,

  },
  songsTitle:{
    textAlign:'center',
    fontSize:fontSizes.lg,
    color:colors.textPrimary,
    fontFamily:fontFamilies.bold,

  },
  artist:{
    textAlign:'center',
    fontSize:fontSizes.md,
    color:colors.textPrimary,
  }
})