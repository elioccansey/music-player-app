import React, { useEffect, useState } from "react";
import musicService from "../services/musicService";
import { Song } from "../types/Song";
import PlayerControls from "../components/music/PlayerControls";

const PlaylistPage: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [playlist, setPlaylist] = useState<Song[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const fetchedSongs = await musicService.getSongs();
      setSongs(fetchedSongs);
    };
    fetchSongs();
  }, []);

  const addToPlaylist = (song: Song) => {
    setPlaylist([...playlist, song]);
  };

  const removeFromPlaylist = (songId: string) => {
    setPlaylist(playlist.filter((song) => song.id !== songId));
  };

  return (
    <div>
      <h2>Your Playlist</h2>
      <PlayerControls
        playlist={playlist}
        removeFromPlaylist={removeFromPlaylist}
      />
      {songs.map((song) => (
        <div key={song.id}>
          <p>{song.title}</p>
          {/* Optional: You can also add controls to remove or play the song */}
          <button onClick={() => removeFromPlaylist(song.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default PlaylistPage;
