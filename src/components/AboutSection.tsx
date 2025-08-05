'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plane, Code, Cpu, Camera, Database, Heart, Settings, Zap } from 'lucide-react'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const interests = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'I code for fun and have created many projects listed on my resume and GitHub. I enjoy building innovative solutions and learning new technologies to expand my programming capabilities.',
      color: 'from-green-500 to-emerald-500',
      delay: 0.1,
    },
    {
      icon: Cpu,
      title: 'Computer Hardware',
      description: 'I love everything from computer hardware to software. I spend time learning and building my skills, with a passion for PC building. I build PCs from scratch and handle everything from OS installation to driver updates and fixing problematic systems.',
      color: 'from-purple-500 to-pink-500',
      delay: 0.2,
    },
    {
      icon: Plane,
      title: 'Aviation Enthusiast',
      description: 'Passionate about airplanes since childhood. I study the physics and systems behind aircraft, photograph them as a hobby, and have memorized virtually every commercial airplane and airline. I also collect model airplanes.',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.3,
    },
  ]

  const stats = [
    { label: 'Projects Created', value: '10+', icon: Code },
    { label: 'PCs Built', value: '10+', icon: Cpu },
    { label: 'Volunteer Hours', value: '2500+', icon: Heart },
    { label: 'Years of Aviation Interest', value: '21+', icon: Plane},
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
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a Computer Science and Biology student at UBC with a unique combination of technical skills and diverse interests. 
            My passion for aviation, computers, and community service drives me to create innovative solutions that make a difference.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-effect p-6 rounded-xl text-center hover-glow group"
            >
              <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: interest.delay }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-xl h-full hover-glow relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${interest.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <interest.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                    {interest.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PC Build Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Settings className="w-8 h-8 text-primary-400" />
              <h3 className="text-3xl font-bold gradient-text">My Latest PC Build</h3>
              <Zap className="w-8 h-8 text-accent-400" />
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of my latest custom PC build featuring premium components and stunning RGB aesthetics
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Progress Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-2">Progress</h4>
                <p className="text-gray-400">Building process and component assembly</p>
              </div>
              
              <div className="space-y-4">
                {/* Progress Photo 1 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-xl overflow-hidden hover-glow"
                >
                  <div className="relative group">
                                         <img 
                       src="/IMG_0006.jpg" 
                       alt="PC Build Progress - Motherboard with CPU and RAM installed"
                       className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium">ASUS TUF Gaming B650-E WIFI</p>
                      <p className="text-gray-300 text-xs">AMD Ryzen 7 7800X3D + T-FORCE RAM</p>
                    </div>
                  </div>
                </motion.div>

                {/* Progress Photo 2 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-xl overflow-hidden hover-glow"
                >
                  <div className="relative group">
                                         <img 
                       src="/IMG_0014.jpg" 
                       alt="PC Build Progress - Internal view with components installed"
                       className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium">Component Installation</p>
                      <p className="text-gray-300 text-xs">THERMALRIGHT AIO + Case Fans</p>
                    </div>
                  </div>
                </motion.div>

                {/* Progress Photo 3 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-xl overflow-hidden hover-glow"
                >
                  <div className="relative group">
                                         <img 
                       src="/IMG_0016.jpg" 
                       alt="PC Build Progress - Top view with components"
                       className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium">Build Assembly</p>
                      <p className="text-gray-300 text-xs">Component layout and cable management</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Finished PC Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-2">Finished PC</h4>
                <p className="text-gray-400">Complete build with stunning RGB lighting</p>
              </div>
              
              <div className="space-y-4">
                {/* Finished PC Photo */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-xl overflow-hidden hover-glow"
                >
                  <div className="relative group">
                                         <img 
                       src="/IMG_0064.jpg" 
                       alt="Finished PC Build with Pink/Purple RGB Lighting"
                       className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium">RGB Masterpiece</p>
                      <p className="text-gray-300 text-xs">Pink & Purple LED Configuration</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Build Specs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8"
          >
            <div className="glass-effect p-6 rounded-xl">
              <h5 className="text-xl font-bold text-white mb-4 text-center">Build Specifications</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-primary-400 font-semibold">CPU</p>
                  <p className="text-gray-300 text-sm">AMD Ryzen 7 7800X3D</p>
                </div>
                <div>
                  <p className="text-primary-400 font-semibold">Motherboard</p>
                  <p className="text-gray-300 text-sm">ASUS TUF Gaming B650-E WIFI</p>
                </div>
                <div>
                  <p className="text-primary-400 font-semibold">RAM</p>
                  <p className="text-gray-300 text-sm">T-FORCE DDR5</p>
                </div>
                <div>
                  <p className="text-primary-400 font-semibold">Cooling</p>
                  <p className="text-gray-300 text-sm">THERMALRIGHT AIO</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              My Mission
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in the power of technology to solve real-world problems and improve lives. 
              My unique background in both computer science and biology allows me to approach problems from multiple perspectives, 
              while my passion for aviation and community service keeps me grounded in practical applications. 
              I'm constantly learning, building, and contributing to make a positive impact in the world.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 