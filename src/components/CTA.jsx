export default function CTA() {
  return (
    <section id="download" className="py-20 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 0%, white 0, transparent 40%)'}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 p-10 text-center">
          <h2 className="text-3xl font-bold text-white">Start free and upgrade as you grow</h2>
          <p className="mt-3 text-blue-100">Download the app and create your first invoice in minutes.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white text-blue-700 px-6 py-3 font-medium hover:bg-blue-50">Download for Android</a>
            <a href="#" className="inline-flex items-center justify-center rounded-md border border-white/40 text-white px-6 py-3 font-medium hover:bg-white/10">Get Desktop</a>
          </div>
          <div className="mt-4 text-blue-100 text-sm">No credit card required • 24x7 data security</div>
        </div>
      </div>
    </section>
  )
}
