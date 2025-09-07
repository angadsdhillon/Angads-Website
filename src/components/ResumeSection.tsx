'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, Mail, Phone, MapPin, Linkedin, Github, Calendar, Award, Code, BookOpen, Briefcase, Heart, Dna } from 'lucide-react'

export default function ResumeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'angadsdhillon99@gmail.com' },
    { icon: Phone, label: 'Phone', value: '778-875-1900' },
    { icon: MapPin, label: 'Location', value: 'Vancouver, British Columbia' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/angadsdhillon99' },
    { icon: Github, label: 'GitHub', value: 'github.com/angadsdhillon' },
  ]

  const education = {
    degree: 'Bachelor of Science, Combined Major in Computer Science and Biology',
    institution: 'University of British Columbia',
    location: 'Vancouver, BC',
    period: '2023 - 2027',
    gpa: '3.8/4.0',
    courses: [
      'Data Structures and Algorithms',
      'Algorithm Design and Analysis', 
      'Software Construction',
      'Computer Systems',
      'Software Architecture',
      'Molecular Biology',
      'Biochemistry',
      'Genetics',
      'Bioinformatics'
    ]
  }

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Maximizer Technologies Inc.',
      location: 'Vancouver, BC',
      period: 'Sept 2025 - Present',
      achievements: [
        'Developed and optimized new features for the Maximizer AI CRM for Outlook using TypeScript and Angular, improving addon responsiveness and end-user experience for over 1M global users.',
        'Built and enhanced API-driven integrations to connect CRM workflows with Outlook, enabling seamless data synchronization, reducing errors, and improving overall scalability of client-facing solutions.',
        'Worked closely with the Integration team in an Agile environment, participating in sprint planning, code reviews, and testing to deliver reliable, maintainable, and high-quality releases.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'PIT Solutions',
      location: 'Seattle, WA',
      period: 'May 2025 - August 2025',
      achievements: [
        'Developed client-side sales intelligence tool using Next.js 14 (React, TypeScript), Tailwind CSS, Recharts, and Leaflet to merge and analyze large contact and company datasets, streamlining lead generation enabling sales teams to identify qualified leads 3x faster.',
        'Engineered interactive dashboards and geo-visual reports using both Power BI and custom visual components, highlighting high potential B2B clients by region, company size, and decision-maker roles for targeted outreach.',
        'Collaborated with Sales and Marketing to analyze thousands of records, surfaced actionable insights, and presented findings to C-suite executives, while ensuring data accuracy and clean, maintainable code through thorough testing and best development practices.'
      ]
    },
    {
      title: 'Data Analyst',
      company: 'UBC Faculty of Medicine',
      location: 'Vancouver, BC',
      period: 'Sept 2023 - April 2024',
      achievements: [
        'Developed automated data pipelines using Python, SQL, and MATLAB, optimizing the analysis of 4,000+ experimental data entries, which accelerated research workflows by 30%.',
        'Designed custom statistical models and visualizations in R and MATLAB to uncover protein distribution patterns across five mouse organs, informing key research decisions.',
        'Built data processing scripts to clean, transform, and analyze large datasets, improving data accuracy and reproducibility, leading to more reliable experimental conclusions.'
      ]
    }
  ]

  const projects = [
    {
      title: 'AutoDash OS - Embedded Infotainment System',
      technologies: ['C++', 'Qt6', 'OpenCV', 'CMake', 'Linux', 'BlueZ', 'ALSA', 'I2C'],
      description: 'Built an automotive infotainment system using C++ with Qt6 framework, implementing four core modules (Media Player, Bluetooth, Climate Control, Rear Camera) with real-time sensor simulation and hardware abstraction for embedded systems development.',
      features: [
        'Developed system architecture using Qt6 (Core, Widgets, Multimedia, Network modules) for cross-platform UI',
        'Integrated OpenCV for webcam feed processing and computer vision features',
        'Implemented thread-safe logging with file/console output and comprehensive error handling using GDB debugging integration',
        'Engineered low-level interface simulations including I2C sensor data generation, USB device monitoring, Bluetooth device discovery and pairing, and ALSA audio integration'
      ]
    },
    {
      title: 'MatchIt! Sales Intelligence Dashboard',
      technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Leaflet', 'PapaParse', 'OpenAI API'],
      description: 'Built a sales intelligence platform, implementing real-time data processing to merge company and people datasets to identify decision makers and implemented custom scoring algorithms for company prioritization.',
      features: [
        'Developed the front-end with Next.js 14 (App Router) and React 18, styled responsive UI components using Tailwind CSS',
        'Managed type safety and data models with TypeScript',
        'Implemented CSV parsing with PapaParse, visualized analytics using Recharts and Leaflet.js + OpenStreetMap for geographic mapping with clustering algorithms',
        'Integrated a GPT-powered AI agent to answer user questions about companies in the dataset'
      ]
    }
  ]

  const skills = {
    languages: ['Java', 'C', 'C++', 'C#', 'R', 'SQL', 'Swift', 'Assembly', 'Python', 'CSS', 'HTML', 'JavaScript', 'TypeScript'],
    frameworks: ['JUnit / unittest', 'Firebase', 'ReactJS', 'NodeJS', 'Docker', 'Swing', 'Tailwind', 'Next.js', 'Qt6', 'OpenCV', 'CMake'],
    tools: ['Git / GitHub', 'Android Studio', 'GitLab CI / CD', 'Linux', 'Firestore', 'Jira', 'MATLAB', 'Jupyter', 'Power BI', 'GDB', 'Catch2']
  }

  const volunteer = [
    {
      title: 'Medical First Responder',
      organization: 'St. Johns Ambulance',
      location: 'Surrey, British Columbia',
      period: 'Aug 2022 - Current',
      description: 'Provide emergency medical assistance in various events across BC. Collaborate and communicate with a team of paramedics, nurses, and doctors to ensure safety at various events.'
    },
    {
      title: 'Health and Wellness Coordinator',
      organization: 'UBC',
      location: 'Vancouver, British Columbia',
      period: 'Sept 2022 - Sept 2023',
      description: 'Created posters and advertisements to publicize events and increase participation. Collaborated with a team of ten to create and facilitate events for students to stimulate health and wellness.'
    }
  ]

                const handleDownload = () => {
                const link = document.createElement('a')
                link.href = '/resume.pdf'
                link.download = 'Angad_Dhillon_Resume.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }

  return (
    <div className="section-padding bg-dark-950">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Resume
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            My professional experience, education, and technical skills in software engineering and computer science.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 mx-auto"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Mail size={24} className="text-primary-400" />
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <info.icon size={20} className="text-primary-400" />
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase size={24} className="text-primary-400" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{job.title}</h4>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={16} />
                        {job.period}
                      </div>
                    </div>
                    <p className="text-primary-400 font-medium mb-1">{job.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{job.location}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Code size={24} className="text-primary-400" />
                Featured Projects
              </h3>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-accent-500 pl-6">
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-dark-700 text-primary-400 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 text-xs leading-relaxed flex items-start gap-2">
                          <span className="text-accent-400 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen size={24} className="text-primary-400" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white">{education.degree}</h4>
                  <p className="text-primary-400 font-medium">{education.institution}</p>
                  <p className="text-gray-400 text-sm">{education.location}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                    <Calendar size={16} />
                    {education.period}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                    <Award size={16} />
                    GPA: {education.gpa}
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-2">Relevant Coursework:</h5>
                  <div className="grid grid-cols-1 gap-1">
                    {education.courses.map((course, index) => (
                      <span key={index} className="text-gray-300 text-xs">• {course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Code size={24} className="text-primary-400" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((lang, index) => (
                      <span key={index} className="px-3 py-1 bg-dark-700 text-primary-400 text-xs rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((framework, index) => (
                      <span key={index} className="px-3 py-1 bg-dark-700 text-accent-400 text-xs rounded-full">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Developer Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-dark-700 text-green-400 text-xs rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Volunteer */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Heart size={24} className="text-primary-400" />
                Volunteer Experience
              </h3>
              <div className="space-y-4">
                {volunteer.map((role, index) => (
                  <div key={index} className="border-l-4 border-pink-500 pl-4">
                    <h4 className="text-white font-semibold">{role.title}</h4>
                    <p className="text-primary-400 text-sm">{role.organization}</p>
                    <p className="text-gray-400 text-xs">{role.location}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-xs mt-1">
                      <Calendar size={14} />
                      {role.period}
                    </div>
                    <p className="text-gray-300 text-xs mt-2 leading-relaxed">{role.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 