import {TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { icons } from '../constant/colors'
import { spacing } from '../constant/dimensions'

export const RepeatComponent = () => {
  return (
    <TouchableOpacity >
    <Feather
      name="repeat"
      color={icons.iconSecondary}
      size={spacing.lg}
    />
  </TouchableOpacity>
  )
}


export const ShuffleComponent = () => {
    return (
        <TouchableOpacity >
        <Feather
          name="shuffle"
          color={icons.iconSecondary}
          size={spacing.lg}
        />
      </TouchableOpacity>
    )
  }


