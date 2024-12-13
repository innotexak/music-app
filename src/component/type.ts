export interface Song {
    title: string;
    artist: string;
    artwork: string;
    url: string;
  }
  
  export interface SongListProps {
    data: {
      category: string;
      songs: Song[];
    }[];  
  }

    
  export interface SongListWithCategoryProps {
    item: {
      category: string;
      songs: Song[];
    }
  }