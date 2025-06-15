'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Calendar, MapPin, Users, Award, Activity } from 'lucide-react'

export default function VolunteerSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const volunteerExperiences = [
    {
      organization: 'St. Johns Ambulance',
      position: 'Medical First Responder',
      location: 'Surrey, British Columbia',
      period: 'Aug 2022 – Current',
      description: 'Providing emergency medical assistance and collaborating with healthcare professionals to ensure safety at various events across BC.',
      achievements: [
        'Provide emergency medical assistance in various events across BC',
        'Collaborate and communicate with a team of paramedics, nurses, and doctors to ensure safety at various events',
        'Keep up to date and train weekly to respond to various medical conditions in emergency situations effectively and efficiently'
      ],
      color: 'from-red-500 to-pink-500',
      icon: Heart,
      hours: '500+',
    },
    {
      organization: 'Dental Practice',
      position: 'Shadowing Experience with Dentist',
      location: 'Surrey, British Columbia',
      period: 'July 2022 – Current',
      description: 'Gaining hands-on experience in dental procedures and patient care through direct observation and learning.',
      achievements: [
        'Observed various medical procedures and learned to interpret x-rays of patients alongside dentist',
        'Briefed by dentist daily, regarding the medical procedure to be performed, and why it is necessary'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: Activity,
      hours: '200+',
    },
    {
      organization: 'Adesh Medical College & Hospital',
      position: 'International Hospital Volunteer',
      location: 'Ambala, India',
      period: 'May 2024',
      description: 'Provided compassionate care and support to underprivileged patients while gaining valuable medical experience.',
      achievements: [
        'Assisted medical staff in providing basic care and support to underprivileged patients for 2 weeks, ensuring a compassionate and empathetic environment',
        'Shadowed surgeons during procedures to gain insights into surgical techniques and patient care',
        'Provided mental health support to pediatric patients, promoting emotional resilience during treatment'
      ],
      color: 'from-green-500 to-emerald-500',
      icon: Users,
      hours: '80',
    },
    {
      organization: 'UBC',
      position: 'Health and Wellness Coordinator',
      location: 'Vancouver, British Columbia',
      period: 'Sept 2022 – Sept 2023',
      description: 'Promoting health and wellness initiatives for the student community through event planning and coordination.',
      achievements: [
        'Created posters and advertisements to publicize events and increase participation',
        'Collaborated with a team of ten to create and facilitate events for students to stimulate health and wellness'
      ],
      color: 'from-purple-500 to-pink-500',
      icon: Award,
      hours: '300+',
    },
    {
      organization: 'Cherington Place',
      position: 'Nursing Home Volunteer',
      location: 'Surrey, British Columbia',
      period: 'Nov 2017 – April 2021',
      description: 'Providing companionship and support to elderly residents while assisting with daily activities and wellness programs.',
      achievements: [
        'Accompanied residents to social or recreation events to help maintain independence and social life',
        'Helped staff fulfill daily activities of organization to promote health and well-being of residents',
        'Led exercises with large residents\' groups with dementia and other cognitive disabilities to increase motor and sensory skills and memory stimulation'
      ],
      color: 'from-orange-500 to-red-500',
      icon: Heart,
      hours: '1000+',
    },
  ]

  const stats = [
    { label: 'Total Volunteer Hours', value: '2000+', icon: Calendar },
    { label: 'Organizations Served', value: '5+', icon: Users },
    { label: 'Years of Service', value: '6+', icon: Award },
    { label: 'Communities Impacted', value: '3', icon: MapPin },
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
            Volunteer Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dedicated to making a positive impact in my community through healthcare, 
            education, and social service initiatives.
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

        {/* Volunteer Experiences */}
        <div className="space-y-8">
          {volunteerExperiences.map((experience, index) => (
            <motion.div
              key={experience.organization}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-xl hover-glow relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 lg:mb-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${experience.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <experience.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300 mb-1">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-400 font-semibold mb-2">
                          <Users size={16} />
                          {experience.organization}
                        </div>
                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {experience.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Award size={14} />
                            {experience.hours} hours
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Award size={20} />
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.1 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Commitment to Community Service
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              My volunteer experiences have taught me the importance of empathy, teamwork, and dedication to serving others. 
              Whether providing emergency medical care, supporting elderly residents, or coordinating wellness programs, 
              I've developed strong interpersonal skills and a deep understanding of community needs. 
              These experiences have shaped my character and reinforced my commitment to making a positive impact 
              in everything I do, both professionally and personally.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 