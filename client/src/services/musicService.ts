import { PlaylistSong } from '../types/PlayListSong';
import { Song } from '../types/Song';

const BASE_URL = 'http://localhost:3000'

const getUserName = () => sessionStorage.getItem('username');


const getSongs = async (): Promise<Song[]> => {
    const response = await fetch(`${BASE_URL}/songs/all`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
        },
    });
    const data = await response.json();
    return data;
};


const getPlaylist = async (): Promise<PlaylistSong[]> => {
    const response = await fetch(`${BASE_URL}/playlists/${getUserName()}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
        },
    });
    const data = await response.json();
    return data;
};

const addToPlaylist = async (newSongId: string): Promise<PlaylistSong[]> => {
    const response = await fetch(`${BASE_URL}/playlists`, {
        method: 'POST',
        body: JSON.stringify({ songId: newSongId, username: getUserName() }),
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            "Content-Type": "application/json"
        },
    });
    const data = await response.json();
    return data;
};

const removeFromPlaylist = async (songId: string): Promise<PlaylistSong> => {
    const response = await fetch(`${BASE_URL}/playlists/${getUserName()}/${songId}`, {
        method: 'DELETE',
        body: JSON.stringify({ songId: songId, username: getUserName() }),
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            "Content-Type": "application/json"
        },
    });
    const data = await response.json();
    return data;
};



export default { getSongs, getPlaylist, addToPlaylist, removeFromPlaylist };