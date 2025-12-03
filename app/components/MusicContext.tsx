'use client';

import { createContext, useContext, useState, useRef, ReactNode } from 'react';

interface MusicContextType {
    isPlaying: boolean;
    audioRef: React.RefObject<HTMLAudioElement | null>;
    play: () => void;
    pause: () => void;
    toggle: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log(e));
        }
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggle = () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    };

    return (
        <MusicContext.Provider value={{ isPlaying, audioRef, play, pause, toggle }}>
            <audio ref={audioRef} loop src="/srk3.mp3" />
            {children}
        </MusicContext.Provider>
    );
}

export function useMusic() {
    const context = useContext(MusicContext);
    if (!context) {
        throw new Error('useMusic must be used within MusicProvider');
    }
    return context;
}
