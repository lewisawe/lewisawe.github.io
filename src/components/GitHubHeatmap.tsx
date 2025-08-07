'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4 intensity level
}

export default function GitHubHeatmap() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create "DevOps" pattern in the heatmap
    const generateDevOpsPattern = () => {
      const data: ContributionDay[] = [];
      const today = new Date();
      
      // Define "DevOps" pattern - 7 rows x 53 weeks
      // Each letter is clearly defined with proper spacing
      const devopsPattern = [
        // Week:  0123456789012345678901234567890123456789012345678901234
        //        D     E     V     O     P     S
        [0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // Row 0
        [0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // Row 1
        [0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // Row 2
        [0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // Row 3
        [0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // Row 4
        [0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // Row 5
        [0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // Row 6
      ];

      // Create contribution data based on pattern
      for (let week = 0; week < 53; week++) {
        for (let day = 0; day < 7; day++) {
          const date = new Date(today);
          date.setDate(date.getDate() - ((52 - week) * 7 + (6 - day)));
          
          const isActive = devopsPattern[day] && devopsPattern[day][week] === 1;
          const count = isActive ? Math.floor(Math.random() * 6) + 8 : Math.floor(Math.random() * 3);
          const level = isActive ? 4 : (count === 0 ? 0 : Math.min(Math.floor(count / 2) + 1, 2));
          
          data.push({
            date: date.toISOString().split('T')[0],
            count,
            level
          });
        }
      }
      
      return data;
    };

    setTimeout(() => {
      setContributions(generateDevOpsPattern());
      setIsLoading(false);
    }, 1000);
  }, []);

  const getIntensityColor = (level: number) => {
    const colors = [
      'rgba(22, 27, 34, 1)', // No contributions
      'rgba(0, 109, 50, 0.4)', // Very low
      'rgba(0, 155, 85, 0.6)', // Low
      'rgba(64, 196, 99, 0.8)', // Medium
      'rgba(57, 211, 83, 1)'  // High - for "DevOps" letters
    ];
    return colors[level] || colors[0];
  };

  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  if (isLoading) {
    return (
      <div className="floating-card border border-gray-600 p-6 rounded-lg bg-black/30 backdrop-blur-sm">
        <h3 className="text-cyan-400 font-bold mb-4 font-mono text-lg ascii-header">
          GitHub Activity
        </h3>
        <div className="flex items-center justify-center h-32">
          <div className="ascii-spinner text-green-400 text-2xl">|</div>
          <span className="ml-2 font-mono text-sm">Loading contributions...</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="floating-card border border-gray-600 p-6 rounded-lg hover:border-green-400 transition-all duration-300 bg-black/30 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02, 
        rotateY: 2,
        boxShadow: "0 20px 40px rgba(0, 255, 0, 0.2)"
      }}
    >
      <h3 className="text-cyan-400 font-bold mb-4 font-mono text-lg ascii-header">
        GitHub Activity
      </h3>
      
      <div className="mb-4">
        <div className="grid grid-cols-53 gap-1 mb-2">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-rows-7 gap-1">
              {week.map((day, dayIndex) => (
                <motion.div
                  key={`${weekIndex}-${dayIndex}`}
                  className="w-3 h-3 rounded-sm cursor-pointer hover:ring-1 hover:ring-green-400 transition-all duration-200"
                  style={{ backgroundColor: getIntensityColor(day.level) }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: (weekIndex * 7 + dayIndex) * 0.002,
                    duration: 0.3 
                  }}
                  whileHover={{ scale: 1.3, zIndex: 10 }}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-xs font-mono text-gray-400">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map(level => (
              <div
                key={level}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: getIntensityColor(level) }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
      
      <div className="text-sm font-mono text-gray-300">
        <div className="flex justify-between items-center">
          <span>Total contributions: {contributions.reduce((sum, day) => sum + day.count, 0)}</span>
          <span className="text-green-400 font-bold">DevOps ❤️</span>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-500">Current streak: 365 days</span>
          <span className="text-xs text-cyan-400">Longest streak: 500+ days</span>
        </div>
      </div>
    </motion.div>
  );
}
