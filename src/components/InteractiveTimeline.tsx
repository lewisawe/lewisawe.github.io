'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

interface TimelineEvent {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: 'work' | 'education' | 'project';
}

const timelineData: TimelineEvent[] = [
  {
    id: '1',
    period: '2024-Present',
    title: 'Network and System Administrator',
    company: 'Eloho',
    location: 'Remote',
    description: 'Leading infrastructure management and system optimization initiatives.',
    technologies: ['AWS', 'Linux', 'Docker', 'Monitoring'],
    achievements: [
      'Reduced system downtime by 40%',
      'Implemented automated backup solutions',
      'Optimized network performance'
    ],
    type: 'work'
  },
  {
    id: '2',
    period: '2022-2024',
    title: 'IT Support Technician',
    company: 'Elpris Ltd',
    location: 'Nairobi, Kenya',
    description: 'Provided technical support and maintained IT infrastructure for enterprise clients.',
    technologies: ['Windows Server', 'Active Directory', 'Networking', 'Troubleshooting'],
    achievements: [
      'Maintained 99.5% system uptime',
      'Resolved 500+ technical issues',
      'Trained junior technicians'
    ],
    type: 'work'
  },
  {
    id: '3',
    period: '2022-2022',
    title: 'DevOps Engineer',
    company: 'HNG Nigeria',
    location: 'Remote',
    description: 'Developed and maintained CI/CD pipelines for multiple projects.',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Git', 'AWS'],
    achievements: [
      'Built automated deployment pipelines',
      'Reduced deployment time by 60%',
      'Mentored development teams'
    ],
    type: 'work'
  }
];

export default function InteractiveTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  return (
    <div className="floating-card border border-gray-600 p-6 rounded-lg hover:border-green-400 transition-all duration-300 bg-black/30 backdrop-blur-sm">
      <h3 className="text-cyan-400 font-bold mb-6 font-mono text-lg ascii-header">
        Career Timeline
      </h3>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-cyan-400 to-green-400 opacity-50" />
        
        {/* Timeline Events */}
        <div className="space-y-8">
          {timelineData.map((event, index) => (
            <motion.div
              key={event.id}
              className="relative flex items-start gap-6 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredEvent(event.id)}
              onHoverEnd={() => setHoveredEvent(null)}
              onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
            >
              {/* Timeline Node */}
              <motion.div
                className="relative z-10 w-4 h-4 rounded-full border-2 border-green-400 bg-black flex-shrink-0 mt-2"
                whileHover={{ scale: 1.5, backgroundColor: '#00ff00' }}
                animate={{
                  boxShadow: hoveredEvent === event.id 
                    ? '0 0 20px rgba(0, 255, 0, 0.8)' 
                    : '0 0 10px rgba(0, 255, 0, 0.3)'
                }}
              >
                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-green-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              {/* Event Content */}
              <motion.div
                className="flex-1 interactive-button p-4 rounded-lg border border-gray-600 hover:border-green-400 transition-all duration-300 bg-black/50"
                whileHover={{ scale: 1.02, y: -2 }}
                animate={{
                  borderColor: selectedEvent?.id === event.id ? '#00ffff' : '#4b5563'
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-lg text-white">{event.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-300 mt-1">
                      <span className="flex items-center gap-1">
                        <Building size={14} />
                        {event.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {event.period}
                      </span>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-mono ${
                    event.type === 'work' ? 'bg-green-400/20 text-green-400' :
                    event.type === 'education' ? 'bg-blue-400/20 text-blue-400' :
                    'bg-purple-400/20 text-purple-400'
                  }`}>
                    {event.type}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-3">{event.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {event.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-xs rounded border border-gray-600 font-mono"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                {/* Expandable Achievements */}
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedEvent?.id === event.id ? 'auto' : 0,
                    opacity: selectedEvent?.id === event.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 border-t border-gray-600">
                    <h5 className="text-cyan-400 font-bold text-sm mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {event.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="text-sm text-gray-300 flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1 }}
                        >
                          <span className="text-green-400 mt-1">▶</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Click Indicator */}
                <div className="text-xs text-gray-500 mt-2 font-mono">
                  {selectedEvent?.id === event.id ? 'Click to collapse' : 'Click to expand'}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
