export default function FAQ() {
  const faqs = [
    {
      q: 'Is Udyogpati free to use?',
      a: 'Yes, you can start for free with unlimited invoices. Advanced features are available on paid plans.'
    },
    {
      q: 'Does it work with GST and e-invoicing?',
      a: 'Absolutely. Udyogpati is built for Indian GST, e-way bills, and e-invoicing compliance.'
    },
    {
      q: 'Can I access my data on multiple devices?',
      a: 'Yes, with cloud backup you can securely access your data across devices.'
    },
    {
      q: 'What about support?',
      a: 'We offer priority support via chat, email and phone in multiple languages.'
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-gray-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="list-none flex items-center justify-between cursor-pointer">
                <span className="font-medium text-gray-900">{f.q}</span>
                <span className="text-sm text-gray-500 group-open:hidden">Show</span>
                <span className="text-sm text-gray-500 hidden group-open:inline">Hide</span>
              </summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
