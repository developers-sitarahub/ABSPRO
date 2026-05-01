'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Zap } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Building2,
      title: 'Our Vision',
      description: 'To become a trusted and leading construction company known for quality, innovation, and reliability.',
    },
    {
      icon: Users,
      title: 'Our Mission',
      description: 'To deliver high-quality construction projects that meet client expectations with excellence, safety, and efficiency.',
    },
    {
      icon: Zap,
      title: 'Our Strengths',
      description: 'Experienced team, quality construction with modern design, on-time delivery, and a customer-centric approach.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 text-balance">
            About ABSPRO
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto text-balance">
            Established in 2025, Abspro India LLP is a fast-growing construction and development firm delivering quality construction with a strong commitment to timelines, durability, and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4 order-2 md:order-1"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
              10+ Years of Industry Experience
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              With over 10+ years of collective industry experience, ABSPRO India LLP has successfully completed 100+ residential houses and bungalows. We specialize in residential, commercial, and mixed-use projects, working closely with architects, engineers, and clients.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our operational areas include Ajara, Gadhinglaj, Chandgad, Kolhapur, and Ichalkaranji. We partner with top companies like Swami Samarth Buildcon and Maruti Enterprises to bring modern and functional designs to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-6 order-1 md:order-2"
          >
            {[
              { number: '100+', label: 'Residential Projects' },
              { number: '10+', label: 'Years Experience' },
              { number: '4+', label: 'Partner Companies' },
              { number: '100%', label: 'Quality Assured' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-100 p-3 sm:p-6 rounded-lg text-center hover:bg-orange-50 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 sm:p-6 bg-slate-50 rounded-lg hover:bg-slate-100 hover:shadow-md transition-all border border-slate-200"
              >
                <IconComponent className="w-10 sm:w-12 h-10 sm:h-12 text-orange-600 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
