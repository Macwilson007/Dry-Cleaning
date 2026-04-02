'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'

export default function BookPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const service = formData.get('service')

    // Normally we would insert into Supabase here.
    // Uncomment once you have configured Supabase URL and ANON Key in .env.local
    /*
    const supabase = createClient()
    const { error } = await supabase.from('pickups').insert([
      { name, email, phone, service_requested: service }
    ])

    if (error) {
       setStatus('error')
    } else {
       setStatus('success')
    }
    */
    
    setTimeout(() => setStatus('success'), 1500) // Mock logic for display purposes
  }

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-6 md:px-16 flex justify-center z-10">
      <div className="w-full max-w-3xl flex flex-col items-center">
        
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h5 className="font-mono text-neutral-400 uppercase tracking-widest text-sm mb-4">
            Schedule a Pickup
          </h5>
          <h1 className="font-tnrc text-5xl md:text-7xl uppercase tracking-tighter">
            Speak to our <br/> Care Experts.
          </h1>
        </motion.div>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full p-12 border border-neutral-800 bg-neutral-900/50 rounded-2xl text-center flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-3xl font-tnrc">✓</div>
            <h2 className="font-tnrc text-4xl uppercase tracking-tighter">Request Received</h2>
            <p className="text-neutral-400 font-sans max-w-sm">One of our specialists will contact you shortly to confirm your scheduled pickup.</p>
            <button onClick={() => setStatus('idle')} className="mt-8 uppercase font-mono tracking-widest text-xs border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-colors">
              Book another
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-mono uppercase text-xs tracking-widest text-neutral-500">Full Name</label>
                <input required name="name" type="text" className="bg-transparent border-b border-neutral-700 py-3 text-white font-sans outline-none focus:border-white transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono uppercase text-xs tracking-widest text-neutral-500">Email Address</label>
                <input required name="email" type="email" className="bg-transparent border-b border-neutral-700 py-3 text-white font-sans outline-none focus:border-white transition-colors" placeholder="john@example.com" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono uppercase text-xs tracking-widest text-neutral-500">Phone Number</label>
              <input required name="phone" type="tel" className="bg-transparent border-b border-neutral-700 py-3 text-white font-sans outline-none focus:border-white transition-colors" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono uppercase text-xs tracking-widest text-neutral-500">Service Needed</label>
              <select required name="service" className="bg-[#0a0a0a] border-b border-neutral-700 py-3 text-neutral-300 font-sans outline-none focus:border-white transition-colors">
                <option value="dry-cleaning">Dry Cleaning</option>
                <option value="alterations">Alterations</option>
                <option value="leather-suede">Leather & Suede</option>
                <option value="wash-fold">Wash & Fold</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="mt-8 bg-white text-black font-tnrc uppercase tracking-tighter text-3xl py-6 rounded-none hover:bg-neutral-200 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Scheduling...' : 'Confirm Pickup'}
            </button>
          </motion.form>
        )}
      </div>
    </div>
  )
}
