'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FinalHeart() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Sequence the animations
        const timer1 = setTimeout(() => setStep(1), 1000); // Relics rise
        const timer2 = setTimeout(() => setStep(2), 4000); // Heart appears
        const timer3 = setTimeout(() => setStep(3), 7000); // Message starts

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 overflow-hidden relative">
            {/* Relics Merging Animation */}
            {step >= 1 && step < 2 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="text-center space-y-4">
                        {['Vision', 'Spark', 'Understanding', 'Warmth', 'Energy', 'Truth'].map((relic, i) => (
                            <motion.div
                                key={relic}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.3 }}
                                className="text-xl text-gray-400 font-serif"
                            >
                                {relic}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* The Heart */}
            {step >= 2 && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, type: "spring" }}
                    className="mb-12"
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]"
                    >
                        <Heart size={120} fill="currentColor" />
                    </motion.div>
                </motion.div>
            )}

            {/* Final Message */}
            {step >= 3 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-2xl w-full z-10"
                >
                    <div className="bg-[#fdfbf7] text-gray-900 p-8 md:p-12 rounded-sm shadow-2xl transform rotate-1 max-w-lg mx-auto relative">
                        {/* Paper Texture/Effect */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 pointer-events-none rounded-sm"></div>

                        <h1 className="text-3xl font-serif font-bold mb-6 text-gray-800">
                            Final Treasure
                        </h1>

                        <div className="space-y-4 text-lg font-serif leading-relaxed text-gray-700">
                            <p>
                                “And in the end, after every moment collected, the feeling that remains is simple — a quiet appreciation for someone good, someone who adds light to the world just by being in it.
                            </p>
                            <p>
                                <span className="font-bold">Hey Tejaswini,</span> <br />
                                <br />


                                First of all, I’m really sorry I genuinely don’t know how I forgot your birthday. I’ve been super busy lately, but we can still celebrate it, and honestly, you deserve it. You really are one of the best things that’s happened to everyone around you. And no, I’m not exaggerating.

                                I won’t lie… I’m a bit rusty when it comes to writing something for someone. I haven’t done anything special for anyone in a long time (thank God). But when it comes to you, it’s different. My ego, my work, nothing gets in the way. You could disappear for months and the moment you talk to me again, I’m still just as excited and genuinely happy to hear from you. I don’t even know why, it’s just… different. Whatever I feel for you doesn’t feel usual.

                                Anyway, getting back to this I’ve already told you how amazing and special you are. I could write a whole book about it, but honestly, I’d rather study your med school books than do that. I just want to say I’m proud of you. You’re doing so well, you’re so strong, and I feel ridiculously lucky that you are my friend. If you trust me, that’s even more of a blessing. And anyone who makes you feel less than what you are never deserved you in the first place, so don’t ever believe them.

                                I won’t get too sappy. Just be you all the time. And by the way, your vacation is on me. Next year I’m convincing aunty and bringing you here. And… no boyfriend allowed.
                            </p>
                        </div>

                        <div className="mt-12 pt-6 border-t border-gray-300">
                            <div className="mt-4 text-red-600 text-2xl">❤️</div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
