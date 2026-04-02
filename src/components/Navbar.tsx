'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 sm:px-16 py-6 transition-colors duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Link href="/" className="text-2xl font-tnrc uppercase tracking-tighter">
        Dry Cleaning
      </Link>
      
      <div className="hidden md:flex items-center gap-12 font-mono text-sm uppercase tracking-widest text-neutral-300">
        <Link href="#services" className="hover:text-white transition-colors duration-300">Services</Link>
        <Link href="#about" className="hover:text-white transition-colors duration-300">About</Link>
        <Link href="#reviews" className="hover:text-white transition-colors duration-300">Reviews</Link>
        <Link 
          href="/book" 
          className="border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
        >
          Book Pickup
        </Link>
      </div>
      
      {/* Mobile Menu Button placeholder */}
      <button className="md:hidden flex flex-col gap-2">
        <span className="w-8 h-px bg-white block"></span>
        <span className="w-8 h-px bg-white block"></span>
      </button>
    </motion.nav>
  )
}
