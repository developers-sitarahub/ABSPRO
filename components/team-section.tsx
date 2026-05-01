'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

export function TeamSection() {
  const directors = [
    {
      name: 'Mr. Abhijeet Maruti Phadake',
      role: 'Director',
      email: 'abhiphadake01@gmail.com',
      phone: '8446566926',
    },
    {
      name: 'Mr. Pankaj Suresh Vaskar',
      role: 'Director',
      email: 'pankajvaskar10@gmail.com',
      phone: '8652085335',
    },
    {
      name: 'Mr. Srikant Kallappa Patil',
      role: 'Director',
      email: 'srikant@yahoo.com',
      phone: '9527973969',
    },
    {
      name: 'Mr. Ronit Ranjeet Saveker',
      role: 'Director',
      email: 'ronitsavekar0@gmsil.com',
      phone: '9511226197',
    },
  ]

  const technicalTeam = [
    {
      name: 'Er. Rushikesh Bagilekar',
      role: 'Site Engineer',
      bio: '5+ years experience in site supervision',
    },
    {
      name: 'Er. Sainath Patil',
      role: 'Site Engineer',
      bio: '7+ years experience in site supervision',
    },
    {
      name: 'Er. Swapnil Konduskar',
      role: 'Site Engineer',
      bio: '6+ years experience in site supervision',
    },
  ]

  const nonTechnicalTeam = [
    {
      name: 'Sandip Giri',
      role: 'Supervisor',
      bio: '6+ years experience',
    },
    {
      name: 'Subhash Zarpala',
      role: 'Supervisor',
      bio: '5+ years experience',
    },
    {
      name: 'Aditya Dalvi',
      role: 'Accountant',
      bio: '4+ years experience as Accountant',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="team" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 text-balance">
            Meet Our Leadership & Team
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Our experienced professionals are dedicated to delivering exceptional results with quality and reliability.
          </p>
        </motion.div>

        {/* Directors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Directors</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {directors.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-orange-600 flex flex-col justify-between"
              >
                <div className="text-center mb-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-orange-600 font-semibold text-sm">{member.role}</p>
                </div>
                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-xs text-slate-700 font-medium"
                  >
                    <Mail size={14} />
                    Email
                  </a>
                  <a
                    href={`tel:+91${member.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition-colors text-xs font-semibold"
                  >
                    <Phone size={14} />
                    Call
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Technical Team</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {technicalTeam.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 text-center"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-orange-600 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Non-Technical Team Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Non-Technical Team</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {nonTechnicalTeam.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 text-center"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-orange-600 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
