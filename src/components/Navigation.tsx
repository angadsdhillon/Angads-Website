'use client'

import { motion } from 'framer-motion'
import { Home, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

interface NavigationProps {
  currentSection: string
  setCurrentSection: (section: string) => void
  sections: Array<{ id: string; title: string; component: any }>
}

export default function Navigation({ currentSection, setCurrentSection, sections }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Home Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xl font-bold gradient-text"
            onClick={() => setCurrentSection('home')}
          >
            <Home size={24} />
            <span className="hidden sm:block">Angad Dhillon</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentSection === section.id
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-dark-700'
                }`}
                onClick={() => setCurrentSection(section.id)}
              >
                {section.title}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-2">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-300 ${
                      currentSection === section.id
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-dark-700'
                    }`}
                    onClick={() => {
                      setCurrentSection(section.id)
                      setIsMenuOpen(false)
                    }}
                  >
                    {section.title}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
} 