'use client';

import { useState } from 'react';
import Landing from './components/Landing';
import Transition from './components/Transition';
import BioQuestGame from './components/BioQuestGame';
import FinalHeart from './components/FinalHeart';

type Stage = 'landing' | 'transition' | 'game' | 'ending';

export default function Home() {
  const [stage, setStage] = useState<Stage>('landing');

  return (
    <main className="min-h-screen w-full overflow-hidden">
      {stage === 'landing' && (
        <Landing onNext={() => setStage('transition')} />
      )}

      {stage === 'transition' && (
        <Transition onComplete={() => setStage('game')} />
      )}

      {stage === 'game' && (
        <BioQuestGame onComplete={() => setStage('ending')} />
      )}

      {stage === 'ending' && (
        <FinalHeart />
      )}
    </main>
  );
}
