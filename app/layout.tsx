import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sarah Mensah – Speaker on Resilience, Leadership & Transformation',
  description: 'Sarah Mensah turned her journey from Congo to KPMG boardrooms into stories that transform audiences. Book Sarah for speaking engagements on resilience, leadership, and women empowerment.',
  keywords: 'Sarah Mensah, inspirational speaker, resilience speaker, leadership speaker, women empowerment, KPMG, transformation, keynote speaker',
  authors: [{ name: 'Sarah Mensah' }],
  openGraph: {
    title: 'Sarah Mensah – Speaker on Resilience, Leadership & Transformation',
    description: 'From Congo to Boardroom: The Art of Resilience',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarah Mensah – Speaker on Resilience, Leadership & Transformation',
    description: 'From Congo to Boardroom: The Art of Resilience',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
