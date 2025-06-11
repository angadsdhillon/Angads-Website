'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Wrench, Star, TrendingUp } from 'lucide-react'

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Java', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'C++', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'Python', level: 88, color: 'from-yellow-500 to-orange-500' },
        { name: 'C', level: 80, color: 'from-blue-600 to-blue-800' },
        { name: 'C#', level: 75, color: 'from-purple-500 to-pink-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 82, color: 'from-blue-500 to-blue-700' },
        { name: 'R', level: 78, color: 'from-blue-400 to-blue-600' },
        { name: 'SQL', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Swift', level: 70, color: 'from-orange-500 to-red-600' },
        { name: 'Assembly', level: 65, color: 'from-gray-500 to-gray-700' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-pink-500' },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: [
        { name: 'ReactJS', level: 88, color: 'from-blue-400 to-cyan-400' },
        { name: 'Next.js', level: 85, color: 'from-gray-500 to-gray-700' },
        { name: 'NodeJS', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'Qt6', level: 75, color: 'from-green-400 to-green-600' },
        { name: 'OpenCV', level: 70, color: 'from-blue-500 to-blue-700' },
        { name: 'Firebase', level: 78, color: 'from-yellow-500 to-orange-500' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'Tailwind', level: 90, color: 'from-cyan-400 to-blue-500' },
        { name: 'JUnit/unittest', level: 85, color: 'from-green-500 to-green-700' },
        { name: 'Swing', level: 70, color: 'from-orange-500 to-red-500' },
        { name: 'CMake', level: 72, color: 'from-blue-500 to-blue-700' },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      skills: [
        { name: 'Git/GitHub', level: 92, color: 'from-gray-600 to-gray-800' },
        { name: 'Android Studio', level: 75, color: 'from-green-500 to-green-700' },
        { name: 'GitLab CI/CD', level: 70, color: 'from-orange-500 to-red-500' },
        { name: 'Linux', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Firestore', level: 78, color: 'from-yellow-500 to-orange-500' },
        { name: 'Jira', level: 80, color: 'from-blue-500 to-blue-700' },
        { name: 'MATLAB', level: 82, color: 'from-orange-500 to-red-500' },
        { name: 'Jupyter', level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'Power BI', level: 75, color: 'from-yellow-500 to-orange-500' },
        { name: 'GDB', level: 70, color: 'from-red-500 to-red-700' },
        { name: 'Catch2', level: 68, color: 'from-blue-500 to-blue-700' },
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <div className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and development tools 
            that enable me to tackle diverse technical challenges and build innovative solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-xl hover-glow">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                      className="group/skill"
                    >
                      <div className="bg-dark-800 p-4 rounded-lg hover:bg-dark-700 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white font-medium">{skill.name}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.05 + 0.3 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-effect p-6 rounded-xl text-center">
              <TrendingUp className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Versatile</h3>
              <p className="text-gray-300 text-sm">
                Proficient across multiple programming paradigms and technology stacks
              </p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl text-center">
              <Code className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Full-Stack</h3>
              <p className="text-gray-300 text-sm">
                Experience with frontend, backend, and embedded systems development
              </p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl text-center">
              <Wrench className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Adaptable</h3>
              <p className="text-gray-300 text-sm">
                Quick to learn new technologies and adapt to different development environments
              </p>
            </div>
          </div>
        </motion.div>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in staying current with the latest technologies and best practices. 
              My skill set is constantly evolving as I explore new frameworks, languages, and tools. 
              This adaptability allows me to choose the right technology for each project and 
              deliver optimal solutions that meet modern development standards.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 