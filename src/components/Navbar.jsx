import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Why Udyogpati', href: '#why' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 text-white grid place-content-center font-bold">U</div>
            <span className="font-semibold text-gray-900">udyogpati.in</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#download" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
              <Download className="h-4 w-4" />
              Download App
            </a>
          </nav>
          <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-black/40" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold">udyogpati.in</span>
              <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-gray-700" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#download" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                <Download className="h-4 w-4" />
                Download App
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
