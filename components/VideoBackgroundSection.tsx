'use client'

import { ReactNode } from 'react'

interface VideoBackgroundSectionProps {
  videoSrc: string
  fallbackImage: string
  children: ReactNode
  overlay?: boolean
  overlayOpacity?: number
  className?: string
}

export default function VideoBackgroundSection({
  videoSrc,
  fallbackImage,
  children,
  overlay = true,
  overlayOpacity = 0.5,
  className = '',
}: VideoBackgroundSectionProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={fallbackImage}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {overlay && (
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        )}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
