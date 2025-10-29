'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight
        const scrollPosition = window.scrollY

        // Show button when scrolled past hero section
        setIsVisible(scrollPosition > heroBottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-accent
                     flex items-center justify-center shadow-lg
                     hover:scale-110 hover:shadow-xl transition-all duration-300
                     active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-white" strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
