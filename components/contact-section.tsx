'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, User } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    )

    window.location.href = `mailto:abhiphadake01@gmail.com,absproindiallp@gmail.com?subject=${subject}&body=${body}`

    setFormData({ name: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 text-balance">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            Ready to start your project? Reach out to discuss your requirements and get a personalized quote.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-2 md:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="flex gap-3 sm:gap-4"
            >
              <div className="flex-shrink-0">
                <User className="w-5 sm:w-6 h-5 sm:h-6 text-orange-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Contact Person</h3>
                <p className="text-sm text-slate-600">Mr. Abhijit Maruti Phadake</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-3 sm:gap-4"
            >
              <div className="flex-shrink-0">
                <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-orange-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Phone</h3>
                <p className="text-sm text-slate-600">+91-8446566926</p>
                <p className="text-xs sm:text-sm text-slate-600">Mon-Sat, 9AM - 6PM IST</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-3 sm:gap-4"
            >
              <div className="flex-shrink-0">
                <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-orange-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Email</h3>
                <p className="text-sm text-slate-600">abhiphadake01@gmail.com</p>
                <p className="text-sm text-slate-600">absproindiallp@gmail.com</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Response within 24 hours</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-3 sm:gap-4"
            >
              <div className="flex-shrink-0">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-orange-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Site Office</h3>
                <p className="text-sm text-slate-600">Tarangan Bldg, Mangalewadi,</p>
                <p className="text-sm text-slate-600">Near BSNL Office, Vadrage Road,</p>
                <p className="text-sm text-slate-600">Gadhinglaj 416502</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-3 sm:gap-4"
            >
              <div className="flex-shrink-0">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-orange-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Reg. Office</h3>
                <p className="text-sm text-slate-600">House no 66, at- Medhewadi,</p>
                <p className="text-sm text-slate-600">Post -Gavase, Tal- Ajara,</p>
                <p className="text-sm text-slate-600">Dist - Kolhapur 416505</p>
              </div>
            </motion.div>

            {/* Services List */}
            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-slate-100 rounded-lg border border-slate-200"
            >
              <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-sm sm:text-base">Our Services</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0" />
                  Residential Building Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0" />
                  Commercial Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0" />
                  Interior Design & Execution
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0" />
                  Project Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0" />
                  Construction Services
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 order-1 md:order-2"
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-100 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 text-slate-900 placeholder-slate-500 transition-colors text-sm"
                placeholder="Your name"
              />
            </motion.div>



            <motion.div variants={itemVariants}>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-100 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 text-slate-900 placeholder-slate-500 transition-colors text-sm"
                placeholder="+91-XXXXXXXXXX"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-100 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 text-slate-900 placeholder-slate-500 transition-colors resize-none text-sm"
                placeholder="Tell us about your project..."
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md text-sm sm:text-base"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
