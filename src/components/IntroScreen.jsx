import { useState, useEffect } from 'react';

export default function IntroScreen({ onComplete }) {
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),  // Show first text after 1s
      setTimeout(() => setStep(2), 2500),  // Second text at 2.5s
      setTimeout(() => setStep(3), 4000),  // Third text at 4s
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 1000);
      }, 6000)  // Auto-complete at 6s
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`intro-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="intro-content">
        <div className={`intro-step ${step >= 0 ? 'visible' : ''}`}>
          <h1 className="intro-title">💀 DeadRepos 💀</h1>
        </div>
        
        <div className={`intro-step ${step >= 1 ? 'visible' : ''}`}>
          <p className="intro-text">
            In the depths of GitHub, forgotten repositories rest...
          </p>
        </div>
        
        <div className={`intro-step ${step >= 2 ? 'visible' : ''}`}>
          <p className="intro-text">
            Abandoned for months, their code grows cold and silent...
          </p>
        </div>
        
        <div className={`intro-step ${step >= 3 ? 'visible' : ''}`}>
          <p className="intro-text">
            Will you dare to enter the graveyard and uncover what lies beneath?
          </p>
          <button className="intro-skip" onClick={() => {
            setFadeOut(true);
            setTimeout(onComplete, 500);
          }}>
            Enter the Graveyard →
          </button>
        </div>
      </div>
      
      <div className="intro-fog"></div>
    </div>
  );
}
