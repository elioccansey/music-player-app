import React, { useEffect, useState, CSSProperties } from "react";
import musicService from "../services/musicService";
import { Song } from "../types/Song";
import PlayerControls from "../components/music/PlayerControls";
import { PlaylistSong } from "../types/PlayListSong";
import LogoutButton from "../components/LogoutButton";

const PlaylistPage: React.FC<{ isAuthenticated: any }> = ({ isAuthenticated }: { isAuthenticated: any }) => {
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
    const newPlaylist = await musicService.addToPlaylist(songId);
    setPlaylist(newPlaylist);
  };

  const removeFromPlaylist = async (songId: string) => {
    const removedSong = await musicService.removeFromPlaylist(songId);
    setPlaylist(prevPlaylist =>
      prevPlaylist.filter(p => p.songId !== removedSong.songId)
    );
  };

  // Inline styles
  const styles: { [key: string]: CSSProperties } = {
    container: {
      padding: '20px',
      backgroundColor: '#282c34',
      color: 'white',
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    th: {
      backgroundColor: '#61dafb',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ccc',
      textAlign: 'left',
    },
    button: {
      backgroundColor: '#61dafb',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 10px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h2>Songs you may be interested in</h2>
        {isAuthenticated && <LogoutButton />}
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th scope="col" style={styles.th}>Id</th>
            <th scope="col" style={styles.th}>Title</th>
            <th scope="col" style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(song => (
            <tr key={song.id}>
              <td style={styles.td}>{song.id}</td>
              <td style={styles.td}>{song.title}</td>
              <td style={styles.td}>
                <button style={styles.button} onClick={() => addToPlaylist(song.id)}>
                  Add to playlist
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Your Playlist</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th scope="col" style={styles.th}>#</th>
            <th scope="col" style={styles.th}>Title</th>
            <th scope="col" style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((s, i) => {
            const song = songs.find(so => so.id === s.songId);
            return (
              song && (
                <tr key={song.id}>
                  <td style={styles.td}>{i + 1}</td>
                  <td style={styles.td}>{song.title}</td>
                  <td style={styles.td}>
                    <button style={styles.button} onClick={() => removeFromPlaylist(song.id)}>
                      Remove from playlist
                    </button>
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>

      <h2>Your Playlist</h2>
      <PlayerControls
        playlist={songs.filter(s => playlist.some(p => p.songId === s.id))}
        removeFromPlaylist={removeFromPlaylist}
      />
    </div>
  );
};

export default PlaylistPage;
