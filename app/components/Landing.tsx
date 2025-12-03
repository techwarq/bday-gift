'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

interface LandingProps {
    onNext: () => void;
}

export default function Landing({ onNext }: LandingProps) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-950 to-black p-6 text-center overflow-hidden relative">
            {/* Floating background elements */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 text-white/20 opacity-50"
            >
                <Sparkles size={48} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 text-white/20 opacity-50"
            >
                <Heart size={64} />
            </motion.div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-lg border border-white/10"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 font-display tracking-tight">
                    Hello Miss Doc! 🩺
                </h1>

                <div className="space-y-4 text-lg md:text-xl text-gray-200 font-medium leading-relaxed">
                    <p>
                        The person who made this feels extremely sorry for forgetting your bday on time!
                        Been really busy lately, but not <i>that</i> busy that I won't make you something.
                    </p>
                    <p>
                        IDK what kind of gestures you would like, but I will try to make you feel special...
                        because you are. ✨
                    </p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="mt-8 px-8 py-4 bg-white text-purple-900 text-xl font-bold rounded-full shadow-lg hover:shadow-purple-500/20 transition-all flex items-center gap-2 mx-auto"
                >
                    Ready to ready? 🚀
                </motion.button>
            </motion.div>
        </div>
    );
}
