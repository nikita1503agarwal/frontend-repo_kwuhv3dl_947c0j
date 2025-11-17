import { FileText, Package, TrendingUp, Users, IndianRupee, Share2, Smartphone, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'GST Billing',
    desc: 'Generate GST invoices, e-way bills, and share on WhatsApp in one click.'
  },
  {
    icon: Package,
    title: 'Inventory & Stock',
    desc: 'Manage items, batches, barcodes, and low-stock alerts with ease.'
  },
  {
    icon: TrendingUp,
    title: 'Reports & Analytics',
    desc: 'GST reports, profit & loss, party statements, and more insights.'
  },
  {
    icon: Users,
    title: 'Parties & CRM',
    desc: 'Maintain customer/supplier ledger, outstanding reminders, and loyalty.'
  },
  {
    icon: IndianRupee,
    title: 'Payments & UPI',
    desc: 'Collect payments with UPI QR, send payment links, and auto reconcile.'
  },
  {
    icon: Share2,
    title: 'WhatsApp & Email',
    desc: 'Send invoices, estimates, and receipts instantly to customers.'
  },
  {
    icon: Smartphone,
    title: 'Mobile + Desktop',
    desc: 'Works beautifully on Android and desktop with secure cloud backup.'
  },
  {
    icon: ShieldCheck,
    title: 'Data Security',
    desc: 'Your business data is encrypted and backed up with version history.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Everything you need to grow</h2>
          <p className="mt-3 text-gray-600">Built for wholesalers, retailers, service businesses, and distributors.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-content-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
