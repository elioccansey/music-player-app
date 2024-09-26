
interface Song {
  id: number;
  title: string;
  releaseDate: string;
  url: string;
}

let songs = [
  { id: 1, title: 'Bad Romans', releaseDate: '2009/10/1', url: 'bad_romance.mp3' },
  { id: 2, title: 'Comfortably numb', releaseDate: '2004/1/2', url: 'comfortably_numb.mp3' },
  { id: 3, title: 'Gagnum style', releaseDate: '2012/10/12', url: 'gagnum_style.mp3' },
  { id: 4, title: 'In the end', releaseDate: '2013/10/12', url: 'in_the_end.mp3' },
  { id: 5, title: 'Last resort', releaseDate: '2013/10/12', url: 'last_resort.mp3' },
  { id: 6, title: 'Last ride with me', releaseDate: '2013/10/12', url: 'last_ride_with_me.mp3' },
  { id: 7, title: 'Mission impossible', releaseDate: '2013/10/12', url: 'mission_impossible.mp3' },
  { id: 8, title: 'Mocking bird', releaseDate: '2013/10/12', url: 'mocking_bird.mp3' },
  { id: 9, title: 'Single lady', releaseDate: '2013/10/12', url: 'single_lady.mp3' },
  { id: 10, title: 'Smooth criminal', releaseDate: '2013/10/12', url: 'smooth_criminal.mp3' },
];

export default class SongClass {
  constructor(
    public id: number,
    public title: string,
    public artist: string,
    public url: string
  ) { }

  static getAllSongs(): Song[] {
    return songs;
  }

  static getSongById(songId: number): Song {
    const song = songs.find(s => s.id === songId)
    if (!song) throw new Error("Song with not found with id : " + songId)
    return song;
  }
}
