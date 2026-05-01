'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function ProjectsGallery() {

  const projects = [
    { id: 1, image: '/projects/project-1.jpeg', title: 'Residential & Commercial Complex', category: 'Mixed-Use' },
    { id: 2, image: '/projects/project-2.jpeg', title: 'Modern Bungalow Design', category: 'Residential' },
    { id: 3, image: '/projects/project-3.jpeg', title: 'Contemporary G+2 Residence', category: 'Residential' },
    { id: 4, image: '/projects/project-4.jpeg', title: 'Laterite Stone Bungalow', category: 'Residential' },
    { id: 5, image: '/projects/project-5.jpeg', title: 'Site Landscaping Work', category: 'Landscaping' },
    { id: 6, image: '/projects/project-6.jpeg', title: 'Compact Urban Residence', category: 'Residential' },
    { id: 7, image: '/projects/project-7.jpeg', title: 'Classic Portico Bungalow', category: 'Residential' },
    { id: 8, image: '/projects/project-8.jpeg', title: 'Premium Row Houses', category: 'Residential' },
    { id: 9, image: '/projects/project-9.jpeg', title: '3D Isometric Floor Plan', category: 'Interior' },
    { id: 10, image: '/projects/project-10.jpeg', title: 'Luxury Villa Elevation', category: 'Luxury' },
    { id: 11, image: '/projects/project-11.jpeg', title: 'Villa Under Construction', category: 'Ongoing' },
    { id: 12, image: '/projects/project-12.jpeg', title: 'Modern Facade Detailing', category: 'Architecture' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="py-20 bg-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Our Portfolio
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our collection of exceptional architectural projects showcasing innovation,
            quality, and excellence across residential and commercial spaces.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative h-64 sm:h-80 rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-end justify-end p-4 sm:p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="text-white">
                    <p className="text-xs sm:text-sm font-semibold text-orange-300 mb-2">{project.category}</p>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">{project.title}</h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Request a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
