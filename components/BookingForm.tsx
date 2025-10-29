'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, Mail, User, Building, Calendar, MessageSquare } from 'lucide-react'

interface FormData {
  name: string
  email: string
  organisation: string
  eventDate: string
  message: string
}

export default function BookingForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="booking" className="section-padding bg-white" ref={ref}>
      <div className="container-custom max-w-2xl">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              Ready to Bring Sarah to Your Stage?
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Contact us to check availability and tailor your session
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            {isSubmitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-semibold text-green-800">
                  Thank You!
                </h3>
                <p className="text-lg text-green-700">
                  Your inquiry has been received. We'll get back to you within 24
                  hours to discuss bringing Sarah to your event.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                    >
                      <User className="w-4 h-4 text-accent" />
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                    >
                      <Mail className="w-4 h-4 text-accent" />
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="organisation"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                    >
                      <Building className="w-4 h-4 text-accent" />
                      Organisation *
                    </label>
                    <input
                      id="organisation"
                      type="text"
                      {...register('organisation', {
                        required: 'Organisation is required',
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="Your Company Name"
                    />
                    {errors.organisation && (
                      <p className="text-sm text-red-500">
                        {errors.organisation.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="eventDate"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                    >
                      <Calendar className="w-4 h-4 text-accent" />
                      Event Date *
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      {...register('eventDate', {
                        required: 'Event date is required',
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                    />
                    {errors.eventDate && (
                      <p className="text-sm text-red-500">
                        {errors.eventDate.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                  >
                    <MessageSquare className="w-4 h-4 text-accent" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', {
                      required: 'Please provide details about your event',
                      minLength: {
                        value: 20,
                        message: 'Please provide at least 20 characters',
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your event, audience size, and what you hope Sarah will speak about..."
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center text-gray-600 space-y-2"
          >
            <p className="text-lg">
              Prefer to email directly?{' '}
              <a
                href="mailto:bookings@sarahmensah.com"
                className="text-accent hover:underline font-semibold"
              >
                bookings@sarahmensah.com
              </a>
            </p>
            <p className="text-sm">
              We typically respond within 24 hours on business days
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
