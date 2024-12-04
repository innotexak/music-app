import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { fontSizes, iconSizes, spacing } from '../constant/dimensions'
import { fontFamilies } from '../constant/fontFamilies'
import { colors } from '../constant/colors'

export const ForwardPlayIcon = ({size=iconSizes.lg}) => {
  return (
    <TouchableOpacity>
     <FeatherIcon name={"skip-forward"} size={size} style={styles.forwardControl}/>
    </TouchableOpacity>
  )
}

export const PlayAndPauseIcon = ({size=iconSizes.lg}) => {
    const isPlaying = true
    return (
      <TouchableOpacity>
       <FeatherIcon name={isPlaying ? 'pause' : 'play'}  size={size} style={styles.playControl}/>
      </TouchableOpacity>
    )
  }

  
  export const BackwardPlayIcon = ({size=iconSizes.lg}) => {
    return (
      <TouchableOpacity>
       <FeatherIcon name={"skip-back"} size={size} style={styles.backwardControl}/>
      </TouchableOpacity>
    )
  }
  




const styles = StyleSheet.create({
    backwardControl:{
        fontSize:fontSizes.xl,
        fontFamily:fontFamilies.bold,
        color:colors.textPrimary,
    },
    playControl:{
        fontSize:fontSizes.lg,
        fontFamily:fontFamilies.bold,
        color:colors.textPrimary,
        paddingHorizontal:spacing.xl,
    },
    forwardControl:{
        fontSize:fontSizes.xl,
        fontFamily:fontFamilies.bold,
        color:colors.textPrimary,
    }
})