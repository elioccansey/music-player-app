// import React, { useRef, useState, useEffect, CSSProperties } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faPause, faStepBackward, faStepForward, faShuffle } from '@fortawesome/free-solid-svg-icons';
// import { Song } from '../../types/Song';

// interface PlayerControlsProps {
//     playlist: Song[];
//     removeFromPlaylist: (songId: string) => Promise<void>;
// }

// const AUDIO_BASE_URL = "http://localhost:3000/audio";

// const PlayerControls: React.FC<PlayerControlsProps> = ({ playlist, removeFromPlaylist }) => {
//     const [currentSong, setCurrentSong] = useState<number>(0);
//     const [isPlaying, setIsPlaying] = useState<boolean>(false);
//     const [duration, setDuration] = useState<number>(0);
//     const [currentTime, setCurrentTime] = useState<number>(0);
//     const [shuffledPlaylist, setShuffledPlaylist] = useState<Song[]>(playlist);
//     const audioRef = useRef<HTMLAudioElement | null>(null);

//     useEffect(() => {
//         if (audioRef.current) {
//             const updateDuration = () => {
//                 if (audioRef.current) {
//                     setDuration(audioRef.current.duration);
//                 }
//             };

//             const updateCurrentTime = () => {
//                 if (audioRef.current) {
//                     setCurrentTime(audioRef.current.currentTime);
//                 }
//             };

//             audioRef.current.addEventListener('loadedmetadata', updateDuration);
//             audioRef.current.addEventListener('timeupdate', updateCurrentTime);

//             return () => {
//                 audioRef.current?.removeEventListener('loadedmetadata', updateDuration);
//                 audioRef.current?.removeEventListener('timeupdate', updateCurrentTime);
//             };
//         }
//     }, [audioRef]);

//     useEffect(() => {
//         setShuffledPlaylist(playlist); // Reset shuffled playlist when the original playlist changes
//     }, [playlist]);

//     const handlePlay = () => {
//         if (audioRef.current) {
//             if (audioRef.current.src !== `${AUDIO_BASE_URL}/${shuffledPlaylist[currentSong].id}`) {
//                 audioRef.current.src = `${AUDIO_BASE_URL}/${shuffledPlaylist[currentSong].id}`;
//                 audioRef.current.play().then(() => {
//                     setIsPlaying(true);
//                 }).catch(error => {
//                     console.error('Error playing the song:', error);
//                 });
//             } else {
//                 audioRef.current.play().then(() => {
//                     setIsPlaying(true);
//                 }).catch(error => {
//                     console.error('Error playing the song:', error);
//                 });
//             }
//         }
//     };

//     const handlePause = () => {
//         if (audioRef.current) {
//             audioRef.current.pause();
//             setIsPlaying(false);
//         }
//     };

//     const handleNext = () => {
//         setCurrentSong((prev) => (prev + 1) % shuffledPlaylist.length);
//         handlePlay();
//     };

//     const handlePrev = () => {
//         setCurrentSong((prev) => (prev - 1 + shuffledPlaylist.length) % shuffledPlaylist.length);
//         handlePlay();
//     };

//     const handleShuffle = () => {
//         const shuffled = [...playlist].sort(() => Math.random() - 0.5);
//         setShuffledPlaylist(shuffled);
//         setCurrentSong(0); // Reset to the first song after shuffling
//         handlePlay(); // Start playing the first song in the shuffled playlist
//     };

//     // Inline styles with typing
//     const styles: { [key: string]: CSSProperties } = {
//         container: {
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             backgroundColor: '#282c34',
//             padding: '20px',
//             borderRadius: '10px',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
//             color: 'white',
//             width: '300px',
//             margin: 'auto',
//         },
//         buttonContainer: {
//             display: 'flex',
//             justifyContent: 'space-around', // Space buttons evenly
//             width: '100%', // Full width for the container
//             marginTop: '10px',
//             padding: '10px 0', // Add padding to the button container
//         },
//         button: {
//             backgroundColor: '#61dafb',
//             border: 'none',
//             borderRadius: '5px',
//             padding: '10px 15px',
//             cursor: 'pointer',
//             fontSize: '16px',
//             transition: 'background-color 0.3s',
//             display: 'flex',
//             alignItems: 'center',
//         },
//         progress: {
//             width: '100%',
//             height: '5px',
//             borderRadius: '5px',
//             marginTop: '10px',
//             backgroundColor: '#ccc',
//         },
//         title: {
//             marginBottom: '20px',
//         },
//         icon: {
//             marginRight: '5px', // Space between icon and text
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <h3 style={styles.title}>Now Playing: {shuffledPlaylist[currentSong]?.title || "No song selected"}</h3>
//             <audio ref={audioRef} />
//             <div style={styles.buttonContainer}>
//                 <button style={styles.button} onClick={handlePrev}>
//                     <FontAwesomeIcon icon={faStepBackward} style={styles.icon} />
//                     Previous
//                 </button>
//                 {isPlaying ? (
//                     <button style={styles.button} onClick={handlePause}>
//                         <FontAwesomeIcon icon={faPause} style={styles.icon} />
//                         Pause
//                     </button>
//                 ) : (
//                     <button style={styles.button} onClick={handlePlay}>
//                         <FontAwesomeIcon icon={faPlay} style={styles.icon} />
//                         Play
//                     </button>
//                 )}
//                 <button style={styles.button} onClick={handleNext}>
//                     <FontAwesomeIcon icon={faStepForward} style={styles.icon} />
//                     Next
//                 </button>
//                 <button style={styles.button} onClick={handleShuffle}>
//                     <FontAwesomeIcon icon={faShuffle} style={styles.icon} />
//                     Shuffle
//                 </button>
//             </div>
//             <div>
//                 <p>
//                     {Math.floor(currentTime)} / {Math.floor(duration)} seconds
//                 </p>
//                 <progress style={styles.progress} value={currentTime} max={duration} />
//             </div>
//         </div>
//     );
// };

// export default PlayerControls;

import React, { useRef, useState, useEffect, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { Song } from '../../types/Song';

interface PlayerControlsProps {
    playlist: Song[];
    removeFromPlaylist: (songId: string) => Promise<void>;
}

const AUDIO_BASE_URL = "http://localhost:3000/audio";

const PlayerControls: React.FC<PlayerControlsProps> = ({ playlist, removeFromPlaylist }) => {
    const [currentSong, setCurrentSong] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [shuffledPlaylist, setShuffledPlaylist] = useState<Song[]>(playlist);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            const updateDuration = () => {
                if (audioRef.current) {
                    setDuration(audioRef.current.duration);
                }
            };

            const updateCurrentTime = () => {
                if (audioRef.current) {
                    setCurrentTime(audioRef.current.currentTime);
                }
            };

            audioRef.current.addEventListener('loadedmetadata', updateDuration);
            audioRef.current.addEventListener('timeupdate', updateCurrentTime);

            return () => {
                audioRef.current?.removeEventListener('loadedmetadata', updateDuration);
                audioRef.current?.removeEventListener('timeupdate', updateCurrentTime);
            };
        }
    }, [audioRef]);

    useEffect(() => {
        setShuffledPlaylist(playlist); // Reset shuffled playlist when the original playlist changes
    }, [playlist]);

    const handlePlay = () => {
        if (audioRef.current) {
            if (audioRef.current.src !== `${AUDIO_BASE_URL}/${shuffledPlaylist[currentSong].id}`) {
                audioRef.current.src = `${AUDIO_BASE_URL}/${shuffledPlaylist[currentSong].id}`;
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.error('Error playing the song:', error);
                });
            } else {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.error('Error playing the song:', error);
                });
            }
        }
    };

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleNext = () => {
        setCurrentSong((prev) => (prev + 1) % shuffledPlaylist.length);
        handlePlay();
    };

    const handlePrev = () => {
        setCurrentSong((prev) => (prev - 1 + shuffledPlaylist.length) % shuffledPlaylist.length);
        handlePlay();
    };

    const handleShuffle = () => {
        const shuffled = [...playlist].sort(() => Math.random() - 0.5);
        setShuffledPlaylist(shuffled);
        setCurrentSong(0); // Reset to the first song after shuffling
        handlePlay(); // Start playing the first song in the shuffled playlist
    };

    // Inline styles with typing
    const styles: { [key: string]: CSSProperties } = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#282c34',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            color: 'white',
            width: '100%', // Adjusted to be full width for larger panel
            maxWidth: '400px', // Optional max width for the panel
            margin: 'auto',
        },
        title: {
            marginBottom: '20px',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-around', // Space buttons evenly
            width: '100%', // Full width for the container
            marginTop: '10px',
            padding: '10px 0', // Add padding to the button container
        },
        button: {
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s',
            display: 'flex',
            alignItems: 'center',
        },
        progress: {
            width: '100%',
            height: '5px',
            borderRadius: '5px',
            marginTop: '10px',
            backgroundColor: '#ccc',
        },
        icon: {
            marginRight: '5px', // Space between icon and text
        },
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Now Playing: {shuffledPlaylist[currentSong]?.title || "No song selected"}</h3>
            <audio ref={audioRef} />
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={handlePrev}>
                    <FontAwesomeIcon icon={faStepBackward} style={styles.icon} />
                    Previous
                </button>
                {isPlaying ? (
                    <button style={styles.button} onClick={handlePause}>
                        <FontAwesomeIcon icon={faPause} style={styles.icon} />
                        Pause
                    </button>
                ) : (
                    <button style={styles.button} onClick={handlePlay}>
                        <FontAwesomeIcon icon={faPlay} style={styles.icon} />
                        Play
                    </button>
                )}
                <button style={styles.button} onClick={handleNext}>
                    <FontAwesomeIcon icon={faStepForward} style={styles.icon} />
                    Next
                </button>
                <button style={styles.button} onClick={handleShuffle}>
                    <FontAwesomeIcon icon={faShuffle} style={styles.icon} />
                    Shuffle
                </button>
            </div>
            <div>
                <p>
                    {Math.floor(currentTime)} / {Math.floor(duration)} seconds
                </p>
                <progress style={styles.progress} value={currentTime} max={duration} />
            </div>
        </div>
    );
};

export default PlayerControls;
