import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { fontSizes, iconSizes, spacing } from '../constant/dimensions'
import { fontFamilies } from '../constant/fontFamilies'
import { colors } from '../constant/colors'
import TrackPlayer, { useIsPlaying } from 'react-native-track-player'

export const ForwardPlayIcon = ({size=iconSizes.lg}) => {
  const handleForwardward = ()=>{
    TrackPlayer.skipToNext()
  }
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={handleForwardward}>
     <FontAwesome5 name={"forward"} size={size} style={styles.forwardControl}/>
    </TouchableOpacity>
  )
}

export const PlayAndPauseIcon = ({size=iconSizes.lg}) => {

  const {playing} = useIsPlaying()
  const handleTogglePlay= ()=>{
    playing ? TrackPlayer.pause() : TrackPlayer.play()
  }

    return (
      <TouchableOpacity activeOpacity={0.85} onPress={handleTogglePlay}>
       <FontAwesome5 name={playing ? 'pause' : 'play'}  size={size} style={styles.playControl}/>
      </TouchableOpacity>
    )
  }

  
  export const BackwardPlayIcon = ({size=iconSizes.lg}) => {
    const handleBackward = ()=>{
      TrackPlayer.skipToPrevious()
    }
    return (
      <TouchableOpacity activeOpacity={0.85} onPress={handleBackward}>
       <FontAwesome5 name={"backward"} size={size} style={styles.backwardControl}/>
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