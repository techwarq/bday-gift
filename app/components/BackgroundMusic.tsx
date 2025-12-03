'use client';

import { Pause, Play } from 'lucide-react';
import { useMusic } from './MusicContext';

export default function MusicControls() {
    const { isPlaying, toggle } = useMusic();

    if (!isPlaying) return null; // Only show when music is playing

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={toggle}
                className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all shadow-lg"
            >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
        </div>
    );
}
