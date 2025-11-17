import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Why from './components/Why'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Why />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 text-white grid place-content-center font-bold">U</div>
              <span>udyogpati.in</span>
            </div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Udyogpati. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
