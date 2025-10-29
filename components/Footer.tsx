'use client'

import { Linkedin, Instagram, Youtube, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/sarahmensah',
      label: 'Connect on LinkedIn',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/sarahmensah',
      label: 'Follow on Instagram',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@sarahmensah',
      label: 'Watch on YouTube',
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-primary text-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">Sarah Mensah</h3>
              <p className="text-white/70 leading-relaxed">
                Transforming audiences through stories of resilience, leadership,
                and empowerment.
              </p>
              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <button
                      key={link.name}
                      aria-label={link.label}
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center
                               hover:bg-accent hover:scale-110 transition-all duration-300 cursor-default"
                    >
                      <IconComponent className="w-5 h-5" />
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'Journey', id: 'journey' },
                  { label: 'Speaking Topics', id: 'topics' },
                  { label: 'Testimonials', id: 'testimonials' },
                  { label: 'Book Sarah', id: 'booking' },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get in Touch</h4>
              <div className="space-y-3 text-white/70">
                <div
                  className="flex items-center gap-3 hover:text-accent transition-colors group cursor-default"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  bookings@sarahmensah.com
                </div>
                <p className="text-sm leading-relaxed">
                  Available for keynote speeches, panel discussions, workshops, and
                  corporate events worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-white/60 text-sm">
            <p>
              &copy; {currentYear} Sarah Mensah. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
