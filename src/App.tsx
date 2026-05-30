import { useState, useCallback, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Booking from './components/Booking'
import Location from './components/Location'
import FAQ from './components/FAQ'
import GiftCards from './components/GiftCards'
import Loyalty from './components/Loyalty'
import Promotions from './components/Promotions'
import Footer from './components/Footer'
import StickyBookButton from './components/StickyBookButton'

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>()
  const [preselectedBarber, setPreselectedBarber] = useState<string>()
  const [bookingKey, setBookingKey] = useState(0)
  const bookingRef = useRef<HTMLDivElement>(null)

  const scrollToBooking = useCallback((serviceId?: string, barberId?: string) => {
    if (serviceId) setPreselectedService(serviceId)
    if (barberId) setPreselectedBarber(barberId)
    setBookingKey((k) => k + 1)
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-charcoal"
      >
        Skip to content
      </a>

      <Navbar onBookClick={() => scrollToBooking()} />

      <main id="main-content">
        <Hero onBookClick={() => scrollToBooking()} />
        <About />
        <Services onBookClick={(id) => scrollToBooking(id)} />
        <Team onBookClick={(serviceId, barberId) => scrollToBooking(serviceId, barberId)} />
        <Gallery />
        <Reviews />
        <Promotions onBookClick={() => scrollToBooking()} />
        <div ref={bookingRef}>
          <Booking
            key={bookingKey}
            preselectedService={preselectedService}
            preselectedBarber={preselectedBarber}
          />
        </div>
        <GiftCards />
        <Loyalty />
        <FAQ />
        <Location />
      </main>

      <Footer />
      <StickyBookButton onClick={() => scrollToBooking()} />

      {/* Spacer for sticky mobile button */}
      <div className="h-20 sm:hidden" aria-hidden="true" />
    </div>
  )
}
