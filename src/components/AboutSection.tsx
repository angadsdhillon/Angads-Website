'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plane, Code, Cpu, Camera, Database, Heart } from 'lucide-react'

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
        <div className="grid md:grid-cols-3 gap-8">
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