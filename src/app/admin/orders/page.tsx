export default function AdminOrders() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-tnrc text-4xl uppercase tracking-tight mb-2">Order Management</h2>
        <p className="font-mono text-sm text-neutral-500 uppercase tracking-widest">View, update, and manage incoming pickups and deliveries.</p>
      </div>

      <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 mt-4">
        <div className="flex justify-between items-center mb-8 border-b border-neutral-900 pb-4">
          <h3 className="font-mono text-sm text-neutral-400 uppercase tracking-widest">All Orders</h3>
          <button className="bg-white text-black font-mono text-xs uppercase tracking-widest px-4 py-2 rounded hover:bg-neutral-200 transition-colors">
            + Create Order
          </button>
        </div>
        
        <div className="text-center py-24 text-neutral-600 font-mono text-sm uppercase border border-dashed border-neutral-900 rounded-lg">
          No active orders found in the database.
        </div>
      </div>
    </div>
  )
}
