'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToJourney = () => {
    const element = document.getElementById('journey')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        <div
          className="lg:hidden absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("/images/Generated Image October 29, 2025 - 6_55PM.png")`
          }}
        />

        <div
          className="hidden lg:block absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("/images/Generated Image October 29, 2025 - 6_17PM.png")`,
            transform: 'scaleX(-1)'
          }}
        />

        <div className="absolute inset-0 bg-black" style={{ opacity: 0.6 }} />
      </div>

      <div className="relative z-10">
        <div id="hero" className="min-h-screen flex items-center justify-center lg:justify-end section-padding">
          <div className="text-white w-full px-6 lg:max-w-2xl lg:mr-0 lg:pr-0 mt-[200px] lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 md:space-y-8 text-center"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm md:text-base text-accent font-bold mb-4 cursor-default"
                >
                  From Congo to KPMG Boardrooms
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-base md:text-lg lg:text-2xl xl:text-3xl font-bold leading-tight uppercase"
                >
                  Helping Organizations Thrive Through Resilience & Leadership.
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-base md:text-lg lg:text-xl font-bold leading-relaxed"
              >
                Sarah Mensah turned her journey of charity work, audit and
                leadership into stories that transform audiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              >
                <motion.button
                  onClick={scrollToBooking}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Book Sarah to Speak
                </motion.button>
                <motion.button
                  onClick={scrollToJourney}
                  whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#111111' }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 inline-block"
                >
                  Discover Her Journey
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <button
                onClick={scrollToJourney}
                className="animate-bounce text-white hover:text-accent transition-colors"
                aria-label="Scroll down"
              >
                <ChevronDown size={40} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
