'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-1"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Image src="/logo.png" alt="ABSPRO Logo" width={40} height={40} className="w-9 sm:w-10 h-9 sm:h-10 object-contain" />
              <span className="font-bold text-lg sm:text-xl">ABSPRO</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Premium building and development solutions for exceptional living and working spaces.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-orange-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#team" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <span className="text-slate-400">Residential Design</span>
              </li>
              <li>
                <span className="text-slate-400">Commercial Development</span>
              </li>
              <li>
                <span className="text-slate-400">Interior Design</span>
              </li>
              <li>
                <span className="text-slate-400">Project Management</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-orange-400 flex-shrink-0 hidden sm:inline" />
                <Phone size={12} className="text-orange-400 flex-shrink-0 sm:hidden" />
                <span className="text-slate-400 truncate">+91-9527973969</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-orange-400 flex-shrink-0 hidden sm:inline" />
                <Mail size={12} className="text-orange-400 flex-shrink-0 sm:hidden" />
                <span className="text-slate-400 truncate">srikant@yahoo.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-400 flex-shrink-0 hidden sm:inline" />
                <MapPin size={12} className="text-orange-400 flex-shrink-0 sm:hidden" />
                <span className="text-slate-400">India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mb-6 sm:mb-8 mt-8 sm:mt-12" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} ABSPRO India LLP. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-2 sm:gap-4">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Linkedin, label: 'LinkedIn' },
            ].map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-slate-800 hover:bg-orange-600 flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label={social.label}
                >
                  <IconComponent size={16} className="text-white sm:hidden" />
                  <IconComponent size={18} className="text-white hidden sm:block" />
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
