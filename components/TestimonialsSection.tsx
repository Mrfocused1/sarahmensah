'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { testimonials, impactStats } from '@/data/content'
import { Quote, MapPin } from 'lucide-react'

function CountUpAnimation({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: 'easeOut',
      })

      return controls.stop
    }
  }, [isInView, target, count])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest.toString() + suffix)
    })

    return () => unsubscribe()
  }, [rounded, suffix])

  return <span ref={ref}>{displayValue}</span>
}

export default function TestimonialsSection() {
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
    <section
      id="testimonials"
      className="relative"
      ref={ref}
    >
      <div className="grid md:grid-cols-2">
        {/* Left Side - Black background with yellow text (Impact) */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="bg-black text-accent py-12 px-8 md:px-12 lg:px-16 flex items-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          />

          <div className="w-full relative z-10 space-y-8">
            <motion.div variants={itemVariants} className="text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
                Impact
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-accent mt-4"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2 bg-accent/5 rounded-2xl p-5 border border-accent/20"
              >
                <div className="text-5xl md:text-6xl font-bold text-accent">
                  <CountUpAnimation target={10000} suffix="+" />
                </div>
                <div className="text-lg text-accent/90 font-medium">Audience Members Inspired</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2 bg-accent/5 rounded-2xl p-5 border border-accent/20"
              >
                <div className="text-5xl md:text-6xl font-bold text-accent">
                  <CountUpAnimation target={150} suffix="+" />
                </div>
                <div className="text-lg text-accent/90 font-medium">Speaking Engagements</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2 bg-accent/5 rounded-2xl p-5 border border-accent/20"
              >
                <div className="text-5xl md:text-6xl font-bold text-accent">
                  <CountUpAnimation target={impactStats.cities.length} />
                </div>
                <div className="text-lg text-accent/90 font-medium">Cities Worldwide</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center space-y-3 bg-accent/5 rounded-2xl p-4 border border-accent/20"
            >
              <div className="flex items-center justify-center gap-2 text-accent/90">
                <MapPin className="w-5 h-5 text-accent" />
                <p className="text-lg">
                  Having spoken to audiences in{' '}
                  {impactStats.cities.map((city, index) => (
                    <span key={city}>
                      <span className="font-semibold text-accent">{city}</span>
                      {index < impactStats.cities.length - 2 && ', '}
                      {index === impactStats.cities.length - 2 && ' and '}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Yellow background with black text (Testimonials) */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="bg-accent text-black py-12 px-8 md:px-12 lg:px-16 flex items-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -top-10 -right-10 w-40 h-40 border-4 border-black/5 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -bottom-10 -left-10 w-60 h-60 border-4 border-black/5 rounded-full"
          />

          <div className="w-full relative z-10 space-y-8">
            <motion.div variants={itemVariants} className="text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Testimonials
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-black mt-4"
              />
            </motion.div>

            <div className="space-y-5">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    transition: { duration: 0.2 }
                  }}
                  className="bg-black/10 rounded-2xl p-5 md:p-6 border-2 border-black/20 hover:border-black/40 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                    >
                      <Quote className="w-10 h-10 text-black/40" />
                    </motion.div>
                    <p className="text-base md:text-lg text-black leading-relaxed italic font-medium">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
                      className="flex items-center gap-3 pt-3 border-t-2 border-black/20"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-full bg-black text-accent flex items-center justify-center font-bold text-xl"
                      >
                        {testimonial.name.charAt(0)}
                      </motion.div>
                      <div>
                        <div className="font-bold text-black text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-black/70 font-medium">
                          {testimonial.role}, {testimonial.organisation}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
