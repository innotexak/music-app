import {TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {icons} from '../constant/colors';
import {spacing} from '../constant/dimensions';
import {useTrackPlayerRepeatMode} from '../hook/playerRepeatMode';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';

export const RepeatComponent = () => {
  const {repeatMode, changeRepeatMode} = useTrackPlayerRepeatMode();


  const repeatOrder = [RepeatMode.Off, RepeatMode.Track, RepeatMode.Queue];
  const toggleRepeatMode = () => {
    if (repeatMode== null) {
      return;
    }

    const currentIndex = repeatOrder.indexOf(repeatMode);
    const nextIndex = (currentIndex + 1) % repeatOrder.length;
    changeRepeatMode(nextIndex);
  };

  let repeatIcon = 'repeat'; 
  switch (repeatMode) {
    case RepeatMode.Off:
      repeatIcon = 'repeat-off';
      break;
    case RepeatMode.Queue:
      repeatIcon = 'repeat';
      break;
    case RepeatMode.Track:
      repeatIcon = 'repeat-once';
      break;
  }
  return (
    <TouchableOpacity onPress={toggleRepeatMode}>
      <MaterialCommunityIcons name={repeatIcon} color={icons.iconSecondary} size={spacing.xl} />
    </TouchableOpacity>
  );
};

export const ShuffleComponent = () => {

  let isShuffle= false
  const handleShuffle = async ()=>{
    const currentQueue = await TrackPlayer.getQueue();
    await TrackPlayer.reset()
    currentQueue.sort(()=>Math.random() * 0.5)
    await TrackPlayer.add(currentQueue)
    await TrackPlayer.play()
  }

  return (
    <TouchableOpacity onPress={handleShuffle}>
      <MaterialCommunityIcons name={isShuffle ? "shuffle-off":"shuffle"} color={icons.iconSecondary} size={spacing.xl} />
    </TouchableOpacity>
  );
};
