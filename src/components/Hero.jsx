export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              GST Billing • Inventory • Accounting • WhatsApp Sharing
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Run your business smarter with Udyogpati
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Simple, fast billing and inventory software built for Indian businesses. Create professional invoices, track stock, and get paid faster — all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#download" className="inline-flex justify-center items-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors">Download Free</a>
              <a href="#features" className="inline-flex justify-center items-center rounded-md border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors">See Features</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">No credit card needed • Works offline • Data backup</div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-xl shadow-xl ring-1 ring-gray-100 p-4">
              <img src="/mock-dashboard.png" alt="Udyogpati Dashboard" className="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
