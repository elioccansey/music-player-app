import React, { useRef, useState } from 'react';
import { Song } from '../../types/Song';

interface PlayerControlsProps {
    playlist: Song[];
    removeFromPlaylist: (songId: string) => Promise<void>;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({ playlist, removeFromPlaylist }) => {
    const [currentSong, setCurrentSong] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlay = () => {

        console.log(playlist[currentSong].url);
        // console.log(playlist[currentSong].url);
        // if (audioRef.current) {
        //     audioRef.current.src = playlist[currentSong].url; // Assuming each song has an audioUrl property

        //     audioRef.current.play().catch(error => {
        //         console.error('Error playing the song:', error);
        //     });
        // }
    };

    const handlePause = () => {
        // logic to pause the song
    };

    const handleNext = () => {
        setCurrentSong((prev) => (prev + 1) % playlist.length);
    };

    const handlePrev = () => {
        setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);
    };

    return (
        <div>
            <h3>Now Playing: {playlist[currentSong]?.title || "No song selected"}</h3>
            {/* <audio ref={audioRef} src={`http://localhost:3000/audio/${playlist[currentSong].url}`} /> */}
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default PlayerControls;