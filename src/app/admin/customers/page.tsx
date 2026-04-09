export default function AdminCustomers() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-tnrc text-3xl uppercase tracking-tight mb-2">Customer Directory</h2>
        <p className="font-mono text-sm text-neutral-500 uppercase tracking-widest">Manage your customer database and profiles.</p>
      </div>

      <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 mt-4">
        <div className="text-center py-24 text-neutral-600 font-mono text-sm uppercase border border-dashed border-neutral-900 rounded-lg">
          No customers registered yet.
        </div>
      </div>
    </div>
  )
}
