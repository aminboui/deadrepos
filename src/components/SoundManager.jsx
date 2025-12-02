import { useEffect, useRef } from 'react';

export default function SoundManager({ enabled = true, isWalking = false }) {
  const ambientAudioRef = useRef(null);
  const footstepIntervalRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    // Load and play ambient scary sound
    ambientAudioRef.current = new Audio('/sounds/Scary.wav');
    ambientAudioRef.current.loop = true;
    ambientAudioRef.current.volume = 0.3;
    
    // Start playing after user interaction
    const startAudio = () => {
      if (ambientAudioRef.current) {
        ambientAudioRef.current.play().catch(err => console.log('Audio play failed:', err));
      }
      document.removeEventListener('click', startAudio);
      document.removeEventListener('keydown', startAudio);
    };
    
    document.addEventListener('click', startAudio);
    document.addEventListener('keydown', startAudio);

    return () => {
      if (ambientAudioRef.current) {
        ambientAudioRef.current.pause();
        ambientAudioRef.current = null;
      }
      if (footstepIntervalRef.current) {
        clearInterval(footstepIntervalRef.current);
      }
      document.removeEventListener('click', startAudio);
      document.removeEventListener('keydown', startAudio);
    };
  }, [enabled]);
  
  // Footstep sounds when walking (keeping simple procedural sound)
  useEffect(() => {
    if (enabled && isWalking) {
      const playFootstep = () => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(60, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(30, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
      };
      
      footstepIntervalRef.current = setInterval(playFootstep, 400);
      
      return () => {
        if (footstepIntervalRef.current) {
          clearInterval(footstepIntervalRef.current);
        }
      };
    } else {
      if (footstepIntervalRef.current) {
        clearInterval(footstepIntervalRef.current);
      }
    }
  }, [enabled, isWalking]);

  return null;
}
