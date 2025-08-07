'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import TerminalPrompt from './TerminalPrompt';

interface TerminalSectionProps {
  id: string;
  command: string;
  children: ReactNode;
  delay?: number;
}

export default function TerminalSection({ 
  id, 
  command, 
  children, 
  delay = 0 
}: TerminalSectionProps) {
  return (
    <motion.section
      id={id}
      className="border border-gray-600 p-4 mb-8"
      initial={{ opacity: 1, y: 0 }} // Changed to prevent invisible content
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <TerminalPrompt command={command} delay={delay} />
      <motion.div 
        className="ml-4 mt-2"
        initial={{ opacity: 1 }} // Changed to prevent invisible content
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: (delay + 500) / 1000 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
