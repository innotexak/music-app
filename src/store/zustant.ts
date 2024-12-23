import { create } from "zustand";
import { Song } from "../component/type";
import { isSongExist } from "../utils/helpts";

interface IState{
likedSongs:Song[];
addToLikeSong:(song:Song)=>void;
}
const useLikeSongs:any = create((set)=>({
    likedSongs:[],
    addToLikeSong:(newSong:Song)=>{
        set((state:IState)=>{
            const songExist = isSongExist(state.likedSongs, newSong);
           if(!songExist){
            return {
                likedSongs:[newSong, ...state.likedSongs],
            };
           }
           const songRemoved = state.likedSongs.filter(song=>song.url !== newSong.url)
           
           return state.likedSongs = songRemoved;
        });
    }
}));

export default useLikeSongs