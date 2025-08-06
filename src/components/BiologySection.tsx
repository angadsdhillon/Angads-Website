'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Dna, Microscope, TestTube, BookOpen, Calendar, MapPin, Award, Code } from 'lucide-react'

export default function BiologySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const biologyProjects = [
    {
      title: 'Bioinformatics Project - YGR221C (TOS2) Gene Analysis',
      location: 'Vancouver, British Columbia',
      period: 'Sept 2024 – Dec 2024',
      description: 'Comprehensive analysis of the YGR221C (TOS2) gene to propose its function as a transmembrane protein involved in cell cycle regulation.',
      achievements: [
        'Analyzed the YGR221C (TOS2) gene to propose its function as a transmembrane protein involved in cell cycle regulation',
        'Conducted sequence alignments, conserved domain analysis, and phylogenetic studies using tools like NCBI BLAST and COBALT',
        'Designed and presented experimental strategies to test hypotheses, including GFP tagging and localization studies',
        'Applied computational biology techniques to predict protein structure and function',
        'Utilized bioinformatics databases and tools for comprehensive gene analysis'
      ],
      technologies: ['NCBI BLAST', 'COBALT', 'Bioinformatics Tools', 'Sequence Analysis', 'Phylogenetics', 'Protein Structure Prediction'],
      color: 'from-green-500 to-emerald-500',
      icon: Dna,
      type: 'Research Project',
    },
    {
      title: 'Cloning Project - T7 Promoter GFP Expression',
      location: 'Vancouver, British Columbia',
      period: 'Sept 2024 – Dec 2024',
      description: 'Designed and executed a cloning experiment to test if the T7 promoter from pGEM-T can drive GFP expression in pGFP-S12.',
      achievements: [
        'Designed and executed a cloning experiment to test if the T7 promoter from pGEM-T can drive GFP expression in pGFP-S12',
        'Used molecular techniques such as primer design, PCR amplification, restriction digestion, and ligation to construct the plasmid',
        'Optimized experimental conditions and analyzed GFP expression as a reporter of plasmid functionality',
        'Applied molecular biology techniques for gene cloning and expression analysis',
        'Conducted laboratory experiments following proper protocols and safety procedures'
      ],
      technologies: ['PCR', 'Restriction Digestion', 'Ligation', 'Molecular Cloning', 'GFP Expression', 'Plasmid Construction'],
      color: 'from-blue-500 to-cyan-500',
      icon: TestTube,
      type: 'Laboratory Project',
    },
  ]

  const biologySkills = [
    {
      category: 'Molecular Biology',
      skills: ['PCR', 'DNA Cloning', 'Restriction Digestion', 'Ligation', 'Gel Electrophoresis', 'Plasmid Construction'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Bioinformatics',
      skills: ['Sequence Analysis', 'BLAST', 'Phylogenetics', 'Protein Structure Prediction', 'Database Mining', 'Statistical Analysis'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Laboratory Techniques',
      skills: ['Cell Culture', 'Microscopy', 'Protein Analysis', 'Enzyme Assays', 'Safety Protocols', 'Data Recording'],
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const researchAreas = [
    'Gene Function Analysis',
    'Protein Structure Prediction',
    'Molecular Cloning',
    'Bioinformatics',
    'Cell Biology',
    'Genetics',
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
            Biology & Research Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combining computational and experimental approaches to solve complex biological problems 
            through innovative research projects and laboratory experience.
          </p>
        </motion.div>

        {/* Projects Section */}
        <div className="space-y-12 mb-16">
          {biologyProjects.map((project, index) => (
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
                        <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-2">
                          {project.type}
                        </span>
                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {project.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {project.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Award size={20} />
                      Key Accomplishments
                    </h4>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Code size={20} />
                      Techniques & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.05 }}
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

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Biology Skills & Techniques
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {biologySkills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="glass-effect p-6 rounded-xl h-full hover-glow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                      <Microscope className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                      {category.category}
                    </h4>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Research Areas of Interest
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.05 }}
                  className="flex items-center gap-2 p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Integration Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="glass-effect p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bridging Computer Science & Biology
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              My unique combination of computer science and biology education allows me to approach 
              biological problems with computational thinking. I can develop software tools for data analysis, 
              create algorithms for sequence processing, and apply machine learning techniques to biological datasets. 
              This interdisciplinary approach enables me to contribute to cutting-edge research in bioinformatics, 
              computational biology, and biotechnology, where the intersection of these fields is driving innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 