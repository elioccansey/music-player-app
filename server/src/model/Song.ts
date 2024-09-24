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
    title: "Bad Romans",
    releaseDate: "2009/10/1",
    url: "../audio/bad_romance.mp3",
  },
  {
    id: 2,
    title: "Comfortably Numb",
    releaseDate: "2004/1/2",
    url: "../audio/comfortably_numb.mp3",
  },
  {
    id: 3,
    title: "Gagnum Style",
    releaseDate: "2012/10/12",
    url: "../audio/gagnum_style.mp3",
  },
  {
    id: 4,
    title: "In the End",
    releaseDate: "2013/10/12",
    url: "../audio/in_the_end.mp3",
  },
  {
    id: 5,
    title: "Last Resort",
    releaseDate: "2013/10/12",
    url: "../audio/last_resort.mp3",
  },
  {
    id: 6,
    title: "Last Ride With Me",
    releaseDate: "2013/10/12",
    url: "../audio/last_ride_with_me.mp3",
  },
  {
    id: 7,
    title: "Mission Impossible",
    releaseDate: "2013/10/12",
    url: "../audio/mission_impossible.mp3",
  },
  {
    id: 8,
    title: "Mocking Bird",
    releaseDate: "2013/10/12",
    url: "../audio/mocking_bird.mp3",
  },
  {
    id: 9,
    title: "Single Lady",
    releaseDate: "2013/10/12",
    url: "../audio/single_lady.mp3",
  },
  {
    id: 10,
    title: "Smooth Criminal",
    releaseDate: "2013/10/12",
    url: "../audio/smooth_criminal.mp3",
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
