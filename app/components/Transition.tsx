'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface TransitionProps {
    onComplete: () => void;
}

export default function Transition({ onComplete }: TransitionProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 4000); // Show for 4 seconds
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="max-w-2xl"
            >
                <h2 className="text-3xl md:text-5xl font-light tracking-wider leading-tight">
                    Wait... not that easily.
                </h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-6 text-xl text-gray-400"
                >
                    To read the depths, you need to clear some walls.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="mt-4 text-2xl font-semibold text-white"
                >
                    Ready, Miss Doc?
                </motion.p>
            </motion.div>
        </div>
    );
}
