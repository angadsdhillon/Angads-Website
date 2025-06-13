'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, BookOpen, Calendar, MapPin, Award, Brain } from 'lucide-react'

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = {
    institution: 'University of British Columbia',
    degree: 'Bachelor of Science, Combined Major in Computer Science and Biology',
    location: 'Vancouver, BC',
    period: '2023 - 2027',
    gpa: '3.8/4.0',
    description: 'Pursuing a unique interdisciplinary degree that combines computational thinking with biological sciences, preparing me for careers at the intersection of technology and life sciences.',
  }

  const courseCategories = [
    {
      title: 'Computer Science Core',
      courses: [
        'Data Structures and Algorithms',
        'Algorithm Design and Analysis',
        'Software Construction',
        'Computer Systems',
        'Software Architecture',
        'Object-Oriented Programming',
        'Computer Organization',
        'Discrete Mathematics',
        'Calculus I & II',
        'Linear Algebra',
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: Brain,
    },
    {
      title: 'Biology Core',
      courses: [
        'Cell Biology',
        'Genetics',
        'Molecular Biology',
        'Biochemistry',
        'Microbiology',
        'Evolutionary Biology',
        'Ecology',
        'Human Physiology',
        'Biostatistics',
        'Bioinformatics',
      ],
      color: 'from-green-500 to-emerald-500',
      icon: BookOpen,
    },
    {
      title: 'Advanced & Specialized',
      courses: [
        'Machine Learning',
        'Database Systems',
        'Computer Networks',
        'Operating Systems',
        'Software Engineering',
        'Bioinformatics Algorithms',
        'Computational Biology',
        'Systems Biology',
        'Research Methods',
        'Technical Writing',
      ],
      color: 'from-purple-500 to-pink-500',
      icon: Award,
    },
  ]

  const achievements = [
    'Dean\'s List Recognition',
    'Academic Excellence Scholarship',
    'Research Assistant Position',
    'Peer Tutoring Program',
    'Science Undergraduate Society Member',
    'Computer Science Student Society',
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
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive academic foundation that bridges computer science and biology, 
            providing me with unique insights and problem-solving approaches.
          </p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass-effect p-8 rounded-xl hover-glow">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex items-start gap-4 mb-4 lg:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {education.institution}
                  </h3>
                  <p className="text-lg text-primary-400 font-semibold mb-2">
                    {education.degree}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {education.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      GPA: {education.gpa}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              {education.description}
            </p>
          </div>
        </motion.div>

        {/* Course Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courseCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="glass-effect p-6 rounded-xl h-full hover-glow">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {category.courses.map((course, courseIndex) => (
                    <motion.li
                      key={course}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + courseIndex * 0.02 }}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{course}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Academic Achievements & Involvement
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                  className="flex items-center gap-2 p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-all duration-300"
                >
                  <Award className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="glass-effect p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Academic Vision
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              My interdisciplinary education uniquely positions me to bridge the gap between computational 
              and biological sciences. I'm passionate about applying software engineering principles to 
              solve complex biological problems, whether through bioinformatics, computational biology, 
              or developing tools that advance scientific research. This combination of skills opens doors 
              to innovative career paths in biotechnology, healthcare technology, and research.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 