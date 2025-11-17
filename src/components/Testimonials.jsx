export default function Testimonials() {
  const items = [
    {
      quote: 'Switching to Udyogpati made our billing 3x faster. WhatsApp sharing is a lifesaver!',
      name: 'Rahul Mehta',
      role: 'Electronics Retailer, Surat'
    },
    {
      quote: 'GST filing is so much easier now. The reports are clear and accurate.',
      name: 'Neha Sharma',
      role: 'Distributor, Jaipur'
    },
    {
      quote: 'Love the simplicity. My team learnt it in a day and we were live immediately.',
      name: 'Amit Kumar',
      role: 'Auto Parts, Patna'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Loved by business owners across India</h2>
          <p className="mt-3 text-gray-600">Real stories from real customers.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <p className="text-gray-800">“{t.quote}”</p>
              <div className="mt-4 text-sm text-gray-600">{t.name} • {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
