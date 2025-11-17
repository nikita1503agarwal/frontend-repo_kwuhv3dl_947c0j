export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      desc: 'For new businesses getting started',
      features: ['Unlimited invoices', 'Basic inventory', 'WhatsApp sharing', 'Local backup']
    },
    {
      name: 'Growth',
      price: '₹1999/yr',
      highlight: true,
      desc: 'For growing teams who need more',
      features: ['All Starter features', 'Advanced inventory', 'E-way bill & e-invoice', 'Cloud backup & multi-device']
    },
    {
      name: 'Business',
      price: '₹4999/yr',
      desc: 'For established businesses',
      features: ['All Growth features', 'Accounting & GST reports', 'Priority support', 'Custom branding']
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Upgrade when you grow.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlight ? 'border-blue-600 ring-2 ring-blue-100' : 'border-gray-200'} p-6 bg-white shadow-sm`}>
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{t.desc}</p>
                </div>
                <div className="text-2xl font-bold text-gray-900">{t.price}</div>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#download" className={`block text-center rounded-md px-4 py-2 font-medium ${t.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>Get Started</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
