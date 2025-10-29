'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingPage from '@/components/LoadingPage'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import VideoSection from '@/components/VideoSection'
import JourneySection from '@/components/JourneySection'
import TopicsSection from '@/components/TopicsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingPage onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="relative">
          <Navbar />
          <Hero />
          <VideoSection />
          <JourneySection />
          <TopicsSection />
          <TestimonialsSection />
          <BookingForm />
          <Footer />
          <ScrollToTop />
        </main>
      )}
    </>
  )
}
