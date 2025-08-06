'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Car, BarChart3, Cpu, Globe, Database, Code, Settings } from 'lucide-react'

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'AutoDash OS Embedded Infotainment System',
      description: 'A comprehensive automotive infotainment system built with C++ and Qt6, featuring media player, Bluetooth connectivity, climate control, and rear camera functionality with real-time sensor simulation.',
      technologies: ['C++', 'Qt6', 'OpenCV', 'CMake', 'Linux', 'BlueZ', 'ALSA', 'I2C', 'GDB', 'Catch2'],
      features: [
        'Built automotive infotainment system using C++ with Qt6 framework',
        'Implemented four core modules: Media Player, Bluetooth, Climate Control, Rear Camera',
        'Real-time sensor simulation and hardware abstraction for embedded systems',
        'Thread-safe logging with file/console output and comprehensive error handling',
        'Low-level interface simulations including I2C sensor data generation',
        'USB device monitoring, Bluetooth device discovery, and ALSA audio integration',
        'JSON-based configuration persistence and unit testing with Catch2 framework'
      ],
      github: 'https://github.com/angadsdhillon/autodash-os',
      demo: null,
      color: 'from-blue-500 to-cyan-500',
      icon: Car,
      featured: true,
    },
    {
      title: 'MatchIt! Sales Intelligence Dashboard',
      description: 'A sales intelligence platform that merges company and people datasets to identify decision makers and implements custom scoring algorithms for company prioritization.',
      technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Leaflet', 'PapaParse', 'OpenAI API'],
      features: [
        'Built sales intelligence platform with real-time data processing',
        'Merged company and people datasets to identify decision makers',
        'Implemented custom scoring algorithms for company prioritization',
        'Developed front-end with Next.js 14 (App Router) and React 18',
        'Styled responsive UI components using Tailwind CSS',
        'Managed type safety and data models with TypeScript',
        'CSV parsing with PapaParse and analytics visualization with Recharts',
        'Geographic mapping with Leaflet.js and OpenStreetMap',
        'Integrated GPT-powered AI agent for company insights'
      ],
      github: 'https://github.com/angadsdhillon/MatchIt-',
      demo: null,
      color: 'from-purple-500 to-pink-500',
      icon: BarChart3,
      featured: true,
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, interactive personal portfolio website showcasing my skills, projects, and experiences with stunning animations and immersive design. See how this website is made!',
      technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'React Intersection Observer'],
      features: [
        'Built with Next.js 14 App Router for optimal performance and SEO',
        'Interactive dark mode design with glass morphism effects',
        'Smooth scroll animations and hover effects using Framer Motion',
        'Responsive design that works perfectly on all devices',
        'Dynamic PC build showcase with actual photos and hover details',
        'Professional sections for About, Experience, Projects, Skills, and Education',
        'In-app resume viewer with downloadable PDF functionality',
        'Custom gradient text effects and animated background elements',
        'Mouse-following effects and floating icon animations',
        'Optimized for recruiters with clear navigation and professional presentation'
      ],
      github: 'https://github.com/angadsdhillon/Angads-Website',
      demo: null,
      color: 'from-green-500 to-emerald-500',
      icon: Globe,
      featured: true,
    },
  ]

  return (
    <div className="section-padding bg-dark-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my most impactful projects that demonstrate full-stack development, 
            embedded systems, and innovative problem-solving approaches.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-xl hover-glow relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 lg:mb-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300 mb-2">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                            Featured Project
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg transition-all duration-300"
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Settings size={20} />
                      Key Features
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.05 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Code size={20} />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.03 }}
                          className="px-3 py-1 bg-dark-700 text-primary-400 rounded-full text-sm font-medium hover:bg-primary-600 hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              More Projects on GitHub
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Explore my complete portfolio of projects, including smaller experiments, 
              learning projects, and ongoing work. Each project represents a step in my 
              journey of continuous learning and skill development.
            </p>
            <motion.a
              href="https://github.com/angadsdhillon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-dark-700 hover:bg-dark-600 text-white rounded-lg font-semibold transition-all duration-300"
            >
              <Github size={20} />
              View All Projects on GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 