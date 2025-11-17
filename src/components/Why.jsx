export default function Why() {
  const points = [
    'Designed for Indian GST and e-invoicing norms',
    'Fast, simple UI that your team can learn in minutes',
    'Works online and offline with auto-sync',
    'Priority support in English, Hindi and regional languages'
  ]

  return (
    <section id="why" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold text-gray-900">Why businesses choose Udyogpati</h2>
            <p className="mt-3 text-gray-600">From first bill to full-scale accounting — we grow with you.</p>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-gray-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: '10 Lakh+', sub: 'Businesses' },
                  { label: '4.8/5', sub: 'Average rating' },
                  { label: '24x7', sub: 'Backup & Security' },
                  { label: 'Multi', sub: 'Device access' },
                ].map((s) => (
                  <div key={s.sub} className="text-center p-4 rounded-xl bg-indigo-50">
                    <div className="text-2xl font-bold text-indigo-700">{s.label}</div>
                    <div className="text-sm text-indigo-700/80">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
