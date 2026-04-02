export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-tnrc text-4xl uppercase tracking-tight mb-2">Welcome Back</h2>
        <p className="font-mono text-sm text-neutral-500 uppercase tracking-widest">Here is what is happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6">
          <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Total Orders</h3>
          <p className="font-tnrc text-5xl">0</p>
        </div>
        <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6">
          <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Pending Pickups</h3>
          <p className="font-tnrc text-5xl">0</p>
        </div>
        <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6">
          <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Revenue (NGN)</h3>
          <p className="font-tnrc text-5xl">₦0.00</p>
        </div>
      </div>

      <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 mt-8">
        <h3 className="font-mono text-sm text-neutral-400 uppercase tracking-widest mb-6">Recent Orders</h3>
        <div className="text-center py-12 text-neutral-600 font-mono text-sm uppercase">
          No orders found.
        </div>
      </div>
    </div>
  )
}
