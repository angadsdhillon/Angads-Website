'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Download, Eye, Plane, Code, Heart, Brain } from 'lucide-react'

interface HeroSectionProps {
  setCurrentSection: (section: string) => void
  sections: Array<{ id: string; title: string; component: any }>
}

export default function HeroSection({ setCurrentSection, sections }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingIcons = [
    { icon: Plane, delay: 0, x: 10, y: 20 },
    { icon: Code, delay: 0.5, x: 80, y: 60 },
    { icon: Heart, delay: 1, x: 20, y: 80 },
    { icon: Brain, delay: 1.5, x: 70, y: 30 },
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(217, 70, 239, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary-400/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3], 
            scale: [1, 1.2, 1],
            x: [item.x, item.x + 20, item.x],
            y: [item.y, item.y - 20, item.y],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            delay: item.delay,
            ease: "easeInOut" 
          }}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
        >
          <item.icon size={40} />
        </motion.div>
      ))}

      {/* Mouse Follow Effect */}
      <motion.div
        className="absolute w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Angad Dhillon
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Software Engineer & Computer Science Student at UBC
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Passionate about aviation, coding, and community service. 
            Building innovative solutions that bridge technology and biology.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(14, 165, 233, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300"
            onClick={() => setCurrentSection('resume')}
          >
            <Eye size={20} />
            View Resume
          </motion.button>
          
                     <motion.button
             whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(217, 70, 239, 0.5)" }}
             whileTap={{ scale: 0.95 }}
             className="flex items-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-semibold transition-all duration-300"
             onClick={() => {
               const link = document.createElement('a')
               link.href = '/resume.pdf'
               link.download = 'Angad_Dhillon_Resume.pdf'
               document.body.appendChild(link)
               link.click()
               document.body.removeChild(link)
             }}
           >
             <Download size={20} />
             Download Resume
           </motion.button>
        </motion.div>

        {/* Navigation Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {sections.filter(section => section.id !== 'resume').map((section, index) => (
            <motion.button
              key={section.id}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 0 25px rgba(14, 165, 233, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect p-6 rounded-xl hover-glow group"
              onClick={() => setCurrentSection(section.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5 + index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all duration-300">
                {section.title}
              </h3>
              <div className="w-8 h-1 bg-primary-500 rounded-full mx-auto mt-2 group-hover:w-12 transition-all duration-300" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  )
} 