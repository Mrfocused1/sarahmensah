'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { journeyContent } from '@/data/content'
import { ArrowRight } from 'lucide-react'
import { LinkPreview } from './LinkPreview'

export default function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="journey" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16 md:space-y-24"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.h2
              whileHover={{ scale: 1.02 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
            >
              {journeyContent.headline}
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-accent mx-auto"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-8">
            {journeyContent.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="flex gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 mt-1">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <LinkPreview
                    url="#"
                    isStatic
                    imageSrc={section.previewImage}
                    width={400}
                    height={300}
                    isVideo={section.isVideo}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-primary group-hover:text-accent transition-colors">
                      {section.title}
                    </h3>
                  </LinkPreview>
                  <p className="text-gray-600 leading-relaxed">{section.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 md:p-12 text-center cursor-pointer"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-2xl md:text-3xl font-light text-primary italic"
            >
              &quot;Every setback was a setup for a comeback. Every challenge, a
              classroom. Every barrier, a breakthrough waiting to happen.&quot;
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-4 text-lg text-gray-600"
            >
              — Sarah Mensah
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
