"use client"

import { useRef } from 'react'

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 25) {
      videoRef.current.currentTime = 0
      // make sure it continues playing after jumping back
      videoRef.current.play().catch(() => {}) 
    }
  }

  return (
    <div className="fixed inset-0 w-full h-full z-[-50] bg-[#050505] pointer-events-none">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover opacity-[55%] mix-blend-screen"
      >
        <source src="/bg-2.mp4" type="video/mp4" />
      </video>
      {/* Global Gradient Overlay to smooth out video contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
    </div>
  )
}
