'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, ExternalLink, TrendingUp, Database, Code, BarChart3 } from 'lucide-react'

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'Maximizer Technologies Inc.',
      position: 'Software Engineer',
      location: 'Vancouver, BC',
      period: 'Sept 2025 – Present',
      description: 'Contributed to the development of Maximizer\'s AI-powered CRM Outlook Addon and frontend integrations, improving usability, performance, and data synchronization for enterprise customers.',
      achievements: [
        'Developed and optimized new features for the Maximizer AI CRM for Outlook using TypeScript and Angular, improving addon responsiveness and end-user experience for over 1M global users.',
        'Built and enhanced API-driven integrations to connect CRM workflows with Outlook, enabling seamless data synchronization, reducing errors, and improving overall scalability of client-facing solutions.',
        'Worked closely with the Integration team in an Agile environment, participating in sprint planning, code reviews, and testing to deliver reliable, maintainable, and high-quality releases.'
      ],
      technologies: ['TypeScript', 'Angular', 'REST APIs', 'Agile / Scrum'],
      color: 'from-green-500 to-emerald-500',
      icon: Code,
    },
    {
      company: 'PIT Solutions',
      position: 'Software Engineer',
      location: 'Seattle, WA',
      period: 'May 2025 – August 2025',
      description: 'Developing client-side sales intelligence tools and interactive dashboards for lead generation and B2B client analysis.',
      achievements: [
        'Developed client-side sales intelligence tool using Next.js 14 (React, TypeScript), Tailwind CSS, Recharts, and Leaflet to merge and analyze large contact and company datasets, streamlining lead generation enabling sales teams to identify qualified leads 3x faster.',
        'Engineered interactive dashboards and geo-visual reports using both Power BI and custom visual components, highlighting high potential B2B clients by region, company size, and decision-maker roles for targeted outreach.',
        'Collaborated with Sales and Marketing to analyze thousands of records, surfaced actionable insights, and presented findings to C-suite executives, while ensuring data accuracy and clean, maintainable code through thorough testing and best development practices.'
      ],
      technologies: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Leaflet', 'Power BI'],
      color: 'from-blue-500 to-cyan-500',
      icon: Code,
    },
    {
      company: 'UBC Faculty of Medicine',
      position: 'Data Analyst',
      location: 'Vancouver, BC',
      period: 'Sept 2023 – April 2024',
      description: 'Developed automated data pipelines and statistical models for medical research data analysis.',
      achievements: [
        'Developed automated data pipelines using Python, SQL, and MATLAB, optimizing the analysis of 4,000+ experimental data entries, which accelerated research workflows by 30%.',
        'Designed custom statistical models and visualizations in R and MATLAB to uncover protein distribution patterns across five mouse organs, informing key research decisions.',
        'Built data processing scripts to clean, transform, and analyze large datasets, improving data accuracy and reproducibility, leading to more reliable experimental conclusions.'
      ],
      technologies: ['Python', 'SQL', 'MATLAB', 'R', 'Data Analysis', 'Statistical Modeling'],
      color: 'from-purple-500 to-pink-500',
      icon: Database,
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
            Work Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey combines software engineering with data analysis, 
            creating impactful solutions that drive business growth and scientific discovery.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-xl hover-glow relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${experience.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <experience.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-400 font-semibold">
                          <Briefcase size={16} />
                          {experience.company}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-lg">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <TrendingUp size={20} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, idx) => (
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
                      <BarChart3 size={20} />
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
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

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Professional Growth
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              From data analysis in medical research to full-stack software engineering, 
              I've developed a versatile skill set that combines technical expertise with business acumen. 
              My experience spans both academic research and industry applications, 
              allowing me to approach problems with a unique perspective and deliver impactful solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 