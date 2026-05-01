'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Eye } from 'lucide-react'

export function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    { id: 1, image: '/projects/project-1.jpg', title: 'Modern Luxury Villa', category: 'Residential' },
    { id: 2, image: '/projects/project-2.jpg', title: 'Contemporary Home', category: 'Residential' },
    { id: 3, image: '/projects/project-3.jpg', title: 'Multi-Story Residence', category: 'Residential' },
    { id: 4, image: '/projects/project-4.jpg', title: 'Beachfront Estate', category: 'Luxury' },
    { id: 5, image: '/projects/project-5.jpg', title: 'Modern Villa Night View', category: 'Luxury' },
    { id: 6, image: '/projects/project-6.jpg', title: 'Green Building Design', category: 'Eco-Friendly' },
    { id: 7, image: '/projects/project-7.jpg', title: 'Premium Interior Space', category: 'Interior' },
    { id: 8, image: '/projects/project-8.jpg', title: 'Luxury Kitchen Design', category: 'Interior' },
    { id: 9, image: '/projects/project-9.jpg', title: 'Complex Residential Block', category: 'Commercial' },
    { id: 10, image: '/projects/project-10.jpg', title: 'Brick & Modern Villa', category: 'Residential' },
    { id: 11, image: '/projects/project-11.jpg', title: 'Apartment Complex', category: 'Commercial' },
    { id: 12, image: '/projects/project-12.jpg', title: 'Modern Mixed Spaces', category: 'Residential' },
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
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-900 text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors"
                    >
                      <Eye size={16} />
                      View Project
                    </button>
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
