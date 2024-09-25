import { Song } from '../types/Song';

const BASE_URL = 'http://localhost:3000'



const getSongs = async (): Promise<Song[]> => {
    const response = await fetch(`${BASE_URL}/songs/all`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
};



const getPlaylist = async (): Promise<Song[]> => {
    const response = await fetch(`${BASE_URL}/${sessionStorage.getItem('username')}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
        },
    });
    const data = await response.json();
    return data;
};







export default { getSongs,getPlaylist };