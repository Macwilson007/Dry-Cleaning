import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-black/80 backdrop-blur-md text-white pt-24 pb-12 px-8 md:px-16 border-t border-neutral-800 z-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        
        <div className="flex flex-col gap-6">
          <h2 className="font-tnrc text-3xl uppercase tracking-tight">Dry Cleaning</h2>
          <div className="flex flex-col font-mono text-sm tracking-widest uppercase text-neutral-500 gap-2">
            <a href="mailto:contact@drycleaning.xyz" className="hover:text-white transition-colors">contact@drycleaning.xyz</a>
            <p>123 Premiere Ave, NY 10001</p>
          </div>
        </div>

        <div className="flex gap-12 font-mono text-sm tracking-widest uppercase text-neutral-400">
          <div className="flex flex-col gap-4">
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="/book" className="hover:text-white transition-colors">Book</Link>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-neutral-800 flex justify-between items-center text-xs font-mono text-neutral-600 uppercase tracking-widest">
        <p>© 2026 Dry Cleaning. All rights reserved.</p>
        <p className="flex items-center gap-2">Built by Antigravity</p>
      </div>
    </footer>
  )
}
