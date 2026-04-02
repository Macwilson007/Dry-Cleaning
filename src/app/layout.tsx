import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackgroundVideo from '@/components/BackgroundVideo'

export const metadata: Metadata = {
  title: 'Dry Cleaning',
  description: 'Premium care for your finest garments. Schedule a pickup today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#050505] text-white antialiased">
      <body className="min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  )
}
