import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { spacing, fontSizes } from '../constant/dimentions'
import { colors } from '../constant/colors'
import { fontFamilies } from '../constant/fontFamilies'

const uri = "https://media.istockphoto.com/id/1187582529/photo/staying-connected-in-this-digital-age.jpg?s=1024x1024&w=is&k=20&c=OwI7ikMOD_IQYn0XDRAutdzh7xRPEi5q41wY4ez1Oe0="
const SongCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri}} style={styles.imageStyle} />
     <View style={styles.cardText}>
      <Text style={styles.songsTitle}>Amazing grace</Text>
      <Text style={styles.artist}>John Newton </Text>
     </View>
    </TouchableOpacity>
  )
}

export default SongCard

const styles = StyleSheet.create({

  container:{
    height:250,
    width:300,
    paddingHorizontal:spacing.xl,
    paddingVertical:spacing.md,
  },
  imageStyle:{
    width:250,
    height:250,
    borderRadius:10,
  },
  cardText:{
    width:'100%',
    textAlign:'center',
  },
  songsTitle:{
    fontSize:fontSizes.xl,
    color:colors.textPrimary,
    fontFamily:fontFamilies.bold,
    textAlign:'center',
    paddingVertical:spacing.xs,
  },
  artist:{
    textAlign:'center',
    fontSize:fontSizes.sm,
    color:colors.textPrimary,
  }
})