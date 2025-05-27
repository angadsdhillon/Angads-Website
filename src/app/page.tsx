'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import EducationSection from '@/components/EducationSection'
import VolunteerSection from '@/components/VolunteerSection'
import BiologySection from '@/components/BiologySection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const sections = [
    { id: 'about', title: 'About Me', component: AboutSection },
    { id: 'experience', title: 'Experience', component: ExperienceSection },
    { id: 'projects', title: 'Projects', component: ProjectsSection },
    { id: 'skills', title: 'Skills', component: SkillsSection },
    { id: 'education', title: 'Education', component: EducationSection },
    { id: 'volunteer', title: 'Volunteer', component: VolunteerSection },
    { id: 'biology', title: 'Biology', component: BiologySection },
    { id: 'contact', title: 'Contact', component: ContactSection },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold gradient-text">Angad Dhillon</h1>
          <p className="text-gray-400 mt-2">Loading Portfolio...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} sections={sections} />
      
      <AnimatePresence mode="wait">
        {currentSection === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection setCurrentSection={setCurrentSection} sections={sections} />
          </motion.div>
        ) : (
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-20"
          >
            {sections.map((section) => {
              if (section.id === currentSection) {
                const SectionComponent = section.component
                return <SectionComponent key={section.id} />
              }
              return null
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 