'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Eye, History, Sun, Heart } from 'lucide-react';
import clsx from 'clsx';

interface BioQuestGameProps {
    onComplete: () => void;
}

type Realm = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    question: string;
    options: string[];
    correctAnswer: string;
    meaning: string;
    reward: string;
    icon: React.ReactNode;
    theme: string;
};

const realms: Realm[] = [
    {
        id: 'sight',
        title: 'Q1 — THE FIRST GLIMPSE',
        subtitle: 'Realm of Vision',
        description: 'You first saw her — attractive, kind, unforgettable smile.',
        question: 'Which sense allows the brain to capture the very first impression of someone — often in a single, unforgettable moment?',
        options: ['Touch', 'Smell', 'Hearing', 'Sight'],
        correctAnswer: 'Sight',
        meaning: 'A long time ago,in school corridors before words ever passed between two paths, there was a moment — a face, a smile, a presence — captured quietly by the eyes and kept without reason.',
        reward: 'Fragment of Vision',
        icon: <Eye size={32} />,
        theme: 'from-blue-900 via-sky-900 to-black',
    },
    {
        id: 'spark',
        title: 'Q2 — THE FIRST SPARK',
        subtitle: 'Realm of Chemistry',
        description: 'The first time you talked, butterflies.',
        question: 'Which chemical rises sharply when we talk to someone who unexpectedly affects us — causing butterflies, warmth, and a rush?',
        options: ['Cortisol', 'Melatonin', 'Adrenaline / Oxytocin', 'Glucagon'],
        correctAnswer: 'Adrenaline / Oxytocin',
        meaning: 'The first conversations were small sparks — a rush in the chest, an unsteady calm, a strange warmth. Some connections begin before we realize it.',
        reward: 'Fragment of Spark',
        icon: <Zap size={32} />,
        theme: 'from-purple-900 via-fuchsia-900 to-black',
    },
    {
        id: 'understanding',
        title: 'Q3 — THE DEEP UNDERSTANDING',
        subtitle: 'Realm of Connection',
        description: 'The biology of emotional bonding and trust.',
        question: 'Which part of the brain strengthens emotional understanding, letting two people connect through deeper conversations and shared truths?',
        options: ['Limbic System', 'Cerebellum', 'Occipital Lobe', 'Brainstem'],
        correctAnswer: 'Limbic System',
        meaning: 'With time, conversations deepened — not loud, not dramatic, just quietly real. Understanding grew the way the mind remembers things it cares about.',
        reward: 'Fragment of Understanding',
        icon: <Brain size={32} />,
        theme: 'from-indigo-900 via-violet-900 to-black',
    },
    {
        id: 'warmth',
        title: 'Q4 — THE QUIET WARMTH',
        subtitle: 'Realm of Memory',
        description: 'The biology of thoughts lingering.',
        question: 'Which part of the brain keeps certain people present in our thoughts, holding their warmth even across silence or distance?',
        options: ['Hippocampus', 'Medulla', 'Parietal cortex', 'Retina'],
        correctAnswer: 'Hippocampus',
        meaning: 'Even in long quiet months, the warmth didn’t fade. Some people stay not in action, but in thought.',
        reward: 'Fragment of Warmth',
        icon: <History size={32} />,
        theme: 'from-emerald-900 via-teal-900 to-black',
    },
    {
        id: 'energy',
        title: 'Q5 — THE RETURN OF ENERGY',
        subtitle: 'Realm of Renewal',
        description: 'New energy, renewed connection.',
        question: 'Which neurotransmitter rises when a meaningful conversation returns, bringing new energy, comfort, and a quiet happiness?',
        options: ['Dopamine', 'Insulin', 'Thyroxine', 'Calcitonin'],
        correctAnswer: 'Dopamine',
        meaning: 'And when the words finally returned, they brought a lightness a renewed energy, like something familiar coming alive again.',
        reward: 'Fragment of Energy',
        icon: <Sun size={32} />,
        theme: 'from-amber-900 via-orange-900 to-black',
    },
    {
        id: 'truth',
        title: 'Q6 — THE FINAL TRUTH',
        subtitle: 'Realm of the Heart',
        description: 'If she ever becomes mine, I’d be luckiest.',
        question: 'Which organ responds to the deepest emotions — the kind that feel grateful, calm, and quietly precious?',
        options: ['Heart', 'Liver', 'Kidneys', 'Pancreas'],
        correctAnswer: 'Heart',
        meaning: 'And now the truth reveals itself: Not a confession, not a claim. Just a quiet, steady realization — that some people are blessings.',
        reward: 'The Final Treasure',
        icon: <Heart size={32} />,
        theme: 'from-red-900 via-rose-900 to-black',
    },
];

export default function BioQuestGame({ onComplete }: BioQuestGameProps) {
    const [introFinished, setIntroFinished] = useState(false);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const handleAnswer = (option: string) => {
        const correct = option === realms[currentLevel].correctAnswer;
        setIsCorrect(correct);
        if (correct) {
            setShowResult(true);
        } else {
            setToastMessage("Oops it was wrong think from the right place miss....use ur brain 🧠");
            setTimeout(() => setToastMessage(null), 3000);
        }
    };

    const nextLevel = () => {
        setShowResult(false);
        if (currentLevel < realms.length - 1) {
            setCurrentLevel(currentLevel + 1);
        } else {
            onComplete();
        }
    };

    if (!introFinished) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-xl space-y-8"
                >
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-300 italic">
                        “The human body is a maze of truth. Each system hides a feeling. Each answer is a fragment of who you are.”
                    </h2>
                    <p className="text-gray-500">
                        Walk carefully. The treasure reveals itself only to the honest.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIntroFinished(true)}
                        className="px-8 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors"
                    >
                        Begin
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    const realm = realms[currentLevel];

    return (
        <div className={clsx(
            "min-h-screen flex flex-col items-center justify-center p-6 text-white transition-colors duration-1000 bg-gradient-to-br relative overflow-hidden",
            realm.theme
        )}>
            {/* Toast Notification */}
            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="absolute top-10 left-0 right-0 mx-auto w-max max-w-[90%] bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full shadow-xl z-50 text-center"
                    >
                        {toastMessage}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode='wait'>
                {!showResult ? (
                    <motion.div
                        key="question"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="max-w-2xl w-full space-y-8"
                    >
                        <div className="text-center space-y-2">
                            <div className="flex justify-center mb-4 text-white/50">
                                {realm.icon}
                            </div>
                            <h3 className="text-sm tracking-[0.3em] uppercase text-white/60">{realm.title}</h3>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">{realm.subtitle}</h2>
                        </div>

                        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                            <p className="text-xl md:text-2xl font-medium text-center mb-8 leading-relaxed">
                                {realm.question}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {realm.options.map((option) => (
                                    <motion.button
                                        key={option}
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleAnswer(option)}
                                        className="p-4 rounded-xl border border-white/20 text-left hover:border-white/50 transition-all"
                                    >
                                        {option}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-xl text-center space-y-8"
                    >
                        <div className="flex justify-center text-yellow-400">
                            <SparklesIcon />
                        </div>
                        <h2 className="text-3xl font-bold text-yellow-100">{realm.reward}</h2>
                        <p className="text-xl text-white/90 leading-relaxed font-serif">
                            "{realm.meaning}"
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={nextLevel}
                            className="px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-all"
                        >
                            Continue
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function SparklesIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
    )
}
