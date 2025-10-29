'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { topics } from '@/data/content'
import VideoBackgroundSection from './VideoBackgroundSection'

export default function TopicsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <VideoBackgroundSection
      videoSrc="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-an-office-4630-large.mp4"
      fallbackImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
      overlay={true}
      overlayOpacity={0.85}
      className="section-padding"
    >
      <section id="topics" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="space-y-12 md:space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <motion.h2
                whileHover={{ scale: 1.02 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              >
                Her Talks Cover
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-accent mx-auto"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
              >
                Transformative keynotes tailored to inspire, challenge, and
                empower your audience
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {topics.map((topic, index) => {
                const IconComponent = topic.icon
                return (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      boxShadow: '0 20px 40px rgba(251, 191, 36, 0.2)',
                      transition: { duration: 0.3 }
                    }}
                    className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10
                             border border-white/20 hover:bg-white/20 hover:border-white/40
                             transition-all duration-300 cursor-pointer"
                  >
                    <div className="space-y-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center
                                  group-hover:bg-accent transition-all duration-300"
                      >
                        <IconComponent className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                      </motion.div>
                      <motion.h3
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="text-2xl md:text-3xl font-semibold text-white"
                      >
                        {topic.title}
                      </motion.h3>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {topic.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              variants={itemVariants}
              className="text-center pt-8"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('booking')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="bg-white text-primary px-10 py-5 rounded-full font-semibold text-lg
                         transition-all duration-300 hover:scale-105 hover:shadow-2xl
                         active:scale-95 inline-block"
              >
                Customize a Talk for Your Event
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </VideoBackgroundSection>
  )
}
