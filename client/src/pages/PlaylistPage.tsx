import React, { useEffect, useState } from "react";
import musicService from "../services/musicService";
import { Song } from "../types/Song";
import PlayerControls from "../components/music/PlayerControls";
import { PlaylistSong } from "../types/PlayListSong";

const PlaylistPage: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [playlist, setPlaylist] = useState<PlaylistSong[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const fetchedSongs = await musicService.getSongs();
      setSongs(fetchedSongs);
    };
    fetchSongs();
  }, []);

  useEffect(() => {
    const fetchSongsFromPlaylist = async () => {
      const fetchedSongsFromPlaylist = await musicService.getPlaylist();
      setPlaylist(fetchedSongsFromPlaylist);
    };
    fetchSongsFromPlaylist();
  }, []);

  const addToPlaylist = async (songId: string) => {
    if (playlist.some(so => so.songId === songId)) {
      alert("Already in playlist");
      return;
    }
    const newPlaylist = await musicService.addToPlaylist(songId)
    setPlaylist(newPlaylist);
  };

  const removeFromPlaylist = async (songId: string) => {
    const removedsong = await musicService.removeFromPlaylist(songId)
    setPlaylist(prevPlaylist => [...prevPlaylist.filter(p => p.songId !== removedsong.songId)])
  };

  return (
    <div>
      <div>
        <h2>Songs you may be interested in</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              songs.map(song => (
                <tr key={song.id}>
                  <th scope="row">{song.id} </th>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>
                    <button onClick={() => addToPlaylist(song.id)}>Add to playlist</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <div>
        <h2>Your playlist</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              playlist.map(s => {
                const song = songs.find(so => so.id === s.songId)
                return (
                  song && <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>
                      <button onClick={() => removeFromPlaylist(song.id)}>Remove from playlist</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>


      <h2>Your Playlist</h2>
      <PlayerControls
        playlist={songs.filter(s => playlist.some(p => p.songId === s.id))}
        removeFromPlaylist={removeFromPlaylist}
      />

    </div>
  );
};

export default PlaylistPage;
