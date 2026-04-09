import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-950 border-r border-neutral-900 flex flex-col">
        <div className="p-6 border-b border-neutral-900">
          <Link href="/" className="font-tnrc text-3xl uppercase tracking-widest text-white hover:text-neutral-300 transition-colors">Dry Cleaning</Link>
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mt-2">Admin Portal</p>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2 font-mono text-sm tracking-widest uppercase">
          <Link href="/admin" className="p-3 rounded bg-neutral-900 text-white transition-colors">Overview</Link>
          <Link href="/admin/orders" className="p-3 rounded hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors">Orders</Link>
          <Link href="/admin/customers" className="p-3 rounded hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors">Customers</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="h-20 border-b border-neutral-900 bg-neutral-950 flex items-center justify-between px-8">
          <h1 className="font-mono text-xs tracking-widest uppercase text-neutral-400">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center font-tnrc">A</div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
