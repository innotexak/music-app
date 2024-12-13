import TrackPlayer, { Event } from "react-native-track-player";

module.exports = async function () {
 TrackPlayer.addEventListener(Event.RemotePause, ()=>{
  TrackPlayer.pause()
 })

 
 TrackPlayer.addEventListener(Event.RemotePlay, ()=>{
  TrackPlayer.play()
 })

 TrackPlayer.addEventListener(Event.RemotePrevious, ()=>{
  TrackPlayer.skipToPrevious()
 })

 TrackPlayer.addEventListener(Event.RemoteNext, ()=>{
  TrackPlayer.skipToNext()
 })
};

 


// "react-native": "^0.76.5",
// "react-native-awesome-slider": "^2.5.6",