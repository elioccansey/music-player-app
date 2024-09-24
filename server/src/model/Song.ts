// Define the Song interface
interface Song {
  id: number;
  title: string;
  releaseDate: string;
  url: string;
}

// Define the songs array with proper typing
let songs: Song[] = [
  {
    id: 1,
    title: "As It Was",
    releaseDate: "2022/04/01",
    url: "../audio/as_it_was.mp3",
  },
  {
    id: 2,
    title: "Heat Waves",
    releaseDate: "2020/06/29",
    url: "../audio/heat_waves.mp3",
  },
  {
    id: 3,
    title: "Stay",
    releaseDate: "2021/07/09",
    url: "../audio/stay.mp3",
  },
  {
    id: 4,
    title: "Levitating",
    releaseDate: "2020/10/01",
    url: "../audio/levitating.mp3",
  },
  {
    id: 5,
    title: "Blinding Lights",
    releaseDate: "2020/11/29",
    url: "../audio/blinding_lights.mp3",
  },
  {
    id: 6,
    title: "Shivers",
    releaseDate: "2021/09/10",
    url: "../audio/shivers.mp3",
  },
  {
    id: 7,
    title: "Save Your Tears",
    releaseDate: "2021/01/05",
    url: "../audio/save_your_tears.mp3",
  },
  {
    id: 8,
    title: "Easy On Me",
    releaseDate: "2021/10/15",
    url: "../audio/easy_on_me.mp3",
  },
  {
    id: 9,
    title: "About Damn Time",
    releaseDate: "2022/04/14",
    url: "../audio/about_damn_time.mp3",
  },
  {
    id: 10,
    title: "Bad Habits",
    releaseDate: "2021/06/25",
    url: "../audio/bad_habits.mp3",
  },
];


// Define the Song class with types
export default class SongClass {
  constructor(
    public id: number,
    public title: string,
    public artist: string,
    public url: string
  ) {}

  // Static method to get all songs
  static getAllSongs(): Song[] {
    return songs;
  }
}
