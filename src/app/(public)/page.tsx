'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Hero Parallax Elements
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col justify-end items-center px-6 pt-48 pb-24 md:pb-32 z-10">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-[-1] w-full h-[120vh] -top-[10vh]"
        />

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-7xl mx-auto flex flex-col gap-6"
        >
          <p className="font-mono uppercase tracking-widest text-sm md:text-base text-neutral-400">
            / Scroll Down
          </p>
          <h1 className="font-tnrc text-5xl md:text-7xl lg:text-[7rem] leading-[0.85] tracking-tighter uppercase text-white drop-shadow-lg">
            Impeccable <br /> Garment Care
          </h1>
          <p className="text-xl md:text-3xl max-w-2xl font-light text-neutral-300 mt-4 leading-relaxed">
            We restore, preserve, and elevate your wardrobe with state-of-the-art dry cleaning processes.
          </p>
        </motion.div>
      </section>

      {/* 2. ABOUT AGENCY (Cleaning) */}
      <section id="about" className="relative min-h-[80vh] w-full bg-black/30 flex items-center px-6 py-24 md:py-32 z-20">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h5 className="font-mono text-xs md:text-sm text-neutral-500 uppercase tracking-[0.3em] mb-20 md:mb-24">
              Our Expertise
            </h5>
            <h2 className="font-tnrc text-3xl md:text-5xl lg:text-6xl leading-none uppercase tracking-tighter text-neutral-100 max-w-5xl">
              We specialize in garment revival for the modern era. From everyday staples to <span className="text-outline">haute couture</span>, we treat every fiber with unmatched precision.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 3. CLIENTS / SERVICES */}
      <section id="services" className="relative w-full bg-white/95 backdrop-blur-xl text-black px-6 py-32 md:py-48 z-20 rounded-t-[3rem] -mt-10 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto">
          <h5 className="font-mono text-xs md:text-sm text-neutral-400 uppercase tracking-[0.3em] mb-12">
            Services
          </h5>
          <h2 className="font-tnrc text-4xl md:text-6xl leading-none uppercase tracking-tighter mb-16">
            Trusted by the <br/> Most Discerning.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                <Image src="/images/dry_cleaning.png" alt="Premium Dry Cleaning in Nigeria" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h3 className="text-2xl md:text-4xl font-tnrc uppercase tracking-tighter mb-4 group-hover:pl-4 transition-all duration-300">Dry Cleaning</h3>
              <p className="text-neutral-600 font-sans text-lg md:text-xl">Gentle, eco-friendly solvents that remove deep stains without damaging delicate natural or synthetic fibers.</p>
              <hr className="mt-8 border-neutral-300" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                <Image src="/images/alterations.png" alt="Premium Alterations and Tailoring" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h3 className="text-2xl md:text-4xl font-tnrc uppercase tracking-tighter mb-4 group-hover:pl-4 transition-all duration-300">Alterations</h3>
              <p className="text-neutral-600 font-sans text-lg md:text-xl">Expert in-house tailoring from simple hemming to complete garment restructuring for the perfect fit.</p>
              <hr className="mt-8 border-neutral-300" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                <Image src="/images/leather_suede.png" alt="Leather and Suede Restoration" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h3 className="text-2xl md:text-4xl font-tnrc uppercase tracking-tighter mb-4 group-hover:pl-4 transition-all duration-300">Leather & Suede</h3>
              <p className="text-neutral-600 font-sans text-lg md:text-xl">Specialized conditioning and cleaning to restore the suppleness and rich color of premium leathers.</p>
              <hr className="mt-8 border-neutral-300" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                <Image src="/images/wash_fold.png" alt="Premium Wash and Fold Laundry" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h3 className="text-2xl md:text-4xl font-tnrc uppercase tracking-tighter mb-4 group-hover:pl-4 transition-all duration-300">Wash & Fold</h3>
              <p className="text-neutral-600 font-sans text-lg md:text-xl">Everyday laundry washed with premium hypoallergenic detergents, dried carefully, and perfectly folded.</p>
              <hr className="mt-8 border-neutral-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3.5 REVIEWS SECTION */}
      <section id="reviews" className="relative w-full bg-black/60 backdrop-blur-md text-white px-6 py-32 md:py-48 z-20">
        <div className="w-full max-w-7xl mx-auto">
          <h5 className="font-mono text-xs md:text-sm text-neutral-500 uppercase tracking-[0.3em] mb-12">
            Client Testimonials
          </h5>
          <h2 className="font-tnrc text-3xl md:text-5xl lg:text-6xl leading-none uppercase tracking-tighter mb-24 max-w-4xl">
            Don't just take our word for it.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[ 
              { name: "Sarah J.", review: "My silk dress was stained, and I thought it was ruined. They restored it perfectly like it was brand new." },
              { name: "Michael T.", review: "Their leather conditioning service brought my vintage jacket back to life. Truly impeccable care." },
              { name: "Elena R.", review: "The alterations were incredibly precise. They treated my wedding gown with the utmost respect." }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-neutral-900/50 p-8 border border-neutral-800 rounded-2xl flex flex-col justify-between"
              >
                <p className="font-sans text-lg text-neutral-300 leading-relaxed mb-8">"{testimonial.review}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-xl text-neutral-200">
                    <span className="font-tnrc pt-1">{testimonial.name.charAt(0)}</span>
                  </div>
                  <p className="font-mono uppercase text-sm tracking-widest text-neutral-400">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION like Ascend */}
      <section className="relative w-full min-h-screen bg-black/70 backdrop-blur-sm text-white flex flex-col justify-center items-center px-6 py-32 text-center z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-col items-center"
        >
          <h4 className="font-mono text-neutral-400 uppercase tracking-widest text-xs md:text-sm mb-8">
            Ready to elevate your wardrobe?
          </h4>
          <h3 className="font-tnrc text-4xl md:text-[6rem] leading-[0.8] tracking-tighter uppercase max-w-5xl">
            Book your <span className="text-outline">first pickup</span> today.
          </h3>
          <a href="/book" className="mt-16 inline-flex items-center justify-center p-1 border-2 border-white rounded-full overflow-hidden group">
            <span className="bg-white text-black px-12 py-6 rounded-full font-tnrc text-2xl uppercase tracking-widest group-hover:bg-transparent group-hover:text-white transition-colors duration-500">
              Schedule Now
            </span>
          </a>
        </motion.div>
      </section>

    </div>
  )
}
