'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Linkedin, Youtube, Volume2, VolumeX } from 'lucide-react';
import Navigation from '@/components/Navigation';
import TerminalSection from '@/components/TerminalSection';
import TerminalPrompt from '@/components/TerminalPrompt';
import GitHubHeatmap from '@/components/GitHubHeatmap';
import InteractiveTimeline from '@/components/InteractiveTimeline';

export default function Home() {
  const [soundsEnabled, setSoundsEnabled] = useState(true);

  return (
    <div className="min-h-screen p-4 bg-black text-green-400 font-mono relative">
      {/* Sound Control */}
      <div className="fixed top-4 right-4 z-40">
        <motion.button
          onClick={() => setSoundsEnabled(!soundsEnabled)}
          className="p-2 bg-black/80 border border-green-400 rounded hover:bg-green-400 hover:text-black transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Toggle Sounds"
        >
          {soundsEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.header 
          className="border border-gray-600 p-4 mb-8 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TerminalPrompt command="whoami" enableSound={soundsEnabled} />
          <div className="ml-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-2"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Lewis Sawe
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-cyan-400"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              DevOps and Cloud Engineer
            </motion.h2>
          </div>
        </motion.header>

        {/* Navigation */}
        <Navigation />

        {/* About Section */}
        <TerminalSection id="about" command="cat about.txt" delay={200}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              Cloud and DevOps Engineer with 2+ years of experience in cloud infrastructure, 
              automation, and CI/CD pipelines.
            </p>
            <p>
              Passionate about infrastructure as code, containerization, and cloud-native technologies.
            </p>
          </motion.div>
        </TerminalSection>

        {/* Enhanced Skills Section */}
        <TerminalSection id="skills" command="ls -R skills/" delay={300}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: 'Cloud Platforms',
                skills: ['AWS', 'Azure', 'GCP']
              },
              {
                title: 'Infrastructure as Code',
                skills: ['Terraform', 'CloudFormation', 'Ansible']
              },
              {
                title: 'Containerization',
                skills: ['Docker', 'Kubernetes', 'Helm']
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="floating-card border border-gray-600 p-6 rounded-lg hover:border-green-400 transition-all duration-300 bg-black/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50,
                  boxShadow: "0 20px 40px rgba(0, 255, 0, 0.2)"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <h3 className="text-cyan-400 font-bold mb-4 font-mono text-lg ascii-header">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="skill-item flex items-center gap-2 p-2 rounded hover:bg-green-400/10 transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 + 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <span className="text-green-400 font-mono text-sm">▶</span>
                      <span className="font-mono text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* GitHub Activity Heatmap */}
          <GitHubHeatmap />
        </TerminalSection>

        {/* Enhanced Projects Section */}
        <TerminalSection id="projects" command="cat projects/*" delay={400}>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cloud Migration Project',
                description: 'Led the migration of legacy applications to AWS using Terraform and Docker.',
                tech: ['AWS', 'Terraform', 'Docker', 'Jenkins'],
                status: 'Completed',
                complexity: 85,
                impact: 'High',
                timeline: '6 months',
                details: 'Migrated 15+ legacy applications to cloud infrastructure, reducing operational costs by 40% and improving scalability.'
              },
              {
                title: 'CI/CD Pipeline Automation',
                description: 'Implemented automated deployment pipelines using Jenkins and GitHub Actions.',
                tech: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes'],
                status: 'In Progress',
                complexity: 75,
                impact: 'Medium',
                timeline: '4 months',
                details: 'Built comprehensive CI/CD pipelines serving 20+ development teams, reducing deployment time from hours to minutes.'
              }
            ].map((project, index) => (
              <motion.article
                key={project.title}
                className="floating-card border border-gray-600 p-6 rounded-lg hover:border-green-400 transition-all duration-300 bg-black/30 backdrop-blur-sm group perspective-1000"
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(0, 255, 0, 0.3)"
                }}
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-cyan-400 font-bold text-lg mb-2 ascii-header">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        {project.timeline}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                        {project.impact} Impact
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`text-xs px-3 py-1 rounded-full font-mono ${
                      project.status === 'Completed' 
                        ? 'bg-green-400/20 text-green-400 border border-green-400/30' 
                        : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Complexity Meter */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-gray-400">Complexity</span>
                    <span className="text-xs font-mono text-green-400">{project.complexity}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.complexity}%` }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Expandable Details */}
                <motion.div
                  className="mb-4 p-3 bg-gray-900/50 rounded border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ height: 0 }}
                  whileHover={{ height: 'auto' }}
                >
                  <p className="text-sm text-gray-400 font-mono">{project.details}</p>
                </motion.div>

                {/* Technology Stack */}
                <div className="mb-4">
                  <h4 className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="skill-item px-3 py-1 bg-gray-800 text-xs rounded-full border border-gray-600 font-mono hover:border-green-400 transition-colors cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Interactive Elements */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <motion.button
                    className="interactive-button text-xs font-mono text-green-400 hover:text-white transition-colors flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>▶</span> View Details
                  </motion.button>
                  <div className="flex gap-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-cyan-400"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-yellow-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </TerminalSection>

        {/* Enhanced Experience Section with Timeline */}
        <TerminalSection id="experience" command="tail -f experience.log" delay={500}>
          <InteractiveTimeline />
        </TerminalSection>

        {/* Enhanced Talks Section */}
        <TerminalSection id="talks" command="ls -l talks/" delay={600}>
          <div className="space-y-6">
            {[
              {
                title: 'AWS Spending Traps and How to Avoid Them',
                event: 'Moar Serveless 2025',
                date: 'May 2025',
                description: 'Learn about the common ways you unknowingly waste money on AWS Cloud and the simple steps you can take to prevent these costly mistakes.'
              },
              {
                title: 'Triple R Squad: Resilience, Reliability and Redundancy in Action',
                event: 'Nairobi DevOps Days 2024',
                date: 'June 2024',
                description: 'Deep dive into Resilience, Reliability, and Redundancy in Action. Learn how to implement these principles in your cloud architecture.'
              },
              {
                title: 'Decentralise Authentication with Amazon Cognito',
                event: 'AWS Community Day Nairobi',
                date: 'April 2024',
                description: 'Explore best practices for managing user authentication and authorization in serverless applications using Amazon Cognito.'
              }
            ].map((talk, index) => (
              <motion.article
                key={talk.title}
                className="floating-card border border-gray-600 p-6 rounded-lg hover:border-green-400 transition-all duration-300 bg-black/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 3,
                  boxShadow: "0 15px 30px rgba(0, 255, 0, 0.2)"
                }}
              >
                <h3 className="text-cyan-400 font-bold mb-3 text-lg ascii-header">{talk.title}</h3>
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <span className="text-white bg-gray-800 px-2 py-1 rounded font-mono">{talk.event}</span>
                  <span className="text-cyan-400 font-mono">{talk.date}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{talk.description}</p>
                
                {/* Interactive Elements */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
                  <motion.button
                    className="interactive-button text-xs font-mono text-green-400 hover:text-white transition-colors flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span>▶</span> View Slides
                  </motion.button>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-green-400"></div>
                    <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                    <div className="w-1 h-1 rounded-full bg-yellow-400"></div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </TerminalSection>

        {/* Enhanced YouTube Section */}
        <TerminalSection id="youtube" command="cat youtube/playlist.txt" delay={700}>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Your AWS Developer Toolbox',
                description: 'Explore essential tools and services for AWS development, including SDKs, CLI, and best practices.',
                url: 'https://youtu.be/vlbSit2Keao',
                duration: '15:42',
                views: '2.1K'
              },
              {
                title: 'Your Cloud Bill is Burning Money, here is why',
                description: 'Learn about the common ways you unknowingly waste money on AWS Cloud and the simple steps you can take to prevent these costly mistakes.',
                url: 'https://youtu.be/pKbv21MHRd0',
                duration: '12:30',
                views: '3.5K'
              }
            ].map((video, index) => (
              <motion.article
                key={video.title}
                className="floating-card border border-gray-600 p-6 rounded-lg hover:border-green-400 transition-all duration-300 bg-black/30 backdrop-blur-sm group"
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(255, 0, 0, 0.2)"
                }}
              >
                {/* Video Thumbnail Placeholder */}
                <div className="w-full h-32 bg-gradient-to-br from-red-900/30 to-red-600/30 rounded mb-4 flex items-center justify-center border border-red-500/30">
                  <Youtube size={32} className="text-red-400" />
                </div>
                
                <h3 className="text-cyan-400 font-bold mb-3 ascii-header">{video.title}</h3>
                
                {/* Video Stats */}
                <div className="flex justify-between items-center mb-3 text-xs font-mono text-gray-400">
                  <span>{video.duration}</span>
                  <span>{video.views} views</span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{video.description}</p>
                
                <motion.a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-button inline-flex items-center gap-2 text-red-400 hover:text-white transition-colors font-mono text-sm"
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Youtube size={16} />
                  Watch on YouTube →
                </motion.a>
              </motion.article>
            ))}
          </div>
        </TerminalSection>

        {/* Enhanced Blog Section */}
        <TerminalSection id="blog" command="ls -t blog/" delay={800}>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Creating a Flood Awareness PSA with AWS Nova Canvas',
                date: 'May 2025',
                description: 'Learn how to use AWS Nova Canvas to create engaging and informative public service announcements (PSAs) for flood awareness.',
                url: 'https://lewisawe.hashnode.dev/creating-a-flood-awareness-psa-with-aws-nova-canvas',
                readTime: '8 min read',
                tags: ['AWS', 'AI', 'Canvas']
              },
              {
                title: 'I Built "Hackerman" with Amazon Q',
                date: 'May 2025',
                description: 'Discover the journey of building "Hackerman," an innovative application leveraging Amazon Q for enhanced user experiences.',
                url: 'https://lewisawe.hashnode.dev/i-built-hackerman-with-amazon-q',
                readTime: '12 min read',
                tags: ['Amazon Q', 'AI', 'Development']
              }
            ].map((post, index) => (
              <motion.article
                key={post.title}
                className="floating-card border border-gray-600 p-6 rounded-lg hover:border-green-400 transition-all duration-300 bg-black/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: -3,
                  boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)"
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-cyan-400 text-sm font-mono">{post.date}</span>
                  <span className="text-xs text-gray-400 font-mono">{post.readTime}</span>
                </div>
                
                <h3 className="text-cyan-400 font-bold mb-3 ascii-header">{post.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 text-cyan-400 px-2 py-1 rounded border border-cyan-400/30 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-button inline-flex items-center gap-2 text-green-400 hover:text-white transition-colors font-mono text-sm"
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  Read More →
                </motion.a>
              </motion.article>
            ))}
          </div>
        </TerminalSection>

        {/* Enhanced Certifications Section */}
        <TerminalSection id="certifications" command="cat certs/list.txt" delay={900}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'AWS Certified Solutions Architect',
                issuer: 'Amazon Web Services',
                date: 'May 2024',
                level: 'Associate',
                color: 'orange'
              },
              {
                title: 'Kubernetes and Cloud Native Associate: KCNA',
                issuer: 'Cloud Native Computing Foundation',
                date: 'May 2025',
                level: 'Associate',
                color: 'blue'
              },
              {
                title: 'AWS Certified Developer Associate',
                issuer: 'Amazon Web Services',
                date: 'January 2025',
                level: 'Associate',
                color: 'orange'
              },
              {
                title: 'Google Cloud Certified Associate Engineer',
                issuer: 'Google Cloud',
                date: 'September 2023',
                level: 'Associate',
                color: 'blue'
              },
              {
                title: 'AWS Certified AI Practitioner',
                issuer: 'Amazon Web Services',
                date: 'June 2025',
                level: 'Practitioner',
                color: 'purple'
              }
            ].map((cert, index) => (
              <motion.article
                key={cert.title}
                className="floating-card border border-gray-600 p-4 rounded-lg hover:border-green-400 transition-all duration-300 bg-black/30 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 15px 30px rgba(0, 255, 0, 0.3)"
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className={`w-3 h-3 rounded-full ${
                    cert.color === 'orange' ? 'bg-orange-400' :
                    cert.color === 'blue' ? 'bg-blue-400' :
                    cert.color === 'purple' ? 'bg-purple-400' : 'bg-green-400'
                  }`}></div>
                  <span className="text-xs text-gray-400 font-mono">{cert.level}</span>
                </div>
                
                <h3 className="text-cyan-400 font-bold mb-2 text-sm leading-tight">{cert.title}</h3>
                <p className="text-white text-xs mb-1 font-mono">{cert.issuer}</p>
                <p className="text-gray-400 text-xs font-mono">Issued: {cert.date}</p>
                
                {/* Verification Badge */}
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-xs text-green-400 font-mono">Verified</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </TerminalSection>

        {/* Contact Section */}
        <TerminalSection id="contact" command="cat contact.txt" delay={1000}>
          <div className="space-y-4">
            <motion.p
              className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
              whileHover={{ x: 10 }}
            >
              <Github size={20} />
              GitHub: 
              <a 
                href="https://github.com/lewisawe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-white hover:underline transition-colors"
              >
                github.com/lewisawe
              </a>
            </motion.p>
            <motion.p
              className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
              whileHover={{ x: 10 }}
            >
              <Linkedin size={20} />
              LinkedIn: 
              <a 
                href="https://linkedin.com/in/lewisawe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-white hover:underline transition-colors"
              >
                linkedin.com/in/lewisawe
              </a>
            </motion.p>
          </div>
        </TerminalSection>

        {/* Footer */}
        <motion.footer 
          className="border border-gray-600 p-4 mt-12 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TerminalPrompt command="exit" showCursor={false} enableSound={soundsEnabled} />
          <div className="ml-4">
            <p>© 2025 Lewis Sawe Portfolio. All rights reserved.</p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
