'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Linkedin, Instagram, Youtube, Mail } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { label: 'Journey', id: 'journey' },
    { label: 'Speaking Topics', id: 'topics' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Book Sarah', id: 'booking' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, label: 'LinkedIn' },
    { name: 'Instagram', icon: Instagram, label: 'Instagram' },
    { name: 'YouTube', icon: Youtube, label: 'YouTube' },
    { name: 'Email', icon: Mail, label: 'Email' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            Sarah Mensah
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-neutral mt-4"
          >
            <div className="container-custom px-6 py-6 flex flex-col space-y-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-lg font-medium text-primary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="border-t border-neutral pt-4">
                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon
                    return (
                      <button
                        key={link.name}
                        aria-label={link.label}
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center
                                 hover:bg-accent hover:scale-110 transition-all duration-300 cursor-default"
                      >
                        <IconComponent className="w-5 h-5 text-primary" />
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
