export interface ISong{
  title:string
  artist:string
  artwork:string
  url:string
}

export const songsList = [
  {
    category: 'Recommended for You',
    songs: [
      {
        title: 'Strobe',
        artist: 'NIVIRO',
        artwork:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/813/325x325/strobe-1733446856-PCrTkLuaWv.png",       
        url: 'https://bunervqfocwpzerpzmip.supabase.co/storage/v1/object/public/musics/NIVIRO-Strobe.mp3?t=2024-12-09T14%3A04%3A20.229Z',
      },
      {
        title: 'Your Burn',
        artist: 'vxcelm, ANIZYZ',
        artwork:"https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/805/325x325/your-burn-1731978054-rhCAZVNaIC.png",       
        url: 'https://bunervqfocwpzerpzmip.supabase.co/storage/v1/object/public/musics/Your_burn.mp3?t=2024-12-09T14%3A11%3A32.002Z',
      },
    ],
  },
  {
    category: 'Popular Music',
    songs: [
      {
        title: 'Crowded Room',
        artist: 'Josh Rubin',
        artwork: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/802/325x325/crowded-room-1731373256-PmYUDXScqk.jpg',
        url: 'https://bunervqfocwpzerpzmip.supabase.co/storage/v1/object/public/musics/Josh%20Rubin%20-%20Crowded-Room.mp3?t=2024-12-09T14%3A11%3A12.626Z',
      },
    ],
  },
  {
    category: 'Liked Songs',
    songs: [
      {
        title: 'Crowded Room',
        artist: 'Josh Rubin',
        artwork: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/802/325x325/crowded-room-1731373256-PmYUDXScqk.jpg',
        url: 'https://bunervqfocwpzerpzmip.supabase.co/storage/v1/object/public/musics/Josh%20Rubin%20-%20Crowded-Room.mp3?t=2024-12-09T14%3A11%3A12.626Z',
      },
    ],
  },
];
