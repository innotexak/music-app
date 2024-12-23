import TrackPlayer from "react-native-track-player"
import { Song } from "../component/type"
import { songsList } from "../data/songsList"

export const formattedSecondsToMinutes = (seconds:number)=> {

    const minutes = Math.floor(seconds / 60 )
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}: ${formattedSeconds}`
}

 export const handlePlayTrack = async (selectedTract: Song, songs:Song[]  ) => {
    const trackIndex = songs.findIndex(
      value => value.url === selectedTract.url,
    );

    if (trackIndex === -1) {
      return;
    }

    const beforeTracks = songs.slice(0, trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);


    await TrackPlayer.reset();

    await TrackPlayer.add(selectedTract);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);
    await TrackPlayer.play(); 
  };

export const isSongExist = (songs:Song[], track:Song)=>{
return songs.some((song)=>song.url === track.url)
}