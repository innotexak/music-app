import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/colors'
import { fontFamilies } from '../constant/fontFamilies'
import { iconSizes, spacing } from '../constant/dimensions'
import SongList from './songListing'

const SongListWithCategory = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Recommended for you</Text>
        <SongList/>
    </View>
  )
}

export default SongListWithCategory

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerText:{
        color:colors.textPrimary,
        fontFamily:fontFamilies.bold,
        fontSize:iconSizes.xl,
        paddingHorizontal:spacing.xl,
        paddingVertical:spacing.md,
      }
})