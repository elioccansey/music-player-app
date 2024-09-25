import React, { useState } from 'react';
import { Song } from '../../types/Song';

interface PlayerControlsProps {
    playlist: Song[];
    removeFromPlaylist: (id: string) => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({ playlist, removeFromPlaylist }) => {
    const [currentSong, setCurrentSong] = useState<number>(0);

    const handlePlay = () => {
        // logic to play the song
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
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default PlayerControls;