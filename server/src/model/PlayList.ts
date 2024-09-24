import Song from "./Song";

interface Playlist {
  songId: number;
  username: string;
}

// Define the playlists array with proper typing
let playlists: Playlist[] = [
  { songId: 3, username: "nahom" },
  { songId: 4, username: "nahom" },
  { songId: 1, username: "nahom" },
  { songId: 2, username: "nahom" },

  { songId: 2, username: "henok" },
  { songId: 4, username: "henok" },
  { songId: 5, username: "henok" },
];

export class PlayList {
  constructor(public username: string, public songId: number) {}

  static getPlayList(username: string): Playlist[] {
    return playlists.filter((a) => a.username === username);
  }

  static getPlayListDetails(username: string) {
    const songs = Song.getAllSongs();

    return this.getPlayList(username).map((m) => {
      const song = songs.find((a) => a.id === Number(m.songId));
      if (!song) {
        throw new Error(`No Song with Id: ${m.songId} Found`);
      }
      return {
        username: m.username,
        songId: m.songId,
        title: song.title,
        url: song.url,
      };
    });
  }

  static addToPlayList(username: string, songId: number) {
    const song = Song.getAllSongs().find((a) => a.id === songId);
    if (!song) {
      throw new Error("Song does not exist");
    }

    const userPlaylist = this.getPlayList(username);
    const songIndex = userPlaylist.findIndex((a) => a.songId === songId);

    if (songIndex < 0) {
      playlists.push({ songId, username });
      return this.getPlayListDetails(username);
    } else {
      throw new Error("Song already exists!!!");
    }
  }

  static removeFromPlaylist(username: string, songId: number): Playlist {
    const index = playlists.findIndex(
      (a) => a.username === username && a.songId === songId
    );

    if (index >= 0) {
      const removedSong = playlists[index];
      playlists.splice(index, 1);
      return removedSong;
    } else {
      throw new Error("Invalid song id...!!!");
    }
  }
}
