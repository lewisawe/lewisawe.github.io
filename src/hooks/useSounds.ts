'use client';

import { useCallback, useRef, useEffect, useState } from 'react';

type SoundType = 'type' | 'beep' | 'error' | 'success' | 'click' | 'whoosh';

interface SoundConfig {
  volume?: number;
  playbackRate?: number;
}

export function useSounds() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const [soundsEnabled, setSoundsEnabledState] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Load sounds preference from localStorage after mount
    const savedPreference = localStorage.getItem('sounds-enabled');
    if (savedPreference !== null) {
      setSoundsEnabledState(JSON.parse(savedPreference));
    }
  }, []);

  const getAudioContext = useCallback(() => {
    if (!isMounted || typeof window === 'undefined') return null;
    
    if (!audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      } catch (error) {
        console.warn('AudioContext not supported:', error);
        return null;
      }
    }
    return audioContextRef.current;
  }, [isMounted]);

  const createBeep = useCallback((frequency: number, duration: number, volume: number = 0.1) => {
    const audioContext = getAudioContext();
    if (!audioContext) return;

    try {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.type = 'square';

      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
      console.warn('Sound playback failed:', error);
    }
  }, [getAudioContext]);

  const playSound = useCallback((type: SoundType, config: SoundConfig = {}) => {
    if (!soundsEnabled || !isMounted) return;

    const { volume = 0.1 } = config;

    try {
      switch (type) {
        case 'type':
          createBeep(800, 0.05, volume * 0.3);
          break;
        
        case 'beep':
          createBeep(800, 0.1, volume);
          break;
        
        case 'error':
          createBeep(200, 0.3, volume);
          break;
        
        case 'success':
          createBeep(600, 0.1, volume);
          setTimeout(() => createBeep(800, 0.1, volume), 100);
          break;
        
        case 'click':
          createBeep(600, 0.05, volume);
          break;
        
        case 'whoosh':
          const audioContext = getAudioContext();
          if (!audioContext) return;

          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
          oscillator.type = 'sawtooth';

          gainNode.gain.setValueAtTime(0, audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);

          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.3);
          break;
      }
    } catch (error) {
      console.warn('Sound playback failed:', error);
    }
  }, [createBeep, getAudioContext, soundsEnabled, isMounted]);

  const toggleSounds = useCallback(() => {
    const newState = !soundsEnabled;
    setSoundsEnabledState(newState);
    if (isMounted) {
      localStorage.setItem('sounds-enabled', JSON.stringify(newState));
    }
    return newState;
  }, [soundsEnabled, isMounted]);

  const setSoundsEnabled = useCallback((enabled: boolean) => {
    setSoundsEnabledState(enabled);
    if (isMounted) {
      localStorage.setItem('sounds-enabled', JSON.stringify(enabled));
    }
  }, [isMounted]);

  return {
    playSound,
    toggleSounds,
    setSoundsEnabled,
    soundsEnabled,
  };
}
