'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Gradient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-slate-800/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight text-balance"
          >
            Premium{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-orange-600 to-slate-700">
              Building Solutions
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-balance"
          >
            Specializing in residential, commercial, and mixed-use projects, we bring modern and functional designs to life with a strong commitment to timelines, durability, and customer satisfaction.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group shadow-md text-sm sm:text-base"
            >
              View Our Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-100 text-orange-900 rounded-lg font-semibold hover:bg-orange-200 transition-all duration-300 text-sm sm:text-base"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 max-w-3xl mx-auto"
          >
            {[
              { value: '100+', label: 'Projects' },
              { value: '10+', label: 'Years' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-2 sm:p-4">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-orange-600 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
