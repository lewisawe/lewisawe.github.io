'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSounds } from '@/hooks/useSounds';

interface TerminalPromptProps {
  command: string;
  delay?: number;
  showCursor?: boolean;
  enableSound?: boolean;
}

export default function TerminalPrompt({ 
  command, 
  delay = 0, 
  showCursor = true,
  enableSound = true
}: TerminalPromptProps) {
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { playSound } = useSounds();

  useEffect(() => {
    setIsMounted(true);
    
    const timer = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      
      const typingInterval = setInterval(() => {
        if (i < command.length) {
          setDisplayedCommand(command.slice(0, i + 1));
          
          // Play typing sound occasionally (deterministic for SSR)
          if (enableSound && i % 3 === 0) {
            playSound('type', { volume: 0.05 });
          }
          
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          
          // Play completion beep
          if (enableSound) {
            setTimeout(() => playSound('beep', { volume: 0.1 }), 100);
          }
        }
      }, 60); // Fixed timing instead of random

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [command, delay, enableSound, playSound]);

  // For SSR and before mount, show static version
  if (!isMounted) {
    return (
      <div className="terminal-prompt mb-2 font-mono">
        <span className="text-green-400">$ </span>
        <span className="text-white">{command}</span>
        {showCursor && (
          <span className="inline-block w-2 h-5 bg-green-400 ml-1 opacity-100" />
        )}
      </div>
    );
  }

  return (
    <motion.div 
      className="terminal-prompt mb-2 font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
    >
      <span className="text-green-400">$ </span>
      <span className="text-white relative">
        {displayedCommand}
        {(isTyping || showCursor) && (
          <motion.span
            className="inline-block w-2 h-5 bg-green-400 ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        )}
      </span>
    </motion.div>
  );
}
